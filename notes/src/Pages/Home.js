import React from "react";


function Body() {
  const content = [
    "Notes",
    "Assignments",
    "Previous year question papers",
    "School/College Practical",
    "Minor college project",
    "Reference material",
  ];

  return (
    <div className="mb-5">
      <img
        src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="Book"
        className="h-44 sm:h-60 md:h-80 lg:h-[38rem] w-full object-cover"
      />
      <div className="px-5 mt-4 sm:px-12 text-sm md:px-24">
        <div>
          <div className="font-medium leading-relaxed">
            <span className="md:text-base font-bold">What you'll get</span>
            <div className="w-full mb-4 border border-slate-900"></div>
            <ul className="indent-5 list-disc list-inside">
              {content.map((item, idx) => {
                return <li key={idx} className="leading-6">{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
