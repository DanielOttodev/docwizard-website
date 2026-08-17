import type { Metadata } from "next";
import { readDoc, extractTitle } from "@/lib/docs";
import { DocPage } from "@/components/docs/DocPage";

const content = readDoc("privacy/policy.md");

export const metadata: Metadata = {
  title: `${extractTitle(content, "Privacy Policy")} — DocWizard API`,
  description: "Generate a single document from a template and a set of field values.",
};

export default function PrivacyPage() {
  return <DocPage content={content} backHref="/" backLabel="Back to Home" />;
}
