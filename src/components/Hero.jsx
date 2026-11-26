import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import HeroImage from './HeroImage';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle architectural ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sage/25 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Technical Narrative & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 order-2 lg:order-1">
            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-sage/70 border border-sage-dark/60 text-ink shadow-xs">
              <span className="w-2 h-2 rounded-full bg-forest pulse-dot" />
              <span className="text-xs font-mono font-medium tracking-wide">
                Open to Engineering Opportunities
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[52px] text-ink leading-[1.15] tracking-tight">
              Building intelligent systems.{' '}
              <span className="text-forest block sm:inline">Engineering practical solutions.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-muted font-normal leading-relaxed max-w-xl">
              I build AI-powered applications, retrieval systems, and backend workflows that turn complex ideas into useful software.
            </p>

            {/* Focus Areas */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'LLM & RAG Architectures',
                'Multi-Agent Workflows',
                'FastAPI & Python',
                'PEFT & LoRA Fine-Tuning',
                'Deterministic Systems'
              ].map((pill) => (
                <span
                  key={pill}
                  className="px-2.5 py-1 text-xs font-mono font-medium text-ink/80 bg-ivory-200 border border-bordercol rounded-md"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-ivory bg-forest hover:bg-forest-hover rounded-xl shadow-soft hover:shadow-lift transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-ink hover:text-forest bg-ivory-50 hover:bg-ivory-200 border border-bordercol rounded-xl transition-all duration-200"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Direct Channel Strip */}
            <div className="flex flex-wrap items-center gap-5 pt-2 text-slate-muted">
              <a
                href="https://github.com/bruhadeesh359-ctrl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-muted hover:text-forest transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>github.com/bruhadeesh359-ctrl</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
              <span className="text-bordercol hidden sm:inline">|</span>
              <a
                href="https://www.linkedin.com/in/bruhadeesh-r-68871832b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-muted hover:text-forest transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right Column: Actual Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
