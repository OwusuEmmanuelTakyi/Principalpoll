import React, { useState, useEffect } from 'react';
import SideBar from '../Components/SideBar';

const Nominations = () => {
  const [events, setEvents] = useState([]); // List of saved events
  const [selectedEvent, setSelectedEvent] = useState(null); // Currently selected event
  const [selectedCategory, setSelectedCategory] = useState(null); // Currently selected category for viewing nominations
  const [nominations, setNominations] = useState([]); // List of nominations for the selected category
  const [newNominee, setNewNominee] = useState(''); // Input for nominee's name
  const [newPhoneNumber, setNewPhoneNumber] = useState(''); // Input for nominee's phone number
  const [newPicture, setNewPicture] = useState(null); // File input for nominee's picture
  const [linkCopied, setLinkCopied] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Image to be displayed in the modal

  // Fetch saved events on component mount (replace with actual backend call)
  useEffect(() => {
    // Replace this with actual backend call to fetch only saved events
    setEvents([
      { id: 1, name: 'Best Artist Awards', categories: ['Best New Artist', 'Best Vocalist', 'Best Performer'] },
      { id: 2, name: 'Top Influencer Awards', categories: ['Most Influential Male', 'Most Influential Female'] }
    ]);
  }, []);

  // Copy link function to generate event link with categories
  const copyLink = (eventId) => {
    const event = events.find(e => e.id === eventId);
    if (event) {
      const link = `${window.location.origin}/nominate/${eventId}`;
      navigator.clipboard.writeText(link);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000); // Reset link copied notification
    }
  };

  // Fetch nominations for a selected category (replace with actual backend call)
  const fetchNominations = (eventId, category) => {
    setSelectedEvent(eventId);
    setSelectedCategory(category);

    // Replace this with actual backend call
    setNominations([
      { id: 1, name: 'John Doe', phone: '123-456-7890', status: 'pending', picture: null },
      { id: 2, name: 'Jane Smith', phone: '234-567-8901', status: 'pending', picture: null }
    ]);
  };

  // Handle new nominee picture upload
  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPicture(reader.result); // Store base64 string of the picture
      };
      reader.readAsDataURL(file);
    }
  };

  // Approve nominee and add to event's competitors list (replace with backend call)
  const handleApproveNominee = (nomineeId) => {
    const updatedNominations = nominations.map((nominee) =>
      nominee.id === nomineeId ? { ...nominee, status: 'approved' } : nominee
    );
    setNominations(updatedNominations);
  };

  // Update nominee name and phone number directly in the nominations list
  const handleNomineeChange = (nomineeId, field, value) => {
    const updatedNominations = nominations.map((nominee) =>
      nominee.id === nomineeId ? { ...nominee, [field]: value } : nominee
    );
    setNominations(updatedNominations);
  };

  // Add new nominee to the nominations list
  const handleAddNominee = () => {
    if (newNominee && newPhoneNumber && newPicture) {
      const newEntry = {
        id: nominations.length + 1,
        name: newNominee,
        phone: newPhoneNumber,
        picture: newPicture,
        status: 'pending'
      };
      setNominations([...nominations, newEntry]);
      setNewNominee('');
      setNewPhoneNumber('');
      setNewPicture(null);
    }
  };

  // Open modal with full-size image
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='w-full min-h-screen bg-slate-50 flex flex-col'>
      <div className='flex flex-1'>
        {/* Sidebar */}
        <div className='hidden lg:flex lg:w-[20%] lg:fixed lg:left-0 lg:top-16 bg-white shadow-md h-[80%] z-[0] mt-8'>
          <SideBar />
        </div>

        {/* Main content area */}
        <div className='flex-1 lg:ml-[20%] p-4 sm:p-6 md:p-8'>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Nomination Page</h2>
          <p className="text-gray-600 mb-6 sm:mb-8">Manage nominations for each event and add approved nominees to the event's categories.</p>

          {/* Events List */}
          <div className="grid gap-4 mb-6 sm:mb-8">
            {events.map((event) => (
              <div key={event.id} className="p-4 bg-white shadow-md rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{event.name}</h3>
                  </div>
                  <button
                    onClick={() => copyLink(event.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Copy Link
                  </button>
                </div>
                <p className="text-gray-600 text-sm">Categories:</p>
                <ul className="list-disc pl-6">
                  {event.categories.map((category, index) => (
                    <li key={index} className="text-blue-500 cursor-pointer" onClick={() => fetchNominations(event.id, category)}>
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {linkCopied && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
              Link copied to clipboard! Users can now view categories under this event.
            </div>
          )}

          {/* Nominations for Selected Category */}
          {selectedEvent && selectedCategory && (
            <div className="bg-white shadow-md rounded-lg p-6 mt-6">
              <h3 className="text-xl font-semibold mb-4">
                Nominations for {selectedCategory} in Event {selectedEvent}
              </h3>

              {/* Nominee Input */}
              <div className="flex items-center mb-4">
                <input
                  type="text"
                  value={newNominee}
                  onChange={(e) => setNewNominee(e.target.value)}
                  placeholder="Enter nominee name"
                  className="border p-2 rounded w-full mr-4"
                />
                <input
                  type="text"
                  value={newPhoneNumber}
                  onChange={(e) => setNewPhoneNumber(e.target.value)}
                  placeholder="Enter phone number"
                  className="border p-2 rounded w-full mr-4"
                />
                <input type="file" onChange={handlePictureUpload} className="border p-2 rounded w-full mr-4" />
                <button onClick={handleAddNominee} className="bg-green-500 text-white px-4 py-2 rounded">
                  Add Nominee
                </button>
              </div>

              {/* Nominees List */}
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-gray-600">Picture</th>
                    <th className="px-4 py-2 text-left text-gray-600">Nominee Name</th>
                    <th className="px-4 py-2 text-left text-gray-600">Phone Number</th>
                    <th className="px-4 py-2 text-left text-gray-600">Status</th>
                    <th className="px-4 py-2 text-left text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {nominations.map((nominee) => (
                    <tr key={nominee.id} className="border-t">
                      <td className="px-4 py-2">
                        {nominee.picture ? (
                          <img
                            src={nominee.picture}
                            alt="Nominee"
                            className="w-12 h-12 rounded-full cursor-pointer"
                            onClick={() => handleImageClick(nominee.picture)}
                          />
                        ) : (
                          <span>No Image</span>
                        )}
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={nominee.name}
                          onChange={(e) => handleNomineeChange(nominee.id, 'name', e.target.value)}
                          className="border p-1 rounded w-full"
                        />
                      </td>
                      <td className="px-4 py-2">{nominee.phone}</td>
                      <td className="px-4 py-2 capitalize">{nominee.status}</td>
                      <td className="px-4 py-2">
                        {nominee.status === 'pending' ? (
                          <button
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                            onClick={() => handleApproveNominee(nominee.id)}
                          >
                            Approve
                          </button>
                        ) : (
                          <span className="text-green-600">Approved</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Full Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <img src={selectedImage} alt="Full-size Nominee" className="max-w-full max-h-screen" />
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nominations;
