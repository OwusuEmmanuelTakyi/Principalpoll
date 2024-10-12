
import './App.css';
import Home from './Pages/Home';
import { Routes,Route } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div >
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/login/dashboard" element={<Dashboard/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
