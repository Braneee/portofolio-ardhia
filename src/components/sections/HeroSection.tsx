'use client';

import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Magnet } from '../ui/Magnet';
import { ContactButton } from '../ui/ContactButton';
import { DownloadCVButton } from '../ui/DownloadCVButton';

export function HeroSection() {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-between relative bg-gradient-to-b from-[#F9F6F0] via-[#FAF4EA] to-[#F5F0E6] pt-24 pb-12 px-6 sm:px-10 z-20 border-b border-[#E6DCCC] overflow-hidden">
      
      {/* Soft Warm Peach & Sage Green Ambient Color Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#F4A28C]/25 via-[#E88B73]/20 to-transparent blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#A8BBA2]/30 via-[#C4A468]/20 to-transparent blur-[130px] pointer-events-none" />
      <div className="absolute top-[35%] left-[50%] -translate-x-1/2 w-[550px] h-[400px] rounded-full bg-gradient-to-r from-[#F4A28C]/20 via-[#A8BBA2]/25 to-[#C4A468]/15 blur-[140px] pointer-events-none" />

      {/* Floating Glassmorphic Navbar */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl">
        <FadeIn delay={0} y={-20}>
          <nav className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#FAF6EE]/90 backdrop-blur-xl border border-[#E6DCCC] shadow-lg shadow-[#3D2E2B]/5">
            {/* Brand Logo */}
            <a href="#" className="font-black tracking-tighter uppercase text-sm sm:text-base text-[#3D2E2B] flex items-center gap-2 pl-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E88B73] animate-pulse" />
              <span className="bg-gradient-to-r from-[#3D2E2B] via-[#E88B73] to-[#C4A468] bg-clip-text text-transparent">ARDHIA</span>
            </a>

            {/* Nav Links */}
            <div className="flex items-center gap-1 sm:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-2 sm:px-3 py-1.5 rounded-full text-xs font-mono font-medium uppercase tracking-wider text-[#3D2E2B]/80 hover:text-[#3D2E2B] hover:bg-[#E88B73]/15 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <DownloadCVButton variant="nav" className="ml-1 sm:ml-2" />
            </div>
          </nav>
        </FadeIn>
      </header>

      {/* Hero Heading (Espresso Brown Gradient) */}
      <div className="w-full pt-10 sm:pt-14 md:pt-16 z-10">
        <FadeIn delay={0.15} y={30} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none w-full text-center text-[clamp(2.8rem,7.5vw,7.2rem)] py-2">
            Hi, i&apos;m ardhia
          </h1>
        </FadeIn>
      </div>

      {/* Centered Person Cutout (Slightly Enlarged & Bold High-Impact) */}
      <div className="relative z-20 my-4 sm:my-6 md:my-8 flex items-center justify-center">
        <FadeIn delay={0.4} y={20}>
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            <div className="relative group flex justify-center items-center">
              {/* Soft Warm Glowing Aura Behind Cutout */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-[#F4A28C]/45 via-[#A8BBA2]/40 to-[#C4A468]/35 opacity-65 blur-3xl group-hover:opacity-90 transition duration-500 pointer-events-none" />
              
              {/* Transparent Person Cutout Image (Enlarged) */}
              <img
                src="/images/ardhia-cutout.png"
                alt="Ardhia Nurul Vitra Iskandar - Digital Marketing Specialist"
                style={{
                  maxWidth: '540px',
                  maxHeight: '620px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 28px 40px rgba(61,46,43,0.3))',
                }}
                className="w-[300px] sm:w-[400px] md:w-[480px] lg:w-[540px] h-[360px] sm:h-[460px] md:h-[540px] lg:h-[620px] pointer-events-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 pt-4 z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#3D2E2B] font-light uppercase tracking-wide leading-snug text-center sm:text-left text-[clamp(0.8rem,1.2vw,1.2rem)] max-w-[280px] sm:max-w-[320px]">
            a digital marketing specialist driven by crafting striking campaigns and viral content
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="flex items-center gap-3">
          <DownloadCVButton variant="outline" />
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
