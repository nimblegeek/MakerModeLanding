import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  
  const posts = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get slug
    const slug = fileName.replace(/\.mdx$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title,
      date: data.date,
      description: data.description,
    };
  });

  // Sort posts by date
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title,
      date: data.date,
      description: data.description,
    };
  } catch {
    return undefined;
  }
} 