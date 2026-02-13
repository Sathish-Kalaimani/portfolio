import React, { useMemo } from 'react';
import { motion } from "framer-motion";
import { PictureFrame } from './PictureFrame';
import { CountUp } from './CountUp';
import { FaGithub, FaLinkedin, FaEnvelope, FaJava, FaReact, FaDocker, FaPython, FaAward } from 'react-icons/fa';
import { SiSpringboot, SiKubernetes } from 'react-icons/si';

export function Hero() {
  // Toggle this to show/hide "Available for opportunities" badge
  const isAvailableForOpportunities = false; // Set to false when not looking for jobs
  
  const name = "Sathish Kalaimani";
  const title = "Java Full Stack Solutions | Application Architect";
  const subtitle = "Senior Software Engineer";
  const tagline = "Specializing in designing and delivering scalable software that performs in the real world.";
  const location = "Bentonville, AR"; // Change to your location

  // Simple fade-in animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const fadeInFast = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  // Memoize background animations to prevent re-renders
  const floatAnimation = useMemo(() => ({
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }), []);

  return (
    <motion.section
      className="hero"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      {/* Animated background elements */}
      <motion.div 
        className="hero-bg-circle hero-bg-circle-1"
        animate={floatAnimation}
        style={{willChange:'transform'}}
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
        style={{willChange:'transform'}}
      />

      <div className="hero-inner">
        <motion.div
          className="hero-content"
          variants={fadeIn}
        >
          {/* Status Badge - Top Position */}
          <motion.div className="hero-top-badge" variants={fadeInFast}>
            <div className={`hero-badge ${isAvailableForOpportunities ? 'available' : 'unavailable'}`}>
              <span className="badge-dot"></span>
              <span>{isAvailableForOpportunities ? 'Open To New Opportunities' : 'Focused On Current Role'}</span>
            </div>
          </motion.div>

          <motion.h1 variants={fadeIn}>
            {name}
          </motion.h1>
          
          <motion.h2 variants={fadeIn}>
            {title}
          </motion.h2>

          <motion.p className="hero-subtitle" variants={fadeIn}>
            {subtitle} <span>@ </span><span className="hero-company">Walmart</span>
          </motion.p>
          
          <motion.p className="hero-tagline" variants={fadeIn}>
            {tagline}
          </motion.p>

          {/* Quick Stats Mini Bar */}
          <motion.div className="hero-quick-stats" variants={fadeInFast}>
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

          {/* Location Badge - Bottom Position */}
          <motion.div className="hero-bottom-badges" variants={fadeInFast}>
            <div className="hero-social">
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
                href="mailto:contact@sathishkalaimani.com"
                className="social-icon"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
            
            <div className="hero-badge hero-badge-location">
              <span>📍</span>
              <span>Based in {location}</span>
            </div>

            <div className="hero-cta">
              <a href="#work" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          variants={fadeIn}
        >
          <PictureFrame />
          
          {/* Achievements/Highlights Bar */}
          <motion.div 
            className="hero-achievements"
            variants={fadeIn}
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
                <CountUp end={8} duration={2} suffix="+" />
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
      </div>
    </motion.section>
  );
}
