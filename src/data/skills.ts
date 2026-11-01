import type { SkillCategory } from '@/types';

/* ─────────────────────────────────────────────────────────────────────────
   SKILLS DATA
   Strictly based on verified technologies and real project associations.
   No arbitrary percentage ratings. No inflated proficiencies.
   ─────────────────────────────────────────────────────────────────────────*/

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    label: 'Programming',
    skills: [
      {
        name: 'Python',
        usedIn: ['ProductPulse', 'NutriAI', 'Data analysis & ML work'],
      },
      {
        name: 'C / C++',
        usedIn: ['Systems programming & algorithms'],
      },
      {
        name: 'JavaScript',
        usedIn: ['NutriAI frontend', 'ShellQuest', 'React web apps'],
      },
      {
        name: 'SQL',
        usedIn: ['Tourism Analytics', 'Relational data querying'],
      },
    ],
  },
  {
    id: 'data-ml',
    label: 'Data & ML',
    skills: [
      {
        name: 'Pandas',
        usedIn: ['ProductPulse (3.5M+ events)', 'NutriAI', 'Data preprocessing'],
      },
      {
        name: 'NumPy',
        usedIn: ['ProductPulse (Vectorized math)', 'NutriAI'],
      },
      {
        name: 'Scikit-learn',
        usedIn: ['ProductPulse (Linear SVM, K-Means, PCA)', 'NutriAI (6 models)'],
      },
      {
        name: 'Machine Learning',
        usedIn: ['ProductPulse (Customer churn & cohorts)', 'NutriAI'],
      },
      {
        name: 'Predictive Analytics',
        usedIn: ['ProductPulse', 'NutriAI'],
      },
      {
        name: 'Data Analysis',
        usedIn: ['Tourism Analytics Dashboard', 'ProductPulse', 'NutriAI'],
      },
      {
        name: 'Data Visualization',
        usedIn: ['ProductPulse (Recharts & PCA)', 'Tourism Analytics'],
      },
    ],
  },
  {
    id: 'development',
    label: 'Development',
    skills: [
      {
        name: 'HTML',
        usedIn: ['NutriAI', 'Web projects'],
      },
      {
        name: 'CSS',
        usedIn: ['NutriAI', 'Responsive interfaces'],
      },
      {
        name: 'JavaScript',
        usedIn: ['Interactive web applications'],
      },
      {
        name: 'React',
        usedIn: ['ProductPulse (React 19)', 'ShellQuest', 'Portfolio'],
      },
      {
        name: 'FastAPI',
        usedIn: ['ProductPulse backend', 'NutriAI backend API'],
      },
      {
        name: 'Node.js',
        usedIn: ['ShellQuest backend & tooling'],
      },
    ],
  },
  {
    id: 'bi-bigdata',
    label: 'Data / Big Data',
    skills: [
      {
        name: 'Power BI',
        usedIn: ['Tours & Travels Tourism Dashboard'],
      },
      {
        name: 'DAX',
        usedIn: ['Tourism Analytics Dashboard (Custom measures)'],
      },
      {
        name: 'Big Data',
        usedIn: ['Academic coursework & distributed computing'],
      },
      {
        name: 'Hadoop',
        usedIn: ['Academic / distributed project work'],
      },
      {
        name: 'Linux',
        usedIn: ['ShellQuest', 'CLI environment & shell workflows'],
      },
    ],
  },
  {
    id: 'cloud-devops',
    label: 'Cloud / DevOps',
    skills: [
      {
        name: 'Git',
        usedIn: ['Version control across all project repositories'],
      },
      {
        name: 'Docker',
        usedIn: ['Containerization fundamentals'],
      },
      {
        name: 'Cloud Fundamentals',
        usedIn: ['Cloud architecture principles & basics'],
      },
      {
        name: 'DevOps Fundamentals',
        usedIn: ['CI/CD workflows & environment automation'],
      },
    ],
  },
];
