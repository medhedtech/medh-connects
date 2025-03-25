
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-primary-green/10 py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Learn about our journey, our team, and our commitment to creating positive change.
            </p>
          </div>
        </div>
        
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="bg-primary-green/10 text-primary-green px-4 py-1 rounded-full text-sm font-medium">Our Story</span>
                <h2 className="mt-4 text-3xl font-bold mb-6">The Medh Foundation Journey</h2>
                <p className="text-gray-700 mb-4">
                  The Medh Foundation was established in 2010 with a vision to transform the lives of underprivileged children and single mothers in India. What began as a small initiative in one community has now grown into a comprehensive support system spanning multiple regions.
                </p>
                <p className="text-gray-700 mb-4">
                  Our founders, inspired by their own experiences with educational inequality, set out to create an organization that addresses not just immediate needs but builds long-term solutions for sustainable development.
                </p>
                <p className="text-gray-700">
                  Over the years, we have expanded our programs to include quality education for children, skill development for single mothers, and community empowerment initiatives that foster self-sufficiency and dignity.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                  alt="Medh Foundation journey"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="bg-secondary-orange/10 text-secondary-orange px-4 py-1 rounded-full text-sm font-medium">Meet The Team</span>
              <h2 className="mt-4 text-3xl font-bold">Our Leadership</h2>
              <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                Dedicated professionals committed to our mission of empowerment through education and skill development.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={`https://via.placeholder.com/400x400?text=Team+Member+${item}`}
                      alt={`Team member ${item}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Team Member Name</h3>
                    <p className="text-primary-green font-medium mb-3">Position</p>
                    <p className="text-gray-600">
                      Brief description about the team member's background, expertise, and contribution to the foundation.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="partners" className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="bg-accent-green/10 text-accent-green px-4 py-1 rounded-full text-sm font-medium">Collaborators</span>
              <h2 className="mt-4 text-3xl font-bold">Our Partners</h2>
              <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                We collaborate with organizations that share our commitment to creating positive social impact.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div 
                  key={item} 
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <img 
                    src={`https://via.placeholder.com/200x80?text=Partner+${item}`}
                    alt={`Partner ${item}`}
                    className="h-12 mb-4"
                  />
                  <h4 className="font-bold text-center">Partner Name</h4>
                  <p className="text-gray-600 text-sm text-center mt-2">
                    Brief description of partnership.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
