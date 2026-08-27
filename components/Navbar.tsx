'use client';

import React, { useState } from 'react';
import { Copy, Check, Sparkles, BookOpen, Terminal, Code2, Layers, Github } from 'lucide-react';
import { Happy } from '../packages/react/src';

interface NavbarProps {
  activeTab: 'explorer' | 'playground' | 'docs' | 'design';
  setActiveTab: (tab: 'explorer' | 'playground' | 'docs' | 'design') => void;
}

export function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('npm i @kimo-emoji/react');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#EBE7DF] bg-[#FDFBF7]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('explorer')}
            className="flex items-center gap-2.5 text-left focus:outline-none"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF0F3] border border-[#FFD1DC] shadow-sm transition-transform hover:scale-105">
              <Happy size={26} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tight text-[#1E1F24]">Kimo Emoji</span>
                <span className="rounded-full bg-[#FFE5EC] px-2 py-0.5 text-[11px] font-semibold text-[#FF4D6D]">
                  v1.1.0
                </span>
              </div>
              <p className="hidden text-xs text-[#71717A] sm:block">Open-Source SVG Emoji Library</p>
            </div>
          </button>
        </div>

        {/* Center Nav Tabs */}
        <nav className="hidden md:flex items-center gap-1 rounded-xl bg-[#F4F0E8] p-1 border border-[#E8E2D7]">
          <button
            onClick={() => setActiveTab('explorer')}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all ${
              activeTab === 'explorer'
                ? 'bg-white text-[#1E1F24] shadow-xs'
                : 'text-[#64748B] hover:text-[#1E1F24]'
            }`}
          >
            <Sparkles className="h-4 w-4 text-[#FF5E7E]" />
            Explorer
          </button>
          <button
            onClick={() => setActiveTab('playground')}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all ${
              activeTab === 'playground'
                ? 'bg-white text-[#1E1F24] shadow-xs'
                : 'text-[#64748B] hover:text-[#1E1F24]'
            }`}
          >
            <Code2 className="h-4 w-4 text-[#4CC9F0]" />
            Playground
          </button>
          <button
            onClick={() => setActiveTab('docs')}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all ${
              activeTab === 'docs'
                ? 'bg-white text-[#1E1F24] shadow-xs'
                : 'text-[#64748B] hover:text-[#1E1F24]'
            }`}
          >
            <BookOpen className="h-4 w-4 text-[#80B918]" />
            Documentation
          </button>
          <button
            onClick={() => setActiveTab('design')}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all ${
              activeTab === 'design'
                ? 'bg-white text-[#1E1F24] shadow-xs'
                : 'text-[#64748B] hover:text-[#1E1F24]'
            }`}
          >
            <Layers className="h-4 w-4 text-[#FFB703]" />
            Design System
          </button>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleCopyInstall}
            className="flex items-center gap-2 rounded-lg border border-[#E2DDD3] bg-white px-3 py-1.5 text-xs font-mono text-[#334155] shadow-xs hover:border-[#CBD5E1] transition-all"
            title="Copy install command"
          >
            <Terminal className="h-3.5 w-3.5 text-[#64748B]" />
            <span className="hidden sm:inline">npm i @kimo-emoji/react</span>
            <span className="sm:hidden">npm i</span>
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-600" />
            ) : (
              <Copy className="h-3.5 w-3.5 text-[#94A3B8]" />
            )}
          </button>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E2DDD3] bg-white text-[#475569] shadow-xs hover:text-[#0F172A] hover:border-[#CBD5E1] transition-colors"
            title="GitHub Repository"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Mobile Nav Bar */}
      <div className="flex md:hidden border-t border-[#EBE7DF] bg-[#FAF7F0] px-4 py-2 justify-around">
        <button
          onClick={() => setActiveTab('explorer')}
          className={`text-xs font-medium px-3 py-1 rounded-md ${
            activeTab === 'explorer' ? 'bg-white text-[#1E1F24] shadow-xs font-semibold' : 'text-[#64748B]'
          }`}
        >
          Explorer
        </button>
        <button
          onClick={() => setActiveTab('playground')}
          className={`text-xs font-medium px-3 py-1 rounded-md ${
            activeTab === 'playground' ? 'bg-white text-[#1E1F24] shadow-xs font-semibold' : 'text-[#64748B]'
          }`}
        >
          Playground
        </button>
        <button
          onClick={() => setActiveTab('docs')}
          className={`text-xs font-medium px-3 py-1 rounded-md ${
            activeTab === 'docs' ? 'bg-white text-[#1E1F24] shadow-xs font-semibold' : 'text-[#64748B]'
          }`}
        >
          Docs
        </button>
        <button
          onClick={() => setActiveTab('design')}
          className={`text-xs font-medium px-3 py-1 rounded-md ${
            activeTab === 'design' ? 'bg-white text-[#1E1F24] shadow-xs font-semibold' : 'text-[#64748B]'
          }`}
        >
          Design
        </button>
      </div>
    </header>
  );
}
