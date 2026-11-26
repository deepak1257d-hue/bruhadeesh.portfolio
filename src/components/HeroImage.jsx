import React from 'react';

export default function HeroImage() {
  return (
    <div className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[430px] mx-auto group">
      {/* Editorial framing accents: subtle ambient shadow layer */}
      <div className="absolute -inset-2 bg-gradient-to-br from-sage/40 via-transparent to-highlight/15 rounded-3xl -z-10 blur-md opacity-60" />
      <div className="absolute top-2 -right-2 sm:top-3 sm:-right-3 w-full h-full border border-bordercol rounded-2xl -z-10 bg-ivory-200/50 hidden sm:block" />

      {/* Main image container */}
      <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-ivory-200 border border-bordercol shadow-lift">
        <img
          src="/images/profile.png"
          alt="Bruhadeesh Narayana R — AI & Software Developer portrait"
          className="w-full h-full object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-[1.02]"
          loading="eager"
          decoding="async"
        />

        {/* Minimal caption pill */}
        <div className="absolute bottom-3 left-3 right-3 px-3.5 py-2 rounded-xl bg-ivory/95 backdrop-blur-md border border-bordercol/80 flex items-center justify-between shadow-soft">
          <div>
            <div className="text-[11px] font-heading font-semibold text-ink">Bruhadeesh Narayana R</div>
            <div className="text-[10px] font-mono text-slate-muted uppercase tracking-wider">AI & Software Developer</div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold text-forest bg-sage/80 px-2 py-0.5 rounded-md border border-sage-dark/40">
            <span className="w-1.5 h-1.5 rounded-full bg-forest pulse-dot" />
            Active
          </span>
        </div>
      </div>
    </div>
  );
}
