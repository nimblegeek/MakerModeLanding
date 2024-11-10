import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Process from "../components/Process";
import Pricing from "../components/Pricing";
import Booking from "../components/Booking";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4">
        <Hero />
        <Problem />
        <Process />
        <Pricing />
        <Booking />
      </main>

      {/* Sticky CTA */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed bottom-8 left-0 right-0 flex justify-center px-4 z-50"
      >
        <Button 
          size="lg"
          className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg"
          onClick={() => {
            const bookingSection = document.getElementById('booking');
            bookingSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Schedule a Call Now
        </Button>
      </motion.div>

      <footer className="bg-muted mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
