import type { Metadata } from "next";
import { readDoc, extractTitle } from "@/lib/docs";
import { DocPage } from "@/components/docs/DocPage";

const content = readDoc("terms-of-service/terms.md");

export const metadata: Metadata = {
  title: `${extractTitle(content, "Terms of Service")} — DocWizard API`,
  description: "Generate a single document from a template and a set of field values.",
};

export default function TermsPage() {
  return <DocPage content={content} backHref="/" backLabel="Back to Home" />;
}
