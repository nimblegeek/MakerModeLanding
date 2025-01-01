import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

const articles = [
  {
    title: "Hello World",
    description: "Introduction to our development approach",
    slug: "hello-world",
    publishedAt: "2024-03-20",
  },
  {
    title: "First Post",
    description: "Our journey in software development",
    slug: "first-post",
    publishedAt: "2024-03-15",
  },
  {
    title: "Test",
    description: "Testing best practices",
    slug: "test",
    publishedAt: "2024-03-10",
  },
];

export default function Articles() {
  const latestArticles = [...articles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  return (
    <section className="py-16 md:py-24" id="articles">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Articles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights and guides from our development team
          </p>
          <Link 
            href="/articles" 
            className="inline-block text-sm text-primary hover:underline"
          >
            View all articles →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto px-4">
          {latestArticles.map((article) => (
            <Link key={article.slug} href={`/articles/${article.slug}`}>
              <Card className="p-6 hover:bg-muted/50 transition-colors h-full">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-muted-foreground">{article.description}</p>
                <p className="text-sm text-muted-foreground mt-4">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export { articles };
