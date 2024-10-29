import React, { useState, useEffect } from 'react';
import SideBar from '../Components/SideBar';

const Votes = () => {
  // Placeholder data to simulate backend data for now
  const placeholderData = [
    { name: 'ABENA BOAMAH', category: 'MOST INFLUENTIAL AMBASSADOR', votes: 1443 },
    { name: 'FRANK AFFUM', category: 'MOST INFLUENTIAL AMBASSADOR', votes: 721 },
    { name: 'KING GEORGE', category: 'MOST INFLUENTIAL AMBASSADOR', votes: 616 },
    { name: 'JULIET AMA ENU', category: 'MOST INFLUENTIAL AMBASSADOR', votes: 84 },
    { name: 'MATTHEW AMANGUAH', category: 'MOST INFLUENTIAL AMBASSADOR', votes: 35 },
    { name: 'KINGSLEY QUARSHIE', category: 'MOST FASHIONABLE FEMALE', votes: 574 },
    { name: 'Kate Baiden', category: 'MOST FASHIONABLE FEMALE', votes: 289 }
  ];

  const [contestants, setContestants] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [totalVotes, setTotalVotes] = useState(0);

  useEffect(() => {
    // Simulate fetching data from backend
    const fetchVotesData = async () => {
      // Replace placeholderData with the real fetch call when backend is ready
      const data = placeholderData;

      // Sort contestants by votes in descending order
      const sortedData = data.sort((a, b) => b.votes - a.votes);

      // Calculate total votes
      const votesSum = sortedData.reduce((sum, contestant) => sum + contestant.votes, 0);

      setContestants(sortedData);
      setTotalVotes(votesSum);
    };

    fetchVotesData();
  }, []);

  const filteredContestants = contestants.filter(contestant =>
    (selectedCategory ? contestant.category === selectedCategory : true) &&
    contestant.name.toLowerCase().includes(search.toLowerCase())
  );

  const categories = Array.from(new Set(contestants.map(c => c.category)));

  return (
    <div className='w-full h-screen bg-slate-50 flex flex-col'>
      <div className='flex flex-1'>
        {/* Sidebar */}
        <div className='hidden lg:flex lg:w-[20%] lg:fixed lg:left-0 lg:top-16 bg-white shadow-md h-[80%] z-[0] mt-8'>
          <SideBar />
        </div>

        {/* Main content area */}
        <div className='flex-1 lg:ml-[20%] p-4'>
          <h2 className="text-3xl font-semibold mb-6">Event Votes</h2>
          
          <div className="text-center mb-8">
            <h3 className="text-6xl font-bold text-blue-600">{totalVotes}</h3>
            <p className="text-lg text-gray-600">Votes Across All Competitions</p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2">Voting Summary</h4>

            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <select
                  className="border p-2 rounded"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">All categories</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <input
                type="text"
                placeholder="Search"
                className="border p-2 rounded"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <table className="min-w-full bg-white rounded shadow-md">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 text-left font-semibold">Name</th>
                <th className="p-3 text-left font-semibold">Category</th>
                <th className="p-3 text-right font-semibold">Votes</th>
              </tr>
            </thead>
            <tbody>
              {filteredContestants.map((contestant, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{contestant.name}</td>
                  <td className="p-3">
                    <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
                      {contestant.category}
                    </span>
                  </td>
                  <td className="p-3 text-right">{contestant.votes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Votes;
