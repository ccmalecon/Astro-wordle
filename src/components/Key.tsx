import React, { memo } from 'react';
import { motion } from 'framer-motion';

interface KeyProps {
  value: string;
  onClick: (value: string) => void;
  status?: 'correct' | 'present' | 'absent';
  wide?: boolean;
}

const Key: React.FC<KeyProps> = memo(({ value, onClick, status, wide = false }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick(value);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      type="button"
      className={`
        ${wide ? 'w-16' : 'w-11'} h-14
        flex items-center justify-center
        rounded-lg font-bold text-sm uppercase tracking-wider
        shadow-lg backdrop-blur-sm
        ${status === 'correct' ? 'bg-green-500 text-white' :
          status === 'present' ? 'bg-yellow-500 text-white' :
          status === 'absent' ? 'bg-gray-500 text-white' :
          'bg-sky-theme/90 dark:bg-teal-gray-light/90 text-gray-800 dark:text-white'}
        transition-all duration-200
        hover:shadow-xl
        cursor-pointer
        select-none
        touch-manipulation
      `}
    >
      <motion.span
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {value}
      </motion.span>
    </motion.button>
  );
});

Key.displayName = 'Key';

export default Key;