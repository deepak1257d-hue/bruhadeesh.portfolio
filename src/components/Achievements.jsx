import React from 'react';
import { achievementsAndCredentials } from '../data/achievements';
import { Trophy, Award, ArrowUpRight, CheckCircle2, ShieldCheck, ExternalLink, Calendar } from 'lucide-react';

export default function Achievements() {
  const { achievements, credentials } = achievementsAndCredentials;

  return (
    <section id="achievements" className="py-20 md:py-28 border-t border-bordercol bg-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-forest font-semibold">
              Recognition & Verified Credentials
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink mt-2">
              Achievements, awards & credentials.
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-muted max-w-md">
            Verified competition prizes, hackathon engineering builds, and technical certifications.
          </p>
        </div>

        {/* 1. Verified Achievements & Competitions */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-bordercol">
            <Trophy className="w-4 h-4 text-forest" />
            <h3 className="font-heading font-bold text-lg text-ink">
              Awards & Competition Achievements
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-2xl bg-ivory-50 border border-bordercol hover:border-forest/40 transition-all duration-300 shadow-soft hover:shadow-lift flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-forest text-ivory text-xs font-mono font-semibold">
                      <Trophy className="w-3.5 h-3.5" />
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-slate-muted">
                      {item.event.split('—')[1]?.trim() || item.event}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-lg text-ink mb-2">
                    {item.title}
                  </h4>

                  <div className="text-xs font-mono text-forest mb-3">
                    {item.event}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-muted leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-bordercol/60">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Verified Technical Credentials */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-2 pb-2 border-b border-bordercol">
            <Award className="w-4 h-4 text-forest" />
            <h3 className="font-heading font-bold text-lg text-ink">
              Verified Technical Credentials
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials.map((cred) => (
              <div
                key={cred.id}
                className="p-6 sm:p-7 rounded-2xl bg-ivory border border-bordercol hover:border-forest/40 transition-all duration-300 shadow-soft hover:shadow-lift flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-sage text-forest text-xs font-mono font-semibold">
                      {cred.issuer}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-muted">
                      <Calendar className="w-3 h-3" />
                      {cred.date}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-lg text-ink mb-1">
                    {cred.title}
                  </h4>

                  {cred.badgeDetail && (
                    <div className="text-xs font-mono text-amber-900 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded inline-block mb-3">
                      {cred.badgeDetail}
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-muted leading-relaxed mb-4">
                    {cred.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-bordercol/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-forest font-medium">
                    <ShieldCheck className="w-4 h-4 text-forest" />
                    <span>Verified on Credly</span>
                  </div>

                  <a
                    href={cred.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-ivory bg-forest hover:bg-forest-hover rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Verify Credential</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
