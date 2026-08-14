'use client';

import React from 'react';
import { motion } from 'framer-motion';

const BRANDS = [
  { name: "Fortis Seneca", src: "/images/brands/fortis.jpg" },
  { name: "Nalpamara", src: "/images/brands/nalpamara.jpg" },
  { name: "Formula Oral Care", src: "/images/brands/formula.jpg" },
  { name: "Omah Daster Eva", src: "/images/brands/omah-daster-eva.png" },
  { name: "SARENA Parfum", src: "/images/brands/sarena-parfum.jpg" },
  { name: "Fin's Kitchen", src: null },
  { name: "Lamis Resto", src: null },
  { name: "Kandang Jeletot", src: null },
  { name: "KUKISS.BAE", src: null }
];

// Double the array for seamless marquee loop
const MARQUEE_ITEMS = [...BRANDS, ...BRANDS, ...BRANDS];

export function BrandsSection() {
  return (
    <section className="w-full bg-[#FAF4EA] py-16 sm:py-20 border-y border-[#E6DCCC] overflow-hidden flex flex-col items-center">
      <h3 className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#3D2E2B]/50 mb-8 sm:mb-10 text-center">
        Brands Collaborated With
      </h3>
      
      <div className="relative w-full flex overflow-hidden">
        {/* Left/Right Fade Masks */}
        <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF4EA] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF4EA] to-transparent z-10 pointer-events-none" />
        
        <motion.div
          animate={{ x: [0, -1035] }} // Adjust value based on actual width
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // speed
          }}
          className="flex flex-nowrap items-center gap-12 sm:gap-20 whitespace-nowrap px-4"
        >
          {MARQUEE_ITEMS.map((brand, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer h-12 sm:h-16"
            >
              {brand.src ? (
                <img 
                  src={brand.src} 
                  alt={brand.name} 
                  className="max-h-full max-w-[120px] sm:max-w-[150px] object-contain rounded-md" 
                />
              ) : (
                <span className="text-xl sm:text-2xl font-black uppercase text-[#3D2E2B] tracking-tight">
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
