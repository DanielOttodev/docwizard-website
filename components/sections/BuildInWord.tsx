const CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const DETECTED_FIELDS = ["ClientName", "StartDate", "Salary", "Manager"];

export function BuildInWord() {
  return (
    <section id="build-in-word">
      <div className="container">
        <div className="spotlight">
          <div>
            <span className="eyebrow">No new software to learn</span>
            <h2>Build templates in Microsoft Word — the tool your team already uses</h2>
            <p>
              There&apos;s no drag-and-drop builder to learn and no proprietary format to migrate
              to. Open Word, write your document exactly as you always have, and drop in
              placeholders like <code>{"{{ClientName}}"}</code> wherever the data should go.
            </p>
            <ul className="spotlight-list">
              <li>
                {CHECK}
                Reuse your existing Word templates — nothing to rebuild from scratch
              </li>
              <li>
                {CHECK}
                DocWizard scans the file and detects every merge field automatically
              </li>
              <li>
                {CHECK}
                Fonts, tables, headers, and formatting stay exactly as designed
              </li>
            </ul>
          </div>

          <div className="csv-card">
            <div className="csv-title">offer-letter.docx</div>
            <div className="doc-preview">
              <p>Dear {"{{ClientName}}"},</p>
              <p>
                We&apos;re pleased to confirm your start date of {"{{StartDate}}"} with an annual
                salary of {"{{Salary}}"}, reporting to {"{{Manager}}"}.
              </p>
            </div>
            <div className="csv-arrow">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
              4 fields detected
            </div>
            <div className="field-chips">
              {DETECTED_FIELDS.map((field) => (
                <span className="field-chip" key={field}>
                  {field}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
