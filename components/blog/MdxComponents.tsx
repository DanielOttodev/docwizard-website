import type { MDXComponents } from "mdx/types";

export function Callout({ children }: { children: React.ReactNode }) {
  return <div className="callout">{children}</div>;
}

export const mdxComponents: MDXComponents = {
  Callout,
};
