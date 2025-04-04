import React from "react";
import { Link } from "react-router-dom";
import sports from "../assets/sports.png";

const PopularActivity = () => {
  const activities = [
    {
      activity: "sports",
      image: sports,
    },
  ];

  return (
    <div className="flex justify-center items-center w-full h-full mt-20">
      <div className="gap-10">
        {activities.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center justify-center text-xs cursor-pointer flex-shrink-0 hover:-translate-y-2 transition-all duration-500"
            key={index}
            to={`/activities/${item.activity}`}
          >
            <img
              className="w-44 h-44 object-cover mb-2"
              src={item.image}
              alt={item.activity}
            />
            <p className="text-xl font-bol">{item.activity}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularActivity;
