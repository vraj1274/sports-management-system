import React from "react";
import { Link } from "react-router-dom";
import sports from "../assets/ldrp_logo_HD.png";
import nss from '../assets/nss.png'
import ncc from '../assets/ncc.png'
import laksh from '../assets/laksh.png'

const Activity = () => {
  const activities = [
    {
      activity: "Sports",
      image: sports,
    },
    {
      activity: "Laksh",
      image: laksh,
    },
    {
      activity: "NCC",
      image: ncc,
    },
    {
      activity: "NSS",
      image: nss,
    },
  ];

  return (
    <div className="p-16">
      <div className="flex flex-wrap justify-center sm:justify-center gap-5 pt-5 w-full">
        {activities.map((item, index) => (
          <Link
            onClick={() => window.scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 m-8 hover:scale-105 transition-all  duration-500 p-3"
            key={index}
            to={`/activities/${item.activity.toLowerCase()}`}
          >
            <img
              className="w-60 h-60 object-cover rounded-lg  "
              src={item.image}
              alt={item.activity}
            />
            <p className="font-sans text-2xl mt-3 capitalize font-semibold">
              {item.activity}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Activity;
