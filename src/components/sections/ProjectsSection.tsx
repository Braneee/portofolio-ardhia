'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { LiveProjectButton } from '../ui/LiveProjectButton';
import { Instagram, Video, ShoppingBag, ExternalLink, Play, Sparkles, TrendingUp, Eye, Clock, Heart, Users, Search } from 'lucide-react';

interface LinkItem {
  label: string;
  url: string;
  type: 'instagram' | 'tiktok' | 'web';
}

interface AnalyticsMetric {
  label: string;
  value: string;
  sub: string;
}

interface ProjectData {
  id: string;
  number: string;
  name: string;
  category: string;
  platform: 'instagram' | 'tiktok' | 'ecommerce';
  platformLabel: string;
  kpiMetric: string;
  mainUrl: string;
  analytics?: AnalyticsMetric[];
  searchQueries?: string[];
  links: LinkItem[];
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

const projects: ProjectData[] = [
  {
    id: 'omah-daster-eva',
    number: '01',
    name: 'Omah Daster Eva',
    category: 'Social Media Campaign',
    platform: 'instagram',
    platformLabel: 'Instagram Reels & Feed',
    kpiMetric: '163,023 Impressions (163% KPI Win)',
    mainUrl: 'https://www.instagram.com/reel/DapbDxzx06o/',
    analytics: [
      { label: 'Total Impressions', value: '163,023', sub: '163% of KPI Target' },
      { label: 'Total Engagements', value: '624', sub: '312% of KPI Target' },
      { label: 'Accounts Reached', value: '18,930', sub: 'Target Demographic' },
    ],
    links: [
      { label: 'Reel #1: Product Try-On', url: 'https://www.instagram.com/reel/DapbDxzx06o/', type: 'instagram' },
      { label: 'Reel #2: Outfit Styling', url: 'https://www.instagram.com/reel/Dar-jfcx1rQ/', type: 'instagram' },
      { label: 'Reel #3: Fabric Showcase', url: 'https://www.instagram.com/reel/DZ4UhaAxfwv/', type: 'instagram' },
      { label: 'Feed Post: AIDA Carousel', url: 'https://www.instagram.com/p/DacWAdLxHBp/', type: 'instagram' },
    ],
    col1Image1:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200',
    col1Image2:
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200',
    col2Image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'nalpamara-tiktok',
    number: '02',
    name: 'Fortis Seneca TikTok',
    category: 'Content Strategy',
    platform: 'tiktok',
    platformLabel: 'TikTok Short-Form Video',
    kpiMetric: '16,181 Views • 79.3% FYP Push',
    mainUrl: 'https://vt.tiktok.com/ZSXt5VuCy/',
    analytics: [
      { label: 'Organic Video Views', value: '16,181', sub: '14.0K Unique Viewers' },
      { label: 'For You (FYP) Share', value: '79.3%', sub: 'Viral FYP Distribution' },
      { label: 'Total Play Time', value: '11h:44m', sub: '1,970 Likes • 30 Shares' },
      { label: 'Non-Follower Reach', value: '98%', sub: '+80 New Followers Gained' },
    ],
    searchQueries: [
      'sabun nalpamara malaysia (5.7%)',
      'nalpamara (5.0%)',
      'nalpamara soap review (4.2%)',
    ],
    links: [
      { label: 'TikTok #1: Skin Brightener Hook (16.1K Views)', url: 'https://vt.tiktok.com/ZSXt5VuCy/', type: 'tiktok' },
      { label: 'TikTok #2: Oral Care Routine', url: 'https://vt.tiktok.com/ZSXt5tfp4/', type: 'tiktok' },
      { label: 'TikTok #3: UGC Testimonial', url: 'https://vt.tiktok.com/ZSXtmLprp/', type: 'tiktok' },
    ],
    col1Image1:
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=1200',
    col1Image2:
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=1200',
    col2Image:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'kukiss-bae',
    number: '03',
    name: 'Kukiss.bae E-Commerce',
    category: 'Brand Ownership',
    platform: 'ecommerce',
    platformLabel: 'D2C Cookie Brand',
    kpiMetric: 'Founder & Brand Owner',
    mainUrl: 'https://www.linkedin.com/in/ardhianurul',
    links: [
      { label: 'LinkedIn Profile Overview', url: 'https://www.linkedin.com/in/ardhianurul', type: 'web' },
    ],
    col1Image1:
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=1200',
    col1Image2:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200',
    col2Image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1200',
  },
];

function Card({
  project,
  index,
  total,
  progress,
}: {
  project: ProjectData;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const start = index / total;
  const scale = useTransform(progress, [start, 1], [1, targetScale]);

  const renderPlatformIcon = (type: 'instagram' | 'tiktok' | 'web' | 'ecommerce') => {
    if (type === 'instagram') {
      return <Instagram className="w-4 h-4 text-pink-400" />;
    }
    if (type === 'tiktok') {
      return <Video className="w-4 h-4 text-cyan-400" />;
    }
    return <ShoppingBag className="w-4 h-4 text-amber-400" />;
  };

  return (
    <div className="sticky top-20 sm:top-24 md:top-28 min-h-[85vh] flex items-center justify-center mb-12 sm:mb-16">
      <motion.div
        style={{
          scale,
          top: `${index * 24}px`,
        }}
        className="relative w-full max-w-6xl rounded-[35px] sm:rounded-[45px] md:rounded-[55px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] p-5 sm:p-7 md:p-9 flex flex-col justify-between overflow-hidden shadow-2xl space-y-6"
      >
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#D7E2EA]/15 pb-5">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-black text-[#D7E2EA] text-[clamp(2.2rem,5vw,4.5rem)] leading-none select-none">
              {project.number}
            </span>
            <div>
              <h3 className="text-[#D7E2EA] font-bold text-xl sm:text-2xl md:text-3xl uppercase tracking-wide">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton href={project.mainUrl} />
        </div>

        {/* Analytics Studio Stats Grid */}
        {project.analytics && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#121212] p-4 rounded-2xl border border-[#D7E2EA]/10">
            {project.analytics.map((st, sIdx) => (
              <div key={sIdx} className="p-3 rounded-xl bg-[#181818] border border-[#D7E2EA]/5 space-y-0.5">
                <span className="text-[10px] font-mono uppercase text-[#D7E2EA]/60 block">{st.label}</span>
                <span className="text-base sm:text-lg font-extrabold font-mono text-sky-400 block">{st.value}</span>
                <span className="text-[10px] font-mono text-emerald-400 block">{st.sub}</span>
              </div>
            ))}
          </div>
        )}

        {/* Real Links Badge Bar (Instagram / TikTok Links) */}
        <div className="flex items-center gap-2 flex-wrap bg-[#141414] p-3 rounded-2xl border border-[#D7E2EA]/10">
          <span className="text-xs font-mono uppercase tracking-wider text-[#D7E2EA]/60 mr-2 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" /> Direct Content Links:
          </span>
          {project.links.map((link, lIdx) => (
            <a
              key={lIdx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1F1F1F] hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 text-xs text-[#D7E2EA] font-medium border border-[#D7E2EA]/15 transition-all shadow-sm hover:scale-105"
            >
              {renderPlatformIcon(link.type)}
              <span>{link.label}</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          ))}
        </div>

        {/* Image Grid Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 min-h-[260px]">
          {/* Left Column (40% width) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <a
              href={project.mainUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group h-[150px] sm:h-[180px] w-full rounded-[25px] sm:rounded-[35px] overflow-hidden bg-[#181818] border border-[#D7E2EA]/10"
            >
              <img
                src={project.col1Image1}
                alt={`${project.name} preview 1`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs font-bold uppercase tracking-wider">
                <Play className="w-4 h-4 fill-white" /> View on Platform
              </div>
            </a>

            <a
              href={project.mainUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group h-[160px] sm:h-[190px] w-full rounded-[25px] sm:rounded-[35px] overflow-hidden bg-[#181818] border border-[#D7E2EA]/10 flex-1"
            >
              <img
                src={project.col1Image2}
                alt={`${project.name} preview 2`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs font-bold uppercase tracking-wider">
                <Play className="w-4 h-4 fill-white" /> Open Media Link
              </div>
            </a>
          </div>

          {/* Right Column (60% width) */}
          <div className="lg:col-span-7 h-full min-h-[220px]">
            <a
              href={project.mainUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-full h-full rounded-[25px] sm:rounded-[35px] overflow-hidden bg-[#181818] border border-[#D7E2EA]/10 block"
            >
              <img
                src={project.col2Image}
                alt={`${project.name} main preview`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div className="flex items-center justify-between w-full">
                  <span className="text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-full border border-white/20">
                    {renderPlatformIcon(project.platform)} Click to Watch Full Campaign
                  </span>
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>
            </a>
          </div>
        </div>

      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-gradient-to-b from-[#161224] via-[#241535] to-[#13111C] border-b border-[#C084FC]/15 text-[#E2E8F0] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24 sm:pb-32 w-full"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 md:mb-28 text-center">
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
          Projects
        </h2>
      </FadeIn>

      {/* Sticky Stacking Cards */}
      <div className="relative max-w-6xl mx-auto flex flex-col">
        {projects.map((project, idx) => (
          <Card
            key={project.id}
            project={project}
            index={idx}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
