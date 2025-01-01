
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Hello World",
    description: "Introduction to our development approach",
    slug: "hello-world",
  },
  {
    title: "First Post",
    description: "Our journey in software development",
    slug: "first-post",
  },
  {
    title: "Test",
    description: "Testing best practices",
    slug: "test",
  },
];

export default function Articles() {
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
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto px-4">
          {articles.map((article) => (
            <Card key={article.slug} className="p-6 hover:bg-muted/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-muted-foreground">{article.description}</p>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
