'use client';

import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { experienceData } from '../../data/experience';
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-[#131728] via-[#161B30] to-[#1A1328] text-[#E2E8F0] relative z-10 w-full border-b border-[#C084FC]/15 overflow-hidden">
      
      {/* Soft Ambient Orbs */}
      <div className="absolute top-[30%] right-[-5%] w-[450px] h-[450px] rounded-full bg-[#38BDF8]/12 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-[#A855F7]/12 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <FadeIn delay={0} y={40} className="text-center">
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,120px)] leading-none tracking-tight">
            Experience
          </h2>
        </FadeIn>

        {/* Center Timeline Wrapper */}
        <div className="relative w-full">
          
          {/* Dead-Center Vertical Line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#F472B6] via-[#C084FC] to-[#38BDF8] shadow-[0_0_15px_rgba(192,132,252,0.6)] z-0 rounded-full" />

          {/* Cards Stack */}
          <div className="space-y-12 sm:space-y-16 relative z-10">
            
            {experienceData.map((exp, idx) => {
              // idx 0 -> RIGHT, idx 1 -> LEFT, idx 2 -> RIGHT
              const isRight = idx % 2 === 0;

              return (
                <FadeIn key={exp.id} delay={idx * 0.15} y={30}>
                  <div className="relative flex items-center justify-between w-full min-h-[140px]">
                    
                    {/* LEFT SLOT */}
                    <div className="w-full md:w-[calc(50%-2.5rem)] hidden md:block">
                      {!isRight && (
                        <div className="p-6 sm:p-8 rounded-[30px] bg-[#1D172E]/95 backdrop-blur-xl border border-[#C084FC]/30 shadow-2xl space-y-4 hover:border-[#F472B6]/60 transition-all duration-300 hover:shadow-purple-950/60">
                          <div className="space-y-1">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#2A1E40] text-[#E879F9] border border-[#C084FC]/30 flex items-center gap-1.5 font-semibold">
                                <Calendar className="w-3 h-3 text-[#38BDF8]" /> {exp.period}
                              </span>
                              {exp.location && (
                                <span className="text-xs font-mono text-[#E2E8F0]/60 flex items-center gap-1">
                                  <MapPin className="w-3 h-3 text-[#F472B6]" /> {exp.location}
                                </span>
                              )}
                            </div>
                            <h3 className="font-bold text-xl sm:text-2xl text-white pt-2">
                              {exp.role}
                            </h3>
                            <p className="text-sm font-semibold text-[#F472B6]">
                              {exp.company}
                            </p>
                          </div>
                          <p className="text-xs sm:text-sm text-[#E2E8F0]/80 leading-relaxed font-light">
                            {exp.description}
                          </p>
                          {exp.achievements && exp.achievements.length > 0 && (
                            <div className="pt-3 border-t border-[#C084FC]/15 space-y-2">
                              {exp.achievements.map((h, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-2 text-xs text-[#E2E8F0]/90">
                                  <span className="text-[#34D399] font-bold mt-0.5">•</span>
                                  <span>{h}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* DEAD CENTER NODE DOT */}
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-11 h-11 rounded-full border-2 border-[#C084FC] bg-[#1A142A] text-[#F472B6] shadow-xl shadow-purple-950/80 z-30 transition-transform duration-300 hover:scale-125 hover:border-[#F472B6]">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#E879F9] animate-pulse" />
                    </div>

                    {/* RIGHT SLOT */}
                    <div className="w-full md:w-[calc(50%-2.5rem)] ml-auto md:ml-0">
                      {isRight ? (
                        <div className="p-6 sm:p-8 rounded-[30px] bg-[#1D172E]/95 backdrop-blur-xl border border-[#C084FC]/30 shadow-2xl space-y-4 hover:border-[#F472B6]/60 transition-all duration-300 hover:shadow-purple-950/60">
                          <div className="space-y-1">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#2A1E40] text-[#E879F9] border border-[#C084FC]/30 flex items-center gap-1.5 font-semibold">
                                <Calendar className="w-3 h-3 text-[#38BDF8]" /> {exp.period}
                              </span>
                              {exp.location && (
                                <span className="text-xs font-mono text-[#E2E8F0]/60 flex items-center gap-1">
                                  <MapPin className="w-3 h-3 text-[#F472B6]" /> {exp.location}
                                </span>
                              )}
                            </div>
                            <h3 className="font-bold text-xl sm:text-2xl text-white pt-2">
                              {exp.role}
                            </h3>
                            <p className="text-sm font-semibold text-[#F472B6]">
                              {exp.company}
                            </p>
                          </div>
                          <p className="text-xs sm:text-sm text-[#E2E8F0]/80 leading-relaxed font-light">
                            {exp.description}
                          </p>
                          {exp.achievements && exp.achievements.length > 0 && (
                            <div className="pt-3 border-t border-[#C084FC]/15 space-y-2">
                              {exp.achievements.map((h, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-2 text-xs text-[#E2E8F0]/90">
                                  <span className="text-[#34D399] font-bold mt-0.5">•</span>
                                  <span>{h}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        /* Mobile View Fallback for Left items */
                        <div className="block md:hidden p-6 sm:p-8 rounded-[30px] bg-[#1D172E]/95 backdrop-blur-xl border border-[#C084FC]/30 shadow-2xl space-y-4">
                          <div className="space-y-1">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#2A1E40] text-[#E879F9] border border-[#C084FC]/30 flex items-center gap-1.5 font-semibold">
                                <Calendar className="w-3 h-3 text-[#38BDF8]" /> {exp.period}
                              </span>
                              {exp.location && (
                                <span className="text-xs font-mono text-[#E2E8F0]/60 flex items-center gap-1">
                                  <MapPin className="w-3 h-3 text-[#F472B6]" /> {exp.location}
                                </span>
                              )}
                            </div>
                            <h3 className="font-bold text-xl sm:text-2xl text-white pt-2">
                              {exp.role}
                            </h3>
                            <p className="text-sm font-semibold text-[#F472B6]">
                              {exp.company}
                            </p>
                          </div>
                          <p className="text-xs sm:text-sm text-[#E2E8F0]/80 leading-relaxed font-light">
                            {exp.description}
                          </p>
                          {exp.achievements && exp.achievements.length > 0 && (
                            <div className="pt-3 border-t border-[#C084FC]/15 space-y-2">
                              {exp.achievements.map((h, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-2 text-xs text-[#E2E8F0]/90">
                                  <span className="text-[#34D399] font-bold mt-0.5">•</span>
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

            {/* Education Card (Sits on LEFT for 4th Item) */}
            <FadeIn delay={0.45} y={30}>
              <div className="relative flex items-center justify-between w-full min-h-[140px]">
                
                {/* LEFT SLOT: Education Card */}
                <div className="w-full md:w-[calc(50%-2.5rem)] hidden md:block">
                  <div className="p-6 sm:p-8 rounded-[30px] bg-[#1D172E]/95 backdrop-blur-xl border border-[#38BDF8]/35 shadow-2xl space-y-3 hover:border-[#38BDF8]/70 transition-all duration-300">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#18283B] text-[#38BDF8] border border-[#38BDF8]/40 flex items-center gap-1 font-semibold">
                        2019 &ndash; 2023
                      </span>
                      <span className="text-xs font-mono text-[#34D399] font-bold flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" /> GPA 3.74 (Cum Laude)
                      </span>
                    </div>
                    <h3 className="font-bold text-xl sm:text-2xl text-white">
                      S1 Urban & Regional Planning (B.Eng)
                    </h3>
                    <p className="text-sm font-semibold text-[#38BDF8]">
                      Diponegoro University (UNDIP)
                    </p>
                    <p className="text-xs sm:text-sm text-[#E2E8F0]/80 font-light leading-relaxed">
                      Graduated with honors (Cum Laude), combining data-driven analytical research, spatial planning, and strategic brand positioning.
                    </p>
                  </div>
                </div>

                {/* DEAD CENTER NODE DOT */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-11 h-11 rounded-full border-2 border-[#38BDF8] bg-[#1A142A] text-[#38BDF8] shadow-xl z-30 transition-transform duration-300 hover:scale-125">
                  <GraduationCap className="w-5 h-5 text-[#38BDF8]" />
                </div>

                {/* RIGHT SLOT: Empty placeholder for desktop / Mobile view */}
                <div className="w-full md:w-[calc(50%-2.5rem)] ml-auto md:ml-0">
                  <div className="block md:hidden p-6 sm:p-8 rounded-[30px] bg-[#1D172E]/95 backdrop-blur-xl border border-[#38BDF8]/35 shadow-2xl space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#18283B] text-[#38BDF8] border border-[#38BDF8]/40 flex items-center gap-1 font-semibold">
                        2019 &ndash; 2023
                      </span>
                      <span className="text-xs font-mono text-[#34D399] font-bold flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" /> GPA 3.74 (Cum Laude)
                      </span>
                    </div>
                    <h3 className="font-bold text-xl sm:text-2xl text-white">
                      S1 Urban & Regional Planning (B.Eng)
                    </h3>
                    <p className="text-sm font-semibold text-[#38BDF8]">
                      Diponegoro University (UNDIP)
                    </p>
                    <p className="text-xs sm:text-sm text-[#E2E8F0]/80 font-light leading-relaxed">
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
