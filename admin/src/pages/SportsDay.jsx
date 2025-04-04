import React, { useState, useEffect } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

const SportsDay = () => {
  const [registrations, setRegistrations] = useState([]);
  const [departments, setDepartments] = useState([
    "BE(Computer Engineering)",
    "BE(Information Technology)", 
    "BE(Civil Engineering)",
    "BE(Electrical Engineering)",
    "BE(Mechanical Engineering)",
    "BE(Automobile Engineering)",
    "BE(Electrical Communication)",
    "ME(Computer Engineering)",
    "ME(Information Technology)",
    "ME(Civil Engineering)", 
    "ME(Electrical Engineering)",
    "ME(Mechanical Engineering)",
    "ME(Automobile Engineering)",
    "ME(Electrical Communication)",
    "MCA",
    "MBA",
  ]);
  const [games, setGames] = useState([
    { id: 1, name: "football" },
    { id: 2, name: "cricket" },
    { id: 3, name: "volleyball" },
    { id: 4, name: "basketball" },
    { id: 5, name: "badminton" },
    { id: 6, name: "throw_ball"},
    { id: 6, name: "table_tennis" },
    { id: 7, name: "tug_of_war" },
    { id: 8, name: "chess" },
    { id: 9, name: "kabbadi" },
  ]);
  const [filters, setFilters] = useState({
    department: "",
    game_name: "",
    gender: "",
  });

  const fetchRegistrations = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:5000/api/get-filtered-registrations/",
        { params: filters }
      );
      setRegistrations(response.data);
    } catch (error) {
      console.error("Error fetching registrations:", error);
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, [filters]);

  const downloadExcel = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:5000/api/download-excel/",
        {
          params: filters,
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "registrations.xlsx");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading Excel:", error);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const formatGameName = (gameName) => {
    return gameName
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="p-4 md:p-8 font-sans h-screen bg-blue-200">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-600 text-center mb-6">
        Sports Day (TRIUNFAOR)
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <select
          name="department"
          value={filters.department}
          onChange={handleFilterChange}
          className="w-full p-2 border-2 border-blue-400 bg-white  rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Departments</option>
          {departments.map((dept, index) => (
            <option key={index} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        <select
          name="game_name"
          value={filters.game_name}
          onChange={handleFilterChange}
          className="w-full p-2 border-2 border-blue-400 bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Games</option>
          {games.map((game, index) => (
            <option key={index} value={game.name}>
              {formatGameName(game.name)}
            </option>
          ))}
        </select>

        <select
          name="gender"
          value={filters.gender}
          onChange={handleFilterChange}
          className="w-full p-2 border-2 border-blue-400 bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <div className="text-center mb-6">
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Reset
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse shadow-lg bg-white">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Email</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Mobile No</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Enrollment</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Age</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Gender</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Department</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Semester</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Game</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Registration Date</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((reg, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="p-3 text-sm text-gray-700 border">{reg.name}</td>
                <td className="p-3 text-sm text-gray-700 border">{reg.email}</td>
                <td className="p-3 text-sm text-gray-700 border">{reg.mobile}</td>
                <td className="p-3 text-sm text-gray-700 border">{reg.enrollment}</td>
                <td className="p-3 text-sm text-gray-700 border">{reg.age}</td>
                <td className="p-3 text-sm text-gray-700 border">{reg.gender}</td>
                <td className="p-3 text-sm text-gray-700 border">{reg.department}</td>
                <td className="p-3 text-sm text-gray-700 border">{reg.semester}</td>
                <td className="p-3 text-sm text-gray-700 border">{formatGameName(reg.game__name)}</td>
                <td className="p-3 text-sm text-gray-700 border">
                  {new Date(reg.registration_date).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={downloadExcel}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Download Excel
        </button>
      </div>
    </div>
  );
};

export default SportsDay;
