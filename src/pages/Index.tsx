
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
import ApplicationButton from "@/components/ApplicationButton";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex justify-center">
          <ApplicationButton size="lg" />
        </div>
        <Mission />
        <AimsObjectives />
        <Approach />
        <GlobalEngagement />
        <FinancialAidCSR />
        <Programs />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
