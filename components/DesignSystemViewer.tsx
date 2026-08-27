'use client';

import React from 'react';
import { Layers, Palette, Sparkles, Grid, Eye, CheckCircle2 } from 'lucide-react';
import { Happy, Love, FrogHappy, Starry, Fire } from '../packages/react/src';

export function DesignSystemViewer() {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FEF3C7] px-3 py-1 text-xs font-semibold text-[#D97706] mb-3">
          <Layers className="h-3.5 w-3.5" />
          Design Guidelines & Specifications
        </div>
        <h2 className="text-3xl font-extrabold text-[#1E1F24] tracking-tight sm:text-4xl">
          The Kimo Emoji Design System
        </h2>
        <p className="mt-3 text-base text-[#52525B]">
          A mathematically consistent vector art guideline engineered for maximum emotional resonance, clarity at 16px, and elegance on retina displays.
        </p>
      </div>

      {/* Grid of Design Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Rule 1: Fixed 128x128 Viewbox */}
        <div className="rounded-3xl border border-[#E8E2D7] bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF0F3] text-[#FF4D6D]">
              <Grid className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1E1F24]">1. 128×128 Integer Pixel Grid</h3>
          </div>
          <p className="text-xs text-[#64748B] leading-relaxed mb-4">
            All glyphs are designed within a strict <code>0 0 128 128</code> coordinate system with 8px boundary padding to guarantee no clipping when rotating or scaling.
          </p>
          <div className="rounded-2xl bg-[#FAF8F5] border border-[#E8E2D7] p-4 flex items-center justify-around">
            <div className="text-center">
              <span className="text-[11px] font-mono text-[#94A3B8] block mb-1">Small (16px)</span>
              <Happy size={16} />
            </div>
            <div className="text-center">
              <span className="text-[11px] font-mono text-[#94A3B8] block mb-1">Standard (32px)</span>
              <Happy size={32} />
            </div>
            <div className="text-center">
              <span className="text-[11px] font-mono text-[#94A3B8] block mb-1">Display (64px)</span>
              <Happy size={64} />
            </div>
            <div className="text-center">
              <span className="text-[11px] font-mono text-[#94A3B8] block mb-1">Hero (96px)</span>
              <Happy size={96} />
            </div>
          </div>
        </div>

        {/* Rule 2: Signature Rosy Blush Cheeks */}
        <div className="rounded-3xl border border-[#E8E2D7] bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFE5EC] text-[#FF4D6D]">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1E1F24]">2. Signature Rosy Blush Cheeks</h3>
          </div>
          <p className="text-xs text-[#64748B] leading-relaxed mb-4">
            Each character features soft translucent pink blush ellipses (<code>#FFA3BA</code> or <code>#FF758F</code> with <code>opacity=&quot;0.65&quot;</code>) that create friendly, approachable charm.
          </p>
          <div className="rounded-2xl bg-[#FAF8F5] border border-[#E8E2D7] p-4 flex items-center justify-around">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-[#FFA3BA]" />
              <span className="text-xs font-mono font-semibold text-[#1E1F24]">#FFA3BA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-[#FF758F]" />
              <span className="text-xs font-mono font-semibold text-[#1E1F24]">#FF758F</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-[#FFD1DC]" />
              <span className="text-xs font-mono font-semibold text-[#1E1F24]">#FFD1DC</span>
            </div>
          </div>
        </div>

        {/* Rule 3: Expressive Manga & Anime Eye Physics */}
        <div className="rounded-3xl border border-[#E8E2D7] bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E0F2FE] text-[#0284C7]">
              <Eye className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1E1F24]">3. Dynamic Eye Highlights</h3>
          </div>
          <p className="text-xs text-[#64748B] leading-relaxed mb-4">
            Eyes incorporate multi-point specular reflections with pure white circles (<code>#FFFFFF</code>) angled top-left to mimic natural lighting.
          </p>
          <div className="rounded-2xl bg-[#FAF8F5] border border-[#E8E2D7] p-4 flex items-center justify-around">
            <Love size={48} />
            <FrogHappy size={48} />
            <Starry size={48} />
            <Fire size={48} />
          </div>
        </div>

        {/* Rule 4: Obsidian Midnight Outlines */}
        <div className="rounded-3xl border border-[#E8E2D7] bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F1EFE9] text-[#1E1F24]">
              <Palette className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1E1F24]">4. 4.5px Obsidian Midnight Lines</h3>
          </div>
          <p className="text-xs text-[#64748B] leading-relaxed mb-4">
            We avoid harsh pure black <code>#000000</code> in favor of softened Obsidian Midnight <code>#1E1F24</code> with rounded line joins for warmth and optical softness.
          </p>
          <div className="rounded-2xl bg-[#FAF8F5] border border-[#E8E2D7] p-4 flex items-center justify-around text-xs font-mono">
            <span className="text-[#1E1F24] font-bold">stroke: #1E1F24</span>
            <span className="text-[#1E1F24] font-bold">stroke-width: 4.5px</span>
            <span className="text-[#1E1F24] font-bold">stroke-linecap: round</span>
          </div>
        </div>
      </div>
    </div>
  );
}
