import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { BrandsSection } from '@/components/sections/BrandsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ToolsSection } from '@/components/sections/ToolsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="w-full bg-[#0C0C0C] overflow-x-clip text-[#D7E2EA]">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <BrandsSection />
      <ProjectsSection />
      <ToolsSection />
      <ContactSection />
    </main>
  );
}
