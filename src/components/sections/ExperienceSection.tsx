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
        <FadeIn delay={0} y={40} className="text-center">
          <h2 className="hero-heading font-black uppercase text-[clamp(2.3rem,8vw,120px)] leading-none tracking-tight">
            Experience
          </h2>
        </FadeIn>

        {/* Timeline Wrapper (Responsive: Left on Mobile, Dead-Center on Desktop) */}
        <div className="relative w-full">
          
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#E88B73] via-[#C4A468] to-[#6B8065] shadow-[0_0_15px_rgba(232,139,115,0.3)] z-0 rounded-full" />

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
                        <div className="p-6 sm:p-8 rounded-[30px] bg-[#FFFFFF] border border-[#E6DCCC] shadow-xl shadow-[#3D2E2B]/5 space-y-4 hover:border-[#E88B73]/60 transition-all duration-300">
                          <div className="space-y-1">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#F5EBE6] text-[#E88B73] border border-[#F4A28C]/40 flex items-center gap-1.5 font-semibold">
                                <Calendar className="w-3 h-3 text-[#E88B73]" /> {exp.period}
                              </span>
                              {exp.location && (
                                <span className="text-xs font-mono text-[#6B8065] flex items-center gap-1">
                                  <MapPin className="w-3 h-3 text-[#6B8065]" /> {exp.location}
                                </span>
                              )}
                            </div>
                            <h3 className="font-bold text-xl sm:text-2xl text-[#3D2E2B] pt-2">
                              {exp.role}
                            </h3>
                            <p className="text-sm font-semibold text-[#E88B73]">
                              {exp.company}
                            </p>
                          </div>
                          <p className="text-xs sm:text-sm text-[#59443F] leading-relaxed font-light">
                            {exp.description}
                          </p>
                          {exp.achievements && exp.achievements.length > 0 && (
                            <div className="pt-3 border-t border-[#E6DCCC] space-y-2">
                              {exp.achievements.map((h, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-2 text-xs text-[#3D2E2B]/90">
                                  <span className="text-[#6B8065] font-bold mt-0.5">•</span>
                                  <span>{h}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* NODE DOT (Left 4 on Mobile, Center on Desktop) */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-[#E88B73] bg-[#FAF6EE] text-[#E88B73] shadow-lg z-30 transition-transform duration-300 hover:scale-125">
                      <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#E88B73] animate-pulse" />
                    </div>

                    {/* RIGHT / MOBILE SLOT */}
                    <div className="w-[calc(100%-3rem)] ml-auto md:ml-0 md:w-[calc(50%-2.5rem)]">
                      {isRight ? (
                        <div className="p-5 sm:p-8 rounded-[25px] sm:rounded-[30px] bg-[#FFFFFF] border border-[#E6DCCC] shadow-xl shadow-[#3D2E2B]/5 space-y-4 hover:border-[#E88B73]/60 transition-all duration-300">
                          <div className="space-y-1">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#F5EBE6] text-[#E88B73] border border-[#F4A28C]/40 flex items-center gap-1.5 font-semibold">
                                <Calendar className="w-3 h-3 text-[#E88B73]" /> {exp.period}
                              </span>
                              {exp.location && (
                                <span className="text-xs font-mono text-[#6B8065] flex items-center gap-1">
                                  <MapPin className="w-3 h-3 text-[#6B8065]" /> {exp.location}
                                </span>
                              )}
                            </div>
                            <h3 className="font-bold text-lg sm:text-2xl text-[#3D2E2B] pt-2">
                              {exp.role}
                            </h3>
                            <p className="text-xs sm:text-sm font-semibold text-[#E88B73]">
                              {exp.company}
                            </p>
                          </div>
                          <p className="text-xs sm:text-sm text-[#59443F] leading-relaxed font-light">
                            {exp.description}
                          </p>
                          {exp.achievements && exp.achievements.length > 0 && (
                            <div className="pt-3 border-t border-[#E6DCCC] space-y-2">
                              {exp.achievements.map((h, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-2 text-xs text-[#3D2E2B]/90">
                                  <span className="text-[#6B8065] font-bold mt-0.5">•</span>
                                  <span>{h}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        /* Mobile Fallback for Left items */
                        <div className="block md:hidden p-5 sm:p-8 rounded-[25px] sm:rounded-[30px] bg-[#FFFFFF] border border-[#E6DCCC] shadow-xl space-y-4">
                          <div className="space-y-1">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#F5EBE6] text-[#E88B73] border border-[#F4A28C]/40 flex items-center gap-1.5 font-semibold">
                                <Calendar className="w-3 h-3 text-[#E88B73]" /> {exp.period}
                              </span>
                              {exp.location && (
                                <span className="text-xs font-mono text-[#6B8065] flex items-center gap-1">
                                  <MapPin className="w-3 h-3 text-[#6B8065]" /> {exp.location}
                                </span>
                              )}
                            </div>
                            <h3 className="font-bold text-lg sm:text-2xl text-[#3D2E2B] pt-2">
                              {exp.role}
                            </h3>
                            <p className="text-xs sm:text-sm font-semibold text-[#E88B73]">
                              {exp.company}
                            </p>
                          </div>
                          <p className="text-xs sm:text-sm text-[#59443F] leading-relaxed font-light">
                            {exp.description}
                          </p>
                          {exp.achievements && exp.achievements.length > 0 && (
                            <div className="pt-3 border-t border-[#E6DCCC] space-y-2">
                              {exp.achievements.map((h, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-2 text-xs text-[#3D2E2B]/90">
                                  <span className="text-[#6B8065] font-bold mt-0.5">•</span>
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

            {/* Education Card */}
            <FadeIn delay={0.45} y={30}>
              <div className="relative flex items-center justify-between w-full min-h-[120px]">
                
                {/* DESKTOP LEFT SLOT */}
                <div className="w-full md:w-[calc(50%-2.5rem)] hidden md:block">
                  <div className="p-6 sm:p-8 rounded-[30px] bg-[#FFFFFF] border border-[#E6DCCC] shadow-xl space-y-3 hover:border-[#6B8065]/70 transition-all duration-300">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#EBF0EA] text-[#6B8065] border border-[#A8BBA2]/40 flex items-center gap-1 font-semibold">
                        2020 &ndash; 2024
                      </span>
                      <span className="text-xs font-mono text-[#C4A468] font-bold flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" /> GPA 3.74 (Cum Laude)
                      </span>
                    </div>
                    <h3 className="font-bold text-xl sm:text-2xl text-[#3D2E2B]">
                      S1 Urban & Regional Planning (S.PWK.)
                    </h3>
                    <p className="text-sm font-semibold text-[#6B8065]">
                      Diponegoro University (UNDIP)
                    </p>
                    <p className="text-xs sm:text-sm text-[#59443F] font-light leading-relaxed">
                      Graduated with honors (Cum Laude), combining data-driven analytical research, spatial planning, and strategic brand positioning.
                    </p>
                  </div>
                </div>

                {/* NODE DOT */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-[#6B8065] bg-[#FAF6EE] text-[#6B8065] shadow-lg z-30 transition-transform duration-300 hover:scale-125">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-[#6B8065]" />
                </div>

                {/* RIGHT / MOBILE SLOT */}
                <div className="w-[calc(100%-3rem)] ml-auto md:ml-0 md:w-[calc(50%-2.5rem)]">
                  <div className="block md:hidden p-5 sm:p-8 rounded-[25px] sm:rounded-[30px] bg-[#FFFFFF] border border-[#E6DCCC] shadow-xl space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#EBF0EA] text-[#6B8065] border border-[#A8BBA2]/40 flex items-center gap-1 font-semibold">
                        2020 &ndash; 2024
                      </span>
                      <span className="text-xs font-mono text-[#C4A468] font-bold flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" /> GPA 3.74 (Cum Laude)
                      </span>
                    </div>
                    <h3 className="font-bold text-lg sm:text-2xl text-[#3D2E2B]">
                      S1 Urban & Regional Planning (S.PWK.)
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#6B8065]">
                      Diponegoro University (UNDIP)
                    </p>
                    <p className="text-xs sm:text-sm text-[#59443F] font-light leading-relaxed">
                      Graduated with honors (Cum Laude), combining data-driven analytical research, spatial planning, and strategic brand positioning.
                    </p>
                  </div>
                </div>

              </div>
            </FadeIn>

          </div>

        </div>

      </div>
    </section>
  );
}
