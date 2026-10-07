'use client';

import React, { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import { StoryReader } from '@/components/StoryReader';
import { ProgressModal } from '@/components/ProgressModal';
import { WordBankModal } from '@/components/WordBankModal';
import { TadokuGuideModal } from '@/components/TadokuGuideModal';
import { STORIES } from '@/lib/stories';
import { Story, UserProgress, SavedWord } from '@/lib/types';
import {
  getStoredProgress,
  toggleStoryReadStatus,
  toggleStoryBookmark,
  saveWordToBank,
  removeWordFromBank,
} from '@/lib/storage';
import { ChevronRight, Home, BookOpen } from 'lucide-react';

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

interface StoryViewClientProps {
  story: Story;
}

export function StoryViewClient({ story }: StoryViewClientProps) {
  const router = useRouter();

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
        onResetToHome={() => router.push('/')}
        mounted={isMounted}
      />

      {/* Semantic Breadcrumbs for Navigation & SEO */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto w-full max-w-4xl px-4 pt-4 sm:px-6 text-xs text-slate-500 dark:text-slate-400"
      >
        <ol className="flex items-center gap-1.5 flex-wrap">
          <li className="inline-flex items-center gap-1">
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Home className="h-3 w-3" />
              <span>ホーム</span>
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-3 w-3 text-slate-400" />
          </li>
          <li className="inline-flex items-center gap-1">
            <Link
              href="/#stories-catalog"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              ストーリー一覧
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-3 w-3 text-slate-400" />
          </li>
          <li>
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {story.level}
            </span>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-3 w-3 text-slate-400" />
          </li>
          <li aria-current="page" className="truncate max-w-[200px] sm:max-w-xs font-medium text-slate-900 dark:text-slate-100">
            {story.titleJa}
          </li>
        </ol>
      </nav>

      {/* Reader Main */}
      <main className="flex-1">
        <StoryReader
          story={story}
          isRead={progress.readStoryIds.includes(story.id)}
          isBookmarked={progress.bookmarkedStoryIds.includes(story.id)}
          onToggleRead={handleToggleRead}
          onToggleBookmark={handleToggleBookmark}
          onSaveWord={handleSaveWord}
          onBack={() => router.push('/#stories-catalog')}
          onSelectStory={(s) => {
            router.push(`/stories/${s.id}`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          allStories={STORIES}
        />
      </main>
 
      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200 bg-slate-50 py-8 dark:border-slate-800 dark:bg-slate-950 transition-colors">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2.5">
            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900" aria-hidden="true">
              <BookOpen className="h-3 w-3 stroke-[2.2]" />
            </div>
            <Link href="/" className="font-bold text-slate-900 dark:text-slate-100 hover:underline">
              Tadoku Deutsch
            </Link>
            <span aria-hidden="true">·</span>
            <span>ドイツ語多読リーダー</span>
            <span aria-hidden="true">·</span>
            <span className="font-medium text-slate-700 dark:text-slate-300">© 2026 noripiko</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/#stories-catalog"
              className="hover:text-slate-900 dark:hover:text-slate-200"
            >
              ストーリー一覧
            </Link>
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
