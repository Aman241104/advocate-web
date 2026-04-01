"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/useMagnetic";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Practice Areas", href: "#practice-areas" },
  { name: "Notary", href: "#notary" },
  { name: "Articles", href: "#articles" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navBtnRef = useRef<HTMLButtonElement>(null);

  useMagnetic(navBtnRef, 0.2);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple Scroll Spy
      const sections = navLinks.map(link => link.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-base/80 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={(e) => scrollToSection(e, "#home")}
          className="flex flex-col group cursor-pointer"
        >
          <span className={cn(
            "font-serif text-2xl font-bold tracking-tight leading-none transition-colors duration-500",
            scrolled ? "text-primary" : "text-white"
          )}>
            Divya N Modi
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-secondary font-medium mt-1">
            Advocate & Notary
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={cn(
                "text-sm font-medium transition-colors duration-300 relative group",
                scrolled ? "text-primary" : "text-white",
                activeSection === link.href.replace("#", "") ? "text-secondary" : ""
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300",
                activeSection === link.href.replace("#", "") ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </a>
          ))}
          <Button ref={navBtnRef} variant="secondary" className="rounded-none ml-4 group">
            <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
            Consult Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 focus:outline-none transition-colors duration-500",
            scrolled ? "text-primary" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary/40 backdrop-blur-md z-[45] lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-base shadow-2xl z-[50] lg:hidden flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-primary/5">
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-primary leading-none">
                  Divya N Modi
                </span>
                <span className="text-[8px] uppercase tracking-[0.3em] text-secondary font-medium mt-1">
                  Advocate & Notary
                </span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 text-primary">
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={cn(
                    "block text-2xl font-serif font-bold py-4 transition-colors duration-300",
                    activeSection === link.href.replace("#", "") ? "text-secondary" : "text-primary/60"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="p-8 border-t border-primary/5">
              <Button variant="secondary" className="w-full h-14 rounded-none text-lg font-serif">
                <Phone className="w-5 h-5 mr-3" />
                Consult Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
