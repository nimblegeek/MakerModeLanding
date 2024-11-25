import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="prose mx-auto max-w-4xl p-4">
      <h1>{post.title}</h1>
      <time>{post.date}</time>
      <MDXRemote source={post.content} />
    </article>
  );
} 