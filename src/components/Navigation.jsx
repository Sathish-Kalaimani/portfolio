import React from 'react';

export function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-links">
          <a href="#about">ABOUT</a>
          {/* <a href="#hobbies">HOBBIES</a> */}
          <a href="#certifications">CERTIFICATIONS</a>
          <a href="#stack">SKILLS</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#work">WORK</a>
          <a href="#contact">CONTACT</a>
          <a className="resume" href="/Sathish-Kalaimani-Resume.pdf">RESUME</a>
        </div>
      </div>
    </nav>
  );
}
