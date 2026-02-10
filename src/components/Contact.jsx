import React from 'react';
import { motion } from "framer-motion";

export function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.4, 0.25, 1],
        opacity: { duration: 0.6 }
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.9, 
        ease: [0.25, 0.4, 0.25, 1],
        opacity: { duration: 0.7 }
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const float = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatSlow = {
    y: [0, -15, 0],
    x: [0, 10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.section
      id="contact"
      className="section contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={stagger}
    >
      {/* Animated background elements */}
      <motion.div 
        className="contact-bg-element contact-bg-1"
        animate={float}
      />
      <motion.div 
        className="contact-bg-element contact-bg-2"
        animate={floatSlow}
      />
      <motion.div 
        className="contact-bg-element contact-bg-3"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />

      <motion.h3 variants={fadeUp}>CONTACT</motion.h3>
      <motion.div className="contact-content">
      
      <motion.p variants={fadeUp}>Let's connect and build something great together.</motion.p>
      <motion.p className="email" variants={slideInLeft}>
        <a href="mailto:contact@sathishkalaimani.com">Contact@SathishKalaimani.com</a>
      </motion.p>

      <motion.a className="btn primary" href="mailto:contact@sathishkalaimani.com" variants={scaleIn}>GET IN TOUCH</motion.a>
      </motion.div>
      
    </motion.section>
  );
}
