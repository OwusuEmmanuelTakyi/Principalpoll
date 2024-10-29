import React, { useState } from 'react';
import SideBar from '../Components/SideBar';

const Events = () => {
  const [showForm, setShowForm] = useState(false); // Toggle form visibility
  const [competitionName, setCompetitionName] = useState('');
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState(0.5); // Minimum rate 0.5
  const [endDate, setEndDate] = useState('');
  const [phoneRequired, setPhoneRequired] = useState(false);
  const [categories, setCategories] = useState([]); // Manage categories
  const [isLoading, setIsLoading] = useState(false); // Loading state for image upload

  const toggleForm = () => setShowForm(!showForm);

  const handleImageUpload = (e, categoryIndex, competitorIndex) => {
    const file = e.target.files[0];
    if (file) {
      setIsLoading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedCategories = [...categories];
        updatedCategories[categoryIndex].competitors[competitorIndex].image = reader.result;
        setCategories(updatedCategories);
        setIsLoading(false); // Stop loading after the image is loaded
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (categoryIndex, competitorIndex) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].competitors[competitorIndex].image = null;
    setCategories(updatedCategories);
  };

  const handleAddCategory = () => {
    setCategories([...categories, { name: '', description: '', competitors: [] }]);
  };

  const handleCategoryChange = (index, field, value) => {
    const updatedCategories = [...categories];
    updatedCategories[index][field] = value;
    setCategories(updatedCategories);
  };

  const handleAddCompetitor = (index) => {
    const updatedCategories = [...categories];
    updatedCategories[index].competitors.push({ name: '', description: '', image: null });
    setCategories(updatedCategories);
  };

  const handleCompetitorChange = (categoryIndex, competitorIndex, field, value) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].competitors[competitorIndex][field] = value;
    setCategories(updatedCategories);
  };

  const handleRemoveCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  const handleRemoveCompetitor = (categoryIndex, competitorIndex) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].competitors.splice(competitorIndex, 1);
    setCategories(updatedCategories);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      competitionName,
      description,
      rate,
      endDate,
      categories,
      phoneRequired,
    });
  };

  return (
    <div className='w-full h-screen bg-slate-50 flex flex-col'>
      <div className='flex flex-1'>
        {/* Sidebar is fixed on lg screens and hidden on smaller screens */}
        <div className='hidden lg:flex lg:w-[20%] lg:fixed lg:left-0 lg:top-16 bg-white shadow-md h-[80%] z-[0] mt-8'>
          <SideBar />
        </div>

        <div className='flex-1 lg:ml-[20%] p-4'>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">Events</h2>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mb-4"
            onClick={toggleForm}
          >
            {showForm ? 'Cancel' : 'Add Event'} <span className="font-bold">{showForm ? '-' : '+'}</span>
          </button>

          {/* Form Section */}
          {showForm && (
            <form className="bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
              <div className="flex items-center mb-4">
                <label className="mr-4">Phone Number Required</label>
                <input
                  type="checkbox"
                  checked={phoneRequired}
                  onChange={() => setPhoneRequired(!phoneRequired)}
                  className="form-checkbox h-6 w-6 text-blue-600"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Competition Name</label>
                <input
                  type="text"
                  className="w-full mt-2 p-2 border rounded-lg"
                  placeholder="Enter competition name"
                  value={competitionName}
                  onChange={(e) => setCompetitionName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Competition Description</label>
                <textarea
                  className="w-full mt-2 p-2 border rounded-lg"
                  placeholder="Enter competition description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows="4"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Rate (GHC / vote)</label>
                <input
                  type="number"
                  step="0.1"
                  min="0.5"
                  value={rate}
                  onChange={(e) => setRate(parseFloat(e.target.value))}
                  className="w-full mt-2 p-2 border rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">End Date</label>
                <input
                  type="datetime-local"
                  className="w-full mt-2 p-2 border rounded-lg"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
              </div>

              {/* Category Section */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">All Categories</h3>
                {categories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="border rounded-lg p-4 mb-4 bg-gray-50">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Category {categoryIndex + 1}</h4>
                      <button
                        type="button"
                        className="text-red-600"
                        onClick={() => handleRemoveCategory(categoryIndex)}
                      >
                        🗑️
                      </button>
                    </div>
                    <input
                      type="text"
                      className="w-full mb-2 p-2 border rounded-lg"
                      placeholder="Category Name"
                      value={category.name}
                      onChange={(e) => handleCategoryChange(categoryIndex, 'name', e.target.value)}
                      required
                    />
                    <textarea
                      className="w-full mb-2 p-2 border rounded-lg"
                      placeholder="Category Description"
                      value={category.description}
                      onChange={(e) => handleCategoryChange(categoryIndex, 'description', e.target.value)}
                      rows="3"
                      required
                    ></textarea>

                    {/* Competitors */}
                    <div className="mb-2">
                      <h5 className="font-semibold mb-2">Competitors</h5>
                      {category.competitors.map((competitor, competitorIndex) => (
                        <div key={competitorIndex} className="border p-3 mb-2 rounded-lg">
                          <input
                            type="text"
                            className="w-full mb-2 p-2 border rounded-lg"
                            placeholder="Competitor Name"
                            value={competitor.name}
                            onChange={(e) =>
                              handleCompetitorChange(categoryIndex, competitorIndex, 'name', e.target.value)
                            }
                            required
                          />
                          <textarea
                            className="w-full mb-2 p-2 border rounded-lg"
                            placeholder="Competitor Description"
                            value={competitor.description}
                            onChange={(e) =>
                              handleCompetitorChange(categoryIndex, competitorIndex, 'description', e.target.value)
                            }
                            rows="2"
                            required
                          ></textarea>
                          <input
                            type="file"
                            className="block w-full text-gray-500"
                            onChange={(e) => handleImageUpload(e, categoryIndex, competitorIndex)}
                          />
                          {competitor.image && (
                            <div className="mt-2">
                              <img src={competitor.image} alt="Uploaded" className="w-20 h-20 rounded-md" />
                              <button
                                type="button"
                                className="text-red-500 text-sm mt-1"
                                onClick={() => handleRemoveImage(categoryIndex, competitorIndex)}
                              >
                                Remove Image
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
                        onClick={() => handleAddCompetitor(categoryIndex)}
                      >
                        + Add Competitor
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg mt-2"
                  onClick={handleAddCategory}
                >
                  + Add Category
                </button>
              </div>

              <button type="submit" className="w-full py-3 mt-4 bg-blue-700 text-white rounded-lg">
                Save Draft
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
