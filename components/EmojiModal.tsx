'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Copy,
  Check,
  Download,
  Tag,
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
  const [bgMode, setBgMode] = useState<'warm' | 'white' | 'dark'>('warm');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!emoji) return null;

  const componentName = toPascalCase(emoji.name);

  const getCodeSnippet = () => {
    switch (activeCodeTab) {
      case 'react-named':
        return `import { ${componentName} } from '@kimo-emoji/react';\n\nexport function MyComponent() {\n  return (\n    <${componentName}\n      size={48}\n      aria-label="${emoji.label}"\n    />\n  );\n}`;
      case 'react-generic':
        return `import { Emoji } from '@kimo-emoji/react';\n\nexport function MyComponent() {\n  return (\n    <Emoji\n      name="${emoji.name}"\n      size={48}\n      aria-label="${emoji.label}"\n    />\n  );\n}`;
      case 'vanilla-js':
        return `import { createEmoji } from '@kimo-emoji/core';\n\nconst emojiElement = createEmoji('${emoji.name}', {\n  size: 48,\n  ariaLabel: '${emoji.label}',\n});\n\ndocument.querySelector('#app')?.appendChild(emojiElement);`;
      case 'raw-svg':
        return emoji.svg;
      case 'data-uri': {
        const encodedSvg = encodeURIComponent(emoji.svg);
        return `<img\n  src="data:image/svg+xml;utf8,${encodedSvg}"\n  alt="${emoji.label}"\n  width="48"\n  height="48"\n/>`;
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
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50" onClick={onClose}>
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#FDFBF7] border border-[#E8E2D7] p-6 sm:p-8 text-[#1E1F24]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-md border border-[#E2DDD3] bg-white text-[#64748B] hover:text-[#0F172A] hover:bg-[#FAF8F5] transition-colors"
          title="Close (Esc)"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left: Preview */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="w-full flex items-center justify-between mb-3">
              <div className="flex items-center gap-0.5 bg-white p-0.5 rounded border border-[#DCD6CA] text-xs">
                {([
                  { id: 'warm' as const, label: 'Warm' },
                  { id: 'white' as const, label: 'Light' },
                  { id: 'dark' as const, label: 'Dark' },
                ]).map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setBgMode(id)}
                    className={`px-2 py-0.5 rounded text-xs ${bgMode === id ? 'bg-[#1E1F24] text-white font-medium' : 'text-[#64748B]'}`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setZoomSize((s) => Math.max(80, s - 30))}
                  className="p-1 rounded border border-[#E2DDD3] bg-white text-[#64748B] hover:text-[#0F172A]"
                >
                  <ZoomOut className="h-4 w-4" />
                </button>
                <span className="text-xs font-mono text-[#64748B] px-1">{zoomSize}px</span>
                <button
                  onClick={() => setZoomSize((s) => Math.min(220, s + 30))}
                  className="p-1 rounded border border-[#E2DDD3] bg-white text-[#64748B] hover:text-[#0F172A]"
                >
                  <ZoomIn className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className={`w-full aspect-square flex items-center justify-center rounded-lg border p-6 ${getCanvasClass()}`}>
              <Emoji name={emoji.name} size={zoomSize} />
            </div>

            <div className="w-full grid grid-cols-2 gap-2 mt-4">
              <button
                onClick={handleDownloadSvg}
                className="flex items-center justify-center gap-2 rounded-md bg-white border border-[#DCD6CA] py-2 px-3 text-xs font-medium text-[#1E1F24] hover:bg-[#FAF8F5] transition-colors"
              >
                <Download className="h-3.5 w-3.5" />
                Download SVG
              </button>
              <button
                onClick={handleDownloadPng}
                className="flex items-center justify-center gap-2 rounded-md bg-white border border-[#DCD6CA] py-2 px-3 text-xs font-medium text-[#1E1F24] hover:bg-[#FAF8F5] transition-colors"
              >
                <ImageIcon className="h-3.5 w-3.5" />
                PNG (512px)
              </button>
            </div>
          </div>

          {/* Right: Info & Code */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <h2 className="text-2xl font-bold text-[#1E1F24]">{emoji.label}</h2>
                <span className="text-[11px] font-mono text-[#94A3B8]">{emoji.category}</span>
                <span className="text-lg">{emoji.unicode || '✨'}</span>
              </div>
              <p className="text-xs font-mono text-[#71717A] mt-1">:{emoji.name}:</p>

              <div className="mt-3 flex flex-wrap gap-1.5 items-center">
                <Tag className="h-3.5 w-3.5 text-[#94A3B8]" />
                {emoji.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="rounded bg-[#F4F0E8] px-2 py-0.5 text-[11px] font-mono text-[#52525B]"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Code Tabs */}
            <div className="mt-6">
              <div className="flex items-center justify-between border-b border-[#E8E2D7] pb-2 mb-3">
                <div className="flex items-center gap-2 overflow-x-auto text-xs font-medium">
                  {([
                    { id: 'react-named' as const, label: `<${componentName} />` },
                    { id: 'react-generic' as const, label: '<Emoji />' },
                    { id: 'vanilla-js' as const, label: 'Vanilla JS' },
                    { id: 'raw-svg' as const, label: 'Raw SVG' },
                    { id: 'data-uri' as const, label: 'Data URI' },
                  ]).map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => setActiveCodeTab(id)}
                      className={`pb-1.5 border-b-2 transition-colors ${
                        activeCodeTab === id
                          ? 'border-[#1E1F24] text-[#1E1F24] font-semibold'
                          : 'border-transparent text-[#64748B] hover:text-[#1E1F24]'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 rounded-md bg-[#1E1F24] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#33353F] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#4ADE80]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative rounded-lg bg-[#1E1F24] p-4 text-xs font-mono text-[#E2E8F0] overflow-x-auto max-h-48">
                <pre><code>{getCodeSnippet()}</code></pre>
              </div>
            </div>

            {/* Related */}
            {relatedEmojis.length > 0 && (
              <div className="mt-6 pt-4 border-t border-[#E8E2D7]">
                <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                  More in {emoji.category}
                </span>
                <div className="mt-2.5 flex items-center gap-2 overflow-x-auto pb-1">
                  {relatedEmojis.map((rel) => (
                    <button
                      key={rel.name}
                      onClick={() => onSelectRelated(rel)}
                      className="flex items-center gap-2 rounded-md border border-[#E2DDD3] bg-white p-2 text-xs font-medium hover:bg-[#FAF8F5] transition-colors"
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
