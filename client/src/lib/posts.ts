
import matter from 'gray-matter';

// Define the list of available posts
const POSTS = {
  'first-post': () => import('../content/posts/first-post.mdx'),
  'hello-world': () => import('../content/posts/hello-world.mdx'),
  'test': () => import('../content/posts/test.mdx')
};

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts = await Promise.all(
    Object.entries(POSTS).map(async ([slug, importFn]) => {
      const module = await importFn();
      const { attributes: data, body: content } = module.default;
      
      return {
        slug,
        content,
        title: data.title,
        date: data.date,
        description: data.description,
      };
    })
  );

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const importFn = POSTS[slug];
  if (!importFn) return undefined;

  const module = await importFn();
  const { attributes: data, body: content } = module.default;
  
  return {
    slug,
    content,
    title: data.title,
    date: data.date,
    description: data.description,
  };
}
