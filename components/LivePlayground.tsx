'use client';

import React, { useState } from 'react';
import {
  Code2,
  Copy,
  Check,
  Play,
  RotateCcw,
  Sparkles,
  Sliders,
  ShieldCheck,
  Layers,
  HelpCircle,
} from 'lucide-react';
import { listEmojis, EmojiName } from '../packages/core/src';
import { Emoji, EmojiProvider } from '../packages/react/src';

export function LivePlayground() {
  const allEmojis = listEmojis();

  // Playground state
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

  // Compute CSS classes for preview
  const getAnimationClass = () => {
    switch (animation) {
      case 'bounce':
        return 'animate-bounce';
      case 'pulse':
        return 'animate-pulse';
      case 'wiggle':
        return 'hover:rotate-12 transition-transform duration-300';
      case 'spin':
        return 'animate-spin';
      case 'float':
        return 'hover:-translate-y-2 transition-transform duration-300';
      default:
        return '';
    }
  };

  const toPascalCase = (str: string) =>
    str
      .split(/[-_]/)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join('');

  // Generated React Code
  const getGeneratedReactCode = () => {
    const compName = toPascalCase(activeEmojiName);
    const propsList: string[] = [];

    if (!useProvider && size !== 32) {
      propsList.push(`size={${size}}`);
    }
    if (rotation !== 0) {
      propsList.push(`style={{ transform: 'rotate(${rotation}deg)' }}`);
    }
    if (animation !== 'none') {
      propsList.push(`className="${getAnimationClass()}"`);
    }
    if (ariaLabel && !ariaHidden) {
      propsList.push(`aria-label="${ariaLabel}"`);
    }
    if (ariaHidden) {
      propsList.push(`aria-hidden="true"`);
    }
    if (titleText) {
      propsList.push(`title="${titleText}"`);
    }

    const propsString = propsList.length > 0 ? `\n  ${propsList.join('\n  ')}\n` : ' ';

    if (useProvider) {
      return `import React from 'react';
import { Emoji, EmojiProvider } from '@kimo-emoji/react';

export default function App() {
  return (
    <EmojiProvider defaultSize={${providerDefaultSize}}>
      <Emoji name="${activeEmojiName}"${propsString}/>
    </EmojiProvider>
  );
}`;
    }

    return `import React from 'react';
import { ${compName} } from '@kimo-emoji/react';

export default function App() {
  return (
    <${compName}${propsString}/>
  );
}`;
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
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E0F2FE] px-3 py-1 text-xs font-semibold text-[#0284C7] mb-3">
          <Code2 className="h-3.5 w-3.5" />
          Live Interactive Sandbox
        </div>
        <h2 className="text-3xl font-extrabold text-[#1E1F24] tracking-tight">
          Interactive Component Playground
        </h2>
        <p className="mt-2 text-sm text-[#64748B]">
          Tweak props, test animations, inspect accessibility parameters, and preview generated React code in real time.
        </p>
      </div>

      {/* Main Sandbox Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Props Controls Form */}
        <div className="lg:col-span-5 space-y-6 rounded-3xl border border-[#E8E2D7] bg-white p-6 sm:p-7 shadow-xs">
          <div className="flex items-center justify-between border-b border-[#F1EFE9] pb-4">
            <h3 className="text-base font-bold text-[#1E1F24] flex items-center gap-2">
              <Sliders className="h-4 w-4 text-[#FF5E7E]" />
              Configuration Props
            </h3>
            <button
              onClick={handleReset}
              className="flex items-center gap-1 text-xs font-medium text-[#71717A] hover:text-[#1E1F24] transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset Defaults
            </button>
          </div>

          {/* 1. Emoji Selection */}
          <div>
            <label className="block text-xs font-bold text-[#475569] uppercase tracking-wider mb-2">
              Select Emoji
            </label>
            <select
              value={customNameInput ? '' : selectedName}
              onChange={(e) => {
                setSelectedName(e.target.value);
                setCustomNameInput('');
              }}
              className="w-full rounded-xl border border-[#DCD6CA] bg-[#FAF8F5] px-3.5 py-2.5 text-sm text-[#1E1F24] font-medium focus:border-[#FF5E7E] focus:outline-none"
            >
              {allEmojis.map((e) => (
                <option key={e.name} value={e.name}>
                  {e.unicode} {e.label} (:{e.name}:)
                </option>
              ))}
            </select>

            {/* Custom / Invalid Fallback input */}
            <div className="mt-2.5">
              <input
                type="text"
                placeholder="Or type custom/invalid name (e.g. unknown-emoji)..."
                value={customNameInput}
                onChange={(e) => setCustomNameInput(e.target.value)}
                className="w-full rounded-xl border border-[#E2DDD3] px-3 py-1.5 text-xs text-[#1E1F24] placeholder-[#94A3B8] focus:border-[#FF5E7E] focus:outline-none"
              />
              <p className="text-[11px] text-[#94A3B8] mt-1">
                Tip: Enter an invalid name to test graceful fallback rendering!
              </p>
            </div>
          </div>

          {/* 2. Sizing Slider */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-[#475569] uppercase tracking-wider">
                Size ({size}px)
              </label>
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

          {/* 3. Micro Animation */}
          <div>
            <label className="block text-xs font-bold text-[#475569] uppercase tracking-wider mb-2">
              Micro Animation
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['none', 'bounce', 'pulse', 'wiggle', 'spin', 'float'] as const).map((anim) => (
                <button
                  key={anim}
                  onClick={() => setAnimation(anim)}
                  className={`rounded-xl border py-2 text-xs font-semibold capitalize transition-all ${
                    animation === anim
                      ? 'bg-[#1E1F24] text-white border-[#1E1F24] shadow-xs'
                      : 'border-[#E2DDD3] bg-[#FAF8F5] text-[#475569] hover:border-[#CBD5E1]'
                  }`}
                >
                  {anim}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Rotation Angle */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-[#475569] uppercase tracking-wider">
                Rotation ({rotation}°)
              </label>
              <button
                onClick={() => setRotation(0)}
                className="text-[11px] text-[#64748B] hover:text-[#1E1F24]"
              >
                Reset
              </button>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              step="15"
              value={rotation}
              onChange={(e) => setRotation(Number(e.target.value))}
              className="w-full accent-[#4CC9F0] cursor-pointer"
            />
          </div>

          {/* 5. Accessibility (A11y) Props */}
          <div className="rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-4 space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A]">
              <ShieldCheck className="h-4 w-4 text-[#0284C7]" />
              Accessibility (A11y) Settings
            </div>

            <div>
              <label className="block text-[11px] font-medium text-[#64748B] mb-1">
                aria-label description:
              </label>
              <input
                type="text"
                value={ariaLabel}
                onChange={(e) => setAriaLabel(e.target.value)}
                disabled={ariaHidden}
                className="w-full rounded-lg border border-[#CBD5E1] bg-white px-3 py-1.5 text-xs text-[#1E1F24] disabled:opacity-50"
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-[#475569]">Purely Decorative (aria-hidden):</span>
              <input
                type="checkbox"
                checked={ariaHidden}
                onChange={(e) => setAriaHidden(e.target.checked)}
                className="h-4 w-4 accent-[#FF5E7E] rounded"
              />
            </div>
          </div>

          {/* 6. Context Provider Simulation */}
          <div className="flex items-center justify-between border-t border-[#F1EFE9] pt-4">
            <div>
              <span className="text-xs font-bold text-[#1E1F24] block">Wrap with &lt;EmojiProvider&gt;</span>
              <span className="text-[11px] text-[#71717A]">Test global default size context</span>
            </div>
            <input
              type="checkbox"
              checked={useProvider}
              onChange={(e) => setUseProvider(e.target.checked)}
              className="h-4 w-4 accent-[#80B918] rounded"
            />
          </div>
        </div>

        {/* Right Column: Live Visual Canvas & Code Preview */}
        <div className="lg:col-span-7 space-y-6">
          {/* Live Preview Card */}
          <div className="rounded-3xl border border-[#E8E2D7] bg-white p-6 sm:p-8 shadow-xs text-center flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden bg-[radial-gradient(#E2DDD3_1px,transparent_1px)] [background-size:20px_20px]">
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-mono font-semibold text-[#64748B]">Live Render Preview</span>
            </div>

            {/* Rendered Component */}
            <div
              className={`p-8 transition-transform duration-200 ${getAnimationClass()}`}
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {useProvider ? (
                <EmojiProvider defaultSize={providerDefaultSize}>
                  <Emoji
                    name={activeEmojiName}
                    size={size !== 32 ? size : undefined}
                    aria-label={ariaHidden ? undefined : ariaLabel}
                    aria-hidden={ariaHidden}
                    title={titleText || undefined}
                  />
                </EmojiProvider>
              ) : (
                <Emoji
                  name={activeEmojiName}
                  size={size}
                  aria-label={ariaHidden ? undefined : ariaLabel}
                  aria-hidden={ariaHidden}
                  title={titleText || undefined}
                />
              )}
            </div>

            <div className="mt-4 text-xs font-mono text-[#71717A]">
              Current Emoji: <span className="font-bold text-[#1E1F24]">:{activeEmojiName}:</span> • Dimensions:{' '}
              <span className="font-bold text-[#1E1F24]">{size}×{size}px</span>
            </div>
          </div>

          {/* Live Code Box */}
          <div className="rounded-3xl border border-[#1E1F24] bg-[#1E1F24] p-5 sm:p-6 shadow-md text-white">
            <div className="flex items-center justify-between border-b border-[#33353F] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-[#4CC9F0]" />
                <span className="text-xs font-mono font-semibold text-[#CBD5E1]">
                  Generated React Code
                </span>
              </div>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/20 px-3 py-1.5 text-xs font-mono font-semibold text-white transition-all"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-xs font-mono text-[#F1F5F9] overflow-x-auto p-2 bg-[#121316] rounded-xl border border-[#2B2D33]">
              <code>{getGeneratedReactCode()}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
