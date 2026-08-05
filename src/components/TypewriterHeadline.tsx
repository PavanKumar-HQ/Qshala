import { useState, useEffect } from 'react';

const WORDS_TO_ROTATE = [
  "Curiosity.",
  "Questions.",
  "Discovery.",
  "Wonder."
];

export default function TypewriterHeadline() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = WORDS_TO_ROTATE[currentWordIndex];

    // Pause when the word is fully typed before starting deletion
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1800);
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting) {
      // Typing phase: append next character
      if (displayedText === currentWord) {
        setIsPaused(true);
        return;
      }

      const typingTimer = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      }, 90);

      return () => clearTimeout(typingTimer);
    } else {
      // Deleting phase: remove last character
      if (displayedText === '') {
        const pauseTimer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % WORDS_TO_ROTATE.length);
        }, 300);
        return () => clearTimeout(pauseTimer);
      }

      const deletingTimer = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
      }, 50);

      return () => clearTimeout(deletingTimer);
    }
  }, [displayedText, isDeleting, isPaused, currentWordIndex]);

  return (
    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] font-heading min-h-[160px] sm:min-h-[180px] md:min-h-[220px]">
      Replacing Rote Learning With{' '}
      <span className="relative inline-block text-[#30B2E7] font-mikado min-w-[2ch]">
        {displayedText}
        <span className="inline-block w-[3px] sm:w-[4px] h-8 sm:h-12 md:h-14 bg-[#30B2E7] ml-1 align-middle animate-pulse" />
      </span>
    </h1>
  );
}

