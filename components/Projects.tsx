import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp, Briefcase, Rocket } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group flex flex-col bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
  >
    <div className="relative aspect-video overflow-hidden bg-zinc-100 group">
       <img 
         src={project.images[0]} 
         alt={project.name} 
         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
       />
       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
         <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {project.link && (
                <Button size="sm" variant="default" className="bg-white text-black hover:bg-white/90 font-medium" onClick={() => window.open(project.link)}>
                     <ExternalLink className="w-4 h-4 mr-2" /> Visit
                </Button>
            )}
             {project.github && (
                <Button size="sm" variant="default" className="bg-zinc-900 text-white border border-zinc-700" onClick={() => window.open(project.github)}>
                     <Github className="w-4 h-4" />
                </Button>
            )}
         </div>
       </div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">{project.name}</h3>
      </div>
      
      <p className="text-zinc-600 text-sm mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>

      {project.metrics && (
        <div className="mb-6 space-y-2 border-t border-zinc-100 pt-4">
            {project.metrics.slice(0, 2).map((metric, i) => (
                <div key={i} className="flex items-center text-xs font-semibold text-zinc-700">
                    <TrendingUp className="w-3 h-3 mr-2 text-green-600" />
                    {metric}
                </div>
            ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map(tag => (
          <Badge key={tag} variant="secondary" className="bg-zinc-50 text-zinc-600 border border-zinc-200">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  const professionalProjects = PROJECTS.filter(p => p.category === 'Professional');
  const entrepreneurialProjects = PROJECTS.filter(p => p.category === 'Entrepreneurial');

  return (
    <section id="projects" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold text-zinc-900 mb-6">Featured Projects</h2>
        <p className="text-zinc-500 max-w-2xl text-lg">
          A collection of high-impact applications I've architected, from enterprise-grade IoT solutions to entrepreneurial ventures.
        </p>
      </motion.div>

      {/* Professional Work Section */}
      <div className="mb-24">
        <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-50 rounded-lg">
                <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900">Professional Work</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {professionalProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
            ))}
        </div>
      </div>

      {/* Entrepreneurial Section */}
      <div>
        <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-purple-50 rounded-lg">
                <Rocket className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900">Entrepreneurial & Projects</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {entrepreneurialProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
            ))}
        </div>
      </div>

    </section>
  );
};

export default Projects;