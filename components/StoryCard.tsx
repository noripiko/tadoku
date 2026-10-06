'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Check, CheckCircle2, Circle, Bookmark, ArrowRight } from 'lucide-react';
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
  priority = false,
}: StoryCardProps) {
  const [imageError, setImageError] = useState(false);

  // Level visual accent color
  const levelAccentClasses: Record<string, string> = {
    A1: 'border-l-emerald-500',
    A2: 'border-l-teal-500',
    B1: 'border-l-blue-500',
    B2: 'border-l-indigo-500',
    C1: 'border-l-purple-500',
  };

  const levelBadgeClasses: Record<string, string> = {
    A1: 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60',
    A2: 'text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60',
    B1: 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60',
    B2: 'text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60',
    C1: 'text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60',
  };

  return (
    <article
      className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 border-l-4 ${
        levelAccentClasses[story.level] || 'border-l-slate-400'
      } ${isRead ? 'opacity-90' : ''}`}
    >
      <div>
        {/* Thumbnail Image Header */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          {!imageError && story.image ? (
            <Image
              src={story.image}
              alt={story.title}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-6 text-center">
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                {story.title}
              </span>
            </div>
          )}

          {/* Read status ribbon tag overlay */}
          {isRead && (
            <div className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded bg-emerald-600/90 backdrop-blur-sm px-2 py-0.5 text-[11px] font-semibold text-white shadow-sm">
              <Check className="h-3 w-3 stroke-[3]" />
              <span>読了</span>
            </div>
          )}

          {/* Bookmark Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(story.id);
            }}
            title={isBookmarked ? 'ブックマーク解除' : 'ブックマークに追加'}
            className={`absolute top-2.5 left-2.5 flex h-7 w-7 items-center justify-center rounded bg-black/40 backdrop-blur-sm text-white transition-colors hover:bg-black/60 ${
              isBookmarked ? 'text-amber-300' : 'text-white/80'
            }`}
          >
            <Bookmark className={`h-3.5 w-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5">
          {/* Zero-Pill Unboxed Metadata with Typographic Separators */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <span
              className={`font-bold px-1.5 py-0.5 rounded text-[11px] ${
                levelBadgeClasses[story.level]
              }`}
            >
              {story.level}
            </span>
            <span aria-hidden="true">·</span>
            <span>{story.genreJa}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{story.wordCount} 語</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">約 {story.readingTimeMinutes} 分</span>
          </div>

          {/* German Title & Japanese Title */}
          <h3 className="mt-2.5 text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {story.title}
          </h3>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
            {story.titleJa}
          </p>

          {/* Summary / Teaser */}
          <p className="mt-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
            {story.summaryJa}
          </p>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        {/* Toggle Read Button */}
        <button
          onClick={() => onToggleRead(story.id)}
          className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
            isRead
              ? 'text-emerald-600 dark:text-emerald-400 hover:text-emerald-700'
              : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
          }`}
          title="読了ステータスを切り替え"
        >
          {isRead ? (
            <>
              <CheckCircle2 className="h-4 w-4 fill-emerald-100 dark:fill-emerald-950" />
              <span>読了済み</span>
            </>
          ) : (
            <>
              <Circle className="h-4 w-4" />
              <span>未読</span>
            </>
          )}
        </button>

        {/* Read Button */}
        <button
          onClick={() => onSelectStory(story)}
          className="flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-blue-600 dark:text-slate-100 dark:hover:text-blue-400 transition-colors"
        >
          <span>読む</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </article>
  );
}
