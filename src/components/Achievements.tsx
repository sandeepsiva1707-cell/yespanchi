"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const stats: StatItem[] = [
  {
    target: 36,
    suffix: "+",
    label: "Years of Public Service",
    sublabel: "Command, operations, and governance",
  },
  {
    target: 10,
    suffix: "+",
    label: "Books Authored",
    sublabel: "Motivational, wellness, and prep guides",
  },
  {
    target: 500,
    suffix: "+",
    label: "Leadership Programs",
    sublabel: "Academic and executive coaching",
  },
  {
    target: 120,
    suffix: "+",
    label: "Corporate Advisories",
    sublabel: "Risk, security, and governance audits",
  },
  {
    target: 250,
    suffix: "+",
    label: "TEDx & Keynote Talks",
    sublabel: "Motivational and academic keynotes",
  },
  {
    target: 5,
    suffix: "",
    label: "Major Medals Recieved",
    sublabel: "Prime Minister's Medal, President's Medal",
  },
];

// Single Counter Component
function Counter({ target, suffix, duration = 1.5 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <div ref={elementRef} className="font-playfair text-4xl sm:text-5xl md:text-6xl font-black text-gold">
      {count}
      {suffix}
    </div>
  );
}

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative py-20 bg-navy-deep border-t border-b border-gold/15 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 md:gap-12 text-center"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col items-center glass-card p-6 sm:p-8 rounded-3xl border border-white/5 shadow-lg shadow-black/20"
            >
              {/* Counter component */}
              <Counter target={stat.target} suffix={stat.suffix} />
              
              <h3 className="font-playfair text-sm sm:text-base font-bold text-white mt-4 tracking-wide leading-none">
                {stat.label}
              </h3>
              
              <p className="font-poppins text-[10px] sm:text-xs text-gray-400 mt-2 max-w-[200px]">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
