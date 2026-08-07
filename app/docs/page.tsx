import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Docs — DocWizard",
  description: "Guides and API reference for building with DocWizard.",
};

export default function DocsIndexPage() {
  return (
    <div className="container">
      <div className="blog-hero">
        <h1>DocWizard Docs</h1>
        <p>Guides and API reference for building with DocWizard.</p>
      </div>

      <div className="post-grid" style={{ paddingBottom: 88 }}>
        <Link href="/docs/quickstart" className="post-card">
          <h2>Quickstart</h2>
          <p>Create a template, connect your data, and generate your first documents.</p>
        </Link>
        <Link href="/docs/api-reference" className="post-card">
          <h2>API Reference</h2>
          <p>Templates, Documents, and Jobs endpoints for building your own integration.</p>
        </Link>
      </div>
    </div>
  );
}
