import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-ivory text-ink flex flex-col font-sans selection:bg-sage selection:text-ink">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <About />
        <Projects onOpenModal={setSelectedProject} />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      <Footer />

      {/* Conditionally rendered Deep-Dive Case Study Modal to prevent scroll-lock on mount */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
