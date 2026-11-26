import React, { useState } from 'react';
import { UserCheck, TrendingUp, Newspaper, ShieldAlert, Sparkles, Database, Wallet, AlertCircle } from 'lucide-react';

export default function FinSaathiAgentVisualizer() {
  const [selectedAgent, setSelectedAgent] = useState('evaluator');

  const agents = [
    {
      id: 'profile',
      name: 'Profile Agent',
      icon: UserCheck,
      role: 'User Risk & Portfolio Profiler',
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      description: 'Parses risk questionnaire, cash flow constraints, and investment time horizon into bounded JSON variables.',
      outputs: ['Risk Tolerance: Moderate-Aggressive', 'Horizon: 3-5 Years', 'Max Drawdown Target: 12%'],
      downstream: 'Supplies baseline boundary constraints to Evaluator Agent.'
    },
    {
      id: 'market',
      name: 'Market Agent',
      icon: TrendingUp,
      role: 'Equities & Index Telemetry',
      color: 'bg-blue-50 text-blue-800 border-blue-200',
      description: 'Polls real-time candlestick charts, moving averages, sector momentum, and volatility metrics via Upstox API.',
      outputs: ['NIFTY 50 Trend: +0.8%', 'RSI Indicator: 58.4', 'Sector Strength: IT & Energy'],
      downstream: 'Provides technical indicators to Advisor Agent for analysis.'
    },
    {
      id: 'news',
      name: 'News Agent',
      icon: Newspaper,
      role: 'Macro & Financial Sentiment',
      color: 'bg-amber-50 text-amber-800 border-amber-200',
      description: 'Ingests corporate disclosures, RBI monetary policy commentary, and market news to derive real-time sentiment scores.',
      outputs: ['Policy Sentiment: Neutral-Hawkish', 'Earnings Surprise Rate: +4.2%', 'Macro Headline Score: Bullish'],
      downstream: 'Feeds qualitative context to Advisor Agent alongside market data.'
    },
    {
      id: 'evaluator',
      name: 'Evaluator Agent',
      icon: ShieldAlert,
      role: 'Adversarial Safety Guardrail',
      color: 'bg-rose-50 text-rose-800 border-rose-200',
      description: 'Cross-examines draft recommendations against the Profile Agent’s risk tolerance to eliminate reckless trading advice.',
      outputs: ['Rule Check: PASS (Zero leverage advised)', 'Volatility Audit: 9.8% (< 12% ceiling)', 'Diversification Status: Validated'],
      downstream: 'Acts as safety gate; must sign off before Advisor delivers output to user.'
    },
    {
      id: 'advisor',
      name: 'Advisor Agent',
      icon: Sparkles,
      role: 'Synthesizer & Communicator',
      color: 'bg-purple-50 text-purple-800 border-purple-200',
      description: 'Synthesizes market data, news sentiment, and portfolio context into plain-English educational guidance with source citations.',
      outputs: ['Generated Strategy: Staggered Index SIP', 'Paper Trade Suggestion: ₹15,000 allocate', 'Educational Rationale: Cost averaging'],
      downstream: 'Outputs response to Next.js UI and logs simulated paper order to Supabase.'
    }
  ];

  const current = agents.find((a) => a.id === selectedAgent) || agents[3];

  return (
    <div className="bg-ivory-50 rounded-2xl border border-bordercol p-6 sm:p-8 shadow-xs">
      {/* Header with Disclaimer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-bordercol gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-forest font-semibold">
            Multi-Agent State Architecture
          </span>
          <h4 className="font-heading font-semibold text-lg sm:text-xl text-ink">
            Collaborative 5-Agent Advisory & Simulation Engine
          </h4>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200 text-xs font-mono">
          <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
          <span>Paper Trading Simulation Only (₹1L Virtual Capital)</span>
        </div>
      </div>

      {/* Agent Workflow Map */}
      <div className="py-6">
        <div className="text-xs font-mono text-slate-muted mb-3 flex items-center justify-between">
          <span>Click any agent to inspect state transitions & role:</span>
          <span className="text-forest font-medium">FastAPI Async Orchestrator</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {agents.map((agent) => {
            const Icon = agent.icon;
            const isSelected = selectedAgent === agent.id;
            return (
              <button
                key={agent.id}
                onClick={() => setSelectedAgent(agent.id)}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-forest bg-sage/60 ring-2 ring-forest/30 shadow-soft'
                    : 'border-bordercol bg-ivory hover:border-forest/40 hover:bg-ivory-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-md bg-ivory flex items-center justify-center text-forest border border-bordercol">
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[10px] font-mono text-slate-muted uppercase">
                      Agent
                    </span>
                  </div>
                  <h6 className="font-heading font-semibold text-xs text-ink leading-tight">
                    {agent.name}
                  </h6>
                  <p className="text-[11px] text-slate-muted mt-0.5 line-clamp-1 font-mono">
                    {agent.role.split(' ')[0]}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Agent Inspector */}
      <div className="p-5 rounded-xl bg-ivory border border-bordercol shadow-soft">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-bordercol/60">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-xs font-mono font-semibold bg-forest text-ivory">
              {current.name}
            </span>
            <span className="text-xs font-medium text-slate-muted">
              Role: {current.role}
            </span>
          </div>
          <span className="text-xs font-mono text-forest bg-sage px-2 py-0.5 rounded">
            State: Active
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-muted leading-relaxed mb-4">
          {current.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-3 rounded-lg bg-ivory-200/60 border border-bordercol">
            <span className="text-[11px] font-mono uppercase text-forest font-semibold block mb-1.5">
              Simulated State Payloads
            </span>
            <ul className="space-y-1">
              {current.outputs.map((out, idx) => (
                <li key={idx} className="text-xs font-mono text-ink flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-forest" />
                  {out}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 rounded-lg bg-ivory-200/60 border border-bordercol flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase text-forest font-semibold block mb-1.5">
                Downstream Dependency
              </span>
              <p className="text-xs text-slate-muted">
                {current.downstream}
              </p>
            </div>
            <div className="mt-2 text-[11px] font-mono text-ink/70 flex items-center gap-1">
              <Database className="w-3 h-3 text-forest" />
              <span>Persisted to Supabase PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
