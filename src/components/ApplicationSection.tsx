
import { useFinancialSupportForm } from "@/hooks/useFinancialSupportForm";
import { GraduationCap, Users, ArrowRight, BookOpen, UserRound } from "lucide-react";

const ApplicationSection = () => {
  const { openForm } = useFinancialSupportForm();

  return (
    <section className="w-full bg-gradient-to-r from-primary-green/10 to-secondary-orange/10 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Online Application</h2>
          <p className="text-gray-600 mt-2">Choose the support program that fits your needs</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Education Support Card */}
          <button 
            onClick={() => openForm("education")}
            className="group relative bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left border border-primary-green/20 hover:border-primary-green"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-green/5 rounded-bl-[100px] transition-all duration-300 group-hover:bg-primary-green/10"></div>
            <div className="p-4 bg-primary-green/10 rounded-full mb-6">
              <BookOpen className="h-8 w-8 text-primary-green" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">Financial Support for Education</h3>
            <p className="text-gray-600 mb-6 z-10">
              Access financial assistance for educational expenses, scholarships, and learning resources for children.
            </p>
            <div className="mt-auto flex items-center text-primary-green font-medium group-hover:translate-x-2 transition-transform">
              <span>Apply Now</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </div>
          </button>
          
          {/* Upskilling Support Card */}
          <button 
            onClick={() => openForm("upskilling")}
            className="group relative bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left border border-secondary-orange/20 hover:border-secondary-orange"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-orange/5 rounded-bl-[100px] transition-all duration-300 group-hover:bg-secondary-orange/10"></div>
            <div className="p-4 bg-secondary-orange/10 rounded-full mb-6">
              <UserRound className="h-8 w-8 text-secondary-orange" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">Upskilling and Job Assistance</h3>
            <p className="text-gray-600 mb-6 z-10">
              Dedicated support for single mothers focusing on career development, skill training, and employment opportunities.
            </p>
            <div className="mt-auto flex items-center text-secondary-orange font-medium group-hover:translate-x-2 transition-transform">
              <span>Apply Now</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
