import React from "react";

const NCCAdmin = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          NCC Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Cadet Management</h2>
            <div className="space-y-2">
              <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
                Add Cadet
              </button>
              <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
                View Cadets
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Training Programs</h2>
            <div className="space-y-2">
              <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
                Schedule Camp
              </button>
              <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
                Track Attendance
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Reports</h2>
            <div className="space-y-2">
              <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
                Performance Reports
              </button>
              <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
                View Statistics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NCCAdmin;
