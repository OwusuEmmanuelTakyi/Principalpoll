// NominationForm.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const NominationForm = () => {
  const { eventId } = useParams(); // Capture eventId from URL
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [otherNames, setOtherNames] = useState('');
  const [category, setCategory] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Mock categories - replace with a backend call if necessary
  const categories = ['Best New Artist', 'Best Vocalist', 'Best Performer'];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadProgress(50); // Mock progress
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setUploadProgress(100); // Mock progress completion
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process submission, likely a POST request to your backend
    console.log({ firstName, lastName, otherNames, category, phone, image });
    alert('Nomination submitted successfully');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Nomination Form for Event {eventId}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Other Names</label>
            <input
              type="text"
              value={otherNames}
              onChange={(e) => setOtherNames(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image Upload</label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="w-full p-2 border rounded"
            />
            {uploadProgress > 0 && (
              <div className="relative w-full h-2 bg-gray-200 rounded mt-2">
                <div
                  className="absolute top-0 left-0 h-2 bg-blue-500 rounded"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            )}
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
            Submit
          </button>
        </form>
        <p className="text-center mt-4 text-gray-500">Organized by GHAMSU LEGON</p>
      </div>
    </div>
  );
};

export default NominationForm;
