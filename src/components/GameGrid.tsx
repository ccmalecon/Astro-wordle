import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getLetterStatus, getLetterClassName } from '../utils/gameHelpers';

interface GameGridProps {
  guesses: string[];
  currentGuess: string;
  word: string;
  shake: boolean;
}

export default function GameGrid({ guesses, currentGuess, word, shake }: GameGridProps) {
  return (
    <motion.div 
      className="grid gap-2 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      {[...Array(6)].map((_, rowIndex) => (
        <GridRow
          key={rowIndex}
          rowIndex={rowIndex}
          guess={guesses[rowIndex]}
          isCurrentRow={rowIndex === guesses.length}
          currentGuess={currentGuess}
          word={word}
          shake={shake}
        />
      ))}
    </motion.div>
  );
}

interface GridRowProps {
  rowIndex: number;
  guess?: string;
  isCurrentRow: boolean;
  currentGuess: string;
  word: string;
  shake: boolean;
}

function GridRow({ rowIndex, guess, isCurrentRow, currentGuess, word, shake }: GridRowProps) {
  return (
    <motion.div
      className={`grid grid-cols-5 gap-2 ${shake && isCurrentRow ? 'animate-shake' : ''}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: rowIndex * 0.3 }}
    >
      {[...Array(5)].map((_, colIndex) => (
        <GridCell
          key={colIndex}
          letter={guess?.[colIndex] || (isCurrentRow ? currentGuess[colIndex] : '')}
          status={guess ? getLetterStatus(guess[colIndex], colIndex, guess, word) : ''}
          colIndex={colIndex}
        />
      ))}
    </motion.div>
  );
}

interface GridCellProps {
  letter: string;
  status: string;
  colIndex: number;
}

function GridCell({ letter, status, colIndex }: GridCellProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ 
        scale: letter ? 1 : 0.8,
        rotateX: status ? 360 : 0
      }}
      transition={{ 
        duration: 1.5,
        delay: colIndex * 0.4,
        type: "spring",
        stiffness: 50,
        damping: 12,
        bounce: 0.3
      }}
      className={`
        w-14 h-14 border-2 flex items-center justify-center text-2xl font-bold uppercase tracking-wider
        rounded-lg shadow-lg backdrop-blur-sm
        ${getLetterClassName(status)}
      `}
    >
      <AnimatePresence mode="wait">
        {letter && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 70,
              damping: 15
            }}
          >
            {letter}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}