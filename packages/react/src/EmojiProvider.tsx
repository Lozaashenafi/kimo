'use client';

import React, { createContext, useContext, useMemo } from 'react';
import { EmojiContextValue, EmojiProviderProps } from './types';

const EmojiContext = createContext<EmojiContextValue>({
  defaultSize: 32,
});

export function useEmojiContext(): EmojiContextValue {
  return useContext(EmojiContext);
}

export function EmojiProvider({
  children,
  value,
  defaultSize,
  defaultClassName,
  fallback,
  defaultAriaHidden,
}: EmojiProviderProps) {
  const contextValue = useMemo<EmojiContextValue>(() => {
    if (value) return value;
    return {
      defaultSize: defaultSize ?? 32,
      defaultClassName,
      fallback,
      defaultAriaHidden,
    };
  }, [value, defaultSize, defaultClassName, fallback, defaultAriaHidden]);

  return <EmojiContext.Provider value={contextValue}>{children}</EmojiContext.Provider>;
}
