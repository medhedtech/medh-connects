
import { useState } from "react";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ChevronDown, Search } from "lucide-react";

interface Faq {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

interface FaqSectionProps {
  faqs: Faq[];
}

const FaqSection = ({ faqs }: FaqSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItem, setOpenItem] = useState<number | null>(null);

  const categories = Array.from(new Set(faqs.map((faq) => faq.category || "General")));
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Get FAQs for display
  const getFilteredFaqs = () => {
    // First apply the search filter
    const searchFiltered = faqs.filter((faq) => {
      return faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
             faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    });
    
    // If not on "All" category, just filter by the active category
    if (activeCategory !== "All") {
      return searchFiltered.filter(faq => 
        faq.category === activeCategory || (!faq.category && activeCategory === "General")
      );
    }
    
    // For "All" category, show 2-3 most relevant FAQs from each category
    const faqsByCategory: Record<string, Faq[]> = {};
    
    // Group FAQs by category
    categories.forEach(category => {
      faqsByCategory[category] = searchFiltered.filter(faq => 
        faq.category === category || (!faq.category && category === "General")
      ).slice(0, 3); // Take top 3 from each category
    });
    
    // Flatten the grouped FAQs into a single array
    return Object.values(faqsByCategory).flat();
  };

  const filteredFaqs = getFilteredFaqs();

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
          {/* Search and filter */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory("All")}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === "All" 
                    ? "bg-primary-green text-white" 
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                All
              </button>
              
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary-green text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* FAQ items */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <Collapsible
                  key={faq.id}
                  open={openItem === faq.id}
                  onOpenChange={() => setOpenItem(openItem === faq.id ? null : faq.id)}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="p-6">
                    <CollapsibleTrigger className="flex items-start justify-between w-full text-left">
                      <h3 className="text-lg font-bold flex items-start">
                        <span className="text-primary-green mr-3">Q:</span>
                        <span>{faq.question}</span>
                      </h3>
                      <ChevronDown 
                        className={`h-5 w-5 text-gray-500 transition-transform ${openItem === faq.id ? "transform rotate-180" : ""}`} 
                      />
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="pt-4">
                      <p className="text-gray-600 pl-6">
                        {faq.answer}
                      </p>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No FAQs match your search criteria</p>
              </div>
            )}
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
