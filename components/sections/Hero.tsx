import Link from "next/link";

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div>
          <span className="eyebrow">📄 Template-based document automation</span>
          <h1>Turn one Word template into hundreds of finished documents</h1>
          <p className="hero-sub">
            Upload a .docx with your invoice, contract, or certificate layout — DocWizard finds
            every merge field automatically. Add your data, one record or a thousand, and get
            back ready-to-send PDFs or Word files with your formatting intact.
          </p>
          <div className="hero-cta">
            <Link href="https://app.docwizard.co/sign-in" className="btn btn-primary btn-lg">
              Generate your first document 
            </Link>
            <Link href="#how-it-works" className="btn btn-outline btn-lg">
              See how it works
            </Link>
          </div>
          <p className="hero-note">No credit card required · Free plan available</p>
        </div>

        <div>
          <div className="mockup">
            <div className="mockup-bar">
              <span className="mockup-dot" />
              <span className="mockup-dot" />
              <span className="mockup-dot" />
            </div>
            <div className="mockup-body">
              <div className="mockup-nav">
                <div className="mockup-brand" />
                <div className="mockup-nav-item active" />
                <div className="mockup-nav-item" />
                <div className="mockup-nav-item" />
                <div className="mockup-nav-item" />
              </div>
              <div className="mockup-main">
                <div className="mockup-title" />
                <div className="mockup-table">
                  <div className="mockup-row head">
                    <div className="bar" style={{ width: "60%" }} />
                    <div className="bar" style={{ width: "70%" }} />
                    <div className="bar" style={{ width: "40%" }} />
                    <div />
                  </div>
                  <div className="mockup-row">
                    <div className="bar" style={{ width: "80%" }} />
                    <div className="bar" style={{ width: "50%" }} />
                    <span className="pill" />
                    <div className="dl" />
                  </div>
                  <div className="mockup-row">
                    <div className="bar" style={{ width: "65%" }} />
                    <div className="bar" style={{ width: "55%" }} />
                    <span className="pill" />
                    <div className="dl" />
                  </div>
                  <div className="mockup-row">
                    <div className="bar" style={{ width: "72%" }} />
                    <div className="bar" style={{ width: "45%" }} />
                    <span className="pill" />
                    <div className="dl" />
                  </div>
                  <div className="mockup-row">
                    <div className="bar" style={{ width: "58%" }} />
                    <div className="bar" style={{ width: "60%" }} />
                    <span className="pill" />
                    <div className="dl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
