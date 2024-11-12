import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import DashboardPage from './Pages/DashboardPage';
import Events from './Pages/Events';
import NavBar from './Components/NavBar';
import Contestants from './Pages/Contestants';
import Votes from './Pages/Votes';
import Cashout from './Pages/Cashout';
import Nominations from './Pages/Nominations';
import NominationForm from './Pages/NominationForm';
import Login from './Components/Login';
import Signup from './Components/Signup';
import OnboardingPage from './Components/OnboardingPage';
import { auth, db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

function ProtectedRoute({ element: Component, redirectTo, ...rest }) {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(null);

  useEffect(() => {
    const fetchUserStatus = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists() && docSnap.data().onboardingComplete) {
          setIsOnboardingComplete(true);
        } else {
          setIsOnboardingComplete(false);
        }
      } else {
        setIsOnboardingComplete(false);
      }
    };

    fetchUserStatus();
  }, []);

  if (isOnboardingComplete === null) return null; // Loading state

  return isOnboardingComplete ? <Component {...rest} /> : <Navigate to={redirectTo} />;
}

function App() {
  const location = useLocation();
  const showNavBar = location.pathname.startsWith('/dashboard') && !location.pathname.startsWith('/nominate');

  return (
    <div>
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboardingpage" element={<OnboardingPage />} /> {/* Updated path */}
        
        {/* Protected Routes with `/onboardingpage` as redirect */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={DashboardPage} redirectTo="/onboardingpage" />}
        />
        <Route
          path="/dashboard/events"
          element={<ProtectedRoute element={Events} redirectTo="/onboardingpage" />}
        />
        <Route
          path="/dashboard/contestants"
          element={<ProtectedRoute element={Contestants} redirectTo="/onboardingpage" />}
        />
        <Route
          path="/dashboard/votes"
          element={<ProtectedRoute element={Votes} redirectTo="/onboardingpage" />}
        />
        <Route
          path="/dashboard/cashout"
          element={<ProtectedRoute element={Cashout} redirectTo="/onboardingpage" />}
        />
        <Route
          path="/dashboard/nominations"
          element={<ProtectedRoute element={Nominations} redirectTo="/onboardingpage" />}
        />
        <Route path="/nominate/:eventId" element={<NominationForm />} />
      </Routes>
    </div>
  );
}

// Wrap the App component with Router
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
