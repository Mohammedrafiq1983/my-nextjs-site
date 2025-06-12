import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import PricingPlans from "@/components/packages/PricingPlans";
import AreaCheck from "@/components/packages/AreaCheck";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CtaSection from "@/components/home/CtaSection";
import FaqSection from "@/components/packages/FaqSection";

export const metadata = {
  title: "الباقات - احمد زيدان نت",
  description: "تصفح باقات خدمة الإنترنت والنطاق العريض لدينا",
};

export default function Packages() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <PageHeader
          title="باقاتنا"
          backgroundImage="https://ext.same-assets.com/1236621396/3769596817.jpeg"
        />
        <PricingPlans />
        <AreaCheck />
        <WhyChooseUs />
        <FaqSection />
        <CtaSection />
      </div>
      <Footer />
    </main>
  );
}
