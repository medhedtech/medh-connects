
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import AimsObjectives from "@/components/AimsObjectives";
import Approach from "@/components/Approach";
import GlobalEngagement from "@/components/GlobalEngagement";
import FinancialAidCSR from "@/components/FinancialAidCSR";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";
import ApplicationSection from "@/components/ApplicationSection";
import { useEffect } from "react";
import FaqSection from "@/components/resources/FaqSection";
import { faqs } from "@/data/resourcesData";

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Filter to show only the most important FAQs on the homepage
  const importantFaqs = faqs.filter(faq => 
    faq.id <= 9 // Show only first 9 FAQs across categories
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ApplicationSection />
        <Mission />
        <AimsObjectives />
        <Approach />
        <GlobalEngagement />
        <FinancialAidCSR />
        <Programs />
        <FaqSection faqs={importantFaqs} />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
