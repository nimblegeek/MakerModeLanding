import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-6xl font-bold leading-[1.2] bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            A tech partner with a twist
          </h1>
          <p className="text-xl md:text-xl text-muted-foreground max-w-xl mx-auto">
            We help founders and small businesses go from{" "}
            <motion.span
              initial={{
                backgroundColor: "rgba(255, 222, 0, 1)",
                borderRadius: "50%",
              }}
              animate={{
                backgroundColor: "rgba(255, 222, 0, 1)",
                borderRadius: "10%",
              }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="px-1 bg-brush-stroke"
            >
              idea to launch,
            </motion.span>{" "}
            without having to live on ramen noodles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto text-lg"
              onClick={() => {
                const pricingSection = document.getElementById("pricing");
                pricingSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Pricing <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg"
              onClick={() => {
                const processSection = document.getElementById("process");
                processSection?.scrollIntoView({ behavior: "smooth" });
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
          className="relative mt-16 w-full max-w-2xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/50 to-background/0" />
        </motion.div>
      </div>
    </section>
  );
}
