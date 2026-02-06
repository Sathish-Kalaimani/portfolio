import React from 'react';
import { motion } from "framer-motion";

export function About() {
  const aboutText = "Senior Software Engineer with 15+ years of experience designing and delivering scalable, enterprise-grade solutions across supply chain, retail, and digital twin domains. Proven expertise in architecting cloud-native microservices with Java, Spring Boot, React, and modern cloud platforms (GCP, Azure). Passionate about leveraging GenAI/Copilot to accelerate development and delivering solutions with measurable impact—from achieving 100% code coverage to reducing cloud costs by 80%.";

  const textVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.01 },
    },
  };

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
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  return (
    <motion.section
      id="about"
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeUp}
    >
      <motion.h3 variants={fadeUp}>ABOUT</motion.h3>
      <motion.p 
        className="text" 
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        {aboutText.split("").map((char, index) => (
          <motion.span key={`${char}-${index}`} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.p>

      <motion.ul className="list" variants={stagger}>
        <motion.li variants={fadeUp}>Cloud-native architecture & microservices</motion.li>
        <motion.li variants={fadeUp}>Enterprise system design & scalability</motion.li>
        <motion.li variants={fadeUp}>Full-stack development (Java, React, Spring Boot)</motion.li>
        <motion.li variants={fadeUp}>GenAI/Copilot adoption & DevOps excellence</motion.li>
      </motion.ul>

      <motion.a className="btn ghost" href="/Sathish-Kalaimani-Resume.pdf" download variants={scaleIn}>DOWNLOAD CV</motion.a>
    </motion.section>
  );
}
