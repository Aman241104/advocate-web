"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/layout/Section";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Working with Divya N Modi was a turning point in my matrimonial dispute. Her compassion combined with legal sharpness ensured a fair settlement when I thought all hope was lost.",
    author: "Renu Sharma",
    role: "Private Individual",
    rating: 5
  },
  {
    quote: "As an MNC, we require precise and watertight corporate agreements. Divya's attention to detail and 29 years of experience are evident in every contract she drafts for us.",
    author: "Strategic Director",
    role: "Fortune 500 Company",
    rating: 5
  },
  {
    quote: "The notary services provided were efficient and handled with absolute secrecy. For any legal documentation in Ahmedabad, she is my first and only choice.",
    author: "Amit Vora",
    role: "Business Owner",
    rating: 5
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section className="bg-primary text-white overflow-hidden relative">
      {/* Decorative Background Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none select-none z-0">
        <Image 
          src="/images/lady-justice.png"
          alt="Lady Justice"
          fill
          className="object-contain"
        />
      </div>
      <Quote className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-white/[0.01] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-secondary">
            Client Success Stories
          </h5>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            Words From Our <span className="text-secondary italic">Clients</span>
          </h2>
        </div>

        <div className="relative min-h-[350px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="text-center space-y-10 px-8"
            >
              <div className="flex justify-center space-x-1">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>

              <blockquote className="text-2xl md:text-3xl font-serif italic font-medium leading-relaxed max-w-3xl mx-auto">
                &quot;{testimonials[index].quote}&quot;
              </blockquote>

              <div className="space-y-1">
                <p className="font-bold text-lg text-secondary">{testimonials[index].author}</p>
                <p className="text-xs uppercase tracking-widest text-white/40">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:-px-12">
            <button 
              onClick={prev}
              className="p-4 hover:text-secondary transition-colors duration-300 focus:outline-none"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              onClick={next}
              className="p-4 hover:text-secondary transition-colors duration-300 focus:outline-none"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-12 h-[2px] transition-all duration-500 ${
                i === index ? "bg-secondary" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
