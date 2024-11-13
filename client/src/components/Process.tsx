import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    title: "Discovery Call",
    description: "We start with a comprehensive assessment of your business needs and goals through a personalized consultation.",
    details: "During this 30-minute call, we'll discuss your current challenges, objectives, and how our solution can help you achieve your goals."
  },
  {
    title: "Custom Strategy",
    description: "Our team develops a tailored strategy based on your specific requirements and industry best practices.",
    details: "We analyze your business processes, identify optimization opportunities, and create a detailed implementation plan."
  },
  {
    title: "Implementation",
    description: "We guide you through a smooth implementation process with dedicated support every step of the way.",
    details: "Our expert team handles the technical setup, training, and ensures a seamless transition to the new system."
  }
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
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, effective approach to transforming your business
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-lg border p-6"
        >
          <Accordion type="single" collapsible className="w-full">
            {steps.map((step, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl py-6 hover:no-underline hover:bg-muted/50 px-4 rounded-lg transition-colors">
                  {step.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 p-4">
                    <p className="text-lg text-muted-foreground">{step.description}</p>
                    <div className="bg-muted p-6 rounded-lg">
                      <p className="text-sm leading-relaxed">{step.details}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
