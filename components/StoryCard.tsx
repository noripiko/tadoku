'use client';

import React from 'react';
import { Check, CheckCircle2, Circle, Bookmark, ArrowRight, BookOpen } from 'lucide-react';
import { Story } from '@/lib/types';

interface StoryCardProps {
  story: Story;
  isRead: boolean;
  isBookmarked: boolean;
  onToggleRead: (storyId: string) => void;
  onToggleBookmark: (storyId: string) => void;
  onSelectStory: (story: Story) => void;
  priority?: boolean;
}

export function StoryCard({
  story,
  isRead,
  isBookmarked,
  onToggleRead,
  onToggleBookmark,
  onSelectStory,
}: StoryCardProps) {
  // Level visual accent color (like a book spine)
  const levelAccentClasses: Record<string, string> = {
    A1: 'border-l-emerald-500 hover:border-l-emerald-600',
    A2: 'border-l-teal-500 hover:border-l-teal-600',
    B1: 'border-l-blue-500 hover:border-l-blue-600',
    B2: 'border-l-indigo-500 hover:border-l-indigo-600',
    C1: 'border-l-purple-500 hover:border-l-purple-600',
  };

  const levelBadgeClasses: Record<string, string> = {
    A1: 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-900',
    A2: 'text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 border-teal-200 dark:border-teal-900',
    B1: 'text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-900',
    B2: 'text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-900',
    C1: 'text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 border-purple-200 dark:border-purple-900',
  };

  return (
    <article
      onClick={() => onSelectStory(story)}
      className={`group relative flex cursor-pointer flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 border-l-[5px] ${
        levelAccentClasses[story.level] || 'border-l-slate-400'
      } ${isRead ? 'opacity-90 bg-slate-50/40 dark:bg-slate-900/60' : ''}`}
    >
      <div>
        {/* Card Header: Level Badge, Genre, Status, Bookmark */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[11px] font-bold ${
                levelBadgeClasses[story.level] || 'bg-slate-100 text-slate-700'
              }`}
            >
              <BookOpen className="h-3 w-3 stroke-[2.5]" />
              {story.level}
            </span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {story.genreJa}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Read status pill */}
            {isRead && (
              <span className="inline-flex items-center gap-1 rounded bg-emerald-100 dark:bg-emerald-950/80 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                <Check className="h-3 w-3 stroke-[3]" />
                読了
              </span>
            )}

            {/* Bookmark button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleBookmark(story.id);
              }}
              aria-label={isBookmarked ? 'ブックマーク解除' : 'ブックマークに追加'}
              title={isBookmarked ? 'ブックマーク解除' : 'ブックマークに追加'}
              className={`flex h-7 w-7 items-center justify-center rounded-lg border transition-colors ${
                isBookmarked
                  ? 'border-amber-300 bg-amber-50 text-amber-500 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-400'
                  : 'border-slate-200 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:border-slate-800 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-300'
              }`}
            >
              <Bookmark className={`h-3.5 w-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Story Titles */}
        <div className="mt-3.5">
          <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
            {story.title}
          </h3>
          <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400 line-clamp-1">
            {story.titleJa}
          </p>
        </div>

        {/* Synopsis / Summary */}
        <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
          {story.summaryJa}
        </p>
      </div>

      {/* Card Footer: Word Count, Est. Time & Action */}
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-slate-800/80">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <span className="tabular-nums font-semibold text-slate-700 dark:text-slate-300">
            {story.wordCount}
          </span>
          <span>語</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">約 {story.readingTimeMinutes} 分</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Read Toggle Checkbox */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleRead(story.id);
            }}
            aria-label={isRead ? '未読に戻す' : '読了にする'}
            className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
            title={isRead ? '未読に戻す' : '読了にする'}
          >
            {isRead ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            ) : (
              <Circle className="h-4 w-4 text-slate-400 hover:text-slate-600 dark:text-slate-500" />
            )}
          </button>

          {/* Read Story Action */}
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400 transition-colors">
            <span>読む</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </article>
  );
}
