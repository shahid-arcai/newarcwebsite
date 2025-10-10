import { useState, useEffect, useMemo, memo } from "react";
import Menu from "./Menu";

const Navbar = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Memoize time formatting to avoid unnecessary recalculations
  const formatTime = useMemo(() => {
    return currentTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  }, [currentTime]);

  // Memoize timezone
  const timezone = useMemo(() => {
    const offset = -currentTime.getTimezoneOffset() / 60;
    const sign = offset >= 0 ? '+' : '';
    return `(GMT${sign}${offset})`;
  }, [currentTime]);

  // Memoize availability date
  const availabilityDate = useMemo(() => {
    const monthYear = currentTime.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    }).toUpperCase();
    return `EARLY ${monthYear}`;
  }, [currentTime]);

  return (
    <>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      {/* Hamburger/Close Button - Always on top */}
      <div className="fixed top-6 right-6 lg:right-12 z-[60] transition-all duration-500">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative p-2.5 md:p-3 lg:p-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors bg-black/20 backdrop-blur-sm"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
        >
          <div className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Top line */}
              <div 
                className={`absolute left-0 w-full h-[2px] bg-white transition-all duration-300 ${
                  isMenuOpen 
                    ? 'top-1/2 -translate-y-1/2 rotate-45' 
                    : 'top-0 rotate-0'
                }`}
              />
              {/* Middle line */}
              <div 
                className={`absolute top-1/2 left-0 w-full h-[2px] bg-white -translate-y-1/2 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              {/* Bottom line */}
              <div 
                className={`absolute left-0 w-full h-[2px] bg-white transition-all duration-300 ${
                  isMenuOpen 
                    ? 'top-1/2 -translate-y-1/2 -rotate-45' 
                    : 'bottom-0 rotate-0'
                }`}
              />
            </div>
          </div>
        </button>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-40 px-6 lg:px-12 py-6 transition-all duration-500" role="navigation" aria-label="Main navigation">
      <div className="max-w-[1800px] mx-auto">
        {/* Mobile Layout - Logo on left, CTA/Menu on right, Status under logo */}
        <div className="md:hidden">
          {/* Top Row - Logo and Buttons */}
          <div className="flex items-start justify-between pr-16">
            {/* Logo */}
            <a href="/" className={`transition-all duration-500 -mt-2 ${isMenuOpen ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
              <img 
                src="/logo.png" 
                alt="ARC AI - Beyond Visuals. Built with Vision" 
                className="w-auto h-[70px] sm:h-[80px] cursor-pointer"
                width="80"
                height="80"
              />
            </a>

            {/* CTA Button and Menu */}
            <div className="flex items-center gap-2">
              <button 
                className={`px-5 py-2.5 rounded-full border border-white/20 text-xs font-semibold tracking-wider text-white hover:bg-white/10 transition-all duration-300 ${isMenuOpen ? 'opacity-0 invisible w-0 px-0' : 'opacity-100 visible'}`}
                aria-label="Contact us"
              >
                LET'S TALK
              </button>
            </div>
          </div>

          {/* Bottom Row - Status and Time under logo */}
          <div className={`flex gap-6 mt-3 transition-all duration-300 ${isMenuOpen ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
            {/* Status and Date */}
            <div className="text-left space-y-1">
              <div className="flex items-center gap-2">
                <div className="relative w-2 h-2" aria-hidden="true">
                  <div className="absolute w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75"></div>
                  <div className="relative w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm font-medium text-white">Available for project</span>
              </div>
              <div className="text-[10px] text-white/60 pl-4">{availabilityDate}</div>
            </div>

            {/* Time */}
            <div className="text-left space-y-1">
              <time className="text-sm font-medium text-white">{formatTime}</time>
              <div className="text-[10px] text-white/60">{timezone}</div>
            </div>
          </div>
        </div>

        {/* Medium & Desktop Layout - Original horizontal layout */}
        <div className="hidden md:flex items-start justify-between pr-20 lg:pr-24">
          {/* Logo */}
          <a href="/" className={`transition-all duration-500 ${isScrolled ? "-mt-4" : "-mt-2"} ${isMenuOpen ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
            <img 
              src="/logo.png" 
              alt="ARC AI - Beyond Visuals. Built with Vision" 
              className={`w-auto transition-all duration-500 cursor-pointer ${
                isScrolled 
                  ? "h-[60px] lg:h-[80px] xl:h-[120px]" 
                  : "h-[80px] lg:h-[120px] xl:h-[160px]"
              }`}
              width="160"
              height="160"
            />
          </a>

          {/* Right side - Status, Time, and CTA */}
          <div className={`flex items-start gap-6 md:gap-8 lg:gap-12 transition-all duration-300 ${isMenuOpen ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
            {/* Status and Date */}
            <div className="text-left space-y-1">
              <div className="flex items-center gap-2">
                <div className="relative w-2.5 h-2.5" aria-hidden="true">
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-75"></div>
                  <div className="relative w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <span className="text-base lg:text-lg font-medium text-white">Available for project</span>
              </div>
              <div className="text-xs lg:text-sm text-white/60 pl-5">{availabilityDate}</div>
            </div>

            {/* Time */}
            <div className="text-left space-y-1">
              <time className="text-base lg:text-lg font-medium text-white">{formatTime}</time>
              <div className="text-xs lg:text-sm text-white/60">{timezone}</div>
            </div>

            {/* CTA Button and Menu - Close together */}
            <div className="flex items-center gap-2 md:gap-3">
              <button 
                className={`px-6 lg:px-8 py-3 lg:py-4 rounded-full border border-white/20 text-sm lg:text-base font-semibold tracking-wider text-white hover:bg-white/10 transition-all duration-300 ${isMenuOpen ? 'opacity-0 invisible w-0 px-0' : 'opacity-100 visible'}`}
                aria-label="Contact us"
              >
                LET'S TALK
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
