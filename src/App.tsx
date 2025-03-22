import React, { useState } from 'react';
import { Users, Box, BookOpen, CreditCard, Clock, MapPin, Phone, Mail, Heart, Users2, Building2, Handshake } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceCard from './components/ServiceCard';
import TestimonialCard from './components/TestimonialCard';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Listen for navigation events
  React.useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const page = path === '/' ? 'home' : path.slice(1);
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState(); // Handle initial page load

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const services = [
    {
      title: "Manpower Services",
      description: "Professional assistance for transportation and funeral arrangements with utmost respect and care.",
      Icon: Users,
      onClick: () => setCurrentPage('services')
    },
    {
      title: "Material Supply",
      description: "Complete provision of all necessary materials required for traditional last rites ceremonies.",
      Icon: Box,
      onClick: () => setCurrentPage('services')
    },
    {
      title: "Pandit Services",
      description: "Experienced priests to conduct last rites according to traditional customs and rituals.",
      Icon: BookOpen,
      onClick: () => setCurrentPage('services')
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      text: "In our time of grief, AntyeSti provided invaluable support. Their professional and compassionate service helped us give a dignified farewell to our loved one.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      name: "Priya Singh",
      text: "The team's attention to detail and respect for our customs was remarkable. They handled everything with such grace and dignity.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      name: "Amit Patel",
      text: "A professional service that thinks of everything. They made a difficult time much easier for our family.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    }
  ];

  const handleBookNow = () => {
    setCurrentPage('booking');
    window.history.pushState({}, '', '/booking');
  };

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 pt-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dignified Last Rites Assistance
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Professional and compassionate funeral services to honor your loved ones
            </p>
            <button 
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              onClick={handleBookNow}
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Families Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const renderServices = () => (
    <div className="pt-20">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-16">Our Services</h1>
          
          {/* Manpower Services */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Manpower Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer" onClick={handleBookNow}>
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Dead Body Transportation</h3>
                <p className="text-gray-600">Professional and dignified transportation services with trained staff.</p>
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Book Now</button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer" onClick={handleBookNow}>
                <Users2 className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Funeral Assistants</h3>
                <p className="text-gray-600">Experienced staff to help with all funeral arrangements and proceedings.</p>
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Book Now</button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer" onClick={handleBookNow}>
                <Building2 className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cremation Setup</h3>
                <p className="text-gray-600">Complete arrangement and setup for cremation ceremonies.</p>
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Book Now</button>
              </div>
            </div>
          </div>

          {/* Material Supply */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Material Supply</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer" onClick={handleBookNow}>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Essential Materials Package</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <Box className="w-5 h-5 mr-3 text-blue-600" />
                    Kafan (Shroud)
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Box className="w-5 h-5 mr-3 text-blue-600" />
                    White Chadar
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Box className="w-5 h-5 mr-3 text-blue-600" />
                    Dhoop & Agarbatti
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Box className="w-5 h-5 mr-3 text-blue-600" />
                    Other Traditional Items
                  </li>
                </ul>
                <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Order Package</button>
              </div>
            </div>
          </div>

          {/* Pandit Services */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">Pandit Services</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer" onClick={handleBookNow}>
              <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Last Rites Ceremony</h3>
              <p className="text-gray-600 mb-4">Expert priests to conduct traditional last rites ceremonies with proper rituals and customs.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <BookOpen className="w-5 h-5 mr-3 text-blue-600" />
                  Complete ritual guidance
                </li>
                <li className="flex items-center text-gray-600">
                  <BookOpen className="w-5 h-5 mr-3 text-blue-600" />
                  Traditional ceremonies
                </li>
                <li className="flex items-center text-gray-600">
                  <BookOpen className="w-5 h-5 mr-3 text-blue-600" />
                  Sanskrit chanting
                </li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Book Pandit Services</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderBooking = () => (
    <div className="pt-20">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-center mb-12">Book Our Services</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              {/* Step 1: Service Selection */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">1</span>
                  Choose Service
                </h2>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select a service</option>
                  <option value="manpower">Manpower Services</option>
                  <option value="material">Material Supply</option>
                  <option value="pandit">Pandit Services</option>
                </select>
              </div>

              {/* Step 2: Details */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">2</span>
                  Enter Details
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="date"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="time"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Payment */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">3</span>
                  Payment Method
                </h2>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="payment" className="mr-3" />
                    <CreditCard className="w-6 h-6 mr-3 text-blue-600" />
                    Credit/Debit Card
                  </label>
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="payment" className="mr-3" />
                    <Phone className="w-6 h-6 mr-3 text-blue-600" />
                    UPI
                  </label>
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="payment" className="mr-3" />
                    <Building2 className="w-6 h-6 mr-3 text-blue-600" />
                    Net Banking
                  </label>
                </div>
              </div>

              <button 
                className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 font-semibold"
                onClick={() => alert('Booking confirmed! We will contact you shortly.')}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderAbout = () => (
    <div className="pt-20">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-16">About Us</h1>
          
          {/* Mission & Vision */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide dignified and compassionate funeral services, ensuring every family receives the support they need during difficult times. We strive to uphold traditional values while offering modern, professional assistance.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Users2 className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted name in funeral services, known for our empathy, professionalism, and commitment to preserving the dignity of last rites ceremonies.
              </p>
            </div>
          </div>

          {/* Partnerships */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-center mb-8">Our Partnerships</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow cursor-pointer" onClick={handleBookNow}>
                <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cremation Grounds</h3>
                <p className="text-gray-600">Partnerships with major cremation grounds for seamless service.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow cursor-pointer" onClick={handleBookNow}>
                <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Hospitals</h3>
                <p className="text-gray-600">Collaboration with hospitals for immediate assistance.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow cursor-pointer" onClick={handleBookNow}>
                <Handshake className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">NGOs</h3>
                <p className="text-gray-600">Working with NGOs to provide services to the underprivileged.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderContact = () => (
    <div className="pt-20">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-16">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                alert('Message sent! We will get back to you soon.');
              }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
              <div className="space-y-6">
                <a href="tel:1800-123-4567" className="flex items-center hover:text-blue-600 transition-colors">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">1800-123-4567</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </a>
                <a href="mailto:support@antyesti.com" className="flex items-center hover:text-blue-600 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">support@antyesti.com</p>
                  </div>
                </a>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">123 Main Street</p>
                    <p className="text-gray-600">City, State - 123456</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold">Available 24/7</h3>
                    <p className="text-gray-600">Emergency services available round the clock</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && renderHome()}
      {currentPage === 'services' && renderServices()}
      {currentPage === 'booking' && renderBooking()}
      {currentPage === 'about' && renderAbout()}
      {currentPage === 'contact' && renderContact()}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;