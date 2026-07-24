'use client';

import React, { useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { LiveProjectButton } from '../ui/LiveProjectButton';
import { Instagram, Video, ShoppingBag, ExternalLink, Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';

interface ProjectLink {
  label: string;
  url: string;
  type: 'instagram' | 'tiktok' | 'web' | 'ecommerce';
}

interface AnalyticsMetric {
  label: string;
  value: string;
  sub: string;
}

interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  platform: 'instagram' | 'tiktok' | 'web' | 'ecommerce';
  platformLabel: string;
  kpiMetric: string;
  mainUrl: string;
  analytics?: AnalyticsMetric[];
  searchQueries?: string[];
  links: ProjectLink[];
  video1Url?: string;
  video1Title?: string;
  video2Url?: string;
  video2Title?: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

const projects: Project[] = [
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
    video1Url: '/videos/reels-11-7.mov',
    video1Title: 'Reels #1: Product Try-On',
    video2Url: '/videos/proses-packing.mov',
    video2Title: 'Reels #2: Order Packing',
    col1Image1:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200',
    col1Image2:
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200',
    col2Image: '/images/omah-daster-bestseller.png',
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
    name: 'KUKISS.BAE Brand',
    category: 'Brand Ownership',
    platform: 'ecommerce',
    platformLabel: 'D2C E-Commerce Brand',
    kpiMetric: 'End-to-End Branding & Operations',
    mainUrl: 'https://www.linkedin.com/in/ardhianurul',
    analytics: [
      { label: 'Monthly Orders', value: 'Continuous', sub: 'Homemade Artisanal Cookies' },
      { label: 'Content Assets Created', value: '50+ Videos', sub: 'Product Shoots & Reels' },
      { label: 'WhatsApp Conversion', value: 'High CRM', sub: 'Repeat Customer Retention' },
    ],
    links: [
      { label: 'Brand Portfolio & LinkedIn', url: 'https://www.linkedin.com/in/ardhianurul', type: 'ecommerce' },
    ],
    col1Image1:
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=1200',
    col1Image2:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=1200',
    col2Image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200',
  },
];

function InlineVideoPlayer({
  videoUrl,
  title,
  poster,
}: {
  videoUrl: string;
  title: string;
  poster?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative group w-full h-[200px] sm:h-[220px] rounded-[25px] sm:rounded-[35px] overflow-hidden bg-[#2D211F] border border-[#E6DCCC] shadow-md">
      <video
        ref={videoRef}
        src={videoUrl}
        poster={poster}
        playsInline
        loop
        muted={isMuted}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="w-full h-full object-cover"
      />

      {/* Video Badge Title */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3D2E2B]/85 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider border border-white/20">
        <Video className="w-3.5 h-3.5 text-[#E88B73]" /> {title}
      </div>

      {/* Center Play/Pause Overlay Button */}
      <button
        onClick={togglePlay}
        className={`absolute inset-0 z-10 flex items-center justify-center transition-all ${
          isPlaying ? 'opacity-0 hover:opacity-100 bg-[#3D2E2B]/30' : 'bg-[#3D2E2B]/50'
        }`}
      >
        <div className="p-3.5 rounded-full bg-[#E88B73] text-white shadow-2xl hover:scale-110 transition-transform flex items-center justify-center">
          {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
        </div>
      </button>

      {/* Mute/Unmute Control */}
      <button
        onClick={toggleMute}
        className="absolute bottom-3 right-3 z-20 p-2 rounded-full bg-[#3D2E2B]/85 backdrop-blur-md text-white hover:text-[#E88B73] border border-white/20 transition-colors"
        title={isMuted ? 'Unmute sound' : 'Mute sound'}
      >
        {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#E88B73]" />}
      </button>
    </div>
  );
}

function Card({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: any;
}) {
  const targetScale = 1 - (total - index - 1) * 0.05;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  const renderPlatformIcon = (type: 'instagram' | 'tiktok' | 'web' | 'ecommerce') => {
    if (type === 'instagram') {
      return <Instagram className="w-4 h-4 text-[#E88B73]" />;
    }
    if (type === 'tiktok') {
      return <Video className="w-4 h-4 text-[#E88B73]" />;
    }
    return <ShoppingBag className="w-4 h-4 text-[#C4A468]" />;
  };

  return (
    <div className="sticky top-20 sm:top-24 md:top-28 min-h-[85vh] flex items-center justify-center mb-12 sm:mb-16">
      <motion.div
        style={{
          scale,
          top: `${index * 24}px`,
        }}
        className="relative w-full max-w-6xl rounded-[35px] sm:rounded-[45px] md:rounded-[55px] border-2 border-[#E6DCCC] bg-[#FFFFFF] p-5 sm:p-7 md:p-9 flex flex-col justify-between overflow-hidden shadow-2xl shadow-[#3D2E2B]/5 space-y-6"
      >
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#E6DCCC] pb-5">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-black text-[#3D2E2B] text-[clamp(2.2rem,5vw,4.5rem)] leading-none select-none">
              {project.number}
            </span>
            <div>
              <h3 className="text-[#3D2E2B] font-bold text-xl sm:text-2xl md:text-3xl uppercase tracking-wide">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton href={project.mainUrl} />
        </div>

        {/* Analytics Studio Stats Grid */}
        {project.analytics && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#FAF6EE] p-4 rounded-2xl border border-[#E6DCCC]">
            {project.analytics.map((st, sIdx) => (
              <div key={sIdx} className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E6DCCC] space-y-0.5">
                <span className="text-[10px] font-mono uppercase text-[#3D2E2B]/60 block">{st.label}</span>
                <span className="text-base sm:text-lg font-extrabold font-mono text-[#E88B73] block">{st.value}</span>
                <span className="text-[10px] font-mono text-[#6B8065] block">{st.sub}</span>
              </div>
            ))}
          </div>
        )}

        {/* Real Links Badge Bar */}
        <div className="flex items-center gap-2 flex-wrap bg-[#FAF6EE] p-3 rounded-2xl border border-[#E6DCCC]">
          <span className="text-xs font-mono uppercase tracking-wider text-[#3D2E2B]/70 mr-2 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#E88B73]" /> Direct Content Links:
          </span>
          {project.links.map((link, lIdx) => (
            <a
              key={lIdx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFFFFF] hover:bg-[#F5EBE6] text-xs text-[#3D2E2B] font-medium border border-[#E6DCCC] transition-all shadow-sm hover:scale-105"
            >
              {renderPlatformIcon(link.type)}
              <span>{link.label}</span>
              <ExternalLink className="w-3 h-3 text-[#3D2E2B]/50" />
            </a>
          ))}
        </div>

        {/* Media Grid (12-column) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-full min-h-[340px] sm:min-h-[400px]">
          {/* Left Column (40% width) - Video or Image slots */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {project.video1Url ? (
              <InlineVideoPlayer
                videoUrl={project.video1Url}
                title={project.video1Title || 'Video Reels #1'}
              />
            ) : (
              <a
                href={project.mainUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group h-[160px] sm:h-[190px] w-full rounded-[25px] sm:rounded-[35px] overflow-hidden bg-[#FAF6EE] border border-[#E6DCCC]"
              >
                <img
                  src={project.col1Image1}
                  alt={`${project.name} preview 1`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#3D2E2B]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs font-bold uppercase tracking-wider">
                  <Play className="w-4 h-4 fill-white" /> View on Platform
                </div>
              </a>
            )}

            {project.video2Url ? (
              <InlineVideoPlayer
                videoUrl={project.video2Url}
                title={project.video2Title || 'Video Reels #2'}
              />
            ) : (
              <a
                href={project.mainUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group h-[160px] sm:h-[190px] w-full rounded-[25px] sm:rounded-[35px] overflow-hidden bg-[#FAF6EE] border border-[#E6DCCC] flex-1"
              >
                <img
                  src={project.col1Image2}
                  alt={`${project.name} preview 2`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#3D2E2B]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs font-bold uppercase tracking-wider">
                  <Play className="w-4 h-4 fill-white" /> Open Media Link
                </div>
              </a>
            )}
          </div>

          {/* Right Column (60% width) - Main Showcase Image / Poster */}
          <div className="lg:col-span-7 h-full min-h-[260px] sm:min-h-[340px]">
            <a
              href={project.mainUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-full h-full rounded-[25px] sm:rounded-[35px] overflow-hidden bg-[#FAF6EE] border border-[#E6DCCC] block min-h-[260px]"
            >
              <img
                src={project.col2Image}
                alt={`${project.name} main showcase`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2E2B]/85 via-transparent to-transparent flex items-end p-6">
                <div className="flex items-center justify-between w-full">
                  <span className="text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 bg-[#3D2E2B]/80 px-3.5 py-1.5 rounded-full border border-white/20">
                    {renderPlatformIcon(project.platform)} Click to Open Instagram Campaign
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
      className="bg-gradient-to-b from-[#F5F0E6] via-[#FAF4EA] to-[#F9F6F0] border-b border-[#E6DCCC] text-[#3D2E2B] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24 sm:pb-32 w-full"
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
