// src/Pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { Grid, Button, Box, Typography, TextField, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faChartLine, faUsers } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [competitions, setCompetitions] = useState([]);
  const [filteredCompetitions, setFilteredCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Example API URL, replace with your actual endpoint
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
    <Box sx={{ flexGrow: 1, p: { xs: 2, md: 4 } }}>
      
      {/* Top Section with Logo, Login, and Signup */}
      <Grid container spacing={2} alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
        <Grid item>
          {/* Platform Logo */}
          <img src="/images/logo.png" alt="Platform Logo" className="platform-logo" />
        </Grid>
        
        <Grid item>
          {/* Login and Signup Buttons */}
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/login"
            sx={{ marginRight: 2 }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/signup"
          >
            Signup
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* Banner Section with "Vote Now" Button */}
        <Grid item xs={12}>
          <Box className="banner">
            <Typography variant="h3" component="div" sx={{ color: '#fff' }}>
              Welcome to Our Voting App
            </Typography>

            {/* Vote Now Button */}
            <Box sx={{ textAlign: 'center', mt: 4 }}>
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
            </Box>
          </Box>
        </Grid>

        {/* Search Box Section */}
        <Grid item xs={12}>
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <TextField
              label="Search for Competitions"
              variant="outlined"
              value={searchTerm}
              onChange={handleSearch}
              fullWidth
              sx={{ maxWidth: '600px', margin: '0 auto' }}
            />
          </Box>

          {/* Display Loading Spinner While Fetching */}
          {loading && (
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <CircularProgress />
              <Typography variant="h6">Loading Competitions...</Typography>
            </Box>
          )}

          {/* Display Filtered Competitions */}
          <Box sx={{ mt: 3 }}>
            {!loading && filteredCompetitions.length > 0 ? (
              <Grid container spacing={2} justifyContent="center">
                {filteredCompetitions.map((competition) => (
                  <Grid item xs={12} sm={6} md={3} key={competition.id}>
                    <Box className="competition-card" sx={{ textAlign: 'center', p: 2, border: '1px solid #ddd', borderRadius: '8px' }}>
                      <img
                        src={competition.image}
                        alt={competition.name}
                        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                      />
                      <Typography variant="h6" sx={{ mt: 2 }}>
                        {competition.name}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            ) : (
              !loading && (
                <Typography variant="h6" sx={{ textAlign: 'center', mt: 2 }}>
                  No Competitions Found
                </Typography>
              )
            )}
          </Box>
        </Grid>
      </Grid>

      {/* New Section: Why Choose Our Voting Platform */}
      <Grid container spacing={3} className="features-section" sx={{ mt: 6 }}>
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3,color: 'black' }}>
            Why Choose Our Voting Platform?
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center', p: 2 }}>
            <FontAwesomeIcon icon={faShieldAlt} size="3x" color="#007bff" />
            <Typography variant="h6" sx={{ mt: 2 }}>Secure Voting</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Our platform is built with advanced encryption and security measures to ensure the safety of your elections.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center', p: 2 }}>
            <FontAwesomeIcon icon={faChartLine} size="3x" color="#28a745" />
            <Typography variant="h6" sx={{ mt: 2 }}>Scalable Solutions</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Whether you're running a small local election or a national campaign, our platform scales to meet your needs.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center', p: 2 }}>
            <FontAwesomeIcon icon={faUsers} size="3x" color="#ffc107" />
            <Typography variant="h6" sx={{ mt: 2 }}>Easy to Use</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Our intuitive interface makes it easy for both administrators and voters to use the platform without any hassle.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* New Section: Why Choose Our Voting Platform */}
      <Grid container spacing={3} className="features-section" sx={{ mt: 6 }}>
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
            Why Choose Our Voting Platform?
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center', p: 2 }}>
            <FontAwesomeIcon icon={faShieldAlt} size="3x" color="#007bff" />
            <Typography variant="h6" sx={{ mt: 2 }}>Secure Voting</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Our platform is built with advanced encryption and security measures to ensure the safety of your elections.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center', p: 2 }}>
            <FontAwesomeIcon icon={faChartLine} size="3x" color="#28a745" />
            <Typography variant="h6" sx={{ mt: 2 }}>Scalable Solutions</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Whether you're running a small local election or a national campaign, our platform scales to meet your needs.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center', p: 2 }}>
            <FontAwesomeIcon icon={faUsers} size="3x" color="#ffc107" />
            <Typography variant="h6" sx={{ mt: 2 }}>Easy to Use</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Our intuitive interface makes it easy for both administrators and voters to use the platform without any hassle.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* New Section: Why Choose Our Voting Platform */}
      <Grid container spacing={3} className="features-section" sx={{ mt: 6 }}>
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
            Why Choose Our Voting Platform?
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center', p: 2 }}>
            <FontAwesomeIcon icon={faShieldAlt} size="3x" color="#007bff" />
            <Typography variant="h6" sx={{ mt: 2 }}>prinvote</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Our platform is built with advanced encryption and security measures to ensure the safety of your elections.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center', p: 2 }}>
            <FontAwesomeIcon icon={faChartLine} size="3x" color="#28a745" />
            <Typography variant="h6" sx={{ mt: 2 }}>contact us</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Whether you're running a small local election or a national campaign, our platform scales to meet your needs.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center', p: 2 }}>
            <FontAwesomeIcon icon={faUsers} size="3x" color="#ffc107" />
            <Typography variant="h6" sx={{ mt: 2 }}>follow us</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Our intuitive interface makes it easy for both administrators and voters to use the platform without any hassle.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
