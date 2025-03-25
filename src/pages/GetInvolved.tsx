
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Clock, Users, Building, Calendar } from "lucide-react";
import { useEffect } from "react";

const GetInvolved = () => {
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
                      <input type="radio" name="donation-type" id="one-time" className="mr-3" />
                      <label htmlFor="one-time" className="flex-grow font-medium">One-time Donation</label>
                    </div>
                    <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-green transition-colors">
                      <input type="radio" name="donation-type" id="monthly" className="mr-3" />
                      <label htmlFor="monthly" className="flex-grow font-medium">Monthly Giving</label>
                    </div>
                    <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-green transition-colors">
                      <input type="radio" name="donation-type" id="program" className="mr-3" />
                      <label htmlFor="program" className="flex-grow font-medium">Program-specific Support</label>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium mb-3">Select Amount:</h4>
                    <div className="grid grid-cols-3 gap-3">
                      <button className="bg-gray-100 hover:bg-primary-green hover:text-white transition-colors py-2 rounded-md font-medium">₹1,000</button>
                      <button className="bg-gray-100 hover:bg-primary-green hover:text-white transition-colors py-2 rounded-md font-medium">₹5,000</button>
                      <button className="bg-gray-100 hover:bg-primary-green hover:text-white transition-colors py-2 rounded-md font-medium">₹10,000</button>
                    </div>
                    <div className="mt-3">
                      <input 
                        type="text" 
                        placeholder="Custom Amount" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                      />
                    </div>
                  </div>
                  
                  <button className="mt-6 w-full bg-primary-green text-white font-medium py-3 rounded-md hover:bg-primary-green/90 transition-colors">
                    Proceed to Donate
                  </button>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6 bg-secondary-orange text-white">
                    <h3 className="text-xl font-bold mb-2">Impact of Your Donation</h3>
                    <p>See how your contribution makes a difference</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="bg-secondary-orange/10 text-secondary-orange p-2 rounded-full mr-3">
                          <Heart className="w-5 h-5" />
                        </span>
                        <div>
                          <p className="font-medium">₹1,000</p>
                          <p className="text-gray-600 text-sm">Provides educational materials for one child for a month</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-secondary-orange/10 text-secondary-orange p-2 rounded-full mr-3">
                          <Heart className="w-5 h-5" />
                        </span>
                        <div>
                          <p className="font-medium">₹5,000</p>
                          <p className="text-gray-600 text-sm">Sponsors vocational training for one single mother</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-secondary-orange/10 text-secondary-orange p-2 rounded-full mr-3">
                          <Heart className="w-5 h-5" />
                        </span>
                        <div>
                          <p className="font-medium">₹10,000</p>
                          <p className="text-gray-600 text-sm">Funds a community development workshop for 20 participants</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-secondary-orange/10 text-secondary-orange p-2 rounded-full mr-3">
                          <Heart className="w-5 h-5" />
                        </span>
                        <div>
                          <p className="font-medium">₹50,000</p>
                          <p className="text-gray-600 text-sm">Establishes a micro-enterprise for a group of five single mothers</p>
                        </div>
                      </li>
                    </ul>
                    
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
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
        
        <section id="volunteer" className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="bg-accent-green/10 text-accent-green px-4 py-1 rounded-full text-sm font-medium">Join Our Team</span>
              <h2 className="mt-4 text-3xl font-bold">Volunteer Opportunities</h2>
              <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                Share your time, skills, and passion to make a meaningful difference in the lives of children and single mothers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6">
                <div className="h-12 w-12 bg-primary-green/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-primary-green w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Educational Support</h3>
                <p className="text-gray-600 mb-4">
                  Assist in teaching, tutoring, and organizing educational activities for children in our programs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-primary-green" />
                    <span>Minimum 4 hours per week</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-primary-green" />
                    <span>Weekday afternoons or weekends</span>
                  </li>
                </ul>
                <a 
                  href="#volunteer-form" 
                  className="inline-block text-primary-green hover:text-primary-green/80 font-medium transition-colors"
                >
                  Apply Now
                </a>
              </div>
              
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6">
                <div className="h-12 w-12 bg-secondary-orange/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-orange w-6 h-6">
                    <path d="M12 3v12"></path>
                    <path d="m8 11 4 4 4-4"></path>
                    <path d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
                    <path d="M20 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
                    <path d="M8 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
                    <path d="M20 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
                    <path d="M6 5h12"></path>
                    <path d="M6 19h12"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Skill Development</h3>
                <p className="text-gray-600 mb-4">
                  Share your professional expertise to train single mothers in various vocational and business skills.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-secondary-orange" />
                    <span>Flexible hours based on program schedule</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-secondary-orange" />
                    <span>Short-term or ongoing commitment</span>
                  </li>
                </ul>
                <a 
                  href="#volunteer-form" 
                  className="inline-block text-secondary-orange hover:text-secondary-orange/80 font-medium transition-colors"
                >
                  Apply Now
                </a>
              </div>
              
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6">
                <div className="h-12 w-12 bg-accent-green/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-green w-6 h-6">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" x2="12" y1="8" y2="16"></line>
                    <line x1="8" x2="16" y1="12" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Event Support</h3>
                <p className="text-gray-600 mb-4">
                  Help organize and manage community events, fundraisers, and awareness campaigns.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-accent-green" />
                    <span>As needed for scheduled events</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-accent-green" />
                    <span>Weekend availability preferred</span>
                  </li>
                </ul>
                <a 
                  href="#volunteer-form" 
                  className="inline-block text-accent-green hover:text-accent-green/80 font-medium transition-colors"
                >
                  Apply Now
                </a>
              </div>
            </div>
            
            <div id="volunteer-form" className="mt-12 bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-6">Volunteer Application Form</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Area of Interest</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green">
                    <option value="">Select an option</option>
                    <option value="education">Educational Support</option>
                    <option value="skill">Skill Development</option>
                    <option value="event">Event Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Skills & Experience</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green min-h-[100px]"
                    placeholder="Tell us about relevant skills and experience you can contribute"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Availability</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green min-h-[100px]"
                    placeholder="Please share your general availability (days/times)"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-primary-green text-white font-medium py-3 rounded-md hover:bg-primary-green/90 transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>
        
        <section id="corporate" className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="bg-secondary-orange/10 text-secondary-orange px-4 py-1 rounded-full text-sm font-medium">For Organizations</span>
                <h2 className="mt-4 text-3xl font-bold mb-6">Corporate Partnerships</h2>
                <p className="text-gray-700 mb-4">
                  Partner with us to fulfill your corporate social responsibility goals while making a meaningful impact in education and empowerment.
                </p>
                <p className="text-gray-700 mb-6">
                  We offer various partnership opportunities tailored to your organization's interests, resources, and social impact objectives.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-secondary-orange/10 text-secondary-orange p-2 rounded-full mr-3 mt-1">
                      <Building className="w-5 h-5" />
                    </span>
                    <div>
                      <h4 className="font-bold">Program Sponsorship</h4>
                      <p className="text-gray-600 text-sm">
                        Fund specific educational or skill development programs aligned with your corporate values.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-secondary-orange/10 text-secondary-orange p-2 rounded-full mr-3 mt-1">
                      <Building className="w-5 h-5" />
                    </span>
                    <div>
                      <h4 className="font-bold">Employee Volunteering</h4>
                      <p className="text-gray-600 text-sm">
                        Engage your employees in meaningful volunteer experiences that build team spirit while serving the community.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-secondary-orange/10 text-secondary-orange p-2 rounded-full mr-3 mt-1">
                      <Building className="w-5 h-5" />
                    </span>
                    <div>
                      <h4 className="font-bold">Resource Sharing</h4>
                      <p className="text-gray-600 text-sm">
                        Contribute technology, infrastructure, or expertise to enhance our programs and operational capacity.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="mailto:partnerships@medhfoundation.org" 
                    className="btn-secondary"
                  >
                    Contact Our Partnership Team
                  </a>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                  alt="Corporate partnership"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Partner Testimonial</h3>
                  <blockquote className="italic text-gray-600 mb-4">
                    "Our partnership with the Medh Foundation has been incredibly rewarding. Not only have we been able to contribute to meaningful social change, but our employees have also gained valuable perspective and purpose through volunteering opportunities."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                    <div>
                      <p className="font-bold">Partner Name</p>
                      <p className="text-sm text-gray-600">Position, Company</p>
                    </div>
                  </div>
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

export default GetInvolved;
