'use client';

import React from 'react';
import { Github, Terminal } from 'lucide-react';
import { Happy } from '../packages/react/src';

interface FooterProps {
  onNavigate: (tab: 'explorer' | 'playground' | 'docs' | 'design') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-[#EBE7DF] bg-[#FAF7F0] py-10 text-[#64748B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E2DDD3] bg-white">
              <Happy size={22} />
            </div>
            <div>
              <span className="text-sm font-semibold text-[#1E1F24]">Kimo Emoji</span>
              <p className="text-xs text-[#71717A] mt-0.5">
                Open-source SVG emoji library for web applications.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#475569]">
            <button onClick={() => onNavigate('explorer')} className="hover:text-[#1E1F24] transition-colors">
              Explorer
            </button>
            <button onClick={() => onNavigate('playground')} className="hover:text-[#1E1F24] transition-colors">
              Playground
            </button>
            <button onClick={() => onNavigate('docs')} className="hover:text-[#1E1F24] transition-colors">
              Documentation
            </button>
            <button onClick={() => onNavigate('design')} className="hover:text-[#1E1F24] transition-colors">
              Design System
            </button>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 border-t border-[#EAE4D8] pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8] gap-3">
          <span>Released under MIT License.</span>
          <div className="flex items-center gap-3">
            <span>Core v1.1.5</span>
            <span>·</span>
            <span>React v1.1.5</span>
            <span>·</span>
            <span className="font-mono">@kimo-emoji/react</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
