export function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>From template to finished document in three steps</h2>
          <p>No new tools to learn — if you can use Word, you can use DocWizard.</p>
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Upload your template</h3>
            <p>
              Add a .docx file with fields like <code>{"{{ClientName}}"}</code>. DocWizard
              scans it and detects every merge field automatically — no manual mapping.
            </p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Add your data</h3>
            <p>
              Fill in a simple form for a single document, or upload a CSV/XLSX to generate
              hundreds of documents in one batch — one row per document.
            </p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Download &amp; go</h3>
            <p>
              Export as a faithfully-rendered PDF or an editable Word file, ready to send.
              Tables, styling, and formatting stay intact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
