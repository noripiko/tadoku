'use client';

import React, { useState, useMemo, useSyncExternalStore } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { LevelFilterBar } from '@/components/LevelFilterBar';
import { StoryCard } from '@/components/StoryCard';
import { StoryReader } from '@/components/StoryReader';
import { ProgressModal } from '@/components/ProgressModal';
import { WordBankModal } from '@/components/WordBankModal';
import { TadokuGuideModal } from '@/components/TadokuGuideModal';
import { TadokuSeoSection } from '@/components/TadokuSeoSection';
import { STORIES } from '@/lib/stories';
import { Story, UserProgress, SavedWord } from '@/lib/types';
import {
  getStoredProgress,
  toggleStoryReadStatus,
  toggleStoryBookmark,
  saveWordToBank,
  removeWordFromBank,
} from '@/lib/storage';
import { BookOpen, RefreshCw } from 'lucide-react';

const EMPTY_PROGRESS: UserProgress = {
  readStoryIds: [],
  bookmarkedStoryIds: [],
  savedWords: [],
  totalWordsRead: 0,
};

function subscribeProgress(callback: () => void) {
  window.addEventListener('tadoku_progress_updated', callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('tadoku_progress_updated', callback);
    window.removeEventListener('storage', callback);
  };
}

function subscribeTheme(callback: () => void) {
  window.addEventListener('tadoku_theme_updated', callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('tadoku_theme_updated', callback);
    window.removeEventListener('storage', callback);
  };
}

function subscribeMounted() {
  return () => {};
}

export default function Home() {
  const isMounted = useSyncExternalStore(
    subscribeMounted,
    () => true,
    () => false
  );

  const progress = useSyncExternalStore(
    subscribeProgress,
    getStoredProgress,
    () => EMPTY_PROGRESS
  );

  const isDark = useSyncExternalStore(
    subscribeTheme,
    () => {
      const saved = localStorage.getItem('tadoku_de_theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return saved === 'dark' || (!saved && prefersDark);
    },
    () => false
  );

  // Active view state
  const [activeStory, setActiveStory] = useState<Story | null>(null);

  // Filters
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedGenre, setSelectedGenre] = useState<string>('all');
  const [readFilter, setReadFilter] = useState<'all' | 'unread' | 'read'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals
  const [isProgressOpen, setIsProgressOpen] = useState(false);
  const [isWordBankOpen, setIsWordBankOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const toggleDarkMode = () => {
    const next = !isDark;
    localStorage.setItem('tadoku_de_theme', next ? 'dark' : 'light');
    if (next) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      document.body.classList.remove('dark');
    }
    window.dispatchEvent(new Event('tadoku_theme_updated'));
  };

  // Handlers
  const handleToggleRead = (storyId: string) => {
    toggleStoryReadStatus(storyId);
  };

  const handleToggleBookmark = (storyId: string) => {
    toggleStoryBookmark(storyId);
  };

  const handleSaveWord = (wordData: Omit<SavedWord, 'id' | 'savedAt'>) => {
    saveWordToBank(wordData);
  };

  const handleRemoveWord = (wordId: string) => {
    removeWordFromBank(wordId);
  };

  // Filtered stories calculation
  const filteredStories = useMemo(() => {
    return STORIES.filter((story) => {
      // Level filter
      if (selectedLevel !== 'all' && story.level !== selectedLevel) return false;

      // Genre filter
      if (selectedGenre !== 'all' && story.genre !== selectedGenre) return false;

      // Read status filter
      const isRead = progress.readStoryIds.includes(story.id);
      if (readFilter === 'unread' && isRead) return false;
      if (readFilter === 'read' && !isRead) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = story.title.toLowerCase().includes(query);
        const matchTitleJa = story.titleJa.toLowerCase().includes(query);
        const matchSummary = story.summaryJa.toLowerCase().includes(query);
        const matchSubtitle = story.subtitle.toLowerCase().includes(query);
        const matchVocab = story.vocabulary.some(
          (v) => v.german.toLowerCase().includes(query) || v.japanese.toLowerCase().includes(query)
        );
        if (!matchTitle && !matchTitleJa && !matchSummary && !matchSubtitle && !matchVocab) {
          return false;
        }
      }

      return true;
    });
  }, [selectedLevel, selectedGenre, readFilter, searchQuery, progress.readStoryIds]);

  const resetFilters = () => {
    setSelectedLevel('all');
    setSelectedGenre('all');
    setReadFilter('all');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Universal Top Bar */}
      <Header
        progress={progress}
        onOpenProgress={() => setIsProgressOpen(true)}
        onOpenWordBank={() => setIsWordBankOpen(true)}
        onOpenGuide={() => setIsGuideOpen(true)}
        isDark={isDark}
        onToggleDark={toggleDarkMode}
        onResetToHome={() => setActiveStory(null)}
        mounted={isMounted}
      />

      {/* Main View Router: Story Reader vs Stories Catalog */}
      {activeStory ? (
        <main className="flex-1">
          <StoryReader
            story={activeStory}
            isRead={progress.readStoryIds.includes(activeStory.id)}
            isBookmarked={progress.bookmarkedStoryIds.includes(activeStory.id)}
            onToggleRead={handleToggleRead}
            onToggleBookmark={handleToggleBookmark}
            onSaveWord={handleSaveWord}
            onBack={() => setActiveStory(null)}
            onSelectStory={(s) => {
              setActiveStory(s);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            allStories={STORIES}
          />
        </main>
      ) : (
        <main className="flex-1">
          {/* Hero Section */}
          <HeroSection
            progress={progress}
            onSelectLevel={(lvl) => setSelectedLevel(lvl)}
            activeLevel={selectedLevel}
            onSelectStory={(s) => {
              setActiveStory(s);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          {/* Stories Catalog Section */}
          <section id="stories-catalog" className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
            {/* Filter Bar */}
            <LevelFilterBar
              selectedLevel={selectedLevel}
              onSelectLevel={setSelectedLevel}
              selectedGenre={selectedGenre}
              onSelectGenre={setSelectedGenre}
              readFilter={readFilter}
              onSelectReadFilter={setReadFilter}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              readStoryIds={progress.readStoryIds}
            />

            {/* Results count & reset */}
            <div className="mt-6 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5 font-medium">
                <span>表示中:</span>
                <strong className="text-slate-900 dark:text-slate-100 tabular-nums">
                  {filteredStories.length} 編
                </strong>
                <span>（全 {STORIES.length} 編中）</span>
              </div>

              {(selectedLevel !== 'all' ||
                selectedGenre !== 'all' ||
                readFilter !== 'all' ||
                searchQuery) && (
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                >
                  <RefreshCw className="h-3 w-3" />
                  <span>フィルター解除</span>
                </button>
              )}
            </div>

            {/* Stories Grid */}
            {filteredStories.length === 0 ? (
              <div className="mt-8 rounded-2xl border border-dashed border-slate-200 p-12 text-center dark:border-slate-800">
                <BookOpen className="mx-auto h-10 w-10 text-slate-300 dark:text-slate-700" />
                <h3 className="mt-3 text-sm font-bold text-slate-900 dark:text-slate-100">
                  該当するストーリーが見つかりません
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  検索ワードやレベル、ジャンルなどのフィルター条件を変更してお試しください。
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900"
                >
                  すべてのストーリーを表示
                </button>
              </div>
            ) : (
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredStories.map((story, idx) => (
                  <StoryCard
                    key={story.id}
                    story={story}
                    isRead={progress.readStoryIds.includes(story.id)}
                    isBookmarked={progress.bookmarkedStoryIds.includes(story.id)}
                    onToggleRead={handleToggleRead}
                    onToggleBookmark={handleToggleBookmark}
                    onSelectStory={(s) => {
                      setActiveStory(s);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    priority={idx === 0}
                  />
                ))}
              </div>
            )}
          </section>

          {/* SEO Content, Tadoku Method & FAQ Section */}
          <TadokuSeoSection />
        </main>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-8 dark:border-slate-800 dark:bg-slate-950 transition-colors">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 dark:text-slate-100">
              Tadoku Deutsch
            </span>
            <span aria-hidden="true">·</span>
            <span>プライバシー第一のドイツ語多読プラットフォーム</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsGuideOpen(true)}
              className="hover:text-slate-900 dark:hover:text-slate-200"
            >
              多読ガイド
            </button>
            <button
              onClick={() => setIsProgressOpen(true)}
              className="hover:text-slate-900 dark:hover:text-slate-200"
            >
              進捗・データ管理
            </button>
            <button
              onClick={() => setIsWordBankOpen(true)}
              className="hover:text-slate-900 dark:hover:text-slate-200"
            >
              単語帳
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ProgressModal
        isOpen={isProgressOpen}
        onClose={() => setIsProgressOpen(false)}
        progress={progress}
        onProgressReset={() => window.dispatchEvent(new Event('tadoku_progress_updated'))}
      />

      <WordBankModal
        isOpen={isWordBankOpen}
        onClose={() => setIsWordBankOpen(false)}
        savedWords={progress.savedWords}
        onRemoveWord={handleRemoveWord}
      />

      <TadokuGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
}
