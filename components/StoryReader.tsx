'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Volume2,
  Languages,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Plus,
  BookOpen,
  Sparkles,
  Info,
  Sliders,
  Pause,
} from 'lucide-react';
import { Story, ReaderSettings, SavedWord } from '@/lib/types';
import { getReaderSettings, saveReaderSettings } from '@/lib/storage';

interface StoryReaderProps {
  story: Story;
  isRead: boolean;
  isBookmarked: boolean;
  readStoryIds?: string[];
  onToggleRead: (storyId: string) => void;
  onToggleBookmark: (storyId: string) => void;
  onSaveWord: (wordData: Omit<SavedWord, 'id' | 'savedAt'>) => void;
  onBack: () => void;
  onSelectStory: (story: Story) => void;
  allStories: Story[];
}

export function StoryReader({
  story,
  isRead,
  readStoryIds = [],
  onToggleRead,
  onSaveWord,
  onBack,
  onSelectStory,
  allStories,
}: StoryReaderProps) {
  // Settings state
  const [settings, setSettings] = useState<ReaderSettings>(() => getReaderSettings());
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);

  // Translation accordions
  const [showFullTranslation, setShowFullTranslation] = useState(false);
  const [showVocabList, setShowVocabList] = useState(true);
  const [revealedParagraphs, setRevealedParagraphs] = useState<Record<number, boolean>>({});

  // TTS audio state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState<number | null>(null);

  // Word selection notification
  const [wordSavedNotice, setWordSavedNotice] = useState<string | null>(null);

  // Read status celebratory feedback
  const [justMarkedRead, setJustMarkedRead] = useState(false);

  // Clean up speech on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Handle settings change
  const updateSetting = <K extends keyof ReaderSettings>(key: K, value: ReaderSettings[K]) => {
    const updated = saveReaderSettings({ [key]: value });
    setSettings(updated);
  };

  // German Text-To-Speech
  const handlePlayParagraph = (text: string, index: number) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isPlaying && currentPlayingIndex === index) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentPlayingIndex(null);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = settings.ttsSpeed;

    // Pick German voice if available
    const voices = window.speechSynthesis.getVoices();
    const germanVoice = voices.find((v) => v.lang.startsWith('de')) || null;
    if (germanVoice) {
      utterance.voice = germanVoice;
    }

    utterance.onstart = () => {
      setIsPlaying(true);
      setCurrentPlayingIndex(index);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setCurrentPlayingIndex(null);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setCurrentPlayingIndex(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  const handlePlayFullStory = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentPlayingIndex(null);
      return;
    }

    const fullGermanText = story.paragraphs.map((p) => p.german).join(' ');
    handlePlayParagraph(fullGermanText, -1);
  };

  // Toggle individual paragraph Japanese reveal
  const toggleParagraphReveal = (id: number) => {
    setRevealedParagraphs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Quick word lookup on double click or click
  const handleWordClick = (wordRaw: string, contextSentence: string) => {
    const clean = wordRaw.replace(/[.,/#!$%^&*;:{}=\-_`~()»«"„"]/g, '').trim();
    if (!clean || clean.length < 2) return;

    // Auto save or prompt
    onSaveWord({
      word: clean,
      storyId: story.id,
      storyTitle: story.title,
      contextSentence,
    });

    setWordSavedNotice(clean);
    setTimeout(() => {
      setWordSavedNotice(null);
    }, 2500);
  };

  // Toggle read with celebratory message
  const handleToggleReadWithEffect = () => {
    onToggleRead(story.id);
    if (!isRead) {
      setJustMarkedRead(true);
      setTimeout(() => setJustMarkedRead(false), 4000);
    }
  };

  // Determine next and previous story recommendations (prioritizing unread, preventing 2-story ping-pong loops)
  const { nextStory, prevStory, isNextUnread, isNextDifferentLevel } = useMemo(() => {
    const currentIndex = allStories.findIndex((s) => s.id === story.id);
    const readSet = new Set(readStoryIds || []);
    if (isRead) {
      readSet.add(story.id);
    }

    // Stories in current CEFR level
    const sameLevelStories = allStories.filter((s) => s.level === story.level);
    const currentLevelIndex = sameLevelStories.findIndex((s) => s.id === story.id);

    let nextCandidate: Story | null = null;

    // 1. Next UNREAD story in the same level (searching forward after current story)
    if (currentLevelIndex !== -1) {
      for (let i = currentLevelIndex + 1; i < sameLevelStories.length; i++) {
        if (!readSet.has(sameLevelStories[i].id)) {
          nextCandidate = sameLevelStories[i];
          break;
        }
      }

      // 2. Wrap around within the same level for any unread story before current story
      if (!nextCandidate) {
        for (let i = 0; i < currentLevelIndex; i++) {
          if (!readSet.has(sameLevelStories[i].id)) {
            nextCandidate = sameLevelStories[i];
            break;
          }
        }
      }
    }

    // 3. If all stories in the current level are read, search forward in subsequent levels for an unread story
    if (!nextCandidate && currentIndex !== -1) {
      for (let i = currentIndex + 1; i < allStories.length; i++) {
        if (!readSet.has(allStories[i].id)) {
          nextCandidate = allStories[i];
          break;
        }
      }

      // 4. Wrap around all unread stories in the entire library
      if (!nextCandidate) {
        for (let i = 0; i < currentIndex; i++) {
          if (!readSet.has(allStories[i].id)) {
            nextCandidate = allStories[i];
            break;
          }
        }
      }
    }

    const isNextUnread = nextCandidate ? !readSet.has(nextCandidate.id) : false;
    const isNextDifferentLevel = nextCandidate ? nextCandidate.level !== story.level : false;

    // 5. Fallback when all stories are read (or reviewing): strictly advance to the next story sequentially
    // (Never ping-pong between 2 stories!)
    if (!nextCandidate) {
      if (sameLevelStories.length > 1 && currentLevelIndex !== -1) {
        nextCandidate = sameLevelStories[(currentLevelIndex + 1) % sameLevelStories.length];
      } else if (allStories.length > 1 && currentIndex !== -1) {
        nextCandidate = allStories[(currentIndex + 1) % allStories.length];
      }
    }

    // Calculate previous story (strictly sequential going backwards)
    let previousCandidate: Story | null = null;
    if (sameLevelStories.length > 1 && currentLevelIndex !== -1) {
      previousCandidate = sameLevelStories[(currentLevelIndex - 1 + sameLevelStories.length) % sameLevelStories.length];
    } else if (allStories.length > 1 && currentIndex !== -1) {
      previousCandidate = allStories[(currentIndex - 1 + allStories.length) % allStories.length];
    }

    return {
      nextStory: nextCandidate,
      prevStory: previousCandidate,
      isNextUnread,
      isNextDifferentLevel,
    };
  }, [allStories, story.id, story.level, readStoryIds, isRead]);

  // Font size classes
  const fontSizes = {
    sm: 'text-sm leading-relaxed',
    base: 'text-base sm:text-lg leading-relaxed sm:leading-loose',
    lg: 'text-lg sm:text-xl leading-relaxed sm:leading-loose',
    xl: 'text-xl sm:text-2xl leading-relaxed sm:leading-loose',
  };

  // Line spacing
  const lineSpacings = {
    normal: 'space-y-4',
    relaxed: 'space-y-6',
    loose: 'space-y-8',
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
      {/* Top Navigation & Toolbar */}
      <div className="sticky top-16 z-30 mb-8 rounded-xl border border-slate-200 bg-white/95 p-3 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95 transition-all">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Back button */}
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>ライブラリに戻る</span>
          </button>

          {/* Center Actions: TTS, Settings */}
          <div className="flex items-center gap-2">
            {/* Play Full Story TTS */}
            <button
              onClick={handlePlayFullStory}
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                isPlaying && currentPlayingIndex === -1
                  ? 'border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
              title="全文ドイツ語音声読み上げ"
            >
              {isPlaying && currentPlayingIndex === -1 ? (
                <>
                  <Pause className="h-3.5 w-3.5" />
                  <span>停止</span>
                </>
              ) : (
                <>
                  <Volume2 className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">音声朗読</span>
                </>
              )}
            </button>

            {/* Inline Translation Toggle */}
            <button
              onClick={() => updateSetting('showInlineTranslation', !settings.showInlineTranslation)}
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                settings.showInlineTranslation
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
              title="段落ごとの日本語対訳を表示/非表示"
            >
              <Languages className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">対訳表示</span>
            </button>

            {/* Reader Customization Menu Toggle */}
            <div className="relative">
              <button
                onClick={() => setShowSettingsMenu(!showSettingsMenu)}
                className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
                title="フォント・表示設定"
              >
                <Sliders className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">表示設定</span>
              </button>

              {/* Settings Dropdown Drawer */}
              {showSettingsMenu && (
                <div className="absolute right-0 mt-2 w-72 rounded-xl border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-800 dark:bg-slate-900 z-50 text-xs space-y-4">
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">文字サイズ</span>
                    <div className="mt-1.5 grid grid-cols-4 gap-1">
                      {(['sm', 'base', 'lg', 'xl'] as const).map((sz) => (
                        <button
                          key={sz}
                          onClick={() => updateSetting('fontSize', sz)}
                          className={`py-1 rounded text-center font-medium ${
                            settings.fontSize === sz
                              ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {sz === 'sm' ? '小' : sz === 'base' ? '標準' : sz === 'lg' ? '大' : '特大'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">フォント</span>
                    <div className="mt-1.5 grid grid-cols-2 gap-1">
                      <button
                        onClick={() => updateSetting('fontFamily', 'sans')}
                        className={`py-1 rounded font-medium ${
                          settings.fontFamily === 'sans'
                            ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        ゴシック (Sans)
                      </button>
                      <button
                        onClick={() => updateSetting('fontFamily', 'serif')}
                        className={`py-1 rounded font-serif font-medium ${
                          settings.fontFamily === 'serif'
                            ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        明朝 (Serif)
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">音声速度</span>
                    <div className="mt-1.5 grid grid-cols-3 gap-1">
                      {[0.8, 1.0, 1.2].map((spd) => (
                        <button
                          key={spd}
                          onClick={() => updateSetting('ttsSpeed', spd)}
                          className={`py-1 rounded font-medium tabular-nums ${
                            settings.ttsSpeed === spd
                              ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {spd}x
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Action: Mark as Read toggle */}
          <button
            onClick={handleToggleReadWithEffect}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all shadow-sm ${
              isRead
                ? 'bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-600'
                : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white'
            }`}
          >
            <CheckCircle2 className="h-4 w-4" />
            <span>{isRead ? '読了済み' : '読了にする'}</span>
          </button>
        </div>
      </div>

      {/* Celebratory Banner on Mark as Read */}
      {justMarkedRead && (
        <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-100 flex items-center justify-between animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center gap-2.5">
            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <div>
              <p className="text-xs font-bold">Glückwunsch! 読了を記録しました！</p>
              <p className="text-[11px] text-emerald-700 dark:text-emerald-300">
                累計読了語数に +{story.wordCount} 語が加算されました。
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Saved Word Toast */}
      {wordSavedNotice && (
        <div className="fixed bottom-6 right-6 z-50 rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white shadow-xl dark:bg-white dark:text-slate-900 flex items-center gap-2 animate-in fade-in duration-200">
          <Bookmark className="h-3.5 w-3.5 text-amber-400" />
          <span>単語「{wordSavedNotice}」を単語帳に追加しました</span>
        </div>
      )}

      {/* Story Header & Editorial Presentation */}
      <header className="mb-8 border-b border-slate-200 pb-8 dark:border-slate-800">
        {/* Unboxed Metadata Header */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <span className="font-bold text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
            CEFR {story.level}
          </span>
          <span aria-hidden="true">·</span>
          <span>{story.genreJa}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">{story.wordCount} 語</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">約 {story.readingTimeMinutes} 分</span>
        </div>

        {/* Story Title & Subtitle */}
        <h1
          className={`mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 [text-wrap:balance] ${
            settings.fontFamily === 'serif' ? 'font-serif' : 'font-sans'
          }`}
        >
          {story.title}
        </h1>
        <p className="mt-1 text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400">
          {story.titleJa}
        </p>

        <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic">
          {story.subtitle}
        </p>

        {/* Tadoku reading instruction pill */}
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-850 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
          <Info className="h-4 w-4 shrink-0 text-slate-400" />
          <span>
            💡 <strong>多読のコツ：</strong>
            わからない単語があっても止まらず、全体のストーリー展開を楽しんでみてください。気になる単語をクリックすると単語帳に保存できます。
          </span>
        </div>
      </header>

      {/* Story Reading Body */}
      <main
        className={`text-slate-800 dark:text-slate-200 ${fontSizes[settings.fontSize]} ${
          lineSpacings[settings.lineSpacing]
        } ${settings.fontFamily === 'serif' ? 'font-serif' : 'font-sans'}`}
      >
        {story.paragraphs.map((p, idx) => {
          const isCurrentParagraphPlaying = isPlaying && currentPlayingIndex === idx;
          const isRevealed = revealedParagraphs[p.id] || settings.showInlineTranslation;

          // Split words for click-to-save
          const words = p.german.split(' ');

          return (
            <div
              key={p.id}
              className={`group relative rounded-xl p-3 sm:p-4 transition-all duration-200 ${
                isCurrentParagraphPlaying
                  ? 'bg-blue-50/70 ring-1 ring-blue-300 dark:bg-blue-950/40 dark:ring-blue-800'
                  : 'hover:bg-slate-50/60 dark:hover:bg-slate-800/40'
              }`}
            >
              {/* Responsive container: flex-col on all screens to let text occupy full width without button column restrictions */}
              <div className="flex flex-col items-stretch justify-between gap-3">
                <div className="w-full min-w-0">
                  <p className="select-text leading-relaxed">
                    {words.map((w, wIdx) => (
                      <span
                        key={wIdx}
                        onClick={() => handleWordClick(w, p.german)}
                        className="cursor-pointer hover:bg-amber-100 hover:text-slate-950 dark:hover:bg-amber-900/40 dark:hover:text-amber-200 rounded px-0.5 transition-colors"
                        title="クリックして単語帳に追加"
                      >
                        {w}{' '}
                      </span>
                    ))}
                  </p>

                  {/* Inline Translation (if revealed or setting active) */}
                  {isRevealed && (
                    <div className="mt-3 border-t border-slate-100 pt-2.5 text-xs sm:text-sm font-sans font-normal text-slate-500 dark:border-slate-800 dark:text-slate-400 leading-relaxed animate-in fade-in duration-200">
                      {p.japanese}
                    </div>
                  )}
                </div>

                {/* Per-Paragraph Actions: always positioned at the bottom of the card, aligned to the right */}
                <div className="flex items-center justify-end gap-2 mt-2 pt-2 border-t border-slate-100/60 dark:border-slate-850 opacity-90 sm:opacity-40 sm:group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handlePlayParagraph(p.german, idx)}
                    className="flex h-8 w-8 sm:h-7 sm:w-7 items-center justify-center rounded-lg sm:rounded text-slate-500 hover:bg-slate-100 hover:text-slate-800 active:bg-slate-200 sm:hover:bg-slate-200 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
                    title="この段落を再生"
                  >
                    {isCurrentParagraphPlaying ? (
                      <Pause className="h-4 w-4 sm:h-3.5 sm:w-3.5 text-blue-600 dark:text-blue-400" />
                    ) : (
                      <Volume2 className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
                    )}
                  </button>

                  <button
                    onClick={() => toggleParagraphReveal(p.id)}
                    className="flex h-8 w-8 sm:h-7 sm:w-7 items-center justify-center rounded-lg sm:rounded text-slate-500 hover:bg-slate-100 hover:text-slate-800 active:bg-slate-200 sm:hover:bg-slate-200 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
                    title="この段落の日本語訳を表示/非表示"
                  >
                    <Languages className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </main>

      {/* Section: Key Vocabulary (Schlüsselwörter) */}
      <section className="mt-12 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-slate-500" />
            <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100">
              重要語彙・キー表現（Schlüsselwörter）
            </h2>
          </div>
          <button
            onClick={() => setShowVocabList(!showVocabList)}
            className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
          >
            {showVocabList ? '折りたたむ' : '表示する'}
          </button>
        </div>

        {showVocabList && (
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {story.vocabulary.map((v, i) => (
              <div
                key={i}
                className="rounded-lg border border-slate-100 bg-slate-50/70 p-3 dark:border-slate-800 dark:bg-slate-800/40"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <div className="flex items-baseline gap-1.5">
                    {v.article && (
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {v.article}
                      </span>
                    )}
                    <span className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                      {v.german}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 uppercase">{v.pos}</span>
                </div>
                <p className="mt-1 text-xs font-medium text-slate-700 dark:text-slate-300">
                  {v.japanese}
                </p>
                {v.note && (
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                    💡 {v.note}
                  </p>
                )}
                <button
                  onClick={() =>
                    onSaveWord({
                      word: v.german,
                      storyId: story.id,
                      storyTitle: story.title,
                      note: v.japanese,
                    })
                  }
                  className="mt-2 inline-flex items-center gap-1 text-[11px] text-blue-600 hover:underline dark:text-blue-400"
                >
                  <Plus className="h-3 w-3" />
                  <span>単語帳に登録</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Cultural Context Note */}
      {story.culturalNote && (
        <section className="mt-6 rounded-xl border border-slate-200 bg-amber-50/60 p-4 dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex items-start gap-2.5">
            <span className="text-base">🇩🇪</span>
            <div>
              <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100">
                文化コラム：{story.culturalNote.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {story.culturalNote.content}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Bottom Full Translation Accordion (Explicit Requirement!) */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <button
          onClick={() => setShowFullTranslation(!showFullTranslation)}
          className="flex w-full items-center justify-between text-left focus:outline-none"
        >
          <div className="flex items-center gap-2">
            <Languages className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            <div>
              <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                日本語全訳（Übersetzung）
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                ドイツ語の原文を読み終えた後に、答え合わせや確認として開いてみましょう。
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs font-medium text-slate-500">
            <span>{showFullTranslation ? '閉じる' : '全訳を表示'}</span>
            {showFullTranslation ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </div>
        </button>

        {showFullTranslation && (
          <div className="mt-6 border-t border-slate-100 pt-6 dark:border-slate-800 space-y-4 animate-in fade-in duration-200">
            {story.fullTranslationJa.map((para, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-sans"
              >
                {para}
              </p>
            ))}
          </div>
        )}
      </section>

      {/* Post-Reading Milestone & Next Recommendation Footer */}
      <footer className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
              読み終わりましたか？
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              読了ボタンを押して累積語数メーターを進めましょう。
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-3 w-full sm:w-auto">
            {prevStory && (
              <button
                onClick={() => onSelectStory(prevStory)}
                className="flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-750 transition-colors"
                title={`前の話: ${prevStory.titleJa}`}
              >
                <ChevronLeft className="h-3.5 w-3.5" />
                <span>前の話</span>
              </button>
            )}

            <button
              onClick={handleToggleReadWithEffect}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold transition-all shadow-xs ${
                isRead
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900'
              }`}
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>{isRead ? '読了済み（完了）' : '読了を記録する'}</span>
            </button>

            {nextStory && (
              <div className="flex flex-col items-end">
                <button
                  onClick={() => onSelectStory(nextStory)}
                  className="flex items-center gap-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-xs font-semibold shadow-xs transition-colors dark:bg-blue-600 dark:hover:bg-blue-500"
                  title={`次の話: ${nextStory.titleJa}`}
                >
                  <span>
                    {isNextDifferentLevel
                      ? `次レベルへ（${nextStory.level}）`
                      : '次の話を読む'}
                  </span>
                  {isNextUnread ? (
                    <span className="rounded bg-blue-500 px-1.5 py-0.5 text-[10px] font-bold text-white leading-none">
                      未読
                    </span>
                  ) : (
                    <span className="text-[10px] text-blue-200">
                      ({nextStory.level})
                    </span>
                  )}
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
                <span className="mt-1 max-w-[180px] sm:max-w-[220px] truncate text-[11px] text-slate-500 dark:text-slate-400">
                  次: {nextStory.titleJa}
                </span>
              </div>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
