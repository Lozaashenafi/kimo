import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kimo Emoji — Production-Ready SVG Emoji UI Library for React & Web',
  description: 'An open-source, expressive SVG emoji library for React, TypeScript, and modern JavaScript with tree-shaking, accessibility, and zero-runtime overhead.',
  openGraph: {
    title: 'Kimo Emoji — Production-Ready SVG Emoji UI Library',
    description: 'An open-source, expressive SVG emoji library for React, TypeScript, and modern JavaScript with tree-shaking, accessibility, and zero-runtime overhead.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kimo Emoji — Production-Ready SVG Emoji UI Library',
    description: 'An open-source, expressive SVG emoji library for React, TypeScript, and modern JavaScript with tree-shaking, accessibility, and zero-runtime overhead.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#FDFBF7] text-[#1E1F24] antialiased selection:bg-[#FFD1DC] selection:text-[#1E1F24]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
