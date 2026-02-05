import React from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Certifications } from './components/Certifications';
import { Work } from './components/Work';
import { Hobbies } from './components/Hobbies';
import { Contact } from './components/Contact';
import { CodeBackground } from './components/CodeBackground';

const Portfolio = () => {
  return (
    <>
      <CodeBackground />
      <Navigation />

      <main>
        <Hero />
        <About />
        <Hobbies />
        <TechStack />
        <Timeline />
        <Certifications />
        <Work />
        <Contact />
      </main>

      <footer className="footer">
        © 2026 Sathish Kalaimani · BUILT WITH REACT
      </footer>
    </>
  );
}

export default Portfolio;