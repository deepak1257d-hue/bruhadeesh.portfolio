import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Activity, Filter, Cpu, Database, Search } from 'lucide-react';

export default function RagPipelineVisualizer() {
  const [activeStep, setActiveStep] = useState(1);

  const stages = [
    {
      id: 0,
      name: "User Query",
      short: "Query",
      icon: Search,
      tag: "Input Stage",
      latency: "1.2ms",
      desc: "Raw user query is sanitized, stripped of injection tokens, and converted into lexical query tokens and dense embedding requests concurrently."
    },
    {
      id: 1,
      name: "Dual Retrieval (BM25 + Vector)",
      short: "Dual Retrieval",
      icon: Database,
      tag: "Hybrid Phase",
      latency: "28.4ms",
      desc: "Simultaneously queries BM25 sparse index (lexical exact keyword match for codes, IDs, exact phrases) and ChromaDB vector embeddings (semantic conceptual relevance)."
    },
    {
      id: 2,
      name: "Reciprocal Rank Fusion (RRF)",
      short: "RRF Fusion",
      icon: Filter,
      tag: "Score Merging",
      latency: "2.1ms",
      desc: "Fuses ranked candidate lists from BM25 and vector search using RRF score formula: RRF(d) = Σ 1 / (k + rank(d)). Avoids scale mismatch between BM25 scores and cosine similarities."
    },
    {
      id: 3,
      name: "Cross-Encoder Reranking",
      short: "Cross-Encoder",
      icon: Cpu,
      tag: "Deep Relevance",
      latency: "45.0ms",
      desc: "Top 20 fused candidates pass through a cross-encoder model scoring query-document token pairs jointly with full cross-attention, filtering semantic noise."
    },
    {
      id: 4,
      name: "Context Assembly & Guardrails",
      short: "Context Bounds",
      icon: Filter,
      tag: "Safety Check",
      latency: "3.5ms",
      desc: "Applies strict context token bounds and checks minimum evidence threshold. If candidate confidence falls below safety cutoff, triggers fallback circuit breaker to prevent hallucination."
    },
    {
      id: 5,
      name: "LLM Response Generation",
      short: "Synthesis",
      icon: Activity,
      tag: "Generation",
      latency: "380ms",
      desc: "Gemini API receives strictly delineated [SYSTEM], [EVIDENCE], and [QUERY] blocks. Instructed to cite exact chunk IDs with brackets and decline unsupported claims."
    },
    {
      id: 6,
      name: "Citation & Groundedness Eval",
      short: "Eval & Telemetry",
      icon: CheckCircle2,
      tag: "Evaluation",
      latency: "14.2ms",
      desc: "Automated evaluator extracts generated claims, verifies chunk-level alignment, records Recall@K, MRR, NDCG metrics, and logs end-to-end P95 latency telemetry to SQLite."
    }
  ];

  return (
    <div className="bg-ivory-50 rounded-2xl border border-bordercol p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-bordercol gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-forest font-semibold">
            Interactive Architecture Flow
          </span>
          <h4 className="font-heading font-semibold text-lg sm:text-xl text-ink">
            Hybrid Retrieval & Observability Pipeline
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-muted bg-ivory-200 px-2.5 py-1 rounded-md border border-bordercol">
            P95 Total Latency: ~474ms
          </span>
          <span className="text-xs font-mono text-forest bg-sage px-2.5 py-1 rounded-md font-semibold">
            Deterministic Grounding
          </span>
        </div>
      </div>

      {/* Step Progress Bar */}
      <div className="py-6 overflow-x-auto">
        <div className="flex items-center min-w-[620px] justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-bordercol -z-0" />
          {stages.map((stage, idx) => {
            const isCurrent = activeStep === idx;
            const isPassed = activeStep > idx;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStep(idx)}
                className={`relative z-10 flex flex-col items-center gap-1.5 px-2 py-1 rounded-lg transition-all ${
                  isCurrent
                    ? 'text-forest font-semibold scale-105'
                    : isPassed
                    ? 'text-ink/80 hover:text-forest'
                    : 'text-slate-muted hover:text-ink'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs transition-all ${
                    isCurrent
                      ? 'bg-forest text-ivory ring-4 ring-sage shadow-soft'
                      : isPassed
                      ? 'bg-sage text-forest font-medium'
                      : 'bg-ivory-200 text-slate-muted border border-bordercol'
                  }`}
                >
                  {idx + 1}
                </div>
                <span className="text-[11px] font-mono whitespace-nowrap">
                  {stage.short}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Inspector Detail Card */}
      <div className="mt-2 p-5 rounded-xl bg-ivory border border-bordercol shadow-soft">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-bordercol/60">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-sage flex items-center justify-center text-forest text-xs font-mono font-bold">
              0{activeStep + 1}
            </span>
            <h5 className="font-heading font-semibold text-base text-ink">
              {stages[activeStep].name}
            </h5>
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-ivory-200 text-slate-muted border border-bordercol">
              {stages[activeStep].tag}
            </span>
          </div>
          <div className="font-mono text-xs text-forest bg-sage/60 px-2 py-1 rounded-md self-start sm:self-auto">
            Micro-Stage Latency: {stages[activeStep].latency}
          </div>
        </div>

        <p className="text-sm text-slate-muted leading-relaxed">
          {stages[activeStep].desc}
        </p>

        <div className="mt-4 pt-3 border-t border-bordercol/60 flex items-center justify-between text-xs font-mono">
          <button
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className="text-slate-muted hover:text-forest disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ← Previous Stage
          </button>
          <span className="text-slate-muted">
            Stage {activeStep + 1} of {stages.length}
          </span>
          <button
            onClick={() => setActiveStep((prev) => Math.min(stages.length - 1, prev + 1))}
            disabled={activeStep === stages.length - 1}
            className="text-forest hover:text-forest-dark font-medium disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next Stage →
          </button>
        </div>
      </div>
    </div>
  );
}
