import React from "react";
import { useParams } from "react-router-dom";

const MatchDetailsPage = () => {
  const { matchId } = useParams(); // Get the matchId from the URL

  // Dummy data for match details (replace with API call or dynamic data)
  const matchDetails = {
    1: {
      teamA: "Team A",
      teamB: "Team B",
      scoreA: 2,
      scoreB: 1,
      status: "45' | Second Half",
      venue: "Stadium A",
      date: "2023-10-25",
      highlights: "Team A is leading with a strong midfield performance.",
    },
    2: {
      teamA: "Team C",
      teamB: "Team D",
      scoreA: 0,
      scoreB: 3,
      status: "60' | Second Half",
      venue: "Stadium B",
      date: "2023-10-25",
      highlights: "Team D is dominating with a hat-trick from their striker.",
    },
    4: {
        teamA: "Team G",
        teamB: "Team H",
        scoreA: 3,
        scoreB: 2,
        status: "FT",
        venue: "Stadium C",
        date: "2023-10-25",
        highlights: "Team G and Team H played a thrilling match with a last-minute goal from Team G.",
      },
    // Add more match details as needed
  };

  const match = matchDetails[matchId];

  if (!match) {
    return <div className="text-center text-red-500">Match not found!</div>;
  }

  return (
    <div className="flex flex-col items-center h-screen p-4 m-4">
      <div className="w-full max-w-4xl bg-blue-200 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Match Details</h1>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-semibold">{match.teamA}</span>
            <span className="text-2xl font-bold">{match.scoreA}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">{match.teamB}</span>
            <span className="text-2xl font-bold">{match.scoreB}</span>
          </div>
          <div className="text-center text-blue-800 font-bold">
            {match.status}
          </div>
          <div className="mt-4">
            <p>
              <strong>Venue:</strong> {match.venue}
            </p>
            <p>
              <strong>Date:</strong> {match.date}
            </p>
            <p>
              <strong>Highlights:</strong> {match.highlights}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchDetailsPage;
