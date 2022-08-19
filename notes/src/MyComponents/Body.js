import React from "react";
import Footer from "./Footer";
import Path from "./Path";

function Body() {
  const randoms = [
    "Netflix",
    "Amazon Prime",
    "Disney + Hotstar",
    "Hulu",
    "Apple Tv",
  ];

  return (
    <div className="h-screen flex flex-col">
      <img
        src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="Book"
        className="h-44 sm:h-60 md:h-80 lg:h-[38rem] w-full object-cover"
      />
      <div className=" flex-none px-5 mt-4 sm:px-12 text-sm md:px-24">
        <div className="font-medium leading-relaxed">
          <span className="uppercase md:text-base font-bold">Entertainment</span>
          <div className="w-full mb-4 border border-slate-900"></div>
        </div>
        <div className="flex flex-col md:flex-wrap md:flex-row md:gap-x-[2%]">
          {randoms.map((random, idx) => {
            return <Path key={idx} name={random} path="#" />;
          })}
        </div>
      </div>
      <div className="mb-5"></div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Body;
