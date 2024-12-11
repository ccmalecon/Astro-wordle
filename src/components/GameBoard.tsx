import React from 'react';
import { motion } from 'framer-motion';
import Keyboard from './Keyboard';
import ResetButton from './ResetButton';
import GameGrid from './GameGrid';
import GameStatus from './GameStatus';
import { useGameState } from '../hooks/useGameState';
import { useKeyboardHandling } from '../hooks/useKeyboardHandling';

interface GameBoardProps {
  wordIndex?: number;
}

export default function GameBoard({ wordIndex }: GameBoardProps) {
  const {
    word,
    guesses,
    currentGuess,
    gameStatus,
    usedLetters,
    shake,
    resetGame,
    setGuesses,
    setCurrentGuess,
    setGameStatus,
    setUsedLetters,
    setShake
  } = useGameState(wordIndex);

  const handleKeyPress = useKeyboardHandling({
    gameStatus,
    currentGuess,
    word,
    guesses,
    usedLetters,
    setShake,
    setCurrentGuess,
    setGuesses,
    setUsedLetters,
    setGameStatus
  });

  return (
    <div className="max-w-lg mx-auto p-4">
      <ResetButton onClick={resetGame} />
      
      <GameGrid
        guesses={guesses}
        currentGuess={currentGuess}
        word={word}
        shake={shake}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <Keyboard onKeyPress={handleKeyPress} usedLetters={usedLetters} />
      </motion.div>
      
      {gameStatus !== 'playing' && (
        <GameStatus
          gameStatus={gameStatus}
          word={word}
          onReset={resetGame}
        />
      )}
    </div>
  );
}