'use client';

import { useEffect } from 'react';

export default function DynamicTabTitle() {
  useEffect(() => {
    const originalTitle = document.title || "QShala | Questions • Quriosity • Quests";

    const funnyMessages = [
      "QT misses you! Come back!",
      "Still curious? Click back!",
      "Don't leave QT alone with questions!",
      "A wild quiz question appeared!",
      "QT is peeking... Where did you go?"
    ];

    const handleVisibilityChange = () => {
      if (document.hidden) {
        const randomMsg = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
        document.title = randomMsg;
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null;
}
