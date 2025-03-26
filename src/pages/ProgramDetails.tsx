
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonateButton from "@/components/DonateButton";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Book, 
  Code, 
  Heart, 
  Clock, 
  DollarSign, 
  Brain, 
  UserPlus, 
  Languages, 
  Lightbulb,
  GraduationCap
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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

  const courses = [
    {
      id: "communication",
      title: "Communication Skills",
      icon: <GraduationCap className="h-10 w-10 text-primary-green" />,
      description: "Master effective communication techniques for professional and personal success.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      color: "bg-primary-green",
      courses: [
        "Public speaking and presentation skills",
        "Business writing and email etiquette",
        "Effective verbal and non-verbal communication"
      ]
    },
    {
      id: "digital",
      title: "Digital Literacy and Coding",
      icon: <Code className="h-10 w-10 text-secondary-orange" />,
      description: "Learn essential digital skills and programming fundamentals for the modern workplace.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      color: "bg-secondary-orange",
      courses: [
        "Web and app development",
        "Data analysis and visualization",
        "AI & Data science"
      ]
    },
    {
      id: "emotional",
      title: "Emotional Intelligence",
      icon: <Brain className="h-10 w-10 text-accent-green" />,
      description: "Develop your emotional intelligence to build stronger relationships and better manage stress.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      color: "bg-accent-green",
      courses: [
        "Understanding and managing emotions",
        "Empathy and relationship building",
        "Conflict resolution skills",
        "Coping with stress and anxiety"
      ]
    },
    {
      id: "healthcare",
      title: "Healthcare and Wellness",
      icon: <Heart className="h-10 w-10 text-primary-green" />,
      description: "Focus on holistic health and wellness practices for a balanced lifestyle.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      color: "bg-primary-green",
      courses: [
        "Nutrition and dietetics",
        "Culinary arts and food technology",
        "Fitness training and sports management",
        "Balancing academic and personal life"
      ]
    },
    {
      id: "language",
      title: "Language and Financial Literacy",
      icon: <Languages className="h-10 w-10 text-secondary-orange" />,
      description: "Improve language skills and gain essential financial knowledge for long-term stability.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      color: "bg-secondary-orange",
      courses: [
        "English Communication",
        "Public Speaking and Creative Writing",
        "Other Foreign languages proficiency",
        "Personal finance management"
      ]
    },
    {
      id: "resilience",
      title: "Resilience Building",
      icon: <Lightbulb className="h-10 w-10 text-accent-green" />,
      description: "Build mental strength and adaptability to overcome life's challenges.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      color: "bg-accent-green",
      courses: [
        "Coping strategies for adversity",
        "Developing a growth mindset",
        "Building self-confidence and self-esteem"
      ]
    },
    {
      id: "selfawareness",
      title: "Self-Awareness and Confidence Building",
      icon: <UserPlus className="h-10 w-10 text-primary-green" />,
      description: "Discover your strengths and build the confidence to achieve your goals.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      color: "bg-primary-green",
      courses: [
        "Understanding personal strengths and weaknesses",
        "Building self-esteem and confidence",
        "Setting personal goals and aspirations"
      ]
    },
    {
      id: "social",
      title: "Social Skills and Teamwork",
      icon: <UserPlus className="h-10 w-10 text-secondary-orange" />,
      description: "Enhance your ability to connect with others and work effectively in teams.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      color: "bg-secondary-orange",
      courses: [
        "Building friendships and social networks",
        "Teamwork and collaboration exercises",
        "Conflict resolution and negotiation"
      ]
    },
    {
      id: "time",
      title: "Time Management and Productivity",
      icon: <Clock className="h-10 w-10 text-accent-green" />,
      description: "Learn effective strategies to manage your time and increase productivity.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      color: "bg-accent-green",
      courses: [
        "Prioritization and goal setting",
        "Overcoming procrastination",
        "Efficient study and work habits"
      ]
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
            className="py-16 px-4 md:px-8 scroll-mt-24 border-b border-gray-100"
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

        {/* Courses Section */}
        <section id="courses" className="py-20 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="bg-secondary-orange/10 text-secondary-orange px-4 py-1 rounded-full text-sm font-medium">Skills for Success</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold">Our Courses</h2>
              <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                Tailored skill development courses for students and single mothers to enhance their careers and build mental strength.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <Card 
                  key={course.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                >
                  <div className={`${course.color} h-2 w-full`}></div>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <CardHeader className="flex flex-row items-center gap-4">
                    {course.icon}
                    <div>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription className="text-sm">{course.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <h4 className="font-medium text-sm mb-2">Course Offerings:</h4>
                    <ul className="space-y-1">
                      {course.courses.map((item, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-green mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-center">Course Availability</h3>
                <p className="text-gray-700 mb-8 text-center">
                  These courses are tailored to different age groups and educational levels, ensuring that students gain the skills necessary for both professional success and personal well-being.
                </p>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Target Group</TableHead>
                      <TableHead>Course Level</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Format</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>High School Students</TableCell>
                      <TableCell>Introductory</TableCell>
                      <TableCell>4-8 weeks</TableCell>
                      <TableCell>In-person & Online</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>University Students</TableCell>
                      <TableCell>Intermediate</TableCell>
                      <TableCell>8-12 weeks</TableCell>
                      <TableCell>Hybrid</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Single Mothers</TableCell>
                      <TableCell>Flexible</TableCell>
                      <TableCell>6-10 weeks</TableCell>
                      <TableCell>Weekend & Evening</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Working Professionals</TableCell>
                      <TableCell>Advanced</TableCell>
                      <TableCell>10-14 weeks</TableCell>
                      <TableCell>Self-paced Online</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                
                <div className="mt-8 text-center">
                  <Link 
                    to="/get-involved#courses" 
                    className="btn-primary inline-flex items-center"
                  >
                    <span>Apply for Courses</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProgramDetails;
