import React from 'react';
import { motion } from 'framer-motion';

interface ResetButtonProps {
  onClick: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="fixed top-4 left-4 px-4 py-2 bg-sky-theme hover:bg-sky-theme-dark dark:bg-teal-gray dark:hover:bg-teal-gray-light text-white rounded-lg transition-colors shadow-lg font-jura tracking-wide"
    >
      Reset Game
    </motion.button>
  );
};

export default ResetButton;