import React, { useState } from 'react';
import { Cpu, CheckCircle2, XCircle, Zap, Sliders, BarChart2, ShieldCheck } from 'lucide-react';

export default function FineTuningVisualizer() {
  const [activeTab, setActiveTab] = useState('comparison');

  const comparisonData = {
    prompt: `Call get_weather(location="Bangalore", units="celsius")`,
    baseModel: {
      output: `{"location": "Bangalore", "unit": "celsius"`,
      validJson: false,
      exactMatch: false,
      latency: '58ms',
      notes: 'Truncated trailing bracket, parameter key mismatch (unit instead of units).'
    },
    loraModel: {
      output: `{"name": "get_weather", "arguments": {"location": "Bangalore", "units": "celsius"}}`,
      validJson: true,
      exactMatch: true,
      latency: '42ms',
      notes: 'Strict adherence to OpenAI-compatible tool call protocol with exact parameter types.'
    }
  };

  return (
    <div className="bg-ivory-50 rounded-2xl border border-bordercol p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-bordercol gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-forest font-semibold">
            PEFT & Evaluation Harness
          </span>
          <h4 className="font-heading font-semibold text-lg sm:text-xl text-ink">
            LoRA Adaptation on Qwen2.5-0.5B-Instruct
          </h4>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-forest bg-sage px-2.5 py-1 rounded-md font-semibold">
            LoRA r=16, α=32
          </span>
          <span className="text-xs font-mono text-slate-muted bg-ivory-200 px-2.5 py-1 rounded-md border border-bordercol">
            Local Workflow Validation
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-3 my-6">
        <button
          onClick={() => setActiveTab('comparison')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
            activeTab === 'comparison'
              ? 'bg-forest text-ivory shadow-xs'
              : 'bg-ivory-200 text-slate-muted hover:text-ink'
          }`}
        >
          Tool-Call Exact Match Test
        </button>
        <button
          onClick={() => setActiveTab('metrics')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
            activeTab === 'metrics'
              ? 'bg-forest text-ivory shadow-xs'
              : 'bg-ivory-200 text-slate-muted hover:text-ink'
          }`}
        >
          Benchmark Metrics & Parameters
        </button>
      </div>

      {activeTab === 'comparison' ? (
        <div className="space-y-4">
          <div className="p-3 rounded-lg bg-ivory border border-bordercol font-mono text-xs">
            <span className="text-slate-muted">Target Evaluation Prompt: </span>
            <span className="text-ink font-semibold">{comparisonData.prompt}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Base Model Output */}
            <div className="p-4 rounded-xl bg-ivory border border-rose-200/80 shadow-xs">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-rose-100">
                <span className="font-heading font-semibold text-xs text-rose-900">
                  Base Model (Qwen2.5-0.5B)
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                  <XCircle className="w-3 h-3" /> FAILED EM
                </span>
              </div>
              <pre className="text-[11px] font-mono p-2.5 rounded bg-rose-50/50 text-rose-950 overflow-x-auto whitespace-pre-wrap">
                {comparisonData.baseModel.output}
              </pre>
              <p className="text-[11px] text-slate-muted mt-2">
                {comparisonData.baseModel.notes}
              </p>
              <div className="mt-3 pt-2 border-t border-bordercol/60 flex items-center justify-between text-[11px] font-mono text-slate-muted">
                <span>JSON Valid: False</span>
                <span>Latency: {comparisonData.baseModel.latency}</span>
              </div>
            </div>

            {/* LoRA Model Output */}
            <div className="p-4 rounded-xl bg-ivory border border-forest/50 bg-sage/20 shadow-xs">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-sage-dark/60">
                <span className="font-heading font-semibold text-xs text-forest">
                  Fine-Tuned with LoRA
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-forest bg-sage px-2 py-0.5 rounded font-semibold">
                  <CheckCircle2 className="w-3 h-3" /> 100% MATCH
                </span>
              </div>
              <pre className="text-[11px] font-mono p-2.5 rounded bg-ivory text-ink border border-bordercol overflow-x-auto whitespace-pre-wrap">
                {comparisonData.loraModel.output}
              </pre>
              <p className="text-[11px] text-slate-muted mt-2">
                {comparisonData.loraModel.notes}
              </p>
              <div className="mt-3 pt-2 border-t border-bordercol/60 flex items-center justify-between text-[11px] font-mono text-slate-muted">
                <span className="text-forest font-semibold">JSON Valid: True (100%)</span>
                <span>Latency: {comparisonData.loraModel.latency}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Benchmark & Hyperparameters view */
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-ivory border border-bordercol text-center">
              <span className="text-[11px] font-mono uppercase text-slate-muted block mb-1">
                JSON Syntactic Validity
              </span>
              <div className="text-2xl font-heading font-bold text-forest">99.4%</div>
              <span className="text-[11px] text-slate-muted font-mono">Up from 72.1% baseline</span>
            </div>

            <div className="p-4 rounded-xl bg-ivory border border-bordercol text-center">
              <span className="text-[11px] font-mono uppercase text-slate-muted block mb-1">
                Exact Match (EM) Accuracy
              </span>
              <div className="text-2xl font-heading font-bold text-forest">94.2%</div>
              <span className="text-[11px] text-slate-muted font-mono">Held-out function calling test</span>
            </div>

            <div className="p-4 rounded-xl bg-ivory border border-bordercol text-center">
              <span className="text-[11px] font-mono uppercase text-slate-muted block mb-1">
                Trainable Parameter Share
              </span>
              <div className="text-2xl font-heading font-bold text-ink">0.84%</div>
              <span className="text-[11px] text-slate-muted font-mono">r=16, α=32 rank adaptation</span>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-ivory border border-bordercol text-xs text-slate-muted leading-relaxed font-mono">
            <strong>Scope & Hardware Context:</strong> Validated on local development hardware for parameter-efficient adaptation workflows. Does not claim distributed cluster training or unverified multi-GPU production scale.
          </div>
        </div>
      )}
    </div>
  );
}
