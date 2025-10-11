import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us - Leading AI Digital Agency UK & Sri Lanka",
  description: "Discover ARC Digital Canvas: A pioneering AI-powered digital agency with teams in UK and Sri Lanka. Learn about our mission to transform businesses through innovative web design, branding, and AI automation.",
  keywords: [
    "about ARC Digital Canvas",
    "AI digital agency UK",
    "digital agency Sri Lanka",
    "web design agency team",
    "AI automation experts",
    "digital transformation agency",
    "UK digital agency",
    "Colombo digital agency",
    "AI innovation agency",
    "digital marketing team UK"
  ],
  openGraph: {
    title: "About ARC Digital Canvas - AI Digital Agency UK & Sri Lanka",
    description: "Pioneering AI-powered digital agency with teams in UK and Sri Lanka. Transform your business with our expert web design, branding, and AI automation services.",
    url: "https://arcai.agency/about",
    type: "website",
    images: [
      {
        url: "https://arcai.agency/logo.png",
        width: 1200,
        height: 630,
        alt: "ARC Digital Canvas - About Our Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About ARC Digital Canvas - AI Digital Agency",
    description: "Pioneering AI-powered digital agency with teams in UK and Sri Lanka. Transform your business with innovation.",
    images: ["https://arcai.agency/logo.png"],
  },
  alternates: {
    canonical: "https://arcai.agency/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
