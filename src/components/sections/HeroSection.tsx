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
    <section className="h-screen min-h-[600px] max-h-[1080px] w-full flex flex-col items-center justify-between relative bg-gradient-to-b from-[#F9F6F0] via-[#FAF4EA] to-[#F5F0E6] pt-24 pb-6 sm:pb-8 px-6 sm:px-10 z-20 border-b border-[#E6DCCC] overflow-hidden">
      
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
            <div className="flex md:flex-none md:hidden items-center gap-2">
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
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Heading */}
      <div className="w-full mt-4 sm:mt-6 z-10 flex-shrink-0">
        <FadeIn delay={0.15} y={30} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none w-full text-center text-[clamp(2.8rem,7.5vw,7.2rem)] py-1">
            Hi, i&apos;m ardhia
          </h1>
        </FadeIn>
      </div>

      {/* --- DESKTOP LAYOUT --- */}
      {/* Spacer removed in favor of mt-auto on the bottom bar */}

      {/* Desktop Image: absolute, shifted down slightly to hide the hard cut behind the section overflow and bottom bar. */}
      <div className="hidden sm:flex absolute -bottom-10 lg:-bottom-16 left-1/2 -translate-x-1/2 z-10 items-end justify-center w-full pointer-events-none">
        <FadeIn delay={0.4} y={20} className="flex items-end justify-center">
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            <div className="relative group flex justify-center items-end">
              <div className="absolute inset-x-[-20%] bottom-0 top-[-20%] rounded-full bg-gradient-to-t from-[#F4A28C]/45 via-[#A8BBA2]/40 to-[#C4A468]/35 opacity-65 blur-3xl group-hover:opacity-90 transition duration-500 pointer-events-none" />
              <img
                src="/images/ardhia-cutout.png"
                alt="Ardhia Nurul Vitra Iskandar - Social Media Specialist"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'bottom',
                  filter: 'drop-shadow(0 10px 40px rgba(61,46,43,0.3))',
                }}
                className="w-auto h-[70vh] md:h-[80vh] max-h-[850px] min-h-[450px] pointer-events-auto transition-transform duration-300 group-hover:scale-[1.03] origin-bottom"
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* --- MOBILE LAYOUT --- */}
      {/* Mobile Image: pushed down with negative margin to overlap the bottom bar gradient, hiding the hard cut. */}
      <div className="flex sm:hidden flex-1 items-end justify-center w-full pointer-events-none relative z-10 -mb-8">
        <FadeIn delay={0.4} y={20} className="flex items-end justify-center w-full">
          <div className="relative flex justify-center items-end">
            <div className="absolute inset-x-[-20%] bottom-0 top-[-20%] rounded-full bg-gradient-to-t from-[#F4A28C]/45 via-[#A8BBA2]/40 to-[#C4A468]/35 opacity-65 blur-3xl pointer-events-none" />
            <img
              src="/images/ardhia-cutout.png"
              alt="Ardhia Nurul Vitra Iskandar"
              style={{
                objectFit: 'contain',
                objectPosition: 'bottom',
                filter: 'drop-shadow(0 10px 40px rgba(61,46,43,0.3))',
              }}
              className="w-auto max-w-[150%] h-[55vh] min-h-[380px] pointer-events-auto origin-bottom"
            />
          </div>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="mt-auto w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center sm:items-end gap-5 sm:gap-6 pt-12 sm:pt-2 flex-shrink-0 relative z-30 bg-gradient-to-t from-[#F5F0E6] via-[#F5F0E6]/90 to-transparent sm:bg-none pb-2 sm:pb-0">
        <FadeIn delay={0.35} y={20} className="w-full sm:w-auto flex justify-center sm:block">
          <p className="text-[#3D2E2B] font-bold sm:font-light uppercase tracking-wide leading-snug text-center sm:text-left text-[11px] sm:text-[clamp(0.8rem,1.2vw,1.2rem)] max-w-[300px] sm:max-w-[320px] drop-shadow-[0_2px_4px_rgba(255,255,255,1)] sm:drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)] px-2">
            a social media specialist driven by crafting striking campaigns and viral content
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3 w-full sm:w-auto px-2">
          <DownloadCVButton variant="outline" className="w-full sm:w-auto justify-center" />
          <ContactButton className="w-full sm:w-auto justify-center" />
        </FadeIn>
      </div>
    </section>
  );
}
