import React, { useState } from "react";
import { Link } from "react-router-dom";
import football from "../assets/football.jpg";
import cricket from "../assets/cricket.jpg";
import basketball from "../assets/basketball.jpeg";
import vollyball from "../assets/vollyball.jpg";
import badminton from "../assets/badminton.jpg";
import tabletennis from "../assets/tabletennis.jpg";
import chess from "../assets/chess.jpg";
import kabbadi from "../assets/kabbadi.jpeg";
import handball from "../assets/handball.jpeg";
import tug_of_war from '../assets/tug_of_war.jpg'
import male from '../assets/male_avatar.jpg'
import female from '../assets/female_avatar.jpg'
const Sports_day = () => {
  const [gender, setGender] = useState(null);

  const games = [
    { name: "Cricket", game: "cricket", image: cricket, gender: "male" },
    { name: "Football", game: "football", image: football, gender: "both" },
    { name: "Volleyball", game: "volleyball", image: vollyball, gender: "male" },
    { name: "Basketball", game: "basketball", image: basketball, gender: "both" },
    { name: "Badminton", game: "badminton", image: badminton, gender: "both" },
    { name: "Table Tennis", game: "table_tennis", image: tabletennis, gender: "both" },
    { name: "Chess", game: "chess", image: chess, gender: "both" },
    { name: "Kabbadi", game: "kabbadi", image: kabbadi, gender: "male" },
    { name: "Throwball", game: "throw_ball", image: handball, gender: "female" },
    { name: "Tug Of War", game: "tug_of_war", image: tug_of_war, gender: "both" },
  ];

  const filteredGames = games.filter(
    (item) => gender === null || item.gender === gender || item.gender === "both"
  );

  return (
    <div className="w-full h-full flex flex-col items-center mb-10">
      {gender && (
        <div className="w-full flex gap-10 sticky justify-end bg-secondary z-10 py-4">
          <button
            onClick={() => setGender(null)}
            className="bg-gray-800 w-2/10 text-white h-10 w-18 mx-10 px-4 rounded-lg hover:bg-gray-700 transition-all duration-300"
          >
            Back
          </button>
        </div>
      )}

      {!gender && (
        <div className="h-auto w-screen justify-center items-center flex flex-col md:flex-row mt-10 gap-8 lg:gap-0 lg:h-screen group">
          <div
            className="flex flex-col h-full bg-blue-400  items-center cursor-pointer transition-all duration-300 ease-in-out 
               w-1/2 group-hover:w-2/3 hover:w-2/3  hover:bg-blue-500 lg:hover:scale-x-105 lg:hover:origin-left"
            onClick={() => setGender("male")}
          >
            <div className="w-full h-full  flex flex-col items-center justify-center">
              <img
                src={male}
                alt="Male"
                className="w-96 h-88 p-10 rounded-full object-contain drop-shadow-lg"
              />
              <p className="text-2xl font-semibold pb-2 text-center">Male</p>
            </div>
          </div>

          <div
            className="flex flex-col h-full bg-pink-400  items-center cursor-pointer transition-all duration-300 ease-in-out 
               w-1/2 group-hover:w-2/3 hover:w-2/3 hover:bg-pink-500 lg:hover:scale-x-105 lg:hover:origin-right"
            onClick={() => setGender("female")}
          >
            <div className="w-full  h-full flex flex-col items-center justify-center">
              <img
                src={female}
                alt="Female"
                className="w-96 h-88 p-10 rounded-full object-contain drop-shadow-lg"
              />
              <p className="text-2xl font-semibold pb-2 text-center">Female</p>
            </div>
          </div>
        </div>
      )}

      {gender && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-10">
          {filteredGames.map((item) => (
            <div key={item.game} className="flex flex-col items-center">
              <Link
                to={`/activities/sports/sports-day/${item.game}`}
                className="relative group w-64 h-48 rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gray-900/70 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              </Link>
              <p className="mt-4 text-2xl font-bold text-center text-gray-900 uppercase tracking-wide">
                {item.name}
              </p>
              <div className="w-16 h-1 bg-blue-700 mt-2"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sports_day;
