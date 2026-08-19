const USE_CASES = [
  "Invoices",
  "Contracts",
  "Legal agreements",
  "Certificates",
  "Offer letters",
  "Reports",
  "Proposals",
  "Quotes",
];

export function UseCases() {
  return (
    <section id="use-cases">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Any document, one template</span>
          <h2>Whatever you&apos;re generating, DocWizard drafts it</h2>
          <p>
            If it starts as a Word template, DocWizard can turn it into a finished document —
            one at a time or a thousand at once.
          </p>
        </div>

        <div className="usecase-pills">
          {USE_CASES.map((useCase) => (
            <span className="usecase-pill" key={useCase}>
              {useCase}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
