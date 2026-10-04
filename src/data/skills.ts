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
        usedIn: ['NutriAI', 'Data analysis & ML work', 'ShellQuest'],
      },
      {
        name: 'C / C++',
        usedIn: ['Process Lifecycle Visualization Tool'],
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
        usedIn: ['NutriAI', 'Data preprocessing & analysis'],
      },
      {
        name: 'NumPy',
        usedIn: ['NutriAI', 'Numerical matrix operations'],
      },
      {
        name: 'Scikit-learn',
        usedIn: ['NutriAI (6 classification models)'],
      },
      {
        name: 'Machine Learning',
        usedIn: ['NutriAI (Heart, Kidney, Diabetes, etc.)'],
      },
      {
        name: 'Predictive Analytics',
        usedIn: ['NutriAI', 'Academic projects'],
      },
      {
        name: 'Data Analysis',
        usedIn: ['Tourism Analytics Dashboard', 'NutriAI'],
      },
      {
        name: 'Data Visualization',
        usedIn: ['Tourism Analytics', 'Process Lifecycle Viz'],
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
        usedIn: ['ShellQuest', 'Process Lifecycle Viz', 'Portfolio'],
      },
      {
        name: 'FastAPI',
        usedIn: ['NutriAI backend API'],
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
