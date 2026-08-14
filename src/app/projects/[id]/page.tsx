'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '@/data/projects';
import { ArrowLeft, Target, Briefcase, PlayCircle, BarChart3, Image as ImageIcon, LayoutGrid, CheckCircle2, ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/FadeIn';

function EvidenceSlider({ evidence }: { evidence: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      {/* Scroll Buttons */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 p-2 sm:p-3 bg-white border border-[#E6DCCC] rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95 disabled:opacity-0"
      >
        <ChevronLeft className="w-5 h-5 text-[#3D2E2B]" />
      </button>
      
      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 p-2 sm:p-3 bg-white border border-[#E6DCCC] rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95 disabled:opacity-0"
      >
        <ChevronRight className="w-5 h-5 text-[#3D2E2B]" />
      </button>

      {/* Slider Container */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-2 px-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {evidence.map((ev, evIdx) => (
          <a 
            key={evIdx}
            href={ev.url !== '#' ? ev.url : undefined}
            target={ev.url !== '#' ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="snap-start shrink-0 block"
          >
            <div className="relative w-[260px] sm:w-[280px] h-40 sm:h-48 bg-[#F5EBE6] border border-[#E6DCCC] rounded-[20px] overflow-hidden flex flex-col items-center justify-center cursor-pointer transition-transform hover:-translate-y-1 group">
              {ev.type === 'gallery' && ev.url !== '#' ? (
                <>
                  <img src={ev.url} alt={ev.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                  <span className="relative z-10 text-xs font-bold text-white uppercase tracking-widest px-4 text-center drop-shadow-md">
                    {ev.title}
                  </span>
                </>
              ) : (
                <>
                  {/* Placeholder Graphic */}
                  {ev.type === 'pdf' ? (
                    <FileText className="w-8 h-8 text-[#E88B73]/40 mb-3 group-hover:scale-110 transition-transform" />
                  ) : (
                    <ImageIcon className="w-8 h-8 text-[#E88B73]/40 mb-3 group-hover:scale-110 transition-transform" />
                  )}
                  <span className="relative z-10 text-xs font-bold text-[#3D2E2B] uppercase tracking-widest px-4 text-center">
                    {ev.title}
                  </span>
                </>
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#3D2E2B]/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <span className="text-white text-[10px] font-mono font-bold tracking-widest border border-white/30 px-4 py-2 rounded-full uppercase">
                  {ev.type === 'pdf' ? 'View PDF' : 'View Media'}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectsData.find(p => p.id === params.id);

  if (!project) {
    return (
      <main className="w-full min-h-screen bg-[#FAF4EA] text-[#3D2E2B] pt-32 pb-32 px-4 sm:px-6 md:px-10 flex flex-col items-center justify-center font-sans">
        <h1 className="text-4xl font-black mb-4">Project Not Found</h1>
        <Link href="/projects" className="text-[#E88B73] font-bold uppercase tracking-widest hover:underline">
          Return to Gallery
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-[#FAF4EA] text-[#3D2E2B] pt-24 pb-32 px-4 sm:px-6 md:px-10 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="mb-10">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-[#E88B73] hover:text-[#C4A468] font-bold text-sm tracking-widest uppercase transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Gallery
            </Link>
          </div>
        </FadeIn>

        {/* Project Content */}
        <FadeIn delay={0.1}>
          <article className="relative bg-white rounded-[32px] sm:rounded-[40px] border border-[#E6DCCC] p-6 sm:p-10 md:p-12 overflow-hidden shadow-xl shadow-[#3D2E2B]/5">
            
            {/* Header */}
            <div className="mb-10 sm:mb-12 max-w-3xl pr-8 sm:pr-24">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5EBE6] text-[#E88B73] rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#F4A28C]/30">
                <LayoutGrid className="w-3.5 h-3.5" />
                {project.category}
              </div>
              <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-3">
                {project.title}
              </h1>
              <h2 className="text-lg sm:text-xl font-medium text-[#3D2E2B]/70">
                {project.subtitle}
              </h2>
            </div>

            {/* Storytelling Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12">
              
              {/* Left Col: Context & Role */}
              <div className="space-y-8">
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-[#E88B73] uppercase tracking-widest text-sm mb-3">
                    <Target className="w-4 h-4" /> Project Background
                  </h4>
                  <p className="text-[#3D2E2B]/80 leading-relaxed text-sm sm:text-base">
                    {project.background}
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 font-bold text-[#E88B73] uppercase tracking-widest text-sm mb-3">
                    <Target className="w-4 h-4" /> Objective
                  </h4>
                  <p className="text-[#3D2E2B]/80 leading-relaxed text-sm sm:text-base">
                    {project.objective}
                  </p>
                </div>
              </div>

              {/* Right Col: Process & Role */}
              <div className="space-y-8">
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-[#E88B73] uppercase tracking-widest text-sm mb-3">
                    <Briefcase className="w-4 h-4" /> My Role & Contribution
                  </h4>
                  <p className="text-[#3D2E2B]/80 leading-relaxed text-sm sm:text-base">
                    {project.role}
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 font-bold text-[#E88B73] uppercase tracking-widest text-sm mb-3">
                    <PlayCircle className="w-4 h-4" /> Process / Scope of Work
                  </h4>
                  <ul className="space-y-2">
                    {project.process.map((step, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2.5 text-[#3D2E2B]/80 text-sm sm:text-base leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 mt-1 text-[#C4A468] shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-[#E6DCCC] mb-12" />

            {/* Result Section */}
            <div className="mb-12">
              <h4 className="flex items-center gap-2 font-bold text-[#E88B73] uppercase tracking-widest text-sm mb-6">
                <BarChart3 className="w-4 h-4" /> Result / Output
              </h4>
              <p className="text-[#3D2E2B]/80 leading-relaxed text-sm sm:text-base mb-6">
                {project.result.description}
              </p>
              
              {project.result.highlights && project.result.highlights.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.result.highlights.map((hl, hlIdx) => (
                    <div key={hlIdx} className="bg-[#FAF4EA] border border-[#E6DCCC] rounded-2xl p-6 flex flex-col justify-center shadow-sm">
                      <span className="text-3xl sm:text-4xl font-black text-[#3D2E2B] mb-1">{hl.value}</span>
                      <span className="text-sm font-bold text-[#E88B73] uppercase tracking-wider">{hl.label}</span>
                      {hl.sub && <span className="text-xs text-[#3D2E2B]/60 mt-1">{hl.sub}</span>}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Evidence / Deliverables Section */}
            <div>
              <h4 className="flex items-center gap-2 font-bold text-[#E88B73] uppercase tracking-widest text-sm mb-4">
                <ImageIcon className="w-4 h-4" /> Evidence & Deliverables
              </h4>
              
              {project.deliverables && (
                <p className="text-xs font-mono font-bold text-[#3D2E2B]/60 uppercase tracking-widest mb-4">
                  {project.deliverables}
                </p>
              )}
              
              <EvidenceSlider evidence={project.evidence} />
            </div>

          </article>
        </FadeIn>
      </div>
    </main>
  );
}
