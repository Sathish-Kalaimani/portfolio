import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaPaintBrush, FaCamera, FaBaseballBall, FaTv, FaMusic, FaUtensils, FaCode, FaImages,FaCar } from "react-icons/fa";
import { GalleryModal } from './GalleryModal';
import jesus from '../images/drawing/jesus.jpg';
import narasimha from '../images/drawing/narasimha.jpg';
import shiv from '../images/drawing/shiv.jpg';
import bison from '../images/photos/bison.jpg'
import colosseum from '../images/photos/colosseum.jpg'
import eiffeltower from '../images/photos/eiffeltower.jpg'
import gardenofgods from '../images/photos/gardenofgods.jpg'
import mountrushmore from '../images/photos/mountrushmore.jpg'
import mycar from '../images/photos/mycar.jpg'
import mycarinsnow from '../images/photos/mycarinsnow.jpg'
import newjersy from '../images/photos/newjersy.jpg'
import pisa from '../images/photos/pisa.jpg'
import snow from '../images/photos/snow.jpg'
import statueofliberty from '../images/photos/statueofliberty.jpg'
import vatican from '../images/photos/vatican.jpg'

export function Hobbies() {
  const [galleryOpen, setGalleryOpen] = useState(null);

  // Add your images to /public/gallery/ folder
  const drawingImages = [
    jesus,
    narasimha,
    shiv
    // Add more drawing images here
  ];

  const photoImages = [
    bison,
    colosseum,
    eiffeltower,
    gardenofgods,
    mycar,
    mycarinsnow,
    mountrushmore,
    newjersy,
    pisa,
    snow,
    statueofliberty,
    vatican
    // Add more photo images here
  ];

  const hobbies = [
      { 
        name: "Drawing", 
        icon: <FaPaintBrush size={40} />, 
        description: "Sketching",
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
      { name: "Cricket", icon: <FaBaseballBall size={40} />, description: "Playing & Watching" },
      { name: "Watching TV", icon: <FaTv size={40} />, description: "Entertainment" },
      { name: "Listening to Music", icon: <FaMusic size={40} />, description: "All Genres" },
      { name: "Cooking", icon: <FaUtensils size={40} />, description: "Culinary Experiments" },
      { name: "Driving", icon: <FaCar size={40} />, description: "Road Trips & Exploration" },
      { name: "Coding", icon: <FaCode size={40} />, description: "Personal Projects" }
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