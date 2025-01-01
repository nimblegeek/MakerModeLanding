import { articles } from "@/components/Articles";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function ArticlesPage() {
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">All Articles</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {sortedArticles.map((article) => (
          <Link key={article.slug} href={`/articles/${article.slug}`}>
            <Card className="p-6 hover:bg-muted/50 transition-colors h-full">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-muted-foreground mb-4">{article.description}</p>
              <p className="text-sm text-muted-foreground">
                {new Date(article.publishedAt).toLocaleDateString()}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
} 