const CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export function BatchSpotlight() {
  return (
    <section>
      <div className="container">
        <div className="spotlight">
          <div>
            <span
              className="eyebrow"
              style={{ background: "rgba(255,146,43,0.12)", borderColor: "rgba(255,146,43,0.3)", color: "var(--orange-4)" }}
            >
              Batch generation
            </span>
            <h2>Turn one template into a thousand documents</h2>
            <p>
              Got a spreadsheet of clients, invoices, or contracts? Upload it alongside your
              template and DocWizard generates one document per row — packaged into a single
              zip, ready to download.
            </p>
            <ul className="spotlight-list">
              <li>
                {CHECK}
                Upload a .csv or .xlsx — column headers map straight to your merge fields
              </li>
              <li>
                {CHECK}
                Choose PDF or Word output for the whole batch
              </li>
              <li>
                {CHECK}
                Download every generated document in one zip file
              </li>
            </ul>
          </div>

          <div className="csv-card">
            <div className="csv-title">clients.csv</div>
            <table className="csv-table">
              <thead>
                <tr>
                  <th>DocumentName</th>
                  <th>ClientName</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>invoice-acme</td>
                  <td>Acme Corp</td>
                  <td>1500</td>
                </tr>
                <tr>
                  <td>invoice-globex</td>
                  <td>Globex Inc</td>
                  <td>2200</td>
                </tr>
                <tr>
                  <td>invoice-initech</td>
                  <td>Initech LLC</td>
                  <td>980</td>
                </tr>
              </tbody>
            </table>
            <div className="csv-arrow">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
              3 documents generated, zipped &amp; ready to download
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
