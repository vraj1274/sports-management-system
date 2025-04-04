import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Nss_Events = () => {
  // State to manage the selected event type
  const [selectedEvent, setSelectedEvent] = useState("upcoming");
  const navigate = useNavigate();
  const HandleRegistration = () => {
    navigate("/activities/nss/nss-events/nss-upcoming-registration");
  };
          const upcomingEvents = [
            {
              id: 1,
              title: "Blood Donation Camp",
              date: "2024-02-15",
              time: "9:00 AM - 4:00 PM",
              location: "College Campus",
              description:
                "Join us for a blood donation drive to help save lives. All donors will receive refreshments and a certificate of appreciation.",
            },
            {
              id: 2,
              title: "Tree Plantation Drive",
              date: "2024-03-01",
              time: "8:00 AM - 12:00 PM",
              location: "City Park",
              description:
                "Help us make our city greener by participating in our tree plantation initiative. Bring your enthusiasm and we'll provide the saplings!",
            },
            {
              id: 3,
              title: "Health Awareness Workshop",
              date: "2024-03-15",
              time: "2:00 PM - 5:00 PM",
              location: "College Auditorium",
              description:
                "Learn about important health topics from medical professionals. Interactive sessions and free health checkups available.",
            },
          ];

          const pastEvents = [
            {
              id: 4,
              title: "Cleanliness Drive",
              date: "2023-12-10",
              time: "9:00 AM - 1:00 PM",
              location: "Beach Area",
              description:
                "Successfully cleaned the beach area with participation of over 100 volunteers.",
            },
            {
              id: 5,
              title: "Digital Literacy Workshop",
              date: "2023-11-20",
              time: "10:00 AM - 4:00 PM",
              location: "Community Center",
              description:
                "Taught basic computer skills to senior citizens. Over 50 elderly people benefited from this initiative.",
            },
            {
              id: 6,
              title: "Food Distribution Drive",
              date: "2023-10-15",
              time: "11:00 AM - 3:00 PM",
              location: "Various Locations",
              description:
                "Distributed food packets to underprivileged communities across the city.",
            },
          ];

          const events =
            selectedEvent === "upcoming" ? upcomingEvents : pastEvents;

  return (
    <div className="py-10 bg-secondary px-6 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
        NSS Events
      </h1>
      <div className="flex bg-white p-2 w-full items-center justify-center rounded-xl shadow-2xl">
        {/* Upcoming Events */}
        <h2
          onClick={() => setSelectedEvent("upcoming")}
          className={`text-2xl w-1/2 font-bold text-center mx-2 cursor-pointer transition-all duration-300 ${
            selectedEvent === "upcoming"
              ? "text-blue-800 border-b-4 border-blue-800"
              : "text-gray-500 hover:text-blue-800"
          }`}
        >
          Upcoming Events
        </h2>

        {/* Past Events */}
        <h2
          onClick={() => setSelectedEvent("past")}
          className={`text-2xl w-1/2 font-bold text-center mx-2 cursor-pointer transition-all duration-300 ${
            selectedEvent === "past"
              ? "text-blue-800 border-b-4 border-blue-800"
              : "text-gray-500 hover:text-blue-800"
          }`}
        >
          Past Events
        </h2>
      </div>
          <div className="w-full max-w-4xl mt-8 space-y-6">
            {events.map((event) => (
              <div 
                key={event.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-blue-800">{event.title}</h3>
                  <div className="text-right">
                    <p className="text-gray-600">{event.date}</p>
                    <p className="text-gray-600">{event.time}</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-2">
                  <span className="font-semibold">Location:</span> {event.location}
                </p>
                <p className="text-gray-600 mt-2">{event.description}</p>
                {selectedEvent === "upcoming" && (
                  <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300" onClick={HandleRegistration}>
                    Register Now
                  </button>
                )}
              </div>
            ))}
          </div>
    </div>
  );
};

export default Nss_Events;
