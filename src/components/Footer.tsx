import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.history.pushState({}, '', `/${page === 'home' ? '' : page}`);
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Mokshsewa</h3>
            <p className="text-gray-400">
              Providing dignified last rites services with care and compassion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavigation('services')} className="text-gray-400 hover:text-white">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('booking')} className="text-gray-400 hover:text-white">
                  Book Now
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('about')} className="text-gray-400 hover:text-white">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('contact')} className="text-gray-400 hover:text-white">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:1800-123-4567" className="flex items-center text-gray-400 hover:text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  1800-123-4567
                </a>
              </li>
              <li>
                <a href="mailto:support@Mokshsewa.com" className="flex items-center text-gray-400 hover:text-white">
                  <Mail className="w-4 h-4 mr-2" />
                  support@Mokshsewa.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                123 Main Street, City
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mokshsewa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
