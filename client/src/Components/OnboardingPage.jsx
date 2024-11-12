import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const OnboardingPage = () => {
  const [organizationName, setOrganizationName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otherNumber, setOtherNumber] = useState('');
  const [digitalAddress, setDigitalAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // State to hold error messages
  const navigate = useNavigate();

  const handleOnboardingSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const user = auth.currentUser;

    // Ensure all required fields are filled
    if (!organizationName || !phoneNumber || !otherNumber || !digitalAddress) {
      setError('Please fill in all fields.');
      return;
    }

    if (user) {
      setLoading(true);
      try {
        const userData = {
          organizationName,
          phoneNumber,
          otherNumber,
          digitalAddress,
          onboardingComplete: true,
        };

        // Save user info to Firestore
        await setDoc(doc(db, 'users', user.uid), userData, { merge: true });

        // Redirect to dashboard after successful submission
        navigate('/dashboard');
      } catch (error) {
        console.error("Error during onboarding:", error);
        setError("Failed to complete onboarding. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Complete Your Onboarding</h2>

        <form onSubmit={handleOnboardingSubmit}>
          {/* Organization Name */}
          <input
            type="text"
            placeholder="Organization Name"
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
            required
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none"
          />

          {/* Phone Number */}
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none"
          />

          {/* Other Number */}
          <input
            type="text"
            placeholder="Other Number (WhatsApp)"
            value={otherNumber}
            onChange={(e) => setOtherNumber(e.target.value)}
            required
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none"
          />

          {/* Digital Address */}
          <input
            type="text"
            placeholder="Digital Address"
            value={digitalAddress}
            onChange={(e) => setDigitalAddress(e.target.value)}
            required
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none"
          />

          {/* Display error message if any */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 bg-blue-500 text-white rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
          >
            {loading ? "Submitting..." : "Complete Onboarding"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OnboardingPage;
