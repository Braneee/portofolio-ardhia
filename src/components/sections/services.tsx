'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Layout, Server, Zap, CheckCircle2 } from 'lucide-react';
import { servicesData } from '@/data/services';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layout, Server, Zap
};

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400">
            <Wrench className="w-3.5 h-3.5" />
            <span>08 // TECHNICAL SERVICES & ADVISORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            How I Help Teams Scale & Build
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((srv, idx) => {
            const Icon = iconMap[srv.icon] || Wrench;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="p-6 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between border border-slate-200 dark:border-slate-800 space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-500 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                      {srv.title}
                    </h3>
                    <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 mt-1">
                      {srv.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="space-y-2 border-t border-slate-200 dark:border-slate-800/60 pt-4">
                  <span className="text-[11px] font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider">
                    Core Deliverables:
                  </span>
                  <ul className="space-y-1.5">
                    {srv.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
