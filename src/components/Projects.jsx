import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import RagPipelineVisualizer from './RagPipelineVisualizer';
import FinSaathiAgentVisualizer from './FinSaathiAgentVisualizer';
import RepresentAiFlowVisualizer from './RepresentAiFlowVisualizer';
import FineTuningVisualizer from './FineTuningVisualizer';
import { Layers, Sparkles, Cpu, ShieldCheck } from 'lucide-react';

export default function Projects({ onOpenModal }) {
  const [activeArchTab, setActiveArchTab] = useState('rag-observability');

  const archTabs = [
    { id: 'rag-observability', label: 'RAG Hybrid Retrieval', icon: Layers },
    { id: 'finsaathi', label: '5-Agent Collaboration', icon: Sparkles },
    { id: 'represent-ai', label: 'Dispute Investigation', icon: ShieldCheck },
    { id: 'llm-finetuning', label: 'LoRA PEFT & Eval', icon: Cpu },
  ];

  return (
    <section id="projects" className="py-24 border-t border-bordercol bg-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-forest font-semibold">
              Selected Engineering Projects
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink mt-2">
              Architected for correctness, telemetry, and scale.
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-muted max-w-md">
            Click on any project to explore the full case study, system boundaries, and verified metrics.
          </p>
        </div>

        {/* 4-Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenModal={onOpenModal}
            />
          ))}
        </div>

        {/* Interactive Architecture Deep Dive Section */}
        <div id="architecture" className="pt-12 border-t border-bordercol">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-forest font-semibold">
                Systems & Workflows Under The Hood
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-ink mt-2">
                Interactive Architecture Visualizers
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-muted max-w-md">
              Inspect how data flows through state machines, retrieval engines, and fine-tuned models.
            </p>
          </div>

          {/* Architecture Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {archTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeArchTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveArchTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all ${
                    isActive
                      ? 'bg-forest text-ivory shadow-soft'
                      : 'bg-ivory-200/80 text-slate-muted hover:text-ink hover:bg-ivory-200 border border-bordercol'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Visualizer Container */}
          <div className="transition-all duration-300">
            {activeArchTab === 'rag-observability' && <RagPipelineVisualizer />}
            {activeArchTab === 'finsaathi' && <FinSaathiAgentVisualizer />}
            {activeArchTab === 'represent-ai' && <RepresentAiFlowVisualizer />}
            {activeArchTab === 'llm-finetuning' && <FineTuningVisualizer />}
          </div>
        </div>
      </div>
    </section>
  );
}
