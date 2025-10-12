"use client";

import { useEffect, useState, useRef } from "react";

const PrinciplesSection = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const principle1Ref = useRef<HTMLDivElement>(null);
  const principle2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through the section (0 to 1)
      // Progress is 0 when section starts entering viewport
      // Progress is 1 when we've scrolled through the entire section
      const scrolled = -sectionRect.top;
      const scrollRange = sectionHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, scrolled / scrollRange));
      
      setScrollProgress(progress);

      // Switch to section 2 when progress is more than 50%
      if (progress > 0.5) {
        setActiveSection(2);
      } else {
        setActiveSection(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const splitTextIntoLetters = (text: string) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        style={{
          display: 'inline-block',
          opacity: 1,
          transform: 'none',
          willChange: 'transform'
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const splitTextIntoWords = (text: string) => {
    return text.split(' ').map((word, wordIndex) => (
      <span key={wordIndex} style={{ whiteSpace: 'nowrap' }}>
        {word.split('').map((char, charIndex) => (
          <span
            key={charIndex}
            style={{
              display: 'inline-block',
              opacity: 1,
              transform: 'none',
              willChange: 'transform'
            }}
          >
            {char}
          </span>
        ))}
        {wordIndex < text.split(' ').length - 1 && ' '}
      </span>
    ));
  };

  return (
    <section ref={sectionRef} className="relative bg-black h-[200vh]" id="principles">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            {/* Number - Changes from 1 to 2 */}
            <div className="lg:w-1/3 flex justify-center lg:justify-start">
              <h2
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-white"
                style={{
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>
                  <span style={{ display: 'inline-block' }}>0</span>
                  <span style={{ display: 'inline-block', transition: 'all 0.5s ease' }}>
                    {activeSection}
                  </span>
                  <span style={{ display: 'inline-block' }}>.</span>
                </span>
              </h2>
            </div>

            {/* Content - Overlapping sections */}
            <div className="lg:w-2/3 relative">
              {/* Principle 1 Content */}
              <div 
                className="space-y-8"
                style={{
                  opacity: 1 - scrollProgress,
                  transform: `translateY(${-scrollProgress * 50}px)`,
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                  position: scrollProgress > 0.5 ? 'absolute' : 'relative',
                  top: 0,
                  left: 0,
                  width: '100%'
                }}
              >
                <div style={{ transform: 'none' }}>
                  <h2
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 text-center lg:text-left"
                    style={{
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    {splitTextIntoWords('BEYOND VISUALS.')}
                  </h2>
                </div>

                <div style={{ transform: 'none' }}>
                  <p
                    className="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl text-center lg:text-left mx-auto lg:mx-0"
                    style={{
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    <span className="block">
                      {splitTextIntoWords('We craft bold brands and high-impact')}
                    </span>
                    <span className="block">
                      {splitTextIntoWords('digital experiences that get results.')}
                    </span>
                  </p>
                </div>
              </div>

              {/* Principle 2 Content */}
              <div 
                className="space-y-8"
                style={{
                  opacity: scrollProgress,
                  transform: `translateY(${(1 - scrollProgress) * 100}vh)`,
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                  position: scrollProgress < 0.5 ? 'absolute' : 'relative',
                  top: 0,
                  left: 0,
                  width: '100%',
                  pointerEvents: scrollProgress < 0.5 ? 'none' : 'auto'
                }}
              >
                <div style={{ transform: 'none' }}>
                  <h2
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 text-center lg:text-left"
                    style={{
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    {splitTextIntoWords('Built with Vision.')}
                  </h2>
                </div>

                <div style={{ transform: 'none' }}>
                  <p
                    className="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl text-center lg:text-left mx-auto lg:mx-0"
                    style={{
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    <span className="block">
                      {splitTextIntoWords("Every brand we build starts with")}
                    </span>
                    <span className="block">
                      {splitTextIntoWords("strategy and bold ideas. We design for growth.")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
