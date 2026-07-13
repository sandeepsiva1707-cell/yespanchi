"use client";

import React from "react";
import { motion } from "framer-motion";
import { Landmark, GraduationCap, Building2, Globe, ExternalLink } from "lucide-react";

interface Organization {
  name: string;
  role: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  tag: string;
}

const organizations: Organization[] = [
  {
    name: "Officers IAS Academy",
    role: "Director of Academics",
    description:
      "Dr. Sylendra Babu heads the academic framework at Officers IAS Academy, directly mentoring thousands of Civil Service (UPSC) candidates. He leads interview training programs, exam strategies, and mental preparation routines.",
    link: "https://officersiasacademy.com/",
    icon: <GraduationCap className="w-8 h-8 text-gold" />,
    tag: "Civil Services Mentorship",
  },
  {
    name: "Tamil Nadu Agricultural University (TNAU)",
    role: "Distinguished Alumnus & Academic Mentor",
    description:
      "As a proud alumnus holding a B.Sc. and M.Sc. in Agriculture, he maintains a close association with TNAU, delivering orientation addresses, career guides, and mentoring students in rural entrepreneurship.",
    link: "https://tnau.ac.in/",
    icon: <Building2 className="w-8 h-8 text-gold" />,
    tag: "Higher Education",
  },
  {
    name: "Southern India Chamber of Commerce & Industry (SICCI)",
    role: "Special Security Advisor & Liaison",
    description:
      "Collaborated with industry groups to counsel corporate entities on critical urban infrastructure safety, smart policing integration, and legal safety frameworks during his DGP tenure.",
    link: "https://www.sicci.in/",
    icon: <Landmark className="w-8 h-8 text-gold" />,
    tag: "Industrial & Chamber Advisory",
  },
  {
    name: "University of Madras",
    role: "PhD Alumnus & Guest Lecturer",
    description:
      "Having earned his Ph.D. in Criminology here, he remains active as a research contributor and guest speaker, advising the Criminology department on modern police administration.",
    link: "https://www.unom.ac.in/",
    icon: <GraduationCap className="w-8 h-8 text-gold" />,
    tag: "Research & Criminology",
  },
];

export default function Companies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="companies" className="relative py-24 bg-primary overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-gold/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] text-gold font-poppins uppercase font-semibold">
            AFFILIATIONS
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Companies & Organizations
          </h2>
          <div className="h-[2px] w-24 bg-gold mt-4" />
          <p className="font-poppins text-sm sm:text-base text-gray-300 max-w-2xl mt-6 leading-relaxed">
            Leading and collaborating with premier educational institutions, research universities, and 
            industrial bodies to drive youth mentorship, academic rigor, and public-private compliance.
          </p>
        </div>

        {/* Organizations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {organizations.map((org, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card rounded-3xl p-8 flex flex-col md:flex-row items-start gap-6 hover:border-gold/30 hover:shadow-[0_12px_40px_rgba(201,162,39,0.1)] transition-all duration-300 group"
            >
              {/* Left Logo Emblem */}
              <div className="p-4 bg-secondary/80 rounded-2xl border border-gold/15 flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(3,13,26,0.3)] group-hover:scale-105 transition-transform duration-300">
                {org.icon}
              </div>

              {/* Right Content */}
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-start mb-2.5">
                    <span className="text-[9px] font-poppins uppercase tracking-widest text-gold font-bold">
                      {org.tag}
                    </span>
                  </div>
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-2 leading-none">
                    {org.name}
                  </h3>
                  <h4 className="font-poppins text-xs font-semibold text-gold/80 mb-4 tracking-wide uppercase">
                    {org.role}
                  </h4>
                  <p className="font-poppins text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {org.description}
                  </p>
                </div>

                {/* External link */}
                <div className="mt-6 pt-4 border-t border-white/5 flex">
                  <a
                    href={org.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold font-poppins uppercase tracking-wider text-gold hover:text-gold-hover transition-colors"
                  >
                    Visit Official Site
                    <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
