import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Blocks, Rocket } from "lucide-react";

const products = [
  {
    title: "MVP Development",
    description: "Get your product to market fast, ready to be used and validated by your customers",
    icon: Rocket,
    features: ["Custom web application", "Core feature set", "Quick market validation"]
  },
  {
    title: "Custom Solutions",
    description: "Tailored development solutions that perfectly match your business needs and requirements.",
    icon: Code2,
    features: ["Unique functionality", "Scalable architecture", "Business integration"]
  },
  {
    title: "Component Systems",
    description: "Build a consistent and maintainable UI system with reusable components and design patterns.",
    icon: Blocks,
    features: ["Design system", "Component library", "Documentation"]
  }
];

export default function Products() {
  return (
    <section id="products" className="py-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold">Our Products</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Solutions tailored to your needs, from MVP to full-scale applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col">
                <div className="mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                </div>
                <div className="mt-auto">
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
