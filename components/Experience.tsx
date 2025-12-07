import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { EXPERIENCE } from '../constants';
import { Badge } from './ui/Badge';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 sm:px-12 bg-zinc-50/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">Professional Experience</h2>
          <p className="text-zinc-500">A timeline of my professional career and key contributions.</p>
        </motion.div>

        <div className="relative border-l border-zinc-200 ml-3 space-y-12">
          {EXPERIENCE.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-8 sm:pl-12"
            >
              <div className="absolute -left-1.5 top-2 h-3 w-3 rounded-full border border-white bg-zinc-300 ring-4 ring-white" />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-zinc-900">{job.role}</h3>
                <span className="text-sm font-medium text-zinc-500 flex items-center gap-1 mt-1 sm:mt-0">
                  <Calendar className="w-3.5 h-3.5" /> {job.period}
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                <span className="text-lg font-medium text-zinc-700">{job.company}</span>
                <span className="text-sm text-zinc-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {job.location}
                </span>
                {job.highlight && (
                   <Badge variant="secondary" className="w-fit">Current Role</Badge>
                )}
              </div>

              <ul className="space-y-3">
                {job.description.map((desc, i) => (
                  <li key={i} className="text-zinc-600 leading-relaxed text-sm sm:text-base flex items-start">
                    <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                    <span dangerouslySetInnerHTML={{ 
                      __html: desc
                        .replace(/(\$\d+M\+|\d+%|\d+K\+|\d+ retailers)/g, '<strong class="text-zinc-900">$1</strong>') 
                    }} />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;