import { motion } from "framer-motion";
import img1 from "../images/hero1.jpeg";
import img2 from "../images/IMG_7663.jpeg";
import { useEffect, useRef, useState } from "react";

const images = [
  img1,
  img2,
  img1,
];

export function PictureFrame() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const IMAGE_DURATION = 4000;
  const FADE_DURATION = 300;
  const RESUME_DELAY = 6000;

  const next = () =>
    setIndex((i) => (i + 1) % images.length);

  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);

  const pauseAuto = () => {
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(startAuto, RESUME_DELAY);
  };

  const startAuto = () => {
    intervalRef.current = setInterval(next, IMAGE_DURATION);
  };

  // Auto rotation
  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, []);

  // Fade out → swap → fade in
  useEffect(() => {
    setVisible(false);

    const t = setTimeout(() => {
      setVisible(true);
    }, FADE_DURATION);

    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      className="hero-frame"
      onClick={() => {
        next();
        pauseAuto();
      }}
      onMouseEnter={() => clearInterval(intervalRef.current)}
      onMouseLeave={startAuto}
      style={{ cursor: 'pointer' }}
    >
      <motion.img
        src={images[index]}
        alt="Hero visual"
        className="hero-frame-img"
        animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.99 }}
        transition={{ duration: FADE_DURATION / 1000, ease: "easeOut" }}
      />
    </div>
  );
}
