import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/details", label: "Details" },
  { href: "/rsvp", label: "RSVP" },
  { href: "/our-story", label: "Our Story" },
  { href: "/registry", label: "Registry" },
  { href: "/wedding-party", label: "Wedding Party" },
  { href: "/faq", label: "FAQ" },
  { href: "/photo-wall", label: "Photo Wall" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4"
          : "bg-background/70 py-6",
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl tracking-wider text-primary hover:opacity-80 transition-opacity"
          >
            E <span className="text-accent">&</span> K
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm tracking-widest uppercase transition-colors hover:text-primary",
                  location === item.href
                    ? "text-primary font-medium"
                    : "text-foreground/80",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-t shadow-lg py-4 px-4 md:hidden flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block text-lg tracking-wider transition-colors",
                location === item.href ? "text-primary" : "text-foreground/80",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
