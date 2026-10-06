'use client';

import React, { useState } from 'react';
import { X, Award, CheckCircle2, ShieldCheck, Download, Upload, RotateCcw } from 'lucide-react';
import { UserProgress } from '@/lib/types';
import { STORIES } from '@/lib/stories';
import { exportUserDataAsJson, importUserDataFromJson, resetAllUserData } from '@/lib/storage';

interface ProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  onProgressReset: () => void;
}

export function ProgressModal({ isOpen, onClose, progress, onProgressReset }: ProgressModalProps) {
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  if (!isOpen) return null;

  const levels = ['A1', 'A2', 'B1', 'B2', 'C1'] as const;

  // Milestones
  const milestones = [
    { target: 500, label: '初歩の一歩 (500語)' },
    { target: 1500, label: '多読ビギナー (1,500語)' },
    { target: 3000, label: 'ストーリー探求者 (3,000語)' },
    { target: 5000, label: 'ドイツ語マイスター (5,000語)' },
  ];

  const handleExport = () => {
    const json = exportUserDataAsJson();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tadoku_deutsch_progress_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const success = importUserDataFromJson(content);
      if (success) {
        setImportStatus('データを復元しました！');
        onProgressReset();
      } else {
        setImportStatus('ファイルの形式が正しくありません。');
      }
      setTimeout(() => setImportStatus(null), 3000);
    };
    reader.readAsText(file);
  };

  const handleReset = () => {
    resetAllUserData();
    setShowResetConfirm(false);
    onProgressReset();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 my-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                読了進捗と統計
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                完全ローカル記録 · 外部通信なし
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

        {/* Big Numbers Overview */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-800/40">
            <span className="text-xs text-slate-500">累計読了語数</span>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-2xl font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                {progress.totalWordsRead.toLocaleString()}
              </span>
              <span className="text-xs text-slate-400">語</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-800/40">
            <span className="text-xs text-slate-500">読了ストーリー</span>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-2xl font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                {progress.readStoryIds.length}
              </span>
              <span className="text-xs text-slate-400">/ {STORIES.length} 編</span>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 rounded-xl border border-slate-100 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-800/40">
            <span className="text-xs text-slate-500">登録単語数</span>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-2xl font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                {progress.savedWords.length}
              </span>
              <span className="text-xs text-slate-400">語</span>
            </div>
          </div>
        </div>

        {/* CEFR Level Breakdown */}
        <div className="mt-6">
          <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-3">
            CEFR レベル別達成度
          </h3>
          <div className="space-y-3">
            {levels.map((lvl) => {
              const lvlStories = STORIES.filter((s) => s.level === lvl);
              const readInLvl = lvlStories.filter((s) => progress.readStoryIds.includes(s.id));
              const pct = lvlStories.length > 0 ? Math.round((readInLvl.length / lvlStories.length) * 100) : 0;

              return (
                <div key={lvl} className="rounded-lg border border-slate-100 p-3 dark:border-slate-800/80">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-bold text-slate-800 dark:text-slate-200">
                      Level {lvl}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 tabular-nums">
                      {readInLvl.length} / {lvlStories.length} 編読了 ({pct}%)
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-slate-900 dark:bg-slate-100 rounded-full transition-all duration-300"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestones */}
        <div className="mt-6">
          <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-3">
            多読マイルストーン
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {milestones.map((m) => {
              const achieved = progress.totalWordsRead >= m.target;
              return (
                <div
                  key={m.target}
                  className={`rounded-lg p-2.5 text-center border text-xs transition-colors ${
                    achieved
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200'
                      : 'border-slate-100 bg-slate-50 text-slate-400 dark:border-slate-800 dark:bg-slate-800/30'
                  }`}
                >
                  <div className="flex justify-center mb-1">
                    {achieved ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <div className="h-4 w-4 rounded-full border border-dashed border-slate-300 dark:border-slate-700" />
                    )}
                  </div>
                  <span className="font-semibold block">{m.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Privacy & Data Management */}
        <div className="mt-8 border-t border-slate-100 pt-5 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
            <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
            <span>
              <strong>プライバシー完全保護：</strong>
              本アプリはサーバーやトラッカーを一切持たず、進捗データはご利用のブラウザの localStorage のみに存在します。
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={handleExport}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
              >
                <Download className="h-3.5 w-3.5" />
                <span>データ保存 (JSON)</span>
              </button>

              <label className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                <Upload className="h-3.5 w-3.5" />
                <span>データ復元</span>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  className="hidden"
                />
              </label>
            </div>

            {/* Reset data */}
            <div>
              {showResetConfirm ? (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-red-600 font-semibold">本当に初期化しますか？</span>
                  <button
                    onClick={handleReset}
                    className="rounded bg-red-600 px-2 py-1 text-xs font-bold text-white hover:bg-red-700"
                  >
                    リセット実行
                  </button>
                  <button
                    onClick={() => setShowResetConfirm(false)}
                    className="text-xs text-slate-500 hover:underline"
                  >
                    キャンセル
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowResetConfirm(true)}
                  className="inline-flex items-center gap-1 text-xs text-red-600 hover:text-red-700 dark:text-red-400"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>進捗を初期化</span>
                </button>
              )}
            </div>
          </div>

          {importStatus && (
            <p className="mt-3 text-xs text-emerald-600 font-semibold">{importStatus}</p>
          )}
        </div>
      </div>
    </div>
  );
}
