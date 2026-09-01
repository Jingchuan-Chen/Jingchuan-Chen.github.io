import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ORCID = '0000-0002-5200-982X';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataPath = path.join(root, 'data', 'publications.json');
const headers = {
  Accept: 'application/json',
  'User-Agent': 'JingchuanChenAcademicSite/1.0 (mailto:jingchuanchen@tamu.edu)',
};

async function getJson(url) {
  const response = await fetch(url, { headers });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  return response.json();
}

function orcidDois(payload) {
  const dois = new Set();
  for (const group of payload.group ?? []) {
    for (const work of group['work-summary'] ?? []) {
      for (const id of work['external-ids']?.['external-id'] ?? []) {
        if (id['external-id-type']?.toLowerCase() === 'doi' && id['external-id-value']) {
          dois.add(id['external-id-value'].trim().toLowerCase());
        }
      }
    }
  }
  return dois;
}

function yearOf(message) {
  return String(message.published?.['date-parts']?.[0]?.[0]
    ?? message['published-print']?.['date-parts']?.[0]?.[0]
    ?? message['published-online']?.['date-parts']?.[0]?.[0]
    ?? '');
}

function authorName(author) {
  const authorOrcid = String(author.ORCID ?? '').toUpperCase();
  if (authorOrcid.includes(ORCID)) return 'Jingchuan Chen';
  const name = `${author.given ?? ''} ${author.family ?? ''}`.trim();
  return /jingchuan\s+chen/i.test(name) ? 'Jingchuan Chen' : name;
}

function excludedDoi(doi) {
  return doi.endsWith('-supplement') || doi.includes('/egusphere-egu');
}

function titleTokens(title) {
  return new Set(title.toLowerCase().replace(/[^a-z0-9]+/g, ' ').split(' ').filter((word) => word.length > 2 && word !== 'the'));
}

function titleSimilarity(a, b) {
  const left = titleTokens(a);
  const right = titleTokens(b);
  const shared = [...left].filter((word) => right.has(word)).length;
  return shared / Math.max(left.size, right.size, 1);
}

function recordQuality(paper) {
  const discussionDoi = /\/(egusphere|acp)-20\d{2}-/.test(paper.doi);
  return (paper.journal ? 2 : 0) + (discussionDoi ? 0 : 2);
}

async function crossrefRecord(doi, existing) {
  try {
    const payload = await getJson(`https://api.crossref.org/works/${encodeURIComponent(doi)}`);
    const message = payload.message;
    const authors = (message.author ?? []).map(authorName).filter(Boolean);
    return {
      year: yearOf(message) || existing?.year || '',
      title: message.title?.[0] || existing?.title || doi,
      journal: message['container-title']?.[0] || existing?.journal || '',
      doi,
      authors: authors.some((name) => name === 'Jingchuan Chen') ? authors : (existing?.authors ?? authors),
    };
  } catch (error) {
    if (existing) {
      console.warn(`Keeping existing metadata for ${doi}: ${error.message}`);
      return existing;
    }
    console.warn(`Skipping ${doi}: ${error.message}`);
    return null;
  }
}

const current = JSON.parse(await readFile(dataPath, 'utf8'));
const existingByDoi = new Map(current.all.filter((paper) => !excludedDoi(paper.doi.toLowerCase())).map((paper) => [paper.doi.toLowerCase(), paper]));
const orcid = await getJson(`https://pub.orcid.org/v3.0/${ORCID}/works`);
const dois = orcidDois(orcid);

// Preserve manually curated records even if ORCID temporarily omits one.
for (const doi of existingByDoi.keys()) dois.add(doi);

const all = [];
for (const doi of dois) {
  if (excludedDoi(doi)) continue;
  const paper = await crossrefRecord(doi, existingByDoi.get(doi));
  if (paper) all.push(paper);
}

const deduplicated = [];
for (const paper of all) {
  const matchIndex = deduplicated.findIndex((candidate) => titleSimilarity(candidate.title, paper.title) >= 0.82);
  if (matchIndex < 0) deduplicated.push(paper);
  else if (recordQuality(paper) > recordQuality(deduplicated[matchIndex])) deduplicated[matchIndex] = paper;
}

deduplicated.sort((a, b) => Number(b.year) - Number(a.year) || a.title.localeCompare(b.title));
await writeFile(dataPath, `${JSON.stringify({ selected: current.selected, all: deduplicated }, null, 2)}\n`, 'utf8');
console.log(`Updated ${deduplicated.length} publication records from ORCID and Crossref.`);
