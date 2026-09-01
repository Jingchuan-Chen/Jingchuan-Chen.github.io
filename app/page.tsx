'use client';

import { ArrowDownRight, ArrowUpRight, Languages, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import newsData from '../data/news.json';
import publicationData from '../data/publications.json';

type Lang = 'en' | 'zh';

const research = [
  {
    n: '01',
    en: 'Size-resolved East Asian dust INPs',
    zh: '东亚沙尘冰核的粒径分布',
    enBody: 'The first size-resolved measurements of airborne Asian dust INPs, linking particle diameter to INP abundance and ice-active-site density across −35 to −6 °C.',
    zhBody: '首次对东亚沙尘事件中的大气冰核开展分粒径测量，揭示粒径对冰核浓度和表面冰活性位点密度的控制，并建立适用于 −35 至 −6 °C 的参数化。',
    tag: 'Atmospheric Chemistry and Physics · 2021',
    link: 'https://doi.org/10.5194/acp-21-3491-2021',
    image: '/research-01-size-resolved.png',
    imageAlt: 'Figure comparing ice-active site density of size-resolved East Asian dust particles',
  },
  {
    n: '02',
    en: 'Chemical aging during dust transport',
    zh: '沙尘输送过程中的化学老化',
    enBody: 'Two field campaigns traced dust over roughly 1,000 km. Integrated chemical, morphological, and freezing measurements showed that atmospheric modification did not suppress its ice-nucleating activity.',
    zhBody: '通过两次外场观测追踪约 1,000 km 长距离输送的沙尘，结合化学组成、形貌和冻结测量，发现大气化学改性并未削弱东亚沙尘的冰核活性。',
    tag: 'Science of the Total Environment · 2023',
    link: 'https://doi.org/10.1016/j.scitotenv.2022.160708',
    image: '/research-02-aged-dust.jpg',
    imageAlt: 'Graphical abstract for the field observation of chemically aged East Asian dust',
  },
  {
    n: '03',
    en: 'Dust, cloud ice, and radiation',
    zh: '沙尘、云冰与辐射效应',
    enBody: 'Glacier samples and multi-source observations connect springtime dust influxes to cloud ice over the Tibetan Plateau—and reveal how declining dust amplified cloud cooling from 2007 to 2019.',
    zhBody: '结合五座冰川积雪样品和多源观测，建立春季沙尘输入与青藏高原云冰形成之间的联系，并揭示 2007–2019 年沙尘减少如何放大云的冷却效应。',
    tag: 'Science Advances · 2024',
    link: 'https://doi.org/10.1126/sciadv.ado0885',
    image: '/research-03-tibetan-plateau.png',
    imageAlt: 'Published schematic of dust ice-nucleating particles altering cloud radiative effects over the Tibetan Plateau',
  },
  {
    n: '04',
    en: 'C-ICE contact freezing',
    zh: 'C-ICE 接触冻结实验系统',
    enBody: 'A controlled, repeatable cold-stage method directs size-characterized aerosols onto a single supercooled droplet, constraining collision rates and impact-initiated contact freezing.',
    zhBody: '构建可控、可重复的冷台实验方法，将粒径可表征的气溶胶定向输送至单个过冷液滴，为碰撞效率和撞击触发接触冻结提供定量约束。',
    tag: 'EGUsphere preprint · 2026',
    link: 'https://doi.org/10.5194/egusphere-2026-3946',
    image: '/research-04-cice.png',
    imageAlt: 'Published schematic of the C-ICE contact-freezing experimental system',
  },
];

const papers = publicationData.selected;
const fullPublications = publicationData.all;
const news = [...newsData].sort((a, b) => b.date.localeCompare(a.date));

export default function Home() {
  const [language, setLanguage] = useState<Lang>('en');
  const zh = language === 'zh';
  const latestNews = news.slice(0, 5);
  const earlierNews = news.slice(5);

  useEffect(() => {
    document.documentElement.lang = zh ? 'zh-CN' : 'en';
  }, [zh]);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Jingchuan Chen home"><span>JC</span><span className="wordmark-name">Jingchuan Chen <em>（陈景川）</em></span></a>
        <nav aria-label="Primary navigation">
          <a href="#research">{zh ? '研究' : 'Research'}</a>
          <a href="#publications">{zh ? '论文' : 'Publications'}</a>
          <a href="#news">{zh ? '动态' : 'News'}</a>
          <a href="#contact">{zh ? '联系' : 'Contact'}</a>
        </nav>
        <button className="language-toggle" onClick={() => setLanguage(zh ? 'en' : 'zh')} aria-label={zh ? 'Switch to English' : '切换到中文'}>
          <Languages size={16} aria-hidden="true" /> {zh ? 'EN' : '中文'}
        </button>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{zh ? '大气科学 · 冰核粒子 · 气溶胶—云相互作用' : 'Atmospheric science · ice-nucleating particles · aerosol–cloud interactions'}</p>
          <h1>{zh ? '从大气粒子到' : 'From atmospheric particles'}<span>{zh ? '云冰与气候。' : 'to cloud ice and climate.'}</span></h1>
          <p className="hero-intro">{zh ? '我研究气溶胶如何触发冰形成，以及这些微观过程如何改变云、降水与地球辐射平衡。' : 'I investigate how aerosols initiate ice formation—and how these microscopic events reshape clouds, precipitation, and Earth’s radiation balance.'}</p>
          <div className="hero-actions">
            <a className="button primary" href="#research">{zh ? '探索研究' : 'Explore research'} <ArrowDownRight size={18} /></a>
          </div>
          <p className="affiliation">{zh ? '博士后研究员 · 德州农工大学大气科学系' : 'Postdoctoral Research Associate · Department of Atmospheric Sciences, Texas A&M University'}</p>
          <div className="top-links" aria-label="Academic profiles">
            <a href="https://scholar.google.com/citations?user=BCubDWQAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar ↗</a>
            <a href="https://orcid.org/0000-0002-5200-982X" target="_blank" rel="noreferrer">ORCID ↗</a>
            <a href="https://github.com/JingchuanChen" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://artsci.tamu.edu/atmos-science/contact/profiles/jingchuan-chen.html" target="_blank" rel="noreferrer">Texas A&amp;M ↗</a>
          </div>
        </div>
        <div className="hero-portrait">
          <div className="portrait-frame"><img src="/jingchuan-chen-hd.jpg" alt="Portrait of Jingchuan Chen" /></div>
          <div className="research-note"><span>Current focus / 04</span><strong>C-ICE</strong><p>{zh ? '碰撞触发的接触冻结' : 'Impact-initiated contact freezing'}</p></div>
        </div>
      </section>

      <section id="research" className="research-arc">
        <div className="section-heading"><p className="eyebrow">{zh ? '研究历程' : 'Research journey'}</p><h2>{zh ? '沿着冰形成的尺度向前。' : 'A research journey across scales.'}</h2></div>
        <ol className="arc-grid">
          {research.map((item) => <li key={item.n}><span>{item.n}</span><h3>{zh ? item.zh : item.en}</h3><p>{zh ? `${item.zhBody.split('，')[0]}。` : `${item.enBody.split('.')[0]}.`}</p></li>)}
        </ol>
      </section>

      <figure className="overview-figure">
        <img src="/research-overview.png" alt="Scientific overview from atmospheric particles to cloud ice and climate" />
        <figcaption><span>{zh ? '科研总览' : 'Research overview'}</span>{zh ? '从东亚沙尘冰核的粒径与老化，到青藏高原云冰和辐射效应，再到 C-ICE 接触冻结实验。' : 'From the size and aging of East Asian dust INPs, to cloud ice and radiative effects over the Tibetan Plateau, to controlled contact-freezing experiments with C-ICE.'}</figcaption>
      </figure>

      <section className="research-stories" aria-label={zh ? '研究详情' : 'Research details'}>
        {research.map((item) => (
          <article className="story" key={item.n}>
            <div className="story-side">
              <div className="story-index"><span>{item.n}</span><i /></div>
              <img className="story-figure" src={item.image} alt={item.imageAlt} />
              <small>{zh ? '选自对应论文；可替换' : 'From the corresponding paper · replaceable'}</small>
            </div>
            <div className="story-copy">
              <p className="story-tag">{item.tag}</p>
              <h2>{zh ? item.zh : item.en}</h2>
              <p>{zh ? item.zhBody : item.enBody}</p>
              <a href={item.link} target="_blank" rel="noreferrer">{zh ? '查看论文' : 'View publication'} <ArrowUpRight size={16} /></a>
            </div>
          </article>
        ))}
      </section>

      <section id="publications" className="publications">
        <div className="section-heading light"><p className="eyebrow">{zh ? '精选论文' : 'Selected publications'}</p><div><h2>{zh ? '研究历程，见于论文。' : 'The research journey, in print.'}</h2><p>{zh ? '以下突出第一作者与当前主导工作；可在下方展开完整列表。' : 'Highlighting first-author and current lead work. Expand the complete list below.'}</p></div></div>
        <div className="paper-list">
          {papers.map((paper) => (
            <a className="paper" href={paper.link} target="_blank" rel="noreferrer" key={paper.title}>
              <div><span>{paper.year}</span><small>{paper.type}</small></div>
              <div><h3>{paper.title}</h3><p><b>J. Chen</b>{paper.authorsRest}</p><strong>{paper.journal}</strong></div>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="publication-actions">
          <details className="all-publications">
            <summary>{zh ? '发表论文完整列表' : 'Complete publication list'} <span>+</span></summary>
            <div className="full-paper-list">
              {fullPublications.map((paper) => (
                <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noreferrer" key={paper.doi}>
                  <span>{paper.year}</span><div><b>{paper.title}</b><p className="full-authors">{paper.authors.map((author, index) => <span key={`${paper.doi}-${author}`}>{author === 'Jingchuan Chen' ? <strong>{author}</strong> : author}{index < paper.authors.length - 1 ? '; ' : ''}</span>)}</p><small>{paper.journal}</small></div><ArrowUpRight size={15} />
                </a>
              ))}
            </div>
          </details>
          <a className="text-link" href="https://scholar.google.com/citations?hl=en&user=BCubDWQAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noreferrer">{zh ? '在 Google Scholar 查看全部成果' : 'View all work on Google Scholar'} <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section id="news" className="news">
        <div className="section-heading"><p className="eyebrow">{zh ? '最新动态' : 'News & updates'}</p><h2>{zh ? '近期进展。' : 'Recent milestones.'}</h2></div>
        <div className="news-list">
          {latestNews.map((item) => (
            <div className="news-item" key={item.date + item.en}><time dateTime={item.date}>{item.displayDate}</time><p>{zh ? item.zh : item.en}</p>{item.link ? <a href={item.link} target="_blank" rel="noreferrer" aria-label="Read update"><ArrowUpRight size={18} /></a> : <span />}</div>
          ))}
          {earlierNews.length > 0 && <details className="earlier-news">
            <summary>{zh ? `查看更早动态（${earlierNews.length}）` : `View earlier news (${earlierNews.length})`} <span>+</span></summary>
            <div>
              {earlierNews.map((item) => (
                <div className="news-item" key={item.date + item.en}><time dateTime={item.date}>{item.displayDate}</time><p>{zh ? item.zh : item.en}</p>{item.link ? <a href={item.link} target="_blank" rel="noreferrer" aria-label="Read update"><ArrowUpRight size={18} /></a> : <span />}</div>
              ))}
            </div>
          </details>}
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">{zh ? '联系与合作' : 'Contact & collaboration'}</p>
        <h2>{zh ? '一起探索大气粒子如何塑造云。' : 'Let’s explore how atmospheric particles shape clouds.'}</h2>
        <a className="email" href="mailto:jingchuanchen@tamu.edu"><Mail size={22} /> jingchuanchen@tamu.edu</a>
        <div className="contact-grid">
          <p>{zh ? <>德州农工大学大气科学系<br />美国德克萨斯州 College Station</> : <>Department of Atmospheric Sciences<br />Texas A&amp;M University · College Station, Texas</>}</p>
          <div className="social-links">
            <a href="https://scholar.google.com/citations?user=BCubDWQAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar ↗</a>
            <a href="https://orcid.org/0000-0002-5200-982X" target="_blank" rel="noreferrer">ORCID ↗</a>
            <a href="https://github.com/JingchuanChen" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://artsci.tamu.edu/atmos-science/contact/profiles/jingchuan-chen.html" target="_blank" rel="noreferrer">Texas A&M ↗</a>
          </div>
        </div>
      </section>

      <footer><span>© {new Date().getFullYear()} Jingchuan Chen</span><span>{zh ? '气溶胶 · 冰核 · 云' : 'Aerosols · Ice nucleation · Clouds'}</span></footer>
    </main>
  );
}
