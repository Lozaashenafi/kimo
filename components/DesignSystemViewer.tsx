'use client';

import React from 'react';
import { Layers, Palette, Sparkles, Grid, Eye } from 'lucide-react';
import { Happy, Love, FrogHappy, Starry, Fire } from '../packages/react/src';

export function DesignSystemViewer() {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-[65ch] mb-12">
        <h2 className="text-3xl font-bold text-[#1E1F24] tracking-tight sm:text-4xl">
          Design System
        </h2>
        <p className="mt-3 text-base text-[#52525B]">
          A mathematically consistent vector art guideline for maximum emotional resonance, clarity at 16px, and elegance on retina displays.
        </p>
      </div>

      {/* Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Rule 1 */}
        <div className="rounded-lg border border-[#E8E2D7] bg-white p-6">
          <div className="flex items-center gap-2.5 mb-3">
            <Grid className="h-5 w-5 text-[#52525B]" />
            <h3 className="text-base font-semibold text-[#1E1F24]">128×128 Integer Pixel Grid</h3>
          </div>
          <p className="text-xs text-[#64748B] leading-relaxed mb-4">
            All glyphs use a strict <code>0 0 128 128</code> coordinate system with 8px boundary padding to prevent clipping when rotating or scaling.
          </p>
          <div className="rounded bg-[#FAF8F5] border border-[#E8E2D7] p-4 flex items-center justify-around">
            <div className="text-center">
              <span className="text-[10px] font-mono text-[#94A3B8] block mb-1">16px</span>
              <Happy size={16} />
            </div>
            <div className="text-center">
              <span className="text-[10px] font-mono text-[#94A3B8] block mb-1">32px</span>
              <Happy size={32} />
            </div>
            <div className="text-center">
              <span className="text-[10px] font-mono text-[#94A3B8] block mb-1">64px</span>
              <Happy size={64} />
            </div>
            <div className="text-center">
              <span className="text-[10px] font-mono text-[#94A3B8] block mb-1">96px</span>
              <Happy size={96} />
            </div>
          </div>
        </div>

        {/* Rule 2 */}
        <div className="rounded-lg border border-[#E8E2D7] bg-white p-6">
          <div className="flex items-center gap-2.5 mb-3">
            <Sparkles className="h-5 w-5 text-[#52525B]" />
            <h3 className="text-base font-semibold text-[#1E1F24]">Signature Rosy Blush Cheeks</h3>
          </div>
          <p className="text-xs text-[#64748B] leading-relaxed mb-4">
            Each character features soft translucent pink blush ellipses (<code>#FFA3BA</code> or <code>#FF758F</code> with <code>opacity=&quot;0.65&quot;</code>) for friendly charm.
          </p>
          <div className="rounded bg-[#FAF8F5] border border-[#E8E2D7] p-4 flex items-center justify-around">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-[#FFA3BA]" />
              <span className="text-xs font-mono text-[#1E1F24]">#FFA3BA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-[#FF758F]" />
              <span className="text-xs font-mono text-[#1E1F24]">#FF758F</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-[#FFD1DC]" />
              <span className="text-xs font-mono text-[#1E1F24]">#FFD1DC</span>
            </div>
          </div>
        </div>

        {/* Rule 3 */}
        <div className="rounded-lg border border-[#E8E2D7] bg-white p-6">
          <div className="flex items-center gap-2.5 mb-3">
            <Eye className="h-5 w-5 text-[#52525B]" />
            <h3 className="text-base font-semibold text-[#1E1F24]">Dynamic Eye Highlights</h3>
          </div>
          <p className="text-xs text-[#64748B] leading-relaxed mb-4">
            Multi-point specular reflections with pure white circles (<code>#FFFFFF</code>) angled top-left to mimic natural lighting.
          </p>
          <div className="rounded bg-[#FAF8F5] border border-[#E8E2D7] p-4 flex items-center justify-around">
            <Love size={48} />
            <FrogHappy size={48} />
            <Starry size={48} />
            <Fire size={48} />
          </div>
        </div>

        {/* Rule 4 */}
        <div className="rounded-lg border border-[#E8E2D7] bg-white p-6">
          <div className="flex items-center gap-2.5 mb-3">
            <Palette className="h-5 w-5 text-[#52525B]" />
            <h3 className="text-base font-semibold text-[#1E1F24]">Obsidian Midnight Outlines</h3>
          </div>
          <p className="text-xs text-[#64748B] leading-relaxed mb-4">
            We use softened Obsidian Midnight <code>#1E1F24</code> instead of harsh pure black, with rounded line joins for warmth.
          </p>
          <div className="rounded bg-[#FAF8F5] border border-[#E8E2D7] p-4 flex items-center justify-around text-xs font-mono">
            <span className="text-[#1E1F24] font-medium">stroke: #1E1F24</span>
            <span className="text-[#1E1F24] font-medium">width: 4.5px</span>
            <span className="text-[#1E1F24] font-medium">linecap: round</span>
          </div>
        </div>
      </div>
    </div>
  );
}
