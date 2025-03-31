
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { events } from "@/data/resourcesData";
import { ChevronLeft, Calendar, Clock, MapPin, Share2 } from "lucide-react";
import { toast } from "sonner";

const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState(null);
  const [relatedEvents, setRelatedEvents] = useState([]);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    if (id) {
      const currentEvent = events.find((event) => event.id === parseInt(id));
      setEvent(currentEvent || null);
      
      // Find related events (excluding current event)
      if (currentEvent) {
        const related = events
          .filter((e) => e.id !== currentEvent.id)
          .slice(0, 3);
        setRelatedEvents(related);
      }
    }
  }, [id]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing:', error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  const handleRSVP = () => {
    toast.success("Thank you for your interest! Check your email for confirmation details.");
  };

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Event not found</h1>
            <p className="mt-4 text-gray-600">The event you're looking for doesn't exist or has been removed.</p>
            <Link to="/events" className="mt-6 inline-block btn-outline">
              Back to All Events
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="w-full h-64 md:h-96 relative bg-gray-800">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="container mx-auto px-4 pb-8 md:pb-12">
              <div className="bg-secondary-orange text-white px-3 py-1 rounded-md inline-block mb-4">
                Upcoming Event
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-white">{event.title}</h1>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/events"
              className="inline-flex items-center text-primary-green hover:text-primary-green/80 mb-8"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to All Events
            </Link>
            
            <div className="flex flex-col md:flex-row gap-8">
              {/* Main Content */}
              <div className="md:w-2/3">
                {/* Event Details */}
                <div className="prose prose-lg max-w-none">
                  <h2>About This Event</h2>
                  <p>{event.description}</p>
                  
                  <p className="my-6">
                    Join us for this important community event that brings together educators, community leaders, and volunteers to support educational initiatives for underprivileged children. Through workshops, interactive sessions, and informative presentations, participants will gain insights into effective educational outreach strategies.
                  </p>
                  
                  <h3>What to Expect</h3>
                  <ul>
                    <li>Interactive workshops on educational methodologies</li>
                    <li>Panel discussions with education experts</li>
                    <li>Networking opportunities with fellow educators and volunteers</li>
                    <li>Resources and materials for implementing outreach programs</li>
                    <li>Refreshments and lunch provided for all participants</li>
                  </ul>
                  
                  <h3>Who Should Attend</h3>
                  <p>
                    This event is ideal for educators, community organizers, social workers, volunteers, and anyone passionate about making education accessible to all children. Whether you're a seasoned professional or new to educational outreach, you'll find valuable insights and connections at this event.
                  </p>
                  
                  <h3>Registration Information</h3>
                  <p>
                    Registration is required to attend this event. Please use the RSVP button to secure your spot. There is no fee to attend, but donations to support our educational initiatives are welcome.
                  </p>
                  
                  <div className="border-t border-b border-gray-200 py-6 my-8">
                    <h4 className="text-lg font-bold mb-4">Event Organizer</h4>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                        <img 
                          src="/lovable-uploads/6d21747e-b50c-4ef4-b1a8-3207bbe5740d.png" 
                          alt="Medh Foundation" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h5 className="font-bold">Medh Foundation</h5>
                        <p className="text-sm text-gray-600">Empowering communities through education and skill development</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Education</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Community</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Outreach</span>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="md:w-1/3">
                <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
                  <div className="p-6 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-primary-green mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Date and Time</p>
                          <p className="font-medium">{event.date} • {event.time}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-primary-green mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Location</p>
                          <p className="font-medium">{event.location}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-primary-green mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Duration</p>
                          <p className="font-medium">6 hours</p>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={handleRSVP}
                      className="w-full bg-primary-green hover:bg-primary-green/90 text-white py-2 px-4 rounded-md transition-colors font-medium"
                    >
                      RSVP for this Event
                    </button>
                    
                    <button
                      onClick={handleShare}
                      className="w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-md transition-colors font-medium"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share Event
                    </button>
                    
                    <div className="text-sm text-gray-500">
                      <p>For more information, please contact:</p>
                      <p className="font-medium">events@medhfoundation.org</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Events Section */}
        {relatedEvents.length > 0 && (
          <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold mb-8">More Upcoming Events</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedEvents.map((event) => (
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
                            <MapPin className="w-4 h-4 mr-2 text-secondary-orange" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        <div className="flex justify-between">
                          <Link 
                            to={`/events/${event.id}`}
                            className="text-primary-green hover:text-primary-green/80 font-medium text-sm transition-colors"
                          >
                            Event Details
                          </Link>
                          <button 
                            onClick={handleRSVP}
                            className="bg-primary-green/10 text-primary-green hover:bg-primary-green/20 px-3 py-1 rounded text-sm font-medium transition-colors"
                          >
                            RSVP
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default EventDetailPage;
