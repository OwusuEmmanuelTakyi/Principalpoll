import React, { useState } from 'react';
import { Google } from '@mui/icons-material';
import { auth, googleProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showResetForm, setShowResetForm] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Sign up state
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Signed in with Google successfully");
      navigate('/dashboard');
    } catch (error) {
      alert(error.message);
    }
  };

  // Login with email and password
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      alert("Login successful");
      navigate('/dashboard');
    } catch (error) {
      alert(error.message);
    }
  };

  // Register with email and password
  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      alert("Account created successfully");
      navigate('/onboardingpage');
    } catch (error) {
      alert(error.message);
    }
  };

  // Password reset functionality
  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setMessage("Password reset email sent! Please check your inbox.");
      setShowResetForm(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const LoginForm = () => (
    <div className="bg-white rounded-xl shadow-lg flex flex-col w-full items-center p-8 md:p-10 lg:p-12">
      <h2 className="text-4xl font-bold text-[#064469] mb-4">PrincipalPoll</h2>
      <h3 className="text-xl font-semibold text-[#064469] mb-4">Sign In!</h3>
      <div className="flex items-center justify-center mb-6">
        <div className="socialIcon cursor-pointer" onClick={signInWithGoogle}>
          <Google className="text-[#064469] text-4xl" />
        </div>
      </div>
      <input
        type="email"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
        className="rounded-lg px-4 py-3 w-full border border-[#064469] mb-4 focus:border-[#9CCBDB] focus:outline-none"
        placeholder="Email"
      />
      <input
        type="password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
        className="rounded-lg px-4 py-3 w-full border border-[#064469] mb-4 focus:border-[#9CCBDB] focus:outline-none"
        placeholder="Password"
      />
      <button
        onClick={handleLogin}
        className="rounded-lg text-white bg-[#064469] w-full py-3 font-semibold text-lg shadow hover:bg-[#5790AB] transition duration-200"
      >
        Sign In
      </button>
      <p className="text-[#064469] mt-4 cursor-pointer" onClick={() => setShowResetForm(true)}>Forgot Password?</p>
      <p className="text-[#064469] mt-4">Don't have an account?</p>
      <p className="text-[#064469] font-medium cursor-pointer" onClick={() => setIsLogin(false)}>Create a New Account</p>
    </div>
  );

  const SignUpForm = () => (
    <div className="bg-[#064469] text-white rounded-xl shadow-lg flex flex-col w-full items-center p-8 md:p-10 lg:p-12">
      <h2 className="text-4xl font-bold mb-4">PrincipalPoll</h2>
      <h3 className="text-xl font-semibold mb-4">Create Account!</h3>
      <div className="flex items-center justify-center mb-6">
        <div className="socialIcon cursor-pointer" onClick={signInWithGoogle}>
          <Google className="text-white text-4xl" />
        </div>
      </div>
      <input
        type="text"
        value={registerName}
        onChange={(e) => setRegisterName(e.target.value)}
        className="rounded-lg px-4 py-3 w-full border border-[#9CCBDB] mb-4 focus:border-[#D0D7E1] focus:outline-none"
        placeholder="Name"
      />
      <input
        type="email"
        value={registerEmail}
        onChange={(e) => setRegisterEmail(e.target.value)}
        className="rounded-lg px-4 py-3 w-full border border-[#9CCBDB] mb-4 focus:border-[#D0D7E1] focus:outline-none"
        placeholder="Email"
      />
      <input
        type="password"
        value={registerPassword}
        onChange={(e) => setRegisterPassword(e.target.value)}
        className="rounded-lg px-4 py-3 w-full border border-[#9CCBDB] mb-4 focus:border-[#D0D7E1] focus:outline-none"
        placeholder="Password"
      />
      <button
        onClick={handleSignUp}
        className="rounded-lg text-[#064469] bg-white w-full py-3 font-semibold text-lg shadow hover:bg-[#9CCBDB] hover:text-white transition duration-200"
      >
        Sign Up
      </button>
      <p className="text-white mt-4">Already have an account?</p>
      <p className="text-white font-medium cursor-pointer" onClick={() => setIsLogin(true)}>Sign In to your Account</p>
    </div>
  );

  const ResetPasswordForm = () => (
    <div className="bg-white rounded-xl shadow-lg flex flex-col w-full items-center p-8 md:p-10 lg:p-12">
      <h2 className="text-4xl font-bold text-[#064469] mb-4">PrincipalPoll</h2>
      <h3 className="text-xl font-semibold text-[#064469] mb-4">Reset Password</h3>
      <input
        type="email"
        value={resetEmail}
        onChange={(e) => setResetEmail(e.target.value)}
        className="rounded-lg px-4 py-3 w-full border border-[#064469] mb-4 focus:border-[#9CCBDB] focus:outline-none"
        placeholder="Enter your email"
        autoComplete="off" // Ensures faster typing and smoother experience
      />
      <button
        onClick={handlePasswordReset}
        className="rounded-lg text-white bg-[#064469] w-full py-3 font-semibold text-lg shadow hover:bg-[#5790AB] transition duration-200"
      >
        Send Reset Email
      </button>
      <p className="text-[#064469] mt-4 cursor-pointer" onClick={() => setShowResetForm(false)}>Back to Login</p>
      {message && <p className="text-green-500 mt-4">{message}</p>}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100">
      <div className="hidden md:flex flex-col justify-center items-center w-full md:w-1/2 h-full bg-[#064469] text-white p-10 lg:p-20">
        <h1 className="text-5xl lg:text-6xl font-bold mb-4">PrincipalPoll</h1>
        <p className="text-lg lg:text-2xl">Engage and expand your horizons with polls</p>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        {showResetForm ? <ResetPasswordForm /> : isLogin ? <LoginForm /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default Login;
