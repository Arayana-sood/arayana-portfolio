/* ─────────────────────────────────────────────────────────────────────────
   PORTFOLIO TYPE DEFINITIONS
   ─────────────────────────────────────────────────────────────────────────*/

export type TechTag = string;
export type LucideIconName = string;

/* ── Personal Info ───────────────────────────────────────────────────── */

export interface SocialLink {
  label: string;
  url: string;
  icon: LucideIconName;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  title: string;
  tagline: string;
  heroHeadline: {
    start: string;
    emphasis: string;
    end: string;
  };
  bio: string;
  availability: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resume: string;
  socials: SocialLink[];
}

/* ── Projects & Case Studies ─────────────────────────────────────────── */

export type ProjectSize = 'lg' | 'md' | 'sm';

export interface CaseStudy {
  overview: string;
  problem: string;
  whatBuilt: string;
  howItWorks: string[];
  technicalImplementation: {
    heading: string;
    details: string[];
  }[];
  keyFeatures: string[];
  challengesAndLearnings: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: TechTag[];
  category: string;
  year: string;
  caseStudy: CaseStudy;
  githubUrl?: string;
  liveUrl?: string;
  paperUrl?: string;
}

/* ── Skills ──────────────────────────────────────────────────── */

export interface Skill {
  name: string;
  usedIn?: string[];
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

/* ── Experience / Activities ─────────────────────────────────────────── */

export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  organization: string;
  period: string;
  type: 'Leadership' | 'Hackathon' | 'Volunteering';
  description: string[];
  highlights?: string[];
  tags: TechTag[];
}

/* ── Education ───────────────────────────────────────────────────────── */

export interface EducationItem {
  id: string;
  degree: string;
  field?: string;
  minor?: string;
  period: string;
  score: string;
  institution: string;
  location: string;
  details?: string[];
}

/* ── Certificates ───────────────────────────────────────────────────── */

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  fileUrl?: string;
  skillsLearned: string[];
  isPlaceholder?: boolean;
}

/* ── Research & Publications ─────────────────────────────────────────── */

export interface ResearchItem {
  id: string;
  title: string;
  authors: string[];
  status: string; // e.g. "Under Review", "Published", "In Preparation"
  year: string;
  description: string;
  paperUrl?: string;
}

/* ── Theme ───────────────────────────────────────────────────────────── */

export type Theme = 'dark' | 'light';

export interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}
