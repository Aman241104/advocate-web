import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PracticeAreas from "@/components/sections/PracticeAreas";
import AboutHighlight from "@/components/sections/AboutHighlight";
import NotarySection from "@/components/sections/NotarySection";
import Testimonials from "@/components/sections/Testimonials";
import ArticlesPreview from "@/components/sections/ArticlesPreview";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutHighlight />
        <PracticeAreas />
        <NotarySection />
        <Testimonials />
        <ArticlesPreview />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
