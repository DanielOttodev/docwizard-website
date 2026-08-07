import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { mdxComponents } from "@/components/blog/MdxComponents";

export function DocPage({
  content,
  backHref,
  backLabel,
}: {
  content: string;
  backHref: string;
  backLabel: string;
}) {
  return (
    <div className="post-detail">
      <div className="container">
        <div className="prose">
          <Link href={backHref} className="post-back">
            ← {backLabel}
          </Link>
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }}
          />
        </div>
      </div>
    </div>
  );
}
