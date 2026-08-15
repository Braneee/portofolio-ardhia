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
        icon: <TikTokLogo className="w-5 h-5 text-[#3D2E2B]" />,
      },
      {
        name: 'Meta Business Suite',
        desc: 'Instagram & Facebook campaign management',
        icon: <MetaLogo className="w-5 h-5 text-[#3D2E2B]" />,
      },
      {
        name: 'CapCut Video Editor',
        desc: 'Dynamic short-form video editing & captions',
        icon: <Scissors className="w-5 h-5 text-[#3D2E2B]" />,
      },
      {
        name: 'Instagram Insights',
        desc: 'Audience demographic & engagement analytics',
        icon: <InstagramLogo className="w-5 h-5 text-[#3D2E2B]" />,
      },
    ],
  },
  {
    title: 'SEO & Content Research',
    subtitle: 'Search Ranking, Keywords & Competitor Benchmarking',
    icon: <Search className="w-5 h-5 text-[#C4A468]" />,
    tools: [
      {
        name: 'Google Trends',
        desc: 'Search interest analytics & trending keyword discovery',
        icon: <GoogleLogo className="w-5 h-5 text-[#3D2E2B]" />,
      },
      {
        name: 'Ahrefs',
        desc: 'Keyword volume, backlink audits & competitor gaps',
        icon: <AhrefsLogo className="w-5 h-5 text-[#3D2E2B]" />,
      },
    ],
  },
  {
    title: 'Creative & Strategy',
    subtitle: 'Design Assets, Content Planning & Brand Ownership',
    icon: <PenTool className="w-5 h-5 text-[#6B8065]" />,
    tools: [
      {
        name: 'Canva Pro',
        desc: 'Social carousels, story graphics & brand kits',
        icon: <CanvaLogo className="w-5 h-5" />,
      },
      {
        name: 'Notion & Content Calendars',
        desc: 'Editorial scheduling, script hooks & workflow tracking',
        icon: <Video className="w-5 h-5 text-[#3D2E2B]" />,
      },
      {
        name: 'D2C Brand Management',
        desc: 'Packaging aesthetics, offers & WhatsApp CRM',
        icon: <Layers className="w-5 h-5 text-[#3D2E2B]" />,
      },
    ],
  },
];

export function ToolsSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 bg-[#F9F6F0] text-[#3D2E2B] relative z-10 w-full border-b border-[#E6DCCC] overflow-hidden">
      
      {/* Soft Ambient Orbs */}
      <div className="absolute top-[20%] right-[-5%] w-[450px] h-[450px] rounded-full bg-[#6B8065]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-[#F4A28C]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">
        
        {/* Left Column: Sticky Header */}
        <div className="w-full lg:w-1/3 flex-shrink-0">
          <div className="lg:sticky lg:top-32 space-y-4">
            <FadeIn delay={0} y={20}>
              <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-tight text-[#3D2E2B]">
                Tools <br className="hidden lg:block"/> & Skills
              </h2>
            </FadeIn>
            <FadeIn delay={0.1} y={20}>
              <p className="text-[#59443F] font-mono text-xs sm:text-sm tracking-widest uppercase mt-4">
                The Creative Arsenal
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Right Column: Editorial List */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <div className="w-full border-t border-[#E6DCCC]">
            {toolCategories.map((cat, idx) => (
              <FadeIn key={cat.title} delay={idx * 0.15} y={30} className="w-full">
                <div className="border-b border-[#E6DCCC] py-10 md:py-16 group">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-12 items-start">
                    
                    {/* Category Title */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] sm:text-xs text-[#E88B73] font-bold tracking-widest">
                          0{idx + 1}
                        </span>
                        <div className="h-px bg-[#E88B73]/30 w-12" />
                      </div>
                      <h3 className="font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tighter text-[#3D2E2B] leading-none">
                        {cat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#59443F] font-light max-w-xs">
                        {cat.subtitle}
                      </p>
                    </div>
                    
                    {/* Tools List */}
                    <div className="flex flex-col gap-6 sm:gap-8 mt-2 md:mt-0">
                      {cat.tools.map((tool, tIdx) => (
                        <div key={tIdx} className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 group/tool">
                          <div className="flex items-center gap-3 min-w-[220px]">
                            <div className="w-8 h-8 rounded-full bg-[#F5EBE6] flex items-center justify-center text-[#3D2E2B] group-hover/tool:bg-[#E88B73] group-hover/tool:text-white transition-colors duration-300 shrink-0">
                              {React.cloneElement(tool.icon as React.ReactElement, { className: 'w-4 h-4' })}
                            </div>
                            <span className="font-bold text-base sm:text-lg uppercase tracking-wide text-[#3D2E2B] group-hover/tool:text-[#E88B73] transition-colors duration-300">
                              {tool.name}
                            </span>
                          </div>
                          <p className="text-sm text-[#59443F] font-light leading-snug sm:pt-1">
                            {tool.desc}
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

      </div>
    </section>
  );
}
