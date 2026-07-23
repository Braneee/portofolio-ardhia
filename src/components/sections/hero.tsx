'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Mail, Sparkles, TrendingUp, Award, CheckCircle2, Star } from 'lucide-react';
import { personalData } from '@/data/personal';
import { CampaignDashboard } from '../visual/campaign-dashboard';

export function HeroSection() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden">
      {/* Background Ambient Mesh */}
      <div className="mesh-gradient" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Top Grid: Bio & Profile Card Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bio & Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
            
            {/* Availability Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{personalData.status}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.1]">
                Data-Driven Growth <br />
                <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-rose-500 bg-clip-text text-transparent">
                  & Short-Form Copywriting
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                Hi, I'm <strong className="text-slate-900 dark:text-slate-200">{personalData.name}</strong>. {personalData.tagline}
              </p>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-rose-500 hover:opacity-95 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 group transition-all"
              >
                <span>Explore Marketing Campaigns</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalData.resumeUrl}
                className="px-5 py-3 rounded-xl glass-panel hover:bg-slate-200/50 dark:hover:bg-slate-800/50 text-slate-800 dark:text-slate-200 font-medium text-sm flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4 text-sky-500" />
                <span>Download CV</span>
              </a>

              <div className="flex items-center gap-2 ml-auto sm:ml-0">
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-panel hover:text-sky-500 text-slate-600 dark:text-slate-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalData.email}`}
                  className="p-3 rounded-xl glass-panel hover:text-sky-500 text-slate-600 dark:text-slate-400 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: High-Impact Profile Card with Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 w-full flex flex-col items-center justify-center"
          >
            <div className="relative group w-full max-w-sm">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-500 via-indigo-500 to-rose-500 opacity-30 group-hover:opacity-60 blur-xl transition duration-500" />

              {/* Main Card */}
              <div className="relative rounded-3xl glass-panel p-6 bg-white/90 dark:bg-slate-900/90 shadow-2xl border border-white/20 dark:border-slate-800 flex flex-col items-center text-center space-y-4">
                
                {/* Photo Frame */}
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-xl border-2 border-white dark:border-slate-700">
                  <img
                    src={personalData.avatarUrl}
                    alt={personalData.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Verified Badge */}
                  <div className="absolute bottom-2 right-2 p-1.5 rounded-full bg-sky-500 text-white shadow-md">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Name & Title */}
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">
                    {personalData.name}
                  </h2>
                  <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 mt-0.5">
                    {personalData.title}
                  </p>
                  <p className="text-[11px] font-mono text-slate-400 mt-1">
                    B.Eng. Diponegoro University (GPA 3.74)
                  </p>
                </div>

                {/* Micro Stats Row */}
                <div className="grid grid-cols-3 gap-2 w-full pt-2 border-t border-slate-200 dark:border-slate-800/80 text-center">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/60">
                    <p className="text-xs font-extrabold text-sky-500">163%</p>
                    <p className="text-[9px] text-slate-500 dark:text-slate-400">KPI Reach</p>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/60">
                    <p className="text-xs font-extrabold text-rose-500">100+</p>
                    <p className="text-[9px] text-slate-500 dark:text-slate-400">TikToks</p>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/60">
                    <p className="text-xs font-extrabold text-emerald-500">15K+</p>
                    <p className="text-[9px] text-slate-500 dark:text-slate-400">Views/Vid</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Section: Campaign Analytics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-6"
        >
          <CampaignDashboard />
        </motion.div>

        {/* Quick Metrics Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800/80 w-full"
        >
          {personalData.metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                {metric.value}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">{metric.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
