import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
            <span className="text-white font-bold text-lg">Afif Mansib Chowdhury</span>
            <p className="text-sm mt-2">Building digital experiences from Bangkok, Thailand.</p>
        </div>
        
        <div className="flex gap-6">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github className="w-5 h-5"/></a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5"/></a>
            <a href={SOCIAL_LINKS.email} className="hover:text-white transition-colors"><Mail className="w-5 h-5"/></a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-zinc-800 text-center md:text-left text-xs">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;