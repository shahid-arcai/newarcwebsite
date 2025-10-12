"use client";

import { useEffect, useState, useRef } from "react";

const ValuesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const values = [
    {
      icon: "https://framerusercontent.com/images/pl50MuFkjQJmFvW4MtWqcUUS58.png?lossless=1&width=480&height=480",
      title: "Accuracy",
      description: "We pride ourselves on meticulous, data-driven strategies that ensure every decision is precise and impactful."
    },
    {
      icon: "https://framerusercontent.com/images/vzVNjAMoxBATM3tFvlagtyKnMA.png?lossless=1&width=480&height=480",
      title: "Innovation",
      description: "We explore technologies and creative approaches to keep your brand ahead of the competition."
    },
    {
      icon: "https://framerusercontent.com/images/tQYfhgj9twihfX5X6a6CFQEvlw.png?lossless=1&width=480&height=480",
      title: "Speed",
      description: "In a fast-paced market, we act swiftly to seize opportunities and deliver timely results for your business."
    },
    {
      icon: "https://framerusercontent.com/images/QCsLAZ8TIxeX4pROkhzniqmw8.png?lossless=1&width=480&height=480",
      title: "Excellence",
      description: "We are committed to the highest standards, ensuring exceptional quality in everything that we do for you."
    },
    {
      icon: "https://framerusercontent.com/images/61XJUbr8mOZfpMVhFvn7G7L4WF0.png?lossless=1&width=480&height=480",
      title: "Efficiency",
      description: "Our streamlined processes and expert team ensure your marketing budget is used for maximum impact and return."
    },
    {
      icon: "https://framerusercontent.com/images/2QH4wfeVjAPrkpBXQEtQYWiZC1M.png?lossless=1&width=480&height=480",
      title: "Communication",
      description: "We maintain transparent and open lines of communication, keeping you informed and involved at every stage."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 px-6 bg-black"
      style={{
        willChange: 'transform',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
          }}
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{
              fontFamily: "'Inter', sans-serif"
            }}
          >
            What guides every step we take
          </h2>
          <p 
            className="text-base md:text-lg text-white/60 max-w-3xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif"
            }}
          >
            Our core values are the foundation of our work. They inspire us to innovate, collaborate, and consistently deliver excellence, ensuring that every project we undertake is a success.
          </p>
        </div>

        {/* Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{
            willChange: 'transform',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
          }}
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'none' : 'translateY(20px)',
                transition: `opacity 0.6s ease-out ${0.5 + index * 0.1}s, transform 0.6s ease-out ${0.5 + index * 0.1}s`
              }}
            >
              {/* Icon */}
              <div 
                className="w-20 h-20 mb-6 mx-auto rounded-lg overflow-hidden"
                style={{ opacity: isVisible ? 1 : 0 }}
              >
                <img
                  src={value.icon}
                  alt={`${value.title} icon`}
                  className="w-full h-full object-cover"
                  style={{
                    display: 'block',
                    borderRadius: 'inherit',
                    objectPosition: 'center center',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 
                  className="text-xl md:text-2xl font-bold text-white mb-4"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    transform: isVisible ? 'none' : 'translateY(10px)',
                    opacity: isVisible ? 1 : 0,
                    transition: `opacity 0.4s ease-out ${0.6 + index * 0.1}s, transform 0.4s ease-out ${0.6 + index * 0.1}s`
                  }}
                >
                  {value.title}
                </h3>
                <p 
                  className="text-sm md:text-base text-white/60"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    transform: isVisible ? 'none' : 'translateY(10px)',
                    opacity: isVisible ? 1 : 0,
                    transition: `opacity 0.4s ease-out ${0.7 + index * 0.1}s, transform 0.4s ease-out ${0.7 + index * 0.1}s`
                  }}
                >
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
