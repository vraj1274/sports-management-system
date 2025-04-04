import React, { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="bg-blue-50 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl p-10">
        <h1 className="text-5xl font-extrabold text-center text-blue-800 mb-6">
          LDRP Institute of Technology and Research
        </h1>
        <p className="text-xl text-center font-semibold text-blue-700 mb-10">
          Excellence in Academics and Sports Development
        </p>

        {/* Interactive Sections */}
        <div className="space-y-8">
          {/* Introduction */}
          <div>
            <motion.button
              onClick={() => toggleSection("introduction")}
              className="w-full flex justify-between items-center bg-gradient-to-r from-blue-200 to-blue-300 px-6 py-5 text-blue-800 font-semibold rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Introduction
              <span>{activeSection === "introduction" ? "▲" : "▼"}</span>
            </motion.button>
            {activeSection === "introduction" && (
              <motion.div
                className="mt-3 text-gray-800 px-6 py-4 bg-blue-50 rounded-xl shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p>
                  LDRP Institute of Technology and Research (LDRP-ITR), located
                  in Gandhinagar, Gujarat, is a premier institution known for
                  academic excellence and holistic development. Established in
                  2005, the institute is affiliated with Kadi Sarva
                  Vishwavidyalaya and offers a range of courses to nurture
                  talent and innovation.
                </p>
              </motion.div>
            )}
          </div>

          {/* Sports Infrastructure */}
          <div>
            <motion.button
              onClick={() => toggleSection("infrastructure")}
              className="w-full flex justify-between items-center bg-gradient-to-r from-blue-200 to-blue-300 px-6 py-5 text-blue-800 font-semibold rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Sports Infrastructure
              <span>{activeSection === "infrastructure" ? "▲" : "▼"}</span>
            </motion.button>
            {activeSection === "infrastructure" && (
              <motion.div
                className="mt-3 text-gray-800 px-6 py-4 bg-blue-50 rounded-xl shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ul className="list-disc pl-6 space-y-3">
                  <li>Indoor Sports Complex with table tennis, chess, and carrom.</li>
                  <li>Outdoor fields for cricket, football, basketball, and volleyball.</li>
                  <li>Multi-lane athletics track for running and relay events.</li>
                  <li>Fully equipped gymnasium for fitness and training.</li>
                  <li>Specialized areas for martial arts, yoga, and fitness training.</li>
                </ul>
              </motion.div>
            )}
          </div>

          {/* Events and Competitions */}
          <div>
            <motion.button
              onClick={() => toggleSection("events")}
              className="w-full flex justify-between items-center bg-gradient-to-r from-blue-200 to-blue-300 px-6 py-5 text-blue-800 font-semibold rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Events and Competitions
              <span>{activeSection === "events" ? "▲" : "▼"}</span>
            </motion.button>
            {activeSection === "events" && (
              <motion.div
                className="mt-3 text-gray-800 px-6 py-4 bg-blue-50 rounded-xl shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p>LDRP-ITR hosts a variety of sports events, including:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Annual Sports Meet</strong>: A week-long celebration of sportsmanship and competition.</li>
                  <li><strong>Inter-Collegiate Tournaments</strong>: Competitions with other colleges across Gujarat and India.</li>
                  <li><strong>Workshops and Camps</strong>: Training sessions by professional coaches.</li>
                  <li><strong>Adventure Activities</strong>: Trekking, rock climbing, and team-building exercises.</li>
                </ul>
              </motion.div>
            )}
          </div>

          {/* Sports Scholarships */}
          <div>
            <motion.button
              onClick={() => toggleSection("scholarships")}
              className="w-full flex justify-between items-center bg-gradient-to-r from-blue-200 to-blue-300 px-6 py-5 text-blue-800 font-semibold rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Sports Scholarships and Support
              <span>{activeSection === "scholarships" ? "▲" : "▼"}</span>
            </motion.button>
            {activeSection === "scholarships" && (
              <motion.div
                className="mt-3 text-gray-800 px-6 py-4 bg-blue-50 rounded-xl shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p>
                  LDRP-ITR recognizes talent by offering scholarships to
                  outstanding athletes. Students receive mentorship, access to
                  professional coaching, and financial assistance for state and
                  national competitions.
                </p>
              </motion.div>
            )}
          </div>

          {/* Achievements */}
          <div>
            <motion.button
              onClick={() => toggleSection("achievements")}
              className="w-full flex justify-between items-center bg-gradient-to-r from-blue-200 to-blue-300 px-6 py-5 text-blue-800 font-semibold rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Achievements
              <span>{activeSection === "achievements" ? "▲" : "▼"}</span>
            </motion.button>
            {activeSection === "achievements" && (
              <motion.div
                className="mt-3 text-gray-800 px-6 py-4 bg-blue-50 rounded-xl shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p>
                  Students of LDRP-ITR have excelled in numerous national and
                  state-level championships, bringing pride to the institution
                  with their stellar performances.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
