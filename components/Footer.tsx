"use client";

import React from "react";
import Logo from "./Logo";
import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      window.scrollTo({
        top: el.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-deep border-t border-gold/15 pt-20 pb-10 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-gold/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex flex-col">
              <span className="font-playfair text-xl font-bold tracking-widest text-glow text-white leading-none">
                DR. SYLENDRA BABU
              </span>
              <span className="font-poppins text-[10px] tracking-[0.25em] text-gold uppercase mt-1.5 leading-none">
                Official Executive
              </span>
            </div>
            <p className="font-poppins text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Official website of Dr. C. Sylendra Babu IPS. Serving the nation with honor 
              and empowering the next generation of civil services leaders and executives.
            </p>
          </div>

          {/* Quick Links Column 1 */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-playfair text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="#home"
                onClick={(e) => handleLinkClick(e, "home")}
                className="font-poppins text-xs text-gray-400 hover:text-gold transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleLinkClick(e, "about")}
                className="font-poppins text-xs text-gray-400 hover:text-gold transition-colors"
              >
                About Biography
              </a>
              <a
                href="#journey"
                onClick={(e) => handleLinkClick(e, "journey")}
                className="font-poppins text-xs text-gray-400 hover:text-gold transition-colors"
              >
                Journey Timeline
              </a>
              <a
                href="#books"
                onClick={(e) => handleLinkClick(e, "books")}
                className="font-poppins text-xs text-gray-400 hover:text-gold transition-colors"
              >
                Published Books
              </a>
              <a
                href="#tedx"
                onClick={(e) => handleLinkClick(e, "tedx")}
                className="font-poppins text-xs text-gray-400 hover:text-gold transition-colors"
              >
                TEDx Speaking
              </a>
            </div>
          </div>

          {/* Quick Links Column 2 */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-playfair text-sm font-bold text-white uppercase tracking-wider">
              Expertise
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="#leadership"
                onClick={(e) => handleLinkClick(e, "leadership")}
                className="font-poppins text-xs text-gray-400 hover:text-gold transition-colors"
              >
                Leadership Philosophy
              </a>
              <a
                href="#advisory"
                onClick={(e) => handleLinkClick(e, "advisory")}
                className="font-poppins text-xs text-gray-400 hover:text-gold transition-colors"
              >
                Strategic Advisory
              </a>
              <a
                href="#companies"
                onClick={(e) => handleLinkClick(e, "companies")}
                className="font-poppins text-xs text-gray-400 hover:text-gold transition-colors"
              >
                Companies & Roles
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-poppins text-[10px] text-gray-500 uppercase tracking-widest text-center sm:text-left">
            &copy; {currentYear} Dr. Sylendra Babu IPS. All Rights Reserved.
          </p>

          {/* Return to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-secondary/80 hover:bg-gold border border-gold/20 hover:border-transparent text-gold hover:text-primary flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Powered by Yespanchi */}
          <p className="font-poppins text-[10px] tracking-widest uppercase text-gray-500">
            Site is done by{" "}
            <a
              href="https://yespanchi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-bold hover:text-gold-hover transition-colors"
            >
              Yespanchi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
