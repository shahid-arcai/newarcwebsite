import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/index.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/components/providers/query-provider";

const inter = Inter({ subsets: ["latin"] });

// Comprehensive SEO Metadata for UK and Sri Lankan markets
export const metadata: Metadata = {
  metadataBase: new URL('https://arcai.agency'),
  title: {
    default: "ARC Digital Canvas - AI Web Design & Digital Marketing Agency UK | Sri Lanka",
    template: "%s | ARC Digital Canvas"
  },
  description: "Leading AI-powered digital agency in UK & Sri Lanka. Expert web design, branding, AI automation, chatbots, content generation & digital marketing services. Transform your business with cutting-edge technology.",
  keywords: [
    // UK Market Keywords
    "AI digital agency UK", "web design agency London", "AI automation UK", "digital marketing UK",
    "AI chatbot development UK", "web development agency UK", "branding agency UK",
    "AI content generation UK", "automated workflows UK", "digital transformation UK",
    // Sri Lanka Market Keywords
    "AI digital agency Sri Lanka", "web design agency Colombo", "AI automation Sri Lanka",
    "digital marketing Sri Lanka", "web development Sri Lanka", "branding agency Sri Lanka",
    "AI chatbot Sri Lanka", "digital agency Colombo", "website design Sri Lanka",
    // General Keywords
    "AI web design", "artificial intelligence marketing", "AI powered website",
    "chatbot development", "workflow automation", "content generation AI",
    "custom web design", "brand identity design", "digital experience design",
    "motion design", "social media marketing", "SEO optimization"
  ],
  authors: [{ name: "ARC Digital Canvas", url: "https://arcai.agency" }],
  creator: "ARC Digital Canvas",
  publisher: "ARC Digital Canvas",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://arcai.agency',
    languages: {
      'en-GB': 'https://arcai.agency',
      'en-LK': 'https://arcai.agency',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    alternateLocale: ['en_LK'],
    url: 'https://arcai.agency',
    siteName: 'ARC Digital Canvas',
    title: 'ARC Digital Canvas - AI Web Design & Digital Marketing Agency UK | Sri Lanka',
    description: 'Leading AI-powered digital agency in UK & Sri Lanka. Expert web design, branding, AI automation, chatbots, content generation & digital marketing services.',
    images: [
      {
        url: 'https://arcai.agency/logo.png',
        width: 1200,
        height: 630,
        alt: 'ARC Digital Canvas - AI Digital Agency',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARC Digital Canvas - AI Web Design & Digital Marketing Agency',
    description: 'Leading AI-powered digital agency in UK & Sri Lanka. Expert web design, branding, AI automation & digital marketing.',
    images: ['https://arcai.agency/logo.png'],
    creator: '@arcdigitalcanvas',
    site: '@arcdigitalcanvas',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    // yandex: 'your-yandex-verification-code', // Optional
    // bing: 'your-bing-verification-code', // Optional
  },
  category: 'technology',
  classification: 'Business Services',
  other: {
    // Geo-targeting for UK
    'geo.region': 'GB',
    'geo.placename': 'United Kingdom',
    // Geo-targeting for Sri Lanka
    'geo.region.secondary': 'LK',
    'geo.placename.secondary': 'Sri Lanka',
    // Additional SEO tags
    'distribution': 'global',
    'revisit-after': '7 days',
    'language': 'English',
    'coverage': 'Worldwide',
    'rating': 'General',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Comprehensive Favicon Set for All Devices & Platforms */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/favicon-128x128.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/favicon-256x256.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
        
        {/* Apple Touch Icons for iOS */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Android Chrome Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <QueryProvider>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
