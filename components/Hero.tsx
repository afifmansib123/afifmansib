import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-24 pb-12 px-6 sm:px-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <div className="h-1 w-12 bg-zinc-900 rounded-full"></div>
          <span className="text-zinc-500 font-medium tracking-wide text-sm uppercase">Software Engineer & Tech Lead</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
          Afif Mansib <br className="hidden sm:block" />
          <span className="text-zinc-500">Chowdhury</span>
        </h1>

        <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl leading-relaxed mb-10">
          I build scalable, high-performance applications. Currently leading engineering at <strong className="text-zinc-900">Sunmi Thailand</strong>, architecting IoT solutions and low-code platforms for thousands of retail locations.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button onClick={() => window.open(SOCIAL_LINKS.email)} className="gap-2">
            <Mail className="w-4 h-4" /> Contact Me
          </Button>
          <Button variant="outline" onClick={() => window.open(SOCIAL_LINKS.github)} className="gap-2">
            <Github className="w-4 h-4" /> GitHub
          </Button>
          <Button variant="ghost" className="gap-2" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Projects <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="mt-20 pt-10 border-t border-zinc-100 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
                <h3 className="text-3xl font-bold text-zinc-900">10k+</h3>
                <p className="text-sm text-zinc-500 mt-1">Retail Locations</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold text-zinc-900">$50M+</h3>
                <p className="text-sm text-zinc-500 mt-1">Processed Annually</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold text-zinc-900">3</h3>
                <p className="text-sm text-zinc-500 mt-1">Timezones Managed</p>
            </div>
             <div>
                <h3 className="text-3xl font-bold text-zinc-900">99.9%</h3>
                <p className="text-sm text-zinc-500 mt-1">Uptime Maintained</p>
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;