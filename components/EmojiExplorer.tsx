'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  Sliders,
  Sparkles,
  Copy,
  Check,
  Download,
  Info,
  Maximize2,
  X,
  Palette,
  Grid,
  Smile,
  Heart,
  Flame,
  ThumbsUp,
  PartyPopper,
} from 'lucide-react';
import { listEmojis, searchEmojis, EmojiData, EmojiCategory } from '../packages/core/src';
import { Emoji } from '../packages/react/src';

interface EmojiExplorerProps {
  onSelectEmoji: (emoji: EmojiData) => void;
}

type CanvasTheme = 'light' | 'warm' | 'dark' | 'grid' | 'pink';
type ExportFormat = 'react-named' | 'react-generic' | 'vanilla-js' | 'raw-svg';

const CATEGORIES: Array<{ id: 'all' | EmojiCategory; label: string; icon?: React.ReactNode }> = [
  { id: 'all', label: 'All Emojis' },
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

  // Filter emojis based on query and category
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
      case 'grid':
        return 'bg-[#F8FAFC] border-[#E2E8F0] bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px]';
      case 'pink':
        return 'bg-[#FFF0F3] border-[#FFD1DC]';
    }
  };

  return (
    <section id="explorer-section" className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Controls Bar */}
      <div className="space-y-4 mb-8">
        {/* Search Bar & Stats */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search emojis by name, keyword (e.g. smile, love, frog, cry)..."
              className="w-full rounded-xl border border-[#DCD6CA] bg-white pl-10 pr-10 py-2.5 text-sm text-[#1E1F24] placeholder-[#94A3B8] shadow-xs focus:border-[#FF5E7E] focus:ring-2 focus:ring-[#FF5E7E]/20 focus:outline-none transition-all"
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

          {/* Quick Format & Theme Switcher */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Quick Export Code Format */}
            <div className="flex items-center rounded-xl bg-white border border-[#DCD6CA] p-1 shadow-xs text-xs">
              <button
                onClick={() => setExportFormat('react-named')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  exportFormat === 'react-named'
                    ? 'bg-[#1E1F24] text-white shadow-xs'
                    : 'text-[#64748B] hover:text-[#1E1F24]'
                }`}
                title="Named React Component export: <Happy size={48} />"
              >
                &lt;Happy /&gt;
              </button>
              <button
                onClick={() => setExportFormat('react-generic')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  exportFormat === 'react-generic'
                    ? 'bg-[#1E1F24] text-white shadow-xs'
                    : 'text-[#64748B] hover:text-[#1E1F24]'
                }`}
                title="Generic React Component export: <Emoji name='happy' size={48} />"
              >
                &lt;Emoji /&gt;
              </button>
              <button
                onClick={() => setExportFormat('vanilla-js')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  exportFormat === 'vanilla-js'
                    ? 'bg-[#1E1F24] text-white shadow-xs'
                    : 'text-[#64748B] hover:text-[#1E1F24]'
                }`}
                title="Vanilla JS DOM helper: createEmoji('happy')"
              >
                JS DOM
              </button>
              <button
                onClick={() => setExportFormat('raw-svg')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  exportFormat === 'raw-svg'
                    ? 'bg-[#1E1F24] text-white shadow-xs'
                    : 'text-[#64748B] hover:text-[#1E1F24]'
                }`}
                title="Raw SVG XML string"
              >
                Raw SVG
              </button>
            </div>

            {/* Canvas Theme Selector */}
            <div className="flex items-center rounded-xl bg-white border border-[#DCD6CA] p-1 shadow-xs gap-1">
              <button
                onClick={() => setCanvasTheme('warm')}
                className={`h-6 w-6 rounded-md border transition-all ${
                  canvasTheme === 'warm' ? 'ring-2 ring-[#FF5E7E] border-transparent' : 'border-[#E2DDD3]'
                } bg-[#FAF7F0]`}
                title="Warm Canvas"
              />
              <button
                onClick={() => setCanvasTheme('light')}
                className={`h-6 w-6 rounded-md border transition-all ${
                  canvasTheme === 'light' ? 'ring-2 ring-[#FF5E7E] border-transparent' : 'border-[#E2DDD3]'
                } bg-white`}
                title="Pure White"
              />
              <button
                onClick={() => setCanvasTheme('dark')}
                className={`h-6 w-6 rounded-md border transition-all ${
                  canvasTheme === 'dark' ? 'ring-2 ring-[#FF5E7E] border-transparent' : 'border-[#33353F]'
                } bg-[#1E1F24]`}
                title="Obsidian Dark"
              />
              <button
                onClick={() => setCanvasTheme('grid')}
                className={`h-6 w-6 rounded-md border transition-all ${
                  canvasTheme === 'grid' ? 'ring-2 ring-[#FF5E7E] border-transparent' : 'border-[#CBD5E1]'
                } bg-[#F8FAFC]`}
                title="Grid Blueprint"
              />
              <button
                onClick={() => setCanvasTheme('pink')}
                className={`h-6 w-6 rounded-md border transition-all ${
                  canvasTheme === 'pink' ? 'ring-2 ring-[#FF5E7E] border-transparent' : 'border-[#FFD1DC]'
                } bg-[#FFF0F3]`}
                title="Rosy Pastel"
              />
            </div>
          </div>
        </div>

        {/* Categories Bar & Size Slider */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
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
                  className={`flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#1E1F24] text-white shadow-xs'
                      : 'bg-white text-[#475569] border border-[#E2DDD3] hover:border-[#CBD5E1] hover:text-[#0F172A]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                      isActive ? 'bg-white/20 text-white' : 'bg-[#F1EFE9] text-[#64748B]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Size Slider Pill */}
          <div className="flex items-center gap-3 bg-white border border-[#DCD6CA] px-3.5 py-1.5 rounded-xl shadow-xs self-start md:self-auto">
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
            <span className="text-xs font-mono font-semibold text-[#1E1F24] w-9 text-right">
              {previewSize}px
            </span>
          </div>
        </div>
      </div>

      {/* Emoji Grid */}
      {filteredEmojis.length === 0 ? (
        <div className="rounded-2xl border border-[#E8E2D7] bg-white p-12 text-center shadow-xs my-8">
          <Smile className="mx-auto h-12 w-12 text-[#94A3B8] mb-3" />
          <h3 className="text-base font-bold text-[#1E1F24]">No emojis found</h3>
          <p className="text-xs text-[#64748B] mt-1">
            No emojis match &quot;{searchQuery}&quot;. Try searching for &quot;happy&quot;, &quot;frog&quot;, or &quot;party&quot;.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-4 rounded-xl bg-[#1E1F24] px-4 py-2 text-xs font-semibold text-white shadow-xs"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
          {filteredEmojis.map((emoji) => {
            const isCopied = copiedName === emoji.name;
            const componentName = toPascalCase(emoji.name);

            return (
              <div
                key={emoji.name}
                onClick={() => onSelectEmoji(emoji)}
                className={`group relative flex flex-col items-center justify-between rounded-2xl border p-4 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${getCanvasBgClass()}`}
              >
                {/* Top Category Tag & Unicode */}
                <div className="w-full flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                  <span className="truncate max-w-[80px] text-[10px] uppercase tracking-wider font-semibold opacity-75">
                    {emoji.category}
                  </span>
                  <span className="text-xs">{emoji.unicode || '✨'}</span>
                </div>

                {/* Emoji Vector Preview Container */}
                <div className="my-4 flex items-center justify-center h-24 w-full transition-transform group-hover:scale-110 duration-200">
                  <Emoji name={emoji.name} size={previewSize} />
                </div>

                {/* Bottom Label & Code Name */}
                <div className="w-full text-center">
                  <div className="text-xs font-bold text-inherit truncate">{emoji.label}</div>
                  <div className="text-[11px] font-mono text-[#94A3B8] truncate mt-0.5">
                    :{emoji.name}:
                  </div>
                </div>

                {/* Hover Quick Action Overlay Buttons */}
                <div className="absolute inset-x-2 bottom-2 flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 backdrop-blur-xs p-1 rounded-xl shadow-md border border-[#E2DDD3] z-10">
                  <button
                    onClick={(e) => handleCopyCode(emoji, e)}
                    className="flex-1 flex items-center justify-center gap-1 py-1 px-1.5 rounded-lg bg-[#1E1F24] text-white text-[11px] font-semibold hover:bg-[#33353F] transition-colors"
                    title={`Copy code (${exportFormat})`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span>Copied!</span>
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
                    className="p-1 rounded-lg border border-[#DCD6CA] text-[#475569] hover:bg-[#FAF8F5] hover:text-[#0F172A] transition-colors"
                    title="Download SVG file"
                  >
                    <Download className="h-3.5 w-3.5" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectEmoji(emoji);
                    }}
                    className="p-1 rounded-lg border border-[#DCD6CA] text-[#475569] hover:bg-[#FAF8F5] hover:text-[#0F172A] transition-colors"
                    title="Inspect details & formats"
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
