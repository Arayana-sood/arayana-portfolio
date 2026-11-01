import type { Project } from '@/types';
import { getAssetUrl } from '@/utils/asset';

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
    liveUrl: 'https://nutriai-personalized-diet-generation.onrender.com/',
    paperUrl: getAssetUrl('research/HealthRiskAI_Research_Paper.pdf'),
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
    id: 'productpulse',
    number: '02',
    title: 'ProductPulse',
    subtitle: 'E-Commerce Churn Prediction & Behavioral Cohort Segmentation',
    description:
      'Engineered an end-to-end data science framework on 3.5M+ e-commerce events (273K+ users) using Linear SVM, K-Means clustering, and PCA with a high-speed FastAPI backend and React 19 dashboard.',
    tags: [
      'Python',
      'Scikit-learn',
      'Linear SVM',
      'K-Means',
      'PCA',
      'FastAPI',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Recharts',
      'Render',
      'Vercel',
    ],
    category: 'Data Science & ML',
    year: 'Dec 2026',
    githubUrl: 'https://github.com/Arayana-sood/ProductPulse',
    liveUrl: 'https://product-pulse-nine.vercel.app/',
    paperUrl: getAssetUrl('research/ProductPulse_Project_Report.pdf'),
    caseStudy: {
      overview:
        'ProductPulse is an interactive data science framework and production decision-support platform designed to predict customer churn, cluster user cohorts, and optimize revenue retention across digital retail. Built on a 3.5M+ clickstream event dataset (273,366 user analytical cohort), the system evaluates four classification algorithms, identifies behavioral segments via K-Means, projects behavioral trajectories onto a 2D PCA latent space, and provides interactive counterfactual sensitivity analysis through a React 19 dashboard and sub-10ms FastAPI backend.',
      problem:
        'Online retailers capture massive volumes of clickstream logs, yet raw event data fails to provide actionable user-level retention signals. Furthermore, extreme class imbalance (9.19% retained vs 90.81% at-risk) causes naive accuracy metrics to fail, while marketing teams lack intuitive tools to simulate how specific behavioral changes alter churn risk.',
      whatBuilt:
        'A complete end-to-end data science architecture comprising a temporal feature pipeline across 3.5M+ events, an optimal Linear SVM classification engine (F1: 0.3586, ROC-AUC: 0.7430), unsupervised K-Means cohort clustering (K=2, Silhouette: 0.8174), a 2D PCA dimensionality reduction visualizer (54.21% variance), an asynchronous FastAPI service on Render, and a responsive React 19 / Vite / Tailwind analytics dashboard deployed on Vercel.',
      howItWorks: [
        'Ingests 3.53M raw clickstream events from December 2019, applying a strict, leakage-free temporal split (Dec 1–21 observation vs Dec 22–31 target window) across 273,366 unique users.',
        'Engineers 11 standardized user-level behavioral features including session counts, cart actions, purchase-to-view ratios, and activity span.',
        'Evaluates four classification architectures, selecting soft-margin Linear SVM for superior minority-class balance and interpretable decision boundary gradients.',
        'Applies K-Means clustering to distinguish between "Casual Explorers" (94.41% users, 7.40% retention) and "Highly Engaged Users" (5.59% users, 39.36% retention).',
        'Exposes model inference, 2D PCA coordinates, and counterfactual sensitivity simulations over FastAPI REST endpoints to an interactive React 19 web platform.',
      ],
      technicalImplementation: [
        {
          heading: 'Machine Learning & Temporal Feature Engineering',
          details: [
            'Divided 3,533,286 events into non-overlapping temporal windows (Dec 1–21 observation, Dec 22–31 target) to guarantee zero look-ahead bias.',
            'Engineered 11 behavioral features with Laplace-smoothed ratios and standardized using zero-mean unit-variance scaling.',
            'Benchmarked 4 classification models: Linear SVM, Logistic Regression, Decision Tree (CART), and Random Forest on held-out test data (N=54,674).',
            'Selected Linear SVM achieving highest F1-Score (0.3586) and ROC-AUC (0.7430) with explicit decision hyperplane formulation.',
            'Partitioned user space via K-Means clustering (K=2, Silhouette 0.8174) and mapped 2D latent space with PCA (54.21% explained variance).',
          ],
        },
        {
          heading: 'FastAPI Backend & Sub-10ms Inference',
          details: [
            'Engineered low-latency Python FastAPI backend with Pydantic v2 validation and CORSMiddleware deployed on Render.',
            'Created REST endpoints: GET /health, POST /predict (real-time single & counterfactual scoring), GET /stats, GET /models/metrics, and GET /pca-sample.',
            'Serialized trained SVM estimators, scalers, and cluster centroids via Joblib for instant sub-10ms scoring.',
          ],
        },
        {
          heading: 'React 19 Interactive Analytics Dashboard',
          details: [
            'Built responsive single-page analytics application using React 19, TypeScript, Vite, and Tailwind CSS v4 deployed on Vercel.',
            'Rendered interactive radar profiles, ROC-AUC comparison curves, PCA 2D scatter coordinates, and ROI sensitivity charts using Recharts.',
            'Equipped dashboard with counterfactual sliders demonstrating real-time hyperplane crossing velocity.',
          ],
        },
      ],
      keyFeatures: [
        'Trained on 3.53M+ events across 273,366 user analytical cohort with zero data leakage',
        'Linear SVM classifier selected as top F1 performer (0.3586) with ROC-AUC of 0.7430',
        'Unsupervised K-Means segmentation (Silhouette 0.8174) defining Casual vs Highly Engaged cohorts',
        'PCA 2D dimensionality reduction capturing 54.21% of feature variance',
        'Real-time counterfactual "what-if" tipping point calculator showing decision boundary movement',
        'Illustrative retention economics engine calculating GMV preservation & CAC avoidance',
        'Production deployment on Vercel (frontend) and Render (FastAPI backend)',
      ],
      challengesAndLearnings: [
        'Resolving extreme 10:1 class imbalance (9.19% retained vs 90.81% at-risk) by prioritizing F1-score and ROC-AUC over deceptive raw accuracy.',
        'Preventing data leakage by enforcing non-overlapping temporal observation (Dec 1–21) and target (Dec 22–31) windows.',
        'Handling collinearity between product views and cart additions to accurately interpret SVM decision hyperplane coefficients.',
        'Formulating rigorous retention economics with transparent disclaimer separating hypothetical modeling from causal proof.',
      ],
    },
  },
  {
    id: 'shellquest',
    number: '03',
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
