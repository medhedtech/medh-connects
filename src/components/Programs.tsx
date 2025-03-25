
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Programs = () => {
  const programs = [
    {
      id: "education",
      title: "Children's Education Initiative",
      description: "Providing quality education and academic support to underprivileged children through innovative teaching methods and modern facilities.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      color: "bg-primary-green"
    },
    {
      id: "mothers",
      title: "Single Mothers' Skill Development",
      description: "Empowering single mothers through vocational training, digital literacy, and entrepreneurship programs to achieve financial independence.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      color: "bg-secondary-orange"
    },
    {
      id: "community",
      title: "Community Empowerment Projects",
      description: "Building stronger communities through health awareness, environmental initiatives, and cultural programs that foster collective growth.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      color: "bg-accent-green"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-secondary-orange/10 text-secondary-orange px-4 py-1 rounded-full text-sm font-medium">What We Do</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Our Programs</h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Through our carefully designed programs, we address the educational needs of children and empower single mothers with skills for economic independence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.id}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group bg-white"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10 transition-opacity group-hover:opacity-0" />
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className={`${program.color} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                    Program
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">
                  {program.description}
                </p>
                <Link 
                  to={`/programs#${program.id}`}
                  className="inline-flex items-center font-medium text-primary-green hover:text-primary-green/80 transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/programs"
            className="btn-outline"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Programs;
