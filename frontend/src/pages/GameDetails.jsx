import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import football from "../assets/football.jpg";
import cricket from "../assets/cricket.jpg";
import basketball from "../assets/basketball.jpeg";
import vollyball from "../assets/vollyball.jpg";
import badminton from "../assets/badminton.jpg";
import tabletennis from '../assets/tabletennis.jpg';
import chess from '../assets/chess.jpg';
import kabbadi from '../assets/kabbadi.jpeg';
import handball from '../assets/handball.jpeg';
import tugofwar from '../assets/tug_of_war.jpg';

const GameDetails = () => {
  const { game } = useParams();
  const navigate = useNavigate();

  const games = [
    { game: "cricket", image: cricket },
    { game: "football", image: football },
    { game: "volleyball", image: vollyball },
    { game: "basketball", image: basketball },
    { game: "badminton", image: badminton },
    { game: "table_tennis", image: tabletennis },
    { game: "chess", image: chess },
    { game: "kabbadi", image: kabbadi },
    { game: "throw_ball", image: handball },
    { game: "tug_of_war", image: tugofwar }
  ];

  const selectedGame = games.find((item) => item.game === game);

  const register = () => {
    navigate(`/activities/sports/${game}/register`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      {selectedGame ? (
        <>
          {/* Animated Title */}
          <motion.h1
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {selectedGame.game.charAt(0).toUpperCase() + selectedGame.game.slice(1)} Tournament
          </motion.h1>

          {/* Animated Game Image */}
          <motion.div
            className="relative w-80 h-80 rounded-lg overflow-hidden shadow-xl border-4 border-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={selectedGame.image}
              alt={selectedGame.game}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Animated Register Button */}
          <motion.button
            className="mt-8 px-8 py-3 rounded-full bg-blue-500 text-white text-lg font-semibold shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={register}
          >
            Register Now
          </motion.button>
        </>
      ) : (
        <motion.div
          className="text-center text-red-500 text-3xl font-bold mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Registration is closed for {game}
        </motion.div>
      )}
    </div>
  );
};

export default GameDetails;
