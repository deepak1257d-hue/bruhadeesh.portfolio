import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory/95 backdrop-blur-md border-b border-bordercol py-3 shadow-soft'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-ink hover:text-forest transition-colors cursor-pointer"
        >
          <span className="w-8 h-8 rounded-lg bg-forest text-ivory flex items-center justify-center font-heading font-bold text-sm tracking-tight transition-transform duration-300 group-hover:scale-105">
            BR
          </span>
          <div className="flex flex-col">
            <span className="font-heading font-semibold text-sm tracking-tight text-ink group-hover:text-forest transition-colors">
              Bruhadeesh Narayana R
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-muted">
              AI & Software Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono font-medium text-slate-muted hover:text-forest transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-forest after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA & Socials */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/bruhadeesh359-ctrl"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-muted hover:text-forest hover:bg-sage/40 rounded-lg transition-colors cursor-pointer"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/bruhadeesh-r-68871832b"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-muted hover:text-forest hover:bg-sage/40 rounded-lg transition-colors cursor-pointer"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-ivory bg-forest hover:bg-forest-hover rounded-lg transition-all shadow-sm hover:shadow cursor-pointer"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-ink hover:text-forest focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory border-b border-bordercol px-6 py-6 shadow-lift animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-ink hover:text-forest py-1.5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-bordercol flex flex-col gap-3">
              <div className="flex items-center gap-4 text-slate-muted">
                <a
                  href="https://github.com/bruhadeesh359-ctrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-ink hover:text-forest"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/bruhadeesh-r-68871832b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-ink hover:text-forest"
                >
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-ivory bg-forest hover:bg-forest-hover rounded-lg transition-all cursor-pointer"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
