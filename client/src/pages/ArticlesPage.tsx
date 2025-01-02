
import { useEffect, useState } from 'react';
import { getAllPosts, BlogPost } from '@/lib/posts';
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ArticlesPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = getAllPosts();
      setPosts(allPosts);
    };
    fetchPosts();
  }, []);

  return (
    <section className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">All Articles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights and guides from our development team
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto px-4">
          {posts.map((post) => (
            <Card key={post.slug} className="p-6 hover:bg-muted/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-muted-foreground">{post.description}</p>
              <p className="text-sm text-muted-foreground mt-2">{post.date}</p>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
