import { useState, useCallback } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Link } from "wouter";

const navItems = [
  { label: "Solutions", href: "#problem" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Articles", href: "/articles" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      // Calculate header offset based on device type
      const headerOffset = window.innerWidth <= 768 ? 70 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition), // Ensure we don't scroll past the top
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a
              href="/"
              className="text-xl font-semibold hover:opacity-80 transition-opacity"
            >
              Maker Mode
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <a
                  onClick={() =>
                    item.href.startsWith("#") &&
                    scrollToSection(item.href.replace("#", ""))
                  }
                  className="text-foreground/70 hover:text-foreground transition-colors"
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:w-80"
              >
                <SheetTitle className="text-lg font-semibold mb-4">
                  Navigation Menu
                </SheetTitle>
                <div
                  className="flex flex-col space-y-4"
                  role="navigation"
                  aria-label="Mobile navigation"
                >
                  {navItems.map((item) => (
                    <Link key={item.label} href={item.href}>
                      <a
                        onClick={() => {
                          setIsOpen(false);
                          // Increased delay and smoother transition
                          setTimeout(() => {
                            item.href.startsWith("#") &&
                              scrollToSection(item.href.replace("#", ""));
                          }, 400);
                        }}
                        className="w-full justify-center text-lg transition-all duration-200 hover:bg-accent"
                        aria-label={`Navigate to ${item.label} section`}
                      >
                        {item.label}
                      </a>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}