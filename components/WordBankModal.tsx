'use client';

import React, { useState } from 'react';
import { X, Bookmark, Volume2, Trash2, Search, BookOpen, Copy, Check } from 'lucide-react';
import { SavedWord } from '@/lib/types';

interface WordBankModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedWords: SavedWord[];
  onRemoveWord: (wordId: string) => void;
}

export function WordBankModal({
  isOpen,
  onClose,
  savedWords,
  onRemoveWord,
}: WordBankModalProps) {
  const [search, setSearch] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredWords = savedWords.filter((w) =>
    w.word.toLowerCase().includes(search.toLowerCase()) ||
    (w.note && w.note.toLowerCase().includes(search.toLowerCase())) ||
    w.storyTitle.toLowerCase().includes(search.toLowerCase())
  );

  const handlePronounce = (word: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'de-DE';
    window.speechSynthesis.speak(utterance);
  };

  const handleCopyWord = (w: SavedWord) => {
    navigator.clipboard.writeText(`${w.word} - ${w.note || ''}`);
    setCopiedId(w.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 my-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Bookmark className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                マイ単語帳（Wortschatz）
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                読書中に保存したドイツ語表現（{savedWords.length} 語）
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search */}
        <div className="mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="単語やストーリー名で検索..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-4 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:outline-none dark:border-slate-800 dark:bg-slate-800 dark:text-slate-100"
            />
          </div>
        </div>

        {/* Word List */}
        <div className="mt-4 max-h-[50vh] overflow-y-auto space-y-2.5 pr-1">
          {filteredWords.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <BookOpen className="mx-auto h-8 w-8 mb-2 opacity-50" />
              <p className="text-xs">
                {savedWords.length === 0
                  ? 'まだ保存された単語はありません。ストーリー読書中に気になる単語をクリックするとここに追加されます。'
                  : '検索条件に一致する単語は見つかりませんでした。'}
              </p>
            </div>
          ) : (
            filteredWords.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-3.5 dark:border-slate-800 dark:bg-slate-800/40 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                      {item.word}
                    </span>
                    <button
                      onClick={() => handlePronounce(item.word)}
                      className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                      title="発音を聞く"
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                    </button>
                    {item.note && (
                      <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                        — {item.note}
                      </span>
                    )}
                  </div>

                  {item.contextSentence && (
                    <p className="mt-1 text-xs text-slate-500 italic line-clamp-1">
                      &quot;{item.contextSentence}&quot;
                    </p>
                  )}

                  <div className="mt-1 flex items-center gap-2 text-[10px] text-slate-400">
                    <span>出典: {item.storyTitle}</span>
                    <span>·</span>
                    <span>{new Date(item.savedAt).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => handleCopyWord(item)}
                    className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded"
                    title="コピー"
                  >
                    {copiedId === item.id ? (
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                  <button
                    onClick={() => onRemoveWord(item.id)}
                    className="p-1 text-slate-400 hover:text-red-600 dark:hover:text-red-400 rounded"
                    title="削除"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
