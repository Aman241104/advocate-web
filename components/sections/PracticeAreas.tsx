"use client";

import { useRef } from "react";
import Section from "@/components/layout/Section";
import { useReveal } from "@/hooks/useReveal";
import { 
  Heart, 
  Home, 
  Briefcase, 
  FileCheck, 
  Gavel, 
  Scale, 
  ShieldCheck, 
  Users 
} from "lucide-react";

const practices = [
  {
    title: "Matrimonial & Family",
    icon: <Heart className="w-6 h-6" />,
    description: "Expert guidance on divorce, alimony, child custody, and matrimonial disputes with compassion.",
    category: "Personal"
  },
  {
    title: "Property & Land Disputes",
    icon: <Home className="w-6 h-6" />,
    description: "Legal opinion on title deeds, property partition, and handling complex land disputes.",
    category: "Property"
  },
  {
    title: "Corporate Agreements",
    icon: <Briefcase className="w-6 h-6" />,
    description: "Drafting and vetting corporate agreements for MNCs and local businesses with precision.",
    category: "Corporate"
  },
  {
    title: "Notary & Affidavits",
    icon: <FileCheck className="w-6 h-6" />,
    description: "Official notary services and affidavit drafting since 2008 with guaranteed secrecy.",
    category: "Official"
  },
  {
    title: "Civil Litigation",
    icon: <Gavel className="w-6 h-6" />,
    description: "Representing clients in civil courts, consumer forums, and trust act matters.",
    category: "Litigation"
  },
  {
    title: "Cheque Bounce (NI Act)",
    icon: <Scale className="w-6 h-6" />,
    description: "Strategic legal defense and prosecution for matters under the Negotiable Instruments Act.",
    category: "Financial"
  },
  {
    title: "Adoption & Wills",
    icon: <Users className="w-6 h-6" />,
    description: "Helping families with legal adoption of a Hindu child and creation of legally binding wills.",
    category: "Personal"
  },
  {
    title: "Motor Accident (MCOP)",
    icon: <ShieldCheck className="w-6 h-6" />,
    description: "Fighting for just compensation in motor accident claim cases with 29+ years experience.",
    category: "Claims"
  }
];

export default function PracticeAreas() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useReveal(headerRef);
  useReveal(gridRef, { stagger: 0.1, threshold: -0.1 });

  return (
    <Section id="practice-areas" className="bg-white relative overflow-hidden">
      <div ref={headerRef} className="max-w-3xl mb-10 md:mb-16 lg:mb-24 relative z-10">
        <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-secondary mb-4">
          Areas of Expertise
        </h5>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight">
          Comprehensive Legal <br />
          Solutions for <span className="text-secondary italic inline-block pr-2">Every Concern</span>.
        </h2>
        <p className="text-primary/60 mt-6 text-base md:text-lg leading-relaxed max-w-2xl">
          With nearly three decades of experience, we provide nuanced advocacy across personal, corporate, and civil law.
        </p>
      </div>

      <div 
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 md:gap-y-12"
      >
        {practices.map((practice, idx) => (
          <div 
            key={idx} 
            className="group block p-6 md:p-8 bg-base active:bg-primary md:hover:bg-primary transition-all duration-500 relative overflow-hidden shadow-sm cursor-default"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 p-4 opacity-[0.03] active:opacity-[0.08] md:group-hover:opacity-[0.08] transition-opacity duration-500">
              {practice.icon}
            </div>

            <div className="relative z-10 space-y-6">
              <div className="inline-flex p-3 bg-white text-secondary active:bg-secondary active:text-white md:group-hover:bg-secondary md:group-hover:text-white transition-colors duration-500">
                {practice.icon}
              </div>
              
              <div className="space-y-3">
                <span className="text-[9px] uppercase tracking-widest font-bold text-secondary">
                  {practice.category}
                </span>
                <h3 className="text-xl font-serif font-bold text-primary active:text-white md:group-hover:text-white transition-colors duration-500">
                  {practice.title}
                </h3>
                <p className="text-primary/60 active:text-white/70 md:group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-500">
                  {practice.description}
                </p>
              </div>

              <div className="pt-4 flex items-center text-sm font-bold text-secondary active:text-white md:group-hover:text-white transition-colors duration-500 opacity-0 active:opacity-100 md:group-hover:opacity-100 transition-opacity">
                Professional Advocacy
                <div className="ml-2 w-4 h-[1px] bg-secondary active:bg-white md:group-hover:bg-white active:w-8 md:group-hover:w-8 transition-all duration-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
