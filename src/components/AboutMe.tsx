import { useState } from "react";
import { motion } from "framer-motion";
import { me } from "../data";

export const AboutMe = () => {
  const [showCV, setShowCV] = useState(false);

  const handleViewCV = () => {
    setShowCV(!showCV);
  };

  return (
    <div id="about" className="bg-black text-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Left Section: Text Information */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-yellow-400 hover:text-yellow-300 transition duration-300">
              Hello! I'm {me.fullName}
            </h1>
            <p className="text-lg text-gray-300 mt-2">{me.description}</p>
          </div>

          {/* Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="font-semibold text-yellow-300">Age:</span>{" "}
              {new Date().getFullYear() - me.dobYear}
            </div>
            <div>
              <span className="font-semibold text-yellow-300">Email:</span>{" "}
              {me.email}
            </div>
            <div>
              <span className="font-semibold text-yellow-300">Phone:</span>{" "}
              {me.phone}
            </div>
            <div>
              <span className="font-semibold text-yellow-300">Address:</span>{" "}
              {me.address}
            </div>
            <div>
              <span className="font-semibold text-yellow-300">
                Current Job:
              </span>{" "}
              {me.currentJob}
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/3">
          <img
            src="assets/me.jpg"
            alt="me"
            className="w-full rounded-xl shadow-lg border border-gray-700 transition-transform duration-300 transform hover:scale-105"
          />
        </div>
      </div>

      {/* CV Preview Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">My CV</h2>
        <button
          onClick={handleViewCV}
          className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-yellow-500"
        >
          {showCV ? "Hide CV" : "View CV"}
        </button>

        {showCV && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} // Initial state
            animate={{ opacity: 1, height: "auto" }} // Animate to full height and opacity
            exit={{ opacity: 0, height: 0 }} // Exit animation
            transition={{ duration: 0.5 }} // Transition duration
            className="mt-4"
          >
            <iframe
              src="assets/CV_TVHAO.pdf"
              width="100%"
              className="border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              title="CV Preview"
              height="500px" // Set a fixed height for the iframe
            >
              This browser does not support PDFs. Please download the PDF to
              view it:
              <a
                href="assets/CV_TVHAO.pdf"
                className="text-blue-400 hover:text-blue-500 transition duration-200"
              >
                {" "}
                Download CV
              </a>
            </iframe>
          </motion.div>
        )}
      </div>
    </div>
  );
};
