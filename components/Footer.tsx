'use client';

import React from 'react';
import { Heart, Github, Terminal, Sparkles, BookOpen } from 'lucide-react';
import { Happy } from '../packages/react/src';

interface FooterProps {
  onNavigate: (tab: 'explorer' | 'playground' | 'docs' | 'design') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-[#EBE7DF] bg-[#FAF7F0] py-12 text-[#64748B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand and Description */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#E2DDD3] shadow-xs">
              <Happy size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#1E1F24]">Kimo SVG Emoji UI Library</span>
                <span className="rounded-full bg-[#FFE5EC] px-2 py-0.2 text-[10px] font-semibold text-[#FF4D6D]">
                  v1.1.0
                </span>
              </div>
              <p className="text-xs text-[#71717A] mt-0.5">
                Open-source, tree-shakeable vector icons and emoji system for web applications.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#475569]">
            <button
              onClick={() => onNavigate('explorer')}
              className="hover:text-[#1E1F24] transition-colors"
            >
              Emoji Explorer
            </button>
            <button
              onClick={() => onNavigate('playground')}
              className="hover:text-[#1E1F24] transition-colors"
            >
              Playground
            </button>
            <button
              onClick={() => onNavigate('docs')}
              className="hover:text-[#1E1F24] transition-colors"
            >
              Documentation
            </button>
            <button
              onClick={() => onNavigate('design')}
              className="hover:text-[#1E1F24] transition-colors"
            >
              Design System
            </button>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 border-t border-[#EAE4D8] pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8] gap-3">
          <div className="flex items-center gap-1.5">
            <span>Built with</span>
            <Heart className="h-3.5 w-3.5 text-[#FF4D6D] fill-[#FF4D6D]" />
            <span>for the open source web community. Released under MIT License.</span>
          </div>

          <div className="flex items-center gap-3">
            <span>Core v1.1.0</span>
            <span>•</span>
            <span>React v1.1.0</span>
            <span>•</span>
            <span className="font-mono">npm: @kimo-emoji/react</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
