
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ChevronDown, Search, HelpCircle, Filter, BookOpen } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();

  const categories = Array.from(new Set(faqs.map((faq) => faq.category || "General")));
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isSearching, setIsSearching] = useState(false);

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

  useEffect(() => {
    // Animation for search transitions
    setIsSearching(!!searchQuery);
  }, [searchQuery]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    toast({
      title: `Viewing ${category} FAQs`,
      description: category === "All" ? "Showing most relevant FAQs from each category" : `Showing all ${category} questions`,
    });
  };

  const filteredFaqs = getFilteredFaqs();

  return (
    <section id="faq" className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-accent-green/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="text-accent-green h-10 w-10 mr-3" />
            <span className="bg-accent-green/10 text-accent-green px-4 py-1 rounded-full text-sm font-medium">Got Questions?</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our programs, donation process, and volunteering opportunities.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Visual banner/image */}
          <div className="relative rounded-xl overflow-hidden mb-10 shadow-xl">
            <img 
              src="/public/lovable-uploads/1994e886-9ac1-4d3b-b674-24257faab00f.png" 
              alt="People discussing questions and answers" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8">
              <p className="text-white text-lg font-medium drop-shadow-md max-w-md text-center px-4">
                Our team is dedicated to answering your questions and helping you navigate our resources
              </p>
            </div>
          </div>
          
          {/* Search and filter */}
          <div className="mb-10 space-y-6">
            <div className="relative transition-all duration-300 transform hover:scale-[1.01]">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isSearching ? 'text-primary-green' : 'text-gray-400'} h-5 w-5 transition-colors`} />
              <input
                type="text"
                placeholder="Search FAQs..."
                className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green shadow-md focus:shadow-lg transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="flex items-center mr-2">
                <Filter className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-500">Filter:</span>
              </div>
              
              <button
                onClick={() => handleCategoryChange("All")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === "All" 
                    ? "bg-primary-green text-white shadow-md" 
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                All
              </button>
              
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary-green text-white shadow-md"
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
              <Accordion type="single" collapsible className="space-y-5">
                {filteredFaqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id.toString()} 
                    className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all hover:shadow-lg data-[state=open]:shadow-lg"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-start text-left">
                        <span className="text-primary-green font-bold mr-3 text-xl">Q:</span>
                        <h3 className="text-lg font-medium">
                          {faq.question}
                        </h3>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="px-6 pb-6">
                      <div className="flex pt-2">
                        <span className="text-secondary-orange font-bold mr-3 text-xl">A:</span>
                        <div className="text-gray-600">
                          {faq.answer}
                          
                          {/* Show category tag */}
                          <div className="mt-4 pt-3 border-t border-gray-100">
                            <span className="inline-block px-3 py-1 bg-accent-green/10 text-accent-green text-xs rounded-full">
                              {faq.category || "General"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl shadow-inner">
                <BookOpen className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                <p className="text-gray-500 mb-2">No FAQs match your search criteria</p>
                <button 
                  onClick={() => setSearchQuery("")}
                  className="text-primary-green hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
          
          <div className="mt-12 text-center bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <img 
              src="/public/lovable-uploads/adafedbe-531e-4b59-abd9-9dfe8fdb2c0b.png" 
              alt="Contact us" 
              className="w-24 h-24 mx-auto mb-4 rounded-full shadow-md object-cover"
            />
            <p className="text-gray-700 mb-4">
              Don't see your question here? Our team is ready to help!
            </p>
            <Link 
              to="/contact"
              className="btn-primary inline-flex items-center"
            >
              Ask a Question
              <ChevronDown className="ml-1 h-4 w-4 rotate-[-90deg]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
