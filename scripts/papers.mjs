// Builds one static landing page per article under public/papers/<slug>/ with the
// Highwire Press citation_* meta tags Google Scholar reads. Runs before `vite build`,
// so the pages are plain HTML (no JavaScript needed to read them).
//
// To publish a full-text PDF for an article, drop it at public/papers/<slug>.pdf and
// rebuild. The page then gains a citation_pdf_url tag and a "Download PDF" link.
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'

const SITE = 'https://vyshak.me'
const AUTHOR = { scholar: 'Iyengar, Vyshak Kannan', display: 'Vyshak Kannan Iyengar', orcid: '0009-0002-5098-6448' }

const papers = [
  {
    slug: 'ai-startup-ecosystem-india',
    title: 'Complete Overview of the AI Startup Ecosystem in India',
    date: '2018/09/25',
    dateLabel: '25 September 2018',
    isoDate: '2018-09-25',
    venue: 'DataDrivenInvestor',
    doi: '10.5281/zenodo.22459996',
    original: 'https://medium.com/datadriveninvestor/ai-startups-in-india-1c49e71a1ce5',
    citedBy: [
      { title: 'The State of Open Data: Histories and Horizons', detail: 'T. Davies, “Algorithms and Artificial Intelligence”, in Davies, Walker, Rubinstein & Perini (eds.), African Minds and IDRC, 2019', where: 'Reference 34', link: 'https://idrc-crdi.ca/en/books/state-open-data-histories-and-horizons' },
      { title: 'Role of Artificial Intelligence in India: A Legal Study', detail: 'K. Fatima & V. V. B. Singh, Indian Journal of Law and Society, I(8), 74–91, 2024', where: 'Reference 44', link: 'https://doi.org/10.5281/zenodo.10644585' },
    ],
  },
  {
    slug: 'robo-advisors-indian-wealth-management',
    title: 'Robo Advisors: A Disruption in Indian Wealth Management?',
    date: '2019/10/23',
    dateLabel: '23 October 2019',
    isoDate: '2019-10-23',
    venue: 'DataDrivenInvestor',
    doi: '10.5281/zenodo.22460494',
    original: 'https://medium.com/datadriveninvestor/robo-advisors-a-disruption-in-indian-wealth-management-70d2392a03a8',
    citedBy: [
      { title: 'FinTech Disruption in the Automotive Finance Industry', detail: 'P. Mehta, D. De & A. Bobby, Infosys View Point, 2020', where: 'Reference 7', link: 'https://www.infosys.com/industries/automotive/documents/fintech-disruption.pdf' },
      { title: 'Contemporary Developments in Corporate and Commercial Laws in India', detail: '7th NLIU–Trilegal Summit collection, Eastern Book Company, 2023', where: 'Footnote 10', link: 'https://cbcl.nliu.ac.in/wp-content/uploads/2023/04/FINAL-Compiled-Manuscripts_Trilegal-Summit-Book-2023.pdf' },
    ],
  },
]

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

for (const p of papers) {
  const url = `${SITE}/papers/${p.slug}/`
  const pdfFile = `public/papers/${p.slug}.pdf`
  const pdfUrl = existsSync(pdfFile) ? `${SITE}/papers/${p.slug}.pdf` : null
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: p.title,
    name: p.title,
    author: { '@type': 'Person', name: AUTHOR.display, '@id': `${SITE}/#person`, sameAs: `https://orcid.org/${AUTHOR.orcid}` },
    datePublished: p.isoDate,
    isPartOf: { '@type': 'Periodical', name: p.venue },
    identifier: { '@type': 'PropertyValue', propertyID: 'DOI', value: p.doi },
    url,
    sameAs: [`https://doi.org/${p.doi}`, p.original],
    ...(pdfUrl ? { encoding: { '@type': 'MediaObject', contentUrl: pdfUrl, encodingFormat: 'application/pdf' } } : {}),
  }
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(p.title)} | Vyshak Kannan Iyengar</title>
<meta name="description" content="${esc(`${p.title}. Article by ${AUTHOR.display}, first published in ${p.venue} on ${p.dateLabel}. DOI ${p.doi}.`)}">
<link rel="canonical" href="${url}">
<meta name="citation_title" content="${esc(p.title)}">
<meta name="citation_author" content="${esc(AUTHOR.scholar)}">
<meta name="citation_author_orcid" content="https://orcid.org/${AUTHOR.orcid}">
<meta name="citation_publication_date" content="${p.date}">
<meta name="citation_online_date" content="${p.date}">
<meta name="citation_journal_title" content="${esc(p.venue)}">
<meta name="citation_doi" content="${p.doi}">
<meta name="citation_language" content="en">
<meta name="citation_abstract_html_url" content="${url}">
${pdfUrl ? `<meta name="citation_pdf_url" content="${pdfUrl}">\n` : ''}<meta name="DC.title" content="${esc(p.title)}">
<meta name="DC.creator" content="${esc(AUTHOR.display)}">
<meta name="DC.date" content="${p.isoDate}">
<meta name="DC.identifier" content="doi:${p.doi}">
<meta property="og:type" content="article">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:url" content="${url}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<style>
:root{--paper:#faf9f6;--ink:#232822;--muted:#62665e;--line:#dddfd6;--accent:#835038}
*{box-sizing:border-box}
body{margin:0;background:var(--paper);color:var(--ink);font:400 16px/1.7 Georgia,'Times New Roman',serif}
main{max-width:720px;margin:0 auto;padding:56px 20px 80px}
a{color:var(--accent)}
.back{font:500 13px/1.4 system-ui,sans-serif;text-decoration:none}
.kind{display:block;margin:40px 0 12px;font:600 11px/1.4 system-ui,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:var(--accent)}
h1{font-weight:400;font-size:clamp(30px,5vw,42px);line-height:1.15;margin:0 0 16px}
.author{font-size:19px;margin:0}
.meta{color:var(--muted);font:400 14px/1.6 system-ui,sans-serif;margin:6px 0 0}
.links{display:flex;flex-wrap:wrap;gap:10px;margin:28px 0 0;padding:0;list-style:none}
.links a{display:inline-block;padding:9px 14px;border:1px solid var(--line);border-radius:999px;font:500 13px/1 system-ui,sans-serif;text-decoration:none;color:var(--ink);background:#fff}
.links a.primary{background:var(--accent);border-color:var(--accent);color:#fff}
h2{font-weight:400;font-size:22px;margin:48px 0 8px;padding-top:28px;border-top:1px solid var(--line)}
ol{padding-left:20px}
li{margin:14px 0}
li strong{display:block;font-weight:600}
li span{display:block;color:var(--muted);font:400 13.5px/1.6 system-ui,sans-serif}
.cite{font:400 14px/1.6 system-ui,sans-serif;background:#fff;border:1px solid var(--line);padding:14px 16px;overflow-wrap:anywhere}
</style>
</head>
<body>
<main>
<a class="back" href="/#research">← Vyshak K Iyengar · Research &amp; citations</a>
<span class="kind">Article</span>
<h1>${esc(p.title)}</h1>
<p class="author"><a href="${SITE}/">${esc(AUTHOR.display)}</a></p>
<p class="meta">First published in ${esc(p.venue)} on ${p.dateLabel} · DOI <a href="https://doi.org/${p.doi}">${p.doi}</a> · ORCID <a href="https://orcid.org/${AUTHOR.orcid}">${AUTHOR.orcid}</a></p>
<ul class="links">
${pdfUrl ? `<li><a class="primary" href="/papers/${p.slug}.pdf">Download PDF</a></li>\n` : ''}<li><a href="https://doi.org/${p.doi}">Archived copy (Zenodo)</a></li>
<li><a href="${p.original}">Original on Medium</a></li>
</ul>
<h2>How to cite</h2>
<p class="cite">Iyengar, V. K. (${p.isoDate.slice(0, 4)}). ${esc(p.title)}${/[?.!]$/.test(p.title) ? '' : '.'} <em>${esc(p.venue)}</em>. https://doi.org/${p.doi}</p>
<h2>Cited by</h2>
<ol>
${p.citedBy.map(c => `<li><strong><a href="${c.link}">${esc(c.title)}</a></strong><span>${esc(c.detail)} · ${esc(c.where)}</span></li>`).join('\n')}
</ol>
</main>
</body>
</html>
`
  mkdirSync(`public/papers/${p.slug}`, { recursive: true })
  writeFileSync(`public/papers/${p.slug}/index.html`, html)
  console.log(`papers: ${p.slug}${pdfUrl ? ' (with PDF)' : ' (no PDF yet)'}`)
}
