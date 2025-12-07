import React from 'react';
import { SKILLS, AWARDS } from '../constants';
import { Badge } from './ui/Badge';
import { Trophy } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 sm:px-12 bg-white border-t border-zinc-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Technical Skills */}
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Technical Arsenal</h2>
          <div className="space-y-8">
            {SKILLS.map((category, index) => (
              <div key={index}>
                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <Badge key={skill} variant="outline" className="text-sm py-1 px-3 border-zinc-300 text-zinc-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center">
            <Trophy className="w-6 h-6 mr-3 text-yellow-500" /> 
            Honors & Achievements
          </h2>
          <div className="space-y-6">
            {AWARDS.map((award, index) => (
              <div key={index} className="flex gap-4 items-start">
                 <div className="mt-1 h-2 w-2 rounded-full bg-zinc-400 flex-shrink-0" />
                 <div>
                    <h4 className="font-semibold text-zinc-900">{award.title}</h4>
                    <p className="text-sm text-zinc-600 mt-1">{award.description}</p>
                    {award.year && <span className="text-xs text-zinc-400 mt-1 block">{award.year}</span>}
                 </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;