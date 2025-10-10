import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/index.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/components/providers/query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ARC Digital Canvas - Beyond Visuals. Built with Vision.",
  description: "We build brands, websites, AI Automations, and Digital experiences with intention, clarity and care.",
  keywords: ["web design", "branding", "AI automation", "digital experiences", "web development"],
  authors: [{ name: "ARC Digital Canvas" }],
  openGraph: {
    title: "ARC Digital Canvas - Beyond Visuals. Built with Vision.",
    description: "We build brands, websites, AI Automations, and Digital experiences with intention, clarity and care.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
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
