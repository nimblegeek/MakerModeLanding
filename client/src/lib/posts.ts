
import { BlogPost } from '../types/blog';

// This would be replaced by actual MDX imports in a proper build system
const posts: BlogPost[] = [
  {
    slug: 'example-article',
    title: "Your Article Title",
    date: "2024-03-21",
    description: "A brief description of your article",
    content: "Example content"
  },
  {
    slug: 'first-post',
    title: "First Blog Post",
    date: "2024-03-20",
    description: "This is our first blog post",
    content: "First post content"
  }
];

export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(post => post.slug === slug);
}
