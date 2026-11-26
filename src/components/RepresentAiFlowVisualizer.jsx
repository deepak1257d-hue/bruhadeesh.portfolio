import React, { useState } from 'react';
import { Shield, Check, AlertTriangle, FileText, ArrowRight, Truck, CreditCard, MessageSquare, Database } from 'lucide-react';

export default function RepresentAiFlowVisualizer() {
  const [activeDecision, setActiveDecision] = useState('FIGHT');

  const decisions = {
    FIGHT: {
      badge: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      title: 'Recommendation: FIGHT Dispute',
      confidence: '98.2%',
      reasoning:
        'Proof of Delivery verified with recipient signature and GPS match at customer billing coordinate. Order delivered within guaranteed SLA. Merchant has complete legal rebuttal evidence packet.',
      evidence: [
        'Carrier POD signed by cardholder surname',
        'Billing and shipping address match 100%',
        'Zero prior dispute flags on customer profile'
      ]
    },
    ACCEPT: {
      badge: 'bg-rose-100 text-rose-800 border-rose-300',
      title: 'Recommendation: ACCEPT Dispute',
      confidence: '94.5%',
      reasoning:
        'Carrier tracking indicates package was reported lost in transit before delivery. Customer cancellation ticket confirmed 48 hours prior to carrier dispatch. Accept liability to prevent penalty fees.',
      evidence: [
        'Carrier status: Transit exception / lost',
        'CRM ticket #3812 confirms merchant refund pending',
        'Accepting avoids arbitration fee surcharge'
      ]
    },
    HUMAN_REVIEW: {
      badge: 'bg-amber-100 text-amber-800 border-amber-300',
      title: 'Recommendation: HUMAN REVIEW',
      confidence: '68.0%',
      reasoning:
        'Package delivered to front desk without recipient signature. Customer claims unauthorized fraud while device fingerprint matches previous 3 successful transactions. Requires manual risk review.',
      evidence: [
        'Carrier POD photo is inconclusive (porch drop)',
        'Device IP matches account history',
        'Customer support chat indicates partial item defect'
      ]
    }
  };

  return (
    <div className="bg-ivory-50 rounded-2xl border border-bordercol p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-bordercol gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-forest font-semibold">
            Triage Workflow Engine
          </span>
          <h4 className="font-heading font-semibold text-lg sm:text-xl text-ink">
            Deterministic Dispute Investigation Pipeline
          </h4>
        </div>
        <div className="text-xs font-mono text-slate-muted bg-ivory-200 px-3 py-1 rounded-md border border-bordercol">
          Simulated Gateway & Carrier APIs
        </div>
      </div>

      {/* Workflow Step Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-6">
        <div className="p-3.5 rounded-xl bg-ivory border border-bordercol flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-5 rounded bg-sage flex items-center justify-center text-forest text-xs font-mono font-bold">1</span>
            <span className="text-xs font-heading font-semibold text-ink">Dispute Webhook</span>
          </div>
          <p className="text-[11px] text-slate-muted">
            Incoming simulated dispute payload parsed into FastAPI event queue.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-ivory border border-bordercol flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-5 rounded bg-sage flex items-center justify-center text-forest text-xs font-mono font-bold">2</span>
            <span className="text-xs font-heading font-semibold text-ink">Evidence Ingestion</span>
          </div>
          <div className="flex items-center gap-2 text-forest text-[11px]">
            <CreditCard className="w-3.5 h-3.5" />
            <Truck className="w-3.5 h-3.5" />
            <MessageSquare className="w-3.5 h-3.5" />
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-ivory border border-bordercol flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-5 rounded bg-sage flex items-center justify-center text-forest text-xs font-mono font-bold">3</span>
            <span className="text-xs font-heading font-semibold text-ink">Gemini Analysis</span>
          </div>
          <p className="text-[11px] text-slate-muted font-mono">
            Pydantic schema validation: AIInvestigationResult
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-ivory border border-forest/40 bg-sage/30 flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-5 rounded bg-forest text-ivory flex items-center justify-center text-xs font-mono font-bold">4</span>
            <span className="text-xs font-heading font-semibold text-forest">Triage Decision</span>
          </div>
          <p className="text-[11px] text-slate-muted">
            FIGHT / ACCEPT / REVIEW recorded to Evidence Ledger.
          </p>
        </div>
      </div>

      {/* Interactive Decision Simulator */}
      <div className="p-5 rounded-xl bg-ivory border border-bordercol shadow-soft">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-muted font-medium">
            Test Case Scenarios (50 Benchmark Runs)
          </span>
          <div className="flex items-center gap-1.5">
            {['FIGHT', 'ACCEPT', 'HUMAN_REVIEW'].map((type) => (
              <button
                key={type}
                onClick={() => setActiveDecision(type)}
                className={`px-3 py-1 rounded-md text-xs font-mono font-medium transition-all ${
                  activeDecision === type
                    ? 'bg-forest text-ivory shadow-xs'
                    : 'bg-ivory-200 text-slate-muted hover:text-ink'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-lg bg-ivory-200/60 border border-bordercol">
          <div className="flex items-center justify-between mb-2">
            <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-semibold border ${decisions[activeDecision].badge}`}>
              {decisions[activeDecision].title}
            </span>
            <span className="text-xs font-mono text-slate-muted">
              Model Confidence: <strong className="text-ink">{decisions[activeDecision].confidence}</strong>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-muted leading-relaxed my-2">
            {decisions[activeDecision].reasoning}
          </p>

          <div className="mt-3 pt-3 border-t border-bordercol/70">
            <span className="text-[11px] font-mono uppercase text-forest font-semibold block mb-1">
              Extracted Evidence Artifacts
            </span>
            <ul className="space-y-1">
              {decisions[activeDecision].evidence.map((item, idx) => (
                <li key={idx} className="text-xs font-mono text-ink/80 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-forest" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
