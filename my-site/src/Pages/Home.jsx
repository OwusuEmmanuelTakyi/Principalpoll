import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faChartLine, faUsers, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebook,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Home.css';
import prinvoteLogo from '../Images/prinvote.png';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [competitions, setCompetitions] = useState([]);
  const [filteredCompetitions, setFilteredCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [activeFaq, setActiveFaq] = useState(null); // State for handling FAQ expand/collapse

  const API_URL = 'https://api.example.com/competitions';

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setCompetitions(data);
        setFilteredCompetitions(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching competitions:', error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filtered = competitions.filter((competition) =>
      competition.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredCompetitions(filtered);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index); // Toggle FAQ expand/collapse
  };

  return (
    <div>
      {/* Top Section with Logo and Navigation */}
      <div className="top-bar">
        <div>
          <img src={prinvoteLogo} alt="Platform Logo" className="platform-logo" />
        </div>
        <div className="nav-links">
          <Link to="/login" className="btn btn-outline-primary top-button variant-outlined">
            Login
          </Link>
          <Link to="/signup" className="btn btn-primary top-button variant-contained">
            Signup
          </Link>
        </div>
      </div>

      {/* Banner Section */}
      <div className="banner-section">
        <div className="container">
          <div className="row align-items-center banner-content">
            <div className="col-md-6 banner-left">
              <h3 className="banner-text">Welcome to Our Voting App</h3>
              <p className="banner-subtext">
                Your trusted platform for secure and seamless voting experiences across multiple competitions.
              </p>
              <div className="banner-btn-container">
                <Link to="/competitions" className="btn btn-secondary vote-now-button">
                  Vote Now
                </Link>
                <Link to="/learn-more" className="btn btn-outline-primary learn-more-button">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container search-section">
        <div className="search-bar-container">
          <input
            type="text"
            className="form-control search-bar"
            placeholder="Search competitions..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="text-center mt-4">
          <div className="spinner-border"></div>
          <h6>Loading Competitions...</h6>
        </div>
      )}

      {/* Display Competitions */}
      {!loading && (
        <div className="row mt-4">
          {filteredCompetitions.length > 0 ? (
            filteredCompetitions.map((competition) => (
              <div className="col-md-4 col-sm-6 mb-4" key={competition.id}>
                <div className="competition-card">
                  <img src={competition.image} alt={competition.name} className="competition-image" />
                  <h6 className="mt-2">{competition.name}</h6>
                </div>
              </div>
            ))
          ) : (
            <h6 className="text-center mt-2">No Competitions Found</h6>
          )}
        </div>
      )}

      {/* Features Section */}
      <div className="features-section">
        <div className="container">
          <h4 className="section-title">Why Choose Our Voting Platform?</h4>
          <div className="row features-row">
            <div className="col-md-4 feature-box-container">
              <div className="feature-box">
                <FontAwesomeIcon icon={faShieldAlt} size="3x" />
                <h6>Secure Voting</h6>
                <p>Built with advanced encryption to ensure the safety of your votes.</p>
              </div>
            </div>
            <div className="col-md-4 feature-box-container">
              <div className="feature-box">
                <FontAwesomeIcon icon={faChartLine} size="3x" />
                <h6>Scalable Solutions</h6>
                <p>Suitable for small or large elections, our platform scales effortlessly.</p>
              </div>
            </div>
            <div className="col-md-4 feature-box-container">
              <div className="feature-box">
                <FontAwesomeIcon icon={faUsers} size="3x" />
                <h6>User-Friendly</h6>
                <p>An intuitive interface makes it easy to use for both admins and voters.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <div className="container">
          <h4 className="section-title text-center mb-4">Frequently Asked Questions</h4>
          <div className="accordion">
            {/* Question 1 */}
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(0)}>
                <h5>What is Prinvote?</h5>
                <FontAwesomeIcon icon={activeFaq === 0 ? faMinus : faPlus} />
              </div>
              {activeFaq === 0 && (
                <div className="faq-answer">
                  <p>Prinvote is a secure and scalable e-voting platform designed for multiple competitions.</p>
                </div>
              )}
            </div>

            {/* Question 2 */}
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(1)}>
                <h5>How can I participate in a voting competition?</h5>
                <FontAwesomeIcon icon={activeFaq === 1 ? faMinus : faPlus} />
              </div>
              {activeFaq === 1 && (
                <div className="faq-answer">
                  <p>Simply create an account, log in, and select the competition you'd like to vote in.</p>
                </div>
              )}
            </div>

            {/* Add more FAQ questions here */}
          </div>
        </div>
      </div>

      {/* Footer Section */}
<div className="footer-section">
  <div className="container">
    <div className="row">
      {/* About Prinvote Section */}
      <div className="col-md-6 footer-about">
        <h5>About Prinvote</h5>
        <p>
          Prinvote is a leading e-voting platform built with security, scalability, and user-friendliness in mind. Whether it’s a small contest or a large-scale election, Prinvote ensures that every vote counts securely and seamlessly. Join us in revolutionizing the way votes are cast, making elections more efficient for organizations across the globe.
        </p>
        <p>&copy; {new Date().getFullYear()} Prinvote. All rights reserved.</p>
      </div>

      {/* Links Section */}
      <div className="col-md-3 footer-links">
        <h5>Quick Links</h5>
        <ul>
          <li><Link to="/terms">Terms & Conditions</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      {/* Social Media Section */}
      <div className="col-md-3 footer-social">
        <h5>Connect with Us</h5>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
