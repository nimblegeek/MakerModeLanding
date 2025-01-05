import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Blocks, Rocket } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const products = [
  {
    title: "Tech Stacks",
    description:
      "Get your full-stack ecosystem including tools to run and deploy.",
    icon: Blocks,
    features: [
      "Boilerplate code & database",
      "Define and run your app(s) with Docker compose",
      "Cloud hosting through DigitalOcean",
    ],
    longDescription: "Our Tech Stacks solution provides everything you need to get started with your project. We set up the complete development environment, including database configuration, deployment pipelines, and all necessary tools for efficient development.",
  },
  {
    title: "SaaS Boilerplate",
    description:
      "Full-stack app ready for SaaS launch. Tweak and customize to your needs and taste.",
    icon: Code2,
    features: [
      "Database",
      "Authentication",
      "Payment integration",
      "Tailwind UI components",
    ],
    longDescription: "Launch your SaaS product faster with our comprehensive boilerplate. It includes all essential features like user authentication, subscription management, and a polished UI built with Tailwind. Just customize it to match your brand and add your unique features.",
  },
  {
    title: "Custom MVP",
    description:
      "Get your unique idea to market fast, with a carefully crafted solution.",
    icon: Rocket,
    features: [
      "Choose your tech stack",
      "Technical advisory and support",
      "Incremental development",
      "Launch and training material",
    ],
    longDescription: "Turn your unique idea into reality with our custom MVP development service. We work closely with you to choose the right technology stack, implement your features iteratively, and provide comprehensive support throughout the journey.",
  },
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
          <h2 className="text-5xl md:text-6xl font-bold">
            Tech Stacks & Boilerplates
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your tech-stack or boilerplate and be ready to launch your
            MVP in days. Or subscribe and launch new features incrementally.
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
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="p-6 h-full flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="mb-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <product.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {product.description}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <ul className="space-y-2">
                        {product.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent aria-describedby="dialog-description">
                  <div id="dialog-description" className="sr-only">Product details and features</div>
                  <DialogHeader className="text-left">
                    <DialogTitle className="text-2xl flex items-center gap-2">
                      <product.icon className="h-6 w-6" />
                      {product.title}
                    </DialogTitle>
                    <DialogDescription className="text-lg mt-4 text-left">
                      {product.longDescription}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6">
                    <h4 className="font-semibold mb-2">Features included:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}