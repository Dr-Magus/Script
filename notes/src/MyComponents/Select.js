import React, { Fragment, useState, useEffect, useContext } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axiosInstance from "../axios";
import NoteContext from "../Context/NoteContext";
import { capitalize } from "../Helper";

export default function Select({linkName}) {

  const state = useContext(NoteContext);

  const [data, setData] = useState([{name: "-- select --"}]);
  const [selected, setSelected] = useState(data[0]);

  useEffect(() => {
    axiosInstance(`/${linkName}`).then((res) => {
      const temp = [];
      res.data.map((i) => {
        return temp.push({ name: i[`${linkName}`] });
      });
      // console.log(temp);
      setData(temp);
    });
  }, [linkName]);



  useEffect(() => {

    state.update(linkName, selected.name);

  }, [selected, linkName])

  return (
    <div className="relative p-4">
      <span>{capitalize(linkName)}</span>
      <div className="w-full bg-slate-900 border border-slate-900 leading-none "></div>
      <div className="mt-3 w-full">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate text-sm">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ArrowDropDownIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                {data.map((d, idx) => (
                  <Listbox.Option
                    key={idx}
                    className={({ active }) =>
                      `relative cursor-default text-sm select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={d}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {d.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
}
