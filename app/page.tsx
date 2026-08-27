'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { EmojiExplorer } from '../components/EmojiExplorer';
import { EmojiModal } from '../components/EmojiModal';
import { LivePlayground } from '../components/LivePlayground';
import { DocumentationViewer } from '../components/DocumentationViewer';
import { DesignSystemViewer } from '../components/DesignSystemViewer';
import { Footer } from '../components/Footer';
import { EmojiData } from '../packages/core/src';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'explorer' | 'playground' | 'docs' | 'design'>('explorer');
  const [selectedEmoji, setSelectedEmoji] = useState<EmojiData | null>(null);

  const handleExploreClick = () => {
    setActiveTab('explorer');
    const el = document.getElementById('explorer-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPlayground = () => {
    setActiveTab('playground');
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FDFBF7] text-[#1E1F24]">
      {/* Top Sticky Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Body */}
      <main className="flex-1">
        {/* Always display Hero for quick stats and install bar when in Explorer or Playground */}
        {(activeTab === 'explorer' || activeTab === 'playground') && (
          <Hero onExploreClick={handleExploreClick} onOpenPlayground={handleOpenPlayground} />
        )}

        {/* Tab 1: Emoji Explorer Gallery */}
        {activeTab === 'explorer' && (
          <EmojiExplorer onSelectEmoji={(emoji) => setSelectedEmoji(emoji)} />
        )}

        {/* Tab 2: Interactive Sandbox / Playground */}
        {activeTab === 'playground' && <LivePlayground />}

        {/* Tab 3: Developer Documentation & API Guides */}
        {activeTab === 'docs' && <DocumentationViewer />}

        {/* Tab 4: Design System & Visual Guidelines */}
        {activeTab === 'design' && <DesignSystemViewer />}
      </main>

      {/* Emoji Detail Inspector Modal */}
      {selectedEmoji && (
        <EmojiModal
          emoji={selectedEmoji}
          onClose={() => setSelectedEmoji(null)}
          onSelectRelated={(emoji) => setSelectedEmoji(emoji)}
        />
      )}

      {/* Global Footer */}
      <Footer onNavigate={(tab) => setActiveTab(tab)} />
    </div>
  );
}
