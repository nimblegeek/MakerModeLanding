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
      "We start with a comprehensive assessment of your business needs and goals through a personalized consultation.",
    details:
      "During this 30-minute call, we'll discuss your current challenges, objectives, and how our solution can help you achieve your goals.",
  },
  {
    title: "Implementation",
    icon: Laptop,
    description:
      "Our team develops a tailored strategy based on your specific requirements and industry best practices.",
    details:
      "We analyze your business processes, identify optimization opportunities, and create a detailed implementation plan.",
  },
  {
    title: "Launch",
    icon: Rocket,
    description:
      "We guide you through a smooth implementation process with dedicated support every step of the way.",
    details:
      "Our expert team handles the technical setup, training, and ensures a seamless transition to the new system.",
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
          <h2 className="text-6xl md:text-6xl font-bold">A Simple Process</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A process grounded in short feedback loops and doing the right thing
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
