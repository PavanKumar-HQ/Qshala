import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Sparkles, ShieldCheck } from 'lucide-react';
import QTMascot, { type QTMascotVariant } from './QTMascot';

const TRIVIA_FACTS = [
  "An octopus has three hearts. Two pump blood to the gills, one to the body!",
  "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old!",
  "A day on Venus is longer than a year on Venus.",
  "Bananas are curved because they grow towards the sun in a process called negative geotropism.",
  "Wombat poop is cube-shaped, which stops it from rolling away!",
  "Sloths can hold their breath longer than dolphins can (up to 40 minutes)!",
  "There are more trees on Earth than stars in the Milky Way galaxy."
];

const MASCOT_VARIANTS: QTMascotVariant[] = ['quizzing', 'sherlock', 'idea', 'reading', 'curious'];

export default function AnimatedHeroMascotStage() {
  const [factIdx, setFactIdx] = useState(0);
  const [variantIdx, setVariantIdx] = useState(0);

  const handleGenerate = () => {
    setFactIdx((prev) => (prev + 1) % TRIVIA_FACTS.length);
    setVariantIdx((prev) => (prev + 1) % MASCOT_VARIANTS.length);
  };

  const currentFact = TRIVIA_FACTS[factIdx];
  const currentVariant = MASCOT_VARIANTS[variantIdx];

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center">
      
      {/* Background Glowing Ambient Rings */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#30B2E7]/20 via-[#FDB913]/25 to-[#75B543]/20 rounded-full blur-3xl pointer-events-none scale-110 animate-pulse" />

      {/* Live Interactive Mascot Stage Container */}
      <div className="relative w-full flex flex-col items-center text-center space-y-6">
        
        {/* Decorative Top Accent Tag */}
        <div className="px-3.5 py-1 rounded-full bg-[#FFFDF5] border border-black/20 text-[11px] font-black uppercase text-slate-700 font-heading flex items-center gap-1.5">
          <span>QT&apos;s Trivia Generator</span>
        </div>

        {/* Live Dynamic Speech Bubble Container */}
        <div className="min-h-[96px] w-full flex items-end justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={factIdx}
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative px-5 py-4 rounded-2xl bg-[#FFFDF5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] max-w-xs flex items-center gap-3"
            >
              <div className="p-1.5 rounded-xl bg-[#FDB913] text-black shrink-0 border-2 border-black">
                <HelpCircle className="w-4 h-4" />
              </div>
              <p className="text-xs font-black text-slate-800 leading-snug font-heading text-left">
                &ldquo;{currentFact}&rdquo;
              </p>
              {/* Speech Bubble Arrow */}
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FFFDF5] border-r-2 border-b-2 border-black rotate-45" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Center Mascot Render */}
        <div className="h-[224px] w-full flex items-center justify-center">
          <motion.div
            key={variantIdx}
            initial={{ scale: 0.8, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="cursor-pointer"
            onClick={handleGenerate}
          >
            <QTMascot variant={currentVariant} size="xl" />
          </motion.div>
        </div>

        {/* Button */}
        <div className="w-full pt-2 flex justify-center">
          <button
            onClick={handleGenerate}
            className="px-6 py-3 rounded-full font-black text-sm font-heading transition-all border-2 border-black bg-[#30B2E7] text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2"
          >
            Generate Trivia
          </button>
        </div>

      </div>

      {/* Bottom Floating Stat Badge */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="mt-4 px-4 py-2 rounded-2xl bg-[#75B543] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 text-xs font-black font-heading"
      >
        <ShieldCheck className="w-4 h-4 text-black" />
        <span>98.4% Parent &amp; Teacher Satisfaction</span>
      </motion.div>

    </div>
  );
}
