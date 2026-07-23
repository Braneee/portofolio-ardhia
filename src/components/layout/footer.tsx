'use client';

import React from 'react';
import { Code2, Github, Linkedin, Twitter, ArrowUp, Heart } from 'lucide-react';
import { personalData } from '@/data/personal';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/50 py-12 px-4 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Brand info */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100">
            <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-500 flex items-center justify-center">
              <Code2 className="w-4 h-4" />
            </div>
            <span>{personalData.name}</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm text-center md:text-left">
            Digital Marketing, Social Media Strategy, Short-Form Video Production & AIDA Copywriting.
          </p>
        </div>

        {/* Center Social links */}
        <div className="flex items-center gap-4">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl glass-panel hover:text-sky-500 transition-colors text-slate-600 dark:text-slate-400"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl glass-panel hover:text-sky-500 transition-colors text-slate-600 dark:text-slate-400"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personalData.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl glass-panel hover:text-sky-500 transition-colors text-slate-600 dark:text-slate-400"
            aria-label="Twitter Profile"
          >
            <Twitter className="w-4 h-4" />
          </a>
        </div>

        {/* Right Scroll to Top */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl glass-panel hover:bg-sky-500/10 hover:text-sky-500 text-slate-600 dark:text-slate-400 transition-all"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
