'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  BookOpen,
  Layers,
  ArrowRight,
  Languages,
  Volume2,
} from 'lucide-react';
import { UserProgress, Story } from '@/lib/types';
import { STORIES } from '@/lib/stories';

interface HeroSectionProps {
  progress: UserProgress;
  onSelectStory?: (story: Story) => void;
}

export function HeroSection({
  progress,
  onSelectStory,
}: HeroSectionProps) {
  const [showRules, setShowRules] = useState(false);
  const totalStories = STORIES.length;
  const completedStoriesCount = progress.readStoryIds.length;
  const progressPercent = Math.round((completedStoriesCount / totalStories) * 100);

  // Recommended story: prioritize unread beginner story in A1, or next unread across all, or first story
  const readSet = new Set(progress.readStoryIds);
  const recommendedStory =
    STORIES.find((s) => s.level === 'A1' && !readSet.has(s.id)) ||
    STORIES.find((s) => !readSet.has(s.id)) ||
    STORIES[0];
  const hasStartedReading = progress.readStoryIds.length > 0;

  const scrollToCatalog = () => {
    document.getElementById('stories-catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative border-b border-slate-200 bg-slate-50/70 py-10 sm:py-12 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Clear Value Proposition */}
          <div className="lg:col-span-7">
            {/* Top Category Badge */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              <span>🇩🇪 ドイツ語多読プラットフォーム</span>
              <span aria-hidden="true">·</span>
              <span>CEFR A1〜C1（全{totalStories}編・グリム童話＆古典収録）</span>
              <span aria-hidden="true">·</span>
              <span>完全無料・登録不要</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-3.5 text-3xl sm:text-4xl lg:text-4.5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 [text-wrap:balance] leading-[1.2]">
              辞書を引かずに、<br className="hidden sm:inline" />
              ドイツ語の物語を浴びるように読む。
            </h1>

            {/* Subheading: Concrete & Concise */}
            <p className="mt-3.5 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              文法ドリルで挫折した学習者のための「ドイツ語多読（Tadoku）」リーダー。
              グリム童話やほら吹き男爵・オイレンシュピーゲル、クスッと笑える日常譚で、辞書を引かずにドイツ語脳を育成。
              一行対訳・ネイティブ音声・クリック単語帳で、つまずかずに自然と読み進められます。
            </p>

            {/* 3 Core Value Props - Clean Micro-Cards */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold text-xs">
                  <Layers className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>A1〜C1 全{totalStories}編</span>
                </div>
                <p className="mt-1 text-[11px] leading-snug text-slate-500 dark:text-slate-400">
                  グリム名作童話・入門短編からB1長編・B2本格作まで。レベル別にスムーズに多読。
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold text-xs">
                  <Languages className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>辞書いらずの一行対訳</span>
                </div>
                <p className="mt-1 text-[11px] leading-snug text-slate-500 dark:text-slate-400">
                  段落ごとに日本語訳の表示・非表示を切り替え。単語タップで即座に単語帳に追加。
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold text-xs">
                  <Volume2 className="h-4 w-4 text-violet-600 dark:text-violet-400 shrink-0" />
                  <span>ネイティブ音声朗読</span>
                </div>
                <p className="mt-1 text-[11px] leading-snug text-slate-500 dark:text-slate-400">
                  段落単位または全文の音声再生。耳と目を連動させてドイツ語のリズムを習得。
                </p>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={`/stories/${recommendedStory.id}`}
                onClick={() => {
                  if (onSelectStory) {
                    onSelectStory(recommendedStory);
                  }
                }}
                className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white transition-all"
              >
                <span>
                  {hasStartedReading
                    ? `続きの未読ストーリー（${recommendedStory.level}）を読む`
                    : 'まずはA1（入門・2分）を読む'}
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <button
                onClick={scrollToCatalog}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                <span>ストーリー一覧</span>
              </button>

              <button
                onClick={() => {
                  document.getElementById('guide-faq')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                <span>多読学習ガイド & FAQ</span>
              </button>

              <button
                onClick={() => setShowRules(!showRules)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 px-2 py-2 transition-colors ml-auto sm:ml-0"
              >
                <BookOpen className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>多読の3原則</span>
                {showRules ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
              </button>
            </div>

            {/* Collapsible Tadoku 3 Principles Drawer */}
            {showRules && (
              <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs text-slate-600 dark:text-slate-300 space-y-2.5 animate-in fade-in duration-200">
                <div className="font-bold text-slate-900 dark:text-slate-100 text-xs flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>多読を10倍楽しむ「3つの鉄則」</span>
                </div>
                <div className="grid gap-2 sm:grid-cols-3 pt-1">
                  <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800/60">
                    <span className="font-bold text-slate-900 dark:text-slate-100 block">
                      1. 辞書は引かない
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      1語ずつ調べず、文脈や雰囲気から全体の流れを推測します。
                    </span>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800/60">
                    <span className="font-bold text-slate-900 dark:text-slate-100 block">
                      2. 分からない所は飛ばす
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      引っかかっても立ち止まらずスキップ。大意が掴めれば十分です。
                    </span>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800/60">
                    <span className="font-bold text-slate-900 dark:text-slate-100 block">
                      3. 合わなければ別の話へ
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      難しすぎたり退屈なら、迷わず別レベルや別ジャンルへ切り替えます。
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Google Engineer Style Metrics Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800/80">
                <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                  学習ステータス（ローカル保存）
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  端末内のみ
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-xl bg-slate-50 p-3.5 dark:bg-slate-800/50">
                  <span className="text-xs text-slate-500 dark:text-slate-400">累計読了語数</span>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                      {progress.totalWordsRead.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-500">語</span>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 p-3.5 dark:bg-slate-800/50">
                  <span className="text-xs text-slate-500 dark:text-slate-400">読了ストーリー</span>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                      {completedStoriesCount}
                    </span>
                    <span className="text-xs text-slate-500">/ {totalStories} 編</span>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-4">
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                  <span>ライブラリ走破率</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100 tabular-nums">
                    {progressPercent}%
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-slate-900 dark:bg-slate-100 transition-all duration-500 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
