import { useState, useCallback } from 'react';
import { getRandomWord, getWordByIndex } from '../utils/wordManager';

export function useGameState(wordIndex?: number) {
  const [word, setWord] = useState(() => 
    typeof wordIndex === 'number' ? getWordByIndex(wordIndex) : getRandomWord()
  );
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [usedLetters, setUsedLetters] = useState<Record<string, 'correct' | 'present' | 'absent'>>({});
  const [shake, setShake] = useState(false);

  const resetGame = useCallback(() => {
    const newWord = typeof wordIndex === 'number' ? getWordByIndex(wordIndex) : getRandomWord();
    setWord(newWord);
    setGuesses([]);
    setCurrentGuess('');
    setGameStatus('playing');
    setUsedLetters({});
    setShake(false);
  }, [wordIndex]);

  return {
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
  };
}