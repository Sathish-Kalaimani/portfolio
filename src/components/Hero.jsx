import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { PictureFrame } from './PictureFrame';
import { CountUp } from './CountUp';
import { FaGithub, FaLinkedin, FaEnvelope, FaJava, FaReact, FaDocker, FaPython, FaAward } from 'react-icons/fa';
import { SiSpringboot, SiKubernetes } from 'react-icons/si';

export function Hero() {
  // Toggle this to show/hide "Available for opportunities" badge
  const isAvailableForOpportunities = false; // Set to false when not looking for jobs
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1200], [0, 200]);
  const opacity = useTransform(scrollY, [0, 1000], [1, 0]);
  const scale = useTransform(scrollY, [0, 1000], [1, 0.6]);
  
  const name = "Sathish Kalaimani";
  const title = "SENIOR SOFTWARE ENGINEER";
  const tagline = "Building enterprise-grade solutions for supply chain & retail.";

  const textVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01, // Even faster: was 0.02
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

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.section
      className="hero"
      initial="hidden"
      animate="visible"
      variants={stagger}
      style={{ scale, opacity }}
    >
      {/* Animated background elements */}
      <motion.div 
        className="hero-bg-circle hero-bg-circle-1"
        animate={floatAnimation}
        style={{ scale, opacity }}
      />
      <motion.div 
        className="hero-bg-circle hero-bg-circle-2"
        animate={{
          y: [0, 20, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        style={{ scale, opacity }}
      />

      <motion.div 
        className="hero-inner"
        style={{ y, opacity, scale }}
      >
        <motion.div
          className="hero-content"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.1, duration: 0.1 }}
        >
          <motion.h1 variants={textVariants} initial="hidden" animate="visible">
            {name.split("").map((char, index) => (
              <motion.span key={`${char}-${index}`} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.h2 
            variants={textVariants} 
            initial="hidden" 
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            {title.split("").map((char, index) => (
              <motion.span key={`${char}-${index}`} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
            <span> @ </span><span className="hero-company">Walmart</span>
          </motion.h2>
          
          <motion.p
            className="hero-tagline"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            {tagline.split("").map((char, index) => (
              <motion.span key={`${char}-${index}`} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.p>

          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.6 }}
          >
            <a href="#work" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </motion.div>

          <motion.div 
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.6 }}
          >
            <a 
              href="https://github.com/Sathish-Kalaimani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sathish-kalaimani-83927557/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="mailto:Sathish.Kalaimani7@gmail.com"
              className="social-icon"
            >
              <FaEnvelope size={24} />
            </a>
          </motion.div>

          {/* Quick Stats Mini Bar */}
          <motion.div 
            className="hero-quick-stats"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.6 }}
          >
            <div className="quick-stat-icon">
              <FaJava size={20} />
            </div>
            <div className="quick-stat-icon">
              <SiSpringboot size={20} />
            </div>
            <div className="quick-stat-icon">
              <FaReact size={20} />
            </div>
            <div className="quick-stat-icon">
              <FaDocker size={20} />
            </div>
            <div className="quick-stat-icon">
              <SiKubernetes size={20} />
            </div>
            <div className="quick-stat-icon">
              <FaPython size={20} />
            </div>
          </motion.div>

          {/* Bottom Status Badges */}
          <motion.div 
            className="hero-bottom-badges"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.4, duration: 0.6 }}
          >
            <div className={`hero-badge ${isAvailableForOpportunities ? 'available' : 'unavailable'}`}>
              <span className="badge-dot"></span>
              <span>{isAvailableForOpportunities ? 'Open To New Opportunities' : 'Focused On Current Role'}</span>
            </div>
            
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.1, duration: 0.1 }}
        >
          <PictureFrame />
          
          {/* Achievements/Highlights Bar */}
          <motion.div 
            className="hero-achievements"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="achievement-item">
              <div className="achievement-value">
                <CountUp end={15} duration={2} suffix="+" />
              </div>
              <div className="achievement-label">Years Exp</div>
            </div>
            <div className="achievement-divider"></div>
            <div className="achievement-item">
              <div className="achievement-value">
                <CountUp end={10} duration={2} suffix="+" />
              </div>
              <div className="achievement-label">Awards</div>
            </div>
            <div className="achievement-divider"></div>
            <div className="achievement-item">
              <div className="achievement-value">
                <FaAward size={18} style={{ color: 'var(--accent)' }} />
                <span style={{ marginLeft: '6px' }}>
                  <CountUp end={3} duration={2} />
                </span>
              </div>
              <div className="achievement-label">Certifications</div>
            </div>
            <div className="achievement-divider"></div>
            <div className="achievement-item">
              <div className="achievement-value">Fortune #1</div>
              <div className="achievement-label">Company</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
