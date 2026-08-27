import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import { Emoji, Happy, FrogHappy, EmojiProvider } from '../packages/react/src';

describe('@kimo-emoji/react', () => {
  it('should render <Emoji name="happy" /> to HTML', () => {
    const html = renderToString(<Emoji name="happy" size={48} />);
    expect(html).toContain('<svg');
    expect(html).toContain('width="48"');
    expect(html).toContain('height="48"');
    expect(html).toContain('viewBox="0 0 128 128"');
    expect(html).toContain('aria-label="Happy"');
  });

  it('should render individual component <Happy size={32} />', () => {
    const html = renderToString(<Happy size={32} className="test-happy" />);
    expect(html).toContain('width="32"');
    expect(html).toContain('height="32"');
    expect(html).toContain('class="kimo-emoji test-happy"');
  });

  it('should render custom animal emoji <FrogHappy />', () => {
    const html = renderToString(<FrogHappy size={64} />);
    expect(html).toContain('width="64"');
    expect(html).toContain('aria-label="Happy Frog"');
  });

  it('should support width and height overrides', () => {
    const html = renderToString(<Emoji name="love" width={40} height={20} />);
    expect(html).toContain('width="40"');
    expect(html).toContain('height="20"');
  });

  it('should support decorative aria-hidden', () => {
    const html = renderToString(<Emoji name="cool" aria-hidden="true" />);
    expect(html).toContain('aria-hidden="true"');
  });

  it('should inherit defaults from <EmojiProvider>', () => {
    const html = renderToString(
      <EmojiProvider defaultSize={56} defaultClassName="global-theme-emoji">
        <Emoji name="wink" />
      </EmojiProvider>
    );
    expect(html).toContain('width="56"');
    expect(html).toContain('height="56"');
    expect(html).toContain('global-theme-emoji');
  });

  it('should render graceful fallback for unknown emoji without crashing', () => {
    const html = renderToString(<Emoji name={'does-not-exist' as any} size={40} />);
    expect(html).toContain('<svg');
    expect(html).toContain('width="40"');
    expect(html).toContain('?');
  });
});
