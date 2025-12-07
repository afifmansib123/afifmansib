import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          AMC<span className="text-blue-600">.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('about')} className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">About</button>
          <button onClick={() => scrollTo('experience')} className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">Experience</button>
          <button onClick={() => scrollTo('journey')} className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">Journey</button>
          <button onClick={() => scrollTo('shanghai')} className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">Shanghai</button>
          <button onClick={() => scrollTo('projects')} className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">Projects</button>
          <button onClick={() => scrollTo('skills')} className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">Skills</button>
          <Button variant="default" size="sm" onClick={() => window.open("mailto:afifmansib123@gmail.com")}>
            Get in Touch
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-100 p-6 flex flex-col gap-4 shadow-xl">
          <button onClick={() => scrollTo('about')} className="text-left text-lg font-medium">About</button>
          <button onClick={() => scrollTo('experience')} className="text-left text-lg font-medium">Experience</button>
          <button onClick={() => scrollTo('journey')} className="text-left text-lg font-medium">Journey</button>
          <button onClick={() => scrollTo('shanghai')} className="text-left text-lg font-medium">Shanghai</button>
          <button onClick={() => scrollTo('projects')} className="text-left text-lg font-medium">Projects</button>
          <button onClick={() => scrollTo('skills')} className="text-left text-lg font-medium">Skills</button>
          <Button className="w-full mt-4" onClick={() => window.open("mailto:afifmansib123@gmail.com")}>Get in Touch</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;