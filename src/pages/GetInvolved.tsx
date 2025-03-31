import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonationModal from "@/components/DonationModal";
import { Heart, Clock, Users, Building, Calendar, Globe, ChevronRight, DollarSign, Handshake, Trophy, CheckCircle, BarChart3, BookOpen, Palette, UserPlus } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import FormTermsAndCaptcha from "@/components/FormTermsAndCaptcha";
import CSRConsultationForm from "@/components/CSRConsultationForm";
import { useToast } from "@/hooks/use-toast";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const volunteerFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  interest: z.string().min(1, {
    message: "Please select an area of interest.",
  }),
  skills: z.string().optional(),
  availability: z.string().optional(),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and privacy policy" }),
  }),
});

const GetInvolved = () => {
  const [showCSRForm, setShowCSRForm] = useState(false);
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState("1000");
  const [donationType, setDonationType] = useState("one-time");
  const { toast } = useToast();
  
  const volunteerForm = useForm<z.infer<typeof volunteerFormSchema>>({
    resolver: zodResolver(volunteerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      interest: "",
      skills: "",
      availability: "",
    },
  });

  function onVolunteerSubmit(values: z.infer<typeof volunteerFormSchema>) {
    console.log(values);
    toast({
      title: "Application Submitted Successfully",
      description: "Thank you for your interest in volunteering with us. We'll be in touch soon!",
    });
    volunteerForm.reset();
  }
  
  const handleDonationTypeSelect = (type: string) => {
    setDonationType(type);
  };
  
  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount);
  };
  
  const handleCustomAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAmount(event.target.value);
  };
  
  const handleProceedToDonate = () => {
    setShowDonationModal(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const { hash } = window.location;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-secondary-orange/10 py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Join us in our mission to create positive change. There are many ways you can contribute.
            </p>
          </div>
        </div>
        
        <section id="donate" className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="bg-primary-green/10 text-primary-green px-4 py-1 rounded-full text-sm font-medium">Support Our Cause</span>
                <h2 className="mt-4 text-3xl font-bold mb-6">Donate</h2>
                <p className="text-gray-700 mb-4">
                  Your generous contributions make our work possible. Every donation, regardless of size, helps us provide education to children and skill development to single mothers.
                </p>
                <p className="text-gray-700 mb-6">
                  We ensure transparency in how we utilize funds, with regular updates to our donors about the impact of their contributions.
                </p>
                
                <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold mb-4">Donation Options</h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-green transition-colors">
                      <input 
                        type="radio" 
                        name="donation-type" 
                        id="one-time" 
                        className="mr-3"
                        checked={donationType === "one-time"}
                        onChange={() => handleDonationTypeSelect("one-time")}
                      />
                      <label htmlFor="one-time" className="flex-grow font-medium">One-time Donation</label>
                    </div>
                    <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-green transition-colors">
                      <input 
                        type="radio" 
                        name="donation-type" 
                        id="monthly" 
                        className="mr-3"
                        checked={donationType === "monthly"}
                        onChange={() => handleDonationTypeSelect("monthly")}
                      />
                      <label htmlFor="monthly" className="flex-grow font-medium">Monthly Giving</label>
                    </div>
                    <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-green transition-colors">
                      <input 
                        type="radio" 
                        name="donation-type" 
                        id="program" 
                        className="mr-3"
                        checked={donationType === "program"}
                        onChange={() => handleDonationTypeSelect("program")}
                      />
                      <label htmlFor="program" className="flex-grow font-medium">Program-specific Support</label>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium mb-3">Select Amount:</h4>
                    <div className="grid grid-cols-3 gap-3">
                      <button 
                        className={`${selectedAmount === "1000" ? "bg-primary-green text-white" : "bg-gray-100"} hover:bg-primary-green hover:text-white transition-colors py-2 rounded-md font-medium`}
                        onClick={() => handleAmountSelect("1000")}
                      >
                        ₹1,000
                      </button>
                      <button 
                        className={`${selectedAmount === "5000" ? "bg-primary-green text-white" : "bg-gray-100"} hover:bg-primary-green hover:text-white transition-colors py-2 rounded-md font-medium`}
                        onClick={() => handleAmountSelect("5000")}
                      >
                        ₹5,000
                      </button>
                      <button 
                        className={`${selectedAmount === "10000" ? "bg-primary-green text-white" : "bg-gray-100"} hover:bg-primary-green hover:text-white transition-colors py-2 rounded-md font-medium`}
                        onClick={() => handleAmountSelect("10000")}
                      >
                        ₹10,000
                      </button>
                    </div>
                    <div className="mt-3">
                      <input 
                        type="text" 
                        placeholder="Custom Amount" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                        value={!["1000", "5000", "10000"].includes(selectedAmount) ? selectedAmount : ""}
                        onChange={handleCustomAmount}
                      />
                    </div>
                  </div>
                  
                  <button 
                    className="mt-6 w-full bg-primary-green text-white font-medium py-3 rounded-md hover:bg-primary-green/90 transition-colors"
                    onClick={handleProceedToDonate}
                  >
                    Proceed to Donate
                  </button>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6 bg-secondary-orange text-white">
                    <h3 className="text-xl font-bold mb-2">Impact of Your Donation</h3>
                    <p>See how your contribution makes a difference</p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 p-6">
                    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all">
                      <div className="grid md:grid-cols-3">
                        <div className="md:col-span-1">
                          <img 
                            src="https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                            alt="Child with educational materials" 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-4 md:col-span-2 flex items-center">
                          <div>
                            <div className="flex items-start">
                              <span className="bg-secondary-orange/10 text-secondary-orange p-2 rounded-full mr-3">
                                <Heart className="w-5 h-5" />
                              </span>
                              <div>
                                <p className="font-medium">₹1,000</p>
                                <p className="text-gray-600 text-sm">Provides educational materials for one child for a month</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all">
                      <div className="grid md:grid-cols-3">
                        <div className="md:col-span-1">
                          <img 
                            src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                            alt="Vocational training session" 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-4 md:col-span-2 flex items-center">
                          <div>
                            <div className="flex items-start">
                              <span className="bg-secondary-orange/10 text-secondary-orange p-2 rounded-full mr-3">
                                <Heart className="w-5 h-5" />
                              </span>
                              <div>
                                <p className="font-medium">₹5,000</p>
                                <p className="text-gray-600 text-sm">Sponsors vocational training for one single mother</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all">
                      <div className="grid md:grid-cols-3">
                        <div className="md:col-span-1">
                          <img 
                            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                            alt="Community workshop" 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-4 md:col-span-2 flex items-center">
                          <div>
                            <div className="flex items-start">
                              <span className="bg-secondary-orange/10 text-secondary-orange p-2 rounded-full mr-3">
                                <Heart className="w-5 h-5" />
                              </span>
                              <div>
                                <p className="font-medium">₹10,000</p>
                                <p className="text-gray-600 text-sm">Funds a community development workshop for 20 participants</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all">
                      <div className="grid md:grid-cols-3">
                        <div className="md:col-span-1">
                          <img 
                            src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                            alt="Micro-enterprise group" 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-4 md:col-span-2 flex items-center">
                          <div>
                            <div className="flex items-start">
                              <span className="bg-secondary-orange/10 text-secondary-orange p-2 rounded-full mr-3">
                                <Heart className="w-5 h-5" />
                              </span>
                              <div>
                                <p className="font-medium">₹50,000</p>
                                <p className="text-gray-600 text-sm">Establishes a micro-enterprise for a group of five single mothers</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                  
                  <div className="px-6 pb-6">
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <p className="text-sm text-gray-600">
                        All donations are tax-deductible under Section 80G of the Income Tax Act. You will receive an official receipt for your contribution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="corporate" className="py-16 px-4 md:px-8 bg-gradient-to-r from-secondary-orange/5 to-primary-green/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="bg-secondary-orange/10 text-secondary-orange px-4 py-1 rounded-full text-sm font-medium">Corporate Social Responsibility</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold">Partner With Us for Impactful CSR</h2>
              <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                Join our mission to empower underprivileged children and single mothers through meaningful corporate partnerships that align with your organization's values and CSR objectives.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border-t-4 border-primary-green">
                <div className="h-12 w-12 bg-primary-green/10 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="text-primary-green w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Strategic Impact</h3>
                <p className="text-gray-600 mb-4">
                  Create a lasting positive impact aligned with UN Sustainable Development Goals 4 (Quality Education) and 5 (Gender Equality).
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Measurable social outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Regular impact reports</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Transparent fund utilization</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border-t-4 border-secondary-orange">
                <div className="h-12 w-12 bg-secondary-orange/10 rounded-full flex items-center justify-center mb-4">
                  <Handshake className="text-secondary-orange w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Brand Alignment</h3>
                <p className="text-gray-600 mb-4">
                  Enhance your brand's reputation by associating with our mission of education and women's empowerment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary-orange mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Brand visibility in campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary-orange mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Co-created success stories</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary-orange mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Partnership acknowledgment</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border-t-4 border-accent-green">
                <div className="h-12 w-12 bg-accent-green/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="text-accent-green w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Employee Engagement</h3>
                <p className="text-gray-600 mb-4">
                  Provide meaningful volunteering opportunities for your employees to contribute directly to our programs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Skills-based volunteering</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Team-building activities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Mentorship programs</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">CSR Partnership Models</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-primary-green text-white p-6">
                    <h4 className="text-xl font-bold flex items-center">
                      <DollarSign className="mr-2 h-6 w-6" />
                      Financial Support
                    </h4>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-6">
                      Direct funding to support our education and skill development programs, with options for specific initiatives or general support.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-primary-green/10 rounded-full p-2 mr-3 mt-1">
                          <Building className="h-5 w-5 text-primary-green" />
                        </div>
                        <div>
                          <h5 className="font-semibold">Program Sponsorship</h5>
                          <p className="text-sm text-gray-600">Fund specific educational or upskilling programs</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary-green/10 rounded-full p-2 mr-3 mt-1">
                          <BarChart3 className="h-5 w-5 text-primary-green" />
                        </div>
                        <div>
                          <h5 className="font-semibold">Capital Projects</h5>
                          <p className="text-sm text-gray-600">Support infrastructure development and equipment needs</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary-green/10 rounded-full p-2 mr-3 mt-1">
                          <Users className="h-5 w-5 text-primary-green" />
                        </div>
                        <div>
                          <h5 className="font-semibold">Scholarship Funds</h5>
                          <p className="text-sm text-gray-600">Create named scholarships for deserving students</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-secondary-orange text-white p-6">
                    <h4 className="text-xl font-bold flex items-center">
                      <Handshake className="mr-2 h-6 w-6" />
                      Strategic Partnerships
                    </h4>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-6">
                      Collaborative initiatives that leverage your company's expertise, resources, and networks to amplify our impact.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-secondary-orange/10 rounded-full p-2 mr-3 mt-1">
                          <Globe className="h-5 w-5 text-secondary-orange" />
                        </div>
                        <div>
                          <h5 className="font-semibold">Knowledge Transfer</h5>
                          <p className="text-sm text-gray-600">Share industry expertise with our beneficiaries</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-secondary-orange/10 rounded-full p-2 mr-3 mt-1">
                          <Building className="h-5 w-5 text-secondary-orange" />
                        </div>
                        <div>
                          <h5 className="font-semibold">Cause-related Marketing</h5>
                          <p className="text-sm text-gray-600">Joint campaigns that benefit both partners</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-secondary-orange/10 rounded-full p-2 mr-3 mt-1">
                          <Trophy className="h-5 w-5 text-secondary-orange" />
                        </div>
                        <div>
                          <h5 className="font-semibold">Product/Service Donations</h5>
                          <p className="text-sm text-gray-600">Provide your products or services to support our work</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
              <div className="p-6 md:p-8 border-b">
                <h3 className="text-2xl font-semibold">How Your CSR Aligns With Our Mission</h3>
                <p className="text-gray-600 mt-2">
                  Our programs are designed to create sustainable impact in education and empowerment, 
                  perfectly aligning with corporate social responsibility goals.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x">
                <div className="p-6">
                  <h4 className="font-semibold text-lg mb-2 text-primary-green">Education Access</h4>
                  <p className="text-gray-600 text-sm">
                    Support programs that provide quality education to underserved children, addressing inequality.
                  </p>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-lg mb-2 text-primary-green">Women's Empowerment</h4>
                  <p className="text-gray-600 text-sm">
                    Contribute to economic independence for single mothers through skill development.
                  </p>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-lg mb-2 text-primary-green">Community Development</h4>
                  <p className="text-gray-600 text-sm">
                    Help build stronger communities through family support and social integration programs.
                  </p>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-lg mb-2 text-primary-green">Sustainable Impact</h4>
                  <p className="text-gray-600 text-sm">
                    Create long-term positive change through systematic, measured approaches to social problems.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row bg-gradient-to-r from-secondary-orange/20 to-primary-green/20 rounded-xl overflow-hidden">
              <div className="md:w-3/5 p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-4">Ready to make a difference?</h3>
                <p className="mb-6 text-gray-700">
                  Our team is ready to work with you to create a tailored CSR partnership that aligns with your corporate values and maximizes social impact.
                </p>
                <div className="space-y-4">
                  <button 
                    onClick={() => setShowCSRForm(true)}
                    className="inline-flex items-center bg-primary-green text-white px-6 py-3 rounded-md hover:bg-primary-green/90 transition-all font-medium"
                  >
                    Schedule a Consultation
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="md:w-2/5 bg-gray-200">
                <div className="h-full flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Corporate partnership meeting" 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="volunteer" className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="bg-accent-green/10 text-accent-green px-4 py-1 rounded-full text-sm font-medium">Join Our Team</span>
              <h2 className="mt-4 text-3xl font-bold">Volunteer Opportunities</h2>
              <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                Share your time, skills, and passion to make a meaningful difference in the lives of children and single mothers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-10">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-primary-green/50"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Children in classroom" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white p-2 rounded-full">
                      <BookOpen className="h-6 w-6 text-primary-green" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Educational Support</h3>
                    <p className="text-gray-600 mb-4">
                      Assist in teaching, tutoring, and organizing educational activities for children in our programs. Help shape young minds and build foundations for their future.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-primary-green" />
                        <span>Minimum 4 hours per week</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-primary-green" />
                        <span>Weekday afternoons or weekends</span>
                      </div>
                    </div>
                    <a 
                      href="#volunteer-form" 
                      className="inline-flex items-center text-primary-green hover:text-primary-green/80 font-medium transition-colors"
                    >
                      Apply Now
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-secondary-orange/50"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Women learning skills" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white p-2 rounded-full">
                      <Palette className="h-6 w-6 text-secondary-orange" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Skill Development</h3>
                    <p className="text-gray-600 mb-4">
                      Share your professional expertise to train single mothers in various vocational and business skills. Empower women to achieve financial independence and secure futures.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-secondary-orange" />
                        <span>Flexible hours</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-secondary-orange" />
                        <span>Short-term or ongoing</span>
                      </div>
                    </div>
                    <a 
                      href="#volunteer-form" 
                      className="inline-flex items-center text-secondary-orange hover:text-secondary-orange/80 font-medium transition-colors"
                    >
                      Apply Now
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-accent-green/50"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Community event" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white p-2 rounded-full">
                      <UserPlus className="h-6 w-6 text-accent-green" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Event Support</h3>
                    <p className="text-gray-600 mb-4">
                      Help organize and manage community events, fundraisers, and awareness campaigns. Use your organizational and people skills to create impactful community experiences.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-accent-green" />
                        <span>As needed for events</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-accent-green" />
                        <span>Weekends preferred</span>
                      </div>
                    </div>
                    <a 
                      href="#volunteer-form" 
                      className="inline-flex items-center text-accent-green hover:text-accent-green/80 font-medium transition-colors"
                    >
                      Apply Now
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="bg-primary-green/10 p-3 rounded-full mr-4">
                      <Users className="h-6 w-6 text-primary-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Volunteer Benefits</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary-green mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Gain valuable experience in the social sector</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary-green mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Make a direct impact on children's lives and women's empowerment</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary-green mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Receive a certificate of appreciation and recommendation letter</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary-green mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Network with like-minded individuals and professionals</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div id="volunteer-form" className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-24">
                  <div className="bg-primary-green p-6 text-white">
                    <h3 className="text-xl font-bold">Volunteer Application Form</h3>
                    <p className="text-sm mt-1 text-white/80">Join our team of dedicated volunteers</p>
                  </div>
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                      alt="Team of volunteers"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <Form {...volunteerForm}>
                      <form onSubmit={volunteerForm.handleSubmit(onVolunteerSubmit)} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={volunteerForm.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                  <input 
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                                    placeholder="Your first name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={volunteerForm.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                  <input 
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                                    placeholder="Your last name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={volunteerForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <input 
                                  type="email"
                                  placeholder="your.email@example.com"
                                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={volunteerForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <input 
                                  type="tel"
                                  placeholder="+91 98765 43210"
                                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={volunteerForm.control}
                          name="interest"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Area of Interest</FormLabel>
                              <FormControl>
                                <select 
                                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                                  {...field}
                                >
                                  <option value="">Select an option</option>
                                  <option value="education">Educational Support</option>
                                  <option value="skill">Skill Development</option>
                                  <option value="event">Event Support</option>
                                  <option value="other">Other</option>
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={volunteerForm.control}
                          name="skills"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Skills & Experience</FormLabel>
                              <FormControl>
                                <textarea 
                                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green min-h-[100px]"
                                  placeholder="Tell us about relevant skills and experience you can contribute"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={volunteerForm.control}
                          name="availability"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Availability</FormLabel>
                              <FormControl>
                                <textarea 
                                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green min-h-[80px]"
                                  placeholder="Please share your general availability (days/times)"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormTermsAndCaptcha control={volunteerForm.control} />
                        
                        <button 
                          type="submit" 
                          className="w-full bg-primary-green text-white font-medium py-3 rounded-md hover:bg-primary-green/90 transition-colors mt-6 flex items-center justify-center"
                        >
                          <span>Submit Application</span>
                        </button>
                      </form>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {showCSRForm && <CSRConsultationForm onClose={() => setShowCSRForm(false)} />}
      <DonationModal 
        isOpen={showDonationModal} 
        onClose={() => setShowDonationModal(false)} 
        selectedAmount={selectedAmount} 
        donationType={donationType}
      />
    </div>
  );
};

export default GetInvolved;
