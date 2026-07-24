'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';

interface LiveProjectButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export function LiveProjectButton({
  href = '#',
  label = 'View Campaign',
  className = '',
}: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-[#E88B73] text-[#E88B73] hover:bg-[#E88B73] hover:text-white font-bold uppercase tracking-wider px-4 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-sm ${className}`}
    >
      <span>{label}</span>
      <ExternalLink className="w-3.5 h-3.5" />
    </a>
  );
}
