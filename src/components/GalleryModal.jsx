import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export function GalleryModal({ isOpen, onClose, images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="gallery-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="gallery-modal"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="gallery-header">
            <h3>{title}</h3>
            <button className="gallery-close" onClick={onClose}>
              <FaTimes size={24} />
            </button>
          </div>

          <div className="gallery-content">
            <button className="gallery-nav gallery-prev" onClick={prevImage}>
              <FaChevronLeft size={24} />
            </button>

            <div className="gallery-image-container">
              <img
                src={images[currentIndex]}
                alt={`${title} ${currentIndex + 1}`}
                className="gallery-image"
              />
              <div className="gallery-counter">
                {currentIndex + 1} / {images.length}
              </div>
            </div>

            <button className="gallery-nav gallery-next" onClick={nextImage}>
              <FaChevronRight size={24} />
            </button>
          </div>

          <div className="gallery-thumbnails">
            {images.map((img, index) => (
              <div
                key={index}
                className={`gallery-thumbnail ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
