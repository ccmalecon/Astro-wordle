import { ANSWER_WORDS, VALID_GUESSES } from './wordLists';

// All valid words
const ALL_VALID_WORDS = [...new Set([...ANSWER_WORDS, ...VALID_GUESSES])];

/**
 * Get a random word from the answer list
 * @returns {string} A random word in uppercase
 */
export const getRandomWord = (): string => {
  const word = ANSWER_WORDS[Math.floor(Math.random() * ANSWER_WORDS.length)];
  return word.toUpperCase();
};

/**
 * Get a specific word from the answer list by index
 * @param {number} index The index of the word to get
 * @returns {string}
 */
export const getWordByIndex = (index: number): string => {
  const word = ANSWER_WORDS[index % ANSWER_WORDS.length];
  return word.toUpperCase();
};

/**
 * Check if a word is valid (can be used as a guess)
 * @param {string} word The word to check
 * @returns {boolean} True if the word is valid
 */
export const isValidWord = (word: string): boolean => {
  return ALL_VALID_WORDS.includes(word.toLowerCase());
};

/**
 * Get the total number of possible answer words
 * @returns {number} The total number of answer words
 */
export const getTotalAnswerWords = (): number => {
  return ANSWER_WORDS.length;
};

/**
 * Check if a word is in the answer list
 * @param {string} word The word to check
 * @returns {boolean} True if the word is in the answer list
 */
export const isAnswerWord = (word: string): boolean => {
  return ANSWER_WORDS.includes(word.toLowerCase());
};