// src/Pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { Grid, Button, Box, Typography, TextField, CircularProgress, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faChartLine, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Home.css'; // Updated the name

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [competitions, setCompetitions] = useState([]);
  const [filteredCompetitions, setFilteredCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <Box>
      {/* Top Section with Logo and Navigation */}
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center" justifyContent="space-between" className="top-bar">
          <Grid item>
            <img src="/images/logo.png" alt="Platform Logo" className="platform-logo" />
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" component={Link} to="/login" className="top-button">
              Login
            </Button>
            <Button variant="contained" color="primary" component={Link} to="/signup" className="top-button">
              Signup
            </Button>
          </Grid>
        </Grid>
      </Container>

       {/* Banner Section with Two Columns */}
       <Box className="banner-section">
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Left Side: Text & Buttons */}
            <Grid item xs={12} md={6}>
              <Typography variant="h3" className="banner-text">
                Welcome to Our Voting App
              </Typography>
              <Typography variant="body1" className="banner-subtext">
                Your trusted platform for secure and seamless voting experiences across multiple competitions.
              </Typography>
              <Box className="banner-btn-container">
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  component={Link}
                  to="/competitions"
                  className="vote-now-button"
                >
                  Vote Now
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  component={Link}
                  to="/learn-more"
                  className="learn-more-button"
                >
                  Learn More
                </Button>
              </Box>
            </Grid>

            {/* Right Side: Image */}
            <Grid item xs={12} md={6}>
              <Box className="banner-image-container">
              <img src={require('../Images/home2.png')} alt="Voting Illustration" className="banner-image" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Search Section */}
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <TextField
            label="Search Competitions"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
            fullWidth
            sx={{ maxWidth: '600px' }}
          />
        </Box>

        {/* Loading Spinner */}
        {loading && (
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <CircularProgress />
            <Typography variant="h6">Loading Competitions...</Typography>
          </Box>
        )}

        {/* Display Competitions */}
        {!loading && (
          <Grid container spacing={3} sx={{ mt: 4 }}>
            {filteredCompetitions.length > 0 ? (
              filteredCompetitions.map((competition) => (
                <Grid item xs={12} sm={6} md={4} key={competition.id}>
                  <Box className="competition-card">
                    <img src={competition.image} alt={competition.name} className="competition-image" />
                    <Typography variant="h6" sx={{ mt: 2 }}>
                      {competition.name}
                    </Typography>
                  </Box>
                </Grid>
              ))
            ) : (
              <Typography variant="h6" sx={{ textAlign: 'center', mt: 2 }}>
                No Competitions Found
              </Typography>
            )}
          </Grid>
        )}
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" className="features-section">
        <Typography variant="h4" className="section-title">
          Why Choose Our Voting Platform?
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Box className="feature-box">
              <FontAwesomeIcon icon={faShieldAlt} size="3x" />
              <Typography variant="h6">Secure Voting</Typography>
              <Typography variant="body2">Built with advanced encryption to ensure the safety of your votes.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box className="feature-box">
              <FontAwesomeIcon icon={faChartLine} size="3x" />
              <Typography variant="h6">Scalable Solutions</Typography>
              <Typography variant="body2">Suitable for small or large elections, our platform scales effortlessly.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box className="feature-box">
              <FontAwesomeIcon icon={faUsers} size="3x" />
              <Typography variant="h6">User-Friendly</Typography>
              <Typography variant="body2">An intuitive interface makes it easy to use for both admins and voters.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* FAQ Section */}
      <Container maxWidth="md" className="faq-section">
        <Typography variant="h4" className="section-title" sx={{ textAlign: 'center', mb: 4 }}>
          Frequently Asked Questions
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What is Prinvote?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Prinvote is a secure and scalable e-voting platform...</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What is Prinvote?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Prinvote is a secure and scalable e-voting platform...</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What is Prinvote?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Prinvote is a secure and scalable e-voting platform...</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What is Prinvote?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Prinvote is a secure and scalable e-voting platform...</Typography>
          </AccordionDetails>
        </Accordion>
        {/* Additional Accordions */}
      </Container>

      {/* Footer Section */}
      <Box className="footer-section">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1">
                Prinvote is Ghana and Africa’s premier platform for secured and seamless e-voting and USSD voting experiences.
              </Typography>
            </Grid>
            <Grid item xs={18} sm={4}>
              <Link to="/terms" className="footer-link">Terms & Conditions</Link>
            </Grid>
            <Grid item xs={12} sm={4} className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </Grid>
          </Grid>
          <Typography variant="body2" sx={{ textAlign: 'center', mt: 2 }}>
            &copy; {new Date().getFullYear()} Prinvote. All Rights Reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
