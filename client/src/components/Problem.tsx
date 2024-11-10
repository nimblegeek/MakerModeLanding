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
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            The Problem We Solve
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Businesses today face unprecedented challenges in scaling their
            operations. Our solution provides the tools and expertise you need to
            overcome these obstacles.
          </p>
          <div className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-4"
        >
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Before Our Solution</h3>
            <p className="text-muted-foreground">
              Manual processes, inefficient workflows, and lost opportunities
              holding back your growth.
            </p>
          </Card>
          <Card className="p-6 bg-primary text-primary-foreground">
            <h3 className="font-semibold mb-2">After Our Solution</h3>
            <p className="text-primary-foreground/90">
              Automated workflows, streamlined operations, and maximized revenue
              potential.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
