import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import DashboardPage from './Pages/DashboardPage';
import Events from './Pages/Events';
import NavBar from './Components/NavBar';
import Contestants from './Pages/Contestants';
import Votes from './Pages/Votes';
import Cashout from './Pages/Cashout';
import Nominations from './Pages/Nominations';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/dashboard/events" element={<Events />} />
      <Route path='/dashboard/contestants' element={<Contestants/>} />
      <Route path='/dashboard/votes' element={<Votes/>} />
      <Route path='/dashboard/cashout' element={<Cashout/>} />
      <Route path='/dashboard/nominations' element={<Nominations/>} />
      </Routes>
    </Router>
  );
}

export default App;
