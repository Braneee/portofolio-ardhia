'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, ArrowRight, FolderGit2, Briefcase, Cpu, Award, Mail, FileText, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useToast } from '../providers/toast-provider';
import { personalData } from '@/data/personal';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const [search, setSearch] = useState('');
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'projects',
      title: 'View Projects & Case Studies',
      icon: FolderGit2,
      category: 'Navigation',
      onSelect: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'experience',
      title: 'View Work Experience',
      icon: Briefcase,
      category: 'Navigation',
      onSelect: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'tech-stack',
      title: 'Inspect Tech Stack & Skills',
      icon: Cpu,
      category: 'Navigation',
      onSelect: () => {
        document.getElementById('tech-stack')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'achievements',
      title: 'View Achievements & Honors',
      icon: Award,
      category: 'Navigation',
      onSelect: () => {
        document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'contact',
      title: 'Send a Message',
      icon: Mail,
      category: 'Contact',
      onSelect: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'copy-email',
      title: 'Copy Email Address',
      icon: Mail,
      category: 'Actions',
      onSelect: () => {
        navigator.clipboard.writeText(personalData.email);
        toast({ type: 'success', title: 'Email Copied!', message: personalData.email });
        onClose();
      }
    },
    {
      id: 'toggle-theme',
      title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      icon: theme === 'dark' ? Sun : Moon,
      category: 'Preferences',
      onSelect: () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        onClose();
      }
    }
  ];

  const filteredActions = actions.filter(
    a => a.title.toLowerCase().includes(search.toLowerCase()) || a.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl rounded-2xl glass-panel shadow-2xl border border-white/10 bg-white/95 dark:bg-slate-900/95 overflow-hidden"
        >
          {/* Search Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 dark:border-slate-800">
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Type a command or search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
              className="w-full bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none"
            />
            <kbd className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700">
              ESC
            </kbd>
          </div>

          {/* Action List */}
          <div className="max-h-80 overflow-y-auto p-2">
            {filteredActions.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-400">
                No matching actions found.
              </div>
            ) : (
              filteredActions.map((action) => {
                const Icon = action.icon;
                return (
                  <button
                    key={action.id}
                    onClick={action.onSelect}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-sky-500/10 hover:text-sky-500 text-slate-700 dark:text-slate-300 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:text-sky-500 group-hover:bg-sky-500/20 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{action.title}</p>
                        <span className="text-[10px] text-slate-400">{action.category}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Status */}
          <div className="px-4 py-2 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Raycast Navigation Palette</span>
            <span>Use ↑ ↓ to navigate, Enter to select</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
