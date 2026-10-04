import type { Project } from '@/types';

/* ─────────────────────────────────────────────────────────────────────────
   PROJECTS DATA & IN-DEPTH CASE STUDIES
   Connected to actual verified repository and live deployment URLs.
   ─────────────────────────────────────────────────────────────────────────*/

export const projects: Project[] = [
  {
    id: 'nutriai',
    number: '01',
    title: 'NutriAI',
    subtitle: 'AI-Powered Healthcare & Personalized Diet Recommendation System',
    description:
      'Engineered an AI healthcare system using 6 ML models (~84% accuracy, with 2 at ~79%) and Gemini 2.5 Flash API for prescription data extraction.',
    tags: [
      'Python',
      'FastAPI',
      'Scikit-learn',
      'Random Forest',
      'Pandas',
      'NumPy',
      'Gemini 2.5 Flash API',
      'JavaScript',
    ],
    category: 'AI & Healthcare',
    year: 'Sep 2026',
    githubUrl: 'https://github.com/Arayana-sood/NutriAI-personalized-diet-generation',
    liveUrl: 'https://nutriai-personalized-diet-generation.onrender.com',
    paperUrl: '/research/HealthRiskAI_Research_Paper.pdf',
    caseStudy: {
      overview:
        'NutriAI is an intelligent healthcare and personalized diet recommendation platform backed by authored research ("HealthRiskAI: Multi-Disease Risk Prediction System Using Machine Learning"). It combines machine learning classification models with generative AI to evaluate disease risk factors and interpret clinical prescriptions into customized dietary guidance.',
      problem:
        'Standard dietary recommendations often fail to account for individual chronic health risks, while reading and extracting actionable advice from complex clinical prescriptions can be confusing for patients.',
      whatBuilt:
        'A comprehensive diagnostic and diet guidance platform that scores patient biometric and clinical indicators using trained Random Forest estimators and integrates Google Gemini 2.5 Flash API to parse medical prescriptions.',
      howItWorks: [
        'User enters biometrics (age, gender, BMI, activity) along with specific health markers.',
        'Six Random Forest models assess risk across Heart Disease, Kidney Disease, Diabetes, Anemia, Obesity, and Liver Disease, achieving ~84% accuracy across most models and ~79% on two.',
        'Google Gemini 2.5 Flash API extracts structured medical constraints and dietary instructions directly from uploaded prescription notes.',
        'The FastAPI backend synthesizes predictive outputs into personalized meal plans, interactive charts, and downloadable health summaries.',
      ],
      technicalImplementation: [
        {
          heading: 'Machine Learning & Research Foundation',
          details: [
            'Authored research paper "HealthRiskAI: Multi-Disease Risk Prediction System Using Machine Learning" covering multi-disease classification pipelines.',
            'Trained and fine-tuned Random Forest classification models using Scikit-learn.',
            'Achieved ~84% accuracy across most condition models, with 2 models performing at ~79%.',
            'Data preprocessing, standard scaling, and feature transformation built with Pandas and NumPy.',
          ],
        },
        {
          heading: 'FastAPI Backend & Gemini Integration',
          details: [
            'Architected low-latency REST API endpoints using FastAPI with strict Pydantic schemas.',
            'Integrated Google Gemini 2.5 Flash API for natural language extraction of clinical prescriptions.',
          ],
        },
        {
          heading: 'Frontend & Reporting',
          details: [
            'Created an interactive web interface utilizing HTML5, modern CSS3, and JavaScript.',
            'Visualized macronutrient distributions, condition risk scores, and exported client-side summary reports.',
          ],
        },
      ],
      keyFeatures: [
        '6 ML models for multi-condition evaluation (Heart, Kidney, Diabetes, Anemia, Obesity, Liver)',
        'Validated accuracy: ~84% across most models, ~79% on two specialized models',
        'Google Gemini 2.5 Flash API for automated prescription text extraction',
        'Personalized nutritional guidelines and dietary dos and don’ts',
        'Responsive interactive UI with downloadable dietary reports',
      ],
      challengesAndLearnings: [
        'Optimizing inference pipelines so all six machine learning models score payloads in real time without API latency.',
        'Prompt engineering and JSON schema structuring for reliable extraction from Gemini 2.5 Flash API.',
        'Handling imbalanced class distributions in medical datasets to maintain consistent precision and recall.',
      ],
    },
  },
  {
    id: 'shellquest',
    number: '02',
    title: 'ShellQuest',
    subtitle: 'Interactive Linux Learning Platform with Live Terminal',
    description:
      'A hands-on Linux learning platform featuring daily tasks, quizzes, badges, progress tracking, and an AI doubt-solving assistant.',
    tags: [
      'React',
      'JavaScript',
      'Vite',
      'Tailwind CSS',
      'React Router',
      'xterm.js',
      'Socket.IO',
      'Axios',
    ],
    category: 'Systems & Education',
    year: 'Jul 2026',
    githubUrl: 'https://github.com/Arayana-sood/ShellQuest',
    liveUrl: undefined, // No live demo currently available
    caseStudy: {
      overview:
        'ShellQuest is an interactive web-based educational platform that makes learning the Linux command line engaging through a functional browser terminal, progressive challenges, gamification, and AI-assisted doubt resolution.',
      problem:
        'Learning Linux commands through static text and slides is intimidating for beginners. Without a live, responsive environment with automated verification, learners struggle to build muscle memory.',
      whatBuilt:
        'A full-featured educational frontend built with React, Vite, and Tailwind CSS, integrating xterm.js for in-browser terminal practice, real-time Socket.IO communication, gamified progression (quizzes, badges, points), and an AI tutor.',
      howItWorks: [
        'Students log in and explore curated topic modules (file navigation, process management, shell scripting).',
        'An interactive terminal rendered with xterm.js streams user input and command output in real time over WebSockets.',
        'Automated task evaluation validates command execution, awarding points, milestone badges, and maintaining daily streaks.',
        'An integrated AI chatbot provides on-demand explanations and hints when students encounter syntax errors.',
      ],
      technicalImplementation: [
        {
          heading: 'Terminal Architecture & Streaming',
          details: [
            'Integrated xterm.js within React with custom color schemes and keyboard shortcuts.',
            'Implemented real-time bidirectional communication via Socket.IO and Axios.',
          ],
        },
        {
          heading: 'Frontend Architecture & Routing',
          details: [
            'Developed modular, component-based frontend using React, Vite, and React Router.',
            'Styled cleanly with modern utility classes using Tailwind CSS.',
          ],
        },
        {
          heading: 'Gamification & AI Assistance',
          details: [
            'Built tracking systems for daily tasks, interactive quizzes, points, and achievement badges.',
            'Integrated an AI chatbot assistant within the terminal interface to clarify command behavior.',
          ],
        },
      ],
      keyFeatures: [
        'In-browser terminal emulator powered by xterm.js',
        'Real-time bidirectional WebSocket streaming via Socket.IO',
        'Interactive quizzes, task verification, point systems, and achievement badges',
        'Integrated AI chatbot for contextual command line explanations',
        'Clean, responsive learning dashboard built with React and Tailwind CSS',
      ],
      challengesAndLearnings: [
        'Managing terminal session states cleanly within React lifecycle hooks to prevent duplicate socket listeners.',
        'Crafting flexible challenge validation logic that verifies task completion accurately.',
        'Mastered practical WebSocket handling and stateful frontend architecture.',
      ],
    },
  },
  {
    id: 'process-viz',
    number: '03',
    title: 'Process Lifecycle Viz',
    subtitle: 'CPU Scheduling Simulator & Process State Visualizer',
    description:
      'An Operating System simulator visualizing 5 CPU scheduling algorithms (FCFS, SJF, SRTF, RR, Priority) with dynamic Gantt charts and process states.',
    tags: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'C',
      'Canvas',
      'Algorithms',
    ],
    category: 'Operating Systems / Visual',
    year: 'Feb 2026',
    githubUrl: 'https://github.com/Arayana-sood/Process-Lifecycle-visualization-tool',
    liveUrl: undefined, // No live demo currently available
    caseStudy: {
      overview:
        'An educational Operating System CPU scheduling simulator that models five core scheduling algorithms with dynamic process inputs, generating animated Gantt charts and real-time process lifecycle state transitions.',
      problem:
        'Operating system scheduling algorithms are traditionally taught with static chalkboard diagrams. Visualizing dynamic context switching, preemption interrupts, and ready queue changes in real time is challenging without interactive tools.',
      whatBuilt:
        'An interactive simulation environment combining algorithms implemented in C and JavaScript that animates process state transitions, renders synchronized Gantt charts, and computes turnaround and waiting time metrics.',
      howItWorks: [
        'User enters process arrival times, burst times, and priorities, or generates random process distributions.',
        'User selects an algorithm: FCFS, SJF, SRTF (Preemptive SJF), Round Robin (custom time quantum), or Priority Scheduling.',
        'The simulation engine computes timeline ticks, ready queue ordering, and preemption triggers.',
        'The canvas renders an animated Gantt chart alongside state indicators (New, Ready, Running, Terminated) and an analytics table.',
      ],
      technicalImplementation: [
        {
          heading: 'Algorithm Simulation Engine',
          details: [
            'Authored core scheduling logic in C and JavaScript covering FCFS, SJF, SRTF, Round Robin, and Priority.',
            'Modeled deterministic ready queue transitions and preemption boundaries.',
          ],
        },
        {
          heading: 'Canvas & State Visualization',
          details: [
            'Built dynamic timeline renderer using HTML5 Canvas for smooth visual time-scaling.',
            'Illustrated process lifecycle state changes (Ready, Running, Terminated) with real-time cues.',
          ],
        },
        {
          heading: 'Comparative Metrics',
          details: [
            'Automated calculations of Waiting Time, Turnaround Time, and overall scheduler efficiency.',
            'Enabled side-by-side performance comparisons across scheduling policies.',
          ],
        },
      ],
      keyFeatures: [
        '5 algorithms implemented: FCFS, SJF, SRTF, Round Robin, and Priority Scheduling',
        'Dynamic process parameter customization (Arrival, Burst, Priority, Time Quantum)',
        'Synchronized animated Gantt chart with visual idle-time slots',
        'Real-time process-state visualization (Ready, Running, Terminated)',
        'Instant calculations for Waiting Time, Turnaround Time, and comparative metrics',
      ],
      challengesAndLearnings: [
        'Handling tie-breaking rules and simultaneous process arrival events at time quantum boundaries.',
        'Designing an intuitive Canvas drawing loop that maintains smooth responsiveness across varying process lengths.',
        'Strengthened deep understanding of OS process control blocks, CPU scheduling, and context-switching mechanics.',
      ],
    },
  },
  {
    id: 'tourism-analytics',
    number: '04',
    title: 'Tourism Analytics in India',
    subtitle: 'Power BI Business Intelligence Dashboard',
    description:
      'Power BI dashboard analyzing 1K+ visits and ~₹2B in spending across Indian tourism data with 6+ KPI metrics across 5 major cities.',
    tags: [
      'Power BI',
      'DAX',
      'Data Analytics',
      'Data Visualization',
      'SQL',
    ],
    category: 'Analytics & BI',
    year: 'Nov 2025',
    githubUrl: undefined,
    liveUrl: 'https://app.powerbi.com/view?r=eyJrIjoiOGY5OGI5ZmYtODA1ZC00NmIwLThlYjAtY2VkMjUxOTMyMzhjIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D',
    caseStudy: {
      overview:
        'A comprehensive Power BI business intelligence dashboard that analyzes over 1,000 tourist visits and approximately ₹2 billion in expenditure across Indian tourism destinations, integrating hotel, weather, and environmental factors.',
      problem:
        'Tourism operators and planners handle fragmented datasets spanning booking spending, hotel pricing, seasonality, and environmental conditions without a unified platform to understand revenue drivers and customer sentiment.',
      whatBuilt:
        'An executive-ready Power BI dashboard featuring 6+ KPI metrics, multi-source data integration, dynamic cross-filtering across 5 major cities, and custom DAX measures evaluating the impact of weather and hotel factors on tourism revenue.',
      howItWorks: [
        'ETL pipeline in Power Query cleanses and transforms tourism visits, hotel pricing, and environmental records.',
        'Star schema data model links fact tables with destination, hotel, and calendar dimension tables.',
        'Authored 6+ custom DAX measures calculating total spending, visit frequencies, average hotel ratings, and spending distributions.',
        'Interactive dashboard allows stakeholders to cross-filter by city, seasonality, pollution levels, and traveler feedback.',
      ],
      technicalImplementation: [
        {
          heading: 'Data Modeling & ETL',
          details: [
            'Processed dataset of 1K+ visits and ~₹2B in spending using Power Query.',
            'Created robust star schema relationships connecting booking facts with city, hotel, and weather dimensions.',
          ],
        },
        {
          heading: 'Custom DAX Measures',
          details: [
            'Authored 6+ KPI metrics covering visits, spending, feedback, hotel pricing, ratings, and amenities.',
            'Built calculated columns and dynamic aggregations to evaluate seasonal spending fluctuations.',
          ],
        },
        {
          heading: 'Analytical Visualization',
          details: [
            'Analyzed tourism patterns across 5 major Indian cities incorporating weather and pollution factors.',
            'Engineered interactive slicers for seamless cross-filtering and executive reporting.',
          ],
        },
      ],
      keyFeatures: [
        'Analyzed 1K+ tourist visits and ~₹2B in spending across Indian tourism data',
        '6+ KPI metrics covering visits, spend, feedback, hotel pricing, ratings, and amenities',
        'Comprehensive analysis across 5 major cities including weather and environmental factors',
        'Dynamic multi-dimensional slicers with real-time cross-filtering',
        'Clear, executive dashboard layout designed for business stakeholders',
      ],
      challengesAndLearnings: [
        'Harmonizing disparate data sources covering tourism economics with environmental weather metrics.',
        'Optimizing DAX aggregation measures to ensure instant visual updates during cross-filtering.',
        'Gained hands-on proficiency in executive BI storytelling, relational modeling, and business insights.',
      ],
    },
  },
];
