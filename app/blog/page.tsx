import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/blog/PostCard";

export const metadata: Metadata = {
  title: "Blog — DocWizard",
  description: "Product updates, guides, and behind-the-scenes notes from the DocWizard team.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="container">
      <div className="blog-hero">
        <h1>The DocWizard Blog</h1>
        <p>Product updates, guides, and behind-the-scenes notes.</p>
      </div>

      {posts.length === 0 ? (
        <p className="post-empty">No posts yet — check back soon.</p>
      ) : (
        <div className="post-grid" style={{ paddingBottom: 88 }}>
          {posts.map((post) => (
            <PostCard post={post} key={post.slug} />
          ))}
        </div>
      )}
    </div>
  );
}
