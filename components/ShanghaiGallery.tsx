import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, MapPin, Star } from 'lucide-react';
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
            Shanghai Journey
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Two transformative trips to Sunmi's Shanghai headquarters, marking significant milestones in my career
          </p>
        </motion.div>

        {/* Shanghai Trips */}
        <div className="space-y-24">
          {SHANGHAI_TRIPS.map((trip, tripIndex) => (
            <motion.div
              key={tripIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-sm border border-zinc-100 overflow-hidden"
            >
              {/* Trip Header */}
              <div className="bg-gradient-to-r from-zinc-900 to-zinc-700 text-white p-8 sm:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-bold text-xl">{trip.year}</span>
                  </div>
                  <div className="h-px flex-1 bg-white/20"></div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">{trip.title}</h3>
                <p className="text-zinc-200 text-base sm:text-lg leading-relaxed mb-6">
                  {trip.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-zinc-300 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-zinc-400 uppercase tracking-wide mb-1">Duration</p>
                      <p className="text-white font-medium">{trip.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-zinc-300 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-zinc-400 uppercase tracking-wide mb-1">Achievement</p>
                      <p className="text-white font-medium">{trip.achievement}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Photo Gallery */}
              <div className="p-8 sm:p-12">
                <h4 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Memories from Shanghai
                </h4>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {trip.images.map((image, imageIndex) => (
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
                          <p className="text-xs text-zinc-500 font-medium">{image.caption}</p>
                          <p className="text-xs text-zinc-400 mt-1">Photo placeholder</p>
                        </div>
                      ) : (
                        <>
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {image.caption && (
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                              <p className="text-white text-xs font-medium">{image.caption}</p>
                            </div>
                          )}
                        </>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certificate Section */}
              {trip.certificate && (
                <div className="px-8 sm:px-12 pb-8 sm:pb-12">
                  <div className="border-t border-zinc-100 pt-8">
                    <h4 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Certification
                    </h4>

                    <div className="bg-zinc-50 rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto">
                      <div className="relative aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-lg">
                        {trip.certificate.includes('/path/to') ? (
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400">
                            <Award className="w-16 h-16 mb-3" />
                            <p className="text-sm font-medium">Certificate placeholder</p>
                            <p className="text-xs mt-1">{trip.year} Achievement</p>
                          </div>
                        ) : (
                          <img
                            src={trip.certificate}
                            alt={`${trip.year} Certificate`}
                            className="w-full h-full object-contain"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShanghaiGallery;
