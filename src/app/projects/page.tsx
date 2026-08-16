'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '@/data/projects';
import { ArrowLeft, LayoutGrid, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/FadeIn';
import Image from 'next/image';

const categories = [
  'All Projects',
  'Social Media Campaign',
  'Content Strategy',
  'Market Research',
  'SEO & Copywriting',
  'Brand Ownership'
];

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredProjects = projectsData.filter(project => 
    activeCategory === 'All Projects' || project.category === activeCategory
  );

  return (
    <main className="w-full min-h-screen bg-[#FAF4EA] text-[#3D2E2B] pt-24 pb-32 px-4 sm:px-6 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header section */}
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-[#E88B73] hover:text-[#C4A468] font-bold text-sm tracking-widest uppercase transition-colors mb-6 self-start sm:self-auto"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none mb-6">
              Project Gallery
            </h1>
            <p className="text-sm sm:text-base text-[#3D2E2B]/70 max-w-2xl leading-relaxed">
              An organized archive of {projectsData.length} projects built across different disciplines, 
              highlighting strategic marketing, content planning, and creative solutions.
            </p>
          </div>
        </FadeIn>

        {/* Filter Bar */}
        <FadeIn delay={0.1}>
          <div className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-3 mb-6 sm:mb-12 pb-1 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 w-[calc(100%+32px)] sm:w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap flex-shrink-0 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                  activeCategory === cat 
                    ? 'bg-[#E88B73] text-white border-[#E88B73] shadow-lg shadow-[#E88B73]/20' 
                    : 'bg-transparent text-[#3D2E2B]/60 border-[#E6DCCC] hover:border-[#E88B73]/50 hover:text-[#E88B73]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Divider */}
        <div className="w-full h-px bg-[#E6DCCC]/50 mb-8 sm:mb-16"></div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/projects/${project.id}`} className="group block h-full">
                  <div className="bg-white rounded-[24px] sm:rounded-[32px] border border-[#E6DCCC] overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:shadow-[#3D2E2B]/5 hover:-translate-y-1">
                    
                    {/* Thumbnail Image */}
                    <div className={`relative w-full aspect-[4/3] overflow-hidden ${(project.imageFit === 'contain' || project.imageFit === 'circle') ? 'bg-transparent' : 'bg-[#F5EBE6]'}`}>
                      <div className={`absolute inset-0 z-10 group-hover:bg-transparent transition-colors duration-500 ${(project.imageFit === 'contain' || project.imageFit === 'circle') ? '' : 'bg-black/10'}`}></div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className={
                          project.imageFit === 'circle' 
                            ? "absolute inset-0 m-auto h-[85%] w-auto aspect-square rounded-full object-cover shadow-sm transition-transform duration-700 group-hover:scale-105"
                            : project.imageFit === 'cover-left'
                            ? "w-full h-full object-cover object-left transition-transform duration-700 group-hover:scale-105"
                            : project.imageFit === 'contain-full'
                            ? "w-full h-full object-contain object-top transition-transform duration-700 group-hover:scale-105"
                            : project.imageFit === 'contain'
                            ? "w-full h-full object-contain p-8 sm:p-10 object-center transition-transform duration-700 group-hover:scale-105"
                            : "w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        }
                      />
                      
                      {/* View Project Overlay */}
                      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] bg-[#3D2E2B]/20">
                        <span className="flex items-center gap-2 bg-white text-[#3D2E2B] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          View Project <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-[#F5EBE6] text-[#E88B73] rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-[#F4A28C]/30 flex items-center gap-1.5">
                          <LayoutGrid className="w-3 h-3" />
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="px-3 py-1 bg-[#3D2E2B] text-[#FAF4EA] rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-2 group-hover:text-[#E88B73] transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm text-[#3D2E2B]/70 font-medium line-clamp-2 mt-auto">
                        {project.subtitle}
                      </p>
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="w-full py-20 flex flex-col items-center justify-center text-center">
            <LayoutGrid className="w-12 h-12 text-[#E88B73]/30 mb-4" />
            <h3 className="text-xl font-bold uppercase tracking-widest text-[#3D2E2B]">No projects found</h3>
            <p className="text-[#3D2E2B]/60 mt-2">Try selecting a different category.</p>
          </div>
        )}

      </div>
    </main>
  );
}
