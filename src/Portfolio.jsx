import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Cpu, Globe } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Distributed Task Queue",
      desc: "A high-concurrency worker system built with Go and Redis.",
      tech: ["Go", "Redis", "Docker"],
      link: "#"
    },
    {
      title: "AI Image Generator",
      desc: "Full-stack wrapper for Stable Diffusion with custom model fine-tuning.",
      tech: ["React", "Python", "FastAPI"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold tracking-tighter underline decoration-blue-500">DEV.PORTFOLIO</h1>
        <div className="space-x-6 hidden md:flex text-sm font-medium">
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="mailto:hello@example.com" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="max-w-2xl">
          <h2 className="text-blue-400 font-mono mb-4 text-lg">Hi, my name is</h2>
          <h3 className="text-5xl md:text-7xl font-extrabold mb-6">Alex Chen.</h3>
          <h4 className="text-3xl md:text-5xl font-bold text-slate-400 mb-8">I build scalable systems for the web.</h4>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            Software Engineer specializing in backend architecture and cloud-native solutions. 
            Currently optimizing performance at [Your Company/Project].
          </p>
          <div className="flex gap-4">
            <Github className="cursor-pointer hover:text-blue-400 transition" />
            <Linkedin className="cursor-pointer hover:text-blue-400 transition" />
            <Mail className="cursor-pointer hover:text-blue-400 transition" />
          </div>
        </div>
      </header>

      {/* Projects Grid */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold">Featured Work</h2>
          <div className="h-px bg-slate-700 flex-grow"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
              <div className="flex justify-between mb-4">
                <Code2 className="text-blue-400" />
                <ExternalLink size={20} className="text-slate-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition">{p.title}</h3>
              <p className="text-slate-400 mb-6">{p.desc}</p>
              <div className="flex gap-3">
                {p.tech.map((t, index) => (
                  <span key={index} className="text-xs font-mono bg-slate-900 px-2 py-1 rounded text-blue-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-slate-800 text-slate-500 text-sm">
        <p>Built with React & Tailwind. Hosted on Netlify.</p>
      </footer>
    </div>
  );
};

export default Portfolio;