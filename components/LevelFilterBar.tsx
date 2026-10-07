'use client';

import React from 'react';
import { Search, X } from 'lucide-react';
import { CefrLevel } from '@/lib/types';
import { STORIES, CEFR_DESCRIPTIONS } from '@/lib/stories';

interface LevelFilterBarProps {
  selectedLevel: string;
  onSelectLevel: (lvl: string) => void;
  selectedGenre: string;
  onSelectGenre: (genre: string) => void;
  readFilter: 'all' | 'unread' | 'read';
  onSelectReadFilter: (filter: 'all' | 'unread' | 'read') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  readStoryIds: string[];
}

export function LevelFilterBar({
  selectedLevel,
  onSelectLevel,
  selectedGenre,
  onSelectGenre,
  readFilter,
  onSelectReadFilter,
  searchQuery,
  onSearchChange,
  readStoryIds,
}: LevelFilterBarProps) {
  const levels: ('all' | CefrLevel)[] = ['all', 'A1', 'A2', 'B1', 'B2', 'C1'];

  const genres: { id: string; label: string }[] = [
    { id: 'all', label: '全ジャンル' },
    { id: 'Fairy Tale', label: '童話・名作民話' },
    { id: 'Comedy', label: 'コメディ' },
    { id: 'Surreal', label: 'シュール' },
    { id: 'Mystery', label: 'ミステリー' },
    { id: 'Sci-Fi', label: 'SF' },
    { id: 'Philosophy', label: '哲学' },
  ];

  return (
    <div className="space-y-4">
      {/* CEFR Level Segmented Control Tabs */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider dark:text-slate-400">
            CEFR レベル選択
          </span>
          {selectedLevel !== 'all' && CEFR_DESCRIPTIONS[selectedLevel] && (
            <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
              {CEFR_DESCRIPTIONS[selectedLevel].descJa}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-xl no-scrollbar">
          {levels.map((lvl) => {
            const isSelected = selectedLevel === lvl;
            const levelStories = lvl === 'all' ? STORIES : STORIES.filter((s) => s.level === lvl);
            const levelReadCount = levelStories.filter((s) => readStoryIds.includes(s.id)).length;
            const totalInLevel = levelStories.length;

            return (
              <button
                key={lvl}
                onClick={() => onSelectLevel(lvl)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg transition-all shrink-0 whitespace-nowrap ${
                  isSelected
                    ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-slate-100 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                <span>{lvl === 'all' ? 'All Stories' : lvl}</span>
                <span
                  className={`text-[10px] tabular-nums px-1.5 py-0.5 rounded ${
                    isSelected
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      : 'bg-black/5 dark:bg-white/5 text-slate-500'
                  }`}
                >
                  {levelReadCount}/{totalInLevel}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Second Row: Search, Genre Filter, and Read Status */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="タイトル・単語・あらすじを検索..."
            className="w-full rounded-lg border border-slate-200 bg-white pl-9 pr-8 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Filters Group */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {/* Genre selector */}
          <select
            value={selectedGenre}
            onChange={(e) => onSelectGenre(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-xs text-slate-700 focus:border-slate-400 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          >
            {genres.map((g) => (
              <option key={g.id} value={g.id}>
                {g.label}
              </option>
            ))}
          </select>

          {/* Read Status Filter */}
          <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 p-1 dark:border-slate-800 dark:bg-slate-900 shrink-0">
            <button
              onClick={() => onSelectReadFilter('all')}
              className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                readFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-slate-100 font-medium'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              すべて
            </button>
            <button
              onClick={() => onSelectReadFilter('unread')}
              className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                readFilter === 'unread'
                  ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-slate-100 font-medium'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              未読
            </button>
            <button
              onClick={() => onSelectReadFilter('read')}
              className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                readFilter === 'read'
                  ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-slate-100 font-medium'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              読了のみ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
