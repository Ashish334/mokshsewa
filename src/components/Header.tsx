import React from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  setCurrentPage: (page: string) => void;
}

export default function Header({ setCurrentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.history.pushState({}, '', `/${page === 'home' ? '' : page}`);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span 
              className="text-2xl font-semibold text-gray-800 cursor-pointer"
              onClick={() => handleNavigation('home')}
            >
              Mokshsewa
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('home')}
              className="text-gray-700 hover:text-gray-900"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('services')}
              className="text-gray-700 hover:text-gray-900"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavigation('booking')}
              className="text-gray-700 hover:text-gray-900"
            >
              Booking
            </button>
            <button 
              onClick={() => handleNavigation('about')}
              className="text-gray-700 hover:text-gray-900"
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="text-gray-700 hover:text-gray-900"
            >
              Contact
            </button>
            <a href="tel:1800-123-4567" className="flex items-center text-blue-600 hover:text-blue-800">
              <Phone className="w-4 h-4 mr-2" />
              1800-123-4567
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('home')}
                className="text-gray-700 hover:text-gray-900 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('services')}
                className="text-gray-700 hover:text-gray-900 text-left"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavigation('booking')}
                className="text-gray-700 hover:text-gray-900 text-left"
              >
                Booking
              </button>
              <button 
                onClick={() => handleNavigation('about')}
                className="text-gray-700 hover:text-gray-900 text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className="text-gray-700 hover:text-gray-900 text-left"
              >
                Contact
              </button>
              <a href="tel:1800-123-4567" className="flex items-center text-blue-600 hover:text-blue-800">
                <Phone className="w-4 h-4 mr-2" />
                1800-123-4567
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}