'use client';

import React, { useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { LiveProjectButton } from '../ui/LiveProjectButton';
import { Instagram, Video, ShoppingBag, ExternalLink, Play, Pause, Volume2, VolumeX, Sparkles, TrendingUp, Maximize2 } from 'lucide-react';

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

interface ProjectVideo {
  url: string;
  title: string;
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
  hasTwoImagesOnly?: boolean;
  hasFiveVideos?: boolean;
  video1Url?: string;
  video1Title?: string;
  video2Url?: string;
  video2Title?: string;
  video3Url?: string;
  video3Title?: string;
  video4Url?: string;
  video4Title?: string;
  video5Url?: string;
  video5Title?: string;
  videoList?: ProjectVideo[];
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
      { label: 'Reel #1: Product Recommendation', url: 'https://www.instagram.com/reel/DapbDxzx06o/', type: 'instagram' },
      { label: 'Reel #2: Outfit Styling', url: 'https://www.instagram.com/reel/Dar-jfcx1rQ/', type: 'instagram' },
      { label: 'Reel #3: Fabric Showcase', url: 'https://www.instagram.com/reel/DZ4UhaAxfwv/', type: 'instagram' },
      { label: 'Feed Post: AIDA Carousel', url: 'https://www.instagram.com/p/DacWAdLxHBp/', type: 'instagram' },
    ],
    video1Url: '/videos/reels-11-7.mov',
    video1Title: 'Reels #1: Product Recommendation',
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
    hasFiveVideos: true,
    video1Url: '/videos/fortis-seneca/fortis-video-1.mp4',
    video1Title: 'TikTok #1: Skin Brightener Hook',
    video2Url: '/videos/fortis-seneca/fortis-video-2.mp4',
    video2Title: 'TikTok #2: Oral Care Routine',
    video3Url: '/videos/fortis-seneca/fortis-video-3.mp4',
    video3Title: 'TikTok #3: UGC Testimonial',
    video4Url: '/videos/fortis-seneca/fortis-video-4.mp4',
    video4Title: 'TikTok #4: Product Showcase',
    video5Url: '/videos/fortis-seneca/fortis-video-5.mp4',
    video5Title: 'TikTok #5: Featured Campaign Reel',
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
      { label: 'TikTok #4: Viral Product Showcase', url: 'https://vt.tiktok.com/ZSXn5x9WA/', type: 'tiktok' },
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
    platform: 'instagram',
    platformLabel: 'Instagram @kukiss.bae',
    kpiMetric: 'End-to-End Branding & Operations',
    mainUrl: 'https://www.instagram.com/kukiss.bae?igsh=MWxvdGIyYXF1bDEyeQ==',
    hasTwoImagesOnly: true,
    links: [
      { label: 'Instagram @kukiss.bae', url: 'https://www.instagram.com/kukiss.bae?igsh=MWxvdGIyYXF1bDEyeQ==', type: 'instagram' },
    ],
    col1Image1: '/images/kukiss-bae-jar.png',
    col1Image2: '/images/kukiss-bae-cookies.jpg',
    col2Image: '/images/kukiss-bae-cookies.jpg',
  },
];

function InlineVideoPlayer({
  videoUrl,
  title,
  poster,
  heightClass = 'h-[160px] sm:h-[220px] md:h-[240px]',
}: {
  videoUrl: string;
  title: string;
  poster?: string;
  heightClass?: string;
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

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if ((videoRef.current as any).webkitRequestFullscreen) {
      (videoRef.current as any).webkitRequestFullscreen();
    } else if ((videoRef.current as any).msRequestFullscreen) {
      (videoRef.current as any).msRequestFullscreen();
    }
  };

  return (
    <div className={`relative group w-full ${heightClass} rounded-[20px] sm:rounded-[25px] overflow-hidden bg-[#1D1412] border border-[#E6DCCC] shadow-sm flex items-center justify-center`}>
      <video
        ref={videoRef}
        src={videoUrl}
        poster={poster}
        playsInline
        loop
        muted={isMuted}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="w-full h-full object-contain bg-[#1D1412] cursor-pointer"
        onClick={togglePlay}
      />

      {/* Video Badge Title */}
      <div className="absolute top-2 left-2 z-20 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#3D2E2B]/85 backdrop-blur-md text-white text-[9px] font-mono font-bold uppercase tracking-wider border border-white/20">
        <Video className="w-3 h-3 text-[#E88B73]" /> {title}
      </div>

      {/* Center Play/Pause Overlay Button */}
      <button
        onClick={togglePlay}
        className={`absolute inset-0 z-10 flex items-center justify-center transition-all ${
          isPlaying ? 'opacity-0 hover:opacity-100 bg-[#3D2E2B]/30' : 'bg-[#3D2E2B]/45'
        }`}
      >
        <div className="p-3 sm:p-3.5 rounded-full bg-[#E88B73] text-white shadow-xl hover:scale-110 transition-transform flex items-center justify-center">
          {isPlaying ? <Pause className="w-4.5 h-4.5 fill-white" /> : <Play className="w-4.5 h-4.5 fill-white ml-0.5" />}
        </div>
      </button>

      {/* Bottom Control Bar: Mute/Unmute + Fullscreen */}
      <div className="absolute bottom-2 right-2 z-20 flex items-center gap-1.5">
        <button
          onClick={toggleMute}
          className="p-1.5 rounded-full bg-[#3D2E2B]/85 backdrop-blur-md text-white hover:text-[#E88B73] border border-white/20 transition-colors"
          title={isMuted ? 'Unmute sound' : 'Mute sound'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#E88B73]" />}
        </button>

        <button
          onClick={toggleFullscreen}
          className="p-1.5 rounded-full bg-[#3D2E2B]/85 backdrop-blur-md text-white hover:text-[#E88B73] border border-white/20 transition-colors flex items-center gap-1 px-2 text-[10px] font-mono font-bold"
          title="Watch Fullscreen"
        >
          <Maximize2 className="w-3.5 h-3.5 text-[#E88B73]" />
          <span className="hidden sm:inline">Fullscreen</span>
        </button>
      </div>
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
  const targetScale = 1 - (total - index - 1) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  const renderPlatformIcon = (type: 'instagram' | 'tiktok' | 'web' | 'ecommerce') => {
    if (type === 'instagram') {
      return <Instagram className="w-3.5 h-3.5 text-[#E88B73]" />;
    }
    if (type === 'tiktok') {
      return <Video className="w-3.5 h-3.5 text-[#E88B73]" />;
    }
    return <ShoppingBag className="w-3.5 h-3.5 text-[#C4A468]" />;
  };

  return (
    <div className="sticky top-14 sm:top-20 flex items-center justify-center mb-10 sm:mb-14">
      <motion.div
        style={{
          scale,
          top: `${index * 16}px`,
        }}
        className="relative w-full max-w-6xl rounded-[24px] sm:rounded-[36px] md:rounded-[44px] border-2 border-[#E6DCCC] bg-[#FFFFFF] p-3.5 sm:p-5 md:p-6 flex flex-col justify-between overflow-hidden shadow-xl shadow-[#3D2E2B]/5 space-y-3 sm:space-y-4"
      >
        {/* Top Header Row */}
        <div className="flex flex-row items-center justify-between gap-2.5 border-b border-[#E6DCCC] pb-3 flex-wrap">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="font-black text-[#3D2E2B] text-xl sm:text-3xl md:text-4xl leading-none select-none">
              {project.number}
            </span>
            <h3 className="text-[#3D2E2B] font-bold text-sm sm:text-xl md:text-2xl uppercase tracking-wide">
              {project.name}
            </h3>
            {/* Clean KPI Win Badge */}
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#F5EBE6] text-[#E88B73] border border-[#F4A28C]/40 font-semibold flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-[#E88B73]" /> {project.kpiMetric}
            </span>
          </div>

          <LiveProjectButton href={project.mainUrl} label="View Campaign" />
        </div>

        {/* Real Links Badge Bar (Horizontal Scrollable Pill Bar on Mobile) */}
        <div className="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none bg-[#FAF6EE] p-2 rounded-xl border border-[#E6DCCC]">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#3D2E2B]/70 mr-1 shrink-0 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#E88B73]" /> Direct Links:
          </span>
          {project.links.map((link, lIdx) => (
            <a
              key={lIdx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FFFFFF] hover:bg-[#F5EBE6] text-[11px] text-[#3D2E2B] font-medium border border-[#E6DCCC] transition-all shadow-sm shrink-0"
            >
              {renderPlatformIcon(link.type)}
              <span>{link.label}</span>
              <ExternalLink className="w-2.5 h-2.5 text-[#3D2E2B]/50" />
            </a>
          ))}
        </div>

        {/* Media Grid */}
        {project.hasFiveVideos ? (
          /* Symmetrical 5-Video Clean Showcase Grid for Fortis Seneca TikTok */
          <div className="flex flex-col gap-3">
            {/* Top Row: 2 Main Videos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <InlineVideoPlayer
                videoUrl={project.video1Url!}
                title={project.video1Title!}
                heightClass="h-[220px] sm:h-[300px] md:h-[340px]"
              />
              <InlineVideoPlayer
                videoUrl={project.video2Url!}
                title={project.video2Title!}
                heightClass="h-[220px] sm:h-[300px] md:h-[340px]"
              />
            </div>

            {/* Bottom Row: 3 Campaign Videos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <InlineVideoPlayer
                videoUrl={project.video3Url!}
                title={project.video3Title!}
                heightClass="h-[200px] sm:h-[260px] md:h-[280px]"
              />
              <InlineVideoPlayer
                videoUrl={project.video4Url!}
                title={project.video4Title!}
                heightClass="h-[200px] sm:h-[260px] md:h-[280px]"
              />
              <InlineVideoPlayer
                videoUrl={project.video5Url!}
                title={project.video5Title!}
                heightClass="h-[200px] sm:h-[260px] md:h-[280px]"
              />
            </div>
          </div>
        ) : project.hasTwoImagesOnly ? (
          /* Symmetrical 2-Column Photo Showcase for Kukiss.bae */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Left Image Box: Jar Packaging */}
            <a
              href={project.mainUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-full h-[260px] sm:h-[350px] md:h-[380px] rounded-[20px] sm:rounded-[25px] overflow-hidden bg-[#FAF6EE] border border-[#E6DCCC] block flex items-center justify-center"
            >
              <img
                src={project.col1Image1}
                alt={`${project.name} jar packaging`}
                className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2E2B]/85 via-transparent to-transparent flex items-end p-4">
                <div className="flex items-center justify-between w-full">
                  <span className="text-white font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 bg-[#3D2E2B]/80 px-3 py-1 rounded-full border border-white/20">
                    <Instagram className="w-3.5 h-3.5 text-[#E88B73]" /> Jar Packaging Display
                  </span>
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>
            </a>

            {/* Right Image Box: Soft Cookies Platter */}
            <a
              href={project.mainUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-full h-[260px] sm:h-[350px] md:h-[380px] rounded-[20px] sm:rounded-[25px] overflow-hidden bg-[#FAF6EE] border border-[#E6DCCC] block flex items-center justify-center"
            >
              <img
                src={project.col2Image}
                alt={`${project.name} soft cookies platter`}
                className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2E2B]/85 via-transparent to-transparent flex items-end p-4">
                <div className="flex items-center justify-between w-full">
                  <span className="text-white font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 bg-[#3D2E2B]/80 px-3 py-1 rounded-full border border-white/20">
                    <Instagram className="w-3.5 h-3.5 text-[#E88B73]" /> Product Platter Showcase
                  </span>
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>
            </a>
          </div>
        ) : (
          /* Standard Multi-Media Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
            {/* Left Column (5 cols) - Video slots */}
            <div className="lg:col-span-5 flex flex-col gap-3">
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
                  className="relative group h-[160px] sm:h-[220px] md:h-[240px] w-full rounded-[20px] sm:rounded-[25px] overflow-hidden bg-[#FAF6EE] border border-[#E6DCCC] flex items-center justify-center"
                >
                  <img
                    src={project.col1Image1}
                    alt={`${project.name} preview 1`}
                    className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#3D2E2B]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-mono text-[11px] font-bold uppercase tracking-wider">
                    <Play className="w-3.5 h-3.5 fill-white" /> View on Platform
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
                  className="relative group h-[160px] sm:h-[220px] md:h-[240px] w-full rounded-[20px] sm:rounded-[25px] overflow-hidden bg-[#FAF6EE] border border-[#E6DCCC] flex items-center justify-center"
                >
                  <img
                    src={project.col1Image2}
                    alt={`${project.name} preview 2`}
                    className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#3D2E2B]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-mono text-[11px] font-bold uppercase tracking-wider">
                    <Play className="w-3.5 h-3.5 fill-white" /> Open Media Link
                  </div>
                </a>
              )}
            </div>

            {/* Right Column (7 cols) - Main Showcase */}
            <div className="lg:col-span-7 h-full">
              <a
                href={project.mainUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-full h-[260px] sm:h-[450px] md:h-[490px] rounded-[20px] sm:rounded-[25px] overflow-hidden bg-[#FAF6EE] border border-[#E6DCCC] block flex items-center justify-center"
              >
                <img
                  src={project.col2Image}
                  alt={`${project.name} main showcase`}
                  className="w-full h-full object-contain p-1.5 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D2E2B]/85 via-transparent to-transparent flex items-end p-4">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-white font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 bg-[#3D2E2B]/80 px-3 py-1 rounded-full border border-white/20">
                      {renderPlatformIcon(project.platform)} Click to Open Campaign
                    </span>
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        )}
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
      className="bg-gradient-to-b from-[#F5F0E6] via-[#FAF4EA] to-[#F9F6F0] border-b border-[#E6DCCC] text-[#3D2E2B] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-4 sm:px-6 md:px-10 pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-28 w-full"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40} className="mb-10 sm:mb-14 md:mb-16 text-center">
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(2.5rem,10vw,140px)]">
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
