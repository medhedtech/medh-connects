
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Medh Foundation</h3>
            <p className="text-gray-300 mb-6">
              Empowering children and single mothers through education and skill development, creating self-sufficient communities across India.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-primary-green transition-colors p-2 rounded-full">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-primary-green transition-colors p-2 rounded-full">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-primary-green transition-colors p-2 rounded-full">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-white transition-colors">Our Programs</Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-gray-300 hover:text-white transition-colors">Get Involved</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/programs#education" className="text-gray-300 hover:text-white transition-colors">Children's Education</Link>
              </li>
              <li>
                <Link to="/programs#mothers" className="text-gray-300 hover:text-white transition-colors">Skill Development</Link>
              </li>
              <li>
                <Link to="/programs#community" className="text-gray-300 hover:text-white transition-colors">Community Empowerment</Link>
              </li>
              <li>
                <Link to="/get-involved#volunteer" className="text-gray-300 hover:text-white transition-colors">Volunteer Opportunities</Link>
              </li>
              <li>
                <Link to="/get-involved#donate" className="text-gray-300 hover:text-white transition-colors">Donation Options</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-green mr-3 mt-0.5" />
                <span className="text-gray-300">
                  123 Community Lane,<br />
                  New Delhi, 110001,<br />
                  India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary-green mr-3" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-white transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary-green mr-3" />
                <a href="mailto:info@medhfoundation.org" className="text-gray-300 hover:text-white transition-colors">
                  info@medhfoundation.org
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-12 p-6 bg-gray-800 rounded-xl">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h4>
              <p className="text-gray-300 text-sm">Stay updated with our latest news, events, and success stories.</p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary-green flex-grow"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-primary-green hover:bg-primary-green/90 text-white font-medium py-2 px-6 rounded-lg transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Medh Foundation. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
