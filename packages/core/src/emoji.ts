import { EMOJI_REGISTRY, EMOJI_LIST, EMOJI_NAMES } from './registry';
import {
  EmojiData,
  EmojiMetadata,
  EmojiName,
  EmojiCategory,
  SearchOptions,
  SvgRenderOptions,
  CreateEmojiOptions,
} from './types';

/**
 * Retrieve the full emoji data (including SVG and metadata) by name.
 */
export function getEmoji(name: EmojiName | string): EmojiData | null {
  return (EMOJI_REGISTRY as Record<string, EmojiData>)[name] || null;
}

/**
 * Retrieve only the metadata for a given emoji name.
 */
export function getEmojiMetadata(name: EmojiName | string): EmojiMetadata | null {
  const emoji = getEmoji(name);
  if (!emoji) return null;
  return {
    name: emoji.name,
    label: emoji.label,
    category: emoji.category,
    keywords: emoji.keywords,
    unicode: emoji.unicode,
    version: emoji.version,
  };
}

/**
 * List all available emojis in the library.
 */
export function listEmojis(): EmojiData[] {
  return [...EMOJI_LIST];
}

/**
 * List all valid emoji names for autocomplete or validation.
 */
export function listEmojiNames(): EmojiName[] {
  return [...EMOJI_NAMES];
}

/**
 * Search emojis by keyword, label, name, or category.
 */
export function searchEmojis(query: string, options: SearchOptions = {}): EmojiData[] {
  const normalizedQuery = (query || '').trim().toLowerCase();
  const { category, limit, exact } = options;

  let results = EMOJI_LIST.filter((emoji) => {
    // Category filtering
    if (category && emoji.category !== category) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const nameMatch = emoji.name.toLowerCase();
    const labelMatch = emoji.label.toLowerCase();

    if (exact) {
      return (
        nameMatch === normalizedQuery ||
        labelMatch === normalizedQuery ||
        emoji.keywords.some((k) => k.toLowerCase() === normalizedQuery)
      );
    }

    // Substring and fuzzy keyword matches
    const inName = nameMatch.includes(normalizedQuery);
    const inLabel = labelMatch.includes(normalizedQuery);
    const inKeywords = emoji.keywords.some((k) => k.toLowerCase().includes(normalizedQuery));
    const inCategory = emoji.category.toLowerCase().includes(normalizedQuery);

    return inName || inLabel || inKeywords || inCategory;
  });

  // Sort: prioritize exact match in name > label > keywords
  if (normalizedQuery) {
    results.sort((a, b) => {
      const aExact = a.name === normalizedQuery ? 2 : a.label.toLowerCase() === normalizedQuery ? 1 : 0;
      const bExact = b.name === normalizedQuery ? 2 : b.label.toLowerCase() === normalizedQuery ? 1 : 0;
      return bExact - aExact;
    });
  }

  if (typeof limit === 'number' && limit > 0) {
    results = results.slice(0, limit);
  }

  return results;
}

/**
 * Retrieve all emojis within a specific category.
 */
export function getEmojisByCategory(category: EmojiCategory): EmojiData[] {
  return EMOJI_LIST.filter((emoji) => emoji.category === category);
}

/**
 * Generate a standalone SVG markup string with applied sizing, accessibility, and styling options.
 */
export function getEmojiSvg(name: EmojiName | string, options: SvgRenderOptions = {}): string {
  const emoji = getEmoji(name);
  if (!emoji) {
    console.warn(`[kimo-emoji] Unknown emoji "${name}". Rendering fallback placeholder.`);
    const fallbackSize = options.size || options.width || 32;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="${fallbackSize}" height="${fallbackSize}" fill="none"><rect width="128" height="128" rx="24" fill="#F3F4F6"/><text x="64" y="72" text-anchor="middle" font-family="sans-serif" font-size="36" fill="#9CA3AF">?</text></svg>`;
  }

  const {
    size = 32,
    width = size,
    height = size,
    className,
    ariaLabel = emoji.label,
    ariaHidden,
    title,
    style,
  } = options;

  let svg = emoji.svg;

  // Insert width and height
  svg = svg.replace(/<svg\b([^>]*)>/i, (_match, attrs) => {
    let newAttrs = attrs;
    // Replace or add width
    if (newAttrs.includes('width=')) {
      newAttrs = newAttrs.replace(/width="[^"]*"/i, `width="${width}"`);
    } else {
      newAttrs += ` width="${width}"`;
    }

    // Replace or add height
    if (newAttrs.includes('height=')) {
      newAttrs = newAttrs.replace(/height="[^"]*"/i, `height="${height}"`);
    } else {
      newAttrs += ` height="${height}"`;
    }

    // Add class
    if (className) {
      if (newAttrs.includes('class=')) {
        newAttrs = newAttrs.replace(/class="([^"]*)"/i, `class="$1 ${className}"`);
      } else {
        newAttrs += ` class="${className}"`;
      }
    }

    // Add accessibility
    if (ariaHidden) {
      newAttrs += ' aria-hidden="true"';
    } else {
      newAttrs += ` role="img" aria-label="${ariaLabel}"`;
    }

    // Add style
    if (style) {
      const styleString =
        typeof style === 'string'
          ? style
          : Object.entries(style)
              .map(([k, v]) => `${k.replace(/([A-Z])/g, '-$1').toLowerCase()}:${v}`)
              .join(';');
      newAttrs += ` style="${styleString}"`;
    }

    return `<svg${newAttrs}>`;
  });

  // Inject <title> if provided and not aria-hidden
  if (title && !ariaHidden) {
    svg = svg.replace(/<svg\b[^>]*>/i, `$&<title>${title}</title>`);
  }

  return svg;
}

/**
 * Vanilla JavaScript helper: create a DOM element for the emoji.
 * Works without React in pure JS / Vanilla DOM / SSR environments.
 */
export function createEmoji(name: EmojiName | string, options: CreateEmojiOptions = {}): HTMLElement {
  const svgString = getEmojiSvg(name, options);
  const container = document.createElement('span');
  container.className = 'kimo-emoji-wrapper';
  container.style.display = 'inline-flex';
  container.style.alignItems = 'center';
  container.style.justifyContent = 'center';
  container.innerHTML = svgString;

  if (options.onClick) {
    container.addEventListener('click', options.onClick);
    container.style.cursor = 'pointer';
  }

  const svgElement = container.querySelector('svg');
  return (svgElement as unknown as HTMLElement) || container;
}
