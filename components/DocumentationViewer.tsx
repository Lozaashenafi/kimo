'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  Code2,
  Copy,
  Check,
  Zap,
  ShieldCheck,
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
      {/* Header */}
      <div className="max-w-[65ch] mb-12">
        <h2 className="text-3xl font-bold text-[#1E1F24] tracking-tight sm:text-4xl">
          Documentation
        </h2>
        <p className="mt-3 text-base text-[#52525B]">
          How to install, configure, tree-shake, and customize Kimo Emoji across React, Next.js, Vanilla JavaScript, and SSR environments.
        </p>
      </div>

      <div className="space-y-10">
        {/* Section 1: Quickstart */}
        <section id="quickstart" className="rounded-lg border border-[#E8E2D7] bg-white p-6">
          <div className="flex items-center gap-2.5 border-b border-[#F1EFE9] pb-3 mb-5">
            <Package className="h-5 w-5 text-[#52525B]" />
            <h3 className="text-lg font-semibold text-[#1E1F24]">1. Quickstart & Installation</h3>
          </div>

          <div className="space-y-3">
            <div className="rounded-lg bg-[#1E1F24] p-4 text-white font-mono text-xs flex items-center justify-between">
              <span>npm install @kimo-emoji/react</span>
              <button
                onClick={() => copySnippet('npm install @kimo-emoji/react', 'npm-install')}
                className="text-[#94A3B8] hover:text-white"
              >
                {copiedCode === 'npm-install' ? <Check className="h-4 w-4 text-[#4ADE80]" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
              <div className="rounded border border-[#E8E2D7] bg-[#FAF8F5] p-3 text-[#334155]">
                <span className="text-[#94A3B8] block text-[10px]">pnpm</span>
                pnpm add @kimo-emoji/react
              </div>
              <div className="rounded border border-[#E8E2D7] bg-[#FAF8F5] p-3 text-[#334155]">
                <span className="text-[#94A3B8] block text-[10px]">yarn</span>
                yarn add @kimo-emoji/react
              </div>
              <div className="rounded border border-[#E8E2D7] bg-[#FAF8F5] p-3 text-[#334155]">
                <span className="text-[#94A3B8] block text-[10px]">bun</span>
                bun add @kimo-emoji/react
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: React Usage */}
        <section id="react-usage" className="rounded-lg border border-[#E8E2D7] bg-white p-6">
          <div className="flex items-center gap-2.5 border-b border-[#F1EFE9] pb-3 mb-5">
            <Code2 className="h-5 w-5 text-[#52525B]" />
            <h3 className="text-lg font-semibold text-[#1E1F24]">2. React Usage & Tree-Shaking</h3>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-[#1E1F24] mb-1.5">A. Named Tree-Shakeable Components</h4>
              <p className="text-xs text-[#64748B] mb-3">Import individual emoji components. Bundlers include only the exact SVGs used.</p>
              <div className="rounded-lg bg-[#1E1F24] p-4 text-xs font-mono text-[#E2E8F0] relative">
                <button
                  onClick={() => copySnippet(`import { Happy, Love, FrogHappy } from '@kimo-emoji/react';\n\nexport function ReactionButtons() {\n  return (\n    <div className="flex gap-3">\n      <Happy size={32} />\n      <Love size={32} aria-label="Heart eyes" />\n      <FrogHappy size={32} />\n    </div>\n  );\n}`, 'react-named-example')}
                  className="absolute top-3 right-3 text-[#94A3B8] hover:text-white"
                >
                  {copiedCode === 'react-named-example' ? <Check className="h-4 w-4 text-[#4ADE80]" /> : <Copy className="h-4 w-4" />}
                </button>
                <pre><code>{`import { Happy, Love, FrogHappy } from '@kimo-emoji/react';

export function ReactionButtons() {
  return (
    <div className="flex gap-3">
      <Happy size={32} />
      <Love size={32} aria-label="Heart eyes" />
      <FrogHappy size={32} />
    </div>
  );
}`}</code></pre>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-[#1E1F24] mb-1.5">B. Polymorphic Emoji Component</h4>
              <p className="text-xs text-[#64748B] mb-3">For dynamic interfaces, chat renderers, reaction pickers, and databases.</p>
              <div className="rounded-lg bg-[#1E1F24] p-4 text-xs font-mono text-[#E2E8F0]">
                <pre><code>{`import { Emoji, EmojiName } from '@kimo-emoji/react';

interface ChatMessageProps {
  reactionName: EmojiName; // Fully typed autocomplete!
}

export function ChatMessage({ reactionName }: ChatMessageProps) {
  return <Emoji name={reactionName} size={24} />;
}`}</code></pre>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-[#1E1F24] mb-1.5">C. Global Context with EmojiProvider</h4>
              <p className="text-xs text-[#64748B] mb-3">Define application-wide defaults for size, className, and fallback elements.</p>
              <div className="rounded-lg bg-[#1E1F24] p-4 text-xs font-mono text-[#E2E8F0]">
                <pre><code>{`import { EmojiProvider, Emoji } from '@kimo-emoji/react';

export default function RootApp({ children }) {
  return (
    <EmojiProvider
      defaultSize={36}
      defaultClassName="kimo-theme-icon"
    >
      {children}
    </EmojiProvider>
  );
}`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Vanilla JS */}
        <section id="vanilla-core" className="rounded-lg border border-[#E8E2D7] bg-white p-6">
          <div className="flex items-center gap-2.5 border-b border-[#F1EFE9] pb-3 mb-5">
            <Zap className="h-5 w-5 text-[#52525B]" />
            <h3 className="text-lg font-semibold text-[#1E1F24]">3. Vanilla JavaScript Core</h3>
          </div>

          <div className="rounded-lg bg-[#1E1F24] p-4 text-xs font-mono text-[#E2E8F0] relative">
            <button
              onClick={() => copySnippet(`import { createEmoji, getEmojiSvg, searchEmojis } from '@kimo-emoji/core';\n\nconst node = createEmoji('happy', { size: 48, ariaLabel: 'Happy face' });\ndocument.getElementById('app')?.appendChild(node);\n\nconst svgMarkup = getEmojiSvg('love', { size: 32 });\nconst matches = searchEmojis('frog');`, 'vanilla-example')}
              className="absolute top-3 right-3 text-[#94A3B8] hover:text-white"
            >
              {copiedCode === 'vanilla-example' ? <Check className="h-4 w-4 text-[#4ADE80]" /> : <Copy className="h-4 w-4" />}
            </button>
            <pre><code>{`import { createEmoji, getEmojiSvg, searchEmojis, listEmojis } from '@kimo-emoji/core';

// Create a native DOM node
const node = createEmoji('happy', {
  size: 48,
  ariaLabel: 'Happy face',
  onClick: () => console.log('Clicked!'),
});
document.getElementById('app')?.appendChild(node);

// Generate raw SVG markup (SSR, Vue, Svelte, Astro)
const svgMarkup = getEmojiSvg('love', { size: 32, className: 'custom-icon' });

// Search emojis programmatically
const matches = searchEmojis('frog');`}</code></pre>
          </div>
        </section>

        {/* Section 4: Accessibility */}
        <section id="accessibility" className="rounded-lg border border-[#E8E2D7] bg-white p-6">
          <div className="flex items-center gap-2.5 border-b border-[#F1EFE9] pb-3 mb-5">
            <ShieldCheck className="h-5 w-5 text-[#52525B]" />
            <h3 className="text-lg font-semibold text-[#1E1F24]">4. Accessibility</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="rounded border border-[#E8E2D7] bg-[#FAF8F5] p-5">
              <h4 className="font-semibold text-[#1E1F24] mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#16A34A]" />
                Meaningful Emojis
              </h4>
              <p className="text-[#64748B] mb-3 leading-relaxed">
                When an emoji communicates emotion, it automatically provides <code>role=&quot;img&quot;</code> and <code>aria-label</code>.
              </p>
              <div className="rounded bg-[#1E1F24] p-3 text-white font-mono text-[11px]">
                &lt;Happy aria-label=&quot;Task completed&quot; /&gt;
              </div>
            </div>

            <div className="rounded border border-[#E8E2D7] bg-[#FAF8F5] p-5">
              <h4 className="font-semibold text-[#1E1F24] mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#16A34A]" />
                Decorative Emojis
              </h4>
              <p className="text-[#64748B] mb-3 leading-relaxed">
                If an emoji sits alongside visible text, pass <code>aria-hidden=&quot;true&quot;</code> to prevent duplicate announcements.
              </p>
              <div className="rounded bg-[#1E1F24] p-3 text-white font-mono text-[11px]">
                &lt;Sparkle aria-hidden=&quot;true&quot; /&gt; &lt;span&gt;Featured&lt;/span&gt;
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Adding Emojis */}
        <section id="cli-pipeline" className="rounded-lg border border-[#E8E2D7] bg-white p-6">
          <div className="flex items-center gap-2.5 border-b border-[#F1EFE9] pb-3 mb-5">
            <Wrench className="h-5 w-5 text-[#52525B]" />
            <h3 className="text-lg font-semibold text-[#1E1F24]">5. Adding New Emojis</h3>
          </div>

          <ol className="space-y-3 text-xs text-[#475569]">
            <li className="flex gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#1E1F24] text-white font-semibold text-[10px]">1</span>
              <div>
                <strong className="text-[#1E1F24]">Save SVG:</strong> Place your 128×128 vector in <code>packages/assets/svg/&lt;name&gt;.svg</code>.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#1E1F24] text-white font-semibold text-[10px]">2</span>
              <div>
                <strong className="text-[#1E1F24]">Register:</strong> Add an entry in <code>packages/assets/metadata/emojis.json</code>.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#1E1F24] text-white font-semibold text-[10px]">3</span>
              <div>
                <strong className="text-[#1E1F24]">Generate:</strong> Run <code>pnpm generate</code> to update types, registry, and React components.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#1E1F24] text-white font-semibold text-[10px]">4</span>
              <div>
                <strong className="text-[#1E1F24]">Validate:</strong> Run <code>pnpm validate</code> and <code>pnpm test</code>.
              </div>
            </li>
          </ol>

          <div className="mt-4 rounded-lg bg-[#1E1F24] p-4 text-xs font-mono text-[#E2E8F0]">
            <code>$ pnpm generate{'\n'}✨ Starting Code Generation...{'\n'}✅ Generated 84 emojis!</code>
          </div>
        </section>
      </div>
    </div>
  );
}
