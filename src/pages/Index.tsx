import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MissionVision from "@/components/MissionVision";
import WorkShowcase from "@/components/WorkShowcase";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <WhyChooseUs />
      <MissionVision />
      <WorkShowcase />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
