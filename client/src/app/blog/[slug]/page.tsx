import { notFound } from "next/navigation";

// This would typically come from your CMS or database
const blogPosts = {
  "building-mvp-fast": {
    title: "Building MVPs Fast: A Practical Guide",
    content: "Your full article content here...",
    date: "2024-03-15",
    readTime: "5",
  },
  // Add more blog posts as needed
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  console.log('Current slug:', params.slug);
  console.log('Available slugs:', Object.keys(blogPosts));
  
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    console.log('Post not found, redirecting to 404');
    notFound();
  }

  return (
    <main className="py-16 md:py-24">
      <article className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <time>{post.date}</time>
            <span>{post.readTime} min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">{post.title}</h1>
        </div>
        <div className="prose prose-lg max-w-none">
          {post.content}
        </div>
      </article>
    </main>
  );
} 