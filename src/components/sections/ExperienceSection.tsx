'use client';

import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { experienceData } from '../../data/experience';
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-[#F9F6F0] via-[#FAF4EA] to-[#F5F0E6] text-[#3D2E2B] relative z-10 w-full border-b border-[#E6DCCC] overflow-hidden">
      
      {/* Soft Ambient Orbs */}
      <div className="absolute top-[30%] right-[-5%] w-[450px] h-[450px] rounded-full bg-[#A8BBA2]/25 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-[#F4A28C]/20 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        
        {/* Section Header */}
        <FadeIn delay={0} y={40} className="text-center relative z-20">
            <span className="bg-[#F5F0E6] px-4 md:px-10 py-2 rounded-2xl relative z-20 inline-block ring-2 ring-white/50 shadow-[0_4px_20px_rgba(245,240,230,1)]">
              <h2 className="hero-heading font-black uppercase text-[clamp(2.3rem,8vw,120px)] leading-none tracking-tight text-[#3D2E2B]">
                Experience
              </h2>
            </span>
          </FadeIn>

        {/* Timeline Wrapper (Responsive: Left on Mobile, Dead-Center on Desktop) */}
        <div className="relative w-full z-0">
          
          {/* Vertical Line */}
          <div className="absolute bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#E88B73] via-[#C4A468] to-[#6B8065] shadow-[0_0_15px_rgba(232,139,115,0.3)] z-0" style={{ top: "-500px" }} />

          {/* Cards Stack */}
          <div className="space-y-10 sm:space-y-16 relative z-10">
            
            {experienceData.map((exp, idx) => {
              const isRight = idx % 2 === 0;

              return (
                <FadeIn key={exp.id} delay={idx * 0.15} y={30}>
                  <div className="relative flex items-center justify-between w-full min-h-[120px]">
                    
                    {/* DESKTOP LEFT SLOT */}
                    <div className="w-full md:w-[calc(50%-2.5rem)] hidden md:block">
                      {!isRight && (
                        <div className="group relative p-6 sm:p-8 rounded-[32px] bg-gradient-to-br from-[#FFFFFF] to-[#FAF6EE] border-[1.5px] border-white shadow-[0_8px_30px_rgba(61,46,43,0.04)] hover:shadow-[0_20px_40px_rgba(232,139,115,0.08)] space-y-5 hover:-translate-y-1 transition-all duration-500 overflow-hidden ring-1 ring-black/[0.03]">
                          {/* Inner soft glow */}
                          <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#E88B73]/10 rounded-full blur-[40px] group-hover:bg-[#E88B73]/20 transition-colors duration-500 pointer-events-none" />
                          
                          <div className="space-y-3 relative z-10">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                              <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-white border border-[#E6DCCC] text-[#E88B73] flex items-center gap-1.5 font-bold shadow-sm">
                                <Calendar className="w-3.5 h-3.5" /> {exp.period}
                              </span>
                              {exp.location && (
                                <span className="text-[10px] font-mono text-[#6B8065] flex items-center gap-1 font-bold bg-[#EBF0EA]/50 px-2.5 py-1 rounded-full">
                                  <MapPin className="w-3 h-3" /> {exp.location}
                                </span>
                              )}
                            </div>
                            <div className="pt-2">
                              <h3 className="font-black text-xl sm:text-[22px] leading-tight text-[#3D2E2B] group-hover:text-[#E88B73] transition-colors duration-300">
                                {exp.role}
                              </h3>
                              <div className="flex items-center gap-2 flex-wrap mt-2">
                                <p className="text-sm font-bold text-[#C4A468]">
                                  {exp.company}
                                </p>
                                {exp.type && (
                                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-white border border-[#C4A468]/30 text-[#C4A468] font-bold uppercase tracking-widest shadow-sm">
                                    {exp.type}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-sm text-[#59443F] leading-relaxed font-medium relative z-10">
                            {exp.description}
                          </p>
                          
                          {exp.achievements && exp.achievements.length > 0 && (
                            <div className="pt-4 border-t border-dashed border-[#E6DCCC] space-y-2.5 relative z-10">
                              {exp.achievements.map((h, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-2.5 text-[13px] text-[#3D2E2B]/80 leading-relaxed font-medium">
                                  <span className="text-[#E88B73] font-black mt-0.5 shrink-0">✦</span>
                                  <span>{h}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* NODE DOT (Left 4 on Mobile, Center on Desktop) */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full border-4 border-[#FAF4EA] bg-[#E88B73] shadow-lg z-30 transition-transform duration-300 hover:scale-125 ring-2 ring-[#E88B73]/20">
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white animate-pulse" />
                    </div>

                    {/* RIGHT / MOBILE SLOT */}
                    <div className="w-[calc(100%-3rem)] ml-auto md:ml-0 md:w-[calc(50%-2.5rem)]">
                      {isRight ? (
                        <div className="group relative p-6 sm:p-8 rounded-[32px] bg-gradient-to-br from-[#FFFFFF] to-[#FAF6EE] border-[1.5px] border-white shadow-[0_8px_30px_rgba(61,46,43,0.04)] hover:shadow-[0_20px_40px_rgba(232,139,115,0.08)] space-y-5 hover:-translate-y-1 transition-all duration-500 overflow-hidden ring-1 ring-black/[0.03]">
                          {/* Inner soft glow */}
                          <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#E88B73]/10 rounded-full blur-[40px] group-hover:bg-[#E88B73]/20 transition-colors duration-500 pointer-events-none" />
                          
                          <div className="space-y-3 relative z-10">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                              <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-white border border-[#E6DCCC] text-[#E88B73] flex items-center gap-1.5 font-bold shadow-sm">
                                <Calendar className="w-3.5 h-3.5" /> {exp.period}
                              </span>
                              {exp.location && (
                                <span className="text-[10px] font-mono text-[#6B8065] flex items-center gap-1 font-bold bg-[#EBF0EA]/50 px-2.5 py-1 rounded-full">
                                  <MapPin className="w-3 h-3" /> {exp.location}
                                </span>
                              )}
                            </div>
                            <div className="pt-2">
                              <h3 className="font-black text-xl sm:text-[22px] leading-tight text-[#3D2E2B] group-hover:text-[#E88B73] transition-colors duration-300">
                                {exp.role}
                              </h3>
                              <div className="flex items-center gap-2 flex-wrap mt-2">
                                <p className="text-sm font-bold text-[#C4A468]">
                                  {exp.company}
                                </p>
                                {exp.type && (
                                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-white border border-[#C4A468]/30 text-[#C4A468] font-bold uppercase tracking-widest shadow-sm">
                                    {exp.type}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-sm text-[#59443F] leading-relaxed font-medium relative z-10">
                            {exp.description}
                          </p>
                          
                          {exp.achievements && exp.achievements.length > 0 && (
                            <div className="pt-4 border-t border-dashed border-[#E6DCCC] space-y-2.5 relative z-10">
                              {exp.achievements.map((h, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-2.5 text-[13px] text-[#3D2E2B]/80 leading-relaxed font-medium">
                                  <span className="text-[#E88B73] font-black mt-0.5 shrink-0">✦</span>
                                  <span>{h}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        /* Mobile Fallback for Left items */
                        <div className="block md:hidden group relative p-6 sm:p-8 rounded-[32px] bg-gradient-to-br from-[#FFFFFF] to-[#FAF6EE] border-[1.5px] border-white shadow-[0_8px_30px_rgba(61,46,43,0.04)] hover:shadow-[0_20px_40px_rgba(232,139,115,0.08)] space-y-5 transition-all duration-500 overflow-hidden ring-1 ring-black/[0.03]">
                          {/* Inner soft glow */}
                          <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#E88B73]/10 rounded-full blur-[40px] group-hover:bg-[#E88B73]/20 transition-colors duration-500 pointer-events-none" />
                          
                          <div className="space-y-3 relative z-10">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                              <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-white border border-[#E6DCCC] text-[#E88B73] flex items-center gap-1.5 font-bold shadow-sm">
                                <Calendar className="w-3.5 h-3.5" /> {exp.period}
                              </span>
                              {exp.location && (
                                <span className="text-[10px] font-mono text-[#6B8065] flex items-center gap-1 font-bold bg-[#EBF0EA]/50 px-2.5 py-1 rounded-full">
                                  <MapPin className="w-3 h-3" /> {exp.location}
                                </span>
                              )}
                            </div>
                            <div className="pt-2">
                              <h3 className="font-black text-xl sm:text-[22px] leading-tight text-[#3D2E2B] group-hover:text-[#E88B73] transition-colors duration-300">
                                {exp.role}
                              </h3>
                              <div className="flex items-center gap-2 flex-wrap mt-2">
                                <p className="text-sm font-bold text-[#C4A468]">
                                  {exp.company}
                                </p>
                                {exp.type && (
                                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-white border border-[#C4A468]/30 text-[#C4A468] font-bold uppercase tracking-widest shadow-sm">
                                    {exp.type}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-sm text-[#59443F] leading-relaxed font-medium relative z-10">
                            {exp.description}
                          </p>
                          
                          {exp.achievements && exp.achievements.length > 0 && (
                            <div className="pt-4 border-t border-dashed border-[#E6DCCC] space-y-2.5 relative z-10">
                              {exp.achievements.map((h, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-2.5 text-[13px] text-[#3D2E2B]/80 leading-relaxed font-medium">
                                  <span className="text-[#E88B73] font-black mt-0.5 shrink-0">✦</span>
                                  <span>{h}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                  </div>
                </FadeIn>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}

