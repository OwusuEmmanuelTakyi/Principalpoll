import React, { useState } from 'react';
import SideBar from '../Components/SideBar';

const Events = () => {
  const [showForm, setShowForm] = useState(false); // Toggle form visibility
  const [isPublished, setIsPublished] = useState(false);
  const [competitionName, setCompetitionName] = useState('');
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState(0.5); // Minimum rate 0.5
  const [endDate, setEndDate] = useState('');
  const [phoneRequired, setPhoneRequired] = useState(false);
  const [competitionImage, setCompetitionImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state for image upload

  const toggleForm = () => setShowForm(!showForm);

  const handleImageUpload = (e, categoryIndex = null, competitorIndex = null, isCompetitionImage = false) => {
    const file = e.target.files[0];
    if (file) {
      setIsLoading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (isCompetitionImage) {
          setCompetitionImage(reader.result);
        } else if (categoryIndex !== null && competitorIndex === null) {
          const updatedCategories = [...categories];
          updatedCategories[categoryIndex].categoryImage = reader.result;
          setCategories(updatedCategories);
        } else {
          const updatedCategories = [...categories];
          updatedCategories[categoryIndex].competitors[competitorIndex].image = reader.result;
          setCategories(updatedCategories);
        }
        setIsLoading(false); // Stop loading after the image is loaded
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddCategory = () => {
    setCategories([...categories, { name: '', description: '', categoryImage: null, competitors: [] }]);
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

  const handleSaveDraft = () => {
    setShowForm(false);
    setIsPublished(false);
  };

  const handlePublish = () => {
    if (!competitionName || !description || !endDate || categories.length === 0) {
      alert('Please fill out all fields and add at least one category before publishing.');
      return;
    }
    setIsPublished(true);
  };

  const handleDeleteDraft = () => {
    setShowForm(true);
    setIsPublished(false);
    setCompetitionName('');
    setDescription('');
    setEndDate('');
    setCategories([]);
  };

  return (
    <div className='w-full h-screen bg-[#D0D7E1] flex flex-col'>
      <div className='flex flex-1'>
        {/* Sidebar */}
        <div className='hidden lg:flex lg:w-[20%] lg:fixed lg:left-0 lg:top-16 bg-white shadow-md h-[80%] z-[0] mt-8'>
          <SideBar />
        </div>

        <div className='flex-1 lg:ml-[20%] p-4'>
          <h2 className="text-2xl font-semibold text-[#064469] mb-6">Events</h2>
          <button
            className="bg-[#064469] text-white px-4 py-2 rounded-lg hover:bg-[#072D44] mb-4"
            onClick={toggleForm}
          >
            {showForm ? 'Cancel' : 'Add Event'}
          </button>

          {showForm && (
            <form className="bg-white p-8 rounded-lg shadow-lg" onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label className="block text-[#072D44]">Competition Name</label>
                <input
                  type="text"
                  className="w-full mt-2 p-2 border border-[#5790AB] rounded-lg"
                  placeholder="Enter competition name"
                  value={competitionName}
                  onChange={(e) => setCompetitionName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-[#072D44]">Competition Description</label>
                <textarea
                  className="w-full mt-2 p-2 border border-[#5790AB] rounded-lg"
                  placeholder="Enter competition description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows="4"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-[#072D44]">Competition Image</label>
                <input
                  type="file"
                  className="w-full mt-2 p-2"
                  onChange={(e) => handleImageUpload(e, null, null, true)}
                />
                {competitionImage && (
                  <img src={competitionImage} alt="Competition" className="w-32 h-32 mt-4 rounded-md" />
                )}
              </div>

              <div className="mb-4">
                <label className="block text-[#072D44]">Rate (GHC / vote)</label>
                <input
                  type="number"
                  step="0.1"
                  min="0.5"
                  value={rate}
                  onChange={(e) => setRate(parseFloat(e.target.value))}
                  className="w-full mt-2 p-2 border border-[#5790AB] rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-[#072D44]">End Date</label>
                <input
                  type="datetime-local"
                  className="w-full mt-2 p-2 border border-[#5790AB] rounded-lg"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-[#064469] mb-2">All Categories</h3>
                {categories.map((category, index) => (
                  <div key={index} className="border border-[#9CCDDB] rounded-lg p-4 mb-4 bg-[#f0f8fc]">
                    <input
                      type="text"
                      className="w-full mb-2 p-2 border border-[#5790AB] rounded-lg"
                      placeholder="Category Name"
                      value={category.name}
                      onChange={(e) => handleCategoryChange(index, 'name', e.target.value)}
                      required
                    />
                    <textarea
                      className="w-full mb-2 p-2 border border-[#5790AB] rounded-lg"
                      placeholder="Category Description"
                      value={category.description}
                      onChange={(e) => handleCategoryChange(index, 'description', e.target.value)}
                      rows="3"
                      required
                    ></textarea>
                    <input
                      type="file"
                      className="block w-full text-gray-500"
                      onChange={(e) => handleImageUpload(e, index)}
                    />
                    {category.categoryImage && (
                      <img src={category.categoryImage} alt="Category" className="w-20 h-20 rounded-md mt-4" />
                    )}

                    <div className="mb-2">
                      <h5 className="font-semibold text-[#072D44] mb-2">Competitors</h5>
                      {category.competitors.map((competitor, competitorIndex) => (
                        <div key={competitorIndex} className="border border-[#9CCDDB] p-3 mb-2 rounded-lg">
                          <input
                            type="text"
                            className="w-full mb-2 p-2 border border-[#5790AB] rounded-lg"
                            placeholder="Competitor Name"
                            value={competitor.name}
                            onChange={(e) =>
                              handleCompetitorChange(index, competitorIndex, 'name', e.target.value)
                            }
                            required
                          />
                          <textarea
                            className="w-full mb-2 p-2 border border-[#5790AB] rounded-lg"
                            placeholder="Competitor Description"
                            value={competitor.description}
                            onChange={(e) =>
                              handleCompetitorChange(index, competitorIndex, 'description', e.target.value)
                            }
                            rows="2"
                            required
                          ></textarea>
                          <input
                            type="file"
                            className="block w-full text-gray-500"
                            onChange={(e) => handleImageUpload(e, index, competitorIndex)}
                          />
                          {competitor.image && (
                            <div className="mt-2">
                              <img src={competitor.image} alt="Uploaded" className="w-20 h-20 rounded-md" />
                            </div>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        className="mt-2 px-4 py-2 bg-[#064469] text-white rounded-lg"
                        onClick={() => handleAddCompetitor(index)}
                      >
                        + Add Competitor
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="px-4 py-2 bg-[#5790AB] text-white rounded-lg mt-2"
                  onClick={handleAddCategory}
                >
                  + Add Category
                </button>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  className="w-full py-3 mr-2 bg-[#072D44] text-white rounded-lg"
                  onClick={handleSaveDraft}
                >
                  Save Draft
                </button>
                <button
                  type="button"
                  className="w-full py-3 ml-2 bg-[#5790AB] text-white rounded-lg"
                  onClick={handlePublish}
                >
                  Publish Now
                </button>
              </div>
            </form>
          )}

          {!showForm && competitionName && (
            <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
              <h2 className="text-2xl font-semibold text-[#064469]">{competitionName}</h2>
              <p className="text-gray-700">{description}</p>
              {competitionImage && <img src={competitionImage} alt="Competition" className="w-32 h-32 mt-4 rounded-md" />}
              <p className="text-gray-600 mt-2">Ends: {new Date(endDate).toLocaleString()}</p>
              <div className="flex items-center mt-4 space-x-4">
                <button
                  className="bg-[#064469] text-white px-4 py-2 rounded-lg"
                  onClick={toggleForm}
                >
                  Edit
                </button>
                <button
                  className="bg-[#5790AB] text-white px-4 py-2 rounded-lg"
                  onClick={handlePublish}
                  disabled={isPublished}
                >
                  {isPublished ? "Published" : "Publish Now"}
                </button>
                <button className="bg-[#072D44] text-white px-4 py-2 rounded-lg" onClick={handleDeleteDraft}>
                  Delete
                </button>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-[#064469]">Categories</h3>
                {categories.map((cat, i) => (
                  <div key={i} className="border border-[#9CCDDB] rounded-lg p-4 mt-2 bg-[#f0f8fc]">
                    <h4 className="font-semibold">{cat.name}</h4>
                    <p className="text-gray-700">{cat.description}</p>
                    <div className="mt-2 flex items-center space-x-2">
                      {cat.categoryImage && <img src={cat.categoryImage} alt="Category" className="w-12 h-12 rounded-md" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
