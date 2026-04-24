import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import logo from "@assets/Asset_2@3x_1770501877753.png";

function ThemeToggle() {
  return null; // Removed toggle to maintain consistent dark theme
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/#industries" },
    { name: "Our Approach", href: "/#process" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/40 py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-display font-bold tracking-tight text-foreground flex items-center gap-3 cursor-pointer">
            <img src={logo} alt="Process Central Systems" className="h-10 w-auto" />
            <div className="flex flex-col leading-none">
              <span className="text-xl md:text-2xl font-display font-bold tracking-tight text-foreground uppercase">Process Central</span>
              <span className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase opacity-70">Systems</span>
            </div>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <ThemeToggle />

          <Button asChild size="sm" className="bg-primary text-white hover:bg-primary/90">
            <a href="/#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-foreground hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="w-full mt-4">
              <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Get in Touch</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
