import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Transform Your Business With Our Solutions
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We help businesses scale their operations through innovative solutions
            and proven strategies. Get started today and see the difference.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => {
                const bookingSection = document.getElementById('booking');
                bookingSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const processSection = document.getElementById('process');
                processSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/50 to-background/0" />
        </motion.div>
      </div>
    </section>
  );
}
