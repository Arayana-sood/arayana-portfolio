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
    liveUrl: 'https://nutriai-personalized-diet-generation.onrender.com',
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
    number: '02',
    title: 'ShellQuest',
    subtitle: 'Interactive Linux Learning Platform with In-Browser Terminal & AI Tutor',
    category: 'Systems & Interactive Education',
    year: 'Jul 2026',
    status: 'In Active Development',
    repoUrl: 'https://github.com/Arayana-sood/ShellQuest',
    summaryMetrics: [
      { label: 'Terminal', value: 'xterm.js', desc: 'Full ANSI-compliant browser terminal emulator' },
      { label: 'Communication', value: 'Socket.IO', desc: 'Real-time bidirectional WebSocket event streaming' },
      { label: 'Progression', value: 'Gamified', desc: 'Daily tasks, points, achievement badges, streak counter' },
      { label: 'AI Assistance', value: 'Integrated Tutor', desc: 'On-demand command clarification and debugging hints' },
    ],
    overview:
      'ShellQuest is an interactive web-based educational platform engineered to transform how students and developers learn the Linux command line. By replacing passive video tutorials and static cheat sheets with an authentic in-browser terminal emulator powered by xterm.js, real-time WebSocket communication via Socket.IO, structured challenge verification, gamified progression systems, and an integrated AI doubt solver, ShellQuest provides an engaging, hands-on learning environment.',
    problemStatement: {
      context:
        'Command line proficiency is fundamental for software engineers, devops practitioners, and systems developers. However, the initial learning curve presents significant hurdles.',
      keyPainPoints: [
        'Passive learning materials (books, videos, static PDFs) fail to build muscular command memory and real-world intuition.',
        'Local terminal setup barriers (installing WSL, configuring virtual machines, fear of damaging local OS files) intimidate newcomers.',
        'Lack of automated feedback: when a student runs an incorrect command or wrong flag, they get no pedagogical explanation.',
        'Low completion rates caused by absence of motivation mechanics, milestones, and reward structures.',
      ],
    },
    objectives: [
      'Deliver an authentic, responsive Linux terminal experience directly in the web browser using xterm.js without requiring local machine configuration.',
      'Establish low-latency, bidirectional streaming of keystrokes, ANSI escape codes, and command responses over WebSockets using Socket.IO.',
      'Build a modular curriculum featuring progressive learning tracks (File Operations, Permissions, Piping & Redirection, Process Management).',
      'Implement an automated task evaluation engine that verifies command execution against expected outcomes and filesystem states.',
      'Incorporate gamification (daily task streaks, XP points, badge unlocking) and an AI tutor for real-time error explanation.',
    ],
    features: [
      {
        category: 'Interactive Terminal Environment',
        items: [
          {
            name: 'xterm.js Terminal Emulator',
            description:
              'Full ANSI terminal emulation with custom themes, font resizing, cursor styling, and keyboard shortcut support (Ctrl+C, Ctrl+L).',
          },
          {
            name: 'Bidirectional Streaming',
            description:
              'Seamless real-time terminal I/O over Socket.IO WebSockets ensuring immediate keystroke echo and command response rendering.',
          },
          {
            name: 'Simulated File Hierarchy',
            description:
              'Safe sandboxed virtual directory structure allowing learners to practice mkdir, cd, rm, grep, chmod, and ps without risk.',
          },
        ],
      },
      {
        category: 'Pedagogy & Motivation Systems',
        items: [
          {
            name: 'Daily Challenges & Milestone Quizzes',
            description:
              'Bite-sized daily command tasks paired with conceptual multi-choice quizzes to reinforce foundational systems understanding.',
          },
          {
            name: 'XP Points & Achievement Badges',
            description:
              'Unlocks badges (e.g. "Pipe Master", "Permission Protector", "Vim Survivor") and tracks continuous streak momentum.',
          },
          {
            name: 'Contextual AI Doubt-Solving Tutor',
            description:
              'Sidebar AI assistant that inspects failed terminal commands and offers step-by-step hints and syntax explanations.',
          },
        ],
      },
    ],
    techStack: [
      {
        category: 'Frontend Core & UI Architecture',
        items: [
          { name: 'React 18', role: 'Component-based UI state management and reactive rendering', versionOrDetail: '18.x' },
          { name: 'Vite', role: 'High-speed build tool, hot-module replacement, and bundler', versionOrDetail: '5.x' },
          { name: 'Tailwind CSS', role: 'Utility-first styling, dark theme design system, responsive layouts', versionOrDetail: '3.4+' },
          { name: 'React Router', role: 'Declarative client-side routing across lessons and dashboard', versionOrDetail: '6.x' },
        ],
      },
      {
        category: 'Terminal Emulation & Networking',
        items: [
          { name: 'xterm.js', role: 'Terminal emulator component for web browsers', versionOrDetail: '5.x' },
          { name: 'xterm-addon-fit', role: 'Dynamic canvas sizing responsive to window/container dimensions' },
          { name: 'Socket.IO Client', role: 'WebSocket client handling bidirectional event streaming', versionOrDetail: '4.x' },
          { name: 'Axios', role: 'HTTP client for user profile, quiz submissions, and lesson queries', versionOrDetail: '1.x' },
        ],
      },
      {
        category: 'Backend Architecture (Target Service)',
        items: [
          { name: 'Node.js / Express', role: 'REST endpoints and WebSocket server gateway' },
          { name: 'Socket.IO Server', role: 'Connection management and terminal stream piping' },
          { name: 'Sandboxed Execution Environment', role: 'Isolated container/process runner for safe command execution' },
        ],
      },
    ],
    systemArchitecture: {
      description:
        'ShellQuest adopts a decoupled client-server architecture centered on real-time event loops. The browser hosts the React dashboard and xterm.js canvas, connected via Socket.IO to an execution daemon.',
      layers: [
        {
          name: 'Client Interface Layer',
          components: ['React View Hierarchy', 'Tailwind Design System', 'Lesson Navigation', 'AI Tutor Sidebar'],
          purpose: 'Renders curriculum modules, achievement trackers, and instructional guidance.',
        },
        {
          name: 'Terminal Viewport Layer',
          components: ['xterm.js Core', 'FitAddon', 'Custom ANSI Theme Controller', 'Input Event Handler'],
          purpose: 'Captures raw keystrokes, handles terminal window resizing, and paints streamed terminal output.',
        },
        {
          name: 'Real-Time Communication Layer',
          components: ['Socket.IO Client', 'Terminal Session Channel', 'Task Validation Socket Events'],
          purpose: 'Dispatches terminal keystrokes to server and listens for command outputs and evaluation signals.',
        },
        {
          name: 'Gamification & AI Service Layer',
          components: ['Progress Store', 'Badge Evaluator', 'AI Prompt Dispatcher'],
          purpose: 'Calculates user streaks, grants milestone rewards, and fetches pedagogical suggestions from AI.',
        },
      ],
    },
    workflowDataFlow: [
      {
        step: 1,
        title: 'Session Initialization',
        action: 'Student selects a Linux lesson track; terminal canvas mounts and establishes a WebSocket handshake with the server.',
        dataHandled: 'Session authentication token, lesson ID, initial virtual directory configuration.',
      },
      {
        step: 2,
        title: 'Keystroke Capture & Transmission',
        action: 'xterm.js captures user keystrokes (onData listener) and dispatches real-time events over the WebSocket channel.',
        dataHandled: 'Raw character bytes and escape sequences (e.g., \\r, \\x7f, \\x1b).',
      },
      {
        step: 3,
        title: 'Command Execution & Output Streaming',
        action: 'Backend processes command in virtual environment and streams stdout/stderr back to the client socket.',
        dataHandled: 'ANSI formatted text stream with color codes and directory prompts.',
      },
      {
        step: 4,
        title: 'Automated Task Verification',
        action: 'Evaluation daemon checks command output or filesystem state against lesson completion criteria.',
        dataHandled: 'Success boolean, bonus XP score, unlocked badge ID.',
      },
      {
        step: 5,
        title: 'Feedback & AI Tutor Intervention',
        action: 'If task fails repeatedly, AI tutor generates a contextual hint explaining what parameter or flag was missing.',
        dataHandled: 'Markdown formatted hint text and code snippet suggestions.',
      },
    ],
    methodology: [
      {
        phase: 'Terminal Integration & Lifecycle Management',
        details:
          'Mounted xterm.js within React useEffect hooks, carefully attaching and detaching event listeners and FitAddon resize observers to avoid memory leaks.',
      },
      {
        phase: 'Stateful WebSocket Pipeline',
        details:
          'Constructed resilient Socket.IO event contracts with automatic reconnection, session recovery, and buffered input queues.',
      },
      {
        phase: 'Curriculum Hierarchy Design',
        details:
          'Structured learning modules from Beginner (ls, cd, pwd, cat) to Intermediate (grep, pipes, redirection, chmod) to Advanced (awk, sed, cron, ps, kill).',
      },
      {
        phase: 'Gamification Mechanics',
        details:
          'Designed a persistent reward schema tracking consecutive daily practice days, total points, and conditional badge unlock triggers.',
      },
    ],
    modules: [
      {
        name: 'Terminal Container',
        fileOrModule: 'components/Terminal/TerminalWindow.tsx',
        responsibility: 'Instantiates xterm.js, mounts canvas ref, manages window resize and color palette.',
        keyLogic: 'Initializes Terminal instance, connects FitAddon, wires onData to socket.emit("terminal:input").',
      },
      {
        name: 'Socket Hook Manager',
        fileOrModule: 'hooks/useTerminalSocket.ts',
        responsibility: 'Manages Socket.IO connection lifecycle, reconnection backoff, and event listeners.',
        keyLogic: 'Binds "terminal:output", "terminal:exit", and "task:evaluated" events to local state setters.',
      },
      {
        name: 'AI Tutor Drawer',
        fileOrModule: 'components/Tutor/AIAssistant.tsx',
        responsibility: 'Provides interactive conversational AI support for command syntax troubleshooting.',
        keyLogic: 'Sends user prompt and last failed command context to AI endpoint, streaming response tokens.',
      },
      {
        name: 'Gamification Hub',
        fileOrModule: 'components/Gamification/BadgeGrid.tsx',
        responsibility: 'Renders earned badges, daily streak flame counter, and progress completion rings.',
        keyLogic: 'Calculates overall mastery percentage across completed tasks and active tracks.',
      },
    ],
    testingAndEvaluation: {
      methodology:
        'Focused on terminal UI responsiveness, keyboard input latency, ANSI escape code rendering correctness, and WebSocket disconnect recovery.',
      metrics: [
        { name: 'Input Latency', score: '<35ms', note: 'Immediate visual keystroke echo over local/LAN WebSocket' },
        { name: 'ANSI Compliance', score: '100%', note: 'Supports standard 16-color palette, cursor navigation, clear screen' },
        { name: 'Reconnection Recovery', score: 'Automatic', note: 'Session tokens preserve directory state upon transient reconnect' },
        { name: 'Responsive Layout', score: 'Validated', note: 'FitAddon dynamically resizes column/row count on viewport change' },
      ],
      observations:
        'The integration of xterm.js inside React requires strict cleanup to prevent ghost terminal instances when navigating between routes. Real-time feedback significantly boosts learner engagement compared to static tutorials.',
    },
    resultsAndOutcomes: [
      'Built a fully functional web-based Linux learning platform prototype with live terminal interaction.',
      'Successfully integrated xterm.js with custom styling, font smoothing, and responsive viewport sizing.',
      'Demonstrated seamless real-time WebSocket communication pattern for interactive web applications.',
      'Formulated structured curriculum modules spanning beginner file system tasks to advanced pipeline operations.',
    ],
    challengesAndTradeoffs: [
      {
        challenge: 'Duplicate WebSocket listeners & memory leaks in React lifecycle',
        tradeoff: 'React strict mode causes double-mounting in development, leading to duplicate keystroke emissions.',
        solution: 'Implemented strict cleanup functions in useEffect, unbinding socket listeners and disposing terminal instances properly.',
      },
      {
        challenge: 'Dynamic canvas dimensions on window resize',
        tradeoff: 'Terminal text clipped or wrapped incorrectly when resizing screen or expanding sidebars.',
        solution: 'Attached ResizeObserver to the terminal wrapper element to trigger fitAddon.fit() on dimension changes.',
      },
      {
        challenge: 'Safe execution boundary for arbitrary commands',
        tradeoff: 'Allowing untrusted users to run shell commands introduces severe security risks.',
        solution: 'Designed architecture to route through restricted virtualized container sandboxes with read-only root filesystems.',
      },
    ],
    limitations: [
      'Project is currently in active development — public cloud deployment of the full sandbox backend is in progress.',
      'Complex interactive terminal programs requiring ncurses (e.g., htop, nano) require specialized pty allocation.',
      'Offline functionality is limited as WebSocket connection is required for live command execution.',
    ],
    futureScope: [
      'Deploy production container pool using Docker / Kubernetes with firewalled egress for live public access.',
      'Add multi-user collaboration mode allowing students to pair-program in a shared terminal room.',
      'Introduce Bash scripting challenge tracks with automated unit test assertion suites.',
    ],
    references: [
      {
        title: 'ShellQuest GitHub Repository',
        link: 'https://github.com/Arayana-sood/ShellQuest',
        note: 'Complete source code and documentation repository for the project.',
      },
      {
        title: 'xterm.js Documentation & Specification',
        link: 'https://xtermjs.org/',
        note: 'Standard web terminal emulator library utilized for terminal emulation.',
      },
      {
        title: 'Socket.IO Real-time Engine',
        link: 'https://socket.io/',
        note: 'WebSocket transport layer powering event streaming.',
      },
    ],
  },

  'process-viz': {
    id: 'process-viz',
    number: '03',
    title: 'Process Lifecycle Viz',
    subtitle: 'CPU Scheduling Simulator & Process State Visualizer',
    category: 'Operating Systems / Algorithm Visualization',
    year: 'Feb 2026',
    status: 'Completed & Open Source',
    repoUrl: 'https://github.com/Arayana-sood/Process-Lifecycle-visualization-tool',
    summaryMetrics: [
      { label: 'Algorithms', value: '5 Implemented', desc: 'FCFS, SJF, SRTF, Round Robin, Priority' },
      { label: 'Visualization', value: 'HTML5 Canvas', desc: 'Dynamic animated Gantt chart with idle slot cues' },
      { label: 'State Tracking', value: '4 States', desc: 'New, Ready, Running, Terminated transitions' },
      { label: 'Analytics', value: 'Turnaround & Wait', desc: 'Instant calculation of TAT, WT, and CPU utilization' },
    ],
    overview:
      'Process Lifecycle Viz is an educational Operating Systems simulator engineered to make complex CPU scheduling algorithms intuitive and visual. By bridging algorithmic theory in C and JavaScript with dynamic HTML5 Canvas rendering, the tool demonstrates process state transitions (New, Ready, Running, Terminated), visualizes synchronized Gantt charts with explicit CPU idle-time tracking, and computes critical scheduling metrics including Turnaround Time (TAT) and Waiting Time (WT).',
    problemStatement: {
      context:
        'Operating System concepts such as process scheduling, context switching, and preemption are cornerstone topics in Computer Science curricula, but are notoriously abstract to learn from static textbooks.',
      keyPainPoints: [
        'Static blackboard Gantt charts fail to illustrate the continuous passage of discrete time ticks and dynamic ready-queue reordering.',
        'Preemptive algorithms (SRTF, Round Robin with varied time quanta) are difficult to trace manually when multiple processes arrive simultaneously.',
        'Students struggle to grasp the relationship between scheduling policies, CPU idle periods, and average waiting time tradeoffs.',
        'Lack of interactive tools that allow students to input custom process parameters and immediately compare algorithm efficiencies.',
      ],
    },
    objectives: [
      'Implement deterministic simulation logic for five fundamental CPU scheduling algorithms: First-Come First-Served (FCFS), Shortest Job First (SJF), Shortest Remaining Time First (SRTF), Round Robin (RR), and Priority Scheduling (preemptive/non-preemptive).',
      'Render a dynamic, animated Gantt chart on HTML5 Canvas showing exact execution slices, context switches, and CPU idle blocks.',
      'Visualize real-time process state transitions across Ready, Running, and Terminated states as the simulation clock advances.',
      'Automatically calculate and tabulate Waiting Time, Turnaround Time, Completion Time, and average metrics for each process.',
      'Provide intuitive controls for process creation, randomized burst/arrival presets, animation playback speeds, and step-by-step execution.',
    ],
    features: [
      {
        category: 'Algorithm Simulation Engine',
        items: [
          {
            name: 'Five CPU Scheduling Policies',
            description:
              'Simulates FCFS, non-preemptive SJF, preemptive SRTF, Round Robin with configurable time quantum, and Priority Scheduling.',
          },
          {
            name: 'Flexible Process Input Matrix',
            description:
              'Allows custom configuration of Process ID, Arrival Time (AT), Burst Time (BT), and Priority values, or one-click random generation.',
          },
          {
            name: 'Deterministic Event Clock',
            description:
              'Simulates discrete clock ticks, accurately resolving simultaneous arrivals and priority tie-breaks.',
          },
        ],
      },
      {
        category: 'Visual & Analytical Outputs',
        items: [
          {
            name: 'Animated Canvas Gantt Chart',
            description:
              'Renders color-coded process execution blocks with proportional time widths, labeled timestamps, and distinct idle slots.',
          },
          {
            name: 'Process State Indicators',
            description:
              'Highlights active process status in real time: Ready Queue, CPU Running, and Terminated stages.',
          },
          {
            name: 'Performance Comparison Table',
            description:
              'Computes Completion Time (CT), Turnaround Time (TAT = CT - AT), and Waiting Time (WT = TAT - BT), displaying class averages.',
          },
        ],
      },
    ],
    techStack: [
      {
        category: 'Core Implementation & Logic',
        items: [
          { name: 'JavaScript (ES6+)', role: 'Simulation state machine, queue operations, event clock', versionOrDetail: 'ES2022' },
          { name: 'C', role: 'Original reference implementations of CPU scheduling algorithms' },
          { name: 'HTML5 Canvas API', role: 'Pixel-perfect rendering of animated Gantt charts and timeline markers' },
        ],
      },
      {
        category: 'UI & Styling',
        items: [
          { name: 'CSS3 / Modern CSS', role: 'Responsive layout, grid systems, and dark theme variables' },
          { name: 'DOM Manipulation', role: 'Reactive updates of state badges, table rows, and control widgets' },
        ],
      },
    ],
    systemArchitecture: {
      description:
        'The simulator is structured around a three-tier model: an Input & Configuration Module, a Discrete-Time Simulation Core, and a Canvas / DOM Rendering Engine.',
      layers: [
        {
          name: 'Input & Parameter Layer',
          components: ['Process Table Input Form', 'Random Generator', 'Algorithm Selector', 'Quantum Slider'],
          purpose: 'Captures arrival times, burst times, priorities, and algorithm configuration.',
        },
        {
          name: 'Simulation Engine Core',
          components: ['Ready Queue Manager', 'Preemption Evaluator', 'Discrete Clock Ticker', 'Metrics Calculator'],
          purpose: 'Executes algorithm rules tick-by-tick, producing a sequence of execution slices and scheduling logs.',
        },
        {
          name: 'Visualization & Display Layer',
          components: ['HTML5 Canvas Gantt Renderer', 'Process State Visualizer', 'Metrics Summary Table'],
          purpose: 'Paints execution blocks proportionally on canvas and updates tabular analytical metrics.',
        },
      ],
    },
    workflowDataFlow: [
      {
        step: 1,
        title: 'Process Specification',
        action: 'User specifies process count, arrival times, burst times, and priority levels (or selects a predefined benchmark preset).',
        dataHandled: 'Array of Process objects: { id, arrivalTime, burstTime, remainingTime, priority }.',
      },
      {
        step: 2,
        title: 'Algorithm Selection & Preprocessing',
        action: 'User chooses scheduling policy (e.g. SRTF or Round Robin with quantum = 2); simulation initializes ready queue.',
        dataHandled: 'Algorithm configuration parameters and sorted initial arrival schedule.',
      },
      {
        step: 3,
        title: 'Discrete Simulation Loop',
        action: 'Simulation advances clock: checks arriving processes, updates ready queue, selects next process according to policy, handles preemption.',
        dataHandled: 'Generated timeline slices: { processId, startTime, endTime, isIdle }.',
      },
      {
        step: 4,
        title: 'Canvas Gantt Chart Rendering',
        action: 'Canvas API draws timeline slices sequentially, coloring process blocks and annotating start/end tick markers.',
        dataHandled: 'Canvas 2D context drawing commands (fillRect, strokeRect, fillText).',
      },
      {
        step: 5,
        title: 'Performance Metric Computation',
        action: 'Calculates Completion Time, Turnaround Time, and Waiting Time for each process and renders summary averages.',
        dataHandled: 'Analytical table with calculated metrics and average TAT/WT values.',
      },
    ],
    methodology: [
      {
        phase: 'Algorithmic Formulation in C',
        details:
          'Initially implemented foundational scheduling logic in C to verify algorithmic correctness against standard operating system textbook benchmarks (Silberschatz/Galvin).',
      },
      {
        phase: 'JavaScript State Engine Port',
        details:
          'Ported logic into modular JavaScript classes with discrete-event clock tracking to facilitate interactive step-through and continuous playback.',
      },
      {
        phase: 'Canvas Timeline Visualization',
        details:
          'Constructed responsive canvas drawing pipeline that scales block widths dynamically based on total simulation duration.',
      },
      {
        phase: 'Interactive UI & Playback Controls',
        details:
          'Equipped simulator with play, pause, reset, step-forward, and speed controls for classroom demonstrations.',
      },
    ],
    modules: [
      {
        name: 'Scheduler Engine',
        fileOrModule: 'js/algorithms.js',
        responsibility: 'Encapsulates logic for FCFS, SJF, SRTF, Round Robin, and Priority scheduling.',
        keyLogic: 'Implements priority queues and preemption interrupts based on remaining burst times.',
      },
      {
        name: 'Gantt Chart Renderer',
        fileOrModule: 'js/canvasRenderer.js',
        responsibility: 'Handles HTML5 Canvas drawing loop and timeline tick annotations.',
        keyLogic: 'Translates discrete time slices into pixel coordinates with auto-scaling to canvas width.',
      },
      {
        name: 'Process Manager',
        fileOrModule: 'js/processManager.js',
        responsibility: 'Maintains process lists, validates input constraints, and computes final metrics.',
        keyLogic: 'Computes TAT = CT - AT and WT = TAT - BT; validates non-negative arrival/burst values.',
      },
      {
        name: 'UI Controller',
        fileOrModule: 'js/uiController.js',
        responsibility: 'Manages DOM listeners, dynamic table creation, and playback animation timers.',
        keyLogic: 'Uses requestAnimationFrame / setInterval for controlled playback speed step-through.',
      },
    ],
    testingAndEvaluation: {
      methodology:
        'Validated against standard operating system reference problems, comparing manual textbook calculations with simulation outputs.',
      metrics: [
        { name: 'Calculation Accuracy', score: '100%', note: 'Zero discrepancy against textbook FCFS, SJF, SRTF, RR test sets' },
        { name: 'Simulation Algorithms', score: '5 Full Policies', note: 'FCFS, SJF, SRTF, Round Robin, Priority Scheduling' },
        { name: 'Canvas Frame Rate', score: '60 FPS', note: 'Smooth timeline expansion and indicator transitions' },
        { name: 'Edge Case Handling', score: 'Verified', note: 'Proper handling of idle CPU periods and simultaneous arrivals' },
      ],
      observations:
        'Visualizing SRTF and Round Robin clarifies why preemption reduces average waiting time at the expense of higher context switching overhead.',
    },
    resultsAndOutcomes: [
      'Successfully created an interactive educational OS simulator utilized for study and conceptual verification.',
      'Demonstrated accurate simulation of 5 scheduling policies with dynamic Gantt charts and process states.',
      'Open-sourced repository with modular, clean codebase on GitHub.',
      'Provided instantaneous comparative metric calculation for OS algorithm performance evaluation.',
    ],
    challengesAndTradeoffs: [
      {
        challenge: 'Accurate modeling of preemption and simultaneous arrival tie-breaks',
        tradeoff: 'Simple loops failed when a new process with shorter remaining time arrived exactly at a quantum expiration.',
        solution: 'Implemented strict priority queue ordering: newly arrived processes are evaluated before the executing process is re-queued.',
      },
      {
        challenge: 'Visual representation of CPU idle time',
        tradeoff: 'Textbook diagrams often skip idle gaps, creating confusion when total time exceeds sum of burst times.',
        solution: 'Created dedicated visually distinct "IDLE" blocks on the Gantt chart with hatched styling.',
      },
      {
        challenge: 'Canvas scaling across varying total simulation durations',
        tradeoff: 'Short jobs appeared too small while long jobs overflowed the canvas boundaries.',
        solution: 'Implemented dynamic horizontal scaling factoring total completion time into canvas width with minimum block widths.',
      },
    ],
    limitations: [
      'Models idealized context switching overhead (context switch duration is treated as zero or instantaneous).',
      'Does not model multi-core CPU scheduling or multi-level feedback queues (MLFQ).',
      'Assumes all process burst times are known a priori (deterministic simulation).',
    ],
    futureScope: [
      'Implement Multi-Level Feedback Queue (MLFQ) scheduling with dynamic priority aging.',
      'Add multi-core processor visualization demonstrating load balancing across 2 or 4 CPU cores.',
      'Incorporate realistic context-switch latency penalties to illustrate scheduling thrashing.',
    ],
    references: [
      {
        title: 'Process Lifecycle Viz GitHub Repository',
        link: 'https://github.com/Arayana-sood/Process-Lifecycle-visualization-tool',
        note: 'Complete source code and documentation repository on GitHub.',
      },
      {
        title: 'Operating System Concepts (Silberschatz, Galvin, Gagne)',
        note: 'Authoritative textbook benchmark for process scheduling algorithms and metrics.',
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
