
const Partners = () => {
  const partners = [
    { id: 1, name: "Education First", logo: "https://via.placeholder.com/200x80?text=Education+First" },
    { id: 2, name: "GlobalTech", logo: "https://via.placeholder.com/200x80?text=GlobalTech" },
    { id: 3, name: "Community Foundation", logo: "https://via.placeholder.com/200x80?text=Community+Foundation" },
    { id: 4, name: "IndiaCares", logo: "https://via.placeholder.com/200x80?text=IndiaCares" },
    { id: 5, name: "Future Skills", logo: "https://via.placeholder.com/200x80?text=Future+Skills" },
    { id: 6, name: "National Trust", logo: "https://via.placeholder.com/200x80?text=National+Trust" },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm font-medium">Trusted By</span>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold">Our Partners & Supporters</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="flex justify-center items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-h-12 max-w-full opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/about#partners"
            className="text-gray-600 hover:text-primary-green transition-colors text-sm font-medium"
          >
            Learn more about our partnerships
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
