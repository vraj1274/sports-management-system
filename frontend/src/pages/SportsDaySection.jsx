import React from "react";

const SportsDaySection = () => {
  return (
    <section className="mb-12 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-purple-700 mb-4">
        Annual Sports Day
      </h2>
      <p className="text-gray-600 mb-4">
        Join us for the most exciting day of the year! Our Annual Sports Day is
        scheduled for <span className="font-bold">December 15, 2023</span>.
        Don't miss the fun, games, and prizes!
      </p>
      <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
        Learn More
      </button>
    </section>
  );
};

export default SportsDaySection;
