import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "per month",
    features: [
      "Basic features",
      "Up to 5 users",
      "Basic reporting",
      "Email support"
    ]
  },
  {
    name: "Professional",
    price: "$199",
    period: "per month",
    features: [
      "Advanced features",
      "Up to 20 users",
      "Advanced analytics",
      "Priority support",
      "Custom integrations"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    features: [
      "All features",
      "Unlimited users",
      "Custom solutions",
      "24/7 support",
      "Dedicated account manager"
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose the plan that's right for your business
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full mt-6 ${plan.popular ? 'bg-primary' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
                <a 
                  href="https://cal.com/your-organization/consultation" 
                  className="block text-sm text-muted-foreground text-center mt-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  or schedule a call
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
