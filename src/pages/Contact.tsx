import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Users, Calendar, FileText, CreditCard, HelpCircle, Search, Filter } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ApplicationButton from "@/components/ApplicationButton";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import FormTermsAndCaptcha from "@/components/FormTermsAndCaptcha";
import { faqs } from "@/data/resourcesData";

// Contact form schema with terms acceptance
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  subject: z.string().min(1, {
    message: "Please select a subject.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and privacy policy" }),
  }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [isSearching, setIsSearching] = useState(false);
  
  // Get FAQs for each category
  const donationFaqs = faqs.filter(faq => faq.category === "Donations").slice(0, 8);
  const financialSupportFaqs = faqs.filter(faq => faq.category === "Financial Support" || (!faq.category && /financial|support|apply/.test(faq.question.toLowerCase()))).slice(0, 8);
  const volunteeringFaqs = faqs.filter(faq => faq.category === "Volunteering").slice(0, 8);
  const programsFaqs = faqs.filter(faq => faq.category === "Programs").slice(0, 8);
  const generalFaqs = faqs.filter(faq => faq.category === "General" || !faq.category).slice(0, 8);
  const partnershipFaqs = faqs.filter(faq => faq.category === "Partnerships").slice(0, 8);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    console.log(values);
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
      });
      setIsSubmitting(false);
      form.reset();
    }, 1500);
  }

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Animation for search transitions
  useEffect(() => {
    setIsSearching(!!searchQuery);
  }, [searchQuery]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    toast({
      title: `Viewing ${category} FAQs`,
      description: category === "All" ? "Showing relevant FAQs from each category" : `Showing all ${category} questions`,
    });
  };

  // Categories for FAQs
  const categories = ["All", "Donations", "Financial Support", "Volunteering", "Programs", "Partnerships", "General"];

  // Filter FAQs based on search query and active category
  const getFilteredFaqs = (categoryFaqs: typeof faqs) => {
    return categoryFaqs.filter((faq) => {
      return faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
             faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-primary-green/10 py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get in touch with our team. We're here to answer your questions and provide assistance.
            </p>
          </div>
        </div>
        
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <span className="bg-primary-green/10 p-3 rounded-full mr-4">
                        <MapPin className="text-primary-green w-5 h-5" />
                      </span>
                      <div>
                        <h3 className="font-bold mb-1">Our Location</h3>
                        <p className="text-gray-600">
                          New Delhi and Mumbai
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-green/10 p-3 rounded-full mr-4">
                        <Phone className="text-primary-green w-5 h-5" />
                      </span>
                      <div>
                        <h3 className="font-bold mb-1">Phone Number</h3>
                        <p className="text-gray-600">
                          <a href="tel:+917400115233" className="hover:text-primary-green transition-colors">
                            +91 7400 1152 33
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-green/10 p-3 rounded-full mr-4">
                        <Mail className="text-primary-green w-5 h-5" />
                      </span>
                      <div>
                        <h3 className="font-bold mb-1">Email Address</h3>
                        <p className="text-gray-600">
                          <a href="mailto:care@medhfoundation.org" className="hover:text-primary-green transition-colors">
                            care@medhfoundation.org
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                  <p className="text-gray-600 mb-4">
                    Follow us on social media for updates, stories, and more.
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-primary-green hover:text-white transition-colors p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-primary-green hover:text-white transition-colors p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-primary-green hover:text-white transition-colors p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-primary-green hover:text-white transition-colors p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <input 
                                  type="text"
                                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <input 
                                  type="email"
                                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <input 
                                  type="tel"
                                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                <select 
                                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                                  {...field}
                                >
                                  <option value="">Select a subject</option>
                                  <option value="General Inquiry">General Inquiry</option>
                                  <option value="Donation Question">Donation Question</option>
                                  <option value="Volunteer Information">Volunteer Information</option>
                                  <option value="Program Information">Program Information</option>
                                  <option value="Corporate Partnership">Corporate Partnership</option>
                                  <option value="Other">Other</option>
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                              <textarea 
                                rows={6}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                                {...field}
                              ></textarea>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormTermsAndCaptcha control={form.control} />
                      
                      <button 
                        type="submit" 
                        className="bg-primary-green text-white font-medium py-3 px-6 rounded-md hover:bg-primary-green/90 transition-colors disabled:opacity-70"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
            
            {/* FAQs Section - Enhanced */}
            <section id="faq" className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-accent-green/5 rounded-3xl mt-16">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center mb-4">
                    <HelpCircle className="text-accent-green h-10 w-10 mr-3" />
                    <span className="bg-accent-green/10 text-accent-green px-4 py-1 rounded-full text-sm font-medium">Got Questions?</span>
                  </div>
                  <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
                  <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                    Find comprehensive answers to common questions about our programs, financial support process, and ways to contribute. Whether you're seeking assistance or looking to make a difference, we're here to help.
                  </p>
                </div>

                {/* Visual banner/image - UPDATED IMAGE HERE */}
                <div className="relative rounded-xl overflow-hidden mb-10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
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
                
                <div className="max-w-4xl mx-auto">
                  {/* For Donors Section */}
                  <div className="mb-8">
                    <h3 className={`text-xl font-bold mb-4 text-primary-green flex items-center ${activeCategory !== "All" && activeCategory !== "Donations" ? "hidden" : ""}`}>
                      <span className="bg-primary-green/10 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-green">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </span>
                      For Donors & Supporters
                    </h3>
                    <div className={`space-y-4 ${activeCategory !== "All" && activeCategory !== "Donations" ? "hidden" : ""}`}>
                      <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-md overflow-hidden">
                        {getFilteredFaqs(donationFaqs).map((faq) => (
                          <AccordionItem key={faq.id} value={`donor-${faq.id}`} className="border-b border-gray-100 px-1">
                            <AccordionTrigger className="hover:no-underline py-4 px-4">
                              <div className="flex items-start text-left">
                                <span className="text-primary-green font-bold mr-3 text-xl">Q:</span>
                                <h3 className="text-lg font-medium">{faq.question}</h3>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-6">
                              <div className="flex pt-2">
                                <span className="text-secondary-orange font-bold mr-3 text-xl">A:</span>
                                <div className="text-gray-600">{faq.answer}</div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>

                  {/* For Support Seekers Section */}
                  <div className="mb-8">
                    <h3 className={`text-xl font-bold mb-4 text-primary-green flex items-center ${activeCategory !== "All" && activeCategory !== "Financial Support" ? "hidden" : ""}`}>
                      <span className="bg-primary-green/10 p-2 rounded-full mr-3">
                        <CreditCard className="text-primary-green h-5 w-5" />
                      </span>
                      For Financial Support Seekers
                    </h3>
                    <div className={`space-y-4 ${activeCategory !== "All" && activeCategory !== "Financial Support" ? "hidden" : ""}`}>
                      <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-md overflow-hidden">
                        {getFilteredFaqs(financialSupportFaqs).map((faq) => (
                          <AccordionItem key={faq.id} value={`support-${faq.id}`} className="border-b border-gray-100 px-1">
                            <AccordionTrigger className="hover:no-underline py-4 px-4">
                              <div className="flex items-start text-left">
                                <span className="text-primary-green font-bold mr-3 text-xl">Q:</span>
                                <h3 className="text-lg font-medium">{faq.question}</h3>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-6">
                              <div className="flex pt-2">
                                <span className="text-secondary-orange font-bold mr-3 text-xl">A:</span>
                                <div className="text-gray-600">{faq.answer}</div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>
                  
                  {/* For Volunteers Section */}
                  <div className="mb-8">
                    <h3 className={`text-xl font-bold mb-4 text-primary-green flex items-center ${activeCategory !== "All" && activeCategory !== "Volunteering" ? "hidden" : ""}`}>
                      <span className="bg-primary-green/10 p-2 rounded-full mr-3">
                        <Users className="text-primary-green h-5 w-5" />
                      </span>
                      For Volunteers
                    </h3>
                    <div className={`space-y-4 ${activeCategory !== "All" && activeCategory !== "Volunteering" ? "hidden" : ""}`}>
                      <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-md overflow-hidden">
                        {getFilteredFaqs(volunteeringFaqs).map((faq) => (
                          <AccordionItem key={faq.id} value={`vol-${faq.id}`} className="border-b border-gray-100 px-1">
                            <AccordionTrigger className="hover:no-underline py-4 px-4">
                              <div className="flex items-start text-left">
                                <span className="text-primary-green font-bold mr-3 text-xl">Q:</span>
                                <h3 className="text-lg font-medium">{faq.question}</h3>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-6">
                              <div className="flex pt-2">
                                <span className="text-secondary-orange font-bold mr-3 text-xl">A:</span>
                                <div className="text-gray-600">{faq.answer}</div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>
                  
                  {/* For Programs Section */}
                  <div className="mb-8">
                    <h3 className={`text-xl font-bold mb-4 text-primary-green flex items-center ${activeCategory !== "All" && activeCategory !== "Programs" ? "hidden" : ""}`}>
                      <span className="bg-primary-green/10 p-2 rounded-full mr-3">
                        <FileText className="text-primary-green h-5 w-5" />
                      </span>
                      About Our Programs
                    </h3>
                    <div className={`space-y-4 ${activeCategory !== "All" && activeCategory !== "Programs" ? "hidden" : ""}`}>
                      <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-md overflow-hidden">
                        {getFilteredFaqs(programsFaqs).map((faq) => (
                          <AccordionItem key={faq.id} value={`prog-${faq.id}`} className="border-b border-gray-100 px-1">
                            <AccordionTrigger className="hover:no-underline py-4 px-4">
                              <div className="flex items-start text-left">
                                <span className="text-primary-green font-bold mr-3 text-xl">Q:</span>
                                <h3 className="text-lg font-medium">{faq.question}</h3>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-6">
                              <div className="flex pt-2">
                                <span className="text-secondary-orange font-bold mr-3 text-xl">A:</span>
                                <div className="text-gray-600">{faq.answer}</div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>
                  
                  {/* For Partnerships Section - NEW */}
                  <div className="mb-8">
                    <h3 className={`text-xl font-bold mb-4 text-primary-green flex items-center ${activeCategory !== "All" && activeCategory !== "Partnerships" ? "hidden" : ""}`}>
                      <span className="bg-primary-green/10 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-green">
                          <path d="M20 5H8.5a2.5 2.5 0 0 0 0 5H20" />
                          <path d="M20 14h-8.5a2.5 2.5 0 0 0 0 5H20" />
                          <line x1="4" x2="4" y1="10" y2="10" />
                          <line x1="4" x2="4" y1="19" y2="19" />
                        </svg>
                      </span>
                      For Partners & Collaborators
                    </h3>
                    <div className={`space-y-4 ${activeCategory !== "All" && activeCategory !== "Partnerships" ? "hidden" : ""}`}>
                      <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-md overflow-hidden">
                        {getFilteredFaqs(partnershipFaqs).map((faq) => (
                          <AccordionItem key={faq.id} value={`partner-${faq.id}`} className="border-b border-gray-100 px-1">
                            <AccordionTrigger className="hover:no-underline py-4 px-4">
                              <div className="flex items-start text-left">
                                <span className="text-primary-green font-bold mr-3 text-xl">Q:</span>
                                <h3 className="text-lg font-medium">{faq.question}</h3>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-6">
                              <div className="flex pt-2">
                                <span className="text-secondary-orange font-bold mr-3 text-xl">A:</span>
                                <div className="text-gray-600">{faq.answer}</div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>
                  
                  {/* General Questions Section - NEW */}
                  <div className="mb-8">
                    <h3 className={`text-xl font-bold mb-4 text-primary-green flex items-center ${activeCategory !== "All" && activeCategory !== "General" ? "hidden" : ""}`}>
                      <span className="bg-primary-green/10 p-2 rounded-full mr-3">
                        <HelpCircle className="text-primary-green h-5 w-5" />
                      </span>
                      General Questions
                    </h3>
                    <div className={`space-y-4 ${activeCategory !== "All" && activeCategory !== "General" ? "hidden" : ""}`}>
                      <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-md overflow-hidden">
                        {getFilteredFaqs(generalFaqs).map((faq) => (
                          <AccordionItem key={faq.id} value={`general-${faq.id}`} className="border-b border-gray-100 px-1">
                            <AccordionTrigger className="hover:no-underline py-4 px-4">
                              <div className="flex items-start text-left">
                                <span className="text-primary-green font-bold mr-3 text-xl">Q:</span>
                                <h3 className="text-lg font-medium">{faq.question}</h3>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-6">
                              <div className="flex pt-2">
                                <span className="text-secondary-orange font-bold mr-3 text-xl">A:</span>
                                <div className="text-gray-600">{faq.answer}</div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>
                  
                  {/* Connect directly section */}
                  <div className="mt-12 text-center bg-white p-8 rounded-xl shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
                    <img 
                      src="/public/lovable-uploads/adafedbe-531e-4b59-abd9-9dfe8fdb2c0b.png" 
                      alt="Contact us" 
                      className="w-24 h-24 mx-auto mb-4 rounded-full shadow-md object-cover"
                    />
                    <p className="text-gray-700 mb-6">
                      Don't see your question here? Our team is ready to help!
                    </p>
                    <Link 
                      to="/contact"
                      className="btn-primary inline-flex items-center group"
                    >
                      Ask a Question
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="ml-2 group-hover:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Quick Links */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Quick Links</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <a 
                  href="/get-involved#volunteer" 
                  className="flex flex-col items-center bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all text-center"
                >
                  <Users className="w-8 h-8 text-primary-green mb-3" />
                  <h3 className="font-bold">Volunteer</h3>
                  <p className="text-sm text-gray-600 mt-1">Join our volunteer team</p>
                </a>
                <a 
                  href="/get-involved#donate" 
                  className="flex flex-col items-center bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all text-center"
                >
                  <Heart className="w-8 h-8 text-primary-green mb-3" />
                  <h3 className="font-bold">Donate</h3>
                  <p className="text-sm text-gray-600 mt-1">Support our mission</p>
                </a>
                <a 
                  href="/resources#events" 
                  className="flex flex-col items-center bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all text-center"
                >
                  <Calendar className="w-8 h-8 text-primary-green mb-3" />
                  <h3 className="font-bold">Events</h3>
                  <p className="text-sm text-gray-600 mt-1">Upcoming activities</p>
                </a>
                <div 
                  className="flex flex-col items-center bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all text-center"
                >
                  <CreditCard className="w-8 h-8 text-primary-green mb-3" />
                  <h3 className="font-bold">Financial Support</h3>
                  <p className="text-sm text-gray-600 mt-1">Apply for assistance</p>
                  <ApplicationButton 
                    variant="link" 
                    size="sm" 
                    className="mt-2 text-primary-green"
                  />
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

function Heart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

export default Contact;
