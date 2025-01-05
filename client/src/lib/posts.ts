
import type { BlogPost } from '../types/blog';

const mockPosts: BlogPost[] = [
  {
    slug: 'getting-started',
    title: 'Getting Started with Development',
    date: '2024-01-15',
    description: 'Learn the fundamentals of modern web development.',
    content: 'This is a comprehensive guide to getting started with web development...'
  },
  {
    slug: 'best-practices',
    title: 'Web Development Best Practices',
    date: '2024-01-20',
    description: 'Essential practices for writing clean, maintainable code.',
    content: 'In this article, we explore the best practices for modern web development...'
  },
  {
    slug: 'advanced-techniques',
    title: 'Advanced Development Techniques',
    date: '2024-01-25',
    description: 'Take your development skills to the next level.',
    content: 'Discover advanced techniques used by professional developers...'
  }
];

export function getAllPosts(): BlogPost[] {
  return mockPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return mockPosts.find(post => post.slug === slug);
}
