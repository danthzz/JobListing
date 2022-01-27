import React, { useState, useEffect } from 'react';
import data from './assets/data.json'
import JobBoardComponent from './components/JobBoardComponent';

function App() {
const [jobs, setJobs] = useState ([]);

useEffect(() =>setJobs(data), []);

  return (
    <div className="App">
      <h1 className='text-4xl'>Hello Popper</h1>
      {jobs.length === 0 ? (
          <p>Jobs are fechting...</p>
        ) : (
          jobs.map((job) => <JobBoardComponent job={job} key={job.id} />)
          )}
    </div>
  );
}

export default App;
