import type { ExperienceItem } from '@/types';

/* ─────────────────────────────────────────────────────────────────────────
   ACHIEVEMENTS & VOLUNTEERING DATA
   Directly from Arayana Sood's verified CV.
   House Captain has been removed.
   ─────────────────────────────────────────────────────────────────────────*/

export const experiences: ExperienceItem[] = [
  {
    id: 'web-a-thon',
    title: '24-Hour Web-a-thon — Top 10 Finalist',
    role: 'Hackathon Collaborator',
    organization: 'Web-a-thon',
    period: 'March 2024',
    type: 'Hackathon',
    description: [
      'Participated in an intensive 24-hour hackathon, ranking in the Top 10 teams.',
      'Collaborated on a hand-signal recognition concept aimed at making mobile communication more accessible.',
      'Prototyped interactive frontend and signal processing logic under strict time limits.',
    ],
    highlights: [
      'Top 10 Finalist standing',
      'Hand-signal accessibility concept',
      '24-hour rapid prototyping',
    ],
    tags: ['Hackathon', 'Accessibility', 'Computer Vision / ML', 'Rapid Prototyping'],
  },
  {
    id: 'cybersmart-volunteer',
    title: 'CyberSmart Volunteer',
    role: 'Digital Safety Advocate',
    organization: 'WNS Cares Foundation (WCF)',
    period: 'July 2025',
    type: 'Volunteering',
    description: [
      'Completed a specialized volunteer program focused on cybersecurity awareness and digital safety.',
      'Engaged with community initiatives educating peers and youth on safe online practices, data privacy, and threat identification.',
    ],
    highlights: ['Cybersecurity awareness', 'Digital safety advocacy'],
    tags: ['Cybersecurity', 'Volunteering', 'Community Education', 'Digital Safety'],
  },
];
