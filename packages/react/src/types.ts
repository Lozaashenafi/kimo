import React from 'react';
import { EmojiName, EmojiCategory } from '../../core/src/types';

export type { EmojiName, EmojiCategory };

export interface EmojiProps extends Omit<React.SVGProps<SVGSVGElement>, 'name'> {
  /**
   * Name of the emoji (e.g. 'happy', 'love', 'angry', 'frog-happy').
   * Fully typed for VS Code intellisense and autocomplete.
   */
  name: EmojiName | (string & {});
  /**
   * Size in pixels. Sets both width and height equally.
   * Convenient predefined sizes: 16, 20, 24, 32, 40, 48, 64, 80, 96, 128 (or any number/string).
   */
  size?: number | string;
  /**
   * Explicit width (overrides size if specified).
   */
  width?: number | string;
  /**
   * Explicit height (overrides size if specified).
   */
  height?: number | string;
  /**
   * Accessible description for assistive technology. Defaults to emoji label.
   */
  'aria-label'?: string;
  /**
   * Hides the emoji from assistive technology if used purely decoratively.
   */
  'aria-hidden'?: boolean | 'true' | 'false';
  /**
   * Tooltip title element content.
   */
  title?: string;
  /**
   * Optional custom fallback component when an invalid emoji name is provided.
   */
  fallback?: React.ReactNode;
  /**
   * Future animation flag for CSS micro-animations.
   */
  animated?: boolean;
}

export type IndividualEmojiProps = Omit<EmojiProps, 'name'>;

export interface EmojiContextValue {
  /** Global default size for all child <Emoji /> components */
  defaultSize?: number | string;
  /** Global default class applied to all child emojis */
  defaultClassName?: string;
  /** Global custom fallback element */
  fallback?: React.ReactNode;
  /** Global decorative flag default */
  defaultAriaHidden?: boolean;
}

export interface EmojiProviderProps {
  children: React.ReactNode;
  value?: EmojiContextValue;
  defaultSize?: number | string;
  defaultClassName?: string;
  fallback?: React.ReactNode;
  defaultAriaHidden?: boolean;
}
