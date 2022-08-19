import React from "react";
import EastIcon from "@mui/icons-material/East";

function Path(props) {
  return (
    <div className="px-2 overflow-hidden py-1 mb-2 flex text-center justify-end rounded-md text-slate-100 hover:-translate-x-1 transition-all font-light delay-50 ease-in-out hover:shadow-md hover:text-secondary cursor-pointer relative md:w-[49%] lg:w-[32%] group bg-primary sm:py-2 md:py-3 lg:py-4">
      <a href={`${props.path.toLowerCase()}`} className=" z-10 w-full absolute text-left px-5 h-full text-sm">
        {props.name}
      </a>
      <span className="">
        <EastIcon className="text-slate-100 group-hover:text-secondary" fontSize="small" />
      </span>
    </div>
  );
}

export default Path;
