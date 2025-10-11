"use client";

import { useEffect, useState, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const TypingText = memo(({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50); // Very fast typing: 50ms per letter (22 chars × 50ms = 1.1s)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight text-center" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block"
      >
        |
      </motion.span>
    </h1>
  );
});

TypingText.displayName = 'TypingText';

const LoadingScreen = memo(({ onLoadComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress over 1.5 seconds (much faster for better LCP)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadComplete, 100); // Minimal delay
          return 100;
        }
        return prev + 3; // Even faster progress updates
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
        style={{ willChange: 'opacity' }}
      >
        {/* Static Gradient Background - Removed heavy animation for performance */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 30% 40%, rgba(249, 115, 22, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)",
          }}
        />

        {/* Single Optimized Orb - Minimal animations for performance */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-xl"
          style={{
            background: "radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, transparent 70%)",
            willChange: 'transform',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Optimized Geometric Shapes */}
        <motion.div
          className="absolute w-32 h-32 border border-orange-500/20"
          style={{ left: "10%", top: "20%", willChange: 'transform' }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-24 h-24 border border-orange-400/20"
          style={{ right: "15%", bottom: "25%", willChange: 'transform' }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Optimized Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="flex flex-col items-center gap-6 relative z-10">
          {/* Logo or Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TypingText text="WELCOME TO THE FUTURE" />
          </motion.div>

          {/* Optimized Loading Bar */}
          <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden border border-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400"
              style={{ 
                width: `${progress}%`,
                willChange: 'width',
              }}
              transition={{ duration: 0.05, ease: "linear" }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
});

LoadingScreen.displayName = 'LoadingScreen';

export default LoadingScreen;
