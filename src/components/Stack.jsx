import React from 'react';
import { motion } from "framer-motion";

export function Stack() {
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

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
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
        staggerChildren: 0.15
      }
    }
  };

  return (
    <motion.section
      id="stack"
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={stagger}
    >
      <motion.h3 variants={fadeUp}>STACK</motion.h3>

      <motion.div className="stack-group" variants={slideInLeft}>
        <span className="label">FRONTEND</span>
        <p>React · Angular · JavaScript · TypeScript · HTML5 · CSS3</p>
      </motion.div>

      <motion.div className="stack-group" variants={slideInRight}>
        <span className="label">BACKEND</span>
        <p>Java · Spring Boot · Spring Framework · Node.js · Python · REST APIs · Microservices</p>
      </motion.div>

      <motion.div className="stack-group" variants={slideInLeft}>
        <span className="label">CLOUD & DATA</span>
        <p>GCP · Azure · Databricks · Kafka · IBM MQ · SQL Server · PostgreSQL · MongoDB</p>
      </motion.div>

      <motion.div className="stack-group" variants={slideInRight}>
        <span className="label">DEVOPS & TOOLS</span>
        <p>Docker · Kubernetes · Jenkins · Git · Maven · Gradle · JUnit · Mockito · GenAI/Copilot</p>
      </motion.div>
    </motion.section>
  );
}
