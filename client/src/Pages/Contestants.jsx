import React, { useState } from 'react';
import SideBar from '../Components/SideBar';
import { CSVLink } from 'react-csv';

const Contestants = () => {
  const [contestants, setContestants] = useState([
    { name: 'Stephanie Panyin Ghanney', category: 'ACTIVE FRESHER OF THE YEAR', competition: 'GHAMSU DINNER AND AWARDS NIGHT', code: 'GHAM417' },
    { name: 'PRINCESS AFFUL', category: 'FACE OF GHAMSU -FEMALE', competition: 'GHAMSU DINNER AND AWARDS NIGHT', code: 'GHAM555' },
    { name: 'Akosua Frimpomaa Anane', category: 'ACTIVE FRESHER OF THE YEAR', competition: 'GHAMSU DINNER AND AWARDS NIGHT', code: 'GHAM12' },
    { name: 'Nora Antwi Boamah', category: 'FEMALE FRESHER OF THE YEAR', competition: 'GHAMSU DINNER AND AWARDS NIGHT', code: 'GHAM51' },
    { name: 'BEATRIX', category: 'FACE OF GHAMSU -FEMALE', competition: 'GHAMSU DINNER AND AWARDS NIGHT', code: 'GHAM81' },
    { name: 'ABENA BOAMAH', category: 'MOST INFLUENTIAL AMBASSADOR', competition: 'GHAMSU DINNER AND AWARDS NIGHT', code: 'GHAM631' },
    { name: 'ESTHER AMPIAH', category: 'FACE OF GHAMSU -FEMALE', competition: 'GHAMSU DINNER AND AWARDS NIGHT', code: 'GHAM589' },
    { name: 'ALI DORRIS', category: 'FEMALE FRESHER OF THE YEAR', competition: 'GHAMSU DINNER AND AWARDS NIGHT', code: 'GHAM829' }
  ]);

  const [search, setSearch] = useState('');

  const filteredContestants = contestants.filter(contestant =>
    contestant.name.toLowerCase().includes(search.toLowerCase()) ||
    contestant.competition.toLowerCase().includes(search.toLowerCase())
  );

  const csvData = [
    ['Name', 'Category', 'Competition', 'Code'],
    ...contestants.map(contestant => [contestant.name, contestant.category, contestant.competition, contestant.code])
  ];

  return (
    <div className='w-full h-screen bg-slate-50 flex flex-col'>
      <div className='flex flex-1'>
        {/* Sidebar is fixed on lg screens and hidden on smaller screens */}
        <div className='hidden lg:flex lg:w-[20%] lg:fixed lg:left-0 lg:top-16 bg-white shadow-md h-[80%] z-[0] mt-8'>
          <SideBar />
        </div>

        {/* Main content area */}
        <div className='flex-1 lg:ml-[20%] p-4'>
          <h2 className="text-2xl font-semibold mb-4">Competitors</h2>

          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
              <select className="border p-2 rounded" onChange={(e) => setSearch(e.target.value)} defaultValue="">
                <option value="">All Competitions</option>
                {Array.from(new Set(contestants.map(c => c.competition))).map((competition, index) => (
                  <option key={index} value={competition}>{competition}</option>
                ))}
              </select>
              
              <select className="border p-2 rounded" onChange={(e) => setSearch(e.target.value)} defaultValue="">
                <option value="">All Categories</option>
                {Array.from(new Set(contestants.map(c => c.category))).map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="flex space-x-4 items-center">
              <CSVLink data={csvData} filename={"contestants-list.csv"} className="bg-blue-600 text-white px-4 py-2 rounded">
                Download List
              </CSVLink>
              <input
                type="text"
                placeholder="Search competitors"
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
                <th className="p-3 text-left font-semibold">Competition</th>
                <th className="p-3 text-left font-semibold">Code</th>
                <th className="p-3 text-left font-semibold">Copy</th>
              </tr>
            </thead>
            <tbody>
              {filteredContestants.map((contestant, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{contestant.name}</td>
                  <td className="p-3">{contestant.category}</td>
                  <td className="p-3">{contestant.competition}</td>
                  <td className="p-3">{contestant.code}</td>
                  <td className="p-3">
                    <button
                      onClick={() => navigator.clipboard.writeText(contestant.code)}
                      className="text-blue-600 hover:text-blue-800"
                      title="Copy Code"
                    >
                      🔗
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contestants;
