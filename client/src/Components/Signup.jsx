import React, { useState } from 'react';
import { Google } from '@mui/icons-material';
import { auth, googleProvider, signInWithPopup, createUserWithEmailAndPassword, db, setDoc, doc } from '../firebase'; // Ensure correct imports
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const navigate = useNavigate();

  // Helper function to add a new user to the Firestore database
  const addUserToFirestore = async (user) => {
    try {
      await setDoc(doc(db, 'users', user.uid), {
        name: registerName,
        email: user.email,
        onboardingCompleted: false,
      });
      navigate('/onboardingpage');
    } catch (error) {
      console.error("Error adding user to Firestore:", error);
    }
  };

  // Sign up with Google
  const signUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      await addUserToFirestore(user);
    } catch (error) {
      alert(error.message);
    }
  };

  // Sign up with email and password
  const handleSignUp = async () => {
    try {
      const result = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      const user = result.user;
      await addUserToFirestore(user);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Side: Brand Information */}
        <div className="md:w-1/2 bg-gradient-to-br from-blue-800 to-blue-500 p-8 hidden md:flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">PrincipalPoll</h1>
          <p className="text-lg mb-8">Join us and expand your horizons with insightful polls!</p>
        </div>

        {/* Right Side: Sign Up Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center md:text-left">Create Account</h2>
          
          <div className="flex justify-center mb-6">
            <button onClick={signUpWithGoogle} className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <Google /> <span>Sign up with Google</span>
            </button>
          </div>

          {/* Form Inputs */}
          <div className="space-y-4">
            <input
              type="text"
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name"
              required
            />
            <input
              type="email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              required
            />
            <button
              onClick={handleSignUp}
              className="w-full py-3 mt-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </button>
          </div>

          <p className="text-gray-600 text-center mt-6">
            Already have an account? 
            <span className="text-blue-600 font-medium cursor-pointer" onClick={() => navigate("/login")}> Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
