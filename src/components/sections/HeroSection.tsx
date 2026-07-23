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
    <section className="min-h-screen w-full flex flex-col items-center justify-between relative bg-gradient-to-b from-[#181326] via-[#231738] to-[#161224] pt-24 pb-12 px-6 sm:px-10 z-20 border-b border-[#C084FC]/15 overflow-hidden">
      
      {/* Soft Calm Ambient Color Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#F472B6]/25 via-[#C084FC]/20 to-transparent blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#38BDF8]/20 via-[#818CF8]/15 to-transparent blur-[130px] pointer-events-none" />
      <div className="absolute top-[35%] left-[50%] -translate-x-1/2 w-[550px] h-[400px] rounded-full bg-gradient-to-r from-[#E879F9]/20 via-[#C084FC]/15 to-[#34D399]/15 blur-[140px] pointer-events-none" />

      {/* Floating Glassmorphic Navbar */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl">
        <FadeIn delay={0} y={-20}>
          <nav className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#1A142A]/85 backdrop-blur-xl border border-[#C084FC]/30 shadow-2xl shadow-purple-950/30">
            {/* Brand Logo */}
            <a href="#" className="font-black tracking-tighter uppercase text-sm sm:text-base text-white flex items-center gap-2 pl-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F472B6] animate-pulse" />
              <span className="bg-gradient-to-r from-white via-[#F472B6] to-[#38BDF8] bg-clip-text text-transparent">ARDHIA</span>
            </a>

            {/* Nav Links */}
            <div className="flex items-center gap-1 sm:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-2 sm:px-3 py-1.5 rounded-full text-xs font-mono font-medium uppercase tracking-wider text-[#E2E8F0]/80 hover:text-white hover:bg-[#C084FC]/20 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <DownloadCVButton variant="nav" className="ml-1 sm:ml-2" />
            </div>
          </nav>
        </FadeIn>
      </header>

      {/* Hero Heading (Soft Calm Multi-tone Gradient) */}
      <div className="w-full pt-10 sm:pt-14 md:pt-16 z-10">
        <FadeIn delay={0.15} y={30} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none w-full text-center text-[clamp(2.8rem,7.5vw,7.2rem)] py-2">
            Hi, i&apos;m ardhia
          </h1>
        </FadeIn>
      </div>

      {/* Centered Person Cutout (Large & Prominent) */}
      <div className="relative z-20 my-6 sm:my-8 md:my-10 flex items-center justify-center">
        <FadeIn delay={0.4} y={20}>
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            <div className="relative group flex justify-center items-center">
              {/* Soft Calm Glowing Aura Behind Cutout */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-[#F472B6]/45 via-[#C084FC]/40 to-[#38BDF8]/35 opacity-50 blur-3xl group-hover:opacity-75 transition duration-500 pointer-events-none" />
              
              {/* Transparent Person Cutout Image */}
              <img
                src="/images/ardhia-cutout.png"
                alt="Ardhia Nurul Vitra Iskandar - Digital Marketing Specialist"
                style={{
                  maxWidth: '480px',
                  maxHeight: '560px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 25px 35px rgba(0,0,0,0.85))',
                }}
                className="w-[280px] sm:w-[380px] md:w-[440px] lg:w-[480px] h-[340px] sm:h-[440px] md:h-[500px] lg:h-[560px] pointer-events-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar (Clean Responsive Grid, No Overlap) */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 pt-6 z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#E2E8F0] font-light uppercase tracking-wide leading-snug text-center sm:text-left text-[clamp(0.8rem,1.2vw,1.2rem)] max-w-[280px] sm:max-w-[320px]">
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
