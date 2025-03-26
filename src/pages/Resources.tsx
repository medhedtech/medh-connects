import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, FileText } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Resources = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: "The Importance of Quality Education for All",
      date: "March 18, 2025",
      author: "Dr. Priya Sharma",
      excerpt: "Exploring how equitable education can transform societies and create lasting positive change for underprivileged communities.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Education"
    },
    {
      id: 2,
      title: "Economic Independence: Empowering Single Mothers",
      date: "February 12, 2025",
      author: "Amit Patel",
      excerpt: "How skill development and financial literacy programs can create sustainable livelihoods for single-parent households.",
      image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Skill Development"
    },
    {
      id: 3,
      title: "Building Stronger Communities Through Collective Action",
      date: "January 30, 2025",
      author: "Neha Gupta",
      excerpt: "Why community-led initiatives are essential for sustainable development and lasting social change.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Community"
    },
    {
      id: 4,
      title: "Bridging the Digital Divide in Urban and Rural India",
      date: "January 25, 2025",
      author: "Rajesh Kumar",
      excerpt: "Addressing challenges and opportunities in making digital education accessible to all segments of society.",
      image: "https://images.unsplash.com/photo-1503551723871-2c959d605148?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Education"
    },
  ];

  const events = [
    {
      id: 1,
      title: "Educational Outreach Program",
      date: "July 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Delhi Community Center",
      description: "Join our educational outreach program aimed at providing resources and mentorship to underprivileged children.",
      image: "https://images.unsplash.com/photo-1610758366091-f4bda6a79337?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "Skills Development Workshop",
      date: "August 20, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Medh Training Center, Mumbai",
      description: "A comprehensive workshop focusing on digital literacy and entrepreneurship skills for single mothers.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "Foundation Launch Gala",
      date: "September 10, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "The Grand Hotel, Delhi",
      description: "The official launch celebration of Medh Foundation, bringing together supporters and community partners.",
      image: "https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "How can I donate to the Medh Foundation?",
      answer: "You can donate through our website using our secure payment portal, or by sending a check to our office address. We accept one-time donations as well as monthly recurring contributions."
    },
    {
      id: 2,
      question: "Are my donations tax-deductible?",
      answer: "Yes, all donations to the Medh Foundation are tax-deductible under Section 80G of the Income Tax Act in India. You will receive an official receipt for your contribution."
    },
    {
      id: 3,
      question: "How can I volunteer with the Medh Foundation?",
      answer: "Visit our 'Get Involved' page and fill out the volunteer application form. We offer various volunteering opportunities based on your skills, interests, and availability."
    },
    {
      id: 4,
      question: "What geographical areas does the Medh Foundation serve?",
      answer: "We currently operate in Delhi, Mumbai, Bangalore, and several rural areas in Maharashtra and Karnataka. We're continuously expanding our reach to serve more communities across India."
    },
    {
      id: 5,
      question: "How are funds allocated within the organization?",
      answer: "Approximately 85% of all donations go directly to our programs supporting children's education and single mothers' skill development. The remaining funds cover essential administrative and fundraising costs."
    },
    {
      id: 6,
      question: "Can my company partner with the Medh Foundation?",
      answer: "Absolutely! We welcome corporate partnerships. Please contact our partnership team at partnerships@medhfoundation.org to discuss collaboration opportunities."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-accent-green/10 py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Insights, updates, and information to keep you connected with our mission and impact.
            </p>
          </div>
        </div>
        
        <section id="news" className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="bg-primary-green/10 text-primary-green px-4 py-1 rounded-full text-sm font-medium">Knowledge Hub</span>
              <h2 className="mt-4 text-3xl font-bold">Blog & Articles</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <Link 
                        to={`/resources/blog/${post.id}`}
                        className="text-primary-green hover:text-primary-green/80 font-medium text-sm transition-colors"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link 
                to="/resources/blog"
                className="btn-outline"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </section>
        
        <section id="events" className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="bg-secondary-orange/10 text-secondary-orange px-4 py-1 rounded-full text-sm font-medium">Stay Connected</span>
              <h2 className="mt-4 text-3xl font-bold">Upcoming Events</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-2">
                      <div className="text-center">
                        <span className="block text-xs font-medium text-gray-500">
                          {new Date(event.date).toLocaleString('default', { month: 'short' })}
                        </span>
                        <span className="block text-lg font-bold text-gray-800">
                          {new Date(event.date).getDate()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-secondary-orange" />
                        <span>{event.date} • {event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2 text-secondary-orange">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex justify-between">
                      <a 
                        href={`/resources/events/${event.id}`}
                        className="text-primary-green hover:text-primary-green/80 font-medium text-sm transition-colors"
                      >
                        Event Details
                      </a>
                      <button className="bg-primary-green/10 text-primary-green hover:bg-primary-green/20 px-3 py-1 rounded text-sm font-medium transition-colors">
                        RSVP
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link 
                to="/resources/events"
                className="btn-outline"
              >
                View All Events
              </Link>
            </div>
          </div>
        </section>
        
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
        
        <section id="downloads" className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="bg-primary-green/10 text-primary-green px-4 py-1 rounded-full text-sm font-medium">Resources</span>
              <h2 className="mt-4 text-3xl font-bold">Downloads & Publications</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start">
                    <div className="bg-primary-green/10 p-3 rounded-lg mr-4">
                      <FileText className="text-primary-green w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Annual Report {2022 + item}</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Comprehensive overview of our programs, impact, and financial information.
                      </p>
                      <a 
                        href="#" 
                        className="text-primary-green hover:text-primary-green/80 text-sm font-medium transition-colors"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
