import React from "react";

const NSSAdmin = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          NSS Portal
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Volunteer Management</h2>
            <div className="space-y-2">
              <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
                Add Volunteer
              </button>
              <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
                Track Hours
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Events</h2>
            <div className="space-y-2">
              <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
                Create Event
              </button>
              <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
                Manage Events
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Certificates</h2>
            <div className="space-y-2">
              <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
                Generate Certificates
              </button>
              <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
                View Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NSSAdmin;
