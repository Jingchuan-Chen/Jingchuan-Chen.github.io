# Website maintenance

This repository stores the source of Jingchuan Chen's academic website. GitHub Pages is intentionally not enabled yet.

## Add or edit News

Edit `data/news.json`. Each record contains:

- `date`: ISO date used for automatic reverse-chronological sorting (`YYYY-MM-DD`)
- `displayDate`: short date shown on the website
- `en` and `zh`: English and Chinese text
- `link`: URL or `null`

The website displays the newest five items. Older items automatically appear under “View earlier news”.

## Edit publications

Edit `data/publications.json`:

- `selected` controls the four highlighted publications.
- `all` controls the expandable complete list.

To update from ORCID and Crossref locally, run:

```bash
node scripts/sync-publications.mjs
```

On GitHub, open **Actions → Sync publications → Run workflow** for a manual update. The workflow also runs on 1 January, April, July, and October. It updates source data only and does not publish the website.

## Change fonts and sizes

Open `app/globals.css` and edit the variables at the beginning of the `:root` block. The variables prefixed with `--type-` control the main text sizes; `--font-sans` and `--font-serif` control font families.

## Work from another computer

Clone this repository, install Node.js 22 and pnpm, then run `pnpm install` and `pnpm run dev`. Commit and push changes when finished. The office computer does not need to remain on.
