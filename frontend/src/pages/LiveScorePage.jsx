import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LiveScorePage = () => {
  const [selectedEvent, setSelectedEvent] = useState("current");
  const navigate = useNavigate(); // Hook for navigation

  // Dummy data for matches
  const matches = {
    current: [
      {
        game: "Football",
        id: 1,
        teamA: "Team A",
        teamB: "Team B",
        scoreA: 2,
        scoreB: 1,
        status: "Ongoing",
      },
        {
        game: "Cricket",
        id: 2,
        teamA: "Team C",
        teamB: "Team D",
        scoreA: 0,
        scoreB: 3,
        status: "Ongoing",
      },
    ],
    recent: [
        {
        game: "Football",
        id: 3,
        teamA: "Team E",
        teamB: "Team F",
        scoreA: 1,
        scoreB: 1,
        status: "Finished",
      },
      {
        game: "Cricket",
        id: 4,
        teamA: "Team G",
        teamB: "Team H",
        scoreA: 3,
        scoreB: 2,
        status: "Finished",
      },
    ],
    upcoming: [
      {
        game: "Football",
        id: 5,
        teamA: "Team I",
        teamB: "Team J",
        scoreA: 0,
        scoreB: 0,
        status: "10:00 AM | Tomorrow",
      },
      {
        game: "Cricket",
        id: 6,
        teamA: "Team K",
        teamB: "Team L",
        scoreA: 0,
        scoreB: 0,
        status: "2:00 PM | Tomorrow",
      },
    ],
  };

  // Get the matches based on the selected event
  const displayedMatches = matches[selectedEvent];

  // Handle match card click
  const handleMatchClick = (matchId) => {
    // Redirect to the match details page
    navigate(`/live-score/match/${matchId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full rounded-lg p-3 text-blue-800 text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold">Live Scores</h1>
        <div className="py-10 bg-secondary px-6 min-h-screen flex flex-col items-center">
          {/* Event Selector */}
          <div className="flex flex-col md:flex-row gap-2 bg-white p-4 w-full items-center justify-center rounded-xl shadow-2xl">
            {/* Recent Events */}
            <h2
              onClick={() => setSelectedEvent("recent")}
              className={`text-2xl w-1/2 font-bold  border-blue-800 text-center mx-2 cursor-pointer transition-all duration-300 ${
                selectedEvent === "recent"
                  ? "text-blue-800 border-b-4 border-blue-800"
                  : "text-gray-500 hover:text-blue-800"
              }`}
            >
              Recent
            </h2>
            {/* Current Events */}
            <h2
              onClick={() => setSelectedEvent("current")}
              className={`text-2xl w-1/2 font-bold text-center mx-2 cursor-pointer transition-all duration-300 ${
                selectedEvent === "current"
                  ? "text-blue-800 border-b-4 border-blue-800"
                  : "text-gray-500 hover:text-blue-800"
              }`}
            >
              Current
            </h2>
            {/* Upcoming Events */}
            <h2
              onClick={() => setSelectedEvent("upcoming")}
              className={`text-2xl w-1/2 font-bold text-center mx-2 cursor-pointer transition-all duration-300 ${
                selectedEvent === "upcoming"
                  ? "text-blue-800 border-b-4 border-blue-800"
                  : "text-gray-500 hover:text-blue-800"
              }`}
            >
              Upcoming
            </h2>
          </div>

          {/* Display Matches */}
          <div className="w-full mt-8">
            {displayedMatches.map((match) => (
              <div
                key={match.id}
                onClick={() => handleMatchClick(match.id)} // Redirect on click
                className="bg-blue-800 bg-opacity-10 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 mb-6 cursor-pointer"
              >
                <div className="flex items-center justify-center text-xl font-bold text-underline">
                  <span className="font-semibold">{match.game}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <span className="font-semibold">{match.teamA}</span>
                  </div>
                  <span className="text-2xl font-bold">{match.scoreA}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="font-semibold">{match.teamB}</span>
                  </div>
                  <span className="text-2xl font-bold">{match.scoreB}</span>
                </div>
                <div className="mt-4 text-md text-blue-800 font-bold text-center">
                  {match.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveScorePage;
