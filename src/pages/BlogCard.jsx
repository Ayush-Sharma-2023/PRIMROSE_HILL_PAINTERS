import { useParams } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blogPosts";

export default function BlogCard() {
  const { slug } = useParams();

  const post = BLOG_POSTS.find(
    (post) => post.slug === slug
  );

  if (!post) {
    return <h1>Blog not found</h1>;
  }

  return (
    <main>
      <h1>{post.title}</h1>

      <p>{post.date}</p>

      <p>{post.excerpt}</p>

      <div>
        {post.content}
      </div>
    </main>
  );
}