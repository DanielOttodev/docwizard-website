import Link from "next/link";

export function FinalCta() {
  return (
    <section>
      <div className="container">
        <div className="cta-band">
          <h2>Ready to stop copy-pasting documents?</h2>
          <p>Upload your first template and generate a document in under 10 minutes.</p>
          <div className="hero-cta">
            <Link href="#" className="btn btn-on-dark btn-lg">
              Get Started Free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
