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

  return (
    <motion.section
      id="contact"
      className="section contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={stagger}
    >
      <motion.h3 variants={fadeUp}>CONTACT</motion.h3>
      <motion.p variants={fadeUp}>Let's connect and build something great together.</motion.p>
      <motion.p className="email" variants={slideInLeft}>
        <a href="mailto:Sathish.Kalaimani7@gmail.com">Sathish.Kalaimani7@gmail.com</a>
      </motion.p>

      <motion.a className="btn primary" href="mailto:Sathish.Kalaimani7@gmail.com" variants={scaleIn}>GET IN TOUCH</motion.a>
    </motion.section>
  );
}
