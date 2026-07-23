'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Command, Code2, Sparkles, FolderGit2, Briefcase, Cpu, Mail, Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { CommandMenu } from '../ui/command-menu';
import { personalData } from '@/data/personal';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'experience', 'projects', 'tech-stack', 'achievements', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Tech Stack', href: '#tech-stack', id: 'tech-stack' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-4 inset-x-0 z-40 px-4 transition-all duration-300 ${
          scrolled ? 'top-3' : 'top-5'
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between p-2.5 sm:px-4 rounded-2xl glass-panel shadow-lg shadow-black/5 dark:shadow-black/20 transition-all">
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group font-bold text-slate-900 dark:text-slate-100"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight leading-tight">{personalData.name}</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">Digital Marketing Specialist</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/60 dark:bg-slate-800/40 p-1 rounded-xl border border-black/5 dark:border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-sky-600 dark:text-sky-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-white dark:bg-slate-800 rounded-lg shadow-sm -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Command Palette & Theme Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCommandOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel hover:bg-slate-200/50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-300 text-xs font-medium transition-all"
              aria-label="Open Command Menu"
            >
              <Command className="w-3.5 h-3.5 text-sky-500" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-mono rounded bg-slate-200 dark:bg-slate-800 text-slate-500">
                ⌘K
              </kbd>
            </button>

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl glass-panel text-slate-700 dark:text-slate-300"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 p-4 rounded-2xl glass-panel bg-white/95 dark:bg-slate-900/95 shadow-2xl border border-white/10 flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium rounded-xl text-slate-700 dark:text-slate-300 hover:bg-sky-500/10 hover:text-sky-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      <CommandMenu isOpen={commandOpen} onClose={() => setCommandOpen(false)} />
    </>
  );
}
