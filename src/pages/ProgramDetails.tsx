
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonateButton from "@/components/DonateButton";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProgramDetails = () => {
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

  const programs = [
    {
      id: "education",
      title: "Children's Education Initiative",
      description: "Providing quality education and academic support to underprivileged children through innovative teaching methods and modern facilities.",
      longDescription: [
        "Our Children's Education Initiative aims to provide comprehensive educational support to underprivileged children, ensuring they have access to quality learning resources and opportunities for holistic development.",
        "We believe that education is the most powerful tool for transforming lives and breaking the cycle of poverty. Through our various educational programs, we strive to create a nurturing environment where children can discover their potential and develop the skills necessary for future success."
      ],
      keyFeatures: [
        "Quality education in modern classrooms",
        "Digital literacy programs",
        "After-school academic support",
        "Arts and creativity workshops",
        "Sports and physical education",
        "Life skills development",
        "Nutritional support",
        "Educational scholarships"
      ],
      impact: "Over 5,000 children have benefited from our education programs, with 85% showing significant improvement in academic performance and overall development.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      color: "bg-primary-green"
    },
    {
      id: "mothers",
      title: "Single Mothers' Skill Development",
      description: "Empowering single mothers through vocational training, digital literacy, and entrepreneurship programs to achieve financial independence.",
      longDescription: [
        "Our Single Mothers' Skill Development program is designed to empower women who are the sole providers for their families. We focus on building practical skills that enhance employability and create opportunities for sustainable livelihoods.",
        "We understand that when mothers are economically empowered, entire families benefit. Our comprehensive approach includes vocational training, financial literacy, and ongoing mentorship to ensure long-term success."
      ],
      keyFeatures: [
        "Vocational skill training",
        "Digital literacy programs",
        "Financial management workshops",
        "Entrepreneurship development",
        "Micro-enterprise support",
        "Marketing and business skills",
        "Job placement assistance",
        "Ongoing mentorship"
      ],
      impact: "Over 2,000 single mothers have gained financial independence through our skill development programs, with 70% reporting a significant increase in income and improved quality of life.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      color: "bg-secondary-orange"
    },
    {
      id: "community",
      title: "Community Empowerment Projects",
      description: "Building stronger communities through health awareness, environmental initiatives, and cultural programs that foster collective growth.",
      longDescription: [
        "Our Community Empowerment Projects focus on creating sustainable, self-sufficient communities by addressing various social, health, and environmental challenges.",
        "We believe that lasting change happens when entire communities work together toward common goals. Our initiatives foster collaboration, leadership, and a sense of ownership among community members, leading to holistic development."
      ],
      keyFeatures: [
        "Community health awareness",
        "Environmental conservation",
        "Water and sanitation programs",
        "Community gardens",
        "Cultural preservation",
        "Leadership development",
        "Conflict resolution training",
        "Civic engagement initiatives"
      ],
      impact: "We have implemented community empowerment projects in 25 localities, benefiting over 10,000 people and resulting in measurable improvements in health indicators, environmental conditions, and social cohesion.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      color: "bg-accent-green"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-primary-green/10 py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover how we're making a difference through our carefully designed initiatives.
            </p>
          </div>
        </div>
        
        {programs.map((program) => (
          <section 
            key={program.id} 
            id={program.id} 
            className="py-16 px-4 md:px-8 scroll-mt-24 border-b border-gray-100 last:border-0"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div className="order-2 md:order-1">
                  <span className={`${program.color} text-white px-4 py-1 rounded-full text-sm font-medium`}>
                    Program
                  </span>
                  <h2 className="mt-4 text-3xl font-bold mb-6">{program.title}</h2>
                  {program.longDescription.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                  ))}
                </div>
                <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {program.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-green mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Impact</h3>
                  <p className="text-gray-700 mb-6">{program.impact}</p>
                  <div className="flex flex-col space-y-4">
                    <DonateButton className="w-full justify-center" />
                    <Link 
                      to="/get-involved#volunteer" 
                      className="btn-outline w-full justify-center"
                    >
                      Volunteer for this Program
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default ProgramDetails;
