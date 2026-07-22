import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    const fullWord = WORDS_TO_ROTATE[currentWordIndex];
    const typingSpeed = isDeleting ? 60 : 110;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullWord.slice(0, displayedText.length + 1));
        if (displayedText === fullWord) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(fullWord.slice(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % WORDS_TO_ROTATE.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] font-heading min-h-[160px] sm:min-h-[180px] md:min-h-[220px]">
      Replacing Rote Learning With{' '}
      <span className="relative inline-block text-[#30B2E7] font-mikado">
        {displayedText}
        <span className="inline-block w-1 h-10 md:h-14 bg-black ml-1 align-middle animate-pulse" />
      </span>
    </h1>
  );
}
