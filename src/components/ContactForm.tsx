"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
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
  );
}
