'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Zap, BarChart3, TrendingUp, Video, Palette, Sparkles, FileText, Search, Globe, Key, Calendar, Layers, Compass, Code2 } from 'lucide-react';
import { techStackData } from '@/data/tech-stack';
import { TechItem } from '@/types';

const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  Share2, Zap, BarChart3, TrendingUp, Video, Palette, Sparkles, FileText, Search, Globe, Key, Calendar, Layers, Compass, Code2
};

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Analytics & Ads', 'Content Creation', 'SEO & Research', 'Soft Skills'];

  const filteredTech = activeCategory === 'All'
    ? techStackData
    : techStackData.filter(t => t.category === activeCategory);

  return (
    <section id="tech-stack" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col items-start gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-400">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>04 // MARKETING TOOLS & SOFTWARE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Analytics Suite, Content Creation & SEO Tools
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1 bg-slate-100 dark:bg-slate-800/50 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-white dark:bg-slate-800 text-violet-600 dark:text-violet-400 font-semibold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTech.map((tech, idx) => {
            const Icon = iconComponents[tech.icon] || Code2;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2, delay: idx * 0.03 }}
                className="p-4 rounded-2xl glass-panel glass-panel-hover flex items-center gap-3 border border-slate-200 dark:border-slate-800"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-500 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex flex-col min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 truncate">
                      {tech.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                    <span>{tech.level}</span>
                    <span>•</span>
                    <span>{tech.years} yrs</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
