import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ToolsSection } from '@/components/sections/ToolsSection';
import { ProjectGallerySection } from '@/components/sections/ProjectGallerySection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { BrandsSection } from '@/components/sections/BrandsSection';

export default function Home() {
  return (
    <main className="w-full bg-[#0C0C0C] overflow-x-clip text-[#D7E2EA]">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ToolsSection />
      <ProjectGallerySection />
      <ProjectsSection />
      <ServicesSection />
      <BrandsSection />
      <ContactSection />
    </main>
  );
}
