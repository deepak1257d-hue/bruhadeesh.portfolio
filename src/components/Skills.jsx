import React from 'react';
import { skillCategories } from '../data/skills';
import { Terminal, Database, Cpu, Layers, Activity, Code, Server, Wrench, Sparkles } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case 'Programming & Data':
        return Code;
      case 'Machine Learning':
        return Cpu;
      case 'LLM Engineering':
        return Sparkles;
      case 'Backend':
        return Server;
      case 'Frontend':
        return Layers;
      case 'Databases & Retrieval':
        return Database;
      case 'Developer Tools':
        return Wrench;
      case 'AI-Assisted Development':
        return Activity;
      default:
        return Terminal;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-bordercol bg-ivory-50/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-forest font-semibold">
              Technical Proficiencies
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink mt-2">
              Capabilities built through implementation.
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-muted max-w-md">
            Rigorous technical foundations spanning the modern AI, backend, and data engineering ecosystem.
          </p>
        </div>

        {/* 8-Category Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const Icon = getCategoryIcon(category.name);
            return (
              <div
                key={category.name}
                className="p-6 rounded-2xl bg-ivory border border-bordercol hover:border-forest/40 transition-all duration-300 shadow-xs hover:shadow-soft flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-sage flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-ivory transition-colors">
                      <Icon className="w-4 h-4" />
                    </span>
                    <h3 className="font-heading font-bold text-base text-ink leading-tight">
                      {category.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-muted leading-relaxed mb-4">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-mono font-medium text-ink/85 bg-ivory-200 border border-bordercol rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
