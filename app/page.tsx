'use client';

import { ArrowDownRight, ArrowUpRight, Download, Languages, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

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
  },
  {
    n: '02',
    en: 'Chemical aging during dust transport',
    zh: '沙尘输送过程中的化学老化',
    enBody: 'Two field campaigns traced dust over roughly 1,000 km. Integrated chemical, morphological, and freezing measurements showed that atmospheric modification did not suppress its ice-nucleating activity.',
    zhBody: '通过两次外场观测追踪约 1,000 km 长距离输送的沙尘，结合化学组成、形貌和冻结测量，发现大气化学改性并未削弱东亚沙尘的冰核活性。',
    tag: 'Science of the Total Environment · 2023',
    link: 'https://doi.org/10.1016/j.scitotenv.2022.160708',
  },
  {
    n: '03',
    en: 'Dust, cloud ice, and radiation',
    zh: '沙尘、云冰与辐射效应',
    enBody: 'Glacier samples and multi-source observations connect springtime dust influxes to cloud ice over the Tibetan Plateau—and reveal how declining dust amplified cloud cooling from 2007 to 2019.',
    zhBody: '结合五座冰川积雪样品和多源观测，建立春季沙尘输入与青藏高原云冰形成之间的联系，并揭示 2007–2019 年沙尘减少如何放大云的冷却效应。',
    tag: 'Science Advances · 2024',
    link: 'https://doi.org/10.1126/sciadv.ado0885',
  },
  {
    n: '04',
    en: 'C-ICE contact freezing',
    zh: 'C-ICE 接触冻结实验系统',
    enBody: 'A controlled, repeatable cold-stage method directs size-characterized aerosols onto a single supercooled droplet, constraining collision rates and impact-initiated contact freezing.',
    zhBody: '构建可控、可重复的冷台实验方法，将粒径可表征的气溶胶定向输送至单个过冷液滴，为碰撞效率和撞击触发接触冻结提供定量约束。',
    tag: 'EGUsphere preprint · 2026',
    link: 'https://doi.org/10.5194/egusphere-2026-3946',
  },
];

const papers = [
  {
    year: '2026',
    type: 'Preprint · Lead author',
    title: 'Cold-stage system for Impact-initiated Contact freezing Experiments (C-ICE)',
    authors: 'J. Chen, U. B. Rai, K. A. McMillan, R. D. Davis, M. A. Tolbert & S. D. Brooks',
    journal: 'EGUsphere',
    link: 'https://doi.org/10.5194/egusphere-2026-3946',
  },
  {
    year: '2024',
    type: 'Research article · First author',
    title: 'Decreased dust particles amplify the cloud cooling effect by regulating cloud ice formation over the Tibetan Plateau',
    authors: 'J. Chen, J. Xu, Z. Wu et al.',
    journal: 'Science Advances 10, eado0885',
    link: 'https://doi.org/10.1126/sciadv.ado0885',
  },
  {
    year: '2023',
    type: 'Research article · First author',
    title: 'Observational evidence for the non-suppression effect of atmospheric chemical modification on the ice nucleation activity of East Asian dust',
    authors: 'J. Chen, Z. Wu, X. Meng et al.',
    journal: 'Science of the Total Environment 861, 160708',
    link: 'https://doi.org/10.1016/j.scitotenv.2022.160708',
  },
  {
    year: '2021',
    type: 'Research article · First author',
    title: 'Size-resolved atmospheric ice-nucleating particles during East Asian dust events',
    authors: 'J. Chen, Z. Wu, J. Chen et al.',
    journal: 'Atmospheric Chemistry and Physics 21, 3491–3506',
    link: 'https://doi.org/10.5194/acp-21-3491-2021',
  },
];

const news = [
  { date: '28 JUL 2026', en: 'C-ICE preprint opened for discussion in EGUsphere.', zh: 'C-ICE 预印本在 EGUsphere 上线并开放讨论。', link: 'https://doi.org/10.5194/egusphere-2026-3946' },
  { date: '2026', en: 'Serving as an Early Career Convener for an aerosol–cloud–climate session at AGU26.', zh: '担任 AGU26 气溶胶—云—辐射—气候分会的青年召集人。' },
  { date: 'DEC 2025', en: 'Presented C-ICE at AGU25 in New Orleans.', zh: '在新奥尔良 AGU25 年会上口头报告 C-ICE 研究。' },
  { date: 'JAN 2025', en: 'Joined Texas A&M University as a Postdoctoral Research Associate.', zh: '加入德州农工大学大气科学系，任博士后研究员。' },
];

export default function Home() {
  const [language, setLanguage] = useState<Lang>('en');
  const zh = language === 'zh';

  useEffect(() => {
    document.documentElement.lang = zh ? 'zh-CN' : 'en';
  }, [zh]);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Jingchuan Chen home"><span>JC</span> Jingchuan Chen</a>
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
          <p className="eyebrow">{zh ? '大气科学 · 冰核粒子' : 'Atmospheric science · ice-nucleating particles'}</p>
          <h1>{zh ? '从大气粒子到' : 'From atmospheric particles'}<span>{zh ? '云冰与气候。' : 'to cloud ice and climate.'}</span></h1>
          <p className="hero-intro">{zh ? '我研究气溶胶如何触发冰形成，以及这些微观过程如何改变云、降水与地球辐射平衡。' : 'I investigate how aerosols initiate ice formation—and how these microscopic events reshape clouds, precipitation, and Earth’s radiation balance.'}</p>
          <div className="hero-actions">
            <a className="button primary" href="#research">{zh ? '探索研究' : 'Explore research'} <ArrowDownRight size={18} /></a>
            <a className="button secondary" href="/Jingchuan-Chen-CV.pdf" target="_blank" rel="noreferrer">{zh ? '下载简历' : 'Download CV'} <Download size={17} /></a>
          </div>
          <p className="affiliation">{zh ? '博士后研究员 · 德州农工大学大气科学系' : 'Postdoctoral Research Associate · Department of Atmospheric Sciences, Texas A&M University'}</p>
        </div>
        <div className="hero-portrait">
          <div className="portrait-frame"><img src="/jingchuan-chen.jpg" alt="Portrait of Jingchuan Chen" /></div>
          <div className="research-note"><span>Current focus / 04</span><strong>C-ICE</strong><p>{zh ? '碰撞触发的接触冻结' : 'Impact-initiated contact freezing'}</p></div>
        </div>
      </section>

      <section id="research" className="research-arc">
        <div className="section-heading"><p className="eyebrow">{zh ? '研究脉络' : 'Research arc'}</p><h2>{zh ? '沿着冰形成的尺度向前。' : 'Following ice formation across scales.'}</h2></div>
        <ol className="arc-grid">
          {research.map((item) => <li key={item.n}><span>{item.n}</span><h3>{zh ? item.zh : item.en}</h3><p>{zh ? `${item.zhBody.split('，')[0]}。` : `${item.enBody.split('.')[0]}.`}</p></li>)}
        </ol>
      </section>

      <section className="research-stories" aria-label={zh ? '研究详情' : 'Research details'}>
        {research.map((item) => (
          <article className="story" key={item.n}>
            <div className="story-index"><span>{item.n}</span><i /></div>
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
        <div className="section-heading light"><p className="eyebrow">{zh ? '精选论文' : 'Selected publications'}</p><div><h2>{zh ? '研究主线，见于论文。' : 'The research arc, in print.'}</h2><p>{zh ? '以下突出第一作者与当前主导工作；完整列表请访问 Google Scholar。' : 'Highlighting first-author and current lead work. Visit Google Scholar for the complete record.'}</p></div></div>
        <div className="paper-list">
          {papers.map((paper) => (
            <a className="paper" href={paper.link} target="_blank" rel="noreferrer" key={paper.title}>
              <div><span>{paper.year}</span><small>{paper.type}</small></div>
              <div><h3>{paper.title}</h3><p>{paper.authors}</p><strong>{paper.journal}</strong></div>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
        <a className="text-link" href="https://scholar.google.com/citations?hl=en&user=BCubDWQAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noreferrer">{zh ? '在 Google Scholar 查看全部成果' : 'View all work on Google Scholar'} <ArrowUpRight size={16} /></a>
      </section>

      <section id="news" className="news">
        <div className="section-heading"><p className="eyebrow">{zh ? '最新动态' : 'News & updates'}</p><h2>{zh ? '近期进展。' : 'Recent milestones.'}</h2></div>
        <div className="news-list">
          {news.map((item) => (
            <div className="news-item" key={item.date + item.en}><time>{item.date}</time><p>{zh ? item.zh : item.en}</p>{item.link ? <a href={item.link} target="_blank" rel="noreferrer" aria-label="Read update"><ArrowUpRight size={18} /></a> : <span />}</div>
          ))}
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
