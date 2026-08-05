import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, BookOpen, Lightbulb, Puzzle, Compass, Rocket } from 'lucide-react';

const CURIOSITY_PROMPTS = [
  "Why is the sky blue?",
  "What causes a rainbow?",
  "How do octopuses breathe?",
  "Why do we dream?",
  "What makes stars shine?",
  "Growth through Curiosity..."
];

const ORBIT_ICONS = [
  { icon: Sparkles, color: 'text-[#FDB913]' },
  { icon: BookOpen, color: 'text-[#30B2E7]' },
  { icon: Lightbulb, color: 'text-[#FDB913]' },
  { icon: Puzzle, color: 'text-[#75B543]' },
  { icon: Compass, color: 'text-[#30B2E7]' },
  { icon: Rocket, color: 'text-[#75B543]' },
];

export default function LoadingScreen() {
  const [loading, setLoading] = useState(false);
  const [promptIdx, setPromptIdx] = useState(0);
  const [scene, setScene] = useState<1 | 2 | 3 | 4>(1);

  useEffect(() => {
    // Check if site has already loaded in this session
    if (typeof window !== 'undefined') {
      const hasLoaded = sessionStorage.getItem('qshala_loaded');
      if (hasLoaded) {
        setLoading(false);
        return;
      }
    }

    // First load in session: show loader & start timeline
    setLoading(true);

    const t1 = setTimeout(() => setScene(2), 500);  // Question mark animation
    const t2 = setTimeout(() => setScene(3), 1200); // QT Mascot appears
    const t3 = setTimeout(() => setScene(4), 1900); // Orbiting icons & reveal
    const tEnd = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('qshala_loaded', 'true');
    }, 2600); // Fade out

    const promptInterval = setInterval(() => {
      setPromptIdx((prev) => (prev + 1) % CURIOSITY_PROMPTS.length);
    }, 450);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(tEnd);
      clearInterval(promptInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="curiosity-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FFFDF5] text-black select-none pointer-events-auto"
        >
          {/* Ambient Glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#30B2E7]/15 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FDB913]/20 rounded-full blur-3xl animate-pulse" />
          </div>

          {/* Center Stage */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[260px]">
            {/* Scene 1: Pulsing Bouncing Dot */}
            {scene === 1 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.3, 1], y: [0, -10, 0] }}
                transition={{ duration: 0.4 }}
                className="w-10 h-10 rounded-full bg-[#30B2E7] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-black text-white text-lg"
              >
                ?
              </motion.div>
            )}

            {/* Scene 2: Question Stroke */}
            {scene === 2 && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative flex items-center justify-center"
              >
                <svg viewBox="0 0 100 100" className="w-28 h-28">
                  <motion.path
                    d="M 30 35 C 30 15, 70 15, 70 35 C 70 50, 50 45, 50 65 L 50 72"
                    fill="none"
                    stroke="#FDB913"
                    strokeWidth="10"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  />
                  <motion.circle
                    cx="50"
                    cy="88"
                    r="6"
                    fill="#30B2E7"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.2 }}
                  />
                </svg>
              </motion.div>
            )}

            {/* Scene 3 & 4: Mascot & Orbit Icons */}
            {(scene === 3 || scene === 4) && (
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative flex flex-col items-center"
              >
                {/* Orbiting Icons in Scene 4 */}
                {scene === 4 && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {ORBIT_ICONS.map((item, idx) => {
                      const IconComp = item.icon;
                      const angle = (idx / ORBIT_ICONS.length) * 2 * Math.PI;
                      const radius = 95;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            x: Math.cos(angle) * radius,
                            y: Math.sin(angle) * radius,
                          }}
                          transition={{ duration: 0.4, delay: idx * 0.05 }}
                          className={`absolute p-2 rounded-2xl bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${item.color}`}
                        >
                          <IconComp className="w-5 h-5 stroke-[2.5]" />
                        </motion.div>
                      );
                    })}
                  </div>
                )}

                {/* Mascot Image */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex flex-col items-center"
                >
                  <img
                    src="/assets/qt/Qt curious.svg"
                    alt="QT Mascot Curious"
                    width="130"
                    height="130"
                    className="object-contain drop-shadow-md"
                  />
                  <span className="mt-3 px-4 py-1 text-xs font-black rounded-full border-2 border-black bg-[#FDB913] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-heading">
                    Curiosity Awakens!
                  </span>
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Rotating Prompts */}
          <div className="mt-6 h-8 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={promptIdx}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="text-base font-black text-slate-900 tracking-tight font-heading"
              >
                {CURIOSITY_PROMPTS[promptIdx]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Progress Bar */}
          <div className="w-56 h-3 bg-white rounded-full border-2 border-black overflow-hidden mt-4 relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
              className="h-full bg-[#30B2E7] rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
