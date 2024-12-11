import { useCallback } from 'react';
import { isValidWord } from '../utils/wordManager';

interface UseKeyboardHandlingProps {
  gameStatus: 'playing' | 'won' | 'lost';
  currentGuess: string;
  word: string;
  guesses: string[];
  usedLetters: Record<string, 'correct' | 'present' | 'absent'>;
  setShake: (value: boolean) => void;
  setCurrentGuess: (value: string) => void;
  setGuesses: (value: string[]) => void;
  setUsedLetters: (value: Record<string, 'correct' | 'present' | 'absent'>) => void;
  setGameStatus: (value: 'playing' | 'won' | 'lost') => void;
}

export function useKeyboardHandling({
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
}: UseKeyboardHandlingProps) {
  return useCallback((key: string) => {
    if (gameStatus !== 'playing') return;

    if (key === 'ENTER') {
      if (currentGuess.length === 5) {
        if (!isValidWord(currentGuess)) {
          setShake(true);
          setTimeout(() => setShake(false), 500);
          return;
        }
        const upperGuess = currentGuess.toUpperCase();
        const newGuesses = [...guesses, upperGuess];
        setGuesses(newGuesses);
        setCurrentGuess('');

        const newUsedLetters = { ...usedLetters };
        for (let i = 0; i < upperGuess.length; i++) {
          const letter = upperGuess[i];
          if (letter === word[i]) {
            newUsedLetters[letter] = 'correct';
          } else if (word.includes(letter)) {
            newUsedLetters[letter] = 'present';
          } else {
            newUsedLetters[letter] = 'absent';
          }
        }
        setUsedLetters(newUsedLetters);

        if (upperGuess === word) {
          setGameStatus('won');
        } else if (newGuesses.length === 6) {
          setGameStatus('lost');
        }
      }
    } else if (key === '⌫') {
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (currentGuess.length < 5) {
      setCurrentGuess(prev => prev + key);
    }
  }, [currentGuess, gameStatus, guesses, usedLetters, word, setShake, setCurrentGuess, setGuesses, setUsedLetters, setGameStatus]);
}