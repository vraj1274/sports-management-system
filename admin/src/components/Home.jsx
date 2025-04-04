import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Sports Management",
      description: "View and manage sports registrations, teams, and events",
      icon: "🏅", 
      path: "/sports",
      color: "bg-blue-500",
      features: [
        "Add/remove sports and games",
        "Manage team registrations",
        "Control registration status",
        "View participant details",
        "Generate reports"
      ]
    },
    {
      title: "NSS Portal",
      description: "Manage NSS volunteers, events and activities", 
      icon: "🤝",
      path: "/nss",
      color: "bg-green-500",
      features: [
        "Create NSS events",
        "Track volunteer hours",
        "Manage event registrations",
        "Generate certificates",
        "View activity reports"
      ]
    },
    {
      title: "NCC Dashboard",
      description: "Track NCC cadets, training programs and camps",
      icon: "⚔️",
      path: "/ncc",
      color: "bg-red-500", 
      features: [
        "Manage cadet profiles",
        "Schedule training camps",
        "Track attendance",
        "Generate performance reports",
        "Control registrations"
      ]
    },
    {
      title: "Laksh Events",
      description: "Coordinate cultural events and registrations",
      icon: "🎭",
      path: "/laksh", 
      color: "bg-purple-500",
      features: [
        "Create cultural events",
        "Manage participants",
        "Schedule performances",
        "Track registrations",
        "Generate event reports"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-blue-200 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.color} rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1`}
              onClick={() => navigate(card.path)}
            >
              <div className="p-6 text-white">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
                <p className="text-white/80">{card.description}</p>
                
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm opacity-75">Click to manage</span>
                  <span className="text-2xl">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-600">Total Students</h3>
              <p className="text-3xl font-bold text-gray-800">2,547</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-600">Active Events</h3>
              <p className="text-3xl font-bold text-gray-800">12</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-600">Registrations Today</h3>
              <p className="text-3xl font-bold text-gray-800">156</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-600">Pending Approvals</h3>
              <p className="text-3xl font-bold text-gray-800">23</p>
            </div>
          </div>
        </div> */}

        {/* <div className="mt-8 text-center text-gray-600">
          <p>Need help? Contact system administrator</p>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
