import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Journey from './components/Journey';
import ShanghaiGallery from './components/ShanghaiGallery';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-zinc-900 selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Journey />
        <ShanghaiGallery />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default App;