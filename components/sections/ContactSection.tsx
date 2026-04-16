"use client";

import { useRef, useState } from "react";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { useReveal } from "@/hooks/useReveal";
import { useMagnetic } from "@/hooks/useMagnetic";
import { Phone, Mail, Send } from "lucide-react";

import Image from "next/image";
import { Icons } from "@/components/ui/Icons";

export default function ContactSection() {
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  
  const [formData, setFormData] = useState({ name: "", phone: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useReveal(infoRef, { direction: "right" });
  useReveal(formRef, { direction: "left" });
  useMagnetic(submitBtnRef, 0.2);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      
      if (scriptUrl) {
        const formDataParams = new URLSearchParams();
        formDataParams.append('name', formData.name);
        formDataParams.append('phone', formData.phone);
        formDataParams.append('subject', formData.subject);
        formDataParams.append('message', formData.message);

        // Submitting to Google Apps Script
        await fetch(scriptUrl, {
          method: 'POST',
          body: formDataParams,
          mode: 'no-cors'
        });
      } else {
        console.warn("NEXT_PUBLIC_GOOGLE_SCRIPT_URL is not set in environment variables.");
      }

      // Prepare WhatsApp Redirection
      const text = `*New Consultation Request*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
      const whatsappUrl = `https://wa.me/919825416310?text=${encodeURIComponent(text)}`;
      
      window.open(whatsappUrl, '_blank');
      
      setFormData({ name: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an issue submitting your request. Redirecting to WhatsApp...");
      
      const fallbackText = `*New Consultation Request*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
      window.open(`https://wa.me/919825416310?text=${encodeURIComponent(fallbackText)}`, '_blank');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-base overflow-hidden relative">
      {/* Decorative Background Image */}
      <div className="absolute top-0 left-0 w-1/2 h-full opacity-[0.03] pointer-events-none select-none z-0">
        <Image 
          src="/images/hero-desk.png"
          alt="Consultation Desk"
          fill
          sizes="50vw"
          className="object-cover object-left"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start relative z-10">
        {/* Contact Info Column */}
        <div ref={infoRef} className="space-y-10 md:space-y-12">
          <div className="space-y-6">
            <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-secondary">
              Let&apos;s Talk
            </h5>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight">
              Begin Your <br />
              <span className="text-secondary italic inline-block pr-2">Consultation</span> Today.
            </h2>
            <p className="text-primary/60 text-base md:text-lg leading-relaxed">
              We understand that legal matters are personal and sensitive. Our office ensures absolute secrecy 
              and a professional approach to every case we handle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            <div className="space-y-3">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/40">General Inquiry</h4>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-white rounded-full text-secondary md:group-hover:bg-secondary md:group-hover:text-white transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+919825416310" className="text-lg font-bold text-primary">+91 98254 16310</a>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/40">Email Us</h4>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-white rounded-full text-secondary md:group-hover:bg-secondary md:group-hover:text-white transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:Divya_legal@yahoo.com" className="text-base sm:text-lg font-bold text-primary whitespace-nowrap">Divya_legal@yahoo.com</a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-primary/5 flex flex-wrap gap-4">
             <Button 
                onClick={() => window.location.href = "tel:+919825416310"} 
                type="button" 
                variant="secondary" 
                className="rounded-none h-14 px-8 group w-full sm:w-auto"
             >
                <Phone className="w-5 h-5 mr-3 md:group-hover:rotate-12 transition-transform" />
                Call Office
             </Button>
             <Button 
                onClick={() => window.open("https://wa.me/919825416310", "_blank")} 
                type="button" 
                variant="outline" 
                className="rounded-none h-14 px-8 border-primary/20 md:hover:bg-green-600 md:hover:border-green-600 md:hover:text-white group w-full sm:w-auto"
             >
                <Icons.WhatsApp className="w-5 h-5 mr-3 md:group-hover:scale-110 transition-transform" />
                WhatsApp
             </Button>
          </div>
        </div>

        {/* Form Column */}
        <div ref={formRef} className="bg-white p-6 md:p-12 lg:p-16 shadow-2xl border border-primary/5">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Input 
                label="Full Name" 
                placeholder="Ex. Amit Patel" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <Input 
                label="Phone Number" 
                placeholder="+91" 
                required 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <Input 
              label="Subject of Consultation" 
              placeholder="Ex. Property Partition" 
              required 
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
            />
            <Textarea 
              label="Brief Overview" 
              placeholder="Tell us about your case..." 
              required 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
            
            <Button ref={submitBtnRef} type="submit" size="lg" disabled={isSubmitting} className="w-full rounded-none group h-16 text-lg font-serif">
              {isSubmitting ? "Sending details..." : "Send Consultation Request"}
              {!isSubmitting && <Send className="w-5 h-5 ml-3 md:group-hover:translate-x-1 md:group-hover:-translate-y-1 transition-transform" />}
            </Button>

            <p className="text-[10px] text-center text-primary/40 uppercase tracking-widest font-bold">
              Guaranteed Response Within 24 Hours
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
}
