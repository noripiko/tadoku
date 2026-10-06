'use client';

import React from 'react';
import { X, Lightbulb, Compass } from 'lucide-react';
import { CEFR_DESCRIPTIONS } from '@/lib/stories';

interface TadokuGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TadokuGuideModal({ isOpen, onClose }: TadokuGuideModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 my-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                ドイツ語多読（Tadoku）の極意
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                「快読百選」に基づく挫折しない語学読書術
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

        {/* Content */}
        <div className="mt-6 space-y-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          {/* Concept */}
          <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/50">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
              <Lightbulb className="h-4 w-4 text-amber-500" />
              <span>多読とは？（Extensive Reading）</span>
            </h3>
            <p className="mt-2 leading-relaxed">
              語学書や文法テキストで1文ずつ緻密に分析（精読）するのではなく、
              <strong>「やさしく面白い大量の文章を、辞書を引かずにそのまま楽しむ」</strong>
              学習メソッドです。ドイツ語特有の語順や前置詞の感覚を、頭の中で日本語に訳さずに「ドイツ語のまま」処理する直感を養います。
            </p>
          </div>

          {/* 3 Rules */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-3">
              多読を成功させる「3つの鉄則」
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-lg border border-slate-100 p-3 dark:border-slate-800">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white dark:bg-slate-100 dark:text-slate-900">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">
                    辞書は引かない（Lexikon schließen）
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    未知の単語に出会っても立ち止まらず、文脈や全体の雰囲気で「なんとなくこういう意味かな？」と推測して読み進めましょう。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-slate-100 p-3 dark:border-slate-800">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white dark:bg-slate-100 dark:text-slate-900">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">
                    分からないところは飛ばす（Einfach überspringen）
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    100%理解する必要はありません。6〜7割のニュアンスが伝われば大成功。引っかかる箇所は大胆にスキップします。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-slate-100 p-3 dark:border-slate-800">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white dark:bg-slate-100 dark:text-slate-900">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">
                    進まなくなったら別の話へ（Anderes Buch wählen）
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    難しすぎたり、自分に合わないと感じたら無理をせず、ひとつ下のレベルや別のジャンルのストーリーに気楽に切り替えましょう。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CEFR Level Guide */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-3">
              CEFR レベル別ロードマップ
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {Object.entries(CEFR_DESCRIPTIONS).map(([level, data]) => (
                <div
                  key={level}
                  className="rounded-lg border border-slate-100 bg-slate-50/50 p-2.5 dark:border-slate-800 dark:bg-slate-800/30 text-xs"
                >
                  <div className="flex items-center justify-between font-bold text-slate-900 dark:text-slate-100">
                    <span>{level}</span>
                    <span className="text-[11px] text-slate-400 font-normal">
                      {data.wordRange}
                    </span>
                  </div>
                  <p className="mt-1 text-slate-500 dark:text-slate-400 leading-snug">
                    {data.descJa}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
