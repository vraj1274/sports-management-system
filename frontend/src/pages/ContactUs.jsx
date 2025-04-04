import React from 'react'

const ContactUs = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-2xl m-20   ">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
          Contact Us
        </h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-blue-800 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name here"
              className="w-full border border-blue-800 px-4 py-2 rounded-lg bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-blue-800 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email here"
              className="w-full border border-blue-800 px-4 py-2 rounded-lg bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-blue-800 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Enter your message here"
              cols={50}
              className="w-full border border-blue-800 px-4 py-2 rounded-lg bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 justify-center items-center text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs