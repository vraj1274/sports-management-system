import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SportsAdmin = () => {
  const navigate = useNavigate();
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true);
  const [loading, setLoading] = useState(false); // Loading state for button
  const [isLoading, setIsLoading] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState({
    isOpen: false,
    lastUpdated: null
  });

  const handleSportsDay = () => {
    navigate("/sports/sports-day");
  };

  useEffect(() => {
    fetchRegistrationStatus();
  }, []);

const fetchRegistrationStatus = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/sports/registration-status"
    );
    setRegistrationStatus(response.data);
  } catch (error) {
    console.error("Error fetching registration status:", error);
    toast.error("Failed to fetch registration status");
  }
};

const toggleRegistration = async () => {
  try {
    setIsLoading(true);
    const response = await axios.post(
      "http://127.0.0.1:5000/api/sports/toggle-registration/",
      {}
    );

    if (response.status === 200) {
      setRegistrationStatus(response.data);
      toast.success(
        `Registration ${
          response.data.isOpen ? "opened" : "closed"
        } successfully`
      );
    } else {
      toast.error("Failed to toggle registration status");
    }
  } catch (error) {
    console.error("Error toggling registration:", error);
    toast.error(
      error.response?.data?.error || "Failed to update registration status"
    );
  } finally {
    setIsLoading(false);
  }
};


  const handleButtonClick = async (action) => {
    try {
      setIsLoading(true);
      // Add your API calls or actions here
      console.log(`Handling ${action}`);
      toast.success(`${action} successful!`);
    } catch (error) {
      console.error(error);
      toast.error(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-200 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">
          Sports Cell
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">
              Sports Day Registrations
            </h2>
            <div className="space-y-3">
              <button
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                onClick={handleSportsDay}
              >
                View Registrations
              </button>
              <div className="space-y-3">
                {registrationStatus.isOpen ? (
                  <button
                    className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                    onClick={toggleRegistration}
                    disabled={isLoading}
                  >
                    {isLoading ? "Processing..." : "Close Registration"}
                  </button>
                ) : (
                  <button
                    className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                    onClick={toggleRegistration}
                    disabled={isLoading}
                  >
                    {isLoading ? "Processing..." : "Open Registration"}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">
              Team Management
            </h2>
            <div className="space-y-2">
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Create Team
              </button>
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Manage Teams
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsAdmin;
