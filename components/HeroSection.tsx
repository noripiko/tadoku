'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, ShieldCheck } from 'lucide-react';
import { UserProgress } from '@/lib/types';
import { STORIES } from '@/lib/stories';

interface HeroSectionProps {
  progress: UserProgress;
  onSelectLevel: (level: string) => void;
  activeLevel: string;
}

export function HeroSection({ progress, onSelectLevel, activeLevel }: HeroSectionProps) {
  const [showRules, setShowRules] = useState(false);
  const totalStories = STORIES.length;
  const completedStoriesCount = progress.readStoryIds.length;
  const progressPercent = Math.round((completedStoriesCount / totalStories) * 100);

  return (
    <section className="relative border-b border-slate-200 bg-slate-50/70 py-10 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Headlines & Pitch */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1 text-slate-900 dark:text-slate-100 font-semibold">
                🇩🇪 Tadoku Deutsch
              </span>
              <span aria-hidden="true">·</span>
              <span>プライバシー第一</span>
              <span aria-hidden="true">·</span>
              <span>CEFR A1〜C1</span>
            </div>

            <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 [text-wrap:balance]">
              教科書を捨てて、<br className="hidden sm:inline" />ドイツ語の物語の世界へ。
            </h1>

            <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              官僚主義に物申す自販機、時空を超えるUバーン、哲学する芝刈り機——。
              文法ドリルではなく、好奇心でグイグイ読み進めるドイツ語多読（Tadoku）プラットフォーム。
              登録不要・トラッキングゼロ、進捗データはすべてお手元のブラウザに安全に保存されます。
            </p>

            {/* Quick 3 Tadoku Principles Toggle */}
            <div className="mt-5">
              <button
                onClick={() => setShowRules(!showRules)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                <span>多読を10倍楽しむ「3つのルール」</span>
                {showRules ? (
                  <ChevronUp className="h-3.5 w-3.5 text-slate-400" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                )}
              </button>

              {showRules && (
                <div className="mt-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs text-slate-600 dark:text-slate-300 space-y-2 animate-in fade-in duration-200">
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[11px] font-bold text-white dark:bg-slate-100 dark:text-slate-900">
                      1
                    </span>
                    <div>
                      <strong className="text-slate-900 dark:text-slate-100">辞書は引かない：</strong>
                      1語1語調べるのをやめ、文脈や挿絵から全体の流れを推測して読み進めます。
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[11px] font-bold text-white dark:bg-slate-100 dark:text-slate-900">
                      2
                    </span>
                    <div>
                      <strong className="text-slate-900 dark:text-slate-100">分からない所は飛ばす：</strong>
                      引っかかっても立ち止まらずに飛ばしてOK。大意が掴めれば十分です。
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[11px] font-bold text-white dark:bg-slate-100 dark:text-slate-900">
                      3
                    </span>
                    <div>
                      <strong className="text-slate-900 dark:text-slate-100">進まなくなったら別の話へ：</strong>
                      難しすぎたり退屈に感じたら迷わず別のレベル・ストーリーへ切り替えます。
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Google Engineer Style Metrics Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800/80">
                <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  Your Local Reading Stats
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  完全ローカル
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
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

              {/* Level Quick Nav */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400">レベル別ジャンプ:</span>
                <div className="flex items-center gap-1">
                  {['A1', 'A2', 'B1', 'B2', 'C1'].map((lvl) => {
                    const isSelected = activeLevel === lvl;
                    return (
                      <button
                        key={lvl}
                        onClick={() => onSelectLevel(lvl)}
                        className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
                          isSelected
                            ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                            : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                        }`}
                      >
                        {lvl}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
