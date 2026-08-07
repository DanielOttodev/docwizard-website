import type { Metadata } from "next";
import { readDoc, extractTitle } from "@/lib/docs";
import { DocPage } from "@/components/docs/DocPage";

const content = readDoc("api-reference/templates.md");

export const metadata: Metadata = {
  title: `${extractTitle(content, "Templates")} — DocWizard API`,
  description: "Upload, scan, promote, and version .docx templates via the DocWizard API.",
};

export default function TemplatesApiPage() {
  return <DocPage content={content} backHref="/docs/api-reference" backLabel="Back to API reference" />;
}
