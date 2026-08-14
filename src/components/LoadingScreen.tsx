import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If skip-loader is set or view transitions triggered, hide immediately
    if (typeof window !== 'undefined') {
      if (document.documentElement.classList.contains('skip-loader')) {
        setLoading(false);
        document.documentElement.classList.remove('loading-active');
        document.body.style.overflow = '';
        return;
      }
    }

    // Fail-safe ultra-fast completion (250ms) to ensure zero stuck screens on mobile
    const tEnd = setTimeout(() => {
      setLoading(false);
      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('loading-active');
        document.body.style.overflow = '';
        const loaderElem = document.getElementById('loader-root');
        if (loaderElem) loaderElem.style.display = 'none';
      }
    }, 250);

    return () => {
      clearTimeout(tEnd);
    };
  }, []);

  if (!loading) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="quriosity-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FFFDF5] text-black select-none pointer-events-none"
        >
          {/* Ambient Glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#30B2E7]/15 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FDB913]/20 rounded-full blur-3xl animate-pulse" />
          </div>

          {/* Center Pulsing Logo Badge */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#30B2E7] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-black text-white text-xl animate-bounce">
              ?
            </div>
            <p className="mt-4 text-xs font-black text-slate-900 tracking-wider uppercase font-heading">
              QShala &bull; Quriosity Loading...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
