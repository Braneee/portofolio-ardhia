'use client';

import React, { useState } from 'react';
import { TrendingUp, Eye, Heart, Share2, Sparkles, CheckCircle2, Award, FileText, Video } from 'lucide-react';
import { motion } from 'framer-motion';

export function CampaignDashboard() {
  const [activeTab, setActiveTab] = useState<'instagram' | 'tiktok' | 'aida'>('instagram');

  return (
    <div className="w-full rounded-2xl glass-panel shadow-2xl overflow-hidden border border-white/10 dark:border-slate-800 bg-slate-950 text-slate-200 text-xs font-sans">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] text-slate-300 font-medium flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-sky-400" /> Campaign Performance Suite
          </span>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('instagram')}
            className={`px-2.5 py-1 rounded text-[10px] font-medium transition-colors ${
              activeTab === 'instagram' ? 'bg-sky-500/20 text-sky-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Instagram KPI
          </button>
          <button
            onClick={() => setActiveTab('tiktok')}
            className={`px-2.5 py-1 rounded text-[10px] font-medium transition-colors ${
              activeTab === 'tiktok' ? 'bg-sky-500/20 text-sky-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            TikTok Scale
          </button>
          <button
            onClick={() => setActiveTab('aida')}
            className={`px-2.5 py-1 rounded text-[10px] font-medium transition-colors ${
              activeTab === 'aida' ? 'bg-sky-500/20 text-sky-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            AIDA Copy
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 space-y-4 min-h-[210px]">
        {activeTab === 'instagram' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-semibold text-sky-400">Omah Daster Eva — Campaign Audit</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-mono font-bold">163% KPI Win</span>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <p className="text-[10px] text-slate-400">Impressions</p>
                <p className="text-base font-extrabold text-white mt-0.5">163,023</p>
                <p className="text-[9px] text-emerald-400 font-mono mt-0.5">+63% over target</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <p className="text-[10px] text-slate-400">Engagements</p>
                <p className="text-base font-extrabold text-white mt-0.5">624</p>
                <p className="text-[9px] text-emerald-400 font-mono mt-0.5">312% of KPI</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <p className="text-[10px] text-slate-400">Accounts Reached</p>
                <p className="text-base font-extrabold text-white mt-0.5">18,930</p>
                <p className="text-[9px] text-sky-400 font-mono mt-0.5">94% Target Achieved</p>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'tiktok' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-semibold text-sky-400">Fortis Seneca — TikTok Portfolio</span>
              <span className="text-[10px] bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded-full font-mono font-bold">100+ Videos</span>
            </div>

            <div className="space-y-2 pt-1 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-rose-400" />
                  <span className="font-semibold text-slate-200">Nalpamara Herbal Soap</span>
                </div>
                <span className="text-emerald-400 font-mono text-xs font-bold">15,000+ Views/Video</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-sky-400" />
                  <span className="font-semibold text-slate-200">Formula Oral Care</span>
                </div>
                <span className="text-emerald-400 font-mono text-xs font-bold">High Organic Engagement</span>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'aida' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-[10px] font-bold text-amber-400 font-mono uppercase">Attention (Hook)</span>
              <p className="text-slate-300 text-[11px]">"Stop scroll! Ini rahasia kulit bersih bebas kusam tanpa skincare mahal..."</p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-[10px] font-bold text-sky-400 font-mono uppercase">Desire & Action (CTA)</span>
              <p className="text-slate-300 text-[11px]">"Diskon 40% khusus hari ini. Klik keranjang kuning sebelum kehabisan!"</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
