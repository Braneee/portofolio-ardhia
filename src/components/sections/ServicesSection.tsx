'use client';

import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { servicesData } from '../../data/services';
import { Video, Sparkles, TrendingUp, Search, Layers, CheckCircle2 } from 'lucide-react';

const serviceIcons = [
  <Video key="0" className="w-6 h-6 text-[#F472B6]" />,
  <Sparkles key="1" className="w-6 h-6 text-[#E879F9]" />,
  <TrendingUp key="2" className="w-6 h-6 text-[#38BDF8]" />,
  <Search key="3" className="w-6 h-6 text-[#34D399]" />,
  <Layers key="4" className="w-6 h-6 text-[#FBBF24]" />,
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 bg-gradient-to-b from-[#1A1328] via-[#241738] to-[#161224] text-[#E2E8F0] relative z-10 w-full border-b border-[#C084FC]/15 overflow-hidden">
      
      {/* Soft Ambient Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#E879F9]/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#38BDF8]/15 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <FadeIn delay={0} y={40} className="text-center">
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,120px)] leading-none tracking-tight">
            Services
          </h2>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((svc, idx) => (
            <FadeIn key={svc.id} delay={idx * 0.1} y={30} className="h-full">
              <div className="p-6 sm:p-8 rounded-[35px] bg-[#1E1733]/85 backdrop-blur-xl border border-[#C084FC]/25 shadow-2xl h-full flex flex-col justify-between space-y-6 hover:border-[#F472B6]/50 transition-colors group">
                
                <div className="space-y-4">
                  {/* Icon + Number */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-[#2A1E45] border border-[#C084FC]/30 shadow-inner group-hover:scale-110 transition-transform">
                      {serviceIcons[idx % serviceIcons.length]}
                    </div>
                    <span className="font-mono text-xs text-[#E879F9] font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl text-white group-hover:text-[#F472B6] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#E2E8F0]/75 font-light leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                </div>

                {/* Scope deliverables */}
                {svc.deliverables && svc.deliverables.length > 0 && (
                  <div className="pt-4 border-t border-[#C084FC]/15 space-y-2">
                    {svc.deliverables.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-2 text-xs text-[#E2E8F0]/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
