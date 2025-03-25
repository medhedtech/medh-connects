import { useState, useEffect } from "react";
import DonateButton from "./DonateButton";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [{
    image: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    title: "Educating Children"
  }, {
    image: "https://images.unsplash.com/photo-1596305589430-5b26f0b7a86d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    title: "Empowering Mothers"
  }, {
    image: "https://images.unsplash.com/photo-1592188657836-c9d31e397582?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    title: "Building Communities"
  }];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => prev === slides.length - 1 ? 0 : prev + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  const scrollToMission = () => {
    const missionSection = document.getElementById("mission");
    missionSection?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return <section className="relative h-screen w-full overflow-hidden bg-gradient-to-r from-gray-900 to-transparent">
      <div className="h-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="relative z-10 flex flex-col justify-center items-start px-6 md:px-10 py-12">
          <div className="animate-fade-in max-w-xl">
            <div className="mb-6">
              <span className="bg-white/20 backdrop-blur-sm text-white px-5 py-1.5 rounded-full text-sm font-medium border border-white/30 shadow-lg">
                Welcome to Medh Foundation
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-sans leading-tight text-left drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              Educating Children, <br />
              <span className="text-accent-green font-extrabold text-shadow-lg">Empowering Mothers</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 font-serif drop-shadow-md bg-black/30 backdrop-blur-sm p-4 rounded-lg text-left">Creating positive change through education and skill development for children and single mothers in India.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <DonateButton size="lg" />
              <a href="/get-involved" className="inline-flex items-center gap-2 text-white bg-white/30 backdrop-blur-sm hover:bg-white/40 font-medium text-lg py-3 px-8 rounded-full transition-all hover:shadow-lg border border-white/40 hover:translate-y-[-2px]">
                <span>Volunteer</span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden h-full w-full hidden md:block">
          {slides.map((slide, index) => <div key={index} className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out" style={{
          opacity: activeSlide === index ? 1 : 0,
          zIndex: activeSlide === index ? 1 : 0
        }}>
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-center animate-image-rotate" />
            </div>)}
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 md:left-1/4 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => <button key={index} onClick={() => handleSlideChange(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSlide === index ? "bg-white w-8" : "bg-white/50"}`} aria-label={`Go to slide ${index + 1}`} />)}
      </div>
      
      <button onClick={scrollToMission} className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white hover:text-accent-green transition-colors z-20" aria-label="Scroll down">
        <ArrowDown className="animate-bounce w-6 h-6" />
      </button>

      <div className="absolute inset-0 md:hidden">
        {slides.map((slide, index) => <div key={index} className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out" style={{
        opacity: activeSlide === index ? 1 : 0,
        zIndex: activeSlide === index ? 1 : 0
      }}>
            <div className="absolute inset-0 bg-black/70" />
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-center animate-image-rotate" />
          </div>)}
      </div>
    </section>;
};

export default Hero;
