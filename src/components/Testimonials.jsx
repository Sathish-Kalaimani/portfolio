import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCards, setExpandedCards] = useState({});
  const testimonials = [
    {
      quote: "Sathish brings a natural curiosity and problem-solving mindset to every challenge. He is passionate about building thoughful solutioins that address real business needs and always eager to explore better,smarter ways to solve problems.",
      name: "Vidhya Chandran",
      title: "Director",
      company: "Walmart",
      relationship: "Sathish reported directly",
      linkedin: "https://www.linkedin.com/in/vidhya-chandran-b416613b/"
    },
    {
      quote: "Sathish consistently demonstrates strong leadership capabilities, particularly in cross‑functional settings. In a recent project, he played a key role in streamlining operations by proactively identifying inefficiencies, developing a thoughtful and comprehensive plan, and coordinating with team members to implement solutions. His efforts led to a measurable improvement in overall operational efficiency. He also maintains a high level of professionalism and adaptability. Sathish has repeatedly shown exceptional problem‑solving skills under pressure—for example, when he successfully addressed a critical stakeholder issue by proposing an innovative solution that not only met the stakeholder’s expectations but also strengthened their trust in the team.Additionally, Sathish possesses the ability to inspire and guide others through his forward‑thinking perspective. His vision and influence help motivate the team and contribute to a productive, collaborative environment.",
      name: "Tiffany Stephenson",
      title: "Staff Software Engineer",
      company: "Walmart",
      relationship: "Worked together on Supply Chain projects",
      linkedin: "https://www.linkedin.com/in/tiffany-stephenson-b77b4354/"
    },
    {
      quote: "Sathish does a great job of understanding complex problems by going deep into logic and system design. He stays calm even in challenging situations, which helps the team think clearly and make the right decisions. A good example is the current API implementation, where he designed a scalable solution to efficiently handle loading all view data at once.",
      name: "Vasudev Rao",
      title: "Software Engineer III",
      company: "Walmart",
      relationship: "Worked together on Supply Chain Projects",
      linkedin: "https://www.linkedin.com/in/vasudevrao123/"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 2) >= testimonials.length ? 0 : prev + 2);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 2) < 0 ? Math.max(0, testimonials.length - 2) : prev - 2);
  };

  const toggleExpand = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1]
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1]
      }
    })
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
      id="testimonials"
      className="section testimonials-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={stagger}
    >
      <motion.h3 variants={fadeUp}>RECOMMENDATIONS</motion.h3>
      <motion.p className="testimonials-subtitle" variants={fadeUp}>
        What colleagues and managers say about working with me
      </motion.p>
      
      <div className="testimonials-gallery">
        <button 
          className={`gallery-nav gallery-nav-left ${currentIndex === 0 ? 'disabled' : ''}`}
          onClick={prevTestimonial}
          disabled={currentIndex === 0}
          aria-label="Previous testimonial"
        >
          <FaChevronLeft size={24} />
        </button>

        <div className="testimonial-container">
          <AnimatePresence mode="wait" custom={currentIndex}>
            <motion.div
              key={currentIndex}
              custom={currentIndex}
              className="testimonials-pair"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, idx) => {
                const cardIndex = currentIndex + idx;
                const isExpanded = expandedCards[cardIndex];
                const isLong = testimonial.quote.length > 300;
                
                return (
                  <div key={cardIndex} className="testimonial-card">
                    <p className={`testimonial-quote ${!isExpanded && isLong ? 'clamped' : ''}`}>
                      <FaQuoteLeft className="quote-left" size={20} />
                      {testimonial.quote}
                      <FaQuoteRight className="quote-right" size={20} />
                    </p>
                    
                    {isLong && (
                      <button 
                        className="read-more-btn"
                        onClick={() => toggleExpand(cardIndex)}
                      >
                        {isExpanded ? 'Show Less' : 'Read More'}
                      </button>
                    )}
                    
                    <div className="testimonial-author">
                      <div className="author-info">
                        <p className="author-title-line">
                          <span className="author-name">{testimonial.name}</span>, {testimonial.title} @ {testimonial.company}
                        </p>
                        <p className="author-relationship">{testimonial.relationship}</p>
                      </div>
                      
                      {testimonial.linkedin && (
                        <a 
                          href={testimonial.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="linkedin-link"
                          aria-label={`${testimonial.name}'s LinkedIn profile`}
                        >
                          <FaLinkedin size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <button 
          className={`gallery-nav gallery-nav-right ${currentIndex + 2 >= testimonials.length ? 'disabled' : ''}`}
          onClick={nextTestimonial}
          disabled={currentIndex + 2 >= testimonials.length}
          aria-label="Next testimonial"
        >
          <FaChevronRight size={24} />
        </button>

        {/* Pagination dots */}
        <div className="gallery-dots">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index * 2 === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index * 2)}
              aria-label={`Go to testimonials ${index * 2 + 1}-${Math.min(index * 2 + 2, testimonials.length)}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
