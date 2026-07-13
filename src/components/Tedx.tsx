"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Sparkles, Shield, Heart, Flag, Calendar } from "lucide-react";

export default function Tedx() {

  const takeaways = [
    {
      title: "Fitness as a Patriotic Duty",
      icon: <Heart className="w-5 h-5 text-red-500" />,
      description:
        "Maintaining personal physical health is the first step toward collective strength. An active, healthy citizen is an asset to the nation's productivity and resilience.",
    },
    {
      title: "Confidence & Individual Security",
      icon: <Shield className="w-5 h-5 text-gold" />,
      description:
        "Building physical strength feeds mental confidence. By training one's body, an individual overcomes fear, makes better decisions under pressure, and ensures self-protection.",
    },
    {
      title: "The Backbone of National Security",
      icon: <Flag className="w-5 h-5 text-blue-500" />,
      description:
        "National security goes beyond border defense; it is built on a alert, physically capable, and self-disciplined populace that can withstand crises and support community policing.",
    },
  ];

  const speechHighlights = [
    {
      event: "TEDxThePupil (Youth)",
      title: "Fitness, Peace and Security",
      date: "August 2022",
      location: "Chennai",
    },
    {
      event: "IIT Madras Shaastra",
      title: "Technology in Modern Law Enforcement",
      date: "January 2023",
      location: "IIT-M Campus",
    },
    {
      event: "IIM Trichy Leadership Summit",
      title: "Strategic Decision Making in Crisis",
      date: "November 2022",
      location: "Trichy",
    },
    {
      event: "TNAU Convocation Address",
      title: "Cultivating Discipline and Growth",
      date: "July 2023",
      location: "Coimbatore",
    },
  ];

  return (
    <section id="tedx" className="relative py-24 bg-navy-deep overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] text-red-500 font-poppins uppercase font-semibold">
            TALKS & KEYNOTES
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            TEDx & Public Speaking
          </h2>
          <div className="h-[2px] w-24 bg-red-600 mt-4" />
          <p className="font-poppins text-sm sm:text-base text-gray-300 max-w-2xl mt-6 leading-relaxed">
            As a sought-after motivational speaker, Dr. Sylendra Babu shares powerful insights on 
            personal development, physical readiness, security compliance, and strategic leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Embedded Video Box */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative aspect-video rounded-3xl overflow-hidden glass-card border border-red-500/25 shadow-2xl group cursor-pointer"
              onClick={() => window.open("https://www.youtube.com/@SylendraBabuofficial", "_blank")}
            >
              {/* Custom Premium Video Poster */}
              <div className="absolute inset-0 flex flex-col justify-between p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
                {/* Branding Tag */}
                <span className="self-start text-[10px] font-poppins uppercase tracking-widest text-red-500 font-bold bg-black/60 px-3 py-1.5 rounded-full border border-red-500/30">
                  TEDx Talk
                </span>

                {/* Play Button Trigger */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.5)] group-hover:scale-110 transition-transform duration-300"
                >
                  <Play fill="white" size={28} className="translate-x-0.5" />
                </div>

                {/* Video Title Card */}
                <div className="z-10 mt-auto">
                  <h3 className="font-playfair text-xl sm:text-2xl font-black text-white leading-tight text-glow">
                    Fitness, Peace and Security
                  </h3>
                  <p className="font-poppins text-xs text-gray-300 mt-1">
                    Delivered at TEDxThePupilInternationalSchool • Watch on YouTube Channel
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Speaking Highlights Box */}
            <div className="mt-8">
              <h3 className="font-playfair text-xl font-bold mb-4 text-white flex items-center gap-2">
                <Sparkles size={18} className="text-gold" />
                Keynote Engagements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {speechHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="glass-card p-5 rounded-2xl border border-white/5 hover:border-gold/25 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[9px] font-poppins uppercase tracking-wider text-gold bg-gold/10 px-2 py-0.5 rounded">
                        {highlight.event}
                      </span>
                      <span className="text-[9px] font-poppins text-gray-500 flex items-center gap-1">
                        <Calendar size={10} />
                        {highlight.date}
                      </span>
                    </div>
                    <h4 className="font-playfair text-sm font-bold text-white mb-1">
                      {highlight.title}
                    </h4>
                    <p className="font-poppins text-[10px] text-gray-400">
                      Location: {highlight.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Key Takeaways */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-gold/15">
              <span className="text-[9px] font-poppins uppercase tracking-widest text-gold font-bold">
                CORE PHILOSOPHY
              </span>
              <h3 className="font-playfair text-2xl font-black text-white mt-2 mb-4 leading-tight">
                Cultivating Strength for a Resilient Nation
              </h3>
              <p className="font-poppins text-xs sm:text-sm text-gray-300 leading-relaxed">
                In his talk, Dr. Sylendra Babu highlights that true national peace and territorial safety 
                cannot be sustained without active, physically strong, and disciplined citizens. He bridges 
                the gap between health and national defense in three core themes:
              </p>
            </div>

            <div className="space-y-4">
              {takeaways.map((takeaway, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-2xl flex items-start gap-4"
                >
                  <div className="p-2.5 bg-secondary/80 rounded-xl border border-white/5 flex items-center justify-center shrink-0">
                    {takeaway.icon}
                  </div>
                  <div>
                    <h4 className="font-playfair text-sm sm:text-base font-bold text-white mb-1.5">
                      {takeaway.title}
                    </h4>
                    <p className="font-poppins text-xs text-gray-300 leading-relaxed">
                      {takeaway.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
