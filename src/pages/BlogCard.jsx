import { useParams } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blogPosts";
import ReactMarkdown from "react-markdown";

export default function BlogCard() {
  const { slug } = useParams();

  const post = BLOG_POSTS.find(
    (post) => post.slug === slug
  );

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="font-serif text-3xl">
          Blog not found
        </h1>
      </main>
    );
  }

  return (
    <main className="bg-cream-50 min-h-screen">

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12">

        <p className="text-xs tracking-[0.25em] uppercase text-rust-600 mb-4">
          {post.date}
        </p>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-800 leading-tight">
          {post.title}
        </h1>

        <p className="mt-6 text-lg md:text-xl text-charcoal-500 leading-relaxed">
          {post.excerpt}
        </p>

      </section>


      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 pb-20">

        <div className="blog-content">
          <ReactMarkdown>
            {post.content}
          </ReactMarkdown>
        </div>

      </article>

    </main>
  );
}