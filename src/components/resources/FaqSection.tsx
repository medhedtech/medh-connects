
import { Link } from "react-router-dom";

interface Faq {
  id: number;
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: Faq[];
}

const FaqSection = ({ faqs }: FaqSectionProps) => {
  return (
    <section id="faq" className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-accent-green/10 text-accent-green px-4 py-1 rounded-full text-sm font-medium">Got Questions?</span>
          <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our programs, donation process, and volunteering opportunities.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold mb-3 flex items-start">
                  <span className="text-primary-green mr-3">Q:</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-gray-600 pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-700 mb-4">
              Don't see your question here? Contact us for more information.
            </p>
            <Link 
              to="/contact"
              className="btn-primary"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
