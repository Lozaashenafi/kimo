import { describe, it, expect } from 'vitest';
import {
  getEmoji,
  getEmojiMetadata,
  listEmojis,
  listEmojiNames,
  searchEmojis,
  getEmojisByCategory,
  getEmojiSvg,
  EMOJI_REGISTRY,
  EMOJI_LIST,
} from '../packages/core/src';

describe('@kimo-emoji/core', () => {
  it('should have all emojis registered', () => {
    expect(EMOJI_LIST.length).toBe(79);
    expect(Object.keys(EMOJI_REGISTRY).length).toBe(79);
  });

  it('should retrieve emoji data by valid name', () => {
    const happy = getEmoji('happy');
    expect(happy).not.toBeNull();
    expect(happy?.name).toBe('happy');
    expect(happy?.label).toBe('Happy');
    expect(happy?.category).toBe('faces');
    expect(happy?.svg).toContain('<svg');
    expect(happy?.viewBox).toBe('0 0 128 128');
  });

  it('should return null for non-existent emoji name', () => {
    const nonexistent = getEmoji('nonexistent-emoji-12345');
    expect(nonexistent).toBeNull();
  });

  it('should retrieve emoji metadata without extra SVG overhead', () => {
    const meta = getEmojiMetadata('love');
    expect(meta).not.toBeNull();
    expect(meta?.name).toBe('love');
    expect(meta?.label).toBe('Heart Eyes');
    expect(meta?.category).toBe('love');
    expect(meta?.keywords).toContain('heart');
    expect((meta as Record<string, unknown>).svg).toBeUndefined();
  });

  it('should list all emoji names', () => {
    const names = listEmojiNames();
    expect(names).toContain('happy');
    expect(names).toContain('frog-happy');
    expect(names).toContain('starry');
  });

  it('should filter emojis by category', () => {
    const faces = getEmojisByCategory('faces');
    expect(faces.length).toBeGreaterThan(0);
    expect(faces.every((e) => e.category === 'faces')).toBe(true);

    const animals = getEmojisByCategory('animals');
    expect(animals.map((a) => a.name)).toEqual(expect.arrayContaining(['frog-happy', 'frog-cry']));
  });

  it('should search emojis by query', () => {
    const smileResults = searchEmojis('smile');
    expect(smileResults.length).toBeGreaterThan(0);
    expect(smileResults.some((e) => e.name === 'happy')).toBe(true);

    const frogResults = searchEmojis('frog');
    expect(frogResults.length).toBe(5);

    const limitedResults = searchEmojis('', { limit: 5 });
    expect(limitedResults.length).toBe(5);
  });

  it('should generate standalone SVG strings with custom options', () => {
    const svg = getEmojiSvg('happy', {
      size: 48,
      className: 'custom-icon',
      ariaLabel: 'Custom Smile',
    });

    expect(svg).toContain('width="48"');
    expect(svg).toContain('height="48"');
    expect(svg).toContain('class="custom-icon"');
    expect(svg).toContain('aria-label="Custom Smile"');
    expect(svg).toContain('role="img"');
  });

  it('should handle decorative aria-hidden SVG correctly', () => {
    const svg = getEmojiSvg('happy', {
      ariaHidden: true,
    });
    expect(svg).toContain('aria-hidden="true"');
    expect(svg).not.toContain('role="img"');
  });

  it('should render a safe fallback SVG for invalid emoji names', () => {
    const fallbackSvg = getEmojiSvg('unknown-fake-emoji', { size: 64 });
    expect(fallbackSvg).toContain('viewBox="0 0 128 128"');
    expect(fallbackSvg).toContain('width="64"');
    expect(fallbackSvg).toContain('?');
  });
});
