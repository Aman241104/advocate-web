import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Practice Areas", href: "#practice-areas" },
  { name: "Articles & Insights", href: "#articles" },
];

const practiceAreas = [
  { name: "Matrimonial Disputes", href: "#practice-areas" },
  { name: "Property Law", href: "#practice-areas" },
  { name: "Corporate Agreements", href: "#practice-areas" },
  { name: "Notary & Affidavits", href: "#notary" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 relative overflow-hidden">
      {/* Decorative Background Image */}
      <div className="absolute bottom-0 right-0 w-1/3 h-[80%] opacity-[0.02] pointer-events-none select-none z-0">
        <Image 
          src="/images/lady-justice-full.png"
          alt="Lady Justice Full"
          fill
          className="object-contain object-right-bottom"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="#home" className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-white leading-none">
                Divya N Modi
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-secondary font-medium mt-1">
                Advocate & Notary
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              With 29+ years of legal excellence, Divya N Modi provides trusted advocacy and professional notary services in Ahmedabad, focusing on integrity and results.
            </p>
            <div className="flex space-x-4 pt-2">
               <div className="text-[10px] uppercase tracking-widest font-bold text-secondary">Integrity • Result • Secrecy</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-secondary">Practice Areas</h4>
            <ul className="space-y-4">
              {practiceAreas.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-secondary">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">
                  Ahmedabad, Gujarat, India
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:+919825416310" className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">
                  +91 98254 16310
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:info@divyamodi.in" className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">
                  info@divyamodi.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="border-t border-white/10 py-10">
          <div className="max-w-4xl mx-auto text-center">
            <h5 className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-4">Disclaimer</h5>
            <p className="text-white/40 text-[11px] leading-relaxed italic">
              As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. 
              The information provided on this website is for informational purposes only and should not be construed 
              as legal advice or an invitation to a lawyer-client relationship. By accessing this website, you acknowledge 
              that you are seeking information of your own accord and that there has been no solicitation, inducement 
              or advertisement by Divya N Modi or its members.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 py-8 text-center">
          <p className="text-white/30 text-[10px] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Divya N Modi Advocate & Notary. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
