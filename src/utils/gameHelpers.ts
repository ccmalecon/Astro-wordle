export function getLetterStatus(letter: string, index: number, guess: string, word: string) {
  if (!letter) return '';
  if (letter === word[index]) return 'correct';
  if (word.includes(letter)) return 'present';
  return 'absent';
}

export function getLetterClassName(status: string) {
  switch (status) {
    case 'correct':
      return 'bg-green-500 text-white border-green-600';
    case 'present':
      return 'bg-yellow-500 text-white border-yellow-600';
    case 'absent':
      return 'bg-gray-500 text-white border-gray-600';
    default:
      return 'bg-white/90 dark:bg-teal-gray-light/90 border-sky-theme-dark dark:border-teal-gray-dark';
  }
}