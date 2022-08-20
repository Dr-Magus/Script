import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { NavLink, Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const navItem = [
    { name: "Home", to: "/" },
    { name: "Notes", to: "/notes" },
    { name: "PYQs", to: "/pyqs" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <div className="bg-primary text-slate-100 py-2 px-5 sm:px-12 md:px-24 flex text-center items-center justify-between w-full h-18 md:h-[3rem]">
      <Link
        to="/"
        id="logo"
        className="text-sm md:text-base font-bold text-secondary tracking-widest"
      >
        SCRIPT
      </Link>

      <div className="inline">
        <div className="hidden md:flex space-x-8 lg:space-x-10">
          {navItem.map((item, idx) => {
            return (
              <div
                key={idx}
                className="text-white px-2 hover:text-secondary uppercase text-xs"
              >
                <NavLink to={item.to}>{item.name}</NavLink>
              </div>
            );
          })}
        </div>
        <Menu as="div" className="inline-block text-left md:hidden">
          {({ open }) => (
            <>
              <div>
                <Menu.Button className="">
                  {!open ? (
                    <MenuIcon fontSize="small" />
                  ) : (
                    <CloseIcon fontSize="small" className="text-secondary" />
                  )}
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="transform opacity-0 scale-95 -translate-x-40"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-200"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95 -translate-x-40"
              >
                <Menu.Items
                  className={
                    "absolute left-0 origin-top-left mt-2 divide-y divide-gray-900 rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 h-[80vh] min-w-[70vw]"
                  }
                >
                  {navItem.map((item, idx) => {
                    return (
                      <Menu.Item key={idx}>
                        {({ active }) => (
                          <NavLink
                            to={item.to}
                            className={`${
                              active ? "bg-primary text-secondary": "text-black"
                            } group flex w-full items-center px-5 sm:px-12 py-2 text-sm`}
                          >
                            {item.name}
                          </NavLink>
                        )}
                      </Menu.Item>
                    );
                  })}
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
