import { getAssetUrl } from '@/utils/asset';

/* ─────────────────────────────────────────────────────────────────────────
   COMPREHENSIVE PROJECT DOCUMENTATION SPECIFICATION
   Detailed, authentic, and technically rigorous documentation for all
   4 key projects. Fulfills the 15 structured technical sections.
   ─────────────────────────────────────────────────────────────────────────*/

export interface ProjectDoc {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  status: string;
  repoUrl?: string;
  liveUrl?: string;
  paperUrl?: string;
  summaryMetrics: { label: string; value: string; desc: string }[];
  overview: string;
  problemStatement: {
    context: string;
    keyPainPoints: string[];
  };
  objectives: string[];
  features: {
    category: string;
    items: { name: string; description: string }[];
  }[];
  techStack: {
    category: string;
    items: { name: string; role: string; versionOrDetail?: string }[];
  }[];
  systemArchitecture: {
    description: string;
    layers: { name: string; components: string[]; purpose: string }[];
  };
  workflowDataFlow: {
    step: number;
    title: string;
    action: string;
    dataHandled: string;
  }[];
  methodology: {
    phase: string;
    details: string;
  }[];
  modules: {
    name: string;
    fileOrModule: string;
    responsibility: string;
    keyLogic: string;
  }[];
  testingAndEvaluation: {
    methodology: string;
    metrics: { name: string; score: string; note: string }[];
    observations: string;
  };
  resultsAndOutcomes: string[];
  challengesAndTradeoffs: {
    challenge: string;
    tradeoff: string;
    solution: string;
  }[];
  limitations: string[];
  futureScope: string[];
  references: { title: string; link?: string; note: string }[];
}

export const projectDocs: Record<string, ProjectDoc> = {
  nutriai: {
    id: 'nutriai',
    number: '01',
    title: 'NutriAI',
    subtitle: 'AI-Powered Healthcare & Personalized Diet Recommendation System',
    category: 'AI & Machine Learning / Healthcare',
    year: 'Sep 2026',
    status: 'Deployed & Research Documented',
    repoUrl: 'https://github.com/Arayana-sood/NutriAI-personalized-diet-generation',
    liveUrl: 'https://nutriai-personalized-diet-generation.onrender.com/',
    paperUrl: getAssetUrl('research/HealthRiskAI_Research_Paper.pdf'),
    summaryMetrics: [
      { label: 'ML Models', value: '6 Trained', desc: 'Condition-specific classification models' },
      { label: 'Model Accuracy', value: '~84%', desc: 'Across most conditions (~79% on 2 models)' },
      { label: 'GenAI Parsing', value: 'Gemini 2.5 Flash', desc: 'Prescription OCR & clinical constraint extraction' },
      { label: 'Backend Latency', value: '<250ms', desc: 'FastAPI asynchronous inference pipeline' },
    ],
    overview:
      'NutriAI is an intelligent healthcare and personalized diet recommendation platform developed to bridge predictive chronic-disease risk evaluation and clinical dietary guidance. Built upon original research ("HealthRiskAI: Multi-Disease Risk Prediction System Using Machine Learning"), NutriAI combines six supervised Random Forest classification models with the multimodal Google Gemini 2.5 Flash API. The system scores patient biometrics across chronic conditions and parses clinical prescriptions into medically vetted, nutrient-aligned meal plans.',
    problemStatement: {
      context:
        'Modern lifestyle-related chronic diseases (diabetes, cardiovascular complications, renal issues, and hepatic disorders) are heavily influenced by diet. However, patients and caregivers face severe friction when converting medical diagnoses into safe day-to-day nutrition.',
      keyPainPoints: [
        'Generic, unpersonalized diet plans that fail to account for comorbidities (e.g., high potassium risks in renal patients or high glycemic loads in diabetics).',
        'Incomprehensible clinical prescriptions and handwritten or dense medical notes that patients struggle to translate into dietary contraindications.',
        'High consultation costs and delayed feedback loops preventing proactive health maintenance before chronic complications manifest.',
        'Existing fitness apps focus purely on caloric intake rather than clinical risk markers (blood pressure, fasting glucose, serum creatinine, BMI).',
      ],
    },
    objectives: [
      'Train and validate six distinct machine learning models capable of predicting risk across Heart Disease, Kidney Disease, Diabetes, Anemia, Obesity, and Liver Disease.',
      'Achieve reproducible classification accuracy (~84% benchmark across core conditions, ~79% on specialized distributions) with zero false-negative skew.',
      'Integrate Google Gemini 2.5 Flash API to parse unstructured clinical prescription images/text into validated JSON schemas containing medications and contraindications.',
      'Synthesize biometric risk indicators and medication constraints into balanced, personalized macronutrient and micronutrient meal recommendations.',
      'Deliver an accessible, responsive web interface deployed on Render with downloadable patient health summaries.',
    ],
    features: [
      {
        category: 'Diagnostic & Prediction Capabilities',
        items: [
          {
            name: 'Six-Disease Risk Assessment',
            description:
              'Scores individual health status across Heart Disease, Kidney Disease, Diabetes, Anemia, Obesity, and Liver Disease using trained Random Forest estimators.',
          },
          {
            name: 'Biometric Indicator Profiling',
            description:
              'Captures age, gender, BMI, systolic/diastolic blood pressure, glucose levels, cholesterol, creatinine, and physical activity habits.',
          },
          {
            name: 'Risk Stratification Dashboard',
            description:
              'Visualizes relative risk percentages, borderline indicators, and priority health alerts for user self-monitoring.',
          },
        ],
      },
      {
        category: 'Prescription & Nutritional Intelligence',
        items: [
          {
            name: 'Prescription Document Extraction',
            description:
              'Leverages Gemini 2.5 Flash API vision-language parsing to extract prescribed medications, dosages, dietary restrictions, and doctor notes.',
          },
          {
            name: 'Clinical Diet Synthesis',
            description:
              'Algorithmically aligns caloric and micronutrient guidelines (sodium restrictions, glycemic control, protein allowances) to predicted risk factors.',
          },
          {
            name: 'Nutrient Distribution & Reporting',
            description:
              'Generates actionable daily meal schedules with food "dos and don\'ts" and exports structured summary reports.',
          },
        ],
      },
    ],
    techStack: [
      {
        category: 'Machine Learning & Data Science',
        items: [
          { name: 'Python', role: 'Core runtime for data transformation and ML inference', versionOrDetail: '3.11+' },
          { name: 'Scikit-learn', role: 'Random Forest classifiers, pipelines, metrics evaluation', versionOrDetail: '1.4+' },
          { name: 'Pandas', role: 'Data cleaning, feature transformation, tabular data handling', versionOrDetail: '2.x' },
          { name: 'NumPy', role: 'Vectorized mathematical computations and array manipulation', versionOrDetail: '1.26+' },
          { name: 'Joblib / Pickle', role: 'Serialized model artifact persistence and low-latency loading' },
        ],
      },
      {
        category: 'GenAI & Backend Framework',
        items: [
          { name: 'FastAPI', role: 'Asynchronous REST API gateway, routing, request validation', versionOrDetail: '0.110+' },
          { name: 'Google Gemini 2.5 Flash API', role: 'Multimodal vision-language clinical prescription text extraction' },
          { name: 'Pydantic v2', role: 'Strict schema definition, data validation, and response typing' },
          { name: 'Uvicorn', role: 'ASGI high-concurrency production web server' },
        ],
      },
      {
        category: 'Frontend & Deployment',
        items: [
          { name: 'HTML5 / CSS3 / Vanilla JS', role: 'Clean, client-side UI with dynamic charting and report export' },
          { name: 'Render', role: 'Cloud container hosting for FastAPI service and static assets' },
          { name: 'GitHub', role: 'Version control and automated deployment tracking' },
        ],
      },
    ],
    systemArchitecture: {
      description:
        'NutriAI uses a modular, decoupled architecture consisting of an ingestion client, a high-concurrency FastAPI orchestration layer, an ensemble of serialized Random Forest ML models, and the Gemini 2.5 Flash cloud service.',
      layers: [
        {
          name: 'Presentation Layer',
          components: ['Web Client UI', 'Biometric Forms', 'Prescription Uploader', 'Dynamic Charting Engine'],
          purpose: 'Captures user inputs, displays interactive risk gauges, and formats customized nutritional plans.',
        },
        {
          name: 'Application & Orchestration Layer',
          components: ['FastAPI Gateway', 'Pydantic Schemas', 'Gemini Extraction Controller', 'Recommendation Engine'],
          purpose: 'Validates payloads, invokes GenAI extraction, triggers ML pipelines, and synthesizes diet outputs.',
        },
        {
          name: 'Inference Layer',
          components: ['6 Serialized Random Forest Models', 'Feature Scalers (StandardScaler)', 'Probability Aggregator'],
          purpose: 'Performs multi-condition risk scoring using tabular biomarkers with calibrated probabilities.',
        },
        {
          name: 'External Intelligence Layer',
          components: ['Google Generative AI SDK', 'Gemini 2.5 Flash API Endpoint'],
          purpose: 'Extracts structured medication warnings and clinical dietary guidance from uploaded prescription images/text.',
        },
      ],
    },
    workflowDataFlow: [
      {
        step: 1,
        title: 'User Profile & Biometric Submission',
        action: 'User inputs physiological metrics (age, blood pressure, fasting glucose, BMI) and uploads prescription notes.',
        dataHandled: 'JSON payload with 15+ biometric variables and multipart prescription image file.',
      },
      {
        step: 2,
        title: 'Prescription OCR & Parsing via Gemini 2.5 Flash',
        action: 'FastAPI routes prescription image to Gemini 2.5 Flash API with custom prompt and JSON schema constraints.',
        dataHandled: 'Extracted list of medications, dietary contraindications, and active medical flags.',
      },
      {
        step: 3,
        title: 'Biometric Normalization & ML Feature Pipeline',
        action: 'Preprocessing pipeline scales continuous variables and encodes categorical features to match training schemas.',
        dataHandled: 'Normalized NumPy array matrices mapped to specific model feature expectations.',
      },
      {
        step: 4,
        title: 'Multi-Condition Risk Scoring',
        action: 'All 6 Random Forest models evaluate features concurrently, producing classification outputs and confidence scores.',
        dataHandled: 'Heart (~84%), Kidney (~84%), Diabetes (~84%), Anemia (~84%), Obesity (~79%), Liver (~79%).',
      },
      {
        step: 5,
        title: 'Personalized Diet Synthesis & Report Generation',
        action: 'Rule-based expert system combines ML risk profile with Gemini prescription restrictions into target meal plans.',
        dataHandled: 'Customized macronutrient split, breakfast/lunch/dinner suggestions, food cautions, downloadable summary.',
      },
    ],
    methodology: [
      {
        phase: 'Dataset Curation & Preprocessing',
        details:
          'Aggregated clinical datasets for chronic conditions. Cleaned outliers, handled missing biomarker values using median imputation, and applied standard feature scaling.',
      },
      {
        phase: 'Model Training & Validation',
        details:
          'Trained Random Forest classifiers using Scikit-learn with 5-fold cross-validation. Hyperparameters (n_estimators, max_depth, min_samples_split) were tuned to prevent overfitting.',
      },
      {
        phase: 'Prescription Extraction Prompt Engineering',
        details:
          'Constructed structured system prompts for Gemini 2.5 Flash API with rigid JSON output formatting to eliminate hallucinations and extract exact medication dosage and warnings.',
      },
      {
        phase: 'Nutritional Logic Formulation',
        details:
          'Built nutrition rules mapping clinical risks (e.g. renal risk → restrict high-potassium & excessive sodium; diabetic risk → low glycemic index foods) alongside clinical medication contraindications.',
      },
    ],
    modules: [
      {
        name: 'Inference Orchestrator',
        fileOrModule: 'main.py / api/predict.py',
        responsibility: 'Routes incoming payloads, loads model weights via joblib, handles async execution.',
        keyLogic: 'Loads serialized .pkl models into memory on startup; evaluates input features in parallel.',
      },
      {
        name: 'Prescription Extractor',
        fileOrModule: 'services/gemini_service.py',
        responsibility: 'Interfaces with Google Generative AI SDK using Gemini 2.5 Flash.',
        keyLogic: 'Sends image buffer with strict JSON schema instructions; extracts medication and food caution tags.',
      },
      {
        name: 'Diet Recommendation Engine',
        fileOrModule: 'services/diet_generator.py',
        responsibility: 'Generates daily meal recommendations based on risk scores and medication constraints.',
        keyLogic: 'Filters ingredient databases against active risk tags, computing macro percentages (carbs, proteins, healthy fats).',
      },
      {
        name: 'Data Validation Schemas',
        fileOrModule: 'models/schemas.py',
        responsibility: 'Enforces type safety and range boundaries for clinical inputs.',
        keyLogic: 'Pydantic BaseModel classes validating blood pressure ranges, glucose bounds, and patient profile.',
      },
    ],
    testingAndEvaluation: {
      methodology:
        'Evaluated across partitioned test sets (80/20 train-test split) with 5-fold cross-validation. Metrics tracked include Precision, Recall, F1-Score, and overall Accuracy across all six conditions.',
      metrics: [
        { name: 'Heart Disease Classifier', score: '84.2%', note: 'High sensitivity on cardiovascular biomarkers' },
        { name: 'Kidney Disease Classifier', score: '83.8%', note: 'Reliable creatinine & urea threshold detection' },
        { name: 'Diabetes Risk Classifier', score: '84.5%', note: 'Strong recall on glucose and BMI indicators' },
        { name: 'Anemia Classifier', score: '84.1%', note: 'Consistent precision on hemoglobin and RBC counts' },
        { name: 'Obesity Classifier', score: '79.2%', note: 'Lower complexity feature set with boundary overlap' },
        { name: 'Liver Disease Classifier', score: '78.9%', note: 'Challenging enzyme variability; conservative thresholding' },
      ],
      observations:
        'Most condition classifiers consistently achieved ~84% accuracy. The Obesity and Liver models yielded ~79% accuracy due to biomarker variability and overlap. Clinical disclaimer: NutriAI is an assistive decision aid and educational system, NOT a replacement for certified clinical medical diagnosis.',
    },
    resultsAndOutcomes: [
      'Successfully deployed functional AI healthcare recommendation platform on Render with live web access.',
      'Authored corresponding academic research paper: "HealthRiskAI: Multi-Disease Risk Prediction System Using Machine Learning".',
      'Demonstrated successful multimodal integration combining classical Scikit-learn tabular ML with Gemini 2.5 Flash GenAI.',
      'Empowered users with actionable dietary dos and don’ts and transparent risk factor breakdowns.',
    ],
    challengesAndTradeoffs: [
      {
        challenge: 'Real-time multi-model inference latency',
        tradeoff: 'Sequential model evaluation slowed response times to over 1.2s.',
        solution: 'Pre-loaded all model artifacts into memory on startup and used vectorized batch inference, cutting latency to <250ms.',
      },
      {
        challenge: 'Unstructured medical prescription text variability',
        tradeoff: 'Traditional OCR pipelines (Tesseract) struggled with varied layouts and prescription handwriting.',
        solution: 'Migrated to Google Gemini 2.5 Flash API with strict JSON schema parsing, delivering high semantic extraction fidelity.',
      },
      {
        challenge: 'Imbalanced medical training data',
        tradeoff: 'Models biased toward negative class predictions without intervention.',
        solution: 'Applied class weighting in Random Forest classifiers and synthetic minority oversampling during training.',
      },
    ],
    limitations: [
      'Assistive decision support system only — outputs must not be construed as definitive medical diagnosis.',
      'Prescription extraction accuracy is contingent on legibility of uploaded prescription documents.',
      'Dataset distributions primarily reflect generalized adult demographics; pediatric calibration is not implemented.',
    ],
    futureScope: [
      'Expand clinical models to include thyroid disorders and respiratory health risks.',
      'Add longitudinal user tracking to observe changes in biomarker values over weeks and months.',
      'Incorporate regional Indian dietary databases to provide localized, culturally authentic recipe options.',
    ],
    references: [
      {
        title: 'HealthRiskAI: Multi-Disease Risk Prediction System Using Machine Learning (Research Paper)',
        link: getAssetUrl('research/HealthRiskAI_Research_Paper.pdf'),
        note: 'Authored research documentation by Arayana Sood covering ML multi-disease architectures.',
      },
      {
        title: 'NutriAI GitHub Repository',
        link: 'https://github.com/Arayana-sood/NutriAI-personalized-diet-generation',
        note: 'Complete source code for FastAPI backend, models, and frontend.',
      },
      {
        title: 'NutriAI Live Web Application on Render',
        link: 'https://nutriai-personalized-diet-generation.onrender.com',
        note: 'Live deployed cloud application.',
      },
    ],
  },

  shellquest: {
    id: 'shellquest',
    number: '03',
    title: 'ShellQuest',
    subtitle:
      'An AI-Powered Gamified Platform for Interactive Linux Command-Line Education · IEEE ETAI-2026',
    category: 'Systems & Interactive Education',
    year: '2026',
    status: 'Published at IEEE ETAI-2026 · Full Technical Architecture',
    repoUrl: 'https://github.com/Arayana-sood/ShellQuest',
    paperUrl: getAssetUrl('research/ShellQuest_IEEE_Research_Paper.pdf'),
    summaryMetrics: [
      { label: 'Conference', value: 'IEEE ETAI-2026', desc: 'Published & presented educational technology research' },
      { label: 'Sandboxing', value: 'Docker DinD', desc: 'Isolated sibling Debian bookworm containers with 256MB cap' },
      { label: 'AI Latency', value: '480ms (Groq)', desc: 'Multi-LLM factory (Groq LLaMA-3.1, Gemini 1.5, GPT-4o-mini)' },
      { label: 'User Study', value: '4.6 / 5.0 Rating', desc: 'Empirical engagement & learning efficacy evaluation (N=8)' },
    ],
    overview:
      'ShellQuest is an interactive, gamified educational platform engineered to transform how students and developers learn the Linux command line. Peer-reviewed and published in the Proceedings of the 2026 IEEE Conference on Educational Technology and Artificial Intelligence (ETAI-2026) by authors Rudransh, Arayana Sood, Abhijeet Kumar, and Ansh Kumar (Department of Computer Science & Engineering, Lovely Professional University), ShellQuest replaces passive textbooks and video lectures with authentic in-browser terminal emulation powered by xterm.js, secure containerized execution via a Docker-in-Docker sibling pattern, real-time WebSocket communication, an automated AI bash-validation pipeline, and a pluggable multi-LLM tutor engine (Groq LLaMA-3.1, Google Gemini 1.5 Flash, and OpenAI GPT-4o-mini).',
    problemStatement: {
      context:
        'Command line proficiency is an essential competency in systems programming, cloud infrastructure, and software engineering. However, novice learners encounter substantial pedagogical and technical friction during early acquisition.',
      keyPainPoints: [
        'Passive Learning Materials: Textbooks, slide decks, and video tutorials fail to build tactile command-line muscle memory or situational troubleshooting instincts.',
        'Local Environment Setup Barriers: Installing WSL, provisioning local VMs, or configuring dual-boot environments intimidates novices and risks damaging host operating system configurations.',
        'Absence of Immediate Automated Feedback: When learners misconfigure flags, enter malformed pipelines, or face syntax errors, traditional courseware provides no diagnostic hints or real-time verification.',
        'Security Risks in Multi-Tenant Environments: Allowing arbitrary shell commands on a shared educational server risks privilege escalation, resource starvation, and server takeover without rigorous containerization.',
        'Low Retention & Motivation: The absence of incremental milestones, gamification mechanics, and streak tracking leads to steep drop-off rates in foundational computing courses.',
      ],
    },
    objectives: [
      'Deliver an authentic, zero-setup Linux terminal environment directly within web browsers using xterm.js and node-pty.',
      'Implement a secure Docker-in-Docker sibling container architecture providing isolated, resource-constrained execution environments (256MB RAM, 0.5 vCPU cap) per student.',
      'Develop an automated AI-driven task validation pipeline generating both natural-language problem challenges and executable bash verification scripts.',
      'Incorporate a pluggable multi-LLM tutor factory supporting Groq LLaMA-3.1 (sub-500ms latency), Gemini 1.5 Flash, and GPT-4o-mini with debounced session summarization.',
      'Construct a comprehensive gamification framework tracking XP points, milestone badges, daily streak counters, and a type-safe 365-day activity heatmap stored in PostgreSQL.',
    ],
    features: [
      {
        category: 'Terminal Emulation & Sandboxed Runtime',
        items: [
          {
            name: 'xterm.js Web Terminal',
            description:
              'Full ANSI terminal emulation featuring custom dark themes, fit-addon responsive canvas scaling, and standard keyboard control sequences (Ctrl+C, Ctrl+L, Tab completion).',
          },
          {
            name: 'Docker Sibling Container Isolation',
            description:
              'Provisions Debian bookworm-slim sandboxes dynamically per user (sq-{userId}) via host Docker socket mounts, enforcing hard memory limits and automatic 10-minute idle reapers.',
          },
          {
            name: 'Low-Latency PTY Streaming',
            description:
              'Binds node-pty processes directly to docker exec sessions over Socket.IO WebSockets, achieving sub-35ms input latency and fluid interactive command execution.',
          },
        ],
      },
      {
        category: 'AI Pipeline & Automated Verification',
        items: [
          {
            name: 'Automated Task Validation Engine',
            description:
              'Generates dynamic Linux challenges paired with self-contained bash verification scripts executed inside the student container to verify directory structures, file contents, and exit codes.',
          },
          {
            name: 'Pluggable Multi-LLM Tutor Factory',
            description:
              'Dispatches student queries dynamically across Groq LLaMA-3.1-8b (480ms response), Google Gemini 1.5 Flash (2.4s), and OpenAI GPT-4o-mini (3.1s) for contextual doubt clearing.',
          },
          {
            name: 'Zero-Width Space Collision Avoidance',
            description:
              'Encodes invisible zero-width decimal salts (\\u200B) into AI-generated quiz questions to guarantee database uniqueness without visual corruption.',
          },
          {
            name: 'Debounced Session Summarizer',
            description:
              'Background worker activates after 10 seconds of chat inactivity to generate a concise 4-5 word session title and single-sentence pedagogical synopsis.',
          },
        ],
      },
      {
        category: 'Gamification & Learning Analytics',
        items: [
          {
            name: 'Gamified Progression System',
            description:
              'Awards XP points, maintains daily streak flame counters, and unlocks modular achievement badges upon mastering core concepts.',
          },
          {
            name: '365-Day Activity Heatmap',
            description:
              'PostgreSQL JSON activity map with Zod discriminated union validation, tracking task submissions, quiz attempts, and command milestones.',
          },
        ],
      },
    ],
    techStack: [
      {
        category: 'Frontend Architecture (Vercel Edge)',
        items: [
          { name: 'React 18.3.1', role: 'Component-based reactive user interface and state management', versionOrDetail: '18.3.1' },
          { name: 'TypeScript', role: 'Strict end-to-end type safety preventing runtime interface regressions', versionOrDetail: '5.6.3' },
          { name: 'Vite', role: 'High-speed build bundler and development server', versionOrDetail: '8.1.5' },
          { name: 'Tailwind CSS', role: 'Utility-first styling, responsive layouts, and dark theme design', versionOrDetail: '3.4.13' },
          { name: 'xterm.js & fit-addon', role: 'ANSI-compliant browser terminal emulator with dynamic canvas fitting', versionOrDetail: '5.3.0 / 0.8.0' },
          { name: 'Socket.IO Client', role: 'Bidirectional WebSocket event streaming for terminal I/O', versionOrDetail: '4.7.5' },
          { name: 'Clerk React', role: 'Secure authentication, user profiles, and JWT token management', versionOrDetail: '5.15.0' },
          { name: 'Recharts & date-fns', role: 'Analytics visualizations and date-time formatting', versionOrDetail: '2.12.0 / 3.6.0' },
        ],
      },
      {
        category: 'Backend Architecture (AWS EC2)',
        items: [
          { name: 'Node.js & Express', role: 'High-concurrency RESTful API endpoints and WebSocket gateway', versionOrDetail: 'Node 18+ / Express 4.21.0' },
          { name: 'Socket.IO Server', role: 'Real-time WebSocket server piping terminal streams and task status', versionOrDetail: '4.7.5' },
          { name: 'node-pty', role: 'Spawns pseudoterminal processes attached directly to docker exec sessions', versionOrDetail: '1.0.0' },
          { name: 'dockerode', role: 'Docker API client managing container lifecycles, resource quotas, and teardowns', versionOrDetail: '4.0.2' },
          { name: 'Prisma ORM', role: 'Type-safe database abstraction and schema migrations', versionOrDetail: '7.9.0' },
          { name: 'PostgreSQL 16', role: 'Relational data store on AWS RDS Multi-AZ for activity heatmaps and quiz data', versionOrDetail: '16.x' },
          { name: 'Zod', role: 'Runtime payload validation and discriminated union data parsing', versionOrDetail: '4.4.3' },
        ],
      },
      {
        category: 'AI Model Factory & Cloud Infrastructure',
        items: [
          { name: 'Groq LLaMA-3.1-8b', role: 'Ultra-low-latency default tutor LLM (480ms mean response time)' },
          { name: 'Google Gemini 1.5 Flash', role: 'High-context reasoning and complex command explanation (2.4s)' },
          { name: 'OpenAI GPT-4o-mini', role: 'Alternative LLM connector for comparative pedagogical benchmarking (3.1s)' },
          { name: 'AWS Infrastructure', role: 'EC2 Amazon Linux 2 server instance and RDS PostgreSQL database' },
        ],
      },
    ],
    systemArchitecture: {
      description:
        'ShellQuest implements a multi-tier, decoupled distributed architecture designed for low-latency terminal streaming and multi-tenant security. The frontend runs on Vercel Edge, communicating via WebSockets with an AWS EC2 gateway running Express and Socket.IO. The host gateway manages container sandboxes using a Docker-in-Docker sibling pattern, isolating student execution from the core operating system.',
      layers: [
        {
          name: 'Client Interface & Terminal Layer',
          components: ['React 18 Dashboard', 'xterm.js Canvas', 'FitAddon Observer', 'Clerk Auth Provider', 'AI Tutor Sidebar'],
          purpose: 'Captures user input, renders ANSI terminal streams, provides structured lesson interfaces, and displays real-time tutoring feedback.',
        },
        {
          name: 'Real-Time Communication Gateway',
          components: ['Express 4.21 Server', 'Socket.IO Gateway', 'JWT Authentication Middleware', 'Zod Payload Validators'],
          purpose: 'Authenticates inbound WebSockets, coordinates session tokens, and multiplexes terminal I/O streams with automated validation requests.',
        },
        {
          name: 'Container Sandboxing Layer (Docker DinD)',
          components: ['Dockerode Client', 'node-pty Spawner', 'Debian bookworm-slim Image Pool', '10-Min Idle Container Reaper'],
          purpose: 'Provisions isolated, resource-constrained sibling containers (sq-{userId}) mounting /var/run/docker.sock with dropped root capabilities and 256MB memory ceilings.',
        },
        {
          name: 'Data Persistence & Multi-LLM Services',
          components: ['Prisma ORM 7.9', 'PostgreSQL 16 (AWS RDS)', 'LLM Provider Factory', 'Debounced Chat Summarizer'],
          purpose: 'Stores user profiles, streaks, and 365-day JSON heatmaps while routing tutoring prompts to Groq LLaMA-3.1, Gemini 1.5 Flash, or GPT-4o-mini.',
        },
      ],
    },
    workflowDataFlow: [
      {
        step: 1,
        title: 'Authentication & Session Handshake',
        action: 'User authenticates via Clerk; frontend passes the JWT bearer token across the Socket.IO handshake to initialize an authorized learning session.',
        dataHandled: 'Clerk JWT token, user identifier, and active curriculum track ID.',
      },
      {
        step: 2,
        title: 'Sibling Container Provisioning',
        action: 'Backend inspects host Docker socket; if container sq-{userId} is absent, it provisions a fresh Debian bookworm container capped at 256MB RAM in ~2.3 seconds (or reuses warm container in ~180ms).',
        dataHandled: 'Container metadata, cgroup resource constraints, and mapped working directory paths.',
      },
      {
        step: 3,
        title: 'Bidirectional PTY Terminal Streaming',
        action: 'node-pty attaches to docker exec -it bash inside the student container; raw keystrokes and ANSI escape streams are piped over WebSockets with sub-35ms latency.',
        dataHandled: 'Raw ASCII keystrokes, ANSI cursor positioning codes, and terminal output chunks.',
      },
      {
        step: 4,
        title: 'AI Challenge Generation',
        action: 'Task generator prompt prompts the LLM factory to emit a structured JSON payload containing the challenge instructions and an automated bash validation script.',
        dataHandled: 'Task JSON, natural language prompt, and idempotent test bash script.',
      },
      {
        step: 5,
        title: 'Automated Task Verification',
        action: 'When the student clicks "Submit Task", the backend executes the bash test script inside the user container via docker exec and evaluates exit code 0.',
        dataHandled: 'Bash script execution return code (0 = success, 1 = failure) and stderr diagnostics.',
      },
      {
        step: 6,
        title: 'Activity Persistence & Summarization',
        action: 'On successful verification, Prisma records earned XP, streak status, and updates the 365-day JSON heatmap; an idle debounce trigger synthesizes the session synopsis.',
        dataHandled: 'PostgreSQL JSON activity array, streak counters, and AI-generated summary synopses.',
      },
    ],
    methodology: [
      {
        phase: 'Docker-in-Docker Sibling Containerization',
        details:
          'To ensure multi-tenant security without the high overhead and nested virtualization vulnerabilities of true DinD, ShellQuest implements sibling container provisioning by mounting the host Docker socket (/var/run/docker.sock). Each learner container is assigned an injective name sq-{userId}, capped at 256MB RAM and 0.5 vCPU, and monitored by a 10-minute idle reaper.',
      },
      {
        phase: 'Automated AI Bash-Validation Pipeline',
        details:
          'Rather than relying on brittle regex matching of user command history, ShellQuest utilizes a dual-output LLM prompt that creates both student-facing instructions and an executable, idempotent bash verification script executed directly inside the learner container.',
      },
      {
        phase: 'Pluggable Multi-LLM Provider Factory',
        details:
          'Architected an extensible LLM connector utilizing the Factory design pattern. The backend routes real-time chat requests to Groq LLaMA-3.1-8b for sub-500ms interactive assistance, while supporting Google Gemini 1.5 Flash and OpenAI GPT-4o-mini as pluggable fallback providers.',
      },
      {
        phase: 'Database Collision Prevention with Zero-Width Characters',
        details:
          'To prevent database unique-constraint collisions on AI-generated question seeds without corrupting learner readability, the backend injects an invisible zero-width decimal salt (\\u200B + 4-digit ID) into generated questions before Prisma persistence.',
      },
    ],
    modules: [
      {
        name: 'Terminal Viewport Component',
        fileOrModule: 'components/Terminal/TerminalWindow.tsx',
        responsibility: 'Instantiates xterm.js instance, mounts FitAddon, handles window resizing, and wires onData keystrokes to WebSocket events.',
        keyLogic: 'Initializes Terminal, configures dark ANSI theme, attaches ResizeObserver, and streams input via socket.emit("terminal:input").',
      },
      {
        name: 'Container Lifecycle Manager',
        fileOrModule: 'services/ContainerManager.ts',
        responsibility: 'Provisions, starts, limits, and destroys isolated Docker sibling containers using Dockerode and host socket mounts.',
        keyLogic: 'Enforces 256MB RAM / 0.5 CPU cgroups, manages sq-{userId} naming, and runs 10-minute idle container garbage collection.',
      },
      {
        name: 'Automated Task Validator',
        fileOrModule: 'services/TaskValidator.ts',
        responsibility: 'Executes verification bash scripts inside student containers via docker exec and evaluates exit codes.',
        keyLogic: 'Runs docker.exec({ Cmd: ["bash", "-c", validatorScript] }), checks exit status code, and triggers reward events.',
      },
      {
        name: 'Pluggable LLM Tutor Factory',
        fileOrModule: 'services/LLMFactory.ts',
        responsibility: 'Routes pedagogical queries and task generation requests to Groq LLaMA-3.1, Gemini 1.5 Flash, or OpenAI.',
        keyLogic: 'Dispatches prompts through unified provider interfaces and debounces idle conversations (10s) to create topic titles.',
      },
      {
        name: 'Activity Heatmap & Gamification Store',
        fileOrModule: 'services/GamificationService.ts',
        responsibility: 'Maintains user streaks, XP balances, badge unlocks, and serialized 365-day JSON activity logs in PostgreSQL.',
        keyLogic: 'Validates activity event payloads with Zod discriminated unions and updates Prisma relational models atomically.',
      },
    ],
    testingAndEvaluation: {
      methodology:
        'Conducted rigorous quantitative performance benchmarking and an empirical user acceptance study published at the IEEE ETAI-2026 conference. Benchmarks evaluated container startup latency, LLM inference response times, validation speed, and student engagement.',
      metrics: [
        { name: 'Cold Container Start', score: '2.3s mean', note: 'P95 latency of 3.1s for fresh Debian container creation' },
        { name: 'Warm Container Reuse', score: '180ms mean', note: 'Sub-second reconnection to already-running user sandboxes' },
        { name: 'AI Tutor Latency', score: '480ms', note: 'Groq LLaMA-3.1-8b average inference response time' },
        { name: 'Task Validation Speed', score: '240ms', note: 'Automated docker exec bash evaluation (P95: 580ms)' },
      ],
      observations:
        'An empirical user acceptance evaluation conducted with 8 Computer Science students at Lovely Professional University yielded an average engagement score of 4.6 / 5.0. Participants reported that having an active, consequence-free container paired with instant AI error hints dramatically reduced the hesitation typically experienced during early Linux command-line learning.',
    },
    resultsAndOutcomes: [
      'Peer-reviewed and accepted for publication at the 2026 IEEE Conference on Educational Technology and Artificial Intelligence (ETAI-2026).',
      'Engineered a scalable, secure multi-tenant Linux educational platform utilizing Docker sibling sandboxing with 256MB memory quotas.',
      'Achieved sub-500ms AI tutor response times using Groq LLaMA-3.1, providing immediate contextual syntax error assistance.',
      'Demonstrated 100% ANSI terminal compliance in web browsers with real-time bidirectional WebSocket streaming via Socket.IO.',
      'Published complete research paper with architectural schematics, sequence diagrams, and empirical user study findings.',
    ],
    challengesAndTradeoffs: [
      {
        challenge: 'Multi-Tenant Security vs Docker Virtualization Overhead',
        tradeoff: 'Full virtual machines (VMs) provide deep kernel isolation but have prohibitive boot times and RAM footprints; root privileged containers introduce privilege escalation risks.',
        solution: 'Implemented the Docker sibling container pattern with dropped capabilities, hard cgroup resource quotas (256MB RAM / 0.5 CPU), and a 10-minute idle reaper daemon.',
      },
      {
        challenge: 'React 18 Strict Mode Lifecycle & Duplicate Sockets',
        tradeoff: 'Component double-mounting in development caused duplicate WebSocket event listeners and terminal ghost instances.',
        solution: 'Built deterministic cleanup routines inside useEffect, unbinding socket events, terminating node-pty processes, and cleanly disposing xterm.js instances.',
      },
      {
        challenge: 'Database Constraint Collisions on AI Quiz Questions',
        tradeoff: 'LLMs occasionally generate identically phrased questions, triggering unique key violations in PostgreSQL.',
        solution: 'Engineered an invisible zero-width decimal salt (\\u200B + 4-digit ID) appended to question texts, ensuring DB uniqueness without visible UI artifacts.',
      },
      {
        challenge: 'Balancing LLM Reasoning Depth vs Real-Time Latency',
        tradeoff: 'High-parameter frontier models like GPT-4o exhibit 3+ second latencies, breaking the fluid conversational rhythm of terminal practice.',
        solution: 'Designed a Factory Pattern routing real-time terminal assistance through Groq LLaMA-3.1 (480ms) while utilizing Gemini 1.5 Flash for deep conceptual breakdowns.',
      },
    ],
    limitations: [
      'Memory ceilings of 256MB per container prevent execution of memory-heavy compilers or extensive data processing scripts.',
      'Container sandboxes have outbound network egress restricted to prevent unauthorized botnet or external scanning behavior, disallowing live apt-get updates.',
      'Full-screen ncurses applications (e.g. htop, nano) require specialized terminal window dimensions and pty escape sequence handling.',
    ],
    futureScope: [
      'Multi-user collaborative terminal mode enabling pair-programming and real-time mentor screen observation.',
      'Kubernetes orchestration with automated node scaling to support concurrent classroom loads of 1,000+ simultaneous students.',
      'LLM automated exploit detection and proactive security vulnerability hints for cybersecurity and penetration testing tracks.',
    ],
    references: [
      {
        title: 'ShellQuest IEEE ETAI-2026 Research Paper (PDF)',
        link: getAssetUrl('research/ShellQuest_IEEE_Research_Paper.pdf'),
        note: 'Published at the 2026 IEEE Conference on Educational Technology and Artificial Intelligence.',
      },
      {
        title: 'ShellQuest GitHub Repository',
        link: 'https://github.com/Arayana-sood/ShellQuest',
        note: 'Complete source code and documentation repository for the platform.',
      },
      {
        title: 'xterm.js Web Terminal Emulator Specification',
        link: 'https://xtermjs.org/',
        note: 'Standard web terminal emulator library utilized for browser-based ANSI terminal rendering.',
      },
      {
        title: 'Docker Engine API & Dockerode Documentation',
        link: 'https://github.com/apocas/dockerode',
        note: 'Node.js Docker API client used for container provisioning and isolation management.',
      },
      {
        title: 'Prisma ORM & PostgreSQL Schema Specification',
        link: 'https://www.prisma.io/',
        note: 'Next-generation ORM utilized for type-safe database migrations and activity logging.',
      },
    ],
  },

  productpulse: {
    id: 'productpulse',
    number: '02',
    title: 'ProductPulse',
    subtitle:
      'An Interactive Data Science Framework for E-Commerce Customer Churn Prediction, Behavioural Cohort Segmentation, and Revenue Retention Optimization',
    category: 'Data Science & Machine Learning',
    year: 'Dec 2026',
    status: 'Production Deployed (Vercel & Render) · LPU Minor Project',
    repoUrl: 'https://github.com/Arayana-sood/ProductPulse',
    liveUrl: 'https://product-pulse-nine.vercel.app/',
    paperUrl: getAssetUrl('research/ProductPulse_Project_Report.pdf'),
    summaryMetrics: [
      { label: 'Dataset Scale', value: '3.53M Events', desc: 'Analyzed 273,366 user analytical cohort from Kaggle REES46' },
      { label: 'Optimal Model', value: 'Linear SVM', desc: 'Top F1-Score (0.3586) & ROC-AUC (0.7430) under 10:1 class imbalance' },
      { label: 'Cohort Clustering', value: 'K-Means (K=2)', desc: 'Validated Silhouette score of 0.8174 across customer segments' },
      { label: 'Inference Speed', value: '<10ms Latency', desc: 'FastAPI async pipeline on Render & React 19 dashboard on Vercel' },
    ],
    overview:
      'ProductPulse is an interactive data science framework and business decision-support platform designed to analyze e-commerce customer behavior, forecast short-horizon customer inactivity, segment behavioral cohorts, and simulate revenue retention economics. Developed as a university-certified project under Dr. Madhu Bala at Lovely Professional University (INT345), ProductPulse processes over 3.53 million raw clickstream events across a 273,366-user analytical cohort. The system evaluates four benchmarked classification architectures, uncovers distinct user segments via K-Means, visualizes customer space via 2D Principal Component Analysis (PCA), and delivers real-time counterfactual tipping-point simulations through an asynchronous Python/FastAPI service and a modern React 19 dashboard.',
    problemStatement: {
      context:
        'In modern e-commerce retail, customer acquisition costs (CAC) continue to escalate due to stricter privacy regulations and saturated digital ad channels. Retaining existing customers is economically critical because returning shoppers demonstrate higher average order value (AOV) and conversion velocity. However, retailers struggle to convert high-volume, event-level clickstream logs into actionable user-level retention signals before users become inactive.',
      keyPainPoints: [
        'Event-Level vs User-Level Gap: Raw clickstream data is event-oriented (page views, cart additions, removals), whereas retention interventions require a user-level behavioral synthesis.',
        'Severe Class Imbalance: The target window exhibits extreme class skew (~9.19% retained vs 90.81% at-risk/churned), rendering naive accuracy metrics completely deceptive and requiring precision, recall, and F1 optimization.',
        'Temporal Data Leakage: Standard predictive pipelines often mix feature observation and target response windows, creating unrealistic look-ahead bias.',
        'Lack of Explainable Decision Tipping Points: Marketing and retention teams lack intuitive, interactive tools to compute exactly how much a user\'s behavior must shift to cross the decision boundary from at-risk to retained.',
      ],
    },
    objectives: [
      'Construct a leak-free temporal data engineering pipeline dividing 3.53M+ events into a 21-day observation window (Dec 1–21) and a 10-day target window (Dec 22–31) across 273,366 users.',
      'Engineer 11 robust user-level behavioral indicators (session counts, cart additions, removals, purchases, and Laplace-smoothed conversion ratios).',
      'Train and benchmark four diverse classifier families (Logistic Regression, Decision Tree CART, Random Forest, and Linear Support Vector Machine) evaluating F1-Score and ROC-AUC on held-out test data (N=54,674).',
      'Perform unsupervised cohort clustering via K-Means, selecting optimal K=2 (Silhouette Score = 0.8174) to profile Casual Explorers versus Highly Engaged users.',
      'Apply Principal Component Analysis (PCA) to reduce 11-dimensional feature vectors into a 2D projection explaining 54.21% of variance.',
      'Formulate an exact counterfactual sensitivity equation (f(x) = w^T x + b) calculating boundary-crossing velocity (e.g. one purchase shifting decision score from -0.76 to +0.18).',
      'Model illustrative retention economics showing that a 5% recovery of 248,253 at-risk users yields ₹4.10 Cr in combined indicative value (₹3.10 Cr GMV + ₹0.99 Cr CAC avoidance).',
      'Deploy a production web application with a sub-10ms Python FastAPI backend on Render and a responsive React 19 / TypeScript / Vite / Tailwind CSS v4 dashboard on Vercel.',
    ],
    features: [
      {
        category: 'Diagnostic & Prediction Capabilities',
        items: [
          {
            name: 'Single-User Retention Scoring',
            description:
              'Computes signed geometric distance from the Linear SVM decision hyperplane using 11 standardized behavioral inputs.',
          },
          {
            name: 'Counterfactual "What-If" Tipping Point Lab',
            description:
              'Simulates how incremental behavioral shifts (e.g., adding 1 completed purchase or 2 active sessions) alter a customer\'s churn classification in real time.',
          },
          {
            name: 'Multi-Model Benchmark Observatory',
            description:
              'Interactive comparison of 4 supervised architectures (Linear SVM, Random Forest, Decision Tree, Logistic Regression) with ROC curves, precision, recall, and F1 scores.',
          },
        ],
      },
      {
        category: 'Cohort Intelligence & Economic Modeling',
        items: [
          {
            name: 'Unsupervised Behavioral Cohort Segmentation',
            description:
              'K-Means clustering (K=2) profiling Casual Explorers (94.41% users, 7.40% retention) vs Highly Engaged Users (5.59% users, 39.36% retention).',
          },
          {
            name: '2D PCA Latent Space Projection',
            description:
              'Dimensionality reduction projecting 11-dimensional user profiles onto PC1 (36.03% engagement volume) and PC2 (18.18% conversion efficiency).',
          },
          {
            name: 'Retention Economics Calculator',
            description:
              'Dynamic business value modeling translating hypothetical recovery scenarios (1%, 5%, 10%) into indicative GMV preservation and CAC avoidance.',
          },
        ],
      },
    ],
    techStack: [
      {
        category: 'Machine Learning & Data Science',
        items: [
          { name: 'Python 3.14', role: 'Core runtime for statistical modeling and pipeline execution' },
          { name: 'Scikit-learn', role: 'LinearSVC, LogisticRegression, DecisionTree, RandomForest, KMeans, PCA, StandardScaler', versionOrDetail: '1.4+' },
          { name: 'Pandas', role: 'Multi-million event data cleansing, sessionization, and temporal aggregation', versionOrDetail: '2.x' },
          { name: 'NumPy', role: 'Vectorized mathematical operations, Laplace smoothing, and hyperplane equations' },
          { name: 'Joblib', role: 'Trained model artifact serialization (.pkl binaries)' },
        ],
      },
      {
        category: 'Backend & High-Speed API Service',
        items: [
          { name: 'FastAPI', role: 'Asynchronous REST API gateway, sub-10ms inference latency', versionOrDetail: '0.110+' },
          { name: 'Uvicorn', role: 'High-concurrency ASGI production web server' },
          { name: 'Pydantic v2', role: 'Strict schema definition, data validation, and response typing' },
          { name: 'CORSMiddleware', role: 'Secure cross-origin exchange between Vercel frontend and Render backend' },
        ],
      },
      {
        category: 'Frontend & Interactive Dashboard',
        items: [
          { name: 'React 19', role: 'Modern component-based reactive user interface' },
          { name: 'TypeScript', role: 'Strict static type validation across API payloads' },
          { name: 'Vite', role: 'Next-generation bundler and lightning-fast build pipeline' },
          { name: 'Tailwind CSS v4', role: 'Modern utility-first styling with dark/light themes' },
          { name: 'Recharts', role: 'Interactive SVG radar charts, ROC curves, PCA maps, and ROI curves' },
          { name: 'React Router DOM v7', role: 'Multi-page client-side routing and view transitions' },
          { name: 'Axios', role: 'HTTP client for calling backend APIs with automatic base URL sanitization' },
        ],
      },
      {
        category: 'Cloud Hosting & Academic Reporting',
        items: [
          { name: 'Vercel', role: 'Global Edge CDN hosting the interactive React 19 application' },
          { name: 'Render', role: 'Cloud container hosting the live Python FastAPI backend API' },
          { name: 'Python-docx & LaTeX', role: 'Automated academic project report generation formatted to LPU standards' },
        ],
      },
    ],
    systemArchitecture: {
      description:
        'ProductPulse is organized as a decoupled, 4-tier system: Data Layer (raw clickstream ingestion), Analytics Layer (Scikit-learn model training & clustering), API Layer (FastAPI asynchronous microservice), and Presentation Layer (React 19 interactive dashboard).',
      layers: [
        {
          name: 'Data Layer',
          components: ['REES46 Kaggle CSV', 'Temporal Splitter (Dec 1–21 vs Dec 22–31)', 'Pandas Aggregator', 'StandardScaler'],
          purpose: 'Ingests 3.53M raw events, removes look-ahead leakage, aggregates 273,366 user profiles, and standardizes 11 features.',
        },
        {
          name: 'Analytics Layer',
          components: ['Linear SVM Classifier', 'K-Means Clustering Engine', 'PCA 2D Reducer', 'Counterfactual Solver'],
          purpose: 'Scores churn probability, computes boundary distances, assigns cohort clusters, and calculates tipping points.',
        },
        {
          name: 'API Service Layer',
          components: ['FastAPI Gateway', 'Pydantic Validation', 'Joblib Artifact Loader', 'Uvicorn ASGI Server'],
          purpose: 'Provides low-latency endpoints (/health, /predict, /stats, /models/metrics, /pca-sample) with sub-10ms response times.',
        },
        {
          name: 'Presentation Layer',
          components: ['React 19 Views', 'Recharts Visualizers', 'Tailwind CSS v4', 'Counterfactual Interactive Sliders'],
          purpose: 'Delivers executive-ready business intelligence, single-user scenario testing, and cohort exploration on Vercel.',
        },
      ],
    },
    workflowDataFlow: [
      {
        step: 1,
        title: 'Raw Event Ingestion & Leakage-Free Windowing',
        action: 'Ingests 3,533,286 timestamped clickstream events, partitioning Dec 1–21 as the observation window and Dec 22–31 as the target window.',
        dataHandled: '9 raw columns (event_time, event_type, product_id, category_id, brand, price, user_id, user_session).',
      },
      {
        step: 2,
        title: 'User-Level Behavioral Feature Engineering',
        action: 'Aggregates interaction volume into 11 user-level features including views, carts, purchases, active days, and Laplace-smoothed ratios.',
        dataHandled: 'Cohort matrix of 273,366 rows × 11 features standardized via zero-mean unit-variance transformation.',
      },
      {
        step: 3,
        title: 'Supervised Hyperplane Classification & Ranking',
        action: 'Soft-margin Linear SVM evaluates standardized features, calculating signed distance f(x) = w^T x + b to classify retention.',
        dataHandled: 'Held-out test split (N=54,674), F1-Score: 0.3586, ROC-AUC: 0.7430, class weights optimizing minority recall.',
      },
      {
        step: 4,
        title: 'Unsupervised Cohort Clustering & PCA Projection',
        action: 'K-Means (K=2) groups users by engagement intensity, while PCA projects 11-dimensional space onto 2 principal components.',
        dataHandled: 'Silhouette score: 0.8174; PC1 (36.03% variance) + PC2 (18.18% variance) explaining 54.21% total variance.',
      },
      {
        step: 5,
        title: 'Real-Time Counterfactual Tipping Point & Economics',
        action: 'FastAPI computes the minimum behavioral change delta required to cross the SVM decision boundary and estimates GMV preservation.',
        dataHandled: 'Instant response payload returning predicted class, margin score, segment profile, and indicative recovery values.',
      },
    ],
    methodology: [
      {
        phase: 'Temporal Partitioning & Target Definition',
        details:
          'Enforced a non-overlapping temporal split: observation window T_obs (1–21 Dec 2019) for feature extraction and target window T_target (22–31 Dec 2019) for ground-truth label assignment (y=1 if active, y=0 if inactive).',
      },
      {
        phase: 'Feature Engineering & Normalization',
        details:
          'Constructed 11 fixed-dimensional features: total_views, total_carts, total_purchases, total_removes, total_sessions, active_days, activity_duration_days, total_events, events_per_session, purchase_view_ratio, and cart_view_ratio with +1 Laplace smoothing to prevent division by zero.',
      },
      {
        phase: 'Model Benchmarking Under Class Imbalance',
        details:
          'Trained 4 classifier architectures on 80% train split and evaluated on 20% test set (N=54,674). Recognized that 9.19% minority class rendered accuracy misleading, selecting Linear SVM based on optimal F1-score (0.3586) and balanced recall (0.4895).',
      },
      {
        phase: 'Analytical Tipping Point & Business Sensitivity',
        details:
          'Derived closed-form marginal gradient formulas (w_j / sigma_j) to determine the exact delta needed to cross the hyperplane, verifying that completing one additional purchase increases boundary-crossing velocity by 2.1x compared to passive sessions.',
      },
    ],
    modules: [
      {
        name: 'Inference & Prediction Controller',
        fileOrModule: 'api/endpoints/predict.py',
        responsibility: 'Validates input payloads via Pydantic v2 and executes real-time SVM decision scoring.',
        keyLogic: 'Loads serialized scaler and LinearSVC artifacts via Joblib; computes f(x) = w^T z + b in <10ms.',
      },
      {
        name: 'Clustering & PCA Service',
        fileOrModule: 'services/clustering_service.py',
        responsibility: 'Manages K-Means cluster assignments and generates 2D PCA latent coordinates.',
        keyLogic: 'Maps user inputs to pre-computed cluster centroids and projects onto PC1/PC2 eigenvector space.',
      },
      {
        name: 'Model Benchmark Observatory',
        fileOrModule: 'components/views/ModelsView.tsx',
        responsibility: 'Renders ROC curves, confusion matrices, and precision-recall trade-offs across all 4 models.',
        keyLogic: 'Interactive Recharts visualization charting F1-score and ROC-AUC comparisons with explanatory insights.',
      },
      {
        name: 'Retention Economics Engine',
        fileOrModule: 'services/economics_service.py',
        responsibility: 'Simulates indicative GMV preservation and CAC avoidance across recovery lift scenarios.',
        keyLogic: 'Computes V(L) = N_at-risk * (L/100) * AOV + N_at-risk * (L/100) * CAC across 1%, 5%, and 10% tiers.',
      },
    ],
    testingAndEvaluation: {
      methodology:
        'Evaluated on a held-out 20% test cohort (N=54,674 users). Due to 90.81% churn class imbalance, models were judged by F1-score, precision, recall, and ROC-AUC rather than raw accuracy alone.',
      metrics: [
        { name: 'Linear SVM (Selected)', score: 'F1: 0.3586 | AUC: 0.7430', note: 'Best balance of precision (0.2829) and recall (0.4895); accuracy 83.91%' },
        { name: 'Random Forest', score: 'F1: 0.3355 | AUC: 0.7389', note: 'Higher recall (0.5495) but lower precision (0.2415); accuracy 80.01%' },
        { name: 'Decision Tree (CART)', score: 'F1: 0.3248 | AUC: 0.7404', note: 'High recall (0.5935) but lowest precision (0.2235); accuracy 77.33%' },
        { name: 'Logistic Regression', score: 'F1: 0.1894 | AUC: 0.7429', note: 'High accuracy (91.19%) and precision (0.6113) but severely penalized recall (0.1121)' },
        { name: 'K-Means Clustering (K=2)', score: 'Silhouette: 0.8174', note: 'Separates Casual Explorers (94.41%) from Highly Engaged Users (5.59%)' },
        { name: 'PCA Dimensionality Reduction', score: '54.21% Variance', note: 'PC1 explains 36.03% (engagement volume); PC2 explains 18.18% (conversion efficiency)' },
      ],
      observations:
        'Linear SVM achieved the highest F1-score (0.3586) with equivalent ranking capability (ROC-AUC 0.7430). The project report explicitly clarifies that 10-day short-horizon inactivity is a prioritization tool, not definitive proof of permanent churn.',
    },
    resultsAndOutcomes: [
      'Successfully deployed complete production data science web platform on Vercel (frontend) and Render (FastAPI).',
      'Authored comprehensive university project report under Dr. Madhu Bala for INT345 Data Science Minor at LPU.',
      'Demonstrated empirical superiority of Linear SVM under extreme class imbalance (9.19% retained vs 90.81% churn).',
      'Delivered interactive counterfactual decision-boundary simulator enabling business users to test retention scenarios.',
      'Constructed transparent economic retention model projecting ₹4.10 Cr in indicative value at a 5% recovery rate.',
    ],
    challengesAndTradeoffs: [
      {
        challenge: 'Severe 10:1 class imbalance (9.19% retained vs 90.81% at-risk)',
        tradeoff: 'Logistic Regression achieved 91.19% accuracy by trivializing the minority class, missing 89% of returning users (recall 0.1121).',
        solution: 'Discarded accuracy as a selection metric; selected Linear SVM based on optimal F1-score (0.3586) and robust minority recall (0.4895).',
      },
      {
        challenge: 'Risk of temporal data leakage in clickstream analysis',
        tradeoff: 'Using entire monthly histories to predict churn introduces look-ahead bias that fails in production.',
        solution: 'Implemented strict non-overlapping temporal partitioning: Dec 1–21 exclusively for features, Dec 22–31 exclusively for target labels.',
      },
      {
        challenge: 'Collinearity between product views and cart interactions',
        tradeoff: 'Highly correlated features can produce unstable or counter-intuitive individual regression coefficients.',
        solution: 'Standardized features (zero-mean, unit-variance) and interpreted SVM weights holistically as a combined behavioral pattern rather than isolated causal effects.',
      },
    ],
    limitations: [
      'Operationalized as a 10-day short-horizon inactivity label, not verified long-term account cancellation or permanent churn.',
      'Trained on a single calendar month (December 2019) from cosmetics retail, which incorporates seasonal holiday shopping dynamics.',
      'Economic retention calculations (AOV ₹2,500, CAC ₹800) represent illustrative decision-support assumptions rather than audited company financials.',
    ],
    futureScope: [
      'Temporal Validation: Evaluate models across multi-month rolling observation windows to verify drift stability.',
      'Streaming Event Architecture: Integrate Apache Kafka and Redis for near-real-time clickstream feature updates and live scoring.',
      'Advanced Sequence Deep Learning: Explore recurrent neural networks (LSTM) or temporal transformers for sequential event pattern extraction.',
      'CRM & Marketing Integration: Connect automated webhook triggers to customer data platforms (Braze, Klaviyo) for automated retention campaigns.',
    ],
    references: [
      {
        title: 'ProductPulse Project Report (LPU INT345 Data Science Minor)',
        link: getAssetUrl('research/ProductPulse_Project_Report.pdf'),
        note: 'Authored project report by Arayana Sood under Dr. Madhu Bala, Lovely Professional University.',
      },
      {
        title: 'ProductPulse Live Interactive Application (Vercel)',
        link: 'https://product-pulse-nine.vercel.app/',
        note: 'Live deployed production dashboard built with React 19, Vite, and Tailwind CSS v4.',
      },
      {
        title: 'ProductPulse GitHub Repository',
        link: 'https://github.com/Arayana-sood/ProductPulse',
        note: 'Full source code for frontend, FastAPI backend, ML pipelines, and documentation.',
      },
      {
        title: 'ProductPulse FastAPI Production Backend (Render)',
        link: 'https://productpulse-api-tgbe.onrender.com',
        note: 'Live ASGI cloud service hosting ML inference, statistics, and PCA endpoints.',
      },
      {
        title: 'Kaggle: eCommerce Events History in Cosmetics Shop (REES46)',
        link: 'https://www.kaggle.com/datasets/mkechinov/ecommerce-events-history-in-cosmetics-shop',
        note: 'Primary empirical dataset comprising 3.53M+ events and 273,366 user profiles.',
      },
    ],
  },

  'tourism-analytics': {
    id: 'tourism-analytics',
    number: '04',
    title: 'Tourism Analytics in India',
    subtitle: 'Power BI Business Intelligence Dashboard',
    category: 'Data Analytics & Business Intelligence',
    year: 'Nov 2025',
    status: 'Live Dashboard Published',
    liveUrl:
      'https://app.powerbi.com/view?r=eyJrIjoiOGY5OGI5ZmYtODA1ZC00NmIwLThlYjAtY2VkMjUxOTMyMzhjIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D',
    summaryMetrics: [
      { label: 'Data Scale', value: '1K+ Visits', desc: 'Analyzed over 1,000 tourist visits across India' },
      { label: 'Spend Analyzed', value: '~₹2B', desc: 'Detailed expenditure and revenue pattern tracking' },
      { label: 'Geographic Scope', value: '5 Major Cities', desc: 'Cross-city comparative tourism metrics' },
      { label: 'KPI Metrics', value: '6+ Measures', desc: 'Custom DAX measures evaluating spend, ratings, weather' },
    ],
    overview:
      'Tourism Analytics in India is an executive-grade Business Intelligence dashboard engineered in Microsoft Power BI. Analyzing over 1,000 tourist visits and approximately ₹2 billion in expenditure across five major Indian cities (Delhi, Mumbai, Bengaluru, Jaipur, and Goa), the project bridges travel booking data with environmental factors (weather conditions, air quality) and hospitality amenities. Through custom DAX measures, relational star schema modeling, and interactive slicers, the dashboard delivers actionable insights into tourist spending behavior and destination performance.',
    problemStatement: {
      context:
        'India’s tourism sector generates substantial economic value, but destination management organizations and hospitality operators frequently struggle with fragmented data silos.',
      keyPainPoints: [
        'Tourism spending, hotel pricing, and traveler satisfaction are evaluated in isolation without considering weather and pollution impacts.',
        'Decision makers lack centralized executive dashboards with dynamic cross-filtering by city, month, and traveler demographic.',
        'Difficulty identifying seasonal revenue drops caused by environmental factors (e.g. extreme summer heat or high winter AQI in northern cities).',
        'Absence of unified KPI metrics tracking average spend per visit alongside hotel ratings and amenity satisfaction.',
      ],
    },
    objectives: [
      'Ingest, cleanse, and transform fragmented Indian tourism, hotel, and environmental datasets using Power Query ETL pipelines.',
      'Design and deploy an optimized star schema data model linking visit fact tables with city, hotel, weather, and calendar dimension tables.',
      'Author 6+ custom DAX measures calculating total spend, visit frequency, average daily spend, hotel rating averages, and satisfaction indexes.',
      'Analyze tourism metrics across five key Indian tourist hubs, identifying spending patterns influenced by weather, seasonality, and amenities.',
      'Publish an interactive, responsive Power BI dashboard accessible via Microsoft Power BI Service for stakeholder exploration.',
    ],
    features: [
      {
        category: 'Business Intelligence & Modeling',
        items: [
          {
            name: 'Star Schema Relational Architecture',
            description:
              'Clean 1-to-many relationship modeling connecting Fact_TourismVisits with Dim_City, Dim_Hotel, Dim_Weather, and Dim_Date.',
          },
          {
            name: 'Advanced Custom DAX Measures',
            description:
              'Engineered dynamic calculations for Total Spend (~₹2B), Total Visits (1K+), Average Spend per Tourist, and Rating Weighted Scores.',
          },
          {
            name: 'Multi-City Comparative Analysis',
            description:
              'Benchmarking across Delhi, Mumbai, Bengaluru, Jaipur, and Goa across revenue, visit duration, and satisfaction.',
          },
        ],
      },
      {
        category: 'Interactive Visualization & Insights',
        items: [
          {
            name: 'Environmental Impact Correlation',
            description:
              'Visualizes how temperature, rainfall, and Air Quality Index (AQI) levels impact monthly tourist footfall and spend.',
          },
          {
            name: 'Hospitality & Amenity Breakdown',
            description:
              'Analyzes pricing tiers, guest ratings, and amenity availability (pool, wifi, dining) against overall traveler spend.',
          },
          {
            name: 'Interactive Cross-Filtering',
            description:
              'Enables instant multi-dimensional slicing by city, price segment, season, and demographic profile.',
          },
        ],
      },
    ],
    techStack: [
      {
        category: 'BI & Analytical Tools',
        items: [
          { name: 'Microsoft Power BI Desktop', role: 'Data modeling, DAX authoring, interactive report design', versionOrDetail: 'Latest' },
          { name: 'Power Query (M Language)', role: 'ETL pipelines: data cleaning, column type coercion, merging, normalization' },
          { name: 'DAX (Data Analysis Expressions)', role: 'Authored measures for KPIs, dynamic time-intelligence aggregations' },
        ],
      },
      {
        category: 'Data Management & Hosting',
        items: [
          { name: 'SQL / Relational Modeling', role: 'Structured query design and star schema dimension modeling' },
          { name: 'Microsoft Power BI Service', role: 'Cloud report publication, row-level sharing, and public web embed generation' },
        ],
      },
    ],
    systemArchitecture: {
      description:
        'The architecture follows industry-standard BI pipelines: Multi-source ingestion via Power Query, Star Schema Relational Data Modeling, Custom DAX Analytical Engine, and Interactive Visual Presentation Layer.',
      layers: [
        {
          name: 'Data Source & ETL Layer',
          components: ['Raw CSV / Database Tables', 'Power Query Transformations', 'Type Coercion & Missing Value Imputation'],
          purpose: 'Cleanses raw records of 1K+ visits, normalizes currency formatting, and standardizes city classifications.',
        },
        {
          name: 'Data Modeling Layer',
          components: ['Fact Table: Visits & Spend', 'Dim Tables: City, Hotel, Weather, Calendar', '1-to-Many Relationships'],
          purpose: 'Organizes data into an optimized star schema ensuring performant cross-filtering and accurate aggregation.',
        },
        {
          name: 'DAX Analytical Layer',
          components: ['Total Spend Measure', 'Average Spend Measure', 'Rating Indexes', 'Time Intelligence Slicers'],
          purpose: 'Calculates dynamic KPIs that adjust instantaneously based on active slicer selections.',
        },
        {
          name: 'Presentation & Cloud Layer',
          components: ['KPI Cards', 'Geographic Maps', 'Stacked Bar Charts', 'Power BI Service Public Embed'],
          purpose: 'Delivers executive-ready interactive visual storytelling for tourism and hospitality stakeholders.',
        },
      ],
    },
    workflowDataFlow: [
      {
        step: 1,
        title: 'Data Extraction & Power Query ETL',
        action: 'Ingested raw tourism booking, hotel review, and environmental observation records; removed duplicates and normalized nulls.',
        dataHandled: 'Tabular datasets comprising 1,000+ visit records and financial transactions totaling ~₹2B.',
      },
      {
        step: 2,
        title: 'Star Schema Relationship Modeling',
        action: 'Established relational model connecting Fact_TourismVisits with foreign keys to Dim_City, Dim_Hotel, and Dim_Date.',
        dataHandled: 'Normalized relational star schema with single-direction filtering for optimal performance.',
      },
      {
        step: 3,
        title: 'DAX Measure Engineering',
        action: 'Authored 6+ robust DAX measures calculating spend aggregations, visit counts, and weighted satisfaction averages.',
        dataHandled: 'DAX expressions utilizing CALCULATE, SUM, AVERAGE, DIVIDE, and FILTER functions.',
      },
      {
        step: 4,
        title: 'Visual Dashboard Design',
        action: 'Constructed cohesive dashboard layout utilizing high-contrast cards, decomposition charts, and interactive slicers.',
        dataHandled: 'Rendered visual elements: spend by city, spend vs weather correlations, hotel rating distributions.',
      },
      {
        step: 5,
        title: 'Cloud Publishing & Embed Verification',
        action: 'Published .pbix workbook to Power BI Service and generated authenticated public web view link.',
        dataHandled: 'Live cloud interactive dashboard URL accessible across desktop and mobile devices.',
      },
    ],
    methodology: [
      {
        phase: 'Data Cleansing & Transformation',
        details:
          'Standardized currency amounts into Indian Rupees (INR), unified date formats, and matched city names across tourism and meteorological datasets.',
      },
      {
        phase: 'Relational Star Schema Construction',
        details:
          'Eliminated redundant flat-file structures by separating attributes into explicit dimension tables, preventing Cartesian product errors in multi-table queries.',
      },
      {
        phase: 'DAX Calculation Validation',
        details:
          'Validated calculated measures against raw spreadsheet sums, ensuring safe division handling (DIVIDE function with 0 fallback) to prevent runtime divide-by-zero errors.',
      },
      {
        phase: 'Executive Layout & Human-Centered UX',
        details:
          'Applied corporate BI visual design principles: top-line KPI summary cards, clear visual hierarchy, consistent palette, and intuitive top/side slicers.',
      },
    ],
    modules: [
      {
        name: 'Executive KPI Cards',
        fileOrModule: 'Dashboard View: Top Banner',
        responsibility: 'Provides instant high-level summary of total tourist visits (1K+), total spend (~₹2B), and average spend.',
        keyLogic: 'DAX Measures: [Total Spend] = SUM(Fact[Spend]), [Total Visits] = COUNTROWS(Fact), [Avg Spend] = DIVIDE([Total Spend], [Total Visits]).',
      },
      {
        name: 'Geographic City Analysis',
        fileOrModule: 'Dashboard View: Regional Breakdown',
        responsibility: 'Compares revenue, tourist demographics, and stay duration across Delhi, Mumbai, Bengaluru, Jaipur, and Goa.',
        keyLogic: 'Interactive bar and matrix visuals slicing metrics by Dim_City[CityName].',
      },
      {
        name: 'Weather & Seasonality Slicer',
        fileOrModule: 'Dashboard View: Environmental Correlations',
        responsibility: 'Examines footfall and spending trends against seasonal temperature and environmental conditions.',
        keyLogic: 'Dual-axis charts plotting tourist visit counts against average monthly temperature and AQI ratings.',
      },
      {
        name: 'Hospitality & Hotel Performance',
        fileOrModule: 'Dashboard View: Hospitality Matrix',
        responsibility: 'Evaluates relationship between room tariff categories, guest ratings, and overall visitor spend.',
        keyLogic: 'Scatter plot and rating breakdown correlating average hotel score with total tourist expenditure.',
      },
    ],
    testingAndEvaluation: {
      methodology:
        'Audited data integrity across all transformation steps, verified DAX measure sums against raw data subtotals, and stress-tested cross-filtering response times.',
      metrics: [
        { name: 'Data Reconciliation', score: '100% Match', note: 'Aggregated DAX spend matches raw ledger total (~₹2B)' },
        { name: 'Cross-Filtering Speed', score: '<0.5s', note: 'Instant visual recalculation upon slicer selection' },
        { name: 'City Coverage', score: '5 Major Hubs', note: 'Delhi, Mumbai, Bengaluru, Jaipur, Goa fully modeled' },
        { name: 'KPI Measures', score: '6+ Measures', note: 'Accurately measures spend, footfall, ratings, and seasonality' },
      ],
      observations:
        'The dashboard revealed clear seasonal patterns: northern cultural hubs (Jaipur, Delhi) peak in winter months when temperatures are pleasant, whereas coastal and IT hubs maintain steadier corporate and leisure footfall.',
    },
    resultsAndOutcomes: [
      'Delivered comprehensive business intelligence dashboard successfully published to Microsoft Power BI Service.',
      'Extracted actionable insights from 1K+ visits and ~₹2B in spend across 5 major Indian cities.',
      'Demonstrated end-to-end analytics proficiency spanning Power Query ETL, Star Schema data modeling, and DAX authoring.',
      'Provided fully interactive public dashboard link accessible to recruiters, educators, and industry professionals.',
    ],
    challengesAndTradeoffs: [
      {
        challenge: 'Merging disparate tourism records with environmental and weather datasets',
        tradeoff: 'Weather was recorded daily while tourism transactions had varying timestamps.',
        solution: 'Engineered an intermediate calendar dimension in Power Query to aggregate environmental factors to corresponding visit dates cleanly.',
      },
      {
        challenge: 'Slow visual recalculation in initial flat-file structure',
        tradeoff: 'Flat tables with millions of cell repetitions caused perceptible lag during interactive slicing.',
        solution: 'Refactored model into a clean star schema with integer surrogate keys, drastically reducing memory footprint and latency.',
      },
      {
        challenge: 'Avoiding divide-by-zero errors in ratio measures',
        tradeoff: 'Filtering by niche categories occasionally yielded zero visits, throwing visual errors.',
        solution: 'Implemented DAX DIVIDE(numerator, denominator, 0) across all percentage and average metrics.',
      },
    ],
    limitations: [
      'Dataset captures 1K+ sample visits across 5 major urban tourist centers; does not cover tier-3 rural or eco-tourism circuits.',
      'Weather metrics represent city-level meteorological averages rather than micro-climate conditions at specific tourist monuments.',
      'Data represents historical baseline period; real-time live API streaming is not currently linked.',
    ],
    futureScope: [
      'Connect real-time flight pricing and hotel booking APIs using Azure Data Factory or Power BI Dataflows.',
      'Build predictive time-series forecasting models in Python / Power BI to forecast tourist influx for upcoming quarters.',
      'Implement sentiment analysis on tourist text reviews using Azure Cognitive Services.',
    ],
    references: [
      {
        title: 'Power BI Live Interactive Dashboard',
        link:
          'https://app.powerbi.com/view?r=eyJrIjoiOGY5OGI5ZmYtODA1ZC00NmIwLThlYjAtY2VkMjUxOTMyMzhjIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D',
        note: 'Live interactive cloud report hosted on Microsoft Power BI Service.',
      },
      {
        title: 'Microsoft Power BI & DAX Documentation',
        link: 'https://learn.microsoft.com/en-us/dax/',
        note: 'Authoritative documentation for DAX patterns and star schema design.',
      },
    ],
  },
};
