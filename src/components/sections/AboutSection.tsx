'use client';

import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { AnimatedText } from '../ui/AnimatedText';
import { ContactButton } from '../ui/ContactButton';
import { DownloadCVButton } from '../ui/DownloadCVButton';

export function AboutSection() {
  const aboutText =
    "With hands-on experience in digital marketing, social media management, and content strategy, i focus on short-form video production, AIDA copywriting, and SEO growth, i truly enjoy working with consumer brands that aim to stand out and reach 163% of target KPI. Let's build something incredible together!";

  return (
    <section
      id="about"
      className="min-h-screen w-full relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 sm:py-32 bg-gradient-to-b from-[#161224] via-[#1F1735] to-[#131728] overflow-hidden z-10 border-b border-[#C084FC]/15"
    >
      {/* Soft Ambient Color Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-[#E879F9]/15 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#38BDF8]/15 blur-[130px] pointer-events-none" />

      {/* Decorative 3D Images */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[12%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-10 hidden sm:block"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon 3D Icon"
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-xl opacity-90"
        />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-10 hidden sm:block"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Shape"
          className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-xl opacity-90"
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[12%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-10 hidden sm:block"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego 3D Icon"
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-xl opacity-90"
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-10 hidden sm:block"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p47_1.26ea5d63.png"
          alt="Torus 3D Icon"
          className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-xl opacity-90"
        />
      </FadeIn>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-20">
        <FadeIn delay={0.1} y={30}>
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,140px)] leading-none tracking-tight">
            About me
          </h2>
        </FadeIn>

        <div className="py-4 px-2 sm:px-6">
          <AnimatedText text={aboutText} />
        </div>

        <FadeIn delay={0.4} y={20} className="pt-6 flex items-center justify-center gap-4 flex-wrap">
          <DownloadCVButton variant="primary" />
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
