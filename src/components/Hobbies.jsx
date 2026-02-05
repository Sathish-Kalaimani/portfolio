import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaPaintBrush, FaCamera, FaBaseballBall, FaTv, FaMusic, FaUtensils, FaCode, FaImages } from "react-icons/fa";
import { GalleryModal } from './GalleryModal';

export function Hobbies() {
  const [galleryOpen, setGalleryOpen] = useState(null);

  // Add your images to /public/gallery/ folder
  const drawingImages = [
    '/gallery/drawings/drawing1.jpg',
    '/gallery/drawings/drawing2.jpg',
    '/gallery/drawings/drawing3.jpg',
    // Add more drawing images here
  ];

  const photoImages = [
    '/gallery/photos/photo1.jpg',
    '/gallery/photos/photo2.jpg',
    '/gallery/photos/photo3.jpg',
    // Add more photo images here
  ];

  const hobbies = [
    { 
      name: "Drawing", 
      icon: <FaPaintBrush size={40} />, 
      description: "Sketching and creative art",
      hasGallery: true,
      galleryKey: "drawings"
    },
    { 
      name: "Photography", 
      icon: <FaCamera size={40} />, 
      description: "Capturing moments",
      hasGallery: true,
      galleryKey: "photos"
    },
    { name: "Playing Cricket", icon: <FaBaseballBall size={40} />, description: "Sports enthusiast" },
    { name: "Watching TV", icon: <FaTv size={40} />, description: "Entertainment & relaxation" },
    { name: "Listening to Music", icon: <FaMusic size={40} />, description: "All genres" },
    { name: "Cooking", icon: <FaUtensils size={40} />, description: "Culinary experiments" },
    { name: "Coding", icon: <FaCode size={40} />, description: "Personal projects" }
  ];

  const openGallery = (galleryKey) => {
    setGalleryOpen(galleryKey);
  };

  const closeGallery = () => {
    setGalleryOpen(null);
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <motion.section
        id="hobbies"
        className="section hobbies-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={stagger}
      >
        <motion.h3 variants={fadeUp}>HOBBIES & INTERESTS</motion.h3>
        
        <motion.div className="hobbies-grid" variants={stagger}>
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              className={`hobby-card ${hobby.hasGallery ? 'has-gallery' : ''}`}
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => hobby.hasGallery && openGallery(hobby.galleryKey)}
            >
              <div className="hobby-icon">{hobby.icon}</div>
              <h4>{hobby.name}</h4>
              <p>{hobby.description}</p>
              {hobby.hasGallery && (
                <div className="gallery-hint">
                  <FaImages size={16} />
                  <span>View Gallery</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <GalleryModal
        isOpen={galleryOpen === 'drawings'}
        onClose={closeGallery}
        images={drawingImages}
        title="My Drawings"
      />

      <GalleryModal
        isOpen={galleryOpen === 'photos'}
        onClose={closeGallery}
        images={photoImages}
        title="My Photography"
      />
    </>
  );
}
