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
    <header className="sticky top-0 z-40 w-full border-b border-[#EBE7DF] bg-[#FDFBF7]">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setActiveTab('explorer')}
            className="flex items-center gap-2 text-left focus:outline-none"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E8E2D7] bg-white">
              <Happy size={24} />
            </div>
            <div>
              <span className="text-base font-bold tracking-tight text-[#1E1F24]">Kimo Emoji</span>
              <span className="ml-2 text-[10px] font-medium text-[#94A3B8]">v1.1.5</span>
            </div>
          </button>
        </div>

        {/* Center Nav Tabs — single icon color, no rainbow */}
        <nav className="hidden md:flex items-center gap-0.5 rounded-lg bg-[#F4F0E8] p-0.5 border border-[#E8E2D7]">
          {([
            { id: 'explorer' as const, label: 'Explorer', Icon: Sparkles },
            { id: 'playground' as const, label: 'Playground', Icon: Code2 },
            { id: 'docs' as const, label: 'Documentation', Icon: BookOpen },
            { id: 'design' as const, label: 'Design System', Icon: Layers },
          ]).map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                activeTab === id
                  ? 'bg-white text-[#1E1F24]'
                  : 'text-[#64748B] hover:text-[#1E1F24]'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyInstall}
            className="flex items-center gap-2 rounded-md border border-[#E2DDD3] bg-white px-3 py-1.5 text-xs font-mono text-[#334155] hover:border-[#CBD5E1] transition-colors"
            title="Copy install command"
          >
            <Terminal className="h-3.5 w-3.5 text-[#64748B]" />
            <span className="hidden sm:inline">npm i @kimo-emoji/react</span>
            <span className="sm:hidden">npm i</span>
            {copied ? (
              <Check className="h-3.5 w-3.5 text-[#16A34A]" />
            ) : (
              <Copy className="h-3.5 w-3.5 text-[#94A3B8]" />
            )}
          </button>

          <a
            href="https://github.com/Lozaashenafi/kimo"
            target="_blank"
            rel="noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E2DDD3] bg-white text-[#475569] hover:text-[#0F172A] hover:border-[#CBD5E1] transition-colors"
            title="GitHub Repository"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="flex md:hidden border-t border-[#EBE7DF] bg-[#FAF7F0] px-4 py-2 justify-around">
        {([
          { id: 'explorer' as const, label: 'Explorer' },
          { id: 'playground' as const, label: 'Playground' },
          { id: 'docs' as const, label: 'Docs' },
          { id: 'design' as const, label: 'Design' },
        ]).map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`text-xs font-medium px-3 py-1 rounded ${
              activeTab === id ? 'bg-white text-[#1E1F24] font-semibold' : 'text-[#64748B]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </header>
  );
}
