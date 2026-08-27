'use client';

import React, { forwardRef } from 'react';
import { getEmoji } from '../../core/src/emoji';
import { useEmojiContext } from './EmojiProvider';
import { EmojiProps } from './types';

// Helper to extract inner markup from full SVG string
function getSvgInner(svgContent: string): string {
  const match = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  return match ? match[1] : svgContent;
}

export const Emoji = forwardRef<SVGSVGElement, EmojiProps>(function Emoji(
  {
    name,
    size,
    width,
    height,
    className,
    'aria-label': ariaLabel,
    'aria-hidden': ariaHidden,
    title,
    fallback,
    style,
    animated,
    ...restProps
  },
  ref
) {
  const context = useEmojiContext();

  const emoji = getEmoji(name);

  // Compute final dimensions
  const finalSize = size ?? context.defaultSize ?? 32;
  const finalWidth = width ?? finalSize;
  const finalHeight = height ?? finalSize;

  // Combine CSS class names
  const classes = [
    'kimo-emoji',
    animated ? 'kimo-emoji-animated' : '',
    context.defaultClassName,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Compute Accessibility
  const isAriaHidden = ariaHidden !== undefined ? ariaHidden : context.defaultAriaHidden;
  const label = ariaLabel || (emoji ? emoji.label : `Emoji ${name}`);

  // Fallback handling for unknown emoji names
  if (!emoji) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[kimo-emoji] Unknown emoji "${name}". Please check the emoji name or update the library.`);
    }

    if (fallback !== undefined) {
      return <>{fallback}</>;
    }
    if (context.fallback !== undefined) {
      return <>{context.fallback}</>;
    }

    // Default graceful fallback
    return (
      <svg
        ref={ref}
        viewBox="0 0 128 128"
        width={finalWidth}
        height={finalHeight}
        className={classes}
        style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
        role={isAriaHidden ? undefined : 'img'}
        aria-label={isAriaHidden ? undefined : label}
        aria-hidden={isAriaHidden}
        {...restProps}
      >
        {title && !isAriaHidden && <title>{title}</title>}
        <rect width="128" height="128" rx="28" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="4" />
        <text
          x="64"
          y="74"
          textAnchor="middle"
          fontSize="40"
          fontWeight="bold"
          fill="#9CA3AF"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          ?
        </text>
      </svg>
    );
  }

  const innerSvg = getSvgInner(emoji.svg);

  return (
    <svg
      ref={ref}
      viewBox={emoji.viewBox || '0 0 128 128'}
      width={finalWidth}
      height={finalHeight}
      className={classes}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        overflow: 'visible',
        ...style,
      }}
      role={isAriaHidden ? undefined : 'img'}
      aria-label={isAriaHidden ? undefined : label}
      aria-hidden={isAriaHidden}
      dangerouslySetInnerHTML={{
        __html: title && !isAriaHidden ? `<title>${title}</title>${innerSvg}` : innerSvg,
      }}
      {...restProps}
    />
  );
});

Emoji.displayName = 'Emoji';
