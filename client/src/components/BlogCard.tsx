import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{post.date}</span>
            <span>{post.readTime} min read</span>
          </div>
          <h3 className="text-xl font-bold leading-tight hover:text-primary transition-colors">
            {post.title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{post.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
} 