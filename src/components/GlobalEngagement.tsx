
import React from "react";
import { 
  Users, 
  Handshake, 
  Globe, 
  Share2, 
  Award, 
  Megaphone, 
  School,
  Network
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface StrategyCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  color: string;
}

const StrategyCard = ({ title, icon, children, color }: StrategyCardProps) => (
  <div className="rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 bg-white group">
    <div className={`${color} p-6 flex justify-between items-center`}>
      <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
      <div className="bg-white/20 p-3 rounded-full">{icon}</div>
    </div>
    <div className="p-6 space-y-4">
      {children}
    </div>
  </div>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3 group">
    <div className="h-6 w-6 rounded-full bg-primary-green/10 flex items-center justify-center mt-0.5 group-hover:bg-primary-green/20 transition-colors">
      <div className="h-2 w-2 rounded-full bg-primary-green"></div>
    </div>
    <p className="text-gray-700">{children}</p>
  </div>
);

const GlobalEngagement = () => {
  return (
    <section id="global-engagement" className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-secondary-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="bg-secondary-orange/10 text-secondary-orange px-4 py-1 rounded-full text-sm font-medium">Global Impact</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Strategies for Fostering Global Engagement</h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Cultivating partnerships and volunteer programs to enhance educational and skill development initiatives worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Volunteer Programs */}
          <StrategyCard 
            title="Volunteer Programs" 
            icon={<Users className="w-8 h-8 text-white" />}
            color="bg-gradient-to-r from-primary-green to-accent-green"
          >
            <ListItem>
              <strong>Recruitment and Training:</strong> Develop a structured recruitment process to attract volunteers with diverse skills and comprehensive training programs.
            </ListItem>
            <ListItem>
              <strong>Flexible Opportunities:</strong> Provide various volunteering options to accommodate different schedules and preferences.
            </ListItem>
            <ListItem>
              <strong>Community Building:</strong> Create a strong volunteer community through regular meetings and networking events.
            </ListItem>
            <div className="mt-6">
              <Button variant="outline" className="w-full">Join as Volunteer</Button>
            </div>
          </StrategyCard>

          {/* Partnerships */}
          <StrategyCard 
            title="Strategic Partnerships" 
            icon={<Handshake className="w-8 h-8 text-white" />}
            color="bg-gradient-to-r from-secondary-orange to-yellow-400"
          >
            <ListItem>
              <strong>Strategic Alliances:</strong> Seek organizations with aligned missions for mutual benefit, focusing on financial aid and CSR initiatives.
            </ListItem>
            <ListItem>
              <strong>Resource Sharing:</strong> Engage in joint projects emphasizing financial assistance and corporate social responsibility.
            </ListItem>
            <ListItem>
              <strong>Formal Agreements:</strong> Establish clear frameworks outlining roles and responsibilities for accountability.
            </ListItem>
            <div className="mt-6">
              <Button variant="outline" className="w-full">Become a Partner</Button>
            </div>
          </StrategyCard>

          {/* Online Platforms */}
          <StrategyCard 
            title="Online Collaboration" 
            icon={<Share2 className="w-8 h-8 text-white" />}
            color="bg-gradient-to-r from-blue-500 to-indigo-500"
          >
            <ListItem>
              <strong>Interactive Portals:</strong> Develop user-friendly platforms for communication and resource sharing among stakeholders.
            </ListItem>
            <ListItem>
              <strong>Virtual Workshops:</strong> Host regular online events to share knowledge and innovative approaches to education.
            </ListItem>
            <ListItem>
              <strong>Global Forums:</strong> Create discussion boards where participants can exchange ideas and collaborate on projects.
            </ListItem>
            <div className="mt-6">
              <Button variant="outline" className="w-full">Join Our Platform</Button>
            </div>
          </StrategyCard>

          {/* Awareness Campaigns */}
          <StrategyCard 
            title="Awareness Campaigns" 
            icon={<Megaphone className="w-8 h-8 text-white" />}
            color="bg-gradient-to-r from-purple-500 to-pink-500"
          >
            <ListItem>
              <strong>Storytelling:</strong> Use compelling stories from beneficiaries to highlight the impact of our initiatives.
            </ListItem>
            <ListItem>
              <strong>Social Media:</strong> Leverage platforms to reach global audiences with targeted campaigns and partnerships.
            </ListItem>
            <ListItem>
              <strong>Collaborative Campaigns:</strong> Partner with media outlets and influential figures to amplify our message.
            </ListItem>
            <div className="mt-6">
              <Button variant="outline" className="w-full">Share Our Story</Button>
            </div>
          </StrategyCard>

          {/* Recognition */}
          <StrategyCard 
            title="Recognition & Incentives" 
            icon={<Award className="w-8 h-8 text-white" />}
            color="bg-gradient-to-r from-amber-500 to-red-500"
          >
            <ListItem>
              <strong>Awards & Certificates:</strong> Recognize outstanding contributors with public acknowledgments of their efforts.
            </ListItem>
            <ListItem>
              <strong>Incentive Programs:</strong> Offer professional development opportunities and networking events to motivate participation.
            </ListItem>
            <ListItem>
              <strong>Impact Reports:</strong> Provide regular feedback showing how contributions have made a difference.
            </ListItem>
            <div className="mt-6">
              <Button variant="outline" className="w-full">View Recognition Program</Button>
            </div>
          </StrategyCard>

          {/* Educational Support */}
          <StrategyCard 
            title="Educational Support" 
            icon={<School className="w-8 h-8 text-white" />}
            color="bg-gradient-to-r from-teal-500 to-cyan-500"
          >
            <ListItem>
              <strong>Teacher Training:</strong> Provide specialized training programs for educators in underserved communities.
            </ListItem>
            <ListItem>
              <strong>Curriculum Development:</strong> Design inclusive educational materials that address diverse learning needs.
            </ListItem>
            <ListItem>
              <strong>Technology Integration:</strong> Implement digital tools to enhance learning experiences and outcomes.
            </ListItem>
            <div className="mt-6">
              <Button variant="outline" className="w-full">Support Education</Button>
            </div>
          </StrategyCard>
        </div>

        {/* Featured Strategy */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary-green/5 to-secondary-orange/5 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute inset-0 -z-10 bg-white/50 blur-xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                alt="Global collaboration"
                className="w-full h-72 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Collaborative Impact Framework</h3>
              <p className="text-gray-700 mb-6">
                Our integrated approach ensures that every strategy works in harmony with others to create a sustainable ecosystem of support. By combining volunteer efforts, strategic partnerships, and innovative platforms, we maximize our global impact and create lasting change.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary-green/10 text-primary-green rounded-full text-sm font-medium">Global Reach</span>
                <span className="px-4 py-2 bg-secondary-orange/10 text-secondary-orange rounded-full text-sm font-medium">Sustainable Impact</span>
                <span className="px-4 py-2 bg-accent-green/10 text-accent-green rounded-full text-sm font-medium">Community Focused</span>
                <span className="px-4 py-2 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium">Innovation Driven</span>
              </div>
              <div className="mt-6">
                <Button className="bg-primary-green text-white hover:bg-primary-green/90">Learn More About Our Impact</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalEngagement;
