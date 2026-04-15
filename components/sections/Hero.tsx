"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/Button";
import { useMagnetic } from "@/hooks/useMagnetic";
import { ArrowRight, Award, CheckCircle, ScrollText } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  const ctaButtonRef = useRef<HTMLButtonElement>(null);
  useMagnetic(ctaButtonRef, 0.3);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });

      tl.from(containerRef.current, {
        opacity: 0,
        duration: 2,
      })
      .from(headlineRef.current, {
        y: 100,
        opacity: 0,
      }, "-=1.5")
      .from(sublineRef.current, {
        y: 50,
        opacity: 0,
      }, "-=1.2")
      .from(ctaRef.current, {
        y: 30,
        opacity: 0,
      }, "-=1")
      .from(statsRef.current?.children || [], {
        y: 20,
        opacity: 0,
        stagger: 0.2,
      }, "-=0.8");
    });

    return () => ctx.revert();
  }, []);

  return (
    <div 
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20"
    >
      {/* Background Image Integration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/80 z-10" /> {/* Dark Overlay */}
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
           <Image 
             src="/images/courtroom-scene.png" 
             alt="Courtroom in Session" 
             fill 
             sizes="100vw"
             className="object-cover object-center"
             priority
           />
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 z-20 skew-x-12 transform translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-30">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-10">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20 backdrop-blur-sm">
            <Award className="w-4 h-4 text-secondary" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-secondary">
              29+ Years of Legal Excellence
            </span>
          </div>

          {/* Headline */}
          <h1 
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] tracking-tight"
          >
            Trusted Advocacy <br />
            <span className="text-secondary italic inline-block pr-2">Professional</span> Results
          </h1>

          {/* Sub-headline */}
          <p 
            ref={sublineRef}
            className="text-white/60 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
          >
            Divya N Modi provides expert legal representation and professional notary services in Ahmedabad, built on a legacy of integrity and unwavering dedication.
          </p>

          {/* CTAs */}
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 md:pt-0"
          >
            <a href="#contact" className="w-full sm:w-auto">
              <Button ref={ctaButtonRef} size="lg" className="rounded-none w-full sm:w-auto group h-14 sm:h-auto">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 ml-2 md:group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#practice-areas" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="rounded-none w-full sm:w-auto border-white/20 text-white md:hover:bg-white md:hover:text-primary h-14 sm:h-auto">
                View Practice Areas
              </Button>
            </a>
          </div>

          {/* Quick Stats */}
          <div 
            ref={statsRef}
            className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-6 md:gap-8 pt-10 md:pt-16 border-t border-white/10"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2 text-secondary">
                <CheckCircle className="w-4 h-4" />
                <span className="font-serif text-2xl md:text-3xl font-bold text-white">200+</span>
              </div>
              <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/40 font-bold leading-tight">Published <br className="sm:hidden" /> Articles</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2 text-secondary">
                <CheckCircle className="w-4 h-4" />
                <span className="font-serif text-2xl md:text-3xl font-bold text-white">50+</span>
              </div>
              <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/40 font-bold leading-tight">MNC <br className="sm:hidden" /> Clients</p>
            </div>
            <div className="space-y-2 col-span-2 sm:col-span-1">
              <div className="flex items-center justify-center space-x-2 text-secondary">
                <ScrollText className="w-4 h-4" />
                <span className="font-serif text-2xl md:text-3xl font-bold text-white">2008</span>
              </div>
              <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/40 font-bold leading-tight">Official Notary <br className="sm:hidden" /> Since</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-white/20 animate-bounce">
        <span className="text-[8px] uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </div>
  );
}
