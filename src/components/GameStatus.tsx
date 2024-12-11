import React from 'react';
import { motion } from 'framer-motion';

interface GameStatusProps {
  gameStatus: 'playing' | 'won' | 'lost';
  word: string;
  onReset: () => void;
}

export default function GameStatus({ gameStatus, word, onReset }: GameStatusProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring", 
        duration: 1.5,
        stiffness: 70,
        damping: 15
      }}
      className="mt-8 text-center"
    >
      <motion.h2 
        className="text-2xl font-bold mb-4 text-sky-theme-dark dark:text-white tracking-wide"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
      >
        {gameStatus === 'won' ? ' Congratulations!' : `The word was: ${word}`}
      </motion.h2>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReset}
        className="px-6 py-2 bg-sky-theme hover:bg-sky-theme-dark dark:bg-teal-gray dark:hover:bg-teal-gray-light text-white rounded-lg transition-colors shadow-lg font-semibold tracking-wide"
      >
        Play Again
      </motion.button>
    </motion.div>
  );
}