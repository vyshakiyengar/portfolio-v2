// Opens every section: number, a rule that draws across the page, and the section name.
export default function SectionMark({ n, label }) {
  return (
    <p className="chapter" data-reveal>
      {n && <span className="chapter-num">{n}</span>}
      <span className="chapter-rule" aria-hidden="true" />
      <span className="chapter-label">{label}</span>
    </p>
  )
}
