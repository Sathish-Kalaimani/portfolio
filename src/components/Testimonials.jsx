import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "Sathish brings a natural curiosity and problem-solving mindset to every challenge. He is passionate about building thoughful solutioins that address real business needs and always eager to explore better,smarter ways to solve problems.",
      name: "Vidhya Chandran",
      title: "Director",
      company: "Walmart",
      relationship: "Sathish reported directly",
      linkedin: "https://www.linkedin.com/in/vidhya-chandran-b416613b/"
    },
    // {
    //   quote: "Working with Sathish on the digital twin platform was outstanding. He demonstrated excellent technical skills and delivered the project ahead of schedule. His expertise in Spring Boot and React made a significant impact.",
    //   name: "Colleague Name",
    //   title: "Senior Architect",
    //   company: "Walmart",
    //   relationship: "Worked together on enterprise projects",
    //   linkedin: ""
    // },
    // {
    //   quote: "Sathish's ability to architect scalable microservices and mentor junior developers is remarkable. He brought innovative solutions to complex problems and always maintained high code quality standards.",
    //   name: "Tech Lead Name",
    //   title: "Technical Lead",
    //   company: "FedEx Services",
    //   relationship: "Collaborated on microservices architecture",
    //   linkedin: ""
    // }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 2) >= testimonials.length ? 0 : prev + 2);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 2) < 0 ? Math.max(0, testimonials.length - 2) : prev - 2);
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
              {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, idx) => (
                <div key={currentIndex + idx} className="testimonial-card">
                  <p className="testimonial-quote">
                    <FaQuoteLeft className="quote-left" size={20} />
                    {testimonial.quote}
                    <FaQuoteRight className="quote-right" size={20} />
                  </p>
                  
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
              ))}
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
