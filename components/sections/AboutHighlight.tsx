"use client";

import { useRef } from "react";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/hooks/useReveal";
import { useMagnetic } from "@/hooks/useMagnetic";
import { FileText, Award, Users, History } from "lucide-react";
import Image from "next/image";

export default function AboutHighlight() {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useReveal(imageRef, { direction: "left", duration: 1.5 });
  useReveal(textRef, { stagger: 0.2 });
  useMagnetic(btnRef, 0.2);

  return (
    <Section id="about" className="bg-base relative overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-20 right-[-10%] opacity-[0.02] pointer-events-none select-none">
        <span className="text-[20vw] font-serif font-black text-primary leading-none uppercase">
          Legacy
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Image Column */}
        <div ref={imageRef} className="relative group">
          <div className="aspect-[4/5] bg-primary relative z-10 overflow-hidden shadow-2xl border-[10px] md:border-[15px] border-white">
            <Image 
              src="/images/portrait-formal.png"
              alt="Divya N Modi - Senior Advocate & Notary"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700 scale-100 md:scale-110 md:group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent mix-blend-multiply" />
          </div>
          
          {/* Floating Experience Badge */}
          <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-secondary p-6 md:p-10 z-20 shadow-2xl">
            <div className="text-center text-white">
              <p className="text-3xl md:text-5xl font-serif font-bold">29</p>
              <p className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold mt-1 md:mt-2">Years of <br /> Advocacy</p>
            </div>
          </div>

          {/* Secondary Approchable Image */}
          <div className="absolute top-1/2 -left-20 w-48 h-64 bg-white p-3 shadow-2xl z-20 hidden xl:block -translate-y-1/2">
             <div className="w-full h-full relative overflow-hidden grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700">
               <Image 
                 src="/images/portrait-smile.png"
                 alt="Divya N Modi - Approachable Advocacy"
                 fill
                 sizes="192px"
                 className="object-cover object-center"
               />
             </div>
          </div>

          {/* Team Image Element */}
          <div className="absolute -top-10 -left-10 w-64 h-40 bg-white p-3 shadow-2xl z-20 hidden xl:block md:group-hover:translate-x-4 transition-transform duration-700">
             <div className="w-full h-full relative overflow-hidden grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700">
               <Image 
                 src="/images/team.png"
                 alt="Legal Team"
                 fill
                 sizes="256px"
                 className="object-cover object-center"
               />
             </div>
          </div>
        </div>

        {/* Text Column */}
        <div ref={textRef} className="space-y-8">
          <div className="space-y-4">
            <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-secondary">
              A Legacy of Trust
            </h5>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight">
              Defending Rights with <br />
              <span className="text-secondary italic inline-block pr-2">Unwavering</span> Integrity.
            </h2>
          </div>

          <p className="text-primary/70 text-lg leading-relaxed">
            Divya N Modi began her legal practice in 1997 with a singular mission: to provide high-quality, ethical legal representation 
            that simplifies the complex Indian judicial system for the common citizen. 
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-4 border-y border-primary/5">
            <div className="flex items-center space-x-3">
              <History className="w-5 h-5 text-secondary" />
              <span className="text-sm font-bold text-primary uppercase tracking-widest">Est. 1997</span>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="w-5 h-5 text-secondary" />
              <span className="text-sm font-bold text-primary uppercase tracking-widest">Notary Since 2008</span>
            </div>
          </div>

          <p className="text-primary/70 text-lg leading-relaxed">
            As a renowned columnist for the <strong>&quot;Adhikar&quot;</strong> column in Divya Bhaskar Madhurima Magazine, 
            she has authored over 200 articles, educating the public on their legal rights.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 shadow-sm text-secondary">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-primary">200+ Articles</h4>
                <p className="text-xs text-primary/50 mt-1 uppercase tracking-widest font-bold">Thought Leadership</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 shadow-sm text-secondary">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-primary">50+ MNCs</h4>
                <p className="text-xs text-primary/50 mt-1 uppercase tracking-widest font-bold">Corporate Counsel</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <a href="#contact" className="block sm:inline-block">
              <Button ref={btnRef} size="lg" className="rounded-none w-full sm:w-auto px-4 sm:px-12 group h-14 sm:h-auto">
                <span className="text-sm sm:text-base md:text-lg whitespace-nowrap">Consult with Divya N Modi</span>
                <Award className="w-4 h-4 sm:w-5 sm:h-5 ml-2 md:group-hover:rotate-12 transition-transform shrink-0" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
