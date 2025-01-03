
import matter from 'gray-matter';

const POSTS = {
  'first-post': await import('../content/posts/first-post.mdx?raw'),
  'hello-world': await import('../content/posts/hello-world.mdx?raw'),
  'test': await import('../content/posts/test.mdx?raw')
};

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  const posts = Object.entries(POSTS).map(([slug, module]) => {
    const { data, content } = matter(module.default);
    
    return {
      slug,
      content,
      title: data.title,
      date: data.date,
      description: data.description,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const post = POSTS[slug];
  if (!post) return undefined;

  const { data, content } = matter(post.default);
  
  return {
    slug,
    content,
    title: data.title,
    date: data.date,
    description: data.description,
  };
}
