import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "Solutions", href: "#problem" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

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
              <Button
                key={item.label}
                variant="ghost"
                onClick={() => {
                  const element = document.getElementById(
                    item.href.replace("#", ""),
                  );
                  if (element) {
                    const headerOffset = 80; // Account for fixed header
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                  }
                }}
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <Button
                      key={item.label}
                      variant="ghost"
                      onClick={() => {
                        setIsOpen(false);
                        // Add delay to ensure sheet closes before scrolling
                        setTimeout(() => {
                          const element = document.getElementById(
                            item.href.replace("#", ""),
                          );
                          if (element) {
                            const headerOffset = 80; // Account for fixed header
                            const elementPosition = element.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                            
                            window.scrollTo({
                              top: offsetPosition,
                              behavior: "smooth"
                            });
                          }
                        }, 300); // Wait for sheet animation to complete
                      }}
                      className="w-full justify-center text-lg"
                    >
                      {item.label}
                    </Button>
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