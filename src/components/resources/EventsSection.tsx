
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

interface EventsSectionProps {
  events: Event[];
}

const EventsSection = ({ events }: EventsSectionProps) => {
  return (
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
        
        <div className="mt-10 text-center">
          <Link 
            to="/events"
            className="btn-outline"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
