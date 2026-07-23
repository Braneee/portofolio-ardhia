'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, AlertTriangle, Lightbulb, Layers, Zap } from 'lucide-react';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md overflow-y-auto">
        
        {/* Backdrop click */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Main Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] rounded-3xl glass-panel bg-white dark:bg-slate-900 shadow-2xl border border-white/10 overflow-hidden flex flex-col my-auto"
        >
          {/* Top Banner & Header */}
          <div className="relative h-48 sm:h-64 w-full overflow-hidden shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 text-slate-300 hover:text-white hover:bg-slate-950/90 transition-all backdrop-blur-md"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title overlay */}
            <div className="absolute bottom-4 left-6 right-6 flex flex-col gap-1">
              <span className="inline-block w-fit px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-700 dark:text-slate-300 text-sm">
            
            {/* Impact Metrics Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-sky-500/5 dark:bg-sky-500/10 border border-sky-500/20">
              {project.impactMetrics.map((metric, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-sky-500 shrink-0" />
                  <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                    {metric}
                  </span>
                </div>
              ))}
            </div>

            {/* Architecture Breakdown */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-500" />
                <span>System Architecture</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {project.architecture.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {project.architecture.components.map((comp, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl glass-panel space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-slate-900 dark:text-slate-100">{comp.name}</span>
                      <span className="text-[10px] font-mono text-sky-500 bg-sky-500/10 px-1.5 py-0.5 rounded">{comp.tech}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{comp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <span>Engineering Challenges</span>
                </h4>
                <ul className="space-y-2">
                  {project.challenges.map((ch, idx) => (
                    <li key={idx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-emerald-500" />
                  <span>Technical Solutions</span>
                </h4>
                <ul className="space-y-2">
                  {project.solutions.map((sol, idx) => (
                    <li key={idx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Tech Stack</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer CTAs */}
          <div className="p-6 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl glass-panel hover:text-sky-500 flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white flex items-center gap-2 text-xs font-medium shadow-md shadow-sky-500/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            >
              Close (ESC)
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
