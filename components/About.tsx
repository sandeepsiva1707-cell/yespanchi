"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, Award, MessageSquare, Briefcase } from "lucide-react";

const biographySections = [
  {
    title: "Education & Academic Diversity",
    icon: <GraduationCap className="text-gold w-6 h-6" />,
    description:
      "A lifelong learner with a highly diverse academic record: B.Sc. and M.Sc. in Agriculture from TNAU, Coimbatore; BGL (Bachelor of General Law) and M.A. in Population Studies from Annamalai University; MBA in Human Resources; and a Ph.D. in Criminology from the University of Madras, where his research specialized in the critical area of missing children.",
  },
  {
    title: "Elite Policing & Public Service",
    icon: <ShieldCheck className="text-gold w-6 h-6" />,
    description:
      "Commissioned into the Indian Police Service (1987 Cadre, Tamil Nadu). Served in high-profile operational assignments, including SP of the Erode Special Task Force during anti-Veerappan operations, Commissioner of Police in Coimbatore, ADGP of Coastal Security (responsible for setting up 30 marine police stations), ADGP of Law & Order, and culminating his career as the 31st Director General of Police (DGP) and Head of Police Force, Tamil Nadu (2021–2023).",
  },
  {
    title: "Leadership Mentoring & Speaking",
    icon: <MessageSquare className="text-gold w-6 h-6" />,
    description:
      "Currently serving as the Director of Academics at Officers IAS Academy, Chennai, where he mentors thousands of aspiring civil servants. As an author of motivational books (such as 'Udalinai Urudhi Sei' and 'Neengalum IPS Adhikari Aagalam') and an active TEDx and keynote speaker, he continuously advocates for physical fitness, discipline, ethical leadership, and self-belief among the youth.",
  },
  {
    title: "Governance & Strategic Advisory",
    icon: <Briefcase className="text-gold w-6 h-6" />,
    description:
      "Combining 36 years of elite administrative and security leadership with deep insights into regulatory compliance and crisis management, he provides strategic counsel on corporate governance, security architecture, risk management, corporate compliance, and leadership development, ensuring institutional resilience.",
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="about" className="relative py-24 bg-primary overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-gold/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] text-gold font-poppins uppercase font-semibold">
            BIOGRAPHY
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            A Legacy of Honor & Leadership
          </h2>
          <div className="h-[2px] w-24 bg-gold mt-4" />
          <p className="font-poppins text-sm sm:text-base text-gray-300 max-w-2xl mt-6 leading-relaxed">
            Dr. C. Sylendra Babu IPS is a symbol of discipline, public service, and academic resilience. 
            From an agricultural background to heading the entire police force of Tamil Nadu, his life is an 
            inspiration for nation-building and structural excellence.
          </p>
        </div>

        {/* Biography Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {biographySections.map((bio, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card rounded-2xl p-8 flex flex-col items-start"
            >
              <div className="p-3 bg-gold/10 rounded-xl border border-gold/20 mb-6 flex items-center justify-center">
                {bio.icon}
              </div>
              <h3 className="font-playfair text-xl sm:text-2xl font-bold mb-4 text-white">
                {bio.title}
              </h3>
              <p className="font-poppins text-xs sm:text-sm text-gray-300 leading-relaxed">
                {bio.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Quote Row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 glass-card rounded-3xl p-8 sm:p-12 border border-gold/25 relative overflow-hidden flex flex-col sm:flex-row items-center gap-8 justify-between"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[60px] pointer-events-none rounded-full" />
          <div className="flex-1 text-center sm:text-left">
            <h4 className="font-playfair text-lg sm:text-xl font-bold text-gold uppercase tracking-wider mb-2">
              National Honors & Recognitions
            </h4>
            <p className="font-poppins text-xs sm:text-sm text-gray-300 leading-relaxed max-w-3xl">
              He has been honored with the Prime Minister’s Medal for Life Saving for acts of conspicuous bravery, 
              the President’s Police Medal for Distinguished Service, the President’s Police Medal for Meritorious Service, 
              and the Chief Minister’s Police Medal for Gallantry.
            </p>
          </div>
          <div className="flex gap-4 items-center shrink-0">
            <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold shadow-[0_0_15px_rgba(201,162,39,0.15)]">
              <Award size={28} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
