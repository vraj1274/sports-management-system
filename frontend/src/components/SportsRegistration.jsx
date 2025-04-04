import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const SportsRegistration = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkRegistrationStatus();
  }, []);

  const checkRegistrationStatus = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/sports/registration-status');
      setIsRegistrationOpen(response.data.isOpen);
    } catch (error) {
      console.error('Error checking registration status:', error);
      toast.error('Unable to check registration status');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isRegistrationOpen) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Registration Closed</h2>
          <p className="text-gray-600">
            Sports registration is currently closed. Please check back later.
          </p>
        </div>
      </div>
    );
  }

  return (
    // Your existing registration form JSX
    <div>
      {/* Registration form content */}
    </div>
  );
};

export default SportsRegistration; 