"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ExternalLink, Award, CheckCircle2 } from "lucide-react";

interface PurchaseOption {
  storeName: string;
  url: string;
}

interface BookData {
  title: string;
  tamilTitle: string;
  publisher: string;
  year: string;
  description: string;
  lessons: string[];
  gradient: string;
  buyUrl: string;
  purchaseOptions: PurchaseOption[];
}

const books: BookData[] = [
  {
    title: "Udalinai Urudhi Sei",
    tamilTitle: "உடலினை உறுதி செய்",
    publisher: "Sura Books",
    year: "2015",
    description:
      "A comprehensive guide on physical training, fitness philosophies, diet, and healthy lifestyle choices written to inspire the younger generation to maintain peak health.",
    lessons: [
      "Physical fitness is a precursor to mental power.",
      "Scientific approach to daily workouts and calorie consumption.",
      "Overcoming lazy habits through disciplined routines."
    ],
    gradient: "from-[#1b3d6c] to-[#0b294f]",
    buyUrl: "https://www.surabooks.com/",
    purchaseOptions: [
      { storeName: "Sura Books", url: "https://www.surabooks.com/" },
      { storeName: "Amazon India", url: "https://www.amazon.in/s?k=Udalinai+Urudhi+Sei+Sylendra+Babu" }
    ]
  },
  {
    title: "Neengalum IPS Adhikari Aagalam",
    tamilTitle: "நீங்களும் ஓர் IPS அதிகாரி ஆகலாம்",
    publisher: "Sura Books",
    year: "2012",
    description:
      "The definitive guide for civil services aspirants in India, sharing tips, strategic plans, syllabus breakdowns, and personal insights on cracking the UPSC examinations.",
    lessons: [
      "Strategic study planning over raw cramming.",
      "Structuring high-impact answers in main papers.",
      "Building the resilience needed for civil services."
    ],
    gradient: "from-[#6a5118] to-[#45340c]",
    buyUrl: "https://www.surabooks.com/",
    purchaseOptions: [
      { storeName: "Sura Books", url: "https://www.surabooks.com/" },
      { storeName: "Amazon India", url: "https://www.amazon.in/s?k=Neengalum+IPS+Adhikari+Aagalam" }
    ]
  },
  {
    title: "Unakkul Oru Thalaivan",
    tamilTitle: "உனக்குள் ஒரு தலைவன்",
    publisher: "Common Folks",
    year: "2017",
    description:
      "Focuses on self-leadership, motivating individuals to discover their inner potential, direct their focus, and lead with empathy, accountability, and integrity.",
    lessons: [
      "True leadership starts with self-mastery.",
      "The power of high standards and micro-disciplines.",
      "Leading by example to influence and build teams."
    ],
    gradient: "from-[#1c4d4f] to-[#0f2e30]",
    buyUrl: "https://www.commonfolks.in/",
    purchaseOptions: [
      { storeName: "Common Folks", url: "https://www.commonfolks.in/" },
      { storeName: "Amazon India", url: "https://www.amazon.in/s?k=Unakkul+Oru+Thalaivan" }
    ]
  },
  {
    title: "Ungalukkana 24 Por Vidhigal",
    tamilTitle: "உகளுக்கான 24 போர் விதிகள்",
    publisher: "Sura Books",
    year: "2016",
    description:
      "Draws parallels between ancient battlefield strategy and modern life challenges, presenting 24 practical rules for overcoming obstacles and achieving victory.",
    lessons: [
      "Assessing situations objectively before acting.",
      "Transforming constraints into tactical advantages.",
      "Maintaining emotional calm under crisis conditions."
    ],
    gradient: "from-[#4c1e40] to-[#2d0e25]",
    buyUrl: "https://www.surabooks.com/",
    purchaseOptions: [
      { storeName: "Sura Books", url: "https://www.surabooks.com/" },
      { storeName: "Amazon India", url: "https://www.amazon.in/s?k=Ungalukkana+24+Por+Vidhigal" }
    ]
  },
  {
    title: "Principles of Success in Interview",
    tamilTitle: "Principles of Success in Interview",
    publisher: "Sura Books",
    year: "2014",
    description:
      "An English-medium playbook for candidates preparing for elite corporate and public service interviews, highlighting verbal, mental, and physical poise.",
    lessons: [
      "Mastering body language and non-verbal posture.",
      "Answering stress-inducing questions with poise.",
      "Expressing clarity and structured viewpoints."
    ],
    gradient: "from-[#1d2731] to-[#0f151b]",
    buyUrl: "https://www.surabooks.com/",
    purchaseOptions: [
      { storeName: "Sura Books", url: "https://www.surabooks.com/" },
      { storeName: "Amazon India", url: "https://www.amazon.in/s?k=Principles+of+Success+in+Interview+Sylendra+Babu" }
    ]
  },
  {
    title: "Boys & Girls - Be Ambitious",
    tamilTitle: "Boys & Girls - Be Ambitious",
    publisher: "Sura Books",
    year: "2013",
    description:
      "A motivational book designed to fire up students and youngsters to set high goals, cultivate ambition, and break past social or personal mental limitations.",
    lessons: [
      "Deliberate planning for long-term aspirations.",
      "Surrounding oneself with positive, growth-oriented peers.",
      "Contributing actively to community development."
    ],
    gradient: "from-[#2b1b3d] to-[#150a21]",
    buyUrl: "https://www.surabooks.com/",
    purchaseOptions: [
      { storeName: "Sura Books", url: "https://www.surabooks.com/" },
      { storeName: "Amazon India", url: "https://www.amazon.in/s?k=Boys+%26+Girls+-+Be+Ambitious+Sylendra+Babu" }
    ]
  },
];

export default function Books() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="books" className="relative py-24 bg-primary overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-gold/5 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 left-10 w-[350px] h-[350px] bg-secondary/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] text-gold font-poppins uppercase font-semibold">
            PUBLICATIONS
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Literary Works & Guides
          </h2>
          <div className="h-[2px] w-24 bg-gold mt-4" />
          <p className="font-poppins text-sm sm:text-base text-gray-300 max-w-2xl mt-6 leading-relaxed">
            Discover the books authored by Dr. Sylendra Babu, which have served as beacons of health, 
            career strategy, and motivation for millions of youth.
          </p>
        </div>

        {/* Books Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {books.map((book, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              onClick={() => window.open(book.buyUrl, "_blank")}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group flex flex-col h-full hover:border-gold/40 transition-all duration-300"
            >
              {/* Book Spine / Cover Mockup (3D styled container) */}
              <div className={`relative h-60 bg-gradient-to-br ${book.gradient} p-8 flex flex-col justify-between border-b border-gold/10`}>
                <div className="absolute inset-0 bg-black/10 opacity-60 group-hover:opacity-20 transition-opacity duration-300" />
                
                {/* Book Texture spine shadow */}
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/30 to-transparent" />
                
                {/* Logo Seal */}
                <div className="flex justify-end items-start z-10">
                  <BookOpen size={18} className="text-gold/60 group-hover:text-gold transition-colors duration-300" />
                </div>

                {/* Cover Title */}
                <div className="z-10 mt-auto">
                  <h3 className="font-playfair text-xl sm:text-2xl font-black text-white leading-tight">
                    {book.title}
                  </h3>
                  <p className="font-poppins text-[10px] text-gold/80 mt-1 font-semibold tracking-wider italic">
                    {book.tamilTitle}
                  </p>
                </div>

                {/* Cover Footer */}
                <div className="flex justify-between items-center z-10 mt-4 pt-4 border-t border-white/5">
                  <span className="text-[9px] font-poppins text-gray-400">Published: {book.year}</span>
                  <span className="text-[9px] font-poppins text-gold font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                    Buy Book <ExternalLink size={10} />
                  </span>
                </div>
              </div>

              {/* Book Details Summary */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="font-poppins text-xs text-gray-300 leading-relaxed mb-6 flex-1">
                  {book.description}
                </p>
                <div className="mt-auto">
                  <div
                    className="w-full py-3 rounded-xl bg-gold hover:bg-gold-hover text-primary font-poppins font-bold text-xs uppercase tracking-widest transition-colors shadow-lg shadow-gold/15 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Purchase Book
                    <ExternalLink size={12} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
