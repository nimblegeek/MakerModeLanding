import { motion } from "framer-motion";
import { Check, AlertCircle, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  "Ship in days, not weeks",
  "Get fast feedback from your customers",
  "Pay for work that matters",
  "Become profitable without the need for hyperscale",
];

export default function Problem() {
  return (
    <section id="problem" className="py-16">
      <div className="flex flex-col items-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl md:text-6xl font-bold leading-[1.17]">
            Stuck in long development cycles?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We help small businesses and startups ship fast without overspending
            on their budget.
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
                <div
                  key={benefit}
                  className="flex items-center gap-4 bg-background/50 p-4 rounded-lg"
                >
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
              <h3 className="text-3xl font-semibold mb-4">Without Maker Mode</h3>
              <div className="space-y-3 text-muted-foreground">
            
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="leading-relaxed">Budget overspent</p>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="leading-relaxed">Never ending projects</p>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="leading-relaxed">Feeling ripped off from big tech</p>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="leading-relaxed">Stuck in long meetings with wrong people</p>
                </div>
              </div>
            </Card>
            <Card className="p-8 bg-primary text-primary-foreground">
              <h3 className="text-3xl font-semibold mb-4">With Maker Mode</h3>
              
              <div className="space-y-3 text-primary-foreground/90">
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 flex-shrink-0" />
                  <p className="leading-relaxed">Technical partnership</p>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 flex-shrink-0" />
                  <p className="leading-relaxed">Rapid feedback</p>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 flex-shrink-0" />
                  <p className="leading-relaxed">Meaningful support</p>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 flex-shrink-0" />
                  <p className="leading-relaxed">Money & time saved for your business</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
