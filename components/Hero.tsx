'use client';

import React, { useState } from 'react';
import { Copy, Check, ArrowRight, ShieldCheck, Zap, Feather } from 'lucide-react';
import { Happy, Love, FrogHappy, Excited, Party, Cool } from '../packages/react/src';

interface HeroProps {
  onExploreClick: () => void;
  onOpenPlayground: () => void;
}

export function Hero({ onExploreClick, onOpenPlayground }: HeroProps) {
  const [copiedPkg, setCopiedPkg] = useState<string | null>(null);

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedPkg(cmd);
    setTimeout(() => setCopiedPkg(null), 2000);
  };

  return (
    <section className="pt-12 pb-14 md:pt-16 md:pb-18 border-b border-[#EBE7DF]">
      <div className="mx-auto max-w-[72ch] px-4 sm:px-6 text-center">
        {/* Emoji pill strip */}
        <div className="inline-flex items-center gap-3 rounded-full border border-[#E8E2D7] bg-white px-4 py-1.5 mb-8">
          <div className="flex -space-x-1 items-center">
            <span className="cursor-pointer"><Happy size={22} /></span>
            <span className="cursor-pointer"><Love size={22} /></span>
            <span className="cursor-pointer"><FrogHappy size={22} /></span>
            <span className="cursor-pointer"><Party size={22} /></span>
            <span className="cursor-pointer"><Cool size={22} /></span>
          </div>
          <span className="h-4 w-px bg-[#E2DDD3]" />
          <span className="text-xs font-medium text-[#52525B]">
            84 Custom Expressive Vector Emojis
          </span>
        </div>

        {/* Headline — plain text, no gradient */}
        <h1 className="text-4xl font-bold tracking-tight text-[#1E1F24] sm:text-5xl lg:text-6xl">
          The Expressive SVG Emoji Library for Modern Web Apps
        </h1>

        {/* Subheading */}
        <p className="mt-5 max-w-[65ch] mx-auto text-base sm:text-lg text-[#52525B] leading-relaxed">
          Pixel-crafted, tree-shakeable SVG emojis designed with warm rosy cheeks, dynamic character expressions,
          and zero runtime overhead. Works with React, Vanilla JS, and all modern frameworks.
        </p>

        {/* CTA Buttons — no scale animations */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onExploreClick}
            className="flex items-center gap-2 rounded-lg bg-[#1E1F24] px-6 py-3 text-sm font-semibold text-white hover:bg-[#33353F] transition-colors"
          >
            Browse Emoji Gallery
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            onClick={onOpenPlayground}
            className="flex items-center gap-2 rounded-lg border border-[#DCD6CA] bg-white px-5 py-3 text-sm font-semibold text-[#334155] hover:bg-[#FAF8F5] transition-colors"
          >
            Interactive Playground
          </button>
        </div>

        {/* Install Bar */}
        <div className="mt-10 mx-auto max-w-md rounded-lg border border-[#E8E2D7] bg-white p-3">
          <div className="flex items-center justify-between gap-2 px-2">
            <span className="text-xs font-medium text-[#71717A]">Install:</span>
            <div className="flex items-center gap-1.5 font-mono text-xs text-[#1E1F24] bg-[#F7F5F0] px-3 py-1.5 rounded border border-[#EAE4D8]">
              <span>npm i @kimo-emoji/react</span>
              <button
                onClick={() => copyCommand('npm i @kimo-emoji/react')}
                className="ml-2 text-[#64748B] hover:text-[#0F172A]"
                title="Copy command"
              >
                {copiedPkg === 'npm i @kimo-emoji/react' ? (
                  <Check className="h-3.5 w-3.5 text-[#16A34A]" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
