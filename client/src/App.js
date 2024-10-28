import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import DashboardPage from './Pages/DashboardPage';
import Events from './Pages/Events';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
