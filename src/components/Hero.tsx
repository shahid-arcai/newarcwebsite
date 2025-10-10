import { ArrowUpRight } from "lucide-react";
import { memo, useEffect, useRef } from "react";

const Hero = memo(() => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // iOS/iPadOS-specific video autoplay fix
    const video = videoRef.current;
    if (video) {
      // Add specific attributes for better iOS/iPad compatibility
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');
      video.setAttribute('x5-playsinline', 'true');
      
      // Force load and play
      video.load();
      
      // Attempt to play with error handling
      const attemptPlay = () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Video autoplay prevented:", error);
            // Retry play on user interaction for iOS/iPad
            const handleInteraction = () => {
              video.play().catch(e => console.log("Retry play failed:", e));
              document.removeEventListener('touchstart', handleInteraction);
              document.removeEventListener('click', handleInteraction);
              document.removeEventListener('scroll', handleInteraction);
            };
            document.addEventListener('touchstart', handleInteraction, { once: true, passive: true });
            document.addEventListener('click', handleInteraction, { once: true });
            document.addEventListener('scroll', handleInteraction, { once: true, passive: true });
          });
        }
      };
      
      // Try to play immediately
      attemptPlay();
      
      // Also try after a short delay (helps with some iOS/iPad issues)
      setTimeout(attemptPlay, 100);
    }
  }, []);

  return (
    <section 
      className="relative h-screen flex flex-col overflow-hidden" 
      aria-label="Hero section"
    >
      {/* Video Background - Full Screen Edge to Edge */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/herovideo.mp4"
          preload="auto"
          playsInline
          autoPlay
          loop
          muted
          webkit-playsinline="true"
          className="w-full h-full object-cover scale-100"
          style={{ transformOrigin: 'center center' }}
          aria-hidden="true"
          poster="/placeholder.svg"
        >
          <source src="/herovideo.mp4" type="video/mp4" />
          <track kind="captions" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        {/* Circular/Radial fade at edges (vignette effect) */}
        <div 
          className="absolute inset-0" 
          style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.95) 100%)' }}
          aria-hidden="true"
        />
      </div>

      {/* Content - Positioned over video */}
      <div className="relative z-10 h-full flex flex-col px-6 md:px-8 lg:px-12 pt-32 md:pt-24 lg:pt-40 pb-8">
        {/* Mobile & Small Screens - Redesigned layout */}
        <div className="flex-1 md:hidden flex flex-col h-full max-w-[1800px] mx-auto w-full">
          {/* Top Section - Main Headline on Right */}
          <div className="flex justify-end pt-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-white/60 text-right" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
              Beyond Visuals.
              <br />
              Built with Vision.
            </h1>
          </div>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Bottom Section - Description, Logos and CTA */}
          <div className="space-y-6 pb-4">
            {/* Description */}
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-lg sm:text-xl leading-relaxed text-center text-white" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700 }}>
                We build brands, websites, and digital experiences{" "}
                <span className="text-white/60">
                  with intention, clarity and care.
                </span>
              </h2>
            </div>

            {/* Trusted By Logos - Horizontal with label on same row */}
            <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }} role="region" aria-label="Trusted by companies">
              <p className="text-xs text-white/60 uppercase tracking-wider whitespace-nowrap">
                TRUSTED BY:
              </p>
              <div className="relative overflow-hidden mask-gradient flex-1">
                <div className="flex gap-6 animate-scroll">
                  {[...Array(3)].map((_, setIndex) => (
                    <div key={setIndex} className="flex gap-6 shrink-0">
                      {[...Array(21)].map((_, i) => (
                        <img
                          key={i}
                          src={`/trust${i + 1}.png`}
                          alt={`Trusted client logo ${i + 1}`}
                          className="h-12 w-auto hover:scale-105 transition-transform"
                          loading="eager"
                          width="100"
                          height="48"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button - Full Width */}
            <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <button 
                className="group relative w-full px-8 py-4 rounded-full border-2 border-primary hover:bg-primary transition-all duration-300 overflow-hidden"
                aria-label="Start a project with ARC AI"
              >
                <span className="relative z-10 flex items-center justify-center gap-3 text-base font-bold tracking-wide text-primary group-hover:text-white transition-colors">
                  START A PROJECT
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Medium Screens (iPad) - Custom Layout */}
        <div className="hidden md:flex lg:hidden flex-col justify-between h-full max-w-[1800px] mx-auto w-full min-h-0">
          {/* Top Section - Main Headline on Right with spacing */}
          <div className="flex items-start justify-end pt-8 md:pt-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] md:leading-[0.95] tracking-tight text-white text-right" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
              Beyond Visuals.
              <br />
              <span className="text-white/60">Built with Vision.</span>
            </h1>
          </div>

          {/* Bottom Section - Description, Trusted By and CTA on Left */}
          <div className="flex items-end pb-8 md:pb-12">
            <div className="space-y-4 md:space-y-6 w-full md:w-auto">
              {/* Description */}
              <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <h2 className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-2xl text-white" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  We build brands, websites, AI Automations, and Digital experiences{" "}
                  <span className="text-white/60">
                    with intention, clarity and care.
                  </span>
                </h2>
              </div>

              {/* Trusted By Logos - Bottom Left */}
              <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }} role="region" aria-label="Trusted by companies">
                <p className="text-xs text-white/60 uppercase tracking-wider whitespace-nowrap">
                  TRUSTED BY:
                </p>
                <div className="relative overflow-hidden mask-gradient max-w-md flex-1">
                  <div className="flex gap-6 md:gap-8 animate-scroll">
                    {[...Array(3)].map((_, setIndex) => (
                      <div key={setIndex} className="flex gap-6 md:gap-8 shrink-0">
                        {[...Array(21)].map((_, i) => (
                          <img
                            key={i}
                            src={`/trust${i + 1}.png`}
                            alt={`Trusted client logo ${i + 1}`}
                            className="h-10 md:h-12 w-auto hover:scale-105 transition-transform"
                            loading="eager"
                            width="100"
                            height="48"
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button - Under Trusted By */}
              <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
                <button 
                  className="group relative px-8 md:px-12 py-3 md:py-4 rounded-full border-2 border-primary hover:bg-primary transition-all duration-300 overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
                  aria-label="Start a project with ARC AI"
                >
                  <span className="relative z-10 flex items-center gap-3 text-sm md:text-base font-semibold tracking-wide text-primary group-hover:text-white transition-colors">
                    START A PROJECT
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Large Screens - Original 2-column layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 max-w-[1800px] mx-auto w-full flex-1">
          {/* Left Side - Description at bottom */}
          <div className="flex flex-col justify-end h-full">
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl xl:text-3xl font-medium leading-relaxed max-w-xl text-white" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                We build brands, websites,
                <br />
                AI Automations, and Digital experiences{" "}
                <span className="text-white/60">
                  with intention, clarity and care.
                </span>
              </h2>

              {/* Trusted By Logos */}
              <div className="space-y-3">
                <p className="text-xs text-white/60 uppercase tracking-wider">
                  TRUSTED BY:
                </p>
                <div className="relative overflow-hidden mask-gradient">
                  <div className="flex gap-8 animate-scroll">
                    {[...Array(3)].map((_, setIndex) => (
                      <div key={setIndex} className="flex gap-8 shrink-0">
                        {[...Array(21)].map((_, i) => (
                          <img
                            key={i}
                            src={`/trust${i + 1}.png`}
                            alt={`Trusted client logo ${i + 1}`}
                            className="h-12 w-auto hover:scale-105 transition-transform"
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Main Heading and CTA */}
          <div className="flex flex-col justify-between h-full">
            {/* Main Headline */}
            <div className="text-right animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h1 className="text-3xl xl:text-[64px] font-bold leading-[0.9] tracking-tight text-white" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                Beyond
                <br />
                Visuals.
                <br />
                <span className="text-white/60">Built with</span>
                <br />
                <span className="text-white/60">Vision.</span>
              </h1>
            </div>

            {/* CTA Button - Bottom Right */}
            <div className="flex justify-end mt-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <button 
                className="group relative px-8 py-4 rounded-full border-2 border-primary hover:bg-primary transition-all duration-300 overflow-hidden"
                aria-label="Start a project with ARC AI"
              >
                <span className="relative z-10 flex items-center gap-3 text-sm font-semibold tracking-wide text-primary group-hover:text-white transition-colors">
                  START A PROJECT
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
