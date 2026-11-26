import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, AlertCircle, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import RagPipelineVisualizer from './RagPipelineVisualizer';
import FinSaathiAgentVisualizer from './FinSaathiAgentVisualizer';
import RepresentAiFlowVisualizer from './RepresentAiFlowVisualizer';
import FineTuningVisualizer from './FineTuningVisualizer';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    // Only lock scroll when this modal is actually rendered
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow || 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-ink/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-ivory rounded-2xl border border-bordercol shadow-lift overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-bordercol bg-ivory-50 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-forest font-semibold">
              {project.category}
            </span>
            <span className="text-bordercol">/</span>
            <span className="font-mono text-xs text-slate-muted">Case Study & Architecture</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-muted hover:text-ink hover:bg-ivory-200 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Header */}
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink">
              {project.title}
            </h2>
            <p className="text-base text-slate-muted mt-2 font-normal leading-relaxed">
              {project.tagline}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-medium text-ink bg-ivory-200 border border-bordercol rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Architecture Visualization */}
          <div>
            <h3 className="font-heading font-bold text-lg text-ink mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-forest" />
              Architecture & Interactive Flow
            </h3>
            {project.id === 'rag-observability' && <RagPipelineVisualizer />}
            {project.id === 'finsaathi' && <FinSaathiAgentVisualizer />}
            {project.id === 'represent-ai' && <RepresentAiFlowVisualizer />}
            {project.id === 'llm-finetuning' && <FineTuningVisualizer />}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-ivory-50 border border-bordercol">
              <h4 className="font-heading font-semibold text-sm text-ink mb-2 text-rose-900">
                The Engineering Problem
              </h4>
              <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-ivory-50 border border-bordercol">
              <h4 className="font-heading font-semibold text-sm text-ink mb-2 text-forest">
                The Engineered Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Engineering Contributions */}
          <div>
            <h4 className="font-heading font-semibold text-base text-ink mb-3">
              Key Engineering Contributions
            </h4>
            <div className="space-y-2.5">
              {project.keyContributions.map((contrib, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-muted">
                  <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <span>{contrib}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Notes & Trade-offs */}
          {project.architectureNotes && (
            <div className="p-4 rounded-xl bg-sage/30 border border-sage-dark/60">
              <span className="text-xs font-mono uppercase tracking-wider text-forest font-semibold block mb-1">
                Engineering Trade-offs & Insights
              </span>
              <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
                {project.architectureNotes}
              </p>
            </div>
          )}

          {/* Explicit Disclaimers (where applicable) */}
          {project.disclaimer && (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 leading-relaxed font-mono">
                <strong>Scope Clarification:</strong> {project.disclaimer}
              </div>
            </div>
          )}

          {/* Benchmark Metrics Bar */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-ink mb-3">
              Benchmark & Verification Telemetry
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-ivory-200/60 border border-bordercol text-center">
                  <div className="text-xl font-heading font-bold text-forest">
                    {metric.value}
                  </div>
                  <div className="text-[11px] font-mono text-ink font-medium mt-0.5">
                    {metric.label}
                  </div>
                  <div className="text-[10px] text-slate-muted mt-0.5">
                    {metric.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-4 border-t border-bordercol bg-ivory-50 flex items-center justify-between sticky bottom-0 z-20">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ivory bg-forest hover:bg-forest-hover rounded-lg transition-colors cursor-pointer"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Repository on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-muted hover:text-ink transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
