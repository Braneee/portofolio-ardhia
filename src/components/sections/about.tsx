'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Compass, CheckCircle2, Award, UserCheck } from 'lucide-react';
import { personalData } from '@/data/personal';

export function AboutSection() {
  const iconMap = [ShieldCheck, Sparkles, Compass];

  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400">
            <UserCheck className="w-3.5 h-3.5" />
            <span>01 // ABOUT & STRATEGIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Analytical Engineering Mindset Meets Digital Creative
          </h2>
        </div>

        {/* Narrative & Profile Overview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Profile Picture Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col items-center"
          >
            <div className="p-4 rounded-3xl glass-panel bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-4 text-center w-full">
              <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-lg border-2 border-sky-500/30">
                <img
                  src={personalData.avatarUrl}
                  alt={personalData.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  {personalData.name}
                </h3>
                <p className="text-xs text-sky-600 dark:text-sky-400 font-medium">
                  {personalData.title}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-1">
                  Brebes, Central Java, Indonesia
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-sky-500/5 dark:bg-sky-500/10 border border-sky-500/20 text-left space-y-1 text-xs">
                <p className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-sky-500" />
                  <span>Diponegoro University (UNDIP)</span>
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Bachelor of Engineering in Urban and Regional Planning (GPA 3.74/4.00)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Main Story Paragraphs */}
          <div className="lg:col-span-8 space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {personalData.bio.full.map((paragraph, idx) => (
              <p key={idx} className="p-4 rounded-2xl glass-panel border-white/5">
                {paragraph}
              </p>
            ))}

            {/* Core Marketing Highlights */}
            <div className="p-5 rounded-2xl glass-panel bg-gradient-to-br from-sky-500/10 via-transparent to-indigo-500/10 border border-sky-500/20 space-y-3">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-500" />
                <span>Proven Campaign Pillars</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Short-Form Videos:</strong> 100+ TikTok content pieces with 15K+ views.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Instagram Growth:</strong> 163% KPI impressions (163,023 reach).</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>AIDA Copywriting:</strong> High-converting scripts & landing page copy.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>SEO & Ahrefs:</strong> Keyword research & competitor market audits.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {personalData.bio.philosophy.map((item, idx) => {
            const IconComponent = iconMap[idx % iconMap.length];
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl glass-panel glass-panel-hover space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
