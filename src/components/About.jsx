import React from 'react';
import { Layers, Database, Code2, Search, ArrowRight, ShieldCheck, CheckCircle2, Cpu } from 'lucide-react';

export default function About() {
  const engineeringSteps = [
    {
      step: "01",
      title: "Understand",
      subtitle: "Problem Space & Constraints",
      desc: "Deconstruct the real problem before touching code. Analyze data distributions, token economies, latency tolerances, failure modes, and user friction points."
    },
    {
      step: "02",
      title: "Architect",
      subtitle: "Boundaries & Schemas",
      desc: "Design modular state machines, hybrid retrieval topologies (BM25 + dense vectors), and strict Pydantic/Zod schemas to guarantee deterministic boundaries between LLMs and backends."
    },
    {
      step: "03",
      title: "Build",
      subtitle: "Resilient Implementations",
      desc: "Implement clean FastAPI microservices, type-safe Next.js/React frontends, vector store indices, and automated fallback circuit breakers to intercept hallucinated context."
    },
    {
      step: "04",
      title: "Evaluate",
      subtitle: "Empirical Benchmarking",
      desc: "Validate every release with reproducible metrics: Recall@K, MRR, NDCG, micro-stage latency (P50/P95/P99), and Exact Match on tool-calling parameters."
    }
  ];

  const engineeringPillars = [
    {
      icon: Search,
      title: "Grounded Retrieval over Opaque Prompts",
      desc: "LLMs are only as reliable as the context they are fed. I focus heavily on hybrid retrieval (BM25 + dense vectors), reciprocal rank fusion, and cross-encoders to ensure answers are rooted in verified evidence rather than model hallucination."
    },
    {
      icon: Layers,
      title: "Bounded Multi-Agent Systems",
      desc: "Monolithic, single-prompt agents fail when workflows scale. I decompose complex logic into specialized, bounded agents with distinct roles (e.g., market data collectors, profile evaluators, adversarial guardrails) connected by explicit state machines."
    },
    {
      icon: Database,
      title: "Deterministic Contracts & Schemas",
      desc: "AI applications require software engineering rigor. I enforce strict Pydantic schemas, typed API boundaries, database migrations, and structured JSON outputs so downstream backend systems can consume AI outputs without runtime crashes."
    },
    {
      icon: Code2,
      title: "Modern Tooling with Personal Ownership",
      desc: "I leverage modern AI coding assistants as productivity force-multipliers, but retain total responsibility for the architecture, debugging, edge-case handling, test coverage, and production reliability of every line of code."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-bordercol bg-ivory-50/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-forest font-semibold">
              Engineering Identity & Philosophy
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink mt-2">
              How I approach software and AI systems.
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-muted max-w-md">
            Pragmatic execution. Measured systems. Grounded intelligence.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-6 space-y-5 text-base text-slate-muted leading-relaxed">
            <p>
              I am an AI & Software Developer dedicated to engineering practical, deterministic software. Rather than treating artificial intelligence as a superficial wrapper or a black-box novelty, I focus on the foundational engineering beneath the model: data pipelines, hybrid retrieval mechanics, stateful agent orchestration, and robust REST APIs.
            </p>
            <p>
              My work centers on building systems that bridge modern foundation models with production requirements: latency budgets, factual grounding, structured outputs, and failure circuit-breakers. Whether building a full-stack dispute triage engine for merchant chargebacks or a hybrid RAG observability framework with micro-stage telemetry, my priority is software that performs reliably under real-world constraints.
            </p>
            <p>
              When developing, I approach engineering with high discipline. I design modular backend architectures with FastAPI and Python, model schemas with Supabase PostgreSQL, and build interactive, accessible interfaces with React and Next.js. I believe deeply in empirical validation: if a system cannot be evaluated with reproducible metrics like Recall@K, Exact Match, or latency distributions, it is not ready for production.
            </p>

            <div className="pt-2">
              <div className="p-4 rounded-xl bg-ivory-200/70 border border-bordercol">
                <span className="font-mono text-xs uppercase tracking-wider text-forest font-semibold block mb-1">
                  Core Engineering Stack
                </span>
                <p className="text-xs text-ink font-mono">
                  Python · FastAPI · React / Next.js · Supabase (PostgreSQL) · ChromaDB · BM25 · Gemini API · PyTorch / Hugging Face · Docker
                </p>
              </div>
            </div>
          </div>

          {/* Engineering Pillars Column */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {engineeringPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-ivory border border-bordercol hover:border-forest/40 transition-all duration-200 shadow-xs hover:shadow-soft flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-sage flex items-center justify-center text-forest mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-semibold text-base text-ink mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Engineering Approach Framework: Understand -> Architect -> Build -> Evaluate */}
        <div className="pt-12 border-t border-bordercol">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-forest font-semibold">
                Execution Methodology
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-ink mt-1.5">
                Understand → Architect → Build → Evaluate
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-mono text-slate-muted max-w-sm">
              The four-phase lifecycle applied to every software and AI engineering project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {engineeringSteps.map((step, idx) => (
              <div
                key={step.step}
                className="p-5 rounded-xl bg-ivory border border-bordercol hover:border-forest/40 transition-all shadow-xs flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-forest bg-sage px-2 py-0.5 rounded">
                      PHASE {step.step}
                    </span>
                    {idx < 3 && (
                      <ArrowRight className="w-4 h-4 text-slate-subtle hidden lg:block group-hover:text-forest group-hover:translate-x-1 transition-all" />
                    )}
                  </div>
                  <h4 className="font-heading font-bold text-lg text-ink">
                    {step.title}
                  </h4>
                  <div className="text-[11px] font-mono text-forest font-medium mt-0.5 mb-2.5">
                    {step.subtitle}
                  </div>
                  <p className="text-xs text-slate-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
