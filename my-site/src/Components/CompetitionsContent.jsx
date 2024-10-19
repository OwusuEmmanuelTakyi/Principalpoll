import React, { useState } from 'react';
import './CompetitionsContent.css';

const CompetitionsContent = () => {
  const [showForm, setShowForm] = useState(false); // Toggle form visibility
  const [competitionName, setCompetitionName] = useState('');
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState('');
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
    <div className='competitions-container'>
      {/* Header Section */}
      <div className="header">
        <h2>Events</h2>
        <button className="add-event-btn" onClick={toggleForm}>
          {showForm ? 'Cancel' : 'Add Event'} <span className="plus-icon">{showForm ? '-' : '+'}</span>
        </button>
      </div>

      {/* Form Section */}
      {showForm && (
        <form className="competition-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="phoneRequired">Phone Number Required</label>
            <label className="switch">
              <input
                type="checkbox"
                id="phoneRequired"
                checked={phoneRequired}
                onChange={() => setPhoneRequired(!phoneRequired)}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="competitionName">Competition Name</label>
            <input
              type="text"
              id="competitionName"
              className="form-control"
              placeholder="Enter competition name"
              value={competitionName}
              onChange={(e) => setCompetitionName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Competition Description</label>
            <textarea
              id="description"
              className="form-control"
              placeholder="Enter competition description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows="4"
            ></textarea>
          </div>

          <div className="form-group">
  <label htmlFor="rate">Rate (GHC / vote)</label>
  <input
    type="number"
    id="rate"
    className="form-control"
    placeholder="Enter rate per vote"
    value={rate}
    onChange={(e) => setRate(e.target.value)}
    step="0.1" // Increment by 0.1
    min="0.5" // Minimum value is 0.5
    required
  />
</div>


          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="datetime-local"
              id="endDate"
              className="form-control"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>

          {/* All Categories Section */}
          <div className="form-group categories-section">
            <h3>All Categories</h3>

            {/* Category Cards */}
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="category-card">
                <div className="category-header">
                  <h4>Category {categoryIndex + 1} ^</h4>
                  <button
                    type="button"
                    className="remove-category-btn"
                    onClick={() => handleRemoveCategory(categoryIndex)}
                  >
                    <span role="img" aria-label="delete">
                      🗑️
                    </span>
                  </button>
                </div>

                <div className="category-body">
                  <div className="form-group">
                    <label>Category Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={category.name}
                      onChange={(e) => handleCategoryChange(categoryIndex, 'name', e.target.value)}
                      placeholder="Enter category name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Category Description</label>
                    <textarea
                      className="form-control"
                      value={category.description}
                      onChange={(e) =>
                        handleCategoryChange(categoryIndex, 'description', e.target.value)
                      }
                      placeholder="Enter category description"
                      rows="4"
                      required
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label>Competitors</label>
                    {category.competitors.map((competitor, competitorIndex) => (
                      <div key={competitorIndex} className="competitor-card">
                        <div className="competitor-header">
                          <h5>Competitor {competitorIndex + 1}</h5>
                          <button
                            type="button"
                            className="remove-competitor-btn"
                            onClick={() => handleRemoveCompetitor(categoryIndex, competitorIndex)}
                          >
                            🗑️
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          value={competitor.name}
                          onChange={(e) =>
                            handleCompetitorChange(categoryIndex, competitorIndex, 'name', e.target.value)
                          }
                          placeholder="Competitor name"
                          required
                        />
                        <textarea
                          className="form-control"
                          value={competitor.description}
                          onChange={(e) =>
                            handleCompetitorChange(categoryIndex, competitorIndex, 'description', e.target.value)
                          }
                          placeholder="Competitor description"
                          rows="4"
                          required
                        ></textarea>
                        <div className="form-group">
                          {isLoading ? (
                            <p>Loading image...</p>
                          ) : (
                            <>
                              <input
                                type="file"
                                className="file-input"
                                onChange={(e) => handleImageUpload(e, categoryIndex, competitorIndex)}
                                required
                              />
                              {competitor.image && (
                                <div className="uploaded-image-wrapper">
                                  <img src={competitor.image} alt="Uploaded" className="uploaded-image" />
                                  <button
                                    type="button"
                                    className="remove-image-btn"
                                    onClick={() => handleRemoveImage(categoryIndex, competitorIndex)}
                                  >
                                    Remove Image
                                  </button>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn-add-competitor"
                      onClick={() => handleAddCompetitor(categoryIndex)}
                    >
                      + Add Competitor
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Add Category Button */}
            <div className="add-category-button">
              <button type="button" className="btn-add-category" onClick={handleAddCategory}>
                + Add Category
              </button>
            </div>
          </div>

          <button type="submit" className="btn-submit">Save Draft</button>
        </form>
      )}
    </div>
  );
};

export default CompetitionsContent;
