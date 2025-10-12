"use client";

import { motion, Variants } from "framer-motion";
import "./ServicesSection.css";

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const services = [
  { id: "landing-pages", number: "001", title: "Landing pages" },
  { id: "smart-ad-campaigns", number: "002", title: "Smart Ad campaigns" },
  { id: "web-apps", number: "003", title: "Web apps" },
  { id: "smart-funnels", number: "004", title: "Smart funnels" },
  { id: "custom-backend", number: "005", title: "Custom backend systems" },
  { id: "brand-kits", number: "006", title: "Brand kits" },
];

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-content-container">
        <div className="services-headline">
          <div className="services-header">
            <motion.div
              className="services-tag-wrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={headingVariants}
            >
              <div className="services-tag">
                <p className="services-tag-text">services</p>
              </div>
            </motion.div>

            <motion.div
              className="services-text-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={headingVariants}
            >
              <h2 className="services-subtitle">How can we help</h2>
              <h2 className="services-title">Your business grow</h2>
            </motion.div>
          </div>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="services-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className="services-question"
                role="button"
                tabIndex={0}
                aria-expanded="false"
                aria-controls={`svc-panel-${service.id}`}
              >
                <div className="services-number services-number-dim">
                  {service.number}
                </div>
                <h5 className="services-service-title">{service.title}</h5>
                <div className="services-icon" aria-hidden="true">
                  <div className="services-plus-line"></div>
                  <div className="services-plus-line"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
