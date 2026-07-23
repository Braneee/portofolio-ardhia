'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Character({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.25, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

export function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');
  const total = characters.length;

  return (
    <p
      ref={containerRef}
      className={`text-[#3D2E2B] font-semibold text-center leading-relaxed max-w-[620px] text-[clamp(1.1rem,2.2vw,1.45rem)] ${className}`}
    >
      {characters.map((char, idx) => {
        const start = idx / total;
        const end = Math.min(1, (idx + 1) / total);
        return (
          <Character key={idx} char={char} progress={scrollYProgress} range={[start, end]} />
        );
      })}
    </p>
  );
}
