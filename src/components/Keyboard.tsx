import React, { memo } from 'react';
import Key from './Key';
import { motion } from 'framer-motion';

interface KeyboardProps {
  onKeyPress: (key: string) => void;
  usedLetters: Record<string, 'correct' | 'present' | 'absent'>;
}

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
];

const Keyboard: React.FC<KeyboardProps> = memo(({ onKeyPress, usedLetters }) => {
  return (
    <motion.div 
      className="w-full max-w-2xl mx-auto p-4 rounded-xl bg-white/20 dark:bg-black/20 backdrop-blur-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {KEYBOARD_ROWS.map((row, rowIndex) => (
        <motion.div 
          key={rowIndex} 
          className="flex justify-center gap-1.5 my-1.5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: rowIndex * 0.1 }}
        >
          {row.map((key) => (
            <Key
              key={key}
              value={key}
              onClick={onKeyPress}
              status={usedLetters[key]}
              wide={key === 'ENTER' || key === '⌫'}
            />
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
});

Keyboard.displayName = 'Keyboard';

export default Keyboard;