'use client';

import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { servicesData } from '../../data/services';
import { Video, Sparkles, TrendingUp, Search, Layers, CheckCircle2 } from 'lucide-react';

const serviceIcons = [
  <Video key="0" className="w-6 h-6 text-[#E88B73]" />,
  <Sparkles key="1" className="w-6 h-6 text-[#C4A468]" />,
  <TrendingUp key="2" className="w-6 h-6 text-[#6B8065]" />,
  <Search key="3" className="w-6 h-6 text-[#E88B73]" />,
  <Layers key="4" className="w-6 h-6 text-[#C4A468]" />,
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 bg-gradient-to-b from-[#F5F0E6] via-[#FAF4EA] to-[#F9F6F0] text-[#3D2E2B] relative z-10 w-full border-b border-[#E6DCCC] overflow-hidden">
      
      {/* Soft Ambient Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#F4A28C]/20 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#A8BBA2]/25 blur-[140px] pointer-events-none" />

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
              <div className="p-6 sm:p-8 rounded-[35px] bg-[#FFFFFF] border border-[#E6DCCC] shadow-xl shadow-[#3D2E2B]/5 h-full flex flex-col justify-between space-y-6 hover:border-[#E88B73]/60 transition-colors group">
                
                <div className="space-y-4">
                  {/* Icon + Number */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-[#F5EBE6] border border-[#F4A28C]/40 shadow-inner group-hover:scale-110 transition-transform">
                      {serviceIcons[idx % serviceIcons.length]}
                    </div>
                    <span className="font-mono text-xs text-[#C4A468] font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl text-[#3D2E2B] group-hover:text-[#E88B73] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#59443F] font-light leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                </div>

                {/* Scope deliverables */}
                {svc.deliverables && svc.deliverables.length > 0 && (
                  <div className="pt-4 border-t border-[#E6DCCC] space-y-2">
                    {svc.deliverables.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-2 text-xs text-[#3D2E2B]/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#6B8065] shrink-0" />
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
