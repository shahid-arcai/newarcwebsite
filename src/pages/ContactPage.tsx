import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  // Check if mobile view
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[rgb(10,10,10)] dark">
      <Navbar />

      {/* Contact Section */}
      <section className="pt-48 md:pt-56 lg:pt-64 pb-20 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 xl:gap-32">
            {/* Left Column */}
            <div className="space-y-12">
              {/* Title */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-medium text-[rgb(119,119,119)] uppercase tracking-wider">
                    (CONTACT US)
                  </p>
                </div>

                <div>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white uppercase leading-[0.9] tracking-tight">
                    LET'S
                    <br />
                    WORK
                    <br />
                    TOGETHER
                  </h1>
                </div>
              </div>

              {/* Description */}
              <div className="max-w-md">
                <p className="text-base text-[rgb(119,119,119)] leading-relaxed">
                  Have a project in mind? We'd love to hear about it. Let's create something great together!
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="space-y-8">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-[rgb(20,20,20)] border border-[rgb(40,40,40)] rounded-3xl p-8 lg:p-10"
              >
                {/* Name & Email Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder={isMobile ? "Name" : "Enter your name"}
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-[rgb(30,30,30)] border-none text-white placeholder:text-[rgb(90,90,90)] focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl h-14 px-6"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-[rgb(30,30,30)] border-none text-white placeholder:text-[rgb(90,90,90)] focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl h-14 px-6"
                    />
                  </div>
                </div>

                {/* Company & Service Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="company"
                      placeholder={isMobile ? "Company" : "Company name"}
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-[rgb(30,30,30)] border-none text-white placeholder:text-[rgb(90,90,90)] focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl h-14 px-6"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="service"
                      placeholder={isMobile ? "Service" : "Service interested"}
                      value={formData.service}
                      onChange={handleChange}
                      className="bg-[rgb(30,30,30)] border-none text-white placeholder:text-[rgb(90,90,90)] focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl h-14 px-6"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <Textarea
                    name="message"
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-[rgb(30,30,30)] border-none text-white placeholder:text-[rgb(90,90,90)] focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl min-h-[160px] resize-none px-6 py-4"
                  />
                </div>

                {/* Submit Section */}
                <div className="space-y-6 pt-2">
                  <div className="flex flex-col md:flex-row items-start md:justify-between gap-6">
                    <p className="text-sm text-[rgb(119,119,119)] leading-relaxed order-2 md:order-1">
                      By submitting you agree to<br />our <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span>
                    </p>

                    <Button
                      type="submit"
                      className="h-14 px-10 bg-transparent hover:bg-[rgb(255,73,37)] text-[rgb(255,73,37)] hover:text-[rgb(10,10,10)] font-bold uppercase tracking-wider rounded-full border-2 border-[rgb(255,73,37)] transition-all duration-300 flex items-center gap-2 whitespace-nowrap w-full md:w-auto order-1 md:order-2"
                    >
                      SUBMIT
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-[-45deg]">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Button>
                  </div>
                </div>
              </form>

              {/* Book a Call */}
              <div className="text-left pl-2">
                <p className="text-base text-[rgb(119,119,119)]">
                  Prefer to hop on a call?{" "}
                  <a
                    href="https://cal.com"
                    target="_blank"
                    rel="noopener"
                    className="text-[rgb(255,73,37)] hover:text-[rgb(255,93,57)] underline transition-colors font-medium"
                  >
                    Book a call
                  </a>{" "}
                  instead.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Logos Carousel */}
          <div className="mt-20 mb-12">
            <div className="text-center mb-8">
              <p className="text-sm text-[rgb(119,119,119)] uppercase tracking-wider">
                TRUSTED BY 100+ CLIENTS
              </p>
            </div>
            
            <div className="relative overflow-hidden">
              {/* Gradient masks on sides */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[rgb(10,10,10)] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[rgb(10,10,10)] to-transparent z-10 pointer-events-none"></div>
              
              {/* Scrolling container */}
              <div className="flex gap-12 animate-scroll-trust">
                {/* First set of logos */}
                {Array.from({ length: 21 }, (_, i) => (
                  <div
                    key={`logo-1-${i}`}
                    className="flex-shrink-0 w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 p-4 flex items-center justify-center hover:border-white/20 transition-all duration-300"
                  >
                    <img
                      src={`/trust${i + 1}.png`}
                      alt={`Client ${i + 1}`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {Array.from({ length: 21 }, (_, i) => (
                  <div
                    key={`logo-2-${i}`}
                    className="flex-shrink-0 w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 p-4 flex items-center justify-center hover:border-white/20 transition-all duration-300"
                  >
                    <img
                      src={`/trust${i + 1}.png`}
                      alt={`Client ${i + 1}`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-24 mb-16">
            <div className="h-px w-full bg-[rgb(40,40,40)]"></div>
          </div>

          {/* Visit Us Section */}
          <div className="space-y-12">
            {/* Title */}
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(202,202,202)] uppercase tracking-tight">
                Contact Information
              </h2>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Email Address */}
              <div className="group relative space-y-4 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden">
                {/* Glass shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
                {/* Reflection effect */}
                <div className="absolute -top-[50%] -right-[50%] w-full h-full bg-gradient-to-br from-white/5 to-transparent rotate-45 group-hover:opacity-75 opacity-50 transition-opacity duration-500 pointer-events-none"></div>
                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div>
                    <p className="text-xs font-medium text-[rgb(119,119,119)] uppercase tracking-wider">
                      (EMAIL ADDRESS)
                    </p>
                  </div>
                  <div>
                    <a 
                      href="mailto:arc.ai.agencylk@gmail.com"
                      className="text-lg text-[rgb(255,73,37)] hover:text-[rgb(255,93,57)] transition-colors leading-relaxed block"
                    >
                      arc.ai.agencylk@gmail.com
                    </a>
                    <p className="text-sm text-[rgb(119,119,119)] mt-2">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="group relative space-y-4 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden">
                {/* Glass shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
                {/* Reflection effect */}
                <div className="absolute -top-[50%] -right-[50%] w-full h-full bg-gradient-to-br from-white/5 to-transparent rotate-45 group-hover:opacity-75 opacity-50 transition-opacity duration-500 pointer-events-none"></div>
                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div>
                    <p className="text-xs font-medium text-[rgb(119,119,119)] uppercase tracking-wider">
                      (PHONE NUMBERS)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <a 
                      href="tel:+447466368427"
                      className="text-lg text-[rgb(202,202,202)] hover:text-white transition-colors leading-relaxed block"
                    >
                      +44 7466 368427 (UK)
                    </a>
                    <a 
                      href="tel:+94771852522"
                      className="text-lg text-[rgb(202,202,202)] hover:text-white transition-colors leading-relaxed block"
                    >
                      +94 771852522 (Sri Lanka)
                    </a>
                    <p className="text-sm text-[rgb(119,119,119)] mt-2">
                      Available 9 AM - 6 PM EST
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="group relative space-y-4 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden">
                {/* Glass shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
                {/* Reflection effect */}
                <div className="absolute -top-[50%] -right-[50%] w-full h-full bg-gradient-to-br from-white/5 to-transparent rotate-45 group-hover:opacity-75 opacity-50 transition-opacity duration-500 pointer-events-none"></div>
                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div>
                    <p className="text-xs font-medium text-[rgb(119,119,119)] uppercase tracking-wider">
                      (OFFICE LOCATIONS)
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-[rgb(202,202,202)] leading-relaxed">
                      Colombo 4, Sri Lanka
                    </p>
                    <p className="text-lg text-[rgb(202,202,202)] leading-relaxed mt-2">
                      Birmingham, UK
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="group relative space-y-4 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden">
                {/* Glass shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
                {/* Reflection effect */}
                <div className="absolute -top-[50%] -right-[50%] w-full h-full bg-gradient-to-br from-white/5 to-transparent rotate-45 group-hover:opacity-75 opacity-50 transition-opacity duration-500 pointer-events-none"></div>
                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div>
                    <p className="text-xs font-medium text-[rgb(119,119,119)] uppercase tracking-wider">
                      (BUSINESS HOURS)
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-[rgb(202,202,202)] leading-relaxed">
                      Monday - Friday: 9 AM - 6 PM
                    </p>
                    <p className="text-lg text-[rgb(202,202,202)] leading-relaxed mt-2">
                      Weekend: By appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
