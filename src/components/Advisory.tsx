"use client";

import React from "react";
import { motion } from "framer-motion";
import { Landmark, ShieldAlert, Cpu, CheckSquare, FileLock2, BarChart3, AlertOctagon, HelpCircle } from "lucide-react";

interface AdvisoryArea {
  title: string;
  icon: React.ReactNode;
  description: string;
  bullets: string[];
}

const advisoryAreas: AdvisoryArea[] = [
  {
    title: "Corporate Governance",
    icon: <Landmark className="w-6 h-6 text-gold" />,
    description:
      "Advising boards and executive committees on regulatory compliance, board ethics, corporate behavior, and institutional transparency frameworks.",
    bullets: [
      "Board-level compliance standards",
      "Codes of conduct & corporate ethics guidelines",
      "Stakeholder communication policy audits",
    ],
  },
  {
    title: "Security & Crisis Management",
    icon: <ShieldAlert className="w-6 h-6 text-gold" />,
    description:
      "Designing state-of-the-art security architectures, emergency response systems, corporate threat management, and crisis communication protocols.",
    bullets: [
      "Physical facility security audits",
      "Disaster management planning",
      "Executive protection advisory",
    ],
  },
  {
    title: "Data Protection & Compliance",
    icon: <FileLock2 className="w-6 h-6 text-gold" />,
    description:
      "Mitigating risks related to internal information security, data leaks, GDPR/DPDP Act regulatory alignments, and secure communication systems.",
    bullets: [
      "Data privacy regulatory alignment",
      "Internal asset protection programs",
      "Information leakage investigations",
    ],
  },
  {
    title: "Risk Management & Audits",
    icon: <BarChart3 className="w-6 h-6 text-gold" />,
    description:
      "Formulating risk parameters, threat indexes, commercial liability audits, and internal security check metrics for businesses operating in complex environments.",
    bullets: [
      "Operational threat mapping",
      "Internal fraud prevention audits",
      "Compliance verification metrics",
    ],
  },
  {
    title: "Digital Transformation Advisory",
    icon: <Cpu className="w-6 h-6 text-gold" />,
    description:
      "Steering the safe transition of legacy systems into cloud-based smart ecosystems, incorporating data security measures and workflow automations.",
    bullets: [
      "Secure digital system migrations",
      "Incident monitoring center protocols",
      "AI and smart tech adoption compliance",
    ],
  },
  {
    title: "Corporate Affairs & Advocacy",
    icon: <CheckSquare className="w-6 h-6 text-gold" />,
    description:
      "Aligning corporate actions with public safety frameworks, helping organizations manage government relations, civic approvals, and compliance.",
    bullets: [
      "Government-liaison process compliance",
      "CSR project alignment (Public Health/Security)",
      "Regulatory liaison strategy",
    ],
  },
];

export default function Advisory() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section id="advisory" className="relative py-24 bg-navy-deep overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-secondary/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-gold/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] text-gold font-poppins uppercase font-semibold">
            STRATEGIC ADVISORY
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Executive Advisory Services
          </h2>
          <div className="h-[2px] w-24 bg-gold mt-4" />
          <p className="font-poppins text-sm sm:text-base text-gray-300 max-w-2xl mt-6 leading-relaxed">
            Translating decades of elite policing, large-scale administration, and legal expertise into 
            world-class advisory for corporate governance, safety compliance, and crisis handling.
          </p>
        </div>

        {/* Grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {advisoryAreas.map((area, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card rounded-3xl p-8 flex flex-col justify-between hover:border-gold/30 hover:translate-y-[-6px] transition-all duration-300"
            >
              <div>
                <div className="p-3.5 bg-gold/10 rounded-2xl border border-gold/25 w-fit mb-6 flex items-center justify-center">
                  {area.icon}
                </div>
                <h3 className="font-playfair text-xl font-bold text-white mb-3">
                  {area.title}
                </h3>
                <p className="font-poppins text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  {area.description}
                </p>
              </div>

              {/* Bullet details */}
              <ul className="space-y-2 mt-auto pt-6 border-t border-white/5">
                {area.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="font-poppins text-[11px] sm:text-xs text-gray-400">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
