import React from "react";

const JobBoardComponent = ({job}) => (
    <div className="flex">
        <div> <img src={job.logo} alt={job.company} /></div>
        <div></div>
        <div></div>
        
    </div>
);

export default JobBoardComponent;