import React, { useState, useEffect } from 'react';
import data from './assets/data.json'
import JobBoardComponent from './components/JobBoardComponent';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setJobs(data), []);

  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }

    if (languages) {
      tags.push(...languages);
    }

    return filters.every(filter => tags.includes(filter));
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  }

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter(f => f !== passedFilter));
  }

  const clearFilters = () => {
    setFilters([]);
  }

  const filteredJobs = jobs.filter(filterFunc);

  return (
    <>
      <header className='bg-teal-600 mb-12'>
        <img className="w-full" src="/images/bg-header-desktop.svg" alt="bg-img" />
      </header>
      <div className="container m-auto">

        {filters.length > 0 && (
          <div className="flex bg-white shadow-lg mb-16 -my-20 mx-10 p-8 rounded z-10 relative">
            {filters.map((filter) => (
              <span
                className="mr-4 mb-2 rounded font-bold lg:mb-0">
                <span
                  className="text-teal-500 bg-teal-100 p-2">
                  {filter}</span>

                <span className="cursor-pointer bg-teal-500 
                  text-teal-100 p-2 rounded hover:bg-teal-900" onClick={() => handleFilterClick(filter)}>×
                </span>
              </span>
            ))}
            <button onClick={clearFilters}
              className="font-bold text-gray-700 bg-gray-200 
          rounded h-10 w-16 hover:bg-gray-300 ml-auto">Clear
            </button>
          </div>
        )}
        {jobs.length === 0 ? (
          <p>Wait a second...</p>
        ) : (
          filteredJobs.map((job) => (
            <JobBoardComponent
              job={job}
              key={job.id}
              handleTagClick={handleTagClick}
            />
          ))
        )}
      </div>
    </>
  );
}

export default App;
