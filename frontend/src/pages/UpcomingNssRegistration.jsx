import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpcomingNssRegistration = () => {
  const { game } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    enrollment: "",
    age: "",
    gender: "",
    department: "",
    semester: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  useEffect(() => {
    if (submissionStatus === "success") {
      setTimeout(() => {
        navigate("/"); // Redirects to home page
      }, 2000); // Delay of 2 seconds for user to see message
    }
  }, [submissionStatus, navigate]);

  const validateForm = () => {
    let formErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validations = {
      name: (value) => (!value.trim() ? "Name is required" : null),
      email: (value) =>
        !value.trim()
          ? "Email is required"
          : !emailRegex.test(value)
          ? "Invalid email address"
          : null,
      age: (value) =>
        !value || isNaN(value) || value < 10 || value > 100
          ? "Age must be between 10 and 100"
          : null,
      gender: (value) => (!value.trim() ? "Gender is required" : null),
      enrollment: (value) => (!value.trim() ? "Enrollment is required" : null),
      mobile: (value) => (!value.trim() ? "Mobile is required" : null),
      department: (value) => (!value.trim() ? "Department is required" : null),
      semester: (value) => (!value.trim() ? "Semester is required" : null),
    };

    Object.entries(validations).forEach(([key, validate]) => {
      const error = validate(formData[key]);
      if (error) formErrors[key] = error;
    });

    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await axios.post(
          `http://127.0.0.1:5000/api/register/${game}/`,
          formData,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        setSubmissionStatus("success");
        setTimeout(() => {
          setSubmissionStatus(null);
          setIsSubmitting(false);
        }, 3000);
      } catch (error) {
        console.error("Registration Error:", error);
        setSubmissionStatus("error");
        setIsSubmitting(false);
        setTimeout(() => setSubmissionStatus(null), 3000);
      }
    }
  };

  const inputVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
    exit: { opacity: 0, x: 20 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto mt-10 p-6 border-2 border-gray-200 rounded-xl shadow-2xl bg-gray-50 mb-10"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold mb-6 text-center text-blue-800"
      >
        Register for NSS
      </motion.h2>

      <form onSubmit={handleSubmit}>
        <AnimatePresence>
          {Object.entries({
            name: "Name",
            email: "Email",
            mobile: "Mobile",
            enrollment: "Enrollment",
            age: "Age",
          }).map(([key, label]) => (
            <motion.div
              key={key}
              variants={inputVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mb-4"
            >
              <label className="block font-semibold mb-2 text-gray-600">
                {label}
              </label>
              <motion.input
                type={key === "age" ? "number" : "text"}
                name={key}
                placeholder={label}
                value={formData[key]}
                onChange={handleChange}
                whileHover={{ scale: 1.02 }}
                whileFocus={{
                  scale: 1,
                  boxShadow: "0 0 0 3px rgba(0, 26, 255, 0.3)",
                }}
                className="w-full border border-blue-800 px-4 py-2 rounded-lg bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <AnimatePresence>
                {errors[key] && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm mt-1 flex items-center"
                  >
                    <span className="mr-2 text-red-500">!</span>
                    {errors[key]}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>

        {[
          {
            name: "gender",
            label: "Gender",
            options: ["Male", "Female", "Other"],
          },
          {
            name: "department",
            label: "Department",
            options: [
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
            ],
          },
          {
            name: "semester",
            label: "Semester",
            options: ["1", "2", "3", "4", "5", "6", "7", "8"],
          },
        ].map(({ name, label, options }) => (
          <motion.div
            key={name}
            variants={inputVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mb-4"
          >
            <label className="block font-semibold mb-2 text-gray-600">
              {label}
            </label>
            <motion.select
              name={name}
              value={formData[name]}
              onChange={handleChange}
              whileHover={{ scale: 1.02 }}
              whileFocus={{
                scale: 1.02,
                boxShadow: "0 0 0 3px rgba(5, 9, 130, 0.3)",
              }}
              className="w-full border border-blue-800 px-4 py-2 rounded-lg bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              <option value="">-- Select {label} --</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </motion.select>
            <AnimatePresence>
              {errors[name] && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-500 text-sm mt-1 flex items-center"
                >
                  <span className="mr-2 text-red-500">!</span>
                  {errors[name]}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full mt-4 py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center 
            ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
        >
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "linear",
              }}
            >
              ◌
            </motion.div>
          ) : (
            "Register"
          )}
        </motion.button>

        <AnimatePresence>
          {submissionStatus && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className={`mt-4 p-3 rounded-lg text-center flex items-center justify-center
                ${
                  submissionStatus === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
            >
              {submissionStatus === "success" ? (
                <>✓ Registration Successful!</>
              ) : (
                <>✗ Registration Failed. Please try again.</>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};

export default UpcomingNssRegistration;
