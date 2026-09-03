'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface EmojiErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface EmojiErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error boundary that catches rendering errors from emoji components
 * and displays a graceful fallback instead of crashing the entire app.
 */
export class EmojiErrorBoundary extends Component<
  EmojiErrorBoundaryProps,
  EmojiErrorBoundaryState
> {
  constructor(props: EmojiErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): EmojiErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[kimo-emoji] EmojiErrorBoundary caught:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <svg
          viewBox="0 0 128 128"
          width="32"
          height="32"
          style={{ display: 'inline-block', verticalAlign: 'middle' }}
          role="img"
          aria-label="Emoji rendering error"
        >
          <rect width="128" height="128" rx="28" fill="#FEF2F2" stroke="#FECACA" strokeWidth="4" />
          <text
            x="64"
            y="74"
            textAnchor="middle"
            fontSize="40"
            fontWeight="bold"
            fill="#DC2626"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            !
          </text>
        </svg>
      );
    }

    return this.props.children;
  }
}
