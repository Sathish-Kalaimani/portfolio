import React from 'react';
import { motion } from "framer-motion";

const experiences = [
  {
    year: "Oct 2022 - Present",
    role: "Senior Software Engineer",
    company: "Walmart | Sam's Club Supply Chain Technology",
    description: "Leading development of enterprise supply chain platform for optimizing retail operations. Architecting scalable UI/APIs with React, Java, Spring Boot, GCP, and Azure. Implementing GenAI/Copilot for accelerated development.",
    skills: ["Java", "Spring Boot", "React", "GCP", "Azure", "Databricks", "GenAI"]
  },
  {
    year: "Oct 2020 - Oct 2022",
    role: "Application Architect - Full Stack Java",
    company: "FedEx Services",
    description: "Developed microservices adapter utilizing Spring Boot and IBM MQ for modernizing legacy middleware. Delivered enterprise integration solutions with 0 UAT defects and received client recognition awards.",
    skills: ["Spring Boot", "IBM MQ", "REST APIs", "JMS", "SQL Server", "Microservices"]
  },
  {
    year: "Jul 2018 - Oct 2020",
    role: "Senior Software Engineer",
    company: "Walmart eCommerce | Digital Twin Platform",
    description: "Built digital twin simulation platform for eCommerce with Angular, Java, Spring Boot, and Azure. Engineered real-time data pipelines with Kafka and automated testing achieving 75% coverage.",
    skills: ["Angular", "Java", "Spring Boot", "Azure", "Kafka", "Event-Driven"]
  },
  {
    year: "Nov 2015 - Jul 2018",
    role: "Software Engineer",
    company: "Walmart Technology | Enterprise Pricing Systems",
    description: "Architected enterprise pricing platform reducing cloud costs by 80%. Led application development with Spring framework, achieving Outstanding Performance award and zero production defects.",
    skills: ["Java", "Spring", "Python", "Cloud Optimization", "REST APIs"]
  },
  {
    year: "Oct 2010 - Oct 2015",
    role: "Software Developer / QA Automation Engineer",
    company: "Wipro Technologies",
    description: "Started career in software testing and automation, developing Selenium-based test frameworks. Progressed to full-stack development, working on enterprise retail and manufacturing projects. Earned multiple awards for performance and quality delivery.",
    skills: ["Java", "Selenium", "Automation Testing", "SQL", "Web Development"]
  },
  {
    year: "May 2009 - Oct 2010",
    role: "System Administrator",
    company: "Retail Industry",
    description: "Managed IT systems and inventory operations for retail business. Handled stock management, sales reporting, and system administration. Developed foundational technical and business process skills.",
    skills: ["System Administration", "Business Operations", "Reporting", "IT Support"]
  }
];

export function Timeline() {
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

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.section
      id="experience"
      className="section timeline-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={stagger}
    >
      <motion.h3 variants={fadeUp}>EXPERIENCE</motion.h3>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="timeline-item"
            variants={slideInLeft}
          >
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="timeline-year">{exp.year}</span>
              <h4 className="timeline-role">{exp.role}</h4>
              <span className="timeline-company">{exp.company}</span>
              <p className="timeline-description">{exp.description}</p>
              <div className="timeline-skills">
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="timeline-skill">{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
