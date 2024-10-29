import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import DashboardPage from './Pages/DashboardPage';
import Events from './Pages/Events';
import NavBar from './Components/NavBar';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/dashboard/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
