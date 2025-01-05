
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { getAllPosts } from "../lib/posts";
import type { BlogPost } from "../lib/posts";

export default function ArticlesPage() {
  const [articles, setArticles] = useState<BlogPost[]>([]);

  useEffect(() => {
    const posts = getAllPosts();
    setArticles(posts);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Articles</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights and guides from our development team
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Card key={article.slug} className="p-6 hover:bg-muted/50 transition-colors">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-muted-foreground mb-4">{article.description}</p>
                <time className="text-sm text-muted-foreground">{article.date}</time>
              </Card>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
