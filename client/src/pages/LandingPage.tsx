import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Process from "../components/Process";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <Hero />
        <Problem />
        <Process />
        <Pricing />
        <FAQ />
      </main>

      <footer className="bg-muted mt-24 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <p>© 2024 Maker Mode. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
