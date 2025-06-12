import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import AboutInfo from "@/components/about/AboutInfo";
import TeamSection from "@/components/about/TeamSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CtaSection from "@/components/home/CtaSection";

export const metadata = {
  title: "عن الشركة - احمد زيدان نت",
  description: "تعرف على مزود خدمة الإنترنت وخدمات الإنترنت العريض احمد زيدان نت",
};

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <PageHeader
          title="عن الشركة"
          backgroundImage="https://ext.same-assets.com/1236621396/1655377938.jpeg"
        />
        <AboutInfo />
        <WhyChooseUs />
        <TeamSection />
        <CtaSection />
      </div>
      <Footer />
    </main>
  );
}
