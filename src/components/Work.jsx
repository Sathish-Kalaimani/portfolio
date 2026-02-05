import React from 'react';
import { motion } from "framer-motion";

const projects = [
  {
    title: "Enterprise Supply Chain Platform",
    description: "Architected and developed scalable UI/APIs for a cloud-based supply chain management platform. Leveraged GenAI/Copilot for automated testing and code review. Built forecasting screens, appointment management features, and email automation. Achieved exceptional code coverage and reduced cloud infrastructure costs by 80%.",
    tech: "Java · Spring Boot · React · GCP · Azure · Databricks · REST · SQL Server",
    liveUrl: null,
    codeUrl: null,
    impact: "100% code coverage · 80% cost reduction · <2 day issue resolution"
  },
  {
    title: "Digital Twin Simulation Platform",
    description: "Led development of an innovative digital twin platform integrating plant simulation with real-time production data. Built end-to-end workflow automation for data extraction, processing, and model feeding. Developed React-based framework and Spring Boot backend for scalable digital twin applications.",
    tech: "Java · Spring Boot · React · Splunk · IBM Informix · Cassandra · MongoDB",
    liveUrl: null,
    codeUrl: null,
    impact: "Delivered ahead of schedule · Established reusable framework"
  },
  {
    title: "Enterprise Pricing System",
    description: "Engineered large-scale pricing platform with comprehensive automation suite achieving 75% test automation coverage. Developed web-based testing tool reducing regression cycles from days to hours. Integrated multiple database systems for high-performance data processing with zero production defects.",
    tech: "Java · Selenium · Cucumber · SAP Hana · Cassandra · MS SQL Server",
    liveUrl: null,
    codeUrl: null,
    impact: "0 UAT defects · 75% automation coverage · 90% regression test coverage"
  },
  {
    title: "Journey Management System",
    description: "Developed cloud-native microservices platform for shipment tracking and management. Implemented Spring Boot backend with Angular frontend using extreme programming practices. Achieved seamless production deployment with real-time issue resolution and comprehensive test coverage.",
    tech: "Java · Spring Boot · Angular · PCF · REST · Hibernate · Jenkins",
    liveUrl: null,
    codeUrl: null,
    impact: "Client recognition award · Zero production defects"
  },
  {
    title: "Design Failure Mode Analysis Tool",
    description: "Sole developer for critical DFMEA application enhancement in manufacturing domain. Delivered complete full-stack solution including Angular UI, Spring Boot APIs, and database optimization. Deployed ahead of schedule with zero production defects and improved user experience.",
    tech: "Java · Spring Boot · Angular · REST · Hibernate · MySQL",
    liveUrl: null,
    codeUrl: null,
    impact: "Delivered ahead of schedule · 0 production defects · Enhanced UX"
  },
  {
    title: "ML-Powered User Behavior Analytics",
    description: "Developed machine learning model to predict and optimize user interactions on enterprise platform screens. Integrated with cloud notebooks for ETL pipeline processing and forecasting. Applied AI-driven insights for production exception analysis and automated debugging.",
    tech: "Python · XGBoost · Databricks · GenAI · Azure · Machine Learning",
    liveUrl: null,
    codeUrl: null,
    impact: "Accelerated debugging · AI-driven insights · Predictive analytics"
  }
];

export function Work() {
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
      id="work"
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={stagger}
    >
      <motion.h3 variants={scaleIn}>FEATURED PROJECTS</motion.h3>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project"
            variants={scaleIn}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <span className="tech">{project.tech}</span>
            {project.impact && (
              <div className="project-impact">
                <span className="impact-label">KEY IMPACT:</span>
                <span className="impact-text">{project.impact}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
