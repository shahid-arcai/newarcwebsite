"use client";

import { useState, useEffect } from "react";

export default function PortfolioHero() {
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Typing and deleting animation effect
  useEffect(() => {
    if (!mounted) return;

    const texts = ["OUR PORTFOLIO", "OUR BEST WORK"];
    const currentFullText = texts[currentTextIndex];
    let timeout: NodeJS.Timeout;

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (typedText.length < currentFullText.length) {
          setTypedText(currentFullText.slice(0, typedText.length + 1));
          timeout = setTimeout(handleTyping, 100); // Typing speed
        } else {
          // Wait before starting to delete
          const waitTime = currentTextIndex === 0 ? 3000 : 2000;
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, waitTime);
        }
      } else {
        // Deleting (backspace effect)
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
          timeout = setTimeout(handleTyping, 50);
        } else {
          // Finished deleting, switch to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    timeout = setTimeout(handleTyping, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [mounted, typedText, isDeleting, currentTextIndex]);

  // Cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative min-h-[50vh] w-full flex items-center justify-center px-6 pt-48 pb-20 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-center mb-6">
          <p className="text-xs font-medium text-[rgb(119,119,119)] uppercase tracking-wider">
            (PORTFOLIO)
          </p>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white uppercase leading-none tracking-tight mb-6">
          {mounted ? (
            <>
              {typedText}
              <span className={`inline-block w-1 h-[0.8em] bg-white ml-2 align-middle ${showCursor ? "opacity-100" : "opacity-0"}`} />
            </>
          ) : (
            "OUR PORTFOLIO"
          )}
        </h1>

        <p className="text-base text-[rgb(119,119,119)] max-w-2xl mx-auto leading-relaxed">
          Explore our collection of successful projects across web design, branding, AI automation, and digital marketing.
        </p>
      </div>
    </section>
  );
}
