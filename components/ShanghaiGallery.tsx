import React from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin } from 'lucide-react';
import { SHANGHAI_TRIPS } from '../constants';

const ShanghaiGallery: React.FC = () => {
  return (
    <section id="shanghai" className="py-24 px-6 sm:px-12 bg-zinc-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
            Shanghai Memories
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Training experiences at Sunmi's Shanghai headquarters, working with the R&D team
          </p>
        </motion.div>

        {/* Photo Gallery - All Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {SHANGHAI_TRIPS.flatMap(trip => trip.images).map((image, imageIndex) => (
              <motion.div
                key={imageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: imageIndex * 0.05 }}
                className="group relative aspect-square bg-zinc-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                {image.src.includes('/path/to') ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <div className="text-zinc-400 mb-2">
                      <MapPin className="w-8 h-8 mx-auto" />
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">Photo placeholder</p>
                  </div>
                ) : (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates Section */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-zinc-900 mb-8 text-center flex items-center justify-center gap-2">
              <Award className="w-6 h-6" />
              Training Certifications
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {SHANGHAI_TRIPS.map((trip, index) => (
                trip.certificate && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-100"
                  >
                    <div className="mb-4">
                      <div className="inline-block bg-zinc-900 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                        {trip.year}
                      </div>
                      <p className="text-sm text-zinc-600">{trip.achievement}</p>
                    </div>

                    <div className="relative aspect-[4/3] bg-zinc-50 rounded-xl overflow-hidden shadow-md">
                      {trip.certificate.includes('/path/to') ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400">
                          <Award className="w-16 h-16 mb-3" />
                          <p className="text-sm font-medium">Certificate placeholder</p>
                          <p className="text-xs mt-1">{trip.year}</p>
                        </div>
                      ) : (
                        <img
                          src={trip.certificate}
                          alt={`${trip.year} Certificate`}
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>
                  </motion.div>
                )
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShanghaiGallery;
