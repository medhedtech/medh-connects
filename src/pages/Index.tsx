
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

  // Filter to show a good selection of FAQs on the homepage across categories
  const homepageFaqs = [];
  
  // Get 3 FAQs from each major category
  const donationFaqs = faqs.filter(faq => faq.category === "Donations").slice(0, 3);
  const programFaqs = faqs.filter(faq => faq.category === "Programs").slice(0, 2);
  const volunteerFaqs = faqs.filter(faq => faq.category === "Volunteering").slice(0, 2);
  const financialSupportFaqs = faqs.filter(faq => faq.category === "Financial Support").slice(0, 2);
  
  // Combine all the filtered FAQs
  homepageFaqs.push(...donationFaqs, ...programFaqs, ...volunteerFaqs, ...financialSupportFaqs);

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
        <FaqSection faqs={homepageFaqs} />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
