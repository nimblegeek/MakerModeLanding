import { motion } from "framer-motion";
import { Check, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "MVP launch",
    price: "$4,999",
    features: [
      "Boilerplate you own",
      "Landing page",
      "Database setup",
      "Payment integration",
      "Deployment and setup",
      "Average 48 hour delivery",
    ],
    scheduleLink: "https://cal.com/makermode/15min",
  },
  {
    name: "Professional",
    price: "$1,999",
    period: "per month",
    features: [
      "MVP Launch",
      "Two feature requests at a time",
      "Over 500+ UI components to find your look and feel",
      "Unlimited support",
      "Average 48 hour delivery",
    ],
    popular: true,
    scheduleLink: "https://cal.com/makermode/15min",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-6xl font-bold">Pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs and budget
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`h-full ${plan.popular ? "border-primary shadow-lg relative" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="p-6">
                  <CardTitle className="text-2xl mb-4">{plan.name}</CardTitle>
                  <div>
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3">
                    <Button
                      className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                    >
                      Get Started
                    </Button>
                    <a
                      href={plan.scheduleLink}
                      className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Calendar className="h-4 w-4" />
                      Schedule a consultation
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
