import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import laksh from '../assets/laksh.png';  


const Laksh = () => {
  const navigate = useNavigate();

  const laksh_season = [
    {
      season : 1,
      year : 2019,
      img : laksh,
    },
    {
      season : 2,
      year : 2020,
      img : laksh,
    },
    {
      season : 3,
      year : 2021,
      img : laksh,
    },  
    {
      season : 4, 
      year : 2022,
      img : laksh,
    },
    {
      season : 5,
      year : 2023,
      img : laksh,
    },
    {
      season : 6,
      year : 2024,
      img : laksh,
    },
  ]
  // Function to toggle the registration form visibility
  const toggleRegistrationForm = () => {
    setIsRegistrationOpen(!isRegistrationOpen);
  };

  const registration = () => {
    navigate(`/activities/laksh/registration`);
  };

  return (
    <div className="py-10 bg-secondary px-6">
      <div className=" mx-auto bg-secondary p-6 ">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Laksh Event at KSV LDPR ITR
        </h1>

        {/* Shortened Event Description */}
        <p className="text-lg text-gray-700 mb-6">
          Laksh is an annual event organized by KSV LDPR ITR that offers
          workshops, competitions, and cultural activities, aiming to enhance
          students' skills and connect them with professionals.
        </p>

        {/* Registration Button */}
        <div className="flex justify-center">
          <button
            onClick={registration}
            className="bg-blue-700 text-white py-3 px-5 rounded-lg hover:bg-blue-600"
          >
            Register for Laksh Event
          </button>
        </div>
        {/* Event Photos */}
        <p className="font-bold text-3xl mt-10 py-2 text-center border border-gray-900 rounded bg-blue-800 text-white">
          Past Seasons
        </p>
        <div className="flex flex-wrap justify-center gap-5 pt-5 w-full">
          {laksh_season.reverse().map((item, index) => (
            <Link
              className="flex flex-col font-bold items-center text-xs cursor-pointer flex-shrink-0 m-8 border bg-white border-gray-400 rounded duration-500 hover:shadow-2xl border-b-2 hover:border-gray-500 hover:scale-105 "
              onClick={() => scrollTo(0, 0)}
              key={index}
              to={`/activities/laksh/season/${item.season}`}
            >
              <img
                className="w-60 h-60 object-cover"
                src={item.img}
                alt={`Laksh Season ${item.season}`}
              />
              <hr className="w-full border-gray-900" />
              <p className="font-sans text-2xl">Season {item.season}</p>
              <p className="font-sans text-2xl pt-1">{item.year}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Laksh;