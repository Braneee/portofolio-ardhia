# Dhia AI — Senior Software Engineer & Full-Stack Architect Portfolio

> A modern, luxury, high-performance portfolio website built for senior software engineers, systems architects, and internship candidates targeting tier-1 tech companies (Google, Apple, Meta, Stripe, Vercel, Linear, Notion, Raycast, Figma).

---

## 🌟 Overview & Aesthetic

Designed with a high-end SaaS product design philosophy inspired by **Vercel, Linear, Apple, Stripe, and Raycast**. It features:

- **Raycast-Inspired Command Palette (`Cmd + K`)**: Keyboard-driven navigation for instant section jumps, theme switching, project searches, and email copying.
- **Interactive Terminal Playground**: Real-time CLI runner demonstrating system metrics, benchmark execution, and automated test suite coverage.
- **Deep-Dive Case Study Overlay Modals**: Architectural blueprints, challenge/solution breakdowns, and metric callouts for every project.
- **Responsive & Accessible**: Complete WCAG AA contrast compliance, ARIA accessibility attributes, keyboard trap support for modals, and reduced motion settings.
- **Ultra Performance**: Sub-100ms LCP, zero cumulative layout shift (CLS), static rendering optimizations, and dynamic edge metadata.

---

## 🏗️ Folder Structure

```
d:/PORTOFOLIO_DHIA/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with ThemeProvider, ToastProvider & JSON-LD
│   │   ├── page.tsx           # Main landing page assembling all sections
│   │   ├── globals.css        # Core design system tokens, glassmorphism & keyframes
│   │   ├── sitemap.ts         # Dynamic sitemap generator for SEO
│   │   ├── robots.ts          # Search engine crawler directive
│   │   └── api/
│   │       └── contact/       # Contact form endpoint with Zod validation
│   ├── components/
│   │   ├── ui/
│   │   │   └── command-menu.tsx   # Raycast Cmd+K search palette
│   │   ├── layout/
│   │   │   ├── navbar.tsx         # Floating glassmorphic header with active pill
│   │   │   ├── footer.tsx         # Footer with social links & back-to-top
│   │   │   └── theme-toggle.tsx   # Light/Dark mode switcher button
│   │   ├── sections/
│   │   │   ├── hero.tsx           # Hero section with headline & magnetic CTAs
│   │   │   ├── about.tsx          # Career narrative & engineering philosophy
│   │   │   ├── experience.tsx     # Vertical experience timeline
│   │   │   ├── projects.tsx       # Filterable project showcase grid
│   │   │   ├── project-modal.tsx  # Interactive Case Study overlay
│   │   │   ├── tech-stack.tsx     # Categorized technology grid
│   │   │   ├── skills.tsx         # Proficiency matrix & progress bars
│   │   │   ├── achievements.tsx   # Hackathon wins, publications & awards
│   │   │   ├── certificates.tsx   # AWS, Meta & CKA verified credentials
│   │   │   ├── services.tsx       # Engineering services & advisory
│   │   │   └── contact.tsx        # React Hook Form + Zod & Confetti submit
│   │   ├── visual/
│   │   │   └── code-terminal.tsx  # Live terminal simulator
│   │   └── providers/
│   │       ├── theme-provider.tsx # Next-themes wrapper
│   │       └── toast-provider.tsx # Animated Toast notification engine
│   ├── data/
│   │   ├── personal.ts        # Personal details & metrics
│   │   ├── experience.ts      # Work history data
│   │   ├── projects.ts        # Project showcase & case study data
│   │   ├── tech-stack.ts      # Technology items
│   │   ├── skills.ts          # Skill matrix breakdown
│   │   ├── achievements.ts    # Awards & recognitions
│   │   ├── certificates.ts    # Certifications
│   │   └── services.ts        # Service offerings
│   ├── types/
│   │   └── index.ts           # Strict TypeScript interfaces
│   └── lib/
│       ├── utils.ts           # Tailwind merge utility (`cn`)
│       └── validations.ts     # Zod schemas for contact forms
├── tailwind.config.ts         # Custom theme extensions & keyframe animations
├── tsconfig.json              # TypeScript configuration
└── package.json               # Next.js 14, Framer Motion, Tailwind dependencies
```

---

## 🎨 Design System & Color Palette

### Colors
- **Primary Accent**: Electric Sky Blue (`#06b6d4` / `#0c8de9`)
- **Secondary Accent**: Deep Indigo (`#6366f1`) & Violet (`#8b5cf6`)
- **Success Accent**: Emerald (`#10b981`)
- **Warning Accent**: Amber (`#f59e0b`)
- **Dark Mode Background**: Charcoal Navy (`#08090e` / `#090a0f`)
- **Light Mode Background**: Off-White Clean (`#fafafa`)

### Typography Scale
- **Display Heading**: 48px - 60px (`font-extrabold`)
- **Section Heading**: 30px - 36px (`font-bold`)
- **Card Subheading**: 18px - 20px (`font-bold`)
- **Body Text**: 14px - 16px (`leading-relaxed`)
- **Code / Mono**: 12px - 13px (`font-mono`)

---

## 🚀 Getting Started & Local Development

### Prerequisites
- Node.js >= 18.0.0
- npm / pnpm / yarn

### Installation
1. Clone repository:
   ```bash
   git clone https://github.com/your-username/portfolio-dhia.git
   cd portfolio-dhia
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Build & Quality Verification

To run a production build and typecheck:

```bash
npm run build
```

---

## 🌐 Vercel Deployment Guide

1. Push your repository to GitHub.
2. Visit [Vercel Dashboard](https://vercel.com/new).
3. Import `portfolio-dhia` repository.
4. Framework Preset: **Next.js**.
5. Click **Deploy**. Your site will be live on Vercel's global edge network in seconds!

---

## 🔮 Future Improvements Roadmap

1. **Blog Engine**: Add MDX blog section for technical writing and architectural RFCs.
2. **WebGL 3D Shader**: Integrate Three.js / React Three Fiber ambient particle canvas for optional high-performance GPUs.
3. **Sound FX**: Subtle Web Audio API click/hover feedback toggle.
