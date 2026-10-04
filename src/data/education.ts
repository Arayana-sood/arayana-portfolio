import type { EducationItem } from '@/types';

/* ─────────────────────────────────────────────────────────────────────────
   EDUCATION DATA
   Verified directly from Arayana Sood's CV.
   ─────────────────────────────────────────────────────────────────────────*/

export const educationList: EducationItem[] = [
  {
    id: 'lpu-btech',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    minor: 'Data Science',
    institution: 'Lovely Professional University',
    location: 'Punjab, India',
    period: 'August 2024 – Present (Graduating 2028)',
    score: 'CGPA: 8.27 / 10.0',
    details: [
      'Minor in Data Science covering machine learning, statistical modeling, and data analytics.',
      'Active student building real-world applications in ML, systems, and full-stack development.',
    ],
  },
  {
    id: 'sps-intermediate',
    degree: 'Intermediate (12th Grade)',
    institution: 'Sagar Public School',
    location: 'Madhya Pradesh, India',
    period: 'April 2023 – March 2024',
    score: 'Percentage: 82%',
    details: [
      'Higher secondary education with a strong analytical and scientific foundation.',
    ],
  },
  {
    id: 'apis-matriculation',
    degree: 'Matriculation (10th Grade)',
    institution: 'Asia Pacific International School',
    location: 'Madhya Pradesh, India',
    period: 'April 2021 – March 2022',
    score: 'Percentage: 78%',
    details: [
      'Secondary school certificate examination with distinction in STEM coursework.',
    ],
  },
];
