'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Award, Bookmark, HelpCircle, Moon, Sun, ShieldCheck } from 'lucide-react';
import { UserProgress } from '@/lib/types';

interface HeaderProps {
  progress: UserProgress;
  onOpenProgress: () => void;
  onOpenWordBank: () => void;
  onOpenGuide: () => void;
  isDark: boolean;
  onToggleDark: () => void;
  onResetToHome?: () => void;
  mounted?: boolean;
}

export function Header({
  progress,
  onOpenProgress,
  onOpenWordBank,
  onOpenGuide,
  isDark,
  onToggleDark,
  onResetToHome,
  mounted = true,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95 transition-colors">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Zone 1: Wordmark */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            onClick={() => {
              if (onResetToHome) onResetToHome();
            }}
            className="group flex items-center gap-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded-lg p-1"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-sm transition-transform group-hover:scale-105" aria-hidden="true">
              <BookOpen className="h-5 w-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  Tadoku Deutsch
                </span>
                <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-1.5 py-0.2 rounded">
                  A1–C1
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-none">
                ドイツ語多読リーダー · 登録不要
              </p>
            </div>
          </Link>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link
            href="/#stories-catalog"
            onClick={() => {
              if (onResetToHome) onResetToHome();
            }}
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            ストーリー一覧
          </Link>
          <button
            onClick={onOpenProgress}
            className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Award className="h-4 w-4 text-amber-500" />
            <span>読了進捗</span>
          </button>
          <button
            onClick={onOpenWordBank}
            className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Bookmark className="h-4 w-4 text-blue-500" />
            <span>単語帳</span>
            {progress.savedWords.length > 0 && (
              <span className="text-xs text-slate-400 dark:text-slate-500 tabular-nums">
                ({progress.savedWords.length})
              </span>
            )}
          </button>
          <button
            onClick={onOpenGuide}
            className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <HelpCircle className="h-4 w-4 text-slate-400" />
            <span>多読の極意</span>
          </button>
        </nav>

        {/* Zone 3: Actions & Quick Stats */}
        <div className="flex items-center gap-2.5">
          {/* Quick Word Count Metric */}
          <button
            onClick={onOpenProgress}
            className="hidden sm:flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
            title="累計読了語数と進捗"
          >
            <BookOpen className="h-3.5 w-3.5 text-slate-500" />
            <span className="font-semibold text-slate-900 dark:text-slate-100 tabular-nums">
              {mounted ? progress.totalWordsRead.toLocaleString() : '0'}
            </span>
            <span className="text-slate-500 dark:text-slate-400">語読了</span>
          </button>

          {/* Privacy badge */}
          <div
            className="hidden lg:flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500 pl-1"
            title="完全ローカル完結・トラッキングなし"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
            <span>Local only</span>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDark}
            aria-label="テーマ切り替え"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
          >
            {mounted ? (
              isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />
            ) : (
              <span className="h-4 w-4 opacity-0" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
