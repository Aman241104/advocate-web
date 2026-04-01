"use client";

import { useRef } from "react";
import Section from "@/components/layout/Section";
import { useReveal } from "@/hooks/useReveal";
import { BookOpen } from "lucide-react";
import Image from "next/image";

const featuredArticles = [
  {
    title: "Understanding Marriage Registration Laws in Gujarat",
    date: "March 2026",
    excerpt: "A comprehensive guide on the legal requirements and benefits of registering your marriage in Ahmedabad.",
    category: "Family Law",
  },
  {
    title: "Common Pitfalls in Property Title Deeds",
    date: "February 2026",
    excerpt: "Why professional legal opinion on title deeds is crucial before finalizing any real estate transaction.",
    category: "Property Law",
  },
  {
    title: "The Importance of a Registered Will",
    date: "January 2026",
    excerpt: "How to ensure your legacy is protected and your wishes are legally binding through a well-drafted will.",
    category: "Succession",
  }
];

export default function ArticlesPreview() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useReveal(headerRef);
  useReveal(gridRef, { stagger: 0.2 });

  return (
    <Section id="articles" className="bg-white relative overflow-hidden">
      {/* Decorative Law Books Background */}
      <div className="absolute bottom-0 right-0 w-1/4 h-full opacity-[0.05] pointer-events-none select-none z-0">
        <Image 
          src="/images/books-ladder.png"
          alt="Law Books and Ladder"
          fill
          className="object-contain object-right-bottom"
        />
      </div>

      <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24 relative z-10">
        <div className="max-w-2xl">
          <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-secondary mb-4">
            Insights & Intelligence
          </h5>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
            The <span className="text-secondary italic">Adhikar</span> Column.
          </h2>
          <p className="text-primary/60 mt-6 text-lg leading-relaxed">
            Exploring legal complexities through over 200 published articles in Divya Bhaskar Madhurima Magazine.
          </p>
        </div>
        <div className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-primary/40 cursor-default">
          Education Through Advocacy
        </div>
      </div>

      <div 
        ref={gridRef}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {featuredArticles.map((article, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col h-full bg-base p-10 hover:shadow-2xl transition-all duration-500 border-b-2 border-transparent hover:border-secondary cursor-default"
          >
            <div className="flex justify-between items-start mb-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary px-3 py-1 border border-secondary/20">
                {article.category}
              </span>
              <BookOpen className="w-5 h-5 text-primary/10 group-hover:text-secondary transition-colors duration-500" />
            </div>

            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-secondary transition-colors duration-500 leading-snug">
                {article.title}
              </h3>
              <p className="text-primary/50 text-sm leading-relaxed line-clamp-3 italic">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-8 flex items-center justify-between border-t border-primary/5 mt-auto">
              <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">
                {article.date}
              </span>
              <span className="text-xs font-bold text-primary/20 uppercase tracking-widest">
                Insight Published
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
