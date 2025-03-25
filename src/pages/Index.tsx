
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import AimsObjectives from "@/components/AimsObjectives";
import Approach from "@/components/Approach";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import Partners from "@/components/Partners";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";
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
        <Mission />
        <AimsObjectives />
        <Approach />
        <Programs />
        <News />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
