'use client';

import React, { useState } from 'react';
import { Copy, Check, ArrowRight, ShieldCheck, Zap, Sparkles, Feather } from 'lucide-react';
import { Happy, Love, FrogHappy, Excited, Party, Cool, Laugh } from '../packages/react/src';

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
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20 border-b border-[#EBE7DF]">
      {/* Background Soft Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#FFE5EC]/70 via-[#E0F2FE]/60 to-[#FEF3C7]/60 blur-3xl opacity-70 rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating animated emoji pill strip */}
        <div className="inline-flex items-center gap-3 rounded-full border border-[#E8E2D7] bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-xs mb-8">
          <div className="flex -space-x-1 items-center">
            <span className="hover:scale-125 transition-transform duration-200 cursor-pointer">
              <Happy size={22} />
            </span>
            <span className="hover:scale-125 transition-transform duration-200 cursor-pointer">
              <Love size={22} />
            </span>
            <span className="hover:scale-125 transition-transform duration-200 cursor-pointer">
              <FrogHappy size={22} />
            </span>
            <span className="hover:scale-125 transition-transform duration-200 cursor-pointer">
              <Party size={22} />
            </span>
            <span className="hover:scale-125 transition-transform duration-200 cursor-pointer">
              <Cool size={22} />
            </span>
          </div>
          <span className="h-4 w-px bg-[#E2DDD3]" />
          <span className="text-xs font-semibold text-[#475569]">
            79 Custom Expressive Vector Emojis
          </span>
          <span className="rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5 text-[10px] font-bold">
            v1.1.0
          </span>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-[#1E1F24] sm:text-5xl lg:text-6xl">
          The Expressive SVG Emoji Library for{' '}
          <span className="bg-gradient-to-r from-[#FF4D6D] via-[#8B5CF6] to-[#0284C7] bg-clip-text text-transparent">
            Modern Web Apps
          </span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-[#52525B] leading-relaxed">
          Pixel-crafted, tree-shakeable SVG emojis designed with warm rosy cheeks, dynamic character expressions,
          and zero runtime overhead. Works with React, Vanilla JS, and all modern frameworks.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onExploreClick}
            className="flex items-center gap-2 rounded-xl bg-[#1E1F24] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#33353F] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="h-4 w-4 text-[#FFD166]" />
            Browse Emoji Gallery
            <ArrowRight className="h-4 w-4 ml-0.5 text-[#9CA3AF]" />
          </button>

          <button
            onClick={onOpenPlayground}
            className="flex items-center gap-2 rounded-xl border border-[#DCD6CA] bg-white px-5 py-3 text-sm font-semibold text-[#334155] shadow-xs hover:border-[#CBD5E1] hover:bg-[#FAF8F5] transition-all"
          >
            <Laugh className="h-4 w-4 text-[#FF5E7E]" />
            Interactive Playground
          </button>
        </div>

        {/* Quick Install Bar */}
        <div className="mt-10 mx-auto max-w-lg rounded-2xl border border-[#E8E2D7] bg-white p-3 shadow-xs">
          <div className="flex items-center justify-between gap-2 px-2">
            <span className="text-xs font-medium text-[#71717A]">Install React package:</span>
            <div className="flex items-center gap-1.5 font-mono text-xs text-[#1E1F24] bg-[#F7F5F0] px-3 py-1.5 rounded-lg border border-[#EAE4D8]">
              <span>npm i @kimo-emoji/react</span>
              <button
                onClick={() => copyCommand('npm i @kimo-emoji/react')}
                className="ml-2 text-[#64748B] hover:text-[#0F172A]"
                title="Copy command"
              >
                {copiedPkg === 'npm i @kimo-emoji/react' ? (
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Feature Highlights Bento Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="rounded-xl border border-[#EBE7DF] bg-white/70 p-4 shadow-2xs">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF0F3] text-[#FF4D6D] mb-2.5">
              <Feather className="h-4 w-4" />
            </div>
            <h3 className="text-sm font-bold text-[#1E1F24]">1.2 kB Tree-Shaken</h3>
            <p className="text-xs text-[#71717A] mt-0.5">Bundle only what you import with named exports.</p>
          </div>

          <div className="rounded-xl border border-[#EBE7DF] bg-white/70 p-4 shadow-2xs">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E0F2FE] text-[#0284C7] mb-2.5">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <h3 className="text-sm font-bold text-[#1E1F24]">Accessible (A11y)</h3>
            <p className="text-xs text-[#71717A] mt-0.5">Automated role=&quot;img&quot;, aria-label, &amp; decorative hiding.</p>
          </div>

          <div className="rounded-xl border border-[#EBE7DF] bg-white/70 p-4 shadow-2xs">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FEF3C7] text-[#D97706] mb-2.5">
              <Zap className="h-4 w-4" />
            </div>
            <h3 className="text-sm font-bold text-[#1E1F24]">Zero Dependencies</h3>
            <p className="text-xs text-[#71717A] mt-0.5">Pure SVG paths with 0 heavy runtime libraries.</p>
          </div>

          <div className="rounded-xl border border-[#EBE7DF] bg-white/70 p-4 shadow-2xs">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F0FDF4] text-[#16A34A] mb-2.5">
              <Sparkles className="h-4 w-4" />
            </div>
            <h3 className="text-sm font-bold text-[#1E1F24]">TypeScript Native</h3>
            <p className="text-xs text-[#71717A] mt-0.5">Complete IDE auto-complete for every emoji name.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
