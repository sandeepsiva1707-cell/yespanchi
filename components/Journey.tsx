"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase, Book, Award, GraduationCap } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  category: "education" | "police" | "literary" | "current";
  description: string;
  icon: React.ReactNode;
}

const milestones: Milestone[] = [
  {
    year: "1980 – 1986",
    title: "Agricultural Sciences & Early Education",
    category: "education",
    description:
      "Graduated with a Bachelor's and Master's degree in Agriculture from TNAU, Coimbatore, establishing a firm base in scientific methodology and critical thinking.",
    icon: <GraduationCap className="w-5 h-5 text-gold" />,
  },
  {
    year: "1987",
    title: "Commissioned into the IPS",
    category: "police",
    description:
      "Successfully cleared the Civil Services Examination and was appointed to the elite Indian Police Service (IPS) under the Tamil Nadu cadre, starting a historic 36-year policing career.",
    icon: <Briefcase className="w-5 h-5 text-gold" />,
  },
  {
    year: "1989 – 1993",
    title: "Special Task Force & Field Operations",
    category: "police",
    description:
      "Led anti-insurgency and counter-smuggling operations. Appointed as Superintendent of Police (SP) for the Special Task Force in Erode, operating in dense jungles during operations against Veerappan.",
    icon: <Briefcase className="w-5 h-5 text-gold" />,
  },
  {
    year: "2007",
    title: "Commissioner of Police, Coimbatore",
    category: "police",
    description:
      "Assumed command as Police Commissioner of Coimbatore City. Pioneered several community-centric policing initiatives, urban traffic reforms, and digital tracking tools.",
    icon: <Award className="w-5 h-5 text-gold" />,
  },
  {
    year: "2012",
    title: "Pioneering Coastal Security",
    category: "police",
    description:
      "Appointed as ADGP of Coastal Security. Established a robust network of 30 marine police stations and security check-posts, bolstering national maritime security.",
    icon: <Award className="w-5 h-5 text-gold" />,
  },
  {
    year: "2015",
    title: "Literary Milestones & Publications",
    category: "literary",
    description:
      "Published his best-selling books, including 'Udalinai Urudhi Sei' (Focusing on wellness) and 'Neengalum IPS Adhikari Aagalam' (IPS preparation guide), inspiring youth across the nation.",
    icon: <Book className="w-5 h-5 text-gold" />,
  },
  {
    year: "2021 – 2023",
    title: "31st DGP & Head of Police Force, TN",
    category: "police",
    description:
      "Appointed as DGP of Tamil Nadu. Commanded a force of over 120,000 personnel, managing law, order, public safety, and state-wide administrative transformations with absolute integrity.",
    icon: <Award className="w-5 h-5 text-gold" />,
  },
  {
    year: "2023 – Present",
    title: "Director of Academics, Officers IAS Academy",
    category: "current",
    description:
      "Retired from active service and joined the prestigious Officers IAS Academy as Academic Director, directly mentoring the next generation of civil services leaders.",
    icon: <GraduationCap className="w-5 h-5 text-gold" />,
  },
  {
    year: "Current",
    title: "Strategic Corporate Advisory & Keynotes",
    category: "current",
    description:
      "Advises corporate boards on compliance, security, risk mitigation, and ethics while continuing to deliver public lectures and TEDx talks on fitness, peace, and national security.",
    icon: <Briefcase className="w-5 h-5 text-gold" />,
  },
];

export default function Journey() {
  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1.5, ease: "easeInOut" as const },
    },
  };

  return (
    <section id="journey" className="relative py-24 bg-navy-deep overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-0 left-10 w-[300px] h-[300px] bg-secondary/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-[10px] tracking-[0.3em] text-gold font-poppins uppercase font-semibold">
            TIMELINE
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            The Journey of Excellence
          </h2>
          <div className="h-[2px] w-24 bg-gold mt-4" />
          <p className="font-poppins text-sm sm:text-base text-gray-300 max-w-2xl mt-6 leading-relaxed">
            Trace the chronological path of Dr. Sylendra Babu IPS — from early academic pursuits, through 
            high-risk operations, to the pinnacle of state security and executive advisory.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-12">
          {/* Vertical central timeline line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold via-gold/50 to-gold/5 origin-top -translate-x-1/2 hidden md:block"
          />
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold via-gold/50 to-gold/5 origin-top md:hidden" />

          {/* Milestones list */}
          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Outer circle marker on line */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-primary border-2 border-gold -translate-x-1/2 z-20 flex items-center justify-center shadow-[0_0_10px_rgba(201,162,39,0.5)]"
                  >
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                  </motion.div>

                  {/* Left Column (Desktop spacing alignment placeholder) */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Content Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 flex"
                  >
                    <div className="glass-card rounded-2xl p-6 md:p-8 flex-1 flex flex-col items-start relative hover:border-gold/30 hover:shadow-[0_8px_32px_rgba(201,162,39,0.1)] transition-all duration-300">
                      {/* Floating Category Icon */}
                      <div className="absolute top-6 right-6 p-2 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center">
                        {milestone.icon}
                      </div>

                      {/* Year badge */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-poppins font-semibold uppercase tracking-wider bg-gold text-primary mb-4">
                        <Calendar size={11} />
                        {milestone.year}
                      </span>

                      <h3 className="font-playfair text-xl md:text-2xl font-black text-white mb-3">
                        {milestone.title}
                      </h3>

                      <p className="font-poppins text-xs md:text-sm text-gray-300 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
