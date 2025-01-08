
import { useParams } from 'react-router-dom';
import { getPostBySlug } from '../lib/posts';
import Navigation from '../components/Navigation';

export default function ArticlePage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug || '');

  if (!post) {
    return <div>Article not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation isArticlesPage={true} />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-invert mx-auto">
          <h1>{post.title}</h1>
          <time className="text-sm text-muted-foreground">{post.date}</time>
          <div className="mt-8">{post.content}</div>
        </article>
      </main>
    </div>
  );
}
