import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  "Increase revenue by 300%",
  "Streamline operations",
  "Reduce costs by 50%",
  "Improve customer satisfaction",
];

export default function Problem() {
  return (
    <section id="problem" className="py-20">
      <div className="flex flex-col items-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            The Problem We Solve
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Businesses today face unprecedented challenges in scaling their
            operations. Our solution provides the tools and expertise you need to
            overcome these obstacles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-4 bg-background/50 p-4 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-6"
          >
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4">Before Our Solution</h3>
              <p className="text-muted-foreground leading-relaxed">
                Manual processes, inefficient workflows, and lost opportunities
                holding back your growth.
              </p>
            </Card>
            <Card className="p-8 bg-primary text-primary-foreground">
              <h3 className="text-xl font-semibold mb-4">After Our Solution</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                Automated workflows, streamlined operations, and maximized revenue
                potential.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
