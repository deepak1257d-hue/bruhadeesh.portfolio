import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-darkbg border-t border-darkbg-border text-slate-subtle">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-forest text-ivory flex items-center justify-center font-heading font-bold text-xs">
              BR
            </span>
            <span className="font-heading font-semibold text-sm text-ivory">
              Bruhadeesh Narayana R
            </span>
          </div>
          <p className="text-xs text-slate-subtle mt-1 font-mono">
            "Building intelligent systems. Engineering practical solutions."
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono">
          <a
            href="https://github.com/bruhadeesh359-ctrl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ivory transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bruhadeesh-r-68871832b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ivory transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            LinkedIn
          </a>
          <a
            href="mailto:bruhadeesh.personal@gmail.com"
            className="hover:text-ivory transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-darkbg-card hover:bg-forest-dark text-ivory transition-colors flex items-center gap-1 ml-2"
            title="Scroll to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[11px]">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
