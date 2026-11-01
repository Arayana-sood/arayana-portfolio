import type { ResearchItem } from '@/types';
import { getAssetUrl } from '@/utils/asset';

/* ─────────────────────────────────────────────────────────────────────────
   RESEARCH & PUBLICATIONS DATA
   Peer-reviewed and academic publications co-authored by Arayana Sood.
   Includes IEEE conference papers and clinical machine learning studies.
   ─────────────────────────────────────────────────────────────────────────*/

export const researchList: ResearchItem[] = [
  {
    id: 'shellquest-ieee-2026',
    title: 'ShellQuest: An AI-Powered Gamified Platform for Interactive Linux Command-Line Education',
    authors: ['Rudransh', 'Arayana Sood', 'Abhijeet Kumar', 'Ansh Kumar'],
    status: 'Published · IEEE ETAI-2026',
    year: '2026',
    description:
      'Published in the Proceedings of the 2026 IEEE Conference on Educational Technology and Artificial Intelligence (ETAI-2026). Explores sandboxed Docker containerization (sibling DinD pattern), real-time xterm.js terminal streaming, automated AI bash validation pipelines, pluggable multi-LLM tutoring, and gamification mechanics for command-line mastery.',
    paperUrl: getAssetUrl('research/ShellQuest_IEEE_Research_Paper.pdf'),
  },
  {
    id: 'healthriskai-2026',
    title: 'HealthRiskAI: Multi-Disease Risk Prediction System Using Machine Learning',
    authors: ['Arayana Sood'],
    status: 'Published Research',
    year: '2026',
    description:
      'Comprehensive clinical machine learning investigation exploring multi-disease risk prediction across Heart Disease, Diabetes, Chronic Kidney Disease, Liver Disease, Obesity, and Anemia using supervised classification algorithms, hyperparameter tuning, and zero-data-leakage preprocessing pipelines.',
    paperUrl: getAssetUrl('research/HealthRiskAI_Research_Paper.pdf'),
  },
];
