"use client";

import { useRef } from "react";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/hooks/useReveal";
import { useMagnetic } from "@/hooks/useMagnetic";
import { FileCheck, ShieldCheck, Clock, CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";

export default function NotarySection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const magneticBtnRef = useRef<HTMLButtonElement>(null);

  useReveal(headerRef);
  useReveal(gridRef, { stagger: 0.1, threshold: -0.1 });
  useReveal(ctaRef, { direction: "up", delay: 0.5 });
  useMagnetic(magneticBtnRef, 0.2);

  return (
    <Section id="notary" className="bg-base border-y border-primary/5 relative overflow-hidden">
      {/* Decorative Courtroom Background */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none select-none z-0">
        <Image 
          src="/images/courtroom.png"
          alt="Empty Courtroom"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div ref={headerRef} className="max-w-4xl mb-10 md:mb-16 lg:mb-24 relative z-10">        <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-secondary mb-6">Government Appointed</h5>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight">
          Professional <span className="text-secondary italic inline-block pr-2">Notary</span> Services.
        </h2>
        <p className="text-primary/60 mt-6 md:mt-10 text-lg md:text-xl leading-relaxed max-w-2xl italic border-l-4 border-secondary pl-6 pr-1">
          Official verification and legal attestation services since 2008, ensuring the highest standards of secrecy and reliability.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
        <div ref={gridRef} className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="p-6 md:p-8 bg-white shadow-sm space-y-4 border-b-2 border-transparent md:hover:border-secondary transition-all duration-300">
            <FileCheck className="w-8 h-8 text-secondary" />
            <h4 className="font-serif font-bold text-primary">MNC Agreements</h4>
            <p className="text-xs text-primary/60 leading-relaxed">Attestation for corporate contracts and service level agreements.</p>
          </div>
          <div className="p-6 md:p-8 bg-white shadow-sm space-y-4 border-b-2 border-transparent md:hover:border-secondary transition-all duration-300">
            <ShieldCheck className="w-8 h-8 text-secondary" />
            <h4 className="font-serif font-bold text-primary">Affidavits</h4>
            <p className="text-xs text-primary/60 leading-relaxed">Drafting and attestation of legally binding affidavits for all purposes.</p>
          </div>
          <div className="p-6 md:p-8 bg-white shadow-sm space-y-4 border-b-2 border-transparent md:hover:border-secondary transition-all duration-300">
            <Clock className="w-8 h-8 text-secondary" />
            <h4 className="font-serif font-bold text-primary">Quick Processing</h4>
            <p className="text-xs text-primary/60 leading-relaxed">Efficient verification services to respect your time constraints.</p>
          </div>
          <div className="p-6 md:p-8 bg-white shadow-sm space-y-4 border-b-2 border-transparent md:hover:border-secondary transition-all duration-300">
            <CheckCircle2 className="w-8 h-8 text-secondary" />
            <h4 className="font-serif font-bold text-primary">Absolute Secrecy</h4>
            <p className="text-xs text-primary/60 leading-relaxed">Guaranteed confidentiality for sensitive personal and business data.</p>
          </div>
        </div>

        <div ref={ctaRef} className="lg:col-span-5">
          <div className="bg-primary p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            
            <h3 className="text-2xl font-serif font-bold mb-8 text-secondary">Verification Scope</h3>
            <ul className="space-y-4">
              {[
                "Deeds & Corporate Contracts",
                "Powers of Attorney (POA)",
                "Identity & Education Proofs",
                "NRI Documentation Attestation"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-sm font-medium text-white/70">
                  <div className="w-1 h-1 bg-secondary rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10 pt-10 border-t border-white/10">
              <a href="#contact">
                <Button ref={magneticBtnRef} variant="secondary" className="w-full h-14 rounded-none group">
                  <Phone className="w-4 h-4 mr-2 md:group-hover:animate-pulse" />
                  Book Notary Appointment
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
