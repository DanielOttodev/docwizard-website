import Link from "next/link";
import TrackedLink from "../client/TrackedLink";

export function FinalCta() {
  return (
    <section>
      <div className="container">
        <div className="cta-band">
          <h2>Ready to stop copy-pasting documents?</h2>
          <p>Upload your first template and generate a document in under 10 minutes.</p>
          <div className="hero-cta">
            <TrackedLink href="https://app.docwizard.co/sign-in" location="final-cta" className="btn btn-on-dark btn-lg">
              Get Started Free
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
