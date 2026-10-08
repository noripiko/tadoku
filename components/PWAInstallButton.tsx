'use client';

import React, { useState } from 'react';
import { Download, Smartphone, X, Share } from 'lucide-react';
import { usePWAInstall } from './usePWAInstall';

export function PWAInstallButton() {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already running as an installed PWA, do not render
  if (isInstalled) {
    return null;
  }

  // Android / Chromium / Desktop PWA install trigger
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-300 bg-emerald-50 px-2.5 py-1.5 text-xs font-semibold text-emerald-800 transition-colors hover:bg-emerald-100 dark:border-emerald-800/80 dark:bg-emerald-950/60 dark:text-emerald-300 dark:hover:bg-emerald-900/60 shadow-xs"
        title="ホーム画面に追加してアプリとして利用"
        aria-label="アプリをインストール"
      >
        <Download className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 stroke-[2.2]" />
        <span className="hidden sm:inline">アプリ追加</span>
        <span className="sm:hidden">インストール</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
          title="ホーム画面に追加（iOS）"
        >
          <Smartphone className="h-3.5 w-3.5 text-slate-600 dark:text-slate-400 stroke-[2]" />
          <span className="hidden sm:inline">ホームに追加</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
            <div className="relative w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setShowIOSGuide(false)}
                className="absolute right-3.5 top-3.5 rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                aria-label="閉じる"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-sm shrink-0">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    ホーム画面に追加（iPhone / iPad）
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    アプリのように全画面で快適に読めます
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-2.5 rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800/60">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
                    1
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span>Safari下部の</span>
                    <span className="inline-flex items-center gap-1 rounded bg-slate-200 px-1.5 py-0.5 text-[11px] font-medium text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                      <Share className="h-3 w-3" /> 共有ボタン
                    </span>
                    <span>をタップ</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800/60">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
                    2
                  </span>
                  <span>
                    メニューを少しスクロールし、<strong>「ホーム画面に追加」</strong>をタップします
                  </span>
                </div>
              </div>

              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-4 w-full rounded-xl bg-slate-900 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                了解
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
}
