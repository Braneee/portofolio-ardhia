'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, ExternalLink } from 'lucide-react';
import { achievementsData } from '@/data/achievements';

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <Award className="w-3.5 h-3.5" />
            <span>06 // HONORS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Hackathons, Publications & Awards
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-6 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between border border-slate-200 dark:border-slate-800 space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                    <Trophy className="w-5 h-5" />
                  </div>
                  {ach.badge && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                      {ach.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                  {ach.title}
                </h3>
                
                <p className="text-xs font-medium text-sky-600 dark:text-sky-400">
                  {ach.issuer} ({ach.date})
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              {ach.link && (
                <a
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-400 hover:underline pt-2"
                >
                  <span>Verify Recognition</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
