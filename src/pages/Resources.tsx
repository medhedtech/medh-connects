
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesHeader from "@/components/resources/ResourcesHeader";
import BlogSection from "@/components/resources/BlogSection";
import EventsSection from "@/components/resources/EventsSection";
import FaqSection from "@/components/resources/FaqSection";
import { blogPosts, events, faqs } from "@/data/resourcesData";

const Resources = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Handle hash links for specific sections
    const { hash } = window.location;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <ResourcesHeader 
          title="Resources" 
          description="Insights, updates, and information to keep you connected with our mission and impact."
        />
        <BlogSection blogPosts={blogPosts} />
        <EventsSection events={events} />
        <FaqSection faqs={faqs} />
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
