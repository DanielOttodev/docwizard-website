import type { Metadata } from "next";
import { readDoc, extractTitle } from "@/lib/docs";
import { DocPage } from "@/components/docs/DocPage";

const content = readDoc("quickstart.md");

export const metadata: Metadata = {
  title: `${extractTitle(content, "Quickstart")} — DocWizard Docs`,
  description: "Create a template, connect your data, and generate your first documents.",
};

export default function QuickstartPage() {
  return <DocPage content={content} backHref="/docs" backLabel="Back to docs" />;
}
