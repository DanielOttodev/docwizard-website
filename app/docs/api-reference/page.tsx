import type { Metadata } from "next";
import { readDoc, extractTitle } from "@/lib/docs";
import { DocPage } from "@/components/docs/DocPage";

const content = readDoc("api-reference/README.md");

export const metadata: Metadata = {
  title: `${extractTitle(content, "API Reference")} — DocWizard Docs`,
  description: "Templates, Documents, and Jobs endpoints for building your own integration.",
};

export default function ApiReferenceIndexPage() {
  return <DocPage content={content} backHref="/docs" backLabel="Back to docs" />;
}
