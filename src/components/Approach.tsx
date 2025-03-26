
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowUpRight, 
  Bus, 
  GraduationCap, 
  Lightbulb, 
  Users, 
  GanttChart,
  Headset, 
  Heart, 
  Leaf, 
  Globe, 
  HeartHandshake
} from "lucide-react";

const Approach = () => {
  const approachStrategies = [
    {
      title: "Mentorship Matching Program",
      description: "Pair successful professionals with single mothers and their children for long-term guidance and support in both education and career development.",
      icon: <GraduationCap className="w-10 h-10 text-primary-green" />,
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      title: "Mobile Learning Labs",
      description: "Deploy fully-equipped mobile classrooms to reach remote areas, offering both children's education and skill development courses for single mothers.",
      icon: <Bus className="w-10 h-10 text-secondary-orange" />,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      title: "Family Entrepreneurship Incubator",
      description: "Create a program where single mothers and their children can collaboratively develop small business ideas, fostering both educational and entrepreneurial skills.",
      icon: <Lightbulb className="w-10 h-10 text-accent-green" />,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      title: "Intergenerational Skill Exchange",
      description: "Organize workshops where children teach digital skills to their mothers, while mothers share life skills and traditional knowledge with children.",
      icon: <HeartHandshake className="w-10 h-10 text-primary-green" />,
      image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      title: "Community Learning Circles",
      description: "Establish neighborhood-based study and skill-sharing groups, fostering a supportive learning environment for both generations.",
      icon: <Users className="w-10 h-10 text-secondary-orange" />,
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      title: "Virtual Reality Career Exploration",
      description: "Utilize VR technology to allow children and single mothers to experience various professions, inspiring future career paths.",
      icon: <Headset className="w-10 h-10 text-accent-green" />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      title: "Flexible Childcare Network",
      description: "Develop a system where single mothers can offer and receive childcare services, allowing them to attend skill development courses while ensuring their children are cared for.",
      icon: <Heart className="w-10 h-10 text-primary-green" />,
      image: "https://images.unsplash.com/photo-1535572290543-960a8046f5af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      title: "Green Skills Initiative",
      description: "Focus on teaching environmental sustainability skills to both children and mothers, preparing them for the growing green economy.",
      icon: <Leaf className="w-10 h-10 text-secondary-orange" />,
      image: "https://images.pexels.com/photos/2559749/pexels-photo-2559749.jpeg?auto=compress&cs=tinysrgb&w=1500"
    },
    {
      title: "Family Health and Wellness Program",
      description: "Integrate health education and wellness practices into both children's curriculum and mothers' skill development courses, promoting holistic family well-being.",
      icon: <Heart className="w-10 h-10 text-accent-green" />,
      image: "https://images.unsplash.com/photo-1505455184862-554165e5f6ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      title: "Cross-Cultural Exchange Program",
      description: "Partner with international organizations to facilitate cultural exchanges, broadening horizons for both children and single mothers while developing global competencies.",
      icon: <Globe className="w-10 h-10 text-primary-green" />,
      image: "https://images.pexels.com/photos/6156375/pexels-photo-6156375.jpeg?auto=compress&cs=tinysrgb&w=1500"
    }
  ];

  return (
    <section id="approach" className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-primary-green/10 text-primary-green px-4 py-1 rounded-full text-sm font-medium">Our Methodology</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Our Approach</h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Medh Foundation works to create synergies between
            children's education and single mothers' skill-building programs.
            This combined approach helps strengthen families and grow communities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approachStrategies.map((strategy, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-transparent"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={strategy.image} 
                  alt={strategy.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 w-full">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{strategy.title}</h3>
                    <span className="bg-white/20 backdrop-blur-sm p-1.5 rounded-full text-white group-hover:bg-primary-green transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </div>
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-50 p-3 rounded-xl">
                    {strategy.icon}
                  </div>
                  <p className="text-gray-600 text-sm">{strategy.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary-green/10 to-secondary-orange/10 p-8 rounded-xl text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Integrated Development Model</h3>
            <p className="text-gray-700">
              Our strategic approach ensures that every initiative simultaneously addresses the educational needs of children 
              while empowering single mothers with vital skills. This dual-focus methodology creates sustainable pathways for 
              family advancement and community growth.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="flex items-center gap-3 py-2 px-4 bg-white/50 backdrop-blur-sm rounded-full text-primary-green font-medium border border-primary-green/20">
                <GanttChart className="w-5 h-5" />
                <span>Synergistic Growth Model</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
