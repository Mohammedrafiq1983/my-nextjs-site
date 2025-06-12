import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesCards from "@/components/home/ServicesCards";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PricingSection from "@/components/home/PricingSection";
import CtaSection from "@/components/home/CtaSection";
import BlogSection from "@/components/home/BlogSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <HeroSection />
        <ServicesCards />
        <AboutSection />
        <WhyChooseUs />
        <PricingSection />
        <CtaSection />
        <BlogSection />
      </div>
      <Footer />
    </main>
  );
}
