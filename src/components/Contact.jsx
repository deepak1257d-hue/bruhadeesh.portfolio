import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "bruhadeesh.personal@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-darkbg text-darkbg-text relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[280px] bg-forest/20 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Direct Outreach & Identity */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-dark/80 border border-darkbg-border text-sage text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-sage pulse-dot" />
              <span>Available for Technical Roles & Internships</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ivory leading-tight">
              Let's talk engineering.{' '}
              <span className="text-sage block sm:inline">Build something exceptional together.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-subtle leading-relaxed max-w-xl">
              I am actively seeking <strong>Software Engineering Internships</strong>, <strong>AI Engineering Internships</strong>, <strong>Machine Learning Engineering Internships</strong>, and <strong>Forward Deployed Engineering roles</strong>.
            </p>

            {/* Target Roles Pill List */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'Software Engineering Internships',
                'AI Engineering Internships',
                'ML Engineering Internships',
                'Forward Deployed Roles'
              ].map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 text-xs font-mono text-ivory/90 bg-darkbg-card border border-darkbg-border rounded-md"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Contact Action Bar */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider text-darkbg bg-sage hover:bg-ivory rounded-xl transition-all duration-200 shadow-lift cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-mono text-ivory bg-darkbg-card hover:bg-forest-dark border border-darkbg-border rounded-xl transition-all duration-200 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-sage" />
                    <span className="text-sage font-medium">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-subtle" />
                    <span>Copy: {email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Verified Handles & Fast Access */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-darkbg-card border border-darkbg-border shadow-dark-card space-y-6">
              <h3 className="font-heading font-semibold text-lg text-ivory border-b border-darkbg-border pb-4">
                Direct Profiles & Repositories
              </h3>

              <div className="space-y-4">
                <a
                  href="https://github.com/bruhadeesh359-ctrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-darkbg border border-darkbg-border hover:border-sage/40 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-darkbg-border flex items-center justify-center text-ivory group-hover:text-sage transition-colors">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-heading font-semibold text-ivory group-hover:text-sage transition-colors">
                        GitHub Profile
                      </div>
                      <div className="text-xs font-mono text-slate-subtle">
                        @bruhadeesh359-ctrl
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-subtle group-hover:text-sage transition-transform group-hover:translate-x-0.5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/bruhadeesh-r-68871832b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-darkbg border border-darkbg-border hover:border-sage/40 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-darkbg-border flex items-center justify-center text-ivory group-hover:text-sage transition-colors">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-heading font-semibold text-ivory group-hover:text-sage transition-colors">
                        LinkedIn Network
                      </div>
                      <div className="text-xs font-mono text-slate-subtle">
                        bruhadeesh-r-68871832b
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-subtle group-hover:text-sage transition-transform group-hover:translate-x-0.5" />
                </a>

                <div className="p-4 rounded-xl bg-darkbg border border-darkbg-border flex items-start gap-3">
                  <Terminal className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-subtle font-mono leading-relaxed">
                    Based in India · Open to Remote & On-Site Global Engineering Teams
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
