# 🌸 Kimo SVG Emoji UI Library

> A production-ready, open-source SVG emoji library and design system for modern web frameworks with tree-shaking, accessibility, and zero runtime overhead.

[![CI](https://github.com/kimo-emoji/kimo-emoji/actions/workflows/ci.yml/badge.svg)](https://github.com/kimo-emoji/kimo-emoji/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

---

## ✨ Features

- 🎨 **Expressive Design System**: Cohesive 128×128 pixel-crafted vector art with delicate blush cheeks, vibrant character expressions, and crisp outlines.
- 🌳 **True Tree-Shaking**: Import only the emojis you use (e.g. `import { Happy } from '@kimo-emoji/react'`). Zero bloat.
- ♿ **Accessible by Default**: Built-in `role="img"`, `aria-label`, `<title>`, and `aria-hidden` support for screen readers.
- 🚀 **Framework Agnostic Core**: Use in Vanilla JavaScript, SSR, Node.js, or any frontend framework.
- ⚛️ **First-Class React Package**: `<Emoji name="happy" size={48} />` or individual named components `<Happy />`, `<Love />`, `<FrogHappy />`.
- 🛠️ **Automated CLI Pipeline**: Add an SVG and metadata, run `pnpm generate`, and TypeScript types + React components are automatically built.
- 📦 **Dual Bundle Support**: Clean ESM and CJS compatibility.
- 🛡️ **Predictable Fallbacks**: Gracefully renders fallback placeholders instead of crashing when an unknown name is requested.

---

## 📦 Packages

| Package | Version | Description |
| :--- | :--- | :--- |
| **`@kimo-emoji/core`** | `1.1.0` | Framework-independent engine, search, metadata registry, & vanilla DOM renderer. |
| **`@kimo-emoji/react`** | `1.1.0` | React components, individual named exports, context provider, and hooks. |

---

## 🚀 Quick Start

### 1. React

```bash
# Install with pnpm, npm, or yarn
npm install @kimo-emoji/react
```

```tsx
import React from 'react';
import { Emoji, Happy, FrogHappy, EmojiProvider } from '@kimo-emoji/react';

export default function App() {
  return (
    <div className="flex gap-4 items-center">
      {/* 1. Dynamic name prop */}
      <Emoji name="happy" size={48} />

      {/* 2. Tree-shakeable named component */}
      <Happy size={32} className="hover:scale-110 transition-transform" />
      <FrogHappy size={40} aria-label="Happy Frog" />

      {/* 3. Global sizing context */}
      <EmojiProvider defaultSize={64}>
        <Emoji name="love" />
        <Emoji name="party" />
      </EmojiProvider>
    </div>
  );
}
```

### 2. Vanilla JavaScript

```bash
npm install @kimo-emoji/core
```

```ts
import { createEmoji, getEmojiSvg, searchEmojis } from '@kimo-emoji/core';

// Create a real DOM element
const element = createEmoji('happy', {
  size: 48,
  ariaLabel: 'Happy smile',
  onClick: () => console.log('Emoji clicked!'),
});

document.querySelector('#app')?.appendChild(element);

// Or generate raw SVG strings
const rawSvg = getEmojiSvg('love', { size: 32 });

// Search emojis by keyword
const results = searchEmojis('frog');
```

---

## 📐 Design System & Guidelines

All SVGs in Kimo follow strict standards:
1. **ViewBox**: Fixed `0 0 128 128` integer grid.
2. **Stroke Outline**: `#1E1F24` (Obsidian Midnight), 4.5px stroke weight with rounded caps/joins.
3. **Blush Cheeks**: `#FFA3BA` or `#FF758F` with 0.65 opacity.
4. **Highlights**: Specular white `#FFFFFF` reflection nodes.
5. **No Raster Images**: 100% vector paths and polygons.

---

## 🛠️ Adding a New Emoji

1. Add your SVG file to `packages/assets/svg/my-emoji.svg` (must follow 128×128 grid).
2. Add metadata to `packages/assets/metadata/emojis.json`:
```json
{
  "name": "my-emoji",
  "label": "My Emoji",
  "category": "faces",
  "keywords": ["custom", "smile"],
  "version": "1.1.0"
}
```
3. Run the generator:
```bash
pnpm generate
```
4. Run validation & tests:
```bash
pnpm validate
pnpm test
```

Everything else (TypeScript types, core registry, individual React components, exports) is auto-generated!

---

## 📄 License

MIT © [Kimo Emoji Team](LICENSE)
