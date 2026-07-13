"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

interface GalleryImage {
  src: string;
  title: string;
  category: string;
  description: string;
  aspect: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/images/hero-portrait.jpg",
    title: "Official Executive Portrait",
    category: "Leadership",
    description: "Dr. Sylendra Babu IPS in executive posture, symbolizing administrative discipline and governance.",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/gallery-speaking.png",
    title: "Keynote Leadership Address",
    category: "Keynote Speaking",
    description: "Delivering a motivational speech at a national seminar on self-discipline and youth empowerment.",
    aspect: "aspect-video",
  },
  {
    src: "/images/gallery-study.png",
    title: "Author & Literary Mentor",
    category: "Publications",
    description: "Signing copies of his books in his library workspace, representing his academic mentoring legacy.",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/gallery-fitness.png",
    title: "Fitness & Wellness Advocacy",
    category: "Fitness",
    description: "Promoting physical fitness as a national duty during his evening outdoor conditioning session.",
    aspect: "aspect-[3/4]",
  },
];

export default function Gallery() {
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (photoIndex === null) return;
    setPhotoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (photoIndex === null) return;
    setPhotoIndex((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="relative py-24 bg-navy-deep overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px]. h-[400px] bg-gold/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] text-gold font-poppins uppercase font-semibold">
            PORTFOLIO
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Gallery & Moments
          </h2>
          <div className="h-[2px] w-24 bg-gold mt-4" />
          <p className="font-poppins text-sm sm:text-base text-gray-300 max-w-2xl mt-6 leading-relaxed">
            A visual capture of Dr. Sylendra Babu’s active life — across policing commands, author 
            signings, athletic advocacy, and national mentoring conferences.
          </p>
        </div>

        {/* Masonry Columns Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-2 gap-8 space-y-8">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setPhotoIndex(idx)}
              className={`break-inside-avoid relative overflow-hidden rounded-3xl border border-gold/15 glass-card shadow-lg shadow-black/25 group cursor-pointer ${img.aspect}`}
            >
              {/* Image element */}
              <div className="relative w-full h-full">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] font-poppins font-bold uppercase tracking-widest text-gold mb-1">
                    {img.category}
                  </span>
                  <h3 className="font-playfair text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
                    {img.title}
                  </h3>
                  <p className="font-poppins text-[10px] sm:text-xs text-gray-300 leading-relaxed mb-4">
                    {img.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-1 text-[10px] font-poppins uppercase tracking-wider text-gold font-semibold">
                    <Maximize2 size={12} />
                    Maximize View
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {photoIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPhotoIndex(null)}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setPhotoIndex(null)}
                className="absolute top-6 right-6 text-white/60 hover:text-white w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10 hover:border-white/20 transition-all z-50"
              >
                <X size={20} />
              </button>

              {/* Navigation Left */}
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 text-white/60 hover:text-white w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5 hover:border-white/15 transition-all z-50"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Image Frame Container */}
              <motion.div
                initial={{ scale: 0.9, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full max-h-[80vh] aspect-[4/3] rounded-3xl overflow-hidden border border-gold/30 shadow-2xl flex items-center justify-center bg-navy-deep/60"
              >
                <Image
                  src={galleryImages[photoIndex].src}
                  alt={galleryImages[photoIndex].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
                
                {/* Bottom Details Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/85 to-black/30 border-t border-white/5 text-left">
                  <span className="text-[9px] font-poppins uppercase tracking-widest text-gold font-bold">
                    {galleryImages[photoIndex].category}
                  </span>
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white mt-1 leading-tight">
                    {galleryImages[photoIndex].title}
                  </h3>
                  <p className="font-poppins text-xs text-gray-300 mt-2 leading-relaxed">
                    {galleryImages[photoIndex].description}
                  </p>
                </div>
              </motion.div>

              {/* Navigation Right */}
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 text-white/60 hover:text-white w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5 hover:border-white/15 transition-all z-50"
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
