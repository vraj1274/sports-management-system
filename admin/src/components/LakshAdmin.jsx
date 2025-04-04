import React from "react";

const LakshAdmin = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Laksh Events
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Event Management</h2>
            <div className="space-y-2">
              <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
                Create Event
              </button>
              <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
                Manage Events
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Participants</h2>
            <div className="space-y-2">
              <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
                View Registrations
              </button>
              <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
                Schedule Performances
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Reports</h2>
            <div className="space-y-2">
              <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
                Generate Reports
              </button>
              <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
                View Statistics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LakshAdmin;
