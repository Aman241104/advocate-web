import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white pt-32 flex items-center">
        <Section className="py-24 lg:py-40 text-center">
          <div className="max-w-3xl mx-auto space-y-10">
            <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-secondary">Error 404</h5>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-primary tracking-tighter">
              Page <span className="text-secondary italic">Not</span> Found.
            </h1>
            <p className="text-primary/60 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
              The legal resource or page you are looking for has been moved, removed, or is temporarily unavailable. 
              Let's get you back on the right path.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link href="/">
                <Button size="lg" className="rounded-none group w-full sm:w-auto">
                  <Home className="w-5 h-5 mr-3" />
                  Return Home
                </Button>
              </Link>
              <Link href="/practice-areas">
                <Button variant="outline" size="lg" className="rounded-none group w-full sm:w-auto">
                  View Practice Areas
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
