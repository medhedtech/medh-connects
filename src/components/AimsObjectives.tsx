
import {
  Award,
  BookOpen,
  BrainCircuit,
  Building,
  FolderSync,
  GraduationCap,
  HandHeart,
  Lightbulb,
  School,
  Target,
  Users
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AimsObjectives = () => {
  const objectives = [
    {
      title: "Holistic Family Empowerment",
      description: "Provide targeted financial support and skill development opportunities to ensure that neither a child's education nor a single mother's livelihood is hindered by economic constraints.",
      icon: <HandHeart className="w-10 h-10 text-primary-green" />
    },
    {
      title: "Educational Excellence for Children",
      description: "Facilitate access to high-quality primary and secondary education for children, laying a solid academic foundation for their future.",
      icon: <GraduationCap className="w-10 h-10 text-secondary-orange" />
    },
    {
      title: "Skill Enrichment for Single Mothers",
      description: "Curate a diverse portfolio of online courses and interactive workshops specifically designed for single mothers, focusing on marketable skills, entrepreneurship, and financial literacy.",
      icon: <BrainCircuit className="w-10 h-10 text-accent-green" />
    },
    {
      title: "Integrated Family Support",
      description: "Develop programs that synergize children's education with mothers' skill development, creating a holistic support system that strengthens entire families.",
      icon: <Users className="w-10 h-10 text-primary-green" />
    },
    {
      title: "Local Partnerships",
      description: "Forge strategic alliances with local organizations, businesses, and educational institutions to expand our reach and create potential employment pathways.",
      icon: <Building className="w-10 h-10 text-secondary-orange" />
    },
    {
      title: "Community Outreach Strategies",
      description: "Implement targeted outreach programs, leveraging community leaders, social media, and local events to ensure our initiatives reach the intended audience.",
      icon: <FolderSync className="w-10 h-10 text-accent-green" />
    },
    {
      title: "Learning Ecosystem Enhancement",
      description: "Elevate educational infrastructure for both children and mothers, focusing on versatile learning spaces that accommodate various programs.",
      icon: <School className="w-10 h-10 text-primary-green" />
    },
    {
      title: "Educator and Mentor Empowerment",
      description: "Implement comprehensive training programs for teachers and mentors, equipping them to address the unique needs of children and single mothers.",
      icon: <BookOpen className="w-10 h-10 text-secondary-orange" />
    },
    {
      title: "Global Synergy",
      description: "Cultivate an international alliance of passionate individuals and organizations, pooling resources and expertise to amplify our initiatives.",
      icon: <FolderSync className="w-10 h-10 text-accent-green" />
    },
    {
      title: "Impact Optimization",
      description: "Implement a sophisticated monitoring and evaluation framework to continually assess, refine, and maximize the impact of our integrated programs.",
      icon: <Target className="w-10 h-10 text-primary-green" />
    },
    {
      title: "Infrastructure and Resources",
      description: "Enhance educational facilities, including state-of-the-art STEM-based digital learning centers, to foster optimal learning environments.",
      icon: <Lightbulb className="w-10 h-10 text-secondary-orange" />
    }
  ];

  return (
    <section id="aims-objectives" className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-accent-green/10 text-accent-green px-4 py-1 rounded-full text-sm font-medium">Our Direction</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Aims & Objectives</h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            We're working toward a future where every child receives quality education and every single mother is empowered with skills for financial independence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((objective, index) => (
            <Card key={index} className="border border-gray-100 hover:border-primary-green/30 hover:shadow-lg transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-50 p-3 rounded-xl">
                    {objective.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{objective.title}</h3>
                    <p className="text-gray-600 text-sm">{objective.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="glass p-6 rounded-xl max-w-2xl text-center">
            <Award className="w-12 h-12 text-secondary-orange mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Commitment to Excellence</h3>
            <p className="text-gray-700">
              Through our strategic aims and objectives, we strive to create lasting positive change by empowering both children and their mothers, building resilient families and communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AimsObjectives;
