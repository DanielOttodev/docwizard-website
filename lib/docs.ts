import fs from "fs";
import path from "path";

const DOCS_DIR = path.join(process.cwd(), "docs");

export function readDoc(relativePath: string): string {
  return fs.readFileSync(path.join(DOCS_DIR, relativePath), "utf-8");
}

// These are plain, frontmatter-free .md files (unlike blog posts) so they stay portable -
// readable as-is on GitHub, in an editor, anywhere - rather than being DocWizard-site-specific.
// Pull the title from the first H1 instead of asking every file to declare one twice.
export function extractTitle(markdown: string, fallback: string): string {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : fallback;
}
