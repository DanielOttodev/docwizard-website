const FEATURES = [
  {
    title: "Automatic field detection",
    description:
      "Upload any .docx and DocWizard finds every merge field for you — no manual tagging or config files.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h6M9 16h6M9 8h1" />
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M6 21h12a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2Z" />
      </svg>
    ),
  },
  {
    title: "Single & batch generation",
    description:
      "Generate one document from a form, or thousands at once from a CSV or Excel file — same template, different data.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "PDF & Word export",
    description:
      "Export documents as faithfully-rendered PDFs or editable .docx files — tables, fonts, and styling stay exactly as designed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M6 21h12a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2Z" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Developer API",
    description:
      "Generate documents straight from your own code with a simple REST API and API keys — build it into any workflow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    ),
  },
  {
    title: "In-built versioning",
    description:
      "Keep track of every version of your template and generated documents, so you can roll back or audit changes at any time.",
    icon: (
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <circle cx="12" cy="12" r="9" />
  <path d="M12 7v5l3 2" />
  <path d="M8 4H4v4" />
  <path d="M4.5 8A9 9 0 0 1 12 3" />
</svg>
    ),
  },
  {
    title: "Reliable rendering",
    description:
      "Documents are rendered with a real layout engine, not a lossy markup converter — what you design is what gets generated.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section id="features" style={{ background: "var(--gray-0)" }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Features</span>
          <h2>Everything you need to stop doing this by hand</h2>
          <p>Built for teams who generate the same document, over and over, with different data every time.</p>
        </div>

        <div className="features-grid">
          {FEATURES.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
