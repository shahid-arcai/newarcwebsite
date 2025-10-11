"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Code2, Palette, Share2, Sparkles, FileText, Zap, MessageSquare } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const letterContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.15 },
  },
};

const letterVariant: Variants = {
  hidden: { y: "0.55em", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesPage() {
  const digitalServices = [
    {
      href: "/services/web-design-development",
      icon: <Code2 className="w-8 h-8" />,
      number: "01",
      title: "Web Design & Development",
      description: "Craft stunning, high-performance websites that captivate audiences and drive results.",
      tags: ["Responsive Design", "Modern Development", "SEO Optimization", "CMS Integration"]
    },
    {
      href: "/services/branding",
      icon: <Palette className="w-8 h-8" />,
      number: "02",
      title: "Branding",
      description: "Crafting visual identities that feel clear, timeless, and true to your brand.",
      tags: ["Logo Design", "Brand Strategy", "Visual Identity", "Brand Guidelines"]
    },
    {
      href: "/services/social-media",
      icon: <Share2 className="w-8 h-8" />,
      number: "03",
      title: "Social Media",
      description: "Branded templates and content systems to help you stay consistent and scroll-worthy.",
      tags: ["Content Strategy", "Instagram Design", "Story Kits", "Multi-Platform"]
    },
    {
      href: "/services/motion-design",
      icon: <Sparkles className="w-8 h-8" />,
      number: "04",
      title: "Motion Design",
      description: "Thoughtful animations that add rhythm, clarity, and life to your interface.",
      tags: ["Micro-interactions", "Scroll Effects", "Hover States", "Framer Motion"]
    }
  ];

  const aiServices = [
    {
      href: "/services/ai-content-generation",
      icon: <FileText className="w-8 h-8" />,
      number: "05",
      title: "AI Content Generation",
      description: "Seamless content creation that generates captivating, high-quality content aligned with your brand.",
      tags: ["Blog Posts", "Social Media", "SEO Content", "Multi-Language"]
    },
    {
      href: "/services/ai-automated-workflows",
      icon: <Zap className="w-8 h-8" />,
      number: "06",
      title: "Automated Workflows",
      description: "Automate workflows to streamline tasks, boost efficiency, and save time.",
      tags: ["Process Automation", "Integrations", "Task Management", "24/7 Operations"]
    },
    {
      href: "/services/ai-chatbots",
      icon: <MessageSquare className="w-8 h-8" />,
      number: "07",
      title: "AI-Powered Chatbots",
      description: "AI-driven chatbots with advanced cognitive technologies to elevate customer support.",
      tags: ["Natural Language", "24/7 Support", "Multi-Platform", "Analytics"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 73, 37, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={letterContainer}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
              {["OUR", "SERVICES"].map((word, i) => (
                <span key={i} className="block mb-2">
                  {word.split("").map((char, j) => (
                    <motion.span
                      key={j}
                      className="inline-block"
                      variants={letterVariant}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12"
          >
            From digital marketing to AI-powered solutions, we deliver comprehensive services 
            that drive growth and transform your business.
          </motion.p>
        </div>
      </section>

      {/* Digital Marketing Services */}
      <section className="py-20 px-4 md:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <p className="text-xs tracking-[0.25em] text-neutral-500 uppercase">DIGITAL MARKETING</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent">
                Digital Services
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {digitalServices.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="group block p-8 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-accent/50 transition-all hover:bg-neutral-900 h-full"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-accent">{service.number}</span>
                        <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-neutral-400 mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-xs text-neutral-400 group-hover:border-accent/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 px-4 md:px-8 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <p className="text-xs tracking-[0.25em] text-neutral-500 uppercase">AI SOLUTIONS</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent">
                AI-Powered Services
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="group block p-8 bg-black border border-neutral-800 rounded-xl hover:border-accent/50 transition-all hover:bg-neutral-900 h-full"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-accent">{service.number}</span>
                        <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-neutral-400 mb-6 text-sm">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-neutral-900 border border-neutral-700 rounded-full text-xs text-neutral-400 group-hover:border-accent/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-neutral-400 mb-8">
              Let's discuss how our services can help you achieve your goals. Get in touch today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:scale-105 transition-transform"
            >
              Get Started
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
