import React from 'react';
import { motion } from "framer-motion";
import { FaAward } from 'react-icons/fa';

export function Certifications() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
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

  const certifications = [
    {
      title: "Stack Route (NIIT) Full Stack Developer",
      organization: "NIIT - QA2QE Program",
      date: "April 2018",
      location: "Bangalore",
      icon: <FaAward size={24} />
    },
    {
      title: "ISTQB Certified Software Test Engineer",
      organization: "ISTQB",
      date: "October 2012",
      location: "Pune",
      credential: "Certificate No: ITB-CTFL-0050888",
      icon: <FaAward size={24} />
    },
    {
      title: "Certified Software Test Engineer",
      organization: "Mindscripts Technologies",
      date: "July 2012",
      location: "",
      icon: <FaAward size={24} />
    }
  ];

  return (
    <motion.section
      id="certifications"
      className="section certifications-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeUp}
    >
      <motion.h3 variants={fadeUp}>CERTIFICATIONS</motion.h3>
      
      <motion.div className="certifications-grid" variants={stagger}>
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="certification-card"
            variants={fadeUp}
          >
            <div className="cert-icon">
              {cert.icon}
            </div>
            <div className="cert-content">
              <h4 className="cert-title">{cert.title}</h4>
              <p className="cert-org">{cert.organization}</p>
              <div className="cert-meta">
                <span className="cert-date">{cert.date}</span>
                {cert.location && <span className="cert-location"> • {cert.location}</span>}
              </div>
              {cert.credential && (
                <p className="cert-credential">{cert.credential}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
