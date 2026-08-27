'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  Terminal,
  Code2,
  Copy,
  Check,
  Zap,
  ShieldCheck,
  Layers,
  Sparkles,
  Search,
  Package,
  Wrench,
  CheckCircle2,
} from 'lucide-react';

export function DocumentationViewer() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copySnippet = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Docs Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#059669] mb-3">
          <BookOpen className="h-3.5 w-3.5" />
          Complete Developer Guide
        </div>
        <h2 className="text-3xl font-extrabold text-[#1E1F24] tracking-tight sm:text-4xl">
          Documentation & API Reference
        </h2>
        <p className="mt-3 text-base text-[#52525B]">
          Learn how to install, configure, tree-shake, and customize Kimo Emoji across React, Next.js, Vanilla JavaScript, and SSR environments.
        </p>
      </div>

      {/* Docs Navigation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Content Area */}
        <div className="lg:col-span-12 space-y-12">
          {/* Section 1: Quickstart & Installation */}
          <section id="quickstart" className="rounded-3xl border border-[#E8E2D7] bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 border-b border-[#F1EFE9] pb-4 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF0F3] text-[#FF4D6D]">
                <Package className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1E1F24]">1. Quickstart & Installation</h3>
                <p className="text-xs text-[#71717A]">Install via your preferred package manager.</p>
              </div>
            </div>

            {/* Package manager tabs */}
            <div className="space-y-4">
              <div className="rounded-2xl bg-[#1E1F24] p-4 text-white font-mono text-xs flex items-center justify-between">
                <span>npm install @kimo-emoji/react</span>
                <button
                  onClick={() => copySnippet('npm install @kimo-emoji/react', 'npm-install')}
                  className="text-[#94A3B8] hover:text-white"
                >
                  {copiedCode === 'npm-install' ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="rounded-xl border border-[#E8E2D7] bg-[#FAF8F5] p-3 text-[#334155]">
                  <span className="text-[#94A3B8] block text-[10px]">pnpm</span>
                  pnpm add @kimo-emoji/react
                </div>
                <div className="rounded-xl border border-[#E8E2D7] bg-[#FAF8F5] p-3 text-[#334155]">
                  <span className="text-[#94A3B8] block text-[10px]">yarn</span>
                  yarn add @kimo-emoji/react
                </div>
                <div className="rounded-xl border border-[#E8E2D7] bg-[#FAF8F5] p-3 text-[#334155]">
                  <span className="text-[#94A3B8] block text-[10px]">bun</span>
                  bun add @kimo-emoji/react
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: React Usage & Tree-Shaking */}
          <section id="react-usage" className="rounded-3xl border border-[#E8E2D7] bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 border-b border-[#F1EFE9] pb-4 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E0F2FE] text-[#0284C7]">
                <Code2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1E1F24]">2. React Usage & Tree-Shaking</h3>
                <p className="text-xs text-[#71717A]">
                  Two flexible ways to import and render emojis in React components.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Pattern A: Named Tree-Shakeable Component */}
              <div>
                <h4 className="text-sm font-bold text-[#1E1F24] mb-1.5">
                  A. Tree-Shakeable Named Components (Recommended)
                </h4>
                <p className="text-xs text-[#64748B] mb-3">
                  Import individual emoji components directly. Bundlers like Vite, Next.js, and Webpack will only include the exact SVGs used.
                </p>
                <div className="rounded-2xl bg-[#1E1F24] p-4 text-xs font-mono text-[#E2E8F0] relative">
                  <button
                    onClick={() =>
                      copySnippet(
                        `import { Happy, Love, FrogHappy } from '@kimo-emoji/react';\n\nexport function ReactionButtons() {\n  return (\n    <div className="flex gap-3">\n      <Happy size={32} className="hover:scale-125 transition-transform" />\n      <Love size={32} aria-label="Heart eyes" />\n      <FrogHappy size={32} />\n    </div>\n  );\n}`,
                        'react-named-example'
                      )
                    }
                    className="absolute top-3 right-3 text-[#94A3B8] hover:text-white"
                  >
                    {copiedCode === 'react-named-example' ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                  <pre>
                    <code>{`import { Happy, Love, FrogHappy } from '@kimo-emoji/react';

export function ReactionButtons() {
  return (
    <div className="flex gap-3">
      <Happy size={32} className="hover:scale-125 transition-transform" />
      <Love size={32} aria-label="Heart eyes" />
      <FrogHappy size={32} />
    </div>
  );
}`}</code>
                  </pre>
                </div>
              </div>

              {/* Pattern B: Dynamic Name Prop */}
              <div>
                <h4 className="text-sm font-bold text-[#1E1F24] mb-1.5">
                  B. Polymorphic &lt;Emoji /&gt; Component
                </h4>
                <p className="text-xs text-[#64748B] mb-3">
                  Great for dynamic interfaces, chat message renderers, reactions pickers, and databases.
                </p>
                <div className="rounded-2xl bg-[#1E1F24] p-4 text-xs font-mono text-[#E2E8F0] relative">
                  <pre>
                    <code>{`import { Emoji, EmojiName } from '@kimo-emoji/react';

interface ChatMessageProps {
  reactionName: EmojiName; // Fully typed autocomplete!
}

export function ChatMessage({ reactionName }: ChatMessageProps) {
  return <Emoji name={reactionName} size={24} />;
}`}</code>
                  </pre>
                </div>
              </div>

              {/* Pattern C: EmojiProvider */}
              <div>
                <h4 className="text-sm font-bold text-[#1E1F24] mb-1.5">
                  C. Global Context with &lt;EmojiProvider /&gt;
                </h4>
                <p className="text-xs text-[#64748B] mb-3">
                  Define application-wide default sizes, global class names, or custom fallback elements.
                </p>
                <div className="rounded-2xl bg-[#1E1F24] p-4 text-xs font-mono text-[#E2E8F0] relative">
                  <pre>
                    <code>{`import { EmojiProvider, Emoji } from '@kimo-emoji/react';

export default function RootApp({ children }) {
  return (
    <EmojiProvider 
      defaultSize={36} 
      defaultClassName="kimo-theme-icon"
      fallback={<span className="text-xs text-gray-400">❓</span>}
    >
      {children}
    </EmojiProvider>
  );
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Vanilla JS & Framework Agnostic Core */}
          <section id="vanilla-core" className="rounded-3xl border border-[#E8E2D7] bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 border-b border-[#F1EFE9] pb-4 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FEF3C7] text-[#D97706]">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1E1F24]">3. Vanilla JavaScript & Framework Agnostic Core</h3>
                <p className="text-xs text-[#71717A]">
                  Use `@kimo-emoji/core` with Vue, Svelte, Angular, Astro, SSR templates, or pure DOM scripts.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-[#1E1F24] p-4 text-xs font-mono text-[#E2E8F0] relative">
                <button
                  onClick={() =>
                    copySnippet(
                      `import { createEmoji, getEmojiSvg, searchEmojis, listEmojis } from '@kimo-emoji/core';\n\n// 1. Create a native DOM node with event listeners\nconst node = createEmoji('happy', {\n  size: 48,\n  ariaLabel: 'Happy face',\n  onClick: () => alert('Hello!'),\n});\ndocument.body.appendChild(node);\n\n// 2. Generate raw SVG string (ideal for SSR, Vue, Svelte, or Astro)\nconst svgMarkup = getEmojiSvg('love', { size: 32 });\n\n// 3. Search emojis programmatically\nconst matches = searchEmojis('frog'); // returns frog-happy, frog-cry`,
                      'vanilla-example'
                    )
                  }
                  className="absolute top-3 right-3 text-[#94A3B8] hover:text-white"
                >
                  {copiedCode === 'vanilla-example' ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
                <pre>
                  <code>{`import { createEmoji, getEmojiSvg, searchEmojis, listEmojis } from '@kimo-emoji/core';

// 1. Create a native DOM node with event listeners
const node = createEmoji('happy', {
  size: 48,
  ariaLabel: 'Happy face',
  onClick: () => console.log('Emoji clicked!'),
});
document.getElementById('container')?.appendChild(node);

// 2. Generate raw SVG markup string (ideal for SSR, Vue, Svelte, Astro)
const svgMarkup = getEmojiSvg('love', { size: 32, className: 'custom-icon' });

// 3. Search emojis programmatically
const matches = searchEmojis('frog'); // returns ['frog-happy', 'frog-cry']`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Section 4: Accessibility & Screen Readers */}
          <section id="accessibility" className="rounded-3xl border border-[#E8E2D7] bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 border-b border-[#F1EFE9] pb-4 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F0FDF4] text-[#16A34A]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1E1F24]">4. Accessibility (A11y) Standards</h3>
                <p className="text-xs text-[#71717A]">
                  Built-in WCAG compliance for screen readers and assistive technology.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="rounded-2xl border border-[#E8E2D7] bg-[#FAF8F5] p-5">
                <h4 className="font-bold text-[#1E1F24] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Meaningful / Interactive Emojis
                </h4>
                <p className="text-[#64748B] mb-3 leading-relaxed">
                  When an emoji communicates emotion or status, it automatically provides <code>role=&quot;img&quot;</code> and an <code>aria-label</code>.
                </p>
                <div className="rounded-xl bg-[#1E1F24] p-3 text-white font-mono text-[11px]">
                  &lt;Happy aria-label=&quot;User completed task successfully&quot; /&gt;
                </div>
              </div>

              <div className="rounded-2xl border border-[#E8E2D7] bg-[#FAF8F5] p-5">
                <h4 className="font-bold text-[#1E1F24] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Purely Decorative Emojis
                </h4>
                <p className="text-[#64748B] mb-3 leading-relaxed">
                  If an emoji sits alongside visible descriptive text, pass <code>aria-hidden=&quot;true&quot;</code> to prevent duplicate screen reader announcements.
                </p>
                <div className="rounded-xl bg-[#1E1F24] p-3 text-white font-mono text-[11px]">
                  &lt;Sparkle aria-hidden=&quot;true&quot; /&gt; &lt;span&gt;Featured Post&lt;/span&gt;
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: CLI Pipeline & Adding New Emojis */}
          <section id="cli-pipeline" className="rounded-3xl border border-[#E8E2D7] bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 border-b border-[#F1EFE9] pb-4 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5F3FF] text-[#7C3AED]">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1E1F24]">5. CLI Automation & Adding New Emojis</h3>
                <p className="text-xs text-[#71717A]">
                  How to extend the library with new custom vector art in seconds.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <ol className="space-y-3 text-xs text-[#475569]">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E1F24] text-white font-bold text-[11px]">
                    1
                  </span>
                  <div>
                    <strong className="text-[#1E1F24]">Save SVG Asset:</strong> Place your 128×128 vector file into <code>packages/assets/svg/&lt;name&gt;.svg</code>.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E1F24] text-white font-bold text-[11px]">
                    2
                  </span>
                  <div>
                    <strong className="text-[#1E1F24]">Register Metadata:</strong> Add an entry in <code>packages/assets/metadata/emojis.json</code> with labels and keywords.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E1F24] text-white font-bold text-[11px]">
                    3
                  </span>
                  <div>
                    <strong className="text-[#1E1F24]">Run Code Generator:</strong> Run <code>pnpm generate</code> to automatically update TypeScript types, registry, and React components.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E1F24] text-white font-bold text-[11px]">
                    4
                  </span>
                  <div>
                    <strong className="text-[#1E1F24]">Validate & Test:</strong> Run <code>pnpm validate</code> and <code>pnpm test</code> to ensure all checks pass.
                  </div>
                </li>
              </ol>

              <div className="rounded-2xl bg-[#1E1F24] p-4 text-xs font-mono text-[#E2E8F0]">
                <code>$ pnpm generate{'\n'}✨ Kimo Emoji Library: Starting Code Generation...{'\n'}✅ Successfully generated 79 emojis into Core and React packages!</code>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
