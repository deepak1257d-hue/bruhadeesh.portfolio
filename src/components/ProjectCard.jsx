import React from 'react';
import { ArrowUpRight, CheckCircle2, Layers, Cpu, ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, onOpenModal, index }) {
  return (
    <div className="rounded-2xl bg-ivory border border-bordercol hover:border-forest/40 transition-all duration-300 shadow-soft hover:shadow-lift overflow-hidden flex flex-col justify-between group">
      {/* Top Banner & Header */}
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-mono text-xs uppercase tracking-wider text-forest font-semibold">
            0{index + 1} / {project.category}
          </span>
          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-muted hover:text-forest transition-colors rounded-md hover:bg-sage/40 cursor-pointer"
              title="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <h3 className="font-heading font-bold text-xl sm:text-2xl text-ink group-hover:text-forest transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-slate-muted mt-2 font-normal leading-relaxed">
          {project.tagline}
        </p>

        {/* Stack Badges */}
        <div className="flex flex-wrap gap-1.5 my-4">
          {project.stack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] font-mono text-ink/80 bg-ivory-200 border border-bordercol rounded"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 6 && (
            <span className="px-1.5 py-0.5 text-[11px] font-mono text-slate-muted">
              +{project.stack.length - 6} more
            </span>
          )}
        </div>

        {/* Problem & Contributions highlight */}
        <div className="mt-5 space-y-3 pt-4 border-t border-bordercol/60">
          <div>
            <span className="text-[11px] font-mono uppercase text-forest font-semibold block mb-1">
              Core Engineering Focus
            </span>
            <p className="text-xs text-slate-muted line-clamp-2 leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div className="space-y-1.5 pt-1">
            {project.keyContributions.slice(0, 3).map((contrib, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-muted">
                <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                <span className="line-clamp-1">{contrib}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer: Metrics & Deep-Dive CTA */}
      <div className="px-6 py-4 sm:px-8 border-t border-bordercol/80 bg-ivory-50/80 flex items-center justify-between gap-4">
        {/* Primary Metric Preview */}
        <div className="flex items-center gap-3">
          {project.metrics.slice(0, 2).map((m, idx) => (
            <div key={idx} className="text-left">
              <span className="text-sm font-heading font-bold text-ink block leading-none">
                {m.value}
              </span>
              <span className="text-[10px] font-mono text-slate-muted uppercase">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-forest hover:text-forest-dark uppercase tracking-wider py-1.5 px-3 rounded-lg hover:bg-sage/50 transition-colors cursor-pointer"
        >
          <span>Deep Dive</span>
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
