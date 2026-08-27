'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Copy,
  Check,
  Download,
  Code2,
  FileCode,
  Tag,
  Sparkles,
  Layers,
  ArrowUpRight,
  Maximize2,
  ZoomIn,
  ZoomOut,
  Image as ImageIcon,
} from 'lucide-react';
import { EmojiData, listEmojis } from '../packages/core/src';
import { Emoji } from '../packages/react/src';

interface EmojiModalProps {
  emoji: EmojiData | null;
  onClose: () => void;
  onSelectRelated: (emoji: EmojiData) => void;
}

type CodeTab = 'react-named' | 'react-generic' | 'vanilla-js' | 'raw-svg' | 'data-uri';

function toPascalCase(str: string): string {
  return str
    .split(/[-_]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join('');
}

export function EmojiModal({ emoji, onClose, onSelectRelated }: EmojiModalProps) {
  const [activeCodeTab, setActiveCodeTab] = useState<CodeTab>('react-named');
  const [copied, setCopied] = useState(false);
  const [zoomSize, setZoomSize] = useState<number>(140);
  const [bgMode, setBgMode] = useState<'warm' | 'white' | 'dark' | 'grid'>('warm');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!emoji) return null;

  const componentName = toPascalCase(emoji.name);

  // Generate code snippets
  const getCodeSnippet = () => {
    switch (activeCodeTab) {
      case 'react-named':
        return `import { ${componentName} } from '@kimo-emoji/react';

export function MyComponent() {
  return (
    <${componentName} 
      size={48} 
      className="hover:scale-110 transition-transform" 
      aria-label="${emoji.label}" 
    />
  );
}`;
      case 'react-generic':
        return `import { Emoji } from '@kimo-emoji/react';

export function MyComponent() {
  return (
    <Emoji 
      name="${emoji.name}" 
      size={48} 
      aria-label="${emoji.label}" 
    />
  );
}`;
      case 'vanilla-js':
        return `import { createEmoji } from '@kimo-emoji/core';

// Create a native HTML element
const emojiElement = createEmoji('${emoji.name}', {
  size: 48,
  ariaLabel: '${emoji.label}',
  onClick: () => console.log('Clicked ${emoji.label}!'),
});

document.querySelector('#app')?.appendChild(emojiElement);`;
      case 'raw-svg':
        return emoji.svg;
      case 'data-uri': {
        const encodedSvg = encodeURIComponent(emoji.svg);
        return `<img 
  src="data:image/svg+xml;utf8,${encodedSvg}" 
  alt="${emoji.label}" 
  width="48" 
  height="48" 
/>`;
      }
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCodeSnippet());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadSvg = () => {
    const blob = new Blob([emoji.svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${emoji.name}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadPng = () => {
    const canvas = document.createElement('canvas');
    const size = 512;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    const svgBlob = new Blob([emoji.svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.clearRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);
      URL.revokeObjectURL(url);

      const pngUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `${emoji.name}-512px.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };
    img.src = url;
  };

  // Find related emojis in the same category
  const relatedEmojis = listEmojis()
    .filter((e) => e.category === emoji.category && e.name !== emoji.name)
    .slice(0, 5);

  const getCanvasClass = () => {
    switch (bgMode) {
      case 'warm':
        return 'bg-[#FAF7F0] border-[#E8E2D7]';
      case 'white':
        return 'bg-white border-[#E2DDD3]';
      case 'dark':
        return 'bg-[#1E1F24] border-[#33353F] text-white';
      case 'grid':
        return 'bg-[#F8FAFC] border-[#E2E8F0] bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px]';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FDFBF7] border border-[#E8E2D7] shadow-2xl p-6 sm:p-8 text-[#1E1F24]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-[#E2DDD3] text-[#64748B] hover:text-[#0F172A] hover:bg-[#FAF8F5] transition-colors shadow-2xs"
          title="Close (Esc)"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Grid: Left Preview Canvas, Right Code & Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Scalable Preview & Download */}
          <div className="md:col-span-5 flex flex-col items-center">
            {/* Top Preview Controls */}
            <div className="w-full flex items-center justify-between mb-3">
              <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-[#DCD6CA] text-xs">
                <button
                  onClick={() => setBgMode('warm')}
                  className={`px-2 py-0.5 rounded-md ${bgMode === 'warm' ? 'bg-[#FAF7F0] font-bold' : ''}`}
                >
                  Warm
                </button>
                <button
                  onClick={() => setBgMode('white')}
                  className={`px-2 py-0.5 rounded-md ${bgMode === 'white' ? 'bg-white font-bold' : ''}`}
                >
                  Light
                </button>
                <button
                  onClick={() => setBgMode('dark')}
                  className={`px-2 py-0.5 rounded-md ${bgMode === 'dark' ? 'bg-[#1E1F24] text-white font-bold' : ''}`}
                >
                  Dark
                </button>
                <button
                  onClick={() => setBgMode('grid')}
                  className={`px-2 py-0.5 rounded-md ${bgMode === 'grid' ? 'bg-slate-100 font-bold' : ''}`}
                >
                  Grid
                </button>
              </div>

              {/* Zoom Buttons */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setZoomSize((s) => Math.max(80, s - 30))}
                  className="p-1 rounded-lg border border-[#E2DDD3] bg-white text-[#64748B] hover:text-[#0F172A]"
                  title="Zoom Out"
                >
                  <ZoomOut className="h-4 w-4" />
                </button>
                <span className="text-xs font-mono font-medium text-[#64748B] px-1">{zoomSize}px</span>
                <button
                  onClick={() => setZoomSize((s) => Math.min(220, s + 30))}
                  className="p-1 rounded-lg border border-[#E2DDD3] bg-white text-[#64748B] hover:text-[#0F172A]"
                  title="Zoom In"
                >
                  <ZoomIn className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Visual Canvas Box */}
            <div
              className={`w-full aspect-square flex items-center justify-center rounded-2xl border p-6 transition-all shadow-inner ${getCanvasClass()}`}
            >
              <div className="transition-transform duration-200 hover:scale-105">
                <Emoji name={emoji.name} size={zoomSize} />
              </div>
            </div>

            {/* Quick Export Downloads */}
            <div className="w-full grid grid-cols-2 gap-2 mt-4">
              <button
                onClick={handleDownloadSvg}
                className="flex items-center justify-center gap-2 rounded-xl bg-white border border-[#DCD6CA] py-2.5 px-3 text-xs font-semibold text-[#1E1F24] shadow-xs hover:border-[#CBD5E1] hover:bg-[#FAF8F5] transition-all"
              >
                <Download className="h-3.5 w-3.5 text-[#FF5E7E]" />
                Download SVG
              </button>

              <button
                onClick={handleDownloadPng}
                className="flex items-center justify-center gap-2 rounded-xl bg-white border border-[#DCD6CA] py-2.5 px-3 text-xs font-semibold text-[#1E1F24] shadow-xs hover:border-[#CBD5E1] hover:bg-[#FAF8F5] transition-all"
              >
                <ImageIcon className="h-3.5 w-3.5 text-[#0284C7]" />
                PNG (512px)
              </button>
            </div>
          </div>

          {/* Right Column: Information & Code Snippets */}
          <div className="md:col-span-7 flex flex-col justify-between">
            {/* Title & Metadata Pills */}
            <div>
              <div className="flex items-center gap-2.5">
                <h2 className="text-2xl font-extrabold text-[#1E1F24]">{emoji.label}</h2>
                <span className="rounded-full bg-[#FFE5EC] px-2.5 py-0.5 text-xs font-semibold text-[#FF4D6D]">
                  {emoji.category}
                </span>
                <span className="text-xl">{emoji.unicode || '✨'}</span>
              </div>
              <p className="text-xs font-mono text-[#71717A] mt-1">:{emoji.name}:</p>

              {/* Keywords Tags */}
              <div className="mt-3 flex flex-wrap gap-1.5 items-center">
                <Tag className="h-3.5 w-3.5 text-[#94A3B8]" />
                {emoji.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="rounded-md bg-[#F4F0E8] px-2 py-0.5 text-[11px] font-mono text-[#52525B]"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Code Snippets Section */}
            <div className="mt-6">
              {/* Code Format Tabs */}
              <div className="flex items-center justify-between border-b border-[#E8E2D7] pb-2 mb-3">
                <div className="flex items-center gap-2 overflow-x-auto text-xs font-medium">
                  <button
                    onClick={() => setActiveCodeTab('react-named')}
                    className={`pb-1.5 border-b-2 transition-all ${
                      activeCodeTab === 'react-named'
                        ? 'border-[#FF5E7E] text-[#1E1F24] font-bold'
                        : 'border-transparent text-[#64748B] hover:text-[#1E1F24]'
                    }`}
                  >
                    &lt;{componentName} /&gt;
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('react-generic')}
                    className={`pb-1.5 border-b-2 transition-all ${
                      activeCodeTab === 'react-generic'
                        ? 'border-[#FF5E7E] text-[#1E1F24] font-bold'
                        : 'border-transparent text-[#64748B] hover:text-[#1E1F24]'
                    }`}
                  >
                    &lt;Emoji /&gt;
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('vanilla-js')}
                    className={`pb-1.5 border-b-2 transition-all ${
                      activeCodeTab === 'vanilla-js'
                        ? 'border-[#FF5E7E] text-[#1E1F24] font-bold'
                        : 'border-transparent text-[#64748B] hover:text-[#1E1F24]'
                    }`}
                  >
                    Vanilla JS
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('raw-svg')}
                    className={`pb-1.5 border-b-2 transition-all ${
                      activeCodeTab === 'raw-svg'
                        ? 'border-[#FF5E7E] text-[#1E1F24] font-bold'
                        : 'border-transparent text-[#64748B] hover:text-[#1E1F24]'
                    }`}
                  >
                    Raw SVG
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('data-uri')}
                    className={`pb-1.5 border-b-2 transition-all ${
                      activeCodeTab === 'data-uri'
                        ? 'border-[#FF5E7E] text-[#1E1F24] font-bold'
                        : 'border-transparent text-[#64748B] hover:text-[#1E1F24]'
                    }`}
                  >
                    Data URI
                  </button>
                </div>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 rounded-lg bg-[#1E1F24] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#33353F] transition-all shadow-xs"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Box Display */}
              <div className="relative rounded-2xl bg-[#1E1F24] p-4 text-xs font-mono text-[#E2E8F0] overflow-x-auto shadow-md max-h-48 scrollbar-thin">
                <pre>
                  <code>{getCodeSnippet()}</code>
                </pre>
              </div>
            </div>

            {/* Related Emojis Section */}
            {relatedEmojis.length > 0 && (
              <div className="mt-6 pt-4 border-t border-[#E8E2D7]">
                <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">
                  More in {emoji.category}
                </span>
                <div className="mt-2.5 flex items-center gap-2 overflow-x-auto pb-1">
                  {relatedEmojis.map((rel) => (
                    <button
                      key={rel.name}
                      onClick={() => onSelectRelated(rel)}
                      className="flex items-center gap-2 rounded-xl border border-[#E2DDD3] bg-white p-2 text-xs font-medium hover:border-[#FF5E7E] hover:bg-[#FFF0F3] transition-all"
                    >
                      <Emoji name={rel.name} size={24} />
                      <span className="text-xs font-semibold text-[#1E1F24]">{rel.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
