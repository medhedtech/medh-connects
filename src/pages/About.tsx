
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Combined and alphabetically sorted leadership team (including former advisory board members)
  const leadershipTeam = [
    {
      name: "Anil Nayak",
      image: "/lovable-uploads/1994e886-9ac1-4d3b-b674-24257faab00f.png",
      linkedIn: "https://www.linkedin.com/in/anilnayak2006/"
    },
    {
      name: "Jatin Wadhwa",
      image: "/lovable-uploads/adafedbe-531e-4b59-abd9-9dfe8fdb2c0b.png"
    },
    {
      name: "Neeraj Narain",
      image: "/lovable-uploads/a89d24e6-6243-4bda-a8c3-0160f6a7c639.png"
    },
    {
      name: "Niti Saxena",
      image: "/lovable-uploads/e5743892-ccde-4349-a4d5-6bef77007eb1.png"
    },
    {
      name: "Robinson Emmanuel",
      image: "/lovable-uploads/40f164b0-a792-4362-ba5a-5a680af661bc.png"
    },
    {
      name: "Upendra Upadhyay",
      image: "/lovable-uploads/de9ae4e0-c53e-4833-b3f1-801224a56329.png"
    },
    {
      name: "Vikram Srivastava",
      image: "/lovable-uploads/081ac9a9-9947-4907-b019-fd919f097b66.png"
    }
  ];

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
                  The Medh Foundation is being established with a visionary goal to transform the lives of underprivileged children and single mothers in India. What begins as a focused initiative in one community is set to grow into a comprehensive support system spanning multiple regions.
                </p>
                <p className="text-gray-700 mb-4">
                  Our founders, inspired by their own experiences with educational inequality, are setting out to create an organization that addresses not just immediate needs but builds long-term solutions for sustainable development.
                </p>
                <p className="text-gray-700">
                  As we launch our foundation, we are developing programs that will include quality education for children, skill development for single mothers, and community empowerment initiatives designed to foster self-sufficiency and dignity.
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadershipTeam.map((member, index) => (
                <Card key={index} className="bg-white overflow-hidden hover:shadow-lg transition-all">
                  <div className="p-6 flex flex-col items-center text-center">
                    <Avatar className="h-32 w-32 mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold mb-3">{member.name}</h3>
                    <div className="mt-2">
                      {member.linkedIn ? (
                        <a 
                          href={member.linkedIn}
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                          aria-label={`${member.name}'s LinkedIn profile`}
                        >
                          <Linkedin className="h-4 w-4 text-gray-600" />
                        </a>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full cursor-not-allowed">
                          <Linkedin className="h-4 w-4 text-gray-400" />
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Partners section temporarily hidden
        <section id="partners" className="py-16 px-4 md:px-8 bg-gray-50">
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
        */}
      </main>
      <Footer />
    </div>
  );
};

export default About;
