import type { CertificateItem } from '@/types';
import { getAssetUrl } from '@/utils/asset';

/* ─────────────────────────────────────────────────────────────────────────
   CERTIFICATES DATA
   Directly from Arayana Sood's verified CV.
   ─────────────────────────────────────────────────────────────────────────*/

export const certificates: CertificateItem[] = [
  {
    id: 'cert-cloud-craft',
    title: 'Cloud Craft Course',
    issuer: 'Lovely Professional University',
    year: 'Jul 2026',
    fileUrl: getAssetUrl('certificates/LPU_Cloud_Craft_Certificate.pdf'),
    skillsLearned: ['Cloud Architecture', 'AWS Fundamentals', 'DevOps Basics'],
    isPlaceholder: false,
  },
  {
    id: 'cert-dbms-infosys',
    title: 'Database Management System',
    issuer: 'Infosys',
    year: 'Jul 2026',
    fileUrl: getAssetUrl('certificates/Infosys_DBMS_Certificate.pdf'),
    skillsLearned: ['SQL', 'Relational Databases', 'Schema Design', 'Data Normalization'],
    isPlaceholder: false,
  },
  {
    id: 'cert-java-neocolab',
    title: 'Programming in Java',
    issuer: 'NeoColab',
    year: 'May 2026',
    fileUrl: getAssetUrl('certificates/NeoColab_Java_Certificate.pdf'),
    skillsLearned: ['Java', 'Object-Oriented Programming', 'Data Structures'],
    isPlaceholder: false,
  },
  {
    id: 'cert-react-techveda',
    title: 'React.js',
    issuer: 'Tech Veda',
    year: 'Aug 2025',
    fileUrl: getAssetUrl('certificates/Tech_Veda_ReactJS_Certificate.png'),
    skillsLearned: ['React', 'Hooks & State Management', 'Component Architecture', 'Vite'],
    isPlaceholder: false,
  },
  {
    id: 'cert-time-mgmt',
    title: 'Effective Time Management',
    issuer: "Masters' Union",
    year: 'Oct 2024',
    fileUrl: getAssetUrl('certificates/Master_Union_Time_Management.png'),
    skillsLearned: ['Time Management', 'Sprint Planning', 'Personal Productivity'],
    isPlaceholder: false,
  },
];
