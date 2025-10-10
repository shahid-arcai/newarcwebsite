"use client";

import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy load components below the fold for better performance
const ClientsSection = lazy(() => import("@/components/ClientsSection"));
const Benefits = lazy(() => import("@/components/Benefits"));
const Integrations = lazy(() => import("@/components/Integrations"));
const Features = lazy(() => import("@/components/Features"));
const AIServices = lazy(() => import("@/components/AIServices"));
const WhyUs = lazy(() => import("@/components/WhyUs"));
const Services = lazy(() => import("@/components/Services"));
const Process = lazy(() => import("@/components/Process"));
const CTA = lazy(() => import("@/components/CTA"));
const Footer = lazy(() => import("@/components/Footer"));
const FloatingActions = lazy(() => import("@/components/FloatingActions"));

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center bg-black">
    <div className="animate-pulse text-white/60">Loading...</div>
  </div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background dark">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-white focus:top-4 focus:left-4"
      >
        Skip to main content
      </a>
      
      <Navbar />
      
      {/* Main content wrapper with semantic HTML */}
      <main id="main-content" role="main">
        {/* Above the fold - load immediately */}
        <Hero />
        
        {/* Below the fold - lazy load with Suspense */}
        <Suspense fallback={<SectionLoader />}>
          <WhyUs />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Benefits />
        </Suspense>
        
        {/* Clients Section with spinning logos - moved under WHY CHOOSE US */}
        <Suspense fallback={<SectionLoader />}>
          <ClientsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Features />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <AIServices />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Integrations />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Process />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <CTA />
        </Suspense>
      </main>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
      
      <Suspense fallback={null}>
        <FloatingActions />
      </Suspense>
    </div>
  );
}
