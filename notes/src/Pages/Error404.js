import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  document.title = "Script - 404";
  return (
    <div className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-44 md:-translate-y-60 border p-5 rounded-br-full rounded-t-2xl bg-blue-200 flex flex-col md:px-12 min-w-[11rem]">
      <h1 className="text-blue-500 text-4xl md:text-9xl">404</h1>
      <h1 className="mb-4 md:text-lg md:mb-12 leading-6">
        We are sorry, Page not found!
      </h1>
      <div>
        <Link
          to="/"
          className="py-2 w-min px-4 text-sm text-white bg-blue-400 hover:bg-blue-500  focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-75 focus:ring-offset-2 text-whitep rounded-xl shadow-md md:text-lg md:px-8 md:py-2 md:rounded-3xl"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default Error404;
