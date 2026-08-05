import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="post-card">
      <div className="post-card-date">{formatDate(post.date)}</div>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
    </Link>
  );
}
