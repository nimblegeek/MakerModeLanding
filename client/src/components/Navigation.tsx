import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Solutions", href: "#problem" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">Company</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-foreground"
              >
                {item.label}
              </Button>
            ))}
            <Button
              onClick={() => scrollToSection("#booking")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Button
                      key={item.label}
                      variant="ghost"
                      onClick={() => scrollToSection(item.href)}
                      className="w-full justify-start"
                    >
                      {item.label}
                    </Button>
                  ))}
                  <Button
                    onClick={() => scrollToSection("#booking")}
                    className="w-full"
                  >
                    Book a Call
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
