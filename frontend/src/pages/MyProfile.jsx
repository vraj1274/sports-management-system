import React, { useState } from "react";
import profile_pic from "../assets/user.png";

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    photo: profile_pic,
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleEdit();
    // Save logic here (e.g., API call)
    alert("Profile updated successfully!");
  };

  return (
    <section className="py-10 bg-gradient-to-r bg-secondary  ">
      <div className="container mx-auto max-w-4xl shadow-2xl bg-white p-6 rounded-xl">
        <div className="justify-between flex items-center mb-6">
          <h1 className="text-3xl mx-1 font-bold text-center text-blue-700 mb-6">
            My Profile
          </h1>
          <div className="flex justify-end mb-4 mx-1">
            {!isEditing && (
              <button
                onClick={toggleEdit}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-40 h-40">
              <img
                src={profile.photo || profile_pic}
                alt="Profile"
                className="rounded-full w-full h-full object-cover shadow-lg"
              />
              {isEditing && (
                <label
                  htmlFor="upload_profile"
                  className="absolute bottom-2 right-2"
                >
                  <input
                    type="file"
                    id="upload_profile"
                    className="hidden"
                    onChange={handlePhotoChange}
                  />
                  <div className="bg-blue-700 text-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-blue-900 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M4 3a2 2 0 012-2h8a2 2 0 012 2v1h-1.586A2 2 0 0014 3H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V9h1.586A2 2 0 0018 11v5a4 4 0 01-4 4H6a4 4 0 01-4-4V5a2 2 0 012-2z" />
                    </svg>
                  </div>
                </label>
              )}
            </div>
            <p className="text-gray-600 mt-2 font-semibold">
              {isEditing ? "Upload a new profile picture" : "Profile Picture"}
            </p>
          </div>

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
                className={`w-full p-3 rounded-lg border-2 ${
                  isEditing
                    ? "border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    : "border-gray-200 bg-gray-100"
                }`}
                readOnly={!isEditing}
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
                className={`w-full p-3 rounded-lg border-2 ${
                  isEditing
                    ? "border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    : "border-gray-200 bg-gray-100"
                }`}
                readOnly={!isEditing}
              />
            </div>
          </div>
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
                className={`w-full p-3 rounded-lg border-2 ${
                  isEditing
                    ? "border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    : "border-gray-200 bg-gray-100"
                }`}
                readOnly={!isEditing}
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
                className={`w-full p-3 rounded-lg border-2 ${
                  isEditing
                    ? "border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    : "border-gray-200 bg-gray-100"
                }`}
                readOnly={!isEditing}
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
                disabled={!isEditing}
                className={`w-full p-3 rounded-lg border-2 ${
                  isEditing
                    ? "border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    : "border-gray-200 bg-gray-100"
                }`}
                readOnly={!isEditing}
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
                disabled={!isEditing}
                onChange={handleInputChange}
                className={`w-full p-3 rounded-lg border-2 ${
                  isEditing
                    ? "border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    : "border-gray-200 bg-gray-100"
                }`}
                readOnly={!isEditing}
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
                disabled={!isEditing}
                className={`w-full p-3 rounded-lg border-2 ${
                  isEditing
                    ? "border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    : "border-gray-200 bg-gray-100"
                }`}
                readOnly={!isEditing}
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
                disabled={!isEditing}
                className={`w-full p-3 rounded-lg border-2 ${
                  isEditing
                    ? "border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    : "border-gray-200 bg-gray-100"
                }`}
                readOnly={!isEditing}
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
                className={`w-full p-3 rounded-lg border-2 ${
                  isEditing
                    ? "border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    : "border-gray-200 bg-gray-100"
                }`}
                readOnly={!isEditing}
                required
              />
            </div>
          </div>

          {isEditing && (
            <button
              type="submit"
              onClick={() => window.scrollTo(0, 0)}
              className="mt-6 w-full bg-blue-700 text-white p-3 rounded-lg font-semibold hover:bg-blue-900 transition-all"
            >
              Save Changes
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default MyProfile;
