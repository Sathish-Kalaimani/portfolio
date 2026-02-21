import React from 'react';
import { motion } from "framer-motion";
import { FaMedium, FaArrowRight, FaClock, FaEye } from 'react-icons/fa';

export function Blog() {
  // Add your Medium articles here
  const articles = [
    {
      title: "Your First Article Title",
      description: "A brief description of your article that captures the key points and entices readers to click through...",
      url: "https://medium.com/@your-username/article-slug",
      date: "Jan 15, 2026",
      readTime: "5 min read",
      views: "1.2K",
      tags: ["Java", "Spring Boot", "Microservices"]
    },
    {
      title: "Your Second Article Title",
      description: "Another engaging description that highlights what readers will learn from this article...",
      url: "https://medium.com/@your-username/article-slug-2",
      date: "Feb 10, 2026",
      readTime: "7 min read",
      views: "890",
      tags: ["React", "Frontend", "Performance"]
    }
  ];

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

  return (
    <motion.section
      id="blog"
      className="section blog-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={stagger}
    >
      <motion.h3 variants={fadeUp}>WRITING</motion.h3>
      <motion.p className="section-subtitle" variants={fadeUp}>
        Technical articles and insights on software engineering
      </motion.p>

      <div className="blog-grid">
        {articles.map((article, index) => (
          <motion.article 
            key={index} 
            className="blog-card"
            variants={fadeUp}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="blog-meta">
              <span className="blog-date">{article.date}</span>
              <div className="blog-stats">
                <span><FaClock size={12} /> {article.readTime}</span>
                <span><FaEye size={12} /> {article.views}</span>
              </div>
            </div>

            <h4 className="blog-title">{article.title}</h4>
            <p className="blog-description">{article.description}</p>

            <div className="blog-tags">
              {article.tags.map((tag, idx) => (
                <span key={idx} className="blog-tag">{tag}</span>
              ))}
            </div>

            <a 
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-read-more"
            >
              Read on Medium <FaArrowRight size={14} />
            </a>
          </motion.article>
        ))}
      </div>

      <motion.div className="blog-cta" variants={fadeUp}>
        <a 
          href="https://medium.com/@your-username" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <FaMedium size={20} /> View All Articles
        </a>
      </motion.div>
    </motion.section>
  );
}
