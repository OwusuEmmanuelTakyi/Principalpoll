
import './App.css';
import Home from './Pages/Home';
import { Routes,Route } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Nominations from './Pages/Nominations';
import Competitions from './Pages/Competitions';
import Competitors from './Pages/Competitors';
import Votes from './Pages/Votes';
import Revenue from './Pages/Revenue';
import Reports from './Pages/Reports';
import Settings from './Pages/Settings';
import Withdraw from './Pages/Withdraw';
import Help from './Pages/Help';

function App() {
  return (
    <div >
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/login/dashboard" element={<Dashboard/>}/>
      <Route path="/login/dashboard/nominations" element={<Nominations/>}/>
      <Route path="/login/dashboard/competitions" element={<Competitions/>}/>
      <Route path="/login/dashboard/competitors" element={<Competitors/>}/>
      <Route path="/login/dashboard/votes" element={<Votes/>}/>
      <Route path="/login/dashboard/revenue" element={<Revenue/>}/>
      <Route path="/login/dashboard/reports" element={<Reports/>}/>
      <Route path="/login/dashboard/settings" element={<Settings/>}/>
      <Route path="/login/dashboard/withdraw" element={<Withdraw/>}/>
      <Route path="/login/dashboard/help" element={<Help/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
