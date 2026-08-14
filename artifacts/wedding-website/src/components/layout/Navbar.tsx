import { Link, useLocation } from "wouter";
import { GitMergeIcon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", color: "foreground/20", weight: "bold" },
  { href: "/details", label: "Details", color: "accent", weight: "medium" },
  { href: "/rsvp", label: "RSVP", color: "accent", weight: "medium" },
  {
    href: "/registry",
    label: "Registry",
    color: "secondary",
    weight: "medium",
  },
  {
    href: "/our-story",
    label: "Our Story",
    color: "foreground/20",
    weight: "light",
  },
  {
    href: "/photo-wall",
    label: "Photo Wall",
    color: "foreground/20",
    weight: "light",
  },
  {
    href: "/wedding-party",
    label: "Wedding Party",
    color: "foreground/20",
    weight: "light",
  },
  { href: "/faq", label: "FAQ", color: "foreground/20", weight: "light" },
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
                  `text-sm tracking-widest uppercase transition-colors hover:text-${item.color == "foreground/20" ? "primary" : item.color}`,
                  location === item.href
                    ? `text-primary ${item.weight ? `font-${item.weight}` : ""}`
                    : `text-${item.color} ${item.weight ? `font-${item.weight}` : ""}`,
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
                location === item.href
                  ? `text-primary ${item.weight ? `font-${item.weight}` : ""}`
                  : ` ${item.weight ? `font-${item.weight}` : ""}`,
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
