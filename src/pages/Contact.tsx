
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Users, Calendar, FileText, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ApplicationButton from "@/components/ApplicationButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1500);
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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                        <select 
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Donation Question">Donation Question</option>
                          <option value="Volunteer Information">Volunteer Information</option>
                          <option value="Program Information">Program Information</option>
                          <option value="Corporate Partnership">Corporate Partnership</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                      <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                        required
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="bg-primary-green text-white font-medium py-3 px-6 rounded-md hover:bg-primary-green/90 transition-colors disabled:opacity-70"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
            
            {/* FAQs Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="bg-white rounded-xl shadow-md p-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is the Medh Foundation?</AccordionTrigger>
                    <AccordionContent>
                      The Medh Foundation is a non-profit organization dedicated to empowering children and single mothers through education and skill development, with the aim of creating self-sufficient communities across India.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How can I apply for financial support?</AccordionTrigger>
                    <AccordionContent>
                      You can apply for financial support by clicking on the "Online Application for Financial Support" button available on our website. The application process involves filling out a form with details about the child, educational information, family situation, and the type of support needed.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What types of financial support does the foundation offer?</AccordionTrigger>
                    <AccordionContent>
                      The foundation offers several types of financial support including tuition assistance, books and supplies funding, and transportation assistance. Each type of support is designed to address specific educational needs and remove barriers to education.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Who is eligible for the foundation's programs?</AccordionTrigger>
                    <AccordionContent>
                      Our programs primarily focus on supporting children from underprivileged backgrounds and single mothers. Eligibility criteria may vary by program, but generally, we support those who demonstrate financial need and a commitment to education or skill development.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger>How can I volunteer with the Medh Foundation?</AccordionTrigger>
                    <AccordionContent>
                      You can volunteer with us by visiting the "Get Involved" section of our website and filling out the volunteer application form. We welcome volunteers with various skills and interests, including teaching, mentoring, administrative support, event planning, and more.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-6">
                    <AccordionTrigger>How are donations to the foundation used?</AccordionTrigger>
                    <AccordionContent>
                      Donations to the Medh Foundation are primarily used to fund our educational programs, skill development initiatives, and financial support for children and single mothers. A small percentage covers administrative costs to ensure the sustainable operation of our programs.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-7">
                    <AccordionTrigger>Can I specify how my donation is used?</AccordionTrigger>
                    <AccordionContent>
                      Yes, donors can specify which program or initiative they would like their donation to support. You can indicate your preference during the donation process, or contact us directly to discuss specific allocation of your contribution.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-8">
                    <AccordionTrigger>Are donations to the Medh Foundation tax-deductible?</AccordionTrigger>
                    <AccordionContent>
                      Yes, donations to the Medh Foundation are tax-deductible as allowed by law. We provide donation receipts that can be used for tax purposes. For specific tax-related questions, we recommend consulting with your tax advisor.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-9">
                    <AccordionTrigger>How can my organization partner with the Medh Foundation?</AccordionTrigger>
                    <AccordionContent>
                      We welcome partnerships with organizations that share our mission and values. Potential partnerships can include corporate social responsibility initiatives, joint programs, sponsorships, or in-kind donations. Please contact us at care@medhfoundation.org to discuss partnership opportunities.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-10">
                    <AccordionTrigger>What documents are required for the financial support application?</AccordionTrigger>
                    <AccordionContent>
                      Required documents include the child's identification (Aadhar Card, birth certificate), school ID, recent fee receipts, academic records, parent identification documents, proof of residence, and income verification. Single mothers should provide relevant documentation regarding their marital status.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-11">
                    <AccordionTrigger>How long does the application process take?</AccordionTrigger>
                    <AccordionContent>
                      The application review process typically takes 4-6 weeks from submission. This includes verification of documents, assessment of need, and determination of the appropriate support. Applicants will be notified of the decision via email or phone.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-12">
                    <AccordionTrigger>Does the foundation provide support for higher education?</AccordionTrigger>
                    <AccordionContent>
                      Yes, the Medh Foundation provides support for various levels of education, from primary school through undergraduate studies. The specific support available depends on the student's needs, academic performance, and our available resources.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-13">
                    <AccordionTrigger>How often does the foundation disburse financial support?</AccordionTrigger>
                    <AccordionContent>
                      Financial support is typically disbursed at the beginning of each academic term or as needed for specific expenses. The disbursement schedule is tailored to align with educational institution requirements and the specific needs of recipients.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-14">
                    <AccordionTrigger>Is financial support available for students outside of India?</AccordionTrigger>
                    <AccordionContent>
                      Currently, our financial support programs are focused on students within India. However, we are continuously evaluating opportunities to expand our reach. Please contact us for the most current information regarding eligibility regions.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-15">
                    <AccordionTrigger>How can I stay updated about the foundation's activities?</AccordionTrigger>
                    <AccordionContent>
                      You can stay updated by subscribing to our newsletter at the bottom of our website, following us on social media platforms, or regularly visiting our website's News section. We share updates about our programs, success stories, and upcoming events.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            
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

export default Contact;

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
