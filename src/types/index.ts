export type ProjectCategory = 'All' | 'Social Media Campaign' | 'Content Strategy' | 'SEO & Copywriting' | 'Market Research' | 'Brand Ownership';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  featured: boolean;
  image: string;
  summary: string;
  impactMetrics: string[];
  techStack: string[]; // Tools used (CapCut, Meta Ads, Ahrefs, Canva, etc.)
  architecture: {
    description: string;
    diagramType?: 'funnel' | 'content-calendar' | 'seo-strategy';
    components: { name: string; description: string; tech: string }[];
  };
  challenges: string[];
  solutions: string[];
  results: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyAvailable: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Business Owner' | 'Bootcamp';
  description: string;
  achievements: string[];
  technologies: string[];
  featured: boolean;
}

export interface TechItem {
  name: string;
  category: 'Marketing Tools' | 'Analytics & Ads' | 'Content Creation' | 'SEO & Research' | 'Soft Skills';
  icon: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  years: number;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; percentage: number; description: string }[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'Campaign KPI' | 'Academic' | 'Certification';
  description: string;
  link?: string;
  badge?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verifyUrl: string;
  badgeImage: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  deliverables: string[];
}
