import React from 'react';
import contactImage from '../assets/images/contact-img.svg';
function Contact() {
  return (
    <div
      id="contact"
      className="grid-cols-2 px-5 py-20 mx-6 mt-32 border-2 border-b-0 border-r-0 border-white border-opacity-50 shadow-2xl scroll-m-10 scroll lg:grid rounded-xl lg:mx-32 lg:py-20 mt border-xl bg-opacity-10"
    >
      <div className="">
        <img src={contactImage} className="px-5" alt="" />
      </div>
      <div>
        <div className="w-9/12 max-w-lg mx-auto lg:w-full">
          <h2 className="text-5xl font-bold font-kanit">
            Contact Me
          </h2>
          <p className="my-6 text-gray-500 text-md">
            I'm always looking for new opportunities, my inbox is open. Whether
            you have a question or just want to say hi, I'll try my best to get
            back to you!
          </p>
        </div>

        <form className="w-9/12 max-w-lg mx-auto lg:w-full">
          <p className="my-5 text-xs italic text-black">
            Please fill out all fields.
          </p>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:mb-0">
              {/* <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="grid-first-name"
              >
                First Name
              </label> */}
              <input
                required={true}
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded-lg shadow-lg appearance-none bg-stone-100 focus:outline-none focus:bg-white"
                id="firstName"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
              {/* <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="grid-last-name"
              >
                Last Name
              </label> */}
              <input
                required={true}
                className="block w-full px-4 py-3 leading-tight text-gray-700 border rounded-lg shadow-lg appearance-none bg-stone-100 focus:outline-none focus:bg-white focus:border-gray-500"
                id="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3">
              {/* <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="grid-password"
              >
                E-mail
              </label> */}
              <input
                required={true}
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border border-gray-200 rounded-lg shadow-lg appearance-none bg-stone-100 focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                placeholder='Email Address'
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3">
              {/* <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="grid-password"
               
              >
                Message
              </label> */}
              <textarea
                required={true}
                className="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-700 border border-gray-200 rounded-lg shadow-lg appearance-none resize-none no-resize bg-stone-100 focus:outline-none focus:bg-white focus:border-gray-500"
                id="message"
                placeholder='Message'
              ></textarea>
              <p className="italic text-gray-600">
                Please write your message here.
              </p>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="w-32 px-5 py-3 mr-5 font-semibold text-center text-white border-2 text drop-shadow-2xl border-secondary bg-secondary hover:bg-red-600 hover:border-red-600"
                type="submit"
              >
                Send
              </button>
            </div>
            <div></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
