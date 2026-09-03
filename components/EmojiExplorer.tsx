'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  Copy,
  Check,
  Download,
  Info,
  Maximize2,
  X,
  Smile,
} from 'lucide-react';
import { listEmojis, searchEmojis, EmojiData, EmojiCategory } from '../packages/core/src';
import { Emoji } from '../packages/react/src';

interface EmojiExplorerProps {
  onSelectEmoji: (emoji: EmojiData) => void;
}

type CanvasTheme = 'light' | 'warm' | 'dark' | 'pink';
type ExportFormat = 'react-named' | 'react-generic' | 'vanilla-js' | 'raw-svg';

const CATEGORIES: Array<{ id: 'all' | EmojiCategory; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'faces', label: 'Faces' },
  { id: 'emotions', label: 'Emotions' },
  { id: 'reactions', label: 'Reactions' },
  { id: 'animals', label: 'Animals' },
  { id: 'food', label: 'Food & Drinks' },
  { id: 'gestures', label: 'Gestures' },
  { id: 'love', label: 'Love' },
  { id: 'fun', label: 'Fun' },
  { id: 'objects', label: 'Objects' },
  { id: 'symbols', label: 'Symbols' },
];

function toPascalCase(str: string): string {
  return str
    .split(/[-_]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join('');
}

export function EmojiExplorer({ onSelectEmoji }: EmojiExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | EmojiCategory>('all');
  const [previewSize, setPreviewSize] = useState<number>(48);
  const [canvasTheme, setCanvasTheme] = useState<CanvasTheme>('warm');
  const [exportFormat, setExportFormat] = useState<ExportFormat>('react-named');
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const filteredEmojis = useMemo(() => {
    let list = listEmojis();
    if (selectedCategory !== 'all') {
      list = list.filter((e) => e.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      list = searchEmojis(searchQuery, {
        category: selectedCategory === 'all' ? undefined : selectedCategory,
      });
    }
    return list;
  }, [searchQuery, selectedCategory]);

  const handleCopyCode = (emoji: EmojiData, e: React.MouseEvent) => {
    e.stopPropagation();
    const componentName = toPascalCase(emoji.name);
    let code = '';

    switch (exportFormat) {
      case 'react-named':
        code = `<${componentName} size={${previewSize}} />`;
        break;
      case 'react-generic':
        code = `<Emoji name="${emoji.name}" size={${previewSize}} />`;
        break;
      case 'vanilla-js':
        code = `createEmoji('${emoji.name}', { size: ${previewSize} })`;
        break;
      case 'raw-svg':
        code = emoji.svg;
        break;
    }

    navigator.clipboard.writeText(code);
    setCopiedName(emoji.name);
    setTimeout(() => setCopiedName(null), 1800);
  };

  const handleDownloadSvg = (emoji: EmojiData, e: React.MouseEvent) => {
    e.stopPropagation();
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

  const getCanvasBgClass = () => {
    switch (canvasTheme) {
      case 'light':
        return 'bg-white border-[#E2DDD3]';
      case 'warm':
        return 'bg-[#FAF7F0] border-[#EAE4D8]';
      case 'dark':
        return 'bg-[#1E1F24] border-[#33353F] text-white';
      case 'pink':
        return 'bg-[#FFF0F3] border-[#FFD1DC]';
    }
  };

  return (
    <section id="explorer-section" className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Controls */}
      <div className="space-y-4 mb-8">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or keyword..."
              className="w-full rounded-lg border border-[#DCD6CA] bg-white pl-9 pr-9 py-2.5 text-sm text-[#1E1F24] placeholder-[#94A3B8] focus:border-[#FF5E7E] focus:ring-1 focus:ring-[#FF5E7E]/20 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#475569]"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Export format selector — plain text buttons, no dark bg toggle */}
            <div className="flex items-center rounded-lg border border-[#DCD6CA] p-0.5 text-xs">
              {([
                { id: 'react-named' as const, label: '<Happy />' },
                { id: 'react-generic' as const, label: '<Emoji />' },
                { id: 'vanilla-js' as const, label: 'JS DOM' },
                { id: 'raw-svg' as const, label: 'Raw SVG' },
              ]).map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setExportFormat(id)}
                  className={`px-2.5 py-1 rounded font-medium transition-colors ${
                    exportFormat === id
                      ? 'bg-[#1E1F24] text-white'
                      : 'text-[#64748B] hover:text-[#1E1F24]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Canvas theme — small swatches, no ring highlight */}
            <div className="flex items-center rounded-lg border border-[#DCD6CA] p-0.5 gap-1">
              {([
                { id: 'warm' as const, bg: 'bg-[#FAF7F0]' },
                { id: 'light' as const, bg: 'bg-white' },
                { id: 'dark' as const, bg: 'bg-[#1E1F24]' },
                { id: 'pink' as const, bg: 'bg-[#FFF0F3]' },
              ]).map(({ id, bg }) => (
                <button
                  key={id}
                  onClick={() => setCanvasTheme(id)}
                  className={`h-5 w-5 rounded border ${
                    canvasTheme === id ? 'border-[#1E1F24]' : 'border-[#E2DDD3]'
                  } ${bg}`}
                  title={id}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Categories + Size */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-1">
          <div className="flex items-center gap-1 overflow-x-auto pb-1">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count =
                cat.id === 'all'
                  ? listEmojis().length
                  : listEmojis().filter((e) => e.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1.5 whitespace-nowrap rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#1E1F24] text-white'
                      : 'bg-white text-[#475569] border border-[#E2DDD3] hover:text-[#0F172A]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] ${isActive ? 'text-white/60' : 'text-[#94A3B8]'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 bg-white border border-[#DCD6CA] px-3 py-1.5 rounded-lg self-start md:self-auto">
            <span className="text-xs font-medium text-[#64748B]">Size:</span>
            <input
              type="range"
              min="20"
              max="96"
              step="4"
              value={previewSize}
              onChange={(e) => setPreviewSize(Number(e.target.value))}
              className="w-24 accent-[#FF5E7E] cursor-pointer"
            />
            <span className="text-xs font-mono font-medium text-[#1E1F24] w-9 text-right">
              {previewSize}px
            </span>
          </div>
        </div>
      </div>

      {/* Emoji Grid */}
      {filteredEmojis.length === 0 ? (
        <div className="rounded-lg border border-[#E8E2D7] bg-white p-12 text-center my-8">
          <Smile className="mx-auto h-10 w-10 text-[#94A3B8] mb-3" />
          <h3 className="text-sm font-semibold text-[#1E1F24]">No emojis found</h3>
          <p className="text-xs text-[#64748B] mt-1">
            No emojis match &quot;{searchQuery}&quot;. Try &quot;happy&quot;, &quot;frog&quot;, or &quot;party&quot;.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-4 rounded-md bg-[#1E1F24] px-4 py-2 text-xs font-semibold text-white"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredEmojis.map((emoji) => {
            const isCopied = copiedName === emoji.name;
            const componentName = toPascalCase(emoji.name);

            return (
              <div
                key={emoji.name}
                onClick={() => onSelectEmoji(emoji)}
                className={`group relative flex flex-col items-center justify-between rounded-lg border p-3 cursor-pointer transition-colors hover:bg-[#FAF8F5] ${getCanvasBgClass()}`}
              >
                {/* Category tag */}
                <div className="w-full flex items-center justify-between text-[10px] font-mono text-[#94A3B8]">
                  <span className="truncate max-w-[80px] uppercase tracking-wider">
                    {emoji.category}
                  </span>
                  <span>{emoji.unicode || '✨'}</span>
                </div>

                {/* Emoji preview */}
                <div className="my-3 flex items-center justify-center h-20 w-full">
                  <Emoji name={emoji.name} size={previewSize} />
                </div>

                {/* Label */}
                <div className="w-full text-center">
                  <div className="text-xs font-semibold text-inherit truncate">{emoji.label}</div>
                  <div className="text-[11px] font-mono text-[#94A3B8] truncate mt-0.5">
                    :{emoji.name}:
                  </div>
                </div>

                {/* Hover actions — no glassmorphism, no scale animation */}
                <div className="absolute inset-x-2 bottom-2 flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-1 rounded border border-[#E2DDD3] z-10">
                  <button
                    onClick={(e) => handleCopyCode(emoji, e)}
                    className="flex-1 flex items-center justify-center gap-1 py-1 px-1.5 rounded bg-[#1E1F24] text-white text-[11px] font-semibold hover:bg-[#33353F] transition-colors"
                    title={`Copy code (${exportFormat})`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="h-3 w-3 text-[#4ADE80]" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={(e) => handleDownloadSvg(emoji, e)}
                    className="p-1 rounded border border-[#DCD6CA] text-[#475569] hover:bg-[#FAF8F5] transition-colors"
                    title="Download SVG"
                  >
                    <Download className="h-3.5 w-3.5" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectEmoji(emoji);
                    }}
                    className="p-1 rounded border border-[#DCD6CA] text-[#475569] hover:bg-[#FAF8F5] transition-colors"
                    title="Inspect"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
