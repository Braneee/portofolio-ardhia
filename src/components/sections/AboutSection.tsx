'use client';

import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { AnimatedText } from '../ui/AnimatedText';
import { ContactButton } from '../ui/ContactButton';
import { DownloadCVButton } from '../ui/DownloadCVButton';

// Elegant Botanical & Floral SVG Illustrations
function FlowerBloomLeft({ className = 'w-36 h-36' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#F4A28C" fillOpacity="0.15" />
      {/* Petals */}
      <path d="M50 20C42 32 42 42 50 50C58 42 58 32 50 20Z" fill="#E88B73" fillOpacity="0.8" />
      <path d="M50 80C42 68 42 58 50 50C58 58 58 68 50 80Z" fill="#E88B73" fillOpacity="0.8" />
      <path d="M20 50C32 42 42 42 50 50C42 58 32 58 20 50Z" fill="#E88B73" fillOpacity="0.8" />
      <path d="M80 50C68 42 58 42 50 50C58 58 68 58 80 50Z" fill="#E88B73" fillOpacity="0.8" />
      <path d="M29 29C40 37 46 45 50 50C45 46 37 40 29 29Z" fill="#C4A468" fillOpacity="0.7" />
      <path d="M71 71C60 63 54 55 50 50C55 54 63 60 71 71Z" fill="#C4A468" fillOpacity="0.7" />
      <path d="M71 29C60 37 54 45 50 50C55 46 63 40 71 29Z" fill="#C4A468" fillOpacity="0.7" />
      <path d="M29 71C40 63 46 55 50 50C45 54 37 60 29 71Z" fill="#C4A468" fillOpacity="0.7" />
      {/* Center Stamen */}
      <circle cx="50" cy="50" r="8" fill="#C4A468" />
      <circle cx="50" cy="50" r="4" fill="#3D2E2B" />
    </svg>
  );
}

function SageBotanicalBranch({ className = 'w-36 h-36' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#A8BBA2" fillOpacity="0.15" />
      {/* Stem */}
      <path d="M30 80Q45 50 70 20" stroke="#6B8065" strokeWidth="3" strokeLinecap="round" />
      {/* Leaves */}
      <path d="M40 65C30 55 25 60 35 70Z" fill="#6B8065" />
      <path d="M45 58C55 48 60 53 50 63Z" fill="#88A082" />
      <path d="M52 48C42 38 37 43 47 53Z" fill="#6B8065" />
      <path d="M58 40C68 30 73 35 63 45Z" fill="#88A082" />
      <path d="M64 30C54 20 49 25 59 35Z" fill="#6B8065" />
      {/* Gold Buds */}
      <circle cx="70" cy="20" r="5" fill="#C4A468" />
      <circle cx="63" cy="27" r="3.5" fill="#E88B73" />
    </svg>
  );
}

function RosePeonyRight({ className = 'w-36 h-36' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#F4A28C" fillOpacity="0.15" />
      {/* Layers */}
      <circle cx="50" cy="50" r="32" fill="#F4A28C" fillOpacity="0.4" />
      <circle cx="50" cy="50" r="24" fill="#E88B73" fillOpacity="0.6" />
      <circle cx="50" cy="50" r="16" fill="#C4A468" fillOpacity="0.7" />
      <circle cx="50" cy="50" r="8" fill="#3D2E2B" />
      {/* Petal Curves */}
      <path d="M50 18A32 32 0 0 1 82 50" stroke="#FAF6EE" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M82 50A32 32 0 0 1 50 82" stroke="#FAF6EE" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M50 82A32 32 0 0 1 18 50" stroke="#FAF6EE" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18 50A32 32 0 0 1 50 18" stroke="#FAF6EE" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function GoldenWreathBottom({ className = 'w-36 h-36' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#C4A468" fillOpacity="0.12" />
      {/* Laurel Arc */}
      <path d="M30 30C20 45 20 65 35 75C50 85 70 80 80 65" stroke="#C4A468" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Leaf Clusters */}
      <circle cx="28" cy="36" r="4" fill="#C4A468" />
      <circle cx="23" cy="48" r="4.5" fill="#E88B73" />
      <circle cx="25" cy="60" r="4" fill="#6B8065" />
      <circle cx="34" cy="72" r="4.5" fill="#C4A468" />
      <circle cx="48" cy="78" r="4" fill="#E88B73" />
      <circle cx="64" cy="76" r="4.5" fill="#6B8065" />
      <circle cx="76" cy="68" r="4" fill="#C4A468" />
    </svg>
  );
}

export function AboutSection() {
  const aboutText =
    "With hands-on experience in digital marketing, social media management, and content strategy, i focus on short-form video production, AIDA copywriting, and SEO growth, i truly enjoy working with consumer brands that aim to stand out and reach 163% of target KPI. Let's build something incredible together!";

  return (
    <section
      id="about"
      className="min-h-screen w-full relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 sm:py-32 bg-gradient-to-b from-[#F5F0E6] via-[#FAF6EE] to-[#F9F6F0] overflow-hidden z-10 border-b border-[#E6DCCC]"
    >
      {/* Soft Ambient Color Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-[#F4A28C]/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#A8BBA2]/25 blur-[130px] pointer-events-none" />

      {/* Graceful Floral & Botanical Icons */}
      {/* Top-left: Peach Blossom */}
      <FadeIn
        delay={0.1}
        x={-60}
        y={0}
        duration={0.9}
        className="absolute top-[10%] left-[2%] sm:left-[3%] md:left-[5%] pointer-events-none z-10 hidden sm:block hover:scale-110 transition-transform duration-500"
      >
        <div className="p-3 rounded-full bg-[#FAF6EE]/80 border border-[#E6DCCC] shadow-xl shadow-[#3D2E2B]/5 backdrop-blur-md">
          <FlowerBloomLeft className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40" />
        </div>
      </FadeIn>

      {/* Bottom-left: Sage Leaf Branch */}
      <FadeIn
        delay={0.25}
        x={-60}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[2%] sm:left-[4%] md:left-[6%] pointer-events-none z-10 hidden sm:block hover:scale-110 transition-transform duration-500"
      >
        <div className="p-3 rounded-full bg-[#FAF6EE]/80 border border-[#E6DCCC] shadow-xl shadow-[#3D2E2B]/5 backdrop-blur-md">
          <SageBotanicalBranch className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36" />
        </div>
      </FadeIn>

      {/* Top-right: Rose Peony */}
      <FadeIn
        delay={0.15}
        x={60}
        y={0}
        duration={0.9}
        className="absolute top-[10%] right-[2%] sm:right-[3%] md:right-[5%] pointer-events-none z-10 hidden sm:block hover:scale-110 transition-transform duration-500"
      >
        <div className="p-3 rounded-full bg-[#FAF6EE]/80 border border-[#E6DCCC] shadow-xl shadow-[#3D2E2B]/5 backdrop-blur-md">
          <RosePeonyRight className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40" />
        </div>
      </FadeIn>

      {/* Bottom-right: Golden Botanical Wreath */}
      <FadeIn
        delay={0.3}
        x={60}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[2%] sm:right-[4%] md:right-[6%] pointer-events-none z-10 hidden sm:block hover:scale-110 transition-transform duration-500"
      >
        <div className="p-3 rounded-full bg-[#FAF6EE]/80 border border-[#E6DCCC] shadow-xl shadow-[#3D2E2B]/5 backdrop-blur-md">
          <GoldenWreathBottom className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36" />
        </div>
      </FadeIn>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-20">
        <FadeIn delay={0.1} y={30}>
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,140px)] leading-none tracking-tight">
            About me
          </h2>
        </FadeIn>

        {/* High-Contrast Readable Paragraph */}
        <div className="py-4 px-2 sm:px-6 flex justify-center">
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
