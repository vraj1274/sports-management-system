import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FirstRegistration = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    mobile: "",
    email: "",
    department: "",
    semester: "",
    enrollmentNo: "",
  });

  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result); // Set the uploaded image as a data URL
      };
      reader.readAsDataURL(file);
    }
  };
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleHomeRedirect = (e) => {
    e.preventDefault(); // Prevent form submission

    // Check for missing fields
    const missingFields = Object.entries(profile).filter(
      ([key, value]) => value.trim() === "" || value === "none"
    );

    if (missingFields.length > 0) {
      setError(alert("Please fill all fields before proceeding."));
      return;
    }

    // Clear the error and navigate to the homepage
    setError("");
    navigate("/", { replace: true });
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  return (
    <div>
      <section className="py-10 bg-gradient-to-r bg-secondary">
        <div className="container mx-auto max-w-4xl shadow-2xl bg-white p-6 rounded-xl">
          <form method="get">


            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-sm font-medium text-center mb-4">
                {error}
              </div>
            )}

            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-lg border-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-lg border-2"
                />
              </div>
            </div>

            {/* Additional Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Mobile No
                </label>
                <input
                  type="text"
                  name="mobile"
                  value={profile.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-lg border-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-lg border-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  value={profile.gender}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border-2"
                  required
                >
                  <option value="none">Select your gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={profile.dob}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border-2"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Department
                </label>
                <select
                  name="department"
                  value={profile.department}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border-2"
                  required
                >
                  <option value="none">Select your department</option>
                  <option value="computer">Computer Engineering</option>
                  <option value="information">Information Technology</option>
                  <option value="mechanical">Mechanical Engineering</option>
                  <option value="civil">Civil Engineering</option>
                  <option value="electrical">Electrical Engineering</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Semester
                </label>
                <select
                  name="semester"
                  value={profile.semester}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border-2"
                  required
                >
                  <option value="none">Select your semester</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Enrollment No
                </label>
                <input
                  type="text"
                  name="enrollmentNo"
                  value={profile.enrollmentNo}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border-2"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              onClick={handleHomeRedirect}
              className="mt-6 w-full bg-blue-700 text-white p-3 rounded-lg font-semibold hover:bg-blue-900 transition-all"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FirstRegistration;
