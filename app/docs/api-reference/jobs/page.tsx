import type { Metadata } from "next";
import { readDoc, extractTitle } from "@/lib/docs";
import { DocPage } from "@/components/docs/DocPage";

const content = readDoc("api-reference/jobs.md");

export const metadata: Metadata = {
  title: `${extractTitle(content, "Jobs")} — DocWizard API`,
  description: "Generate many documents at once from a CSV, XLSX, or JSON array of rows.",
};

export default function JobsApiPage() {
  return <DocPage content={content} backHref="/docs/api-reference" backLabel="Back to API reference" />;
}
