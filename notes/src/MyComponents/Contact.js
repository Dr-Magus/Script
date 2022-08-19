import React, { useState, useRef, Fragment } from "react";
import emailjs from "@emailjs/browser";
import { Transition } from "@headlessui/react";
import Footer from "./Footer";

function Contact() {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [state, setState] = useState(initialState);
  const [sent, setSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9jt5u82",
        "template_x9cyszb",
        form.current,
        "KC8Zwn3pfttpuRDur"
      )
      .then(
        (result) => {
          console.log(result);

          if (result.status === 200) {
            setSent(true);
            setState(initialState);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e) => {
    setState((previousData) => {
      return {
        ...previousData,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="bg-slate-50 p-10 px-5 sm:px-12 text-sm ">
        <div className="sent-success">
          <Transition
            show={sent}
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opactiy-0 scale-95 translate-x-40"
            enterTo="opacity-100 scale-100 -translate-x-4"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95 translate-x-40"
            leave="ease-in duration-200"
          >
            <div className="rounded-md shadow-lg flex flex-col space-y-3 w-56 p-4 absolute z-10 right-0 bg-white border">
              <div className="">
                <span className="uppercase border-b border-b-secondary  font-bold text-base text-secondary tracking-wide">
                  Success
                </span>
                <p className="mt-2">
                  Your email sent successfully. You'll get response asap.
                </p>
              </div>
              <button
                onClick={() => setSent(!sent)}
                className="bg-secondary hover:bg-red-500 active:bg-red-600 p-4 rounded-md text-white foucs:outline-none focus:ring focus:ring-secondary focus:ring-offset-2"
              >
                Got it! Thanks
              </button>
            </div>
          </Transition>
        </div>
        <div className="text-center mb-5 uppercase tracking-wider text-base text-secondary">
          Feel Free to contact us
        </div>
        <div className="md:visible mb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d874.4300967379312!2d77.13913791897967!3d28.757764188885236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d00fc8cd058b1%3A0x4497eb8a2cb2705a!2zMjjCsDQ1JzI4LjAiTiA3N8KwMDgnMjEuOCJF!5e0!3m2!1sen!2sin!4v1660813195429!5m2!1sen!2sin"
            className="w-full b-0 h-60 md:h-96"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full">
          <form ref={form} onSubmit={sendEmail} className="md:w-96 m-auto">
            <div className="mb-3 flex flex-col">
              <label htmlFor="name" className="mb-2 capitalize">
                Name
              </label>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Name"
                value={state.name}
                onChange={handleChange}
                required
                className="border focus:outline-none focus:ring focus:ring-secondary focus:ring-offset-2 focus:ring-opacity-80 p-2 rounded-md border-secondary bg-slate-50"
              />
            </div>
            <div className="mb-5 flex flex-col">
              <label htmlFor="email" className="mb-2 capitalize">
                Email
              </label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Email"
                value={state.email}
                onChange={handleChange}
                required
                className="border focus:outline-none focus:ring focus:ring-secondary focus:ring-offset-2 focus:ring-opacity-80 p-2 rounded-md border-secondary bg-slate-50"
              />
            </div>
            <div className="mb-5">
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                value={state.message}
                onChange={handleChange}
                required
                className="border focus:outline-none focus:ring focus:ring-secondary focus:ring-offset-2 focus:ring-opacity-80 p-2 rounded-md w-full bg-slate-50 border-secondary"
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-red-500 w-full hover:bg-secondary p-3  rounded-lg text-slate-100 font-normal hover:text-white focus:ring focus:ring-secondary focus:ring-opacity-80 focus:ring-offset-2 active:bg-orange-600"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
