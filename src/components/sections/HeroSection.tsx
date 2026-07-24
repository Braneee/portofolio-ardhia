'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { Magnet } from '../ui/Magnet';
import { ContactButton } from '../ui/ContactButton';
import { DownloadCVButton } from '../ui/DownloadCVButton';

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-between relative bg-gradient-to-b from-[#F9F6F0] via-[#FAF4EA] to-[#F5F0E6] pt-20 pb-10 px-6 sm:px-10 z-20 border-b border-[#E6DCCC] overflow-hidden">
      
      {/* Soft Warm Peach & Sage Green Ambient Color Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#F4A28C]/25 via-[#E88B73]/20 to-transparent blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#A8BBA2]/30 via-[#C4A468]/20 to-transparent blur-[130px] pointer-events-none" />
      <div className="absolute top-[35%] left-[50%] -translate-x-1/2 w-[550px] h-[400px] rounded-full bg-gradient-to-r from-[#F4A28C]/20 via-[#A8BBA2]/25 to-[#C4A468]/15 blur-[140px] pointer-events-none" />

      {/* Floating Glassmorphic Navbar */}
      <header className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl">
        <FadeIn delay={0} y={-20}>
          <nav className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#FAF6EE]/95 backdrop-blur-2xl border border-[#E6DCCC] shadow-lg shadow-[#3D2E2B]/5">
            {/* Brand Logo */}
            <a href="#" className="font-black tracking-tighter uppercase text-sm sm:text-base text-[#3D2E2B] flex items-center gap-2 pl-1 sm:pl-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E88B73] animate-pulse" />
              <span className="bg-gradient-to-r from-[#3D2E2B] via-[#E88B73] to-[#C4A468] bg-clip-text text-transparent">ARDHIA</span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1 sm:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#3D2E2B]/80 hover:text-[#3D2E2B] hover:bg-[#E88B73]/15 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <DownloadCVButton variant="nav" className="ml-2" />
            </div>

            {/* Mobile Nav Actions (CV + Hamburger Button) */}
            <div className="flex md:hidden items-center gap-2">
              <DownloadCVButton variant="nav" />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-[#F5EBE6] text-[#3D2E2B] border border-[#F4A28C]/40 hover:bg-[#E88B73]/20 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4 text-[#E88B73]" /> : <Menu className="w-4 h-4 text-[#3D2E2B]" />}
              </button>
            </div>
          </nav>
        </FadeIn>

        {/* Mobile Dropdown Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 p-5 rounded-[28px] bg-[#FAF6EE]/95 backdrop-blur-2xl border border-[#E6DCCC] shadow-2xl space-y-3"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider text-[#3D2E2B] hover:bg-[#F5EBE6] hover:text-[#E88B73] transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E88B73]" />
                  </a>
                ))}
              </div>
              <div className="pt-2 border-t border-[#E6DCCC]">
                <DownloadCVButton variant="primary" className="w-full justify-center" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Heading (Positioned Closely Above Cutout Photo) */}
      <div className="w-full pt-16 sm:pt-20 md:pt-22 z-10">
        <FadeIn delay={0.15} y={30} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none w-full text-center text-[clamp(2.8rem,7.5vw,7.2rem)] py-1">
            Hi, i&apos;m ardhia
          </h1>
        </FadeIn>
      </div>

      {/* Centered Person Cutout (Shifted Upwards Closer to Title) */}
      <div className="relative z-20 -mt-6 sm:-mt-10 md:-mt-14 my-2 flex items-center justify-center">
        <FadeIn delay={0.4} y={20}>
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            <div className="relative group flex justify-center items-center">
              {/* Soft Warm Glowing Aura Behind Cutout */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-[#F4A28C]/45 via-[#A8BBA2]/40 to-[#C4A468]/35 opacity-65 blur-3xl group-hover:opacity-90 transition duration-500 pointer-events-none" />
              
              {/* Transparent Person Cutout Image */}
              <img
                src="/images/ardhia-cutout.png"
                alt="Ardhia Nurul Vitra Iskandar - Social Media Specialist"
                style={{
                  maxWidth: '520px',
                  maxHeight: '600px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 28px 40px rgba(61,46,43,0.3))',
                }}
                className="w-[290px] sm:w-[380px] md:w-[460px] lg:w-[520px] h-[350px] sm:h-[450px] md:h-[520px] lg:h-[600px] pointer-events-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 pt-2 z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#3D2E2B] font-light uppercase tracking-wide leading-snug text-center sm:text-left text-[clamp(0.8rem,1.2vw,1.2rem)] max-w-[280px] sm:max-w-[320px]">
            a social media specialist driven by crafting striking campaigns and viral content
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
