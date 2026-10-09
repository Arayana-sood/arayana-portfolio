import { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  FileText,
  CheckCircle2,
  AlertCircle,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { projectDocs } from '@/data/projectDocs';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────────────────────────────────
   PROJECT DOCUMENTATION PAGE
   A complete, publication-grade technical breakdown for each project.
   Fulfills all 15 required sections with high-contrast editorial hierarchy.
   ─────────────────────────────────────────────────────────────────────────*/

const TOC_SECTIONS = [
  { id: 'overview', label: '1. Overview' },
  { id: 'problem', label: '2. Problem Statement' },
  { id: 'objectives', label: '3. Objectives' },
  { id: 'features', label: '4. Features' },
  { id: 'tech-stack', label: '5. Technology Stack' },
  { id: 'architecture', label: '6. Architecture' },
  { id: 'workflow', label: '7. Workflow & Data Flow' },
  { id: 'methodology', label: '8. Methodology' },
  { id: 'modules', label: '9. Key Modules' },
  { id: 'testing', label: '10. Testing & Evaluation' },
  { id: 'results', label: '11. Results & Outcomes' },
  { id: 'challenges', label: '12. Challenges & Trade-offs' },
  { id: 'limitations', label: '13. Limitations' },
  { id: 'future-scope', label: '14. Future Scope' },
  { id: 'resources', label: '15. Resources & References' },
];

export default function ProjectDocPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const shouldReduce = useReducedMotion();
  const [activeToc, setActiveToc] = useState<string>('overview');

  const doc = useMemo(() => {
    if (!projectId) return null;
    return projectDocs[projectId.toLowerCase()] || null;
  }, [projectId]);

  // Order of all projects for next/prev pagination
  const projectOrder = ['nutriai', 'shellquest', 'process-viz', 'tourism-analytics'];
  const currentIndex = projectOrder.indexOf(projectId?.toLowerCase() || '');
  const prevProject = currentIndex > 0 ? projectDocs[projectOrder[currentIndex - 1]] : null;
  const nextProject = currentIndex < projectOrder.length - 1 ? projectDocs[projectOrder[currentIndex + 1]] : null;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // Track active section for table of contents
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      for (const section of TOC_SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveToc(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!doc) {
    return (
      <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-editorial text-primary mb-3">Project Documentation Not Found</h1>
        <p className="text-secondary text-sm max-w-md mb-6">
          The requested project documentation could not be located. Return to the main portfolio to browse all projects.
        </p>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-[--accent] text-[--accent-fg]"
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </Link>
      </div>
    );
  }

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: shouldReduce ? 'auto' : 'smooth' });
    }
  };

  return (
    <article className="min-h-screen pt-24 sm:pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[--bg]">
      <div className="max-w-6xl mx-auto">
        {/* ── Top Bar: Back link & meta breadcrumbs ─────────────────── */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[--border-subtle]">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono-text text-secondary hover:text-accent transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Portfolio Projects</span>
          </Link>
          <div className="flex items-center gap-2 text-xs font-mono-text text-muted">
            <span className="text-accent font-semibold">{doc.number}</span>
            <span>/</span>
            <span>{doc.category}</span>
            <span>/</span>
            <span>{doc.year}</span>
          </div>
        </div>

        {/* ── Editorial Header ─────────────────────────────────────── */}
        <header className="py-8 sm:py-12 flex flex-col gap-5 border-b border-[--border-subtle]">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono-text bg-[--accent-muted] text-accent font-semibold border border-[--accent]/30">
              Technical Documentation
            </span>
            <span className="text-xs font-mono-text text-muted">· {doc.status}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal font-editorial text-primary tracking-tight leading-[1.12]">
            {doc.title}
          </h1>

          <p className="text-base sm:text-xl text-secondary max-w-3xl leading-relaxed">
            {doc.subtitle}
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {doc.repoUrl && (
              <a
                href={doc.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono-text border border-[--border] text-primary hover:border-[--accent] hover:text-accent transition-colors bg-[--bg-surface]"
              >
                <Github size={14} />
                <span>GitHub Repository</span>
                <ExternalLink size={12} className="opacity-60" />
              </a>
            )}

            {doc.liveUrl && (
              <a
                href={doc.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono-text bg-[--accent] text-[--accent-fg] font-medium hover:bg-[--accent-hover] transition-colors shadow-warm-sm"
              >
                <ExternalLink size={14} />
                <span>
                  {doc.title.toLowerCase().includes('power bi') || doc.category.toLowerCase().includes('analytics')
                    ? 'View Live Dashboard'
                    : 'Launch Live Application'}
                </span>
              </a>
            )}

            {doc.paperUrl && (
              <a
                href={doc.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono-text border border-[--border] text-accent hover:border-[--accent] transition-colors bg-[--bg-surface]"
              >
                <FileText size={14} />
                <span>Read Research Paper (PDF)</span>
                <ExternalLink size={12} className="opacity-60" />
              </a>
            )}
          </div>

          {/* Summary Key Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6">
            {doc.summaryMetrics.map((metric, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-[--bg-surface] border border-[--border-subtle] flex flex-col gap-1 transition-colors hover:border-[--border]"
              >
                <span className="text-[11px] font-mono-text text-muted uppercase tracking-wider">
                  {metric.label}
                </span>
                <span className="text-xl sm:text-2xl font-bold font-mono-text text-accent">
                  {metric.value}
                </span>
                <span className="text-xs text-secondary leading-snug">
                  {metric.desc}
                </span>
              </div>
            ))}
          </div>
        </header>

        {/* ── Table of Contents Index Card ────────────────────────── */}
        <div className="my-8 p-5 sm:p-6 rounded-2xl bg-[--bg-surface] border border-[--border-subtle] flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[--border-subtle] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[--accent]" />
              <h2 className="text-xs font-mono-text uppercase tracking-widest text-accent font-semibold">
                Documentation Index · 15 Technical Sections
              </h2>
            </div>
            <span className="text-[11px] font-mono-text text-muted">
              Click any section to jump directly ↘
            </span>
          </div>

          <nav className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2" aria-label="Quick jump index">
            {TOC_SECTIONS.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => handleTocClick(e, sec.id)}
                className={cn(
                  'p-2 rounded-lg text-xs font-mono-text transition-all duration-150',
                  'bg-[--bg-elevated] border border-[--border-subtle] hover:border-[--accent] hover:text-accent',
                  'flex items-center gap-1.5 truncate text-secondary hover:bg-[--bg-surface]'
                )}
              >
                <span className="text-accent font-semibold text-[10px] shrink-0">
                  {sec.label.split('.')[0]}.
                </span>
                <span className="truncate">{sec.label.split('.')[1]}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* ── Sticky Section Navigation Bar ─────────────────────────── */}
        <div className="sticky top-20 z-30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-2.5 bg-[--bg]/95 backdrop-blur-md border-y border-[--border-subtle] mb-8 overflow-x-auto no-scrollbar flex items-center gap-2">
          <span className="text-[10px] font-mono-text text-muted uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
            Quick Jump:
          </span>
          {TOC_SECTIONS.map((sec) => {
            const isActive = activeToc === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => handleTocClick(e, sec.id)}
                className={cn(
                  'px-2.5 py-1 rounded-full text-[11px] font-mono-text shrink-0 transition-colors whitespace-nowrap',
                  isActive
                    ? 'bg-[--accent] text-[--accent-fg] font-medium shadow-warm-xs'
                    : 'bg-[--bg-surface] text-muted hover:text-primary hover:bg-[--bg-elevated] border border-[--border-subtle]'
                )}
              >
                {sec.label}
              </a>
            );
          })}
        </div>

        {/* ── Main Centered Content: 15 Sections with Consistent Rhythm ── */}
        <div className="flex flex-col gap-8 sm:gap-10">
            {/* 1. Project Overview */}
            <section id="overview" className="scroll-mt-28 flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-2 border-b border-[--border-subtle]">
                <span className="text-xs font-mono-text text-accent font-bold">01</span>
                <h2 className="text-xl sm:text-2xl font-editorial font-normal text-primary">
                  Project Overview
                </h2>
              </div>
              <p className="text-sm sm:text-base text-secondary leading-relaxed">
                {doc.overview}
              </p>
            </section>

            {/* 2. Problem Statement */}
            <section id="problem" className="scroll-mt-28 flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-2 border-b border-[--border-subtle]">
                <span className="text-xs font-mono-text text-accent font-bold">02</span>
                <h2 className="text-xl sm:text-2xl font-editorial font-normal text-primary">
                  Problem Statement
                </h2>
              </div>
              <p className="text-sm sm:text-base text-secondary leading-relaxed">
                {doc.problemStatement.context}
              </p>
              <div className="p-4 sm:p-5 rounded-xl bg-[--bg-surface] border border-[--border-subtle] flex flex-col gap-2.5">
                <span className="text-xs font-mono-text text-accent uppercase tracking-wider font-semibold">
                  Key Real-World Friction Points
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-secondary">
                  {doc.problemStatement.keyPainPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <AlertCircle size={15} className="text-accent shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 3. Objectives and Motivation */}
            <section id="objectives" className="scroll-mt-28 flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-2 border-b border-[--border-subtle]">
                <span className="text-xs font-mono-text text-accent font-bold">03</span>
                <h2 className="text-xl sm:text-2xl font-editorial font-normal text-primary">
                  Objectives and Motivation
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {doc.objectives.map((obj, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[--bg-surface] border border-[--border-subtle] flex items-start gap-3"
                  >
                    <span className="text-xs font-mono-text text-accent font-bold mt-0.5 shrink-0">
                      0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                      {obj}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Features and Functionality */}
            <section id="features" className="scroll-mt-28 flex flex-col gap-5">
              <div className="flex items-center gap-2 pb-2 border-b border-[--border-subtle]">
                <span className="text-xs font-mono-text text-accent font-bold">04</span>
                <h2 className="text-xl sm:text-2xl font-editorial font-normal text-primary">
                  Features and Functionality
                </h2>
              </div>
              <div className="flex flex-col gap-5">
                {doc.features.map((group, gIdx) => (
                  <div key={gIdx} className="flex flex-col gap-3">
                    <h3 className="text-sm font-mono-text uppercase tracking-wider text-accent font-semibold">
                      {group.category}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {group.items.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="p-4 rounded-xl bg-[--bg-surface] border border-[--border-subtle] flex flex-col gap-1.5"
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                            <h4 className="text-xs sm:text-sm font-semibold text-primary">
                              {feat.name}
                            </h4>
                          </div>
                          <p className="text-xs text-secondary leading-relaxed pl-6">
                            {feat.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Technology Stack */}
            <section id="tech-stack" className="scroll-mt-28 flex flex-col gap-5">
              <div className="flex items-center gap-2 pb-2 border-b border-[--border-subtle]">
                <span className="text-xs font-mono-text text-accent font-bold">05</span>
                <h2 className="text-xl sm:text-2xl font-editorial font-normal text-primary">
                  Technology Stack
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {doc.techStack.map((category, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl bg-[--bg-surface] border border-[--border-subtle] flex flex-col gap-3"
                  >
                    <h3 className="text-xs font-mono-text uppercase tracking-wider text-accent font-semibold border-b border-[--border-subtle] pb-2">
                      {category.category}
                    </h3>
                    <div className="flex flex-col gap-2.5">
                      {category.items.map((tech, tIdx) => (
                        <div key={tIdx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                          <div className="flex items-baseline gap-2">
                            <span className="font-semibold text-primary font-mono-text">
                              {tech.name}
                            </span>
                            {tech.versionOrDetail && (
                              <span className="text-[10px] text-muted font-mono-text">
                                ({tech.versionOrDetail})
                              </span>
                            )}
                          </div>
                          <span className="text-secondary text-[11px] sm:text-right">
                            {tech.role}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. System Architecture */}
            <section id="architecture" className="scroll-mt-28 flex flex-col gap-5">
              <div className="flex items-center gap-2 pb-2 border-b border-[--border-subtle]">
                <span className="text-xs font-mono-text text-accent font-bold">06</span>
                <h2 className="text-xl sm:text-2xl font-editorial font-normal text-primary">
                  System Architecture
                </h2>
              </div>
              <p className="text-sm sm:text-base text-secondary leading-relaxed">
                {doc.systemArchitecture.description}
              </p>
              {/* Architecture Layer Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {doc.systemArchitecture.layers.map((layer, lIdx) => (
                  <div
                    key={lIdx}
                    className="p-4 rounded-xl bg-[--bg-surface] border border-[--border-subtle] flex flex-col gap-2.5"
                  >
                    <div className="flex items-center gap-2">
                      <Layers size={15} className="text-accent shrink-0" />
                      <h3 className="text-xs sm:text-sm font-semibold text-primary font-mono-text">
                        {layer.name}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {layer.components.map((comp, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono-text bg-[--bg-elevated] text-primary border border-[--border-subtle]"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-secondary leading-relaxed mt-1">
                      {layer.purpose}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. Workflow and Data Flow */}
            <section id="workflow" className="scroll-mt-28 flex flex-col gap-5">
              <div className="flex items-center gap-2 pb-2 border-b border-[--border-subtle]">
                <span className="text-xs font-mono-text text-accent font-bold">07</span>
                <h2 className="text-xl sm:text-2xl font-editorial font-normal text-primary">
                  Workflow and Data Flow
                </h2>
              </div>
              <div className="space-y-3">
                {doc.workflowDataFlow.map((step) => (
                  <div
                    key={step.step}
                    className="p-4 rounded-xl bg-[--bg-surface] border border-[--border-subtle] flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4"
                  >
                    <div className="flex items-center sm:flex-col gap-2 shrink-0">
                      <span className="w-7 h-7 rounded-lg bg-[--bg-elevated] text-accent font-mono-text text-xs font-bold flex items-center justify-center">
                        0{step.step}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                      <h3 className="text-sm font-semibold text-primary">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                        {step.action}
                      </p>
                      <div className="mt-1 text-[11px] font-mono-text text-muted flex items-center gap-1.5">
                        <span className="text-accent font-medium">Data:</span>
                        <span>{step.dataHandled}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 8. Implementation and Methodology */}
            <section id="methodology" className="scroll-mt-28 flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-2 border-b border-[--border-subtle]">
                <span className="text-xs font-mono-text text-accent font-bold">08</span>
                <h2 className="text-xl sm:text-2xl font-editorial font-normal text-primary">
                  Implementation and Methodology
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                {doc.methodology.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-4 rounded-xl bg-[--bg-surface] border border-[--border-subtle] flex flex-col gap-1.5"
                  >
                    <h3 className="text-xs font-mono-text uppercase tracking-wider text-accent font-semibold">
                      Phase {mIdx + 1}: {m.phase}
                    </h3>
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                      {m.details}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 9. Important Modules or Components */}
            <section id="modules" className="scroll-mt-28 flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-2 border-b border-[--border-subtle]">
                <span className="text-xs font-mono-text text-accent font-bold">09</span>
                <h2 className="text-xl sm:text-2xl font-editorial font-normal text-primary">
                  Important Modules and Components
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {doc.modules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[--bg-surface] border border-[--border-subtle] flex flex-col gap-2"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs sm:text-sm font-semibold text-primary">
                        {mod.name}
                      </h3>
                      <span className="text-[10px] font-mono-text text-accent px-1.5 py-0.5 rounded bg-[--bg-elevated]">
                        {mod.fileOrModule}
                      </span>
                    </div>
                    <p className="text-xs text-secondary leading-relaxed">
                      {mod.responsibility}
                    </p>
                    <div className="pt-2 border-t border-[--border-subtle] text-[11px] font-mono-text text-muted">
                      <span className="text-primary font-medium">Core Logic:</span> {mod.keyLogic}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 10. Testing and Evaluation */}
            <section id="testing" className="scroll-mt-28 flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-2 border-b border-[--border-subtle]">
                <span className="text-xs font-mono-text text-accent font-bold">10</span>
                <h2 className="text-xl sm:text-2xl font-editorial font-normal text-primary">
                  Testing and Evaluation
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                {doc.testingAndEvaluation.methodology}
              </p>
              {/* Metrics Table */}
              <div className="overflow-x-auto rounded-xl border border-[--border-subtle]">
                <table className="w-full text-left text-xs font-mono-text">
                  <thead className="bg-[--bg-surface] border-b border-[--border-subtle] text-accent">
                    <tr>
                      <th className="py-2.5 px-3 font-semibold">Evaluation Target</th>
                      <th className="py-2.5 px-3 font-semibold">Observed Metric / Score</th>
                      <th className="py-2.5 px-3 font-semibold">Technical Detail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[--border-subtle]">
                    {doc.testingAndEvaluation.metrics.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-[--bg-surface]/50">
                        <td className="py-2.5 px-3 text-primary font-medium">{row.name}</td>
                        <td className="py-2.5 px-3 text-accent font-bold">{row.score}</td>
                        <td className="py-2.5 px-3 text-secondary">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs font-mono-text text-muted italic bg-[--bg-surface] p-3 rounded-lg border border-[--border-subtle]">
                {doc.testingAndEvaluation.observations}
              </p>
            </section>

            {/* 11. Results and Outcomes */}
            <section id="results" className="scroll-mt-28 flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-2 border-b border-[--border-subtle]">
                <span className="text-xs font-mono-text text-accent font-bold">11</span>
                <h2 className="text-xl sm:text-2xl font-editorial font-normal text-primary">
                  Results and Outcomes
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {doc.resultsAndOutcomes.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[--bg-surface] border border-[--border-subtle] flex items-start gap-2.5 text-xs sm:text-sm text-primary"
                  >
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 12. Challenges and Technical Trade-offs */}
            <section id="challenges" className="scroll-mt-28 flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-2 border-b border-[--border-subtle]">
                <span className="text-xs font-mono-text text-accent font-bold">12</span>
                <h2 className="text-xl sm:text-2xl font-editorial font-normal text-primary">
                  Challenges and Technical Trade-offs
                </h2>
              </div>
              <div className="space-y-3">
                {doc.challengesAndTradeoffs.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl bg-[--bg-surface] border border-[--border-subtle] flex flex-col gap-2"
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-mono-text text-accent font-bold">
                        Challenge {idx + 1}:
                      </span>
                      <h3 className="text-xs sm:text-sm font-semibold text-primary">
                        {item.challenge}
                      </h3>
                    </div>
                    <div className="text-xs text-muted font-mono-text pl-4 border-l-2 border-[--border]">
                      <span className="font-semibold text-secondary">Trade-off / Friction:</span> {item.tradeoff}
                    </div>
                    <div className="text-xs text-secondary pl-4 border-l-2 border-l-[--accent]">
                      <span className="font-semibold text-accent">Engineering Resolution:</span> {item.solution}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 13. Limitations */}
            <section id="limitations" className="scroll-mt-28 flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-2 border-b border-[--border-subtle]">
                <span className="text-xs font-mono-text text-accent font-bold">13</span>
                <h2 className="text-xl sm:text-2xl font-editorial font-normal text-primary">
                  Limitations
                </h2>
              </div>
              <ul className="space-y-2.5">
                {doc.limitations.map((limit, idx) => (
                  <li
                    key={idx}
                    className="p-3 rounded-lg bg-[--bg-surface] border border-[--border-subtle] text-xs sm:text-sm text-secondary flex items-start gap-2.5"
                  >
                    <span className="text-accent font-mono-text text-xs mt-0.5">•</span>
                    <span>{limit}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 14. Future Scope */}
            <section id="future-scope" className="scroll-mt-28 flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-2 border-b border-[--border-subtle]">
                <span className="text-xs font-mono-text text-accent font-bold">14</span>
                <h2 className="text-xl sm:text-2xl font-editorial font-normal text-primary">
                  Future Scope
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {doc.futureScope.map((scope, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[--bg-surface] border border-[--border-subtle] flex flex-col gap-2"
                  >
                    <span className="text-xs font-mono-text text-accent font-semibold">
                      Phase 2.{idx + 1}
                    </span>
                    <p className="text-xs text-secondary leading-relaxed">
                      {scope}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 15. References and Project Resources */}
            <section id="resources" className="scroll-mt-28 flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-2 border-b border-[--border-subtle]">
                <span className="text-xs font-mono-text text-accent font-bold">15</span>
                <h2 className="text-xl sm:text-2xl font-editorial font-normal text-primary">
                  References and Project Resources
                </h2>
              </div>
              <div className="flex flex-col gap-2.5">
                {doc.references.map((ref, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[--bg-surface] border border-[--border-subtle] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold text-primary">
                        {ref.title}
                      </h3>
                      <p className="text-xs text-muted mt-0.5">
                        {ref.note}
                      </p>
                    </div>
                    {ref.link && (
                      <a
                        href={ref.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-accent font-mono-text hover:underline shrink-0"
                      >
                        <span>Access Resource</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* ── Bottom Pagination: Previous / Next Project ─────── */}
            <div className="pt-10 border-t border-[--border-subtle] flex flex-col sm:flex-row items-center justify-between gap-4">
              {prevProject ? (
                <Link
                  to={`/projects/${prevProject.id}`}
                  className="w-full sm:w-auto p-4 rounded-xl bg-[--bg-surface] border border-[--border-subtle] hover:border-[--accent] transition-colors flex items-center gap-3 text-left"
                >
                  <ArrowLeft size={16} className="text-accent" />
                  <div>
                    <span className="text-[10px] font-mono-text text-muted uppercase">Previous Project</span>
                    <h4 className="text-sm font-semibold text-primary">{prevProject.title}</h4>
                  </div>
                </Link>
              ) : <div />}

              {nextProject && (
                <Link
                  to={`/projects/${nextProject.id}`}
                  className="w-full sm:w-auto p-4 rounded-xl bg-[--bg-surface] border border-[--border-subtle] hover:border-[--accent] transition-colors flex items-center justify-end gap-3 text-right ml-auto"
                >
                  <div>
                    <span className="text-[10px] font-mono-text text-muted uppercase">Next Project</span>
                    <h4 className="text-sm font-semibold text-primary">{nextProject.title}</h4>
                  </div>
                  <ArrowRight size={16} className="text-accent" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }
