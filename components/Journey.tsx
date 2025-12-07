import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { JOURNEY, JOURNEY_MILESTONES } from '../constants';

const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 px-6 sm:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-4 bg-pink-100 rounded-2xl mb-6">
            <Code2 className="w-12 h-12 text-pink-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
            {JOURNEY.title}
          </h2>
          <p className="text-xl text-zinc-600 font-medium">{JOURNEY.subtitle}</p>
        </motion.div>

        {/* Journey Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <div className="prose prose-lg max-w-none text-zinc-600 leading-relaxed text-center space-y-6">
            {JOURNEY.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Milestones */}
        <div className="space-y-16">
          {JOURNEY_MILESTONES.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Image Placeholder */}
              <div className="w-full lg:w-1/2">
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-zinc-200 p-4 sm:p-6">
                  <div className="relative aspect-video bg-zinc-50 rounded-xl overflow-hidden">
                    {milestone.image ? (
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-zinc-400">
                          <Code2 className="w-12 h-12 mx-auto mb-2" />
                          <p className="text-sm">Image placeholder</p>
                          <p className="text-xs mt-1">{milestone.title}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900">
                  {milestone.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-base sm:text-lg">
                  {milestone.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
