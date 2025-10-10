"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const TypingText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 130); // 130ms per letter (23 characters x 130ms ≈ 3000ms)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block"
      >
        |
      </motion.span>
    </h1>
  );
};

export default function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress over 3 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadComplete, 300); // Small delay before hiding
          return 100;
        }
        return prev + 1.33; // 100 / 75 steps ≈ 1.33 per step (75 steps x 40ms = 3000ms)
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-orange-500/10 blur-3xl"
          animate={{
            x: [0, 100, 0, -100, 0],
            y: [0, -100, 100, 0, 0],
            scale: [1, 1.2, 0.8, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-orange-400/10 blur-3xl"
          animate={{
            x: [0, -100, 0, 100, 0],
            y: [0, 100, -100, 0, 0],
            scale: [1, 0.8, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="flex flex-col items-center gap-6 relative z-10">
          {/* Logo or Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <TypingText text="Welcome to the future" />
          </motion.div>

          {/* Loading Bar */}
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 to-orange-400"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
