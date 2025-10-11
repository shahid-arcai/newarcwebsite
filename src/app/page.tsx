// Server Component - Optimized for SEO
import { Suspense } from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientsSection from "@/components/ClientsSection";
import Benefits from "@/components/Benefits";
import Integrations from "@/components/Integrations";
import Features from "@/components/Features";
import AIServices from "@/components/AIServices";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import SchemaOrg from "@/components/SchemaOrg";

// SEO Metadata for Homepage
export const metadata: Metadata = {
  title: "AI Web Design & Digital Marketing Agency UK | Sri Lanka | ARC Digital Canvas",
  description: "Leading AI-powered digital agency in UK & Sri Lanka. Expert web design, branding, AI automation, chatbots, content generation & digital marketing services. Transform your business with cutting-edge technology.",
  keywords: [
    "AI digital agency UK", "web design agency London", "AI automation UK", "digital marketing UK",
    "AI chatbot development UK", "web development agency UK", "branding agency UK",
    "AI digital agency Sri Lanka", "web design agency Colombo", "digital marketing Sri Lanka",
    "AI web design", "artificial intelligence marketing", "chatbot development", "workflow automation"
  ],
  openGraph: {
    title: "ARC Digital Canvas - AI Web Design & Digital Marketing Agency",
    description: "Leading AI-powered digital agency in UK & Sri Lanka. Transform your business with cutting-edge web design, AI automation, and digital marketing.",
    url: "https://arcai.agency",
    type: "website",
    images: [
      {
        url: "https://arcai.agency/logo.png",
        width: 1200,
        height: 630,
        alt: "ARC Digital Canvas - AI Digital Agency"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ARC Digital Canvas - AI Web Design & Digital Marketing",
    description: "Leading AI-powered digital agency in UK & Sri Lanka",
    images: ["https://arcai.agency/logo.png"]
  },
  alternates: {
    canonical: "https://arcai.agency"
  }
};

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center bg-black">
    <div className="animate-pulse text-white/60">Loading...</div>
  </div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background dark">
      {/* Schema.org Structured Data for SEO */}
      <SchemaOrg type="home" />
      
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
