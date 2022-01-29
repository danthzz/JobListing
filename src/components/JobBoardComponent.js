import React from "react";

// {
//     "id": 1,
//     "company": "Photosnap",
//     "logo": "/images/photosnap.svg",
//     "new": true,
//     "featured": true,
//     "position": "Senior Frontend Developer",
//     "role": "Frontend",
//     "level": "Senior",
//     "postedAt": "1d ago",
//     "contract": "Full Time",
//     "location": "USA Only",
//     "languages": ["HTML", "CSS", "JavaScript"],
//     "tools": []
//   }

const JobBoardComponent = ({ 
    job: {
        company,
        logo,
        isNew,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools
    },
    handleTagClick,
}) => {
    const tags = [role, level];

    if (tools) {
        tags.push(...tools);
    }

    if (languages) {
        tags.push(...languages);
    }

    return (
        <div className={`flex flex-col bg-white shadow-lg my-8 mx-10 p-16 rounded 
            ${featured && 'border-l-4 border-teal-700 border-solid'} lg:flex-row lg:p-4`}>

            <div>
                <img className="-mt-16 mb-4 w-20 h-20
                 lg:h-25 lg:w-25 lg:my-0" src={logo} alt={company} />
            </div>


            <div className="flex flex-col justify-between ml-4">
                <h3 className="font-bold text-teal-500">
                    {company}
                    {isNew && (<span className="bg-teal-500 
                    text-white font-bold m-2 py-0 px-1 
                    rounded-full uppercase text-lg">New!</span>)}

                    {featured && (<span className="bg-gray-700 
                    text-white font-bold py-0 px-1.5 
                    rounded-full uppercase text-lg">Featured</span>)}
                </h3>

                <h2 className="font-bold text-xl my-2">{position}</h2>
                <p className="text-zinc-400">
                    {postedAt} · {contract} · {location}
                </p>
            </div>

            <div className=" flex flex-wrap items-center mt-4 mx-4 pt-4 
                border-t border-gray-300 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0">
                {tags
                    ? tags.map((tag) => (
                        <span onClick={() => handleTagClick(tag)} className="cursor-pointer text-teal-500 bg-teal-100 hover:bg-teal-200 font-bold mr-4 mb-2 p-2 rounded lg:mb-0"> {tag}</span>))
                    : ''}
            </div>

        </div>
    );
};

export default JobBoardComponent;