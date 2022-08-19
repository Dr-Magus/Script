import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const sml = [
    { name: "Facebook", to: "#" },
    { name: "Telegram", to: "#" },
    { name: "Discord", to: "#" },
    { name: "Twitter", to: "#" },
    { name: "Instagram", to: "#" },
  ];

  const more = [
    { name: "About", to: "#" },
    { name: "Contact", to: "/contact" },
    { name: "Notes", to: "/notes" },
    { name: "Reference Material", to: "#" },
  ];

    const communities = [
      { name: "Facebook", to: "#" },
      { name: "Telegram", to: "#" },
      { name: "Discord", to: "#" },
      { name: "Reddit", to: "#" },
    ];

  return (
    <div className="h-min text-xs py-2 px-4 w-full bg-primary z-30 sm:px-12 md:px-24">
      <div className="flex space-x-4 sm:space-x-10 mt-4  md:space-x-16 text-slate-200">
        <div className="mb-3">
          <ul className="space-y-1 md:space-y-3 sm:space-y-2">
            <span className="text-[13px] underline text-secondary">
              Social Media
            </span>
            {sml.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="hover:text-secondary cursor-pointer hover:translate-x-1 duration-200 ease-out"
                >
                  <Link to={item.to}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mb-3">
          <ul className="space-y-1 md:space-y-3 sm:space-y-2">
            <span className="text-[13px] underline text-secondary">
              Community
            </span>
            {communities.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="hover:text-secondary cursor-pointer hover:translate-x-1 duration-200 ease-out"
                >
                  <Link to={item.to}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mb-3">
          <ul className="space-y-1 md:space-y-3 sm:space-y-2">
            <span className="text-secondary underline text-[13px] ">More</span>
            {more.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="hover:text-secondary cursor-pointer hover:translate-x-1 duration-200 ease-out"
                >
                  <Link to={item.to}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="text-center items-center text-white">
        <div className="w-full border border-slate-100 mt-2 mb-2 "></div>
        <div className="p-1 mt-2">Copyright © 2022, <span className="uppercase text-secondary tracking-wider">Script</span></div>
      </div>
    </div>
  );
}

export default Footer;
