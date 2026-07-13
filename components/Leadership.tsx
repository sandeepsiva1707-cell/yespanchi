"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, Heart, Shield, Fingerprint, Award, Compass, CompassIcon } from "lucide-react";

interface PhilosophyItem {
  title: string;
  icon: React.ReactNode;
  quote: string;
  detail: string;
}

const philosophies: PhilosophyItem[] = [
  {
    title: "Discipline",
    icon: <Compass className="w-5 h-5 text-gold" />,
    quote: "“Discipline is not a restriction; it is the absolute foundation of freedom.”",
    detail: "Peak performance across administrative systems and policing relies on structured physical routines, sharp time management, and commitment to the duty at hand.",
  },
  {
    title: "Integrity",
    icon: <Shield className="w-5 h-5 text-gold" />,
    quote: "“Trust is earned when actions align perfectly with ethical values.”",
    detail: "Uncompromising honesty and moral standards form the core currency of public administration, security operations, and corporate boardrooms alike.",
  },
  {
    title: "Ethics & Decision Making",
    icon: <Scale className="w-5 h-5 text-gold" />,
    quote: "“A leader chooses the harder right over the easier, convenient wrong.”",
    detail: "Decisions under extreme pressure must be anchored in constitutional values, statutory legal systems, and deep humanitarian considerations.",
  },
  {
    title: "Public Service",
    icon: <Heart className="w-5 h-5 text-gold" />,
    quote: "“Service is about accessibility, empathy, and restoring citizen confidence.”",
    detail: "Institutions exist to serve the public. Building citizen trust requires open-door policies, rapid crisis response, and public-friendly digital avenues.",
  },
  {
    title: "Nation Building",
    icon: <Award className="w-5 h-5 text-gold" />,
    quote: "“A strong nation is built on the shoulders of physically fit and ambitious youth.”",
    detail: "Advocating for student empowerment, physical fitness, civil services mentoring, and civic awareness to mold a highly capable next generation of leaders.",
  },
  {
    title: "Modern Governance",
    icon: <Fingerprint className="w-5 h-5 text-gold" />,
    quote: "“Governance must evolve with technology, transparency, and structure.”",
    detail: "Modernizing corporate boards and state operations through strategic compliance audits, robust internal risk mitigation, and digital workflows.",
  },
];

export default function Leadership() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="leadership" className="relative py-24 bg-primary overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-gold/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-secondary/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] text-gold font-poppins uppercase font-semibold">
            PHILOSOPHY
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Leadership & Core Values
          </h2>
          <div className="h-[2px] w-24 bg-gold mt-4" />
          <p className="font-poppins text-sm sm:text-base text-gray-300 max-w-2xl mt-6 leading-relaxed">
            The operational values and ethical frameworks that guided Dr. Sylendra Babu during his 36 years 
            of active command and continue to define his strategic mentorship.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {philosophies.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card p-8 rounded-3xl border border-gold/15 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-gold/10 rounded-2xl border border-gold/25 w-fit mb-6 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-playfair text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="font-poppins text-xs sm:text-sm text-gold/90 font-medium italic mb-4 leading-relaxed">
                  {item.quote}
                </p>
              </div>
              <p className="font-poppins text-xs text-gray-300 leading-relaxed mt-2 pt-4 border-t border-white/5">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
