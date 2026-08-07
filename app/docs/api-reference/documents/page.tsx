import type { Metadata } from "next";
import { readDoc, extractTitle } from "@/lib/docs";
import { DocPage } from "@/components/docs/DocPage";

const content = readDoc("api-reference/documents.md");

export const metadata: Metadata = {
  title: `${extractTitle(content, "Documents")} — DocWizard API`,
  description: "Generate a single document from a template and a set of field values.",
};

export default function DocumentsApiPage() {
  return <DocPage content={content} backHref="/docs/api-reference" backLabel="Back to API reference" />;
}
