
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesHeader from "@/components/resources/ResourcesHeader";
import { events } from "@/data/resourcesData";
import { Link } from "react-router-dom";
import { Calendar, Search } from "lucide-react";

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState<string>("all");
  
  // Get current date
  const currentDate = new Date();
  
  // Filter events based on search query and date
  const filteredEvents = events.filter((event) => {
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const eventDate = new Date(event.date);
    
    let matchesDate = true;
    if (dateFilter === "upcoming") {
      matchesDate = eventDate >= currentDate;
    } else if (dateFilter === "past") {
      matchesDate = eventDate < currentDate;
    }
    
    return matchesSearch && matchesDate;
  });
  
  // Sort events by date (upcoming first)
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  });
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <ResourcesHeader 
          title="Upcoming Events" 
          description="Join us at our events and be part of our community initiatives."
        />
        
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Search and filter */}
            <div className="mb-12 space-y-6">
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setDateFilter("all")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    dateFilter === "all" 
                      ? "bg-secondary-orange text-white" 
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  All Events
                </button>
                <button
                  onClick={() => setDateFilter("upcoming")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    dateFilter === "upcoming" 
                      ? "bg-secondary-orange text-white" 
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Upcoming Events
                </button>
                <button
                  onClick={() => setDateFilter("past")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    dateFilter === "past" 
                      ? "bg-secondary-orange text-white" 
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Past Events
                </button>
              </div>
            </div>
            
            {/* Events grid */}
            {sortedEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedEvents.map((event) => (
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
                        <Link 
                          to={`/resources/events/${event.id}`}
                          className="text-primary-green hover:text-primary-green/80 font-medium text-sm transition-colors"
                        >
                          Event Details
                        </Link>
                        <button className="bg-primary-green/10 text-primary-green hover:bg-primary-green/20 px-3 py-1 rounded text-sm font-medium transition-colors">
                          RSVP
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No events match your search criteria</p>
              </div>
            )}
            
            <div className="mt-12 text-center">
              <Link to="/resources#events" className="btn-outline">
                Back to Resources
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
