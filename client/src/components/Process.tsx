import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Search, Rocket, Laptop } from "lucide-react";

const steps = [
  {
    title: "Discovery",
    icon: Search,
    description:
      "We explore and discuss your idea and create a clear plan forward.",
  },
  {
    title: "Implementation",
    icon: Laptop,
    description:
      "During the development of your product you get continuous updates and links to your product, as your customers will experience it.",
  },
  {
    title: "Launch",
    icon: Rocket,
    description:
      "We deploy your product and provide you with the training needed until you are confident running it on your own.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold">How We Work</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A process grounded in short feedback loops
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {steps.map((step, index) => (
            <div key={index} className="bg-card rounded-lg border p-6">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {step.icon && <step.icon className="w-6 h-6" />}
                </motion.div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
