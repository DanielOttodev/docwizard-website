const CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const VERSIONS = [
  { label: "v3", note: "Current · uploaded 2 days ago", badge: "+2 fields", current: true },
  { label: "v2", note: "Uploaded 3 weeks ago", badge: null, current: false },
  { label: "v1", note: "Original upload", badge: null, current: false },
];

export function VersionControl() {
  return (
    <section id="version-control">
      <div className="container">
        <div className="spotlight">
          <div>
            <span className="eyebrow">Built-in version control</span>
            <h2>Never lose track of a template again</h2>
            <p>
              Templates change — a reworded clause, an updated logo, a new field. Upload the new
              file as a version instead of overwriting the old one, and every version stays on
              record.
            </p>
            <ul className="spotlight-list">
              <li>
                {CHECK}
                See exactly which fields were added or removed between versions
              </li>
              <li>
                {CHECK}
                Roll back to any previous version in one click
              </li>
              <li>
                {CHECK}
                Every generated document stays linked to the exact version that created it
              </li>
            </ul>
          </div>

          <div className="csv-card">
            <div className="csv-title">Invoice-template.docx</div>
            <div className="version-list">
              {VERSIONS.map((version) => (
                <div className={`version-row${version.current ? " current" : ""}`} key={version.label}>
                  <span className="version-label">{version.label}</span>
                  <span className="version-note">{version.note}</span>
                  {version.badge && <span className="version-badge">{version.badge}</span>}
                </div>
              ))}
            </div>
            <div className="csv-arrow">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
              Every version, one click away
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
