"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Play, BookOpen } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Gold particles animation background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
      opacity: number;
    }> = [];

    // Create particles
    const particleCount = Math.min(Math.floor(width / 20), 80);
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 0.5,
        speedY: -(Math.random() * 0.4 + 0.1),
        speedX: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 162, 39, ${p.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#C9A227";
        ctx.fill();

        p.y += p.speedY;
        p.x += p.speedX;

        // Reset particle position when it goes out of screen
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0 || p.x > width) {
          p.x = Math.random() * width;
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      window.scrollTo({
        top: el.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const roles = [
    "Former IPS Officer",
    "TEDx Speaker",
    "Author",
    "Leadership Mentor",
    "Strategic Advisor",
    "Corporate Governance Expert",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20"
    >
      {/* Background Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none" />

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full bg-secondary/20 blur-[100px] pointer-events-none animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-20 relative py-12">
        {/* Hero Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-gold" />
            <span className="text-[10px] sm:text-xs font-poppins tracking-[0.3em] text-gold uppercase font-semibold">
              Executive Leader & Mentor
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
          >
            Dig. Sylendra Babu <span className="gold-gradient-text block">IPS</span>
          </motion.h1>

          {/* Typing/Rotating Roles Showcase */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2.5 mt-6 mb-8 max-w-xl"
          >
            {roles.map((role, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full text-xs font-poppins font-medium bg-secondary/50 border border-gold/10 text-gold/90 hover:border-gold/30 hover:bg-secondary/80 transition-all duration-300 shadow-[0_2px_10px_rgba(3,13,26,0.2)]"
              >
                {role}
              </span>
            ))}
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-poppins text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mb-10"
          >
            A visionary retired Director General of Police (DGP) with 36 years of elite public service, 
            empowering thousands through impactful motivational publications, TEDx talks, executive 
            coaching, and strategic corporate compliance advisory.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 sm:gap-6"
          >
            <button
              onClick={() => scrollToSection("journey")}
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm uppercase tracking-widest font-semibold font-poppins bg-gold hover:bg-gold-hover text-primary shadow-[0_4px_20px_rgba(201,162,39,0.3)] hover:shadow-[0_6px_25px_rgba(201,162,39,0.4)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              Explore Journey
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollToSection("books")}
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm uppercase tracking-widest font-semibold font-poppins bg-transparent border border-white/20 hover:border-gold/60 text-white hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <BookOpen size={16} className="text-gold" />
              View Books
            </button>
            <button
              onClick={() => scrollToSection("tedx")}
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm uppercase tracking-widest font-semibold font-poppins bg-transparent border border-white/20 hover:border-gold/60 text-white hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Play size={16} className="text-red-500 fill-red-500" />
              Watch TEDx
            </button>
          </motion.div>
        </motion.div>

        {/* Hero Portrait Container with Glass Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const, delay: 0.4 }}
          className="lg:col-span-5 flex justify-center lg:justify-end z-20"
        >
          <div className="relative group max-w-[340px] sm:max-w-[400px] w-full">
            {/* Ambient Gold Halo behind the image */}
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-gold via-secondary to-gold/40 opacity-30 blur-lg group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />

            {/* Main Image Frame */}
            <div className="relative overflow-hidden rounded-[2.2rem] border border-gold/25 aspect-[4/5] bg-secondary/30 shadow-[0_20px_50px_rgba(3,13,26,0.6)]">
              <Image
                src="/images/hero-portrait.jpg"
                alt="Dr. Sylendra Babu IPS"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 340px, 400px"
              />
              {/* Luxury dark gradient overlay to blend portrait with navy background */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/30" />
            </div>

            {/* Subtle floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-secondary/80 backdrop-blur-md border border-gold/30 rounded-2xl p-4 shadow-[0_10px_30px_rgba(3,13,26,0.4)] hidden sm:flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-gold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-5 h-5"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <p className="font-poppins text-xs font-bold text-white uppercase tracking-wider leading-none">
                  36+ Years
                </p>
                <p className="font-poppins text-[9px] text-gray-400 mt-1 leading-none">
                  Of Service Excellence
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer" onClick={() => scrollToSection("about")}>
        <span className="font-poppins text-[9px] tracking-[0.25em] text-gray-500 uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-gold rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
