'use client';

import React, { useState } from 'react';
import {
  Code2,
  Copy,
  Check,
  RotateCcw,
  Sliders,
} from 'lucide-react';
import { listEmojis, EmojiName } from '../packages/core/src';
import { Emoji, EmojiProvider } from '../packages/react/src';

export function LivePlayground() {
  const allEmojis = listEmojis();

  const [selectedName, setSelectedName] = useState<string>('happy');
  const [customNameInput, setCustomNameInput] = useState<string>('');
  const [size, setSize] = useState<number>(64);
  const [rotation, setRotation] = useState<number>(0);
  const [animation, setAnimation] = useState<'none' | 'bounce' | 'pulse' | 'wiggle' | 'spin' | 'float'>('none');
  const [ariaLabel, setAriaLabel] = useState<string>('Happy expression');
  const [ariaHidden, setAriaHidden] = useState<boolean>(false);
  const [titleText, setTitleText] = useState<string>('');
  const [useProvider, setUseProvider] = useState<boolean>(false);
  const [providerDefaultSize, setProviderDefaultSize] = useState<number>(48);
  const [copied, setCopied] = useState<boolean>(false);

  const activeEmojiName = customNameInput.trim() || selectedName;

  const getAnimationClass = () => {
    switch (animation) {
      case 'bounce': return 'animate-bounce';
      case 'pulse': return 'animate-pulse';
      case 'wiggle': return 'hover:rotate-12 transition-transform duration-300';
      case 'spin': return 'animate-spin';
      case 'float': return 'hover:-translate-y-2 transition-transform duration-300';
      default: return '';
    }
  };

  const toPascalCase = (str: string) =>
    str.split(/[-_]/).map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');

  const getGeneratedReactCode = () => {
    const compName = toPascalCase(activeEmojiName);
    const propsList: string[] = [];

    if (!useProvider && size !== 32) propsList.push(`size={${size}}`);
    if (rotation !== 0) propsList.push(`style={{ transform: 'rotate(${rotation}deg)' }}`);
    if (animation !== 'none') propsList.push(`className="${getAnimationClass()}"`);
    if (ariaLabel && !ariaHidden) propsList.push(`aria-label="${ariaLabel}"`);
    if (ariaHidden) propsList.push(`aria-hidden="true"`);
    if (titleText) propsList.push(`title="${titleText}"`);

    const propsString = propsList.length > 0 ? `\n  ${propsList.join('\n  ')}\n` : ' ';

    if (useProvider) {
      return `import React from 'react';\nimport { Emoji, EmojiProvider } from '@kimo-emoji/react';\n\nexport default function App() {\n  return (\n    <EmojiProvider defaultSize={${providerDefaultSize}}>\n      <Emoji name="${activeEmojiName}"${propsString}/>\n    </EmojiProvider>\n  );\n}`;
    }

    return `import React from 'react';\nimport { ${compName} } from '@kimo-emoji/react';\n\nexport default function App() {\n  return (\n    <${compName}${propsString}/>\n  );\n}`;
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(getGeneratedReactCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setSelectedName('happy');
    setCustomNameInput('');
    setSize(64);
    setRotation(0);
    setAnimation('none');
    setAriaLabel('Happy expression');
    setAriaHidden(false);
    setTitleText('');
    setUseProvider(false);
  };

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header — plain, no colored pill */}
      <div className="text-center max-w-[65ch] mx-auto mb-10">
        <h2 className="text-3xl font-bold text-[#1E1F24] tracking-tight">
          Interactive Playground
        </h2>
        <p className="mt-2 text-sm text-[#64748B]">
          Tweak props, test animations, and preview generated React code in real time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Controls */}
        <div className="lg:col-span-5 space-y-6 rounded-xl border border-[#E8E2D7] bg-white p-6">
          <div className="flex items-center justify-between border-b border-[#F1EFE9] pb-4">
            <h3 className="text-sm font-semibold text-[#1E1F24] flex items-center gap-2">
              <Sliders className="h-4 w-4" />
              Configuration
            </h3>
            <button
              onClick={handleReset}
              className="flex items-center gap-1 text-xs font-medium text-[#71717A] hover:text-[#1E1F24] transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset
            </button>
          </div>

          {/* Emoji Selection */}
          <div>
            <label className="block text-xs font-semibold text-[#475569] mb-2">Select Emoji</label>
            <select
              value={customNameInput ? '' : selectedName}
              onChange={(e) => { setSelectedName(e.target.value); setCustomNameInput(''); }}
              className="w-full rounded-lg border border-[#DCD6CA] bg-[#FAF8F5] px-3 py-2.5 text-sm text-[#1E1F24] font-medium focus:border-[#FF5E7E] focus:outline-none"
            >
              {allEmojis.map((e) => (
                <option key={e.name} value={e.name}>
                  {e.unicode} {e.label} (:{e.name}:)
                </option>
              ))}
            </select>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Or type a name to test fallback..."
                value={customNameInput}
                onChange={(e) => setCustomNameInput(e.target.value)}
                className="w-full rounded-lg border border-[#E2DDD3] px-3 py-1.5 text-xs text-[#1E1F24] placeholder-[#94A3B8] focus:border-[#FF5E7E] focus:outline-none"
              />
            </div>
          </div>

          {/* Size */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-semibold text-[#475569]">Size ({size}px)</label>
              <div className="flex gap-1">
                {[24, 32, 48, 64, 96].map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSize(sz)}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                      size === sz ? 'bg-[#1E1F24] text-white' : 'bg-[#F1EFE9] text-[#64748B]'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
            <input
              type="range"
              min="16"
              max="140"
              step="4"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full accent-[#FF5E7E] cursor-pointer"
            />
          </div>

          {/* Animation */}
          <div>
            <label className="block text-xs font-semibold text-[#475569] mb-2">Micro Animation</label>
            <div className="grid grid-cols-3 gap-2">
              {(['none', 'bounce', 'pulse', 'wiggle', 'spin', 'float'] as const).map((anim) => (
                <button
                  key={anim}
                  onClick={() => setAnimation(anim)}
                  className={`rounded-md border py-2 text-xs font-medium capitalize transition-colors ${
                    animation === anim
                      ? 'bg-[#1E1F24] text-white border-[#1E1F24]'
                      : 'border-[#E2DDD3] bg-[#FAF8F5] text-[#475569] hover:border-[#CBD5E1]'
                  }`}
                >
                  {anim}
                </button>
              ))}
            </div>
          </div>

          {/* Rotation */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-semibold text-[#475569]">Rotation ({rotation}°)</label>
              <button onClick={() => setRotation(0)} className="text-[11px] text-[#64748B] hover:text-[#1E1F24]">Reset</button>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              step="15"
              value={rotation}
              onChange={(e) => setRotation(Number(e.target.value))}
              className="w-full accent-[#FF5E7E] cursor-pointer"
            />
          </div>

          {/* A11y */}
          <div>
            <label className="text-xs font-semibold text-[#475569] mb-2 block">Accessibility</label>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="aria-label"
                value={ariaLabel}
                onChange={(e) => setAriaLabel(e.target.value)}
                className="w-full rounded-lg border border-[#E2DDD3] px-3 py-1.5 text-xs text-[#1E1F24] placeholder-[#94A3B8] focus:border-[#FF5E7E] focus:outline-none"
              />
              <label className="flex items-center gap-2 text-xs text-[#475569] cursor-pointer">
                <input
                  type="checkbox"
                  checked={ariaHidden}
                  onChange={(e) => setAriaHidden(e.target.checked)}
                  className="accent-[#FF5E7E]"
                />
                aria-hidden=&quot;true&quot;
              </label>
            </div>
          </div>

          {/* Provider toggle */}
          <div>
            <label className="flex items-center gap-2 text-xs font-semibold text-[#475569] cursor-pointer">
              <input
                type="checkbox"
                checked={useProvider}
                onChange={(e) => setUseProvider(e.target.checked)}
                className="accent-[#FF5E7E]"
              />
              Use EmojiProvider
            </label>
            {useProvider && (
              <div className="mt-2">
                <label className="text-[11px] text-[#64748B] mb-1 block">Provider defaultSize</label>
                <input
                  type="number"
                  value={providerDefaultSize}
                  onChange={(e) => setProviderDefaultSize(Number(e.target.value))}
                  className="w-full rounded-lg border border-[#E2DDD3] px-3 py-1.5 text-xs text-[#1E1F24] focus:border-[#FF5E7E] focus:outline-none"
                />
              </div>
            )}
          </div>
        </div>

        {/* Right: Preview + Code */}
        <div className="lg:col-span-7 space-y-6">
          {/* Preview */}
          <div className="rounded-xl border border-[#E8E2D7] bg-white p-6">
            <div className="text-xs font-semibold text-[#64748B] mb-4 uppercase tracking-wider">Preview</div>
            <div className="flex items-center justify-center min-h-[200px] bg-[#FAF7F0] rounded-lg border border-[#EAE4D8] p-8">
              <Emoji name={activeEmojiName as EmojiName} size={size} />
            </div>
          </div>

          {/* Generated Code */}
          <div className="rounded-xl border border-[#E8E2D7] bg-white p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider flex items-center gap-1.5">
                <Code2 className="h-3.5 w-3.5" />
                Generated React Code
              </div>
              <button
                onClick={handleCopyCode}
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
            <div className="rounded-lg bg-[#1E1F24] p-4 text-xs font-mono text-[#E2E8F0] overflow-x-auto max-h-64">
              <pre><code>{getGeneratedReactCode()}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
