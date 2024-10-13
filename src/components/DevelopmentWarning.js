import React, { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa"; // Professional-looking icon
import { motion } from "framer-motion"; // For animations

const DevelopmentWarning = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    setTimeout(() => onAccept(), 300); // Delay to allow the exit animation
  };

  return (
    isVisible && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 bg-gray-900 bg-opacity-80 flex justify-center items-center z-50"
      >
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full text-center">
          {/* Icon with professional design */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="mb-4"
          >
            <FaExclamationCircle size={60} className="text-red-500 mx-auto" />
          </motion.div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Site Under Development
          </h2>

          {/* Message */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            This site is currently in development. Features may be incomplete or
            subject to change. Would you like to continue?
          </p>

          {/* Accept Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAccept}
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Yes, Continue
          </motion.button>
        </div>
      </motion.div>
    )
  );
};

export default DevelopmentWarning;
