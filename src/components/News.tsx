import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const News = () => {
  const events = [
    {
      id: 1,
      title: "Educational Outreach Program",
      date: "July 15, 2025",
      location: "Delhi Community Center",
      description: "Join our educational outreach program aimed at providing resources and mentorship to underprivileged children.",
      image: "https://images.unsplash.com/photo-1610758366091-f4bda6a79337?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    },
    {
      id: 2,
      title: "Skills Development Workshop",
      date: "August 20, 2025",
      location: "Medh Training Center, Mumbai",
      description: "A comprehensive workshop focusing on digital literacy and entrepreneurship skills for single mothers.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    },
    {
      id: 3,
      title: "Foundation Launch Gala",
      date: "September 10, 2025",
      location: "The Grand Hotel, Delhi",
      description: "The official launch celebration of Medh Foundation, bringing together supporters and community partners.",
      image: "https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    },
  ];

  const newsItems = [
    {
      id: 1,
      title: "Medh Foundation Established to Support Education and Empowerment",
      date: "January 15, 2025",
      excerpt: "Announcing the formation of Medh Foundation with a mission to transform lives through education and skill development.",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    },
    {
      id: 2,
      title: "Strategic Partnerships Formed for Community Development",
      date: "March 22, 2025",
      excerpt: "Medh Foundation forms key strategic partnerships with educational institutions and corporate supporters to enhance our impact.",
      image: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-accent-green/10 text-accent-green px-4 py-1 rounded-full text-sm font-medium">Stay Updated</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Latest News & Events</h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Stay connected with our activities, achievements, and upcoming events as we work towards creating positive change.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Event */}
          <div className="lg:col-span-1 space-y-8">
            <h3 className="text-xl font-bold border-b border-gray-200 pb-2">Upcoming Events</h3>
            
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="min-w-[60px] h-16 bg-primary-green text-white rounded-lg flex flex-col items-center justify-center">
                    <span className="text-xs font-medium">
                      {new Date(event.date).toLocaleString('default', { month: 'short' })}
                    </span>
                    <span className="text-2xl font-bold">
                      {new Date(event.date).getDate()}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{event.title}</h4>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{event.date}</span>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm">{event.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 mt-3 text-sm">{event.description}</p>
                <div className="mt-4">
                  <Link
                    to="/resources#events"
                    className="text-primary-green hover:text-primary-green/80 text-sm font-medium transition-colors"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
            
            <div className="text-center mt-6">
              <Link 
                to="/resources#events"
                className="inline-flex items-center font-medium text-primary-green hover:text-primary-green/80 transition-colors"
              >
                View all events
              </Link>
            </div>
          </div>
          
          {/* News Articles */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-xl font-bold border-b border-gray-200 pb-2">Recent News</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {newsItems.map((news) => (
                <div key={news.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-gray-500 text-sm mb-2">{news.date}</div>
                    <h4 className="font-bold text-lg mb-2">{news.title}</h4>
                    <p className="text-gray-600 mb-4">{news.excerpt}</p>
                    <Link
                      to="/resources#news"
                      className="text-primary-green hover:text-primary-green/80 text-sm font-medium transition-colors"
                    >
                      Read full story
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <Link 
                to="/resources#news"
                className="btn-outline"
              >
                View All News
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
