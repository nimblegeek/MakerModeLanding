import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default async function BlogList() {
  const posts = await getAllPosts();
  
  return (
    <section className="max-w-4xl mx-auto p-4">
      <h2>Blog Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.slug} className="border p-4 rounded-lg">
            <Link href={`/blog/${post.slug}`}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <time>{post.date}</time>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
} 