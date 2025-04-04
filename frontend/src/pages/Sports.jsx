import React from "react";
import SportsDaySection from "./SportsDaySection";
import InterCollege from "./InterCollege";
import LiveScorePage from "./LiveScorePage";

const Sports = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
          Sports Hub
        </h1>
        <SportsDaySection />
        <InterCollege />
        <LiveScorePage />
      </div>
    </div>
  );
};

export default Sports;
