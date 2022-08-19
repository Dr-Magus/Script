import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../axios";
import NoteContext from "../Context/NoteContext";
import Select from "./Select";

function Material({ heading, mtype }) {
  const state = useContext(NoteContext);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    // console.log(state.state);
    axiosInstance
      .get(`/link?c=${state.state.course}&s=${state.state.subject}&t=${mtype}`)
      .then((res) => {
        // console.log(res.data);
        setInfo(res.data);
      });
  }, [state.state, mtype]);

  const display = () => {
    /* This method will display the material available for opted stream */

    let list = [];

    for (let ele of info) {
      list.push(
        <div
          key={ele.id}
          className="p-4 mb-2 rounded-md md:p-5 lg:p-6 hover:-translate-x-2 duration-300 shadow-sm hover:shadow-md text-white bg-primary text-xs md:text-sm focus:outline-blue-100 focus:outline-2 hover:cursor-pointer hover:text-secondary relative focus:outline-none focus:ring focus:ring-offset-secondary focus:ring-secondary focus:ring-opacity-50"
        >
          <a
            href={ele.link}
            className="w-full absolute top-50% -translate-y-1/2"
          >
            {ele.title}
          </a>
        </div>
      );
    }

    return list;
  };

  return (
    <div className="p-4 relative sm:px-12 md:px-24 text-sm">
      <span className="md:text-md lg:text-lg">{heading}</span>
      <div className="w-full border border-slate-900"></div>
      <div className="p-2 space-y-1">
        <div>
          <Select linkName="course" />
        </div>
        <div>
          <Select linkName="subject" />
        </div>
      </div>

      <div className="border rounded-md mt-10 p-4">
        <div className="mb-3 md:text-base lg:text-lg ">
          Available Materials
          <div className="border border-black"></div>
        </div>
        {info.length !== 0 ? (
          display()
        ) : (
          <div className="text-center">No Material Available </div>
        )}
      </div>
    </div>
  );
}

export default Material;
