// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faShieldAlt, faExpand, faUserFriends, faChevronDown, faChevronUp, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../Images/logo.png';
import backgroundImage from '../Images/background.png'; // Replace with the actual path of your background image in the src folder

const Home = () => {
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [faqState, setFaqState] = useState({});

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const response = await fetch('/api/competitions'); // Adjust API endpoint as needed
        const data = await response.json();
        setCompetitions(data);
      } catch (error) {
        console.error("Error fetching competitions:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCompetitions();
  }, []);

  const toggleFaqAnswer = (index) => {
    setFaqState((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqItems = [
    {
      question: "How secure is the voting process?",
      answer: "Our platform uses advanced encryption protocols to ensure that every vote is safe and confidential."
    },
    {
      question: "Can I create a private competition?",
      answer: "Yes, registered users have the option to create private competitions only accessible by select participants."
    },
    {
      question: "What happens if I encounter a technical issue?",
      answer: "Our support team is available 24/7 to assist you with any issues you may face while using the platform."
    }
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed text-gray-100 relative" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#142850] opacity-70"></div>
      
      {/* Main Content */}
      <div className="relative w-full sm:px-8 lg:px-12 max-w-7xl mx-auto">
        
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-[#C1DAF] text-center mt-4 sm:mt-8">
          Welcome to PrincipalPoll
        </h1>

        {/* Navbar */}
        <nav className="w-full bg-[#27496D] rounded-tl-lg rounded-br-lg shadow-md p-4 mt-4 flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img src={logo} alt="PrincipalPoll logo" className="h-8 w-auto" />
          </div>

          {/* Search Box */}
          <div className="w-full sm:w-1/2 sm:mx-4">
            <input
              type="text"
              placeholder="Search Competitor..."
              className="w-full px-4 py-2 bg-white border border-[#0C7B93] rounded-full focus:outline-none focus:ring-2 focus:ring-[#00A8CC]"
            />
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="text-[#C1DAF] hover:text-white">Login &gt;</button>
            <button className="px-4 py-2 text-white bg-[#00A8CC] rounded-full hover:bg-[#0C7B93] transform transition-transform duration-200 hover:scale-105">
              Sign up &gt;
            </button>
          </div>
        </nav>
      </div>
      
      {/* Intro Section */}
      <div className="w-full max-w-7xl mt-10 px-4 sm:px-8 lg:px-12 text-center relative z-10">
        <h2 className="text-4xl font-bold text-[#C1DAF] mb-4">Vote, Nominate, and Celebrate Excellence</h2>
        <p className="text-[#C1DAF] text-lg mb-6">
          PrincipalPoll delivers a cutting-edge, secure, and user-friendly electronic voting platform that empowers communities to participate in elections and competitions with ease. Join us in redefining the voting experience—efficient, transparent, and designed for seamless participation at every level.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <button className="bg-[#00A8CC] text-white py-2 px-6 rounded-full font-semibold hover:bg-[#0C7B93] transform transition-transform duration-200 hover:scale-105">Vote now</button>
          <button className="flex items-center space-x-2 text-[#00A8CC] hover:text-[#0C7B93] transform transition-transform duration-200 hover:scale-105">
            <FontAwesomeIcon icon={faPlayCircle} className="text-xl" />
            <span>Nominate</span>
          </button>
        </div>
      </div>
      
      {/* Why Choose Us Section */}
      <div className="w-full max-w-7xl mt-12 px-4 sm:px-8 lg:px-12 text-center relative z-10">
        <h3 className="text-3xl font-bold text-[#C1DAF] mb-8">Why Choose Us?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <FontAwesomeIcon icon={faShieldAlt} className="text-4xl text-[#0C7B93] mb-4" />
            <h4 className="text-xl font-semibold text-[#142850]">Secure Voting</h4>
            <p className="text-[#27496D] mt-2">Built with advanced encryption to ensure the safety of your votes.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <FontAwesomeIcon icon={faExpand} className="text-4xl text-[#0C7B93] mb-4" />
            <h4 className="text-xl font-semibold text-[#142850]">Scalable Solutions</h4>
            <p className="text-[#27496D] mt-2">Suitable for small or large elections, our platform scales effortlessly.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <FontAwesomeIcon icon={faUserFriends} className="text-4xl text-[#0C7B93] mb-4" />
            <h4 className="text-xl font-semibold text-[#142850]">User-Friendly</h4>
            <p className="text-[#27496D] mt-2">An intuitive interface makes it easy to use for both admins and voters.</p>
          </div>
        </div>
      </div>

      {/* Live Competitions Section */}
      <div className="w-full max-w-7xl mt-12 px-4 sm:px-8 lg:px-12 relative z-10">
        <h3 className="text-2xl font-bold text-[#C1DAF] mb-6 text-center">Live Competitions</h3>
        {loading ? (
          <p className="text-center text-gray-500">Loading competitions...</p>
        ) : competitions.length === 0 ? (
          <p className="text-center text-gray-500">No competitions found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {competitions.map((competition) => (
              <div key={competition.id} className="p-4 bg-white rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105">
                <h4 className="text-lg font-semibold mb-2">{competition.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{competition.description}</p>
                <button className="bg-[#00A8CC] text-white py-1 px-3 rounded-full text-sm hover:bg-[#0C7B93]">
                  Vote
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-7xl mt-12 px-4 sm:px-8 lg:px-12 relative z-10">
        <h3 className="text-2xl font-bold text-[#C1DAF] mb-4 text-center">Frequently Asked Questions</h3>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 py-4 transition-all duration-300">
              <button
                onClick={() => toggleFaqAnswer(index)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-[#142850]"
              >
                {item.question}
                <FontAwesomeIcon icon={faqState[index] ? faChevronUp : faChevronDown} />
              </button>
              {faqState[index] && (
                <p className="mt-2 text-gray-600 transition-opacity duration-300 ease-in-out">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#142850] py-8 mt-12 w-full text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
            
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-bold">PrincipalPoll</h3>
              <div className="flex justify-center sm:justify-start mt-4 space-x-4">
                <button className="text-white hover:text-[#00A8CC]" aria-label="Facebook link">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </button>
                <button className="text-white hover:text-[#00A8CC]" aria-label="Twitter link">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </button>
                <button className="text-white hover:text-[#00A8CC]" aria-label="Instagram link">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </button>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button className="text-white hover:text-[#00A8CC]">About Us</button></li>
                <li><button className="text-white hover:text-[#00A8CC]">How It Works</button></li>
                <li><button className="text-white hover:text-[#00A8CC]">FAQs</button></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><button className="text-white hover:text-[#00A8CC]">Privacy Policy</button></li>
                <li><button className="text-white hover:text-[#00A8CC]">Terms of Service</button></li>
                <li><button className="text-white hover:text-[#00A8CC]">Cookie Policy</button></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-center justify-center sm:justify-start">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-[#00A8CC]" />
                  info@principalpoll.com
                </li>
                <li className="flex items-center justify-center sm:justify-start">
                  <FontAwesomeIcon icon={faPhone} className="mr-2 text-[#00A8CC]" />
                  0599111700
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 border-t border-[#C1DAF] pt-4 text-center text-sm">
            © 2024 PrincipalPoll™. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>   
  );
};

export default Home;
