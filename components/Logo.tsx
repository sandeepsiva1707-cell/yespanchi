import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 48 }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className="relative transition-transform duration-500 hover:rotate-[360deg] cursor-pointer drop-shadow-[0_0_8px_rgba(201,162,39,0.3)]"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo.png"
          alt="Dr. Sylendra Babu Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className="font-playfair text-lg font-bold tracking-widest text-glow text-white leading-none">
          DR. SYLENDRA BABU
        </span>
        <span className="font-poppins text-[10px] tracking-[0.25em] text-gold uppercase mt-0.5 leading-none">
          Official Executive
        </span>
      </div>
    </div>
  );
}
