'use client';

import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Video, Search, PenTool, Scissors, Zap, Layers, BarChart2 } from 'lucide-react';

// Authentic Brand Vectors
function TikTokLogo({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 003 15.68 6.34 6.34 0 009.67 22A6.34 6.34 0 0016 15.68V9.61a8.16 8.16 0 004.77 1.52V7.68a4.85 4.85 0 01-1.18-.99z" />
    </svg>
  );
}

function MetaLogo({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.423 3.39c-1.84 0-3.37.95-4.42 2.37-1.06-1.42-2.59-2.37-4.43-2.37C4.1 3.39 1.5 6.04 1.5 9.77c0 4.14 3.73 7.8 8.87 11.23.57.38 1.33.38 1.9 0 5.14-3.43 8.87-7.09 8.87-11.23 0-3.73-2.6-6.38-6.07-6.38zm-8.85 13.9c-3.95-2.73-6.57-5.5-6.57-8.52 0-2.38 1.55-4.14 3.92-4.14 1.71 0 3.03.95 3.86 2.45.18.33.64.33.82 0 .83-1.5 2.15-2.45 3.86-2.45 2.37 0 3.92 1.76 3.92 4.14 0 3.02-2.62 5.79-6.57 8.52l-1.66 1.15-1.66-1.15z" />
    </svg>
  );
}

function GoogleLogo({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 15.987 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  );
}

function InstagramLogo({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function AhrefsLogo({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 19h4.5l2.2-4h6.6l2.2 4H22L12 2zm-1.8 9L12 7.2l1.8 3.8h-3.6z" />
    </svg>
  );
}

function CanvaLogo({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <img src="/images/canva-logo.png" alt="Canva Pro Logo" className={`${className} rounded-full object-cover shadow-sm`} />
  );
}

interface ToolItem {
  name: string;
  desc: string;
  tag: string;
  icon: React.ReactNode;
}

interface ToolCategory {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  tools: ToolItem[];
}

const toolCategories: ToolCategory[] = [
  {
    title: 'Social & Short-Form Video',
    subtitle: 'High-Volume Video Funnel & Account Management',
    icon: <Video className="w-5 h-5 text-[#E88B73]" />,
    tools: [
      {
        name: 'TikTok Creator Studio',
        desc: 'Analytics, FYP timing & short-form publishing',
        tag: 'Core Stack',
        icon: <TikTokLogo className="w-5 h-5 text-[#3D2E2B]" />,
      },
      {
        name: 'Meta Business Suite',
        desc: 'Instagram & Facebook campaign management',
        tag: 'Core Stack',
        icon: <MetaLogo className="w-5 h-5 text-[#3D2E2B]" />,
      },
      {
        name: 'CapCut Video Editor',
        desc: 'Dynamic short-form video editing & captions',
        tag: 'Creative',
        icon: <Scissors className="w-5 h-5 text-[#3D2E2B]" />,
      },
      {
        name: 'Instagram Insights',
        desc: 'Audience demographic & engagement analytics',
        tag: 'Analytics',
        icon: <InstagramLogo className="w-5 h-5 text-[#3D2E2B]" />,
      },
    ],
  },
  {
    title: 'SEO & Keyword Research',
    subtitle: 'Search Intent Analysis & Organic Growth',
    icon: <Search className="w-5 h-5 text-[#6B8065]" />,
    tools: [
      {
        name: 'Ahrefs',
        desc: 'Keyword difficulty & organic search volume',
        tag: 'SEO Audit',
        icon: <AhrefsLogo className="w-5 h-5 text-[#3D2E2B]" />,
      },
      {
        name: 'Google Trends',
        desc: 'Real-time search volume & viral topic discovery',
        tag: 'Topic Discovery',
        icon: <GoogleLogo className="w-5 h-5 text-[#3D2E2B]" />,
      },
      {
        name: 'Google Keyword Planner',
        desc: 'Commercial search intent & CPC research',
        tag: 'Search Volume',
        icon: <GoogleLogo className="w-5 h-5 text-[#3D2E2B]" />,
      },
      {
        name: 'SEO On-Page Copywriting',
        desc: 'Heading hierarchy, meta tags & long-tail copy',
        tag: 'Optimization',
        icon: <BarChart2 className="w-5 h-5 text-[#3D2E2B]" />,
      },
    ],
  },
  {
    title: 'Copywriting & Creative Design',
    subtitle: 'Persuasive AIDA Copy & Aesthetic Branding',
    icon: <PenTool className="w-5 h-5 text-[#C4A468]" />,
    tools: [
      {
        name: 'AIDA Framework',
        desc: 'Attention, Interest, Desire, Action copy structure',
        tag: 'Strategy',
        icon: <Zap className="w-5 h-5 text-[#3D2E2B]" />,
      },
      {
        name: 'Canva Pro',
        desc: 'Social media carousel & promo banner design',
        tag: 'Visual Design',
        icon: <CanvaLogo className="w-5 h-5 text-[#3D2E2B]" />,
      },
      {
        name: 'Scriptwriting & Storyboard',
        desc: '3-second hook & UGC video storyboarding',
        tag: 'Content Engine',
        icon: <Video className="w-5 h-5 text-[#3D2E2B]" />,
      },
      {
        name: 'D2C Brand Management',
        desc: 'Packaging aesthetics, offers & WhatsApp CRM',
        tag: 'E-Commerce',
        icon: <Layers className="w-5 h-5 text-[#3D2E2B]" />,
      },
    ],
  },
];

export function ToolsSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 bg-gradient-to-b from-[#F9F6F0] via-[#FAF4EA] to-[#F5F0E6] text-[#3D2E2B] relative z-10 w-full border-b border-[#E6DCCC] overflow-hidden">
      
      {/* Soft Ambient Orbs */}
      <div className="absolute top-[20%] right-[-5%] w-[450px] h-[450px] rounded-full bg-[#6B8065]/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-[#F4A28C]/20 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <FadeIn delay={0} y={40} className="text-center">
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,120px)] leading-none tracking-tight">
            Tools & Skills
          </h2>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {toolCategories.map((cat, idx) => (
            <FadeIn key={cat.title} delay={idx * 0.1} y={30} className="w-full">
              <div className="p-6 sm:p-8 rounded-[35px] border border-[#E6DCCC] bg-[#FFFFFF] shadow-xl shadow-[#3D2E2B]/5 space-y-6 h-full flex flex-col justify-between hover:border-[#E88B73]/60 transition-colors group">
                <div className="space-y-5">
                  {/* Category Header */}
                  <div className="space-y-2 border-b border-[#E6DCCC] pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#F5EBE6] border border-[#F4A28C]/30 text-[#3D2E2B] shadow-inner">
                        {cat.icon}
                      </div>
                      <h3 className="font-bold text-base sm:text-lg uppercase tracking-wide text-[#3D2E2B]">
                        {cat.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#59443F] font-light pl-1">
                      {cat.subtitle}
                    </p>
                  </div>

                  {/* Tools List */}
                  <div className="space-y-3">
                    {cat.tools.map((t, tIdx) => (
                      <div
                        key={tIdx}
                        className="p-3.5 rounded-2xl bg-[#FAF6EE] border border-[#E6DCCC] hover:border-[#E88B73]/60 hover:bg-[#F5EBE6] transition-all space-y-2 group/item"
                      >
                        <div className="flex items-center justify-between gap-2">
                          {/* Left: Icon + Name */}
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E6DCCC] text-[#3D2E2B] group-hover/item:border-[#E88B73] group-hover/item:text-[#E88B73] shrink-0 flex items-center justify-center transition-colors">
                              {t.icon}
                            </div>
                            <span className="text-xs sm:text-sm font-bold text-[#3D2E2B] group-hover/item:text-[#E88B73] transition-colors">
                              {t.name}
                            </span>
                          </div>

                          {/* Right: Tag */}
                          <span className="text-[9px] font-mono px-2.5 py-0.5 rounded-full bg-[#FFFFFF] text-[#6B8065] border border-[#E6DCCC] shrink-0 font-semibold">
                            {t.tag}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-[11px] text-[#59443F] font-light pl-12">
                          {t.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
