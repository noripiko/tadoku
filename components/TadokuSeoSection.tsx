'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  HelpCircle,
  ChevronDown,
  CheckCircle2,
  Languages,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

export function TadokuSeoSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      q: 'ドイツ語の「多読（Tadoku）」とは何ですか？なぜ効果的なのですか？',
      a: '多読とは、辞書を引かずに自分のレベル（CEFR A1〜C1）に合った易しい物語をたくさん読む語学学習法です。従来の文法テキストによる一文ずつの精読・和訳と異なり、「ドイツ語を語順のまま理解する直感」が身につきます。文構造や前置詞の使い分けが頭に自然と刷り込まれるため、読解スピードとリスニング力が向上します。',
    },
    {
      q: '単語がわからない時はどうすればいいですか？辞書は引いてはいけませんか？',
      a: '多読の基本は「分からない単語は推測するか、軽く読み飛ばす」ことです。全体の6〜7割が掴めればストーリーは十分に楽しめます。どうしても確認したいときは、本アプリの「日本語訳表示（一行対訳）」を1タップすればすぐに意味を確認できます。また、気になる単語をクリックして単語帳に保存し、読了後に見返すこともできます。',
    },
    {
      q: 'ドイツ語初心者（A1/A2）でも読めますか？何から始めればいいですか？',
      a: 'はい！初心者向けのA1レベル10編、A2レベル10編が用意されています。カフェでの注文、電車の切符買い、日々のちょっとしたハプニングなど、平易な単語と短い文で書かれた物語から始められます。まずはA1の作品から1日1話（約2〜3分）ずつ読み進めるのがおすすめです。',
    },
    {
      q: '多読の「3大原則」とは何ですか？',
      a: '①辞書は引かない（文脈から推測する） ②分からないところは飛ばす（全体の6〜7割が掴めればOK） ③進まなくなったら別の話へ（無理せず易しいレベルに戻る）。この3原則を守ることで、挫折せずに楽しみながら読書量を積み上げられます。',
    },
    {
      q: '料金や会員登録、アプリのインストールは必要ですか？',
      a: '完全無料で、メールアドレス登録やログインは一切不要です。ブラウザを開くだけで即座に読破でき、既読チェックや累積読書語数、単語帳データもすべてお手元のブラウザ（LocalStorage）に安全に保存されます。プライバシーと手軽さを最優先に設計されています。',
    },
  ];

  return (
    <section
      id="guide-faq"
      className="border-t border-slate-200 bg-slate-50/70 py-16 dark:border-slate-800 dark:bg-slate-900/40"
      aria-label="ドイツ語多読学習ガイドとFAQ"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* SEO Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300">
            <BookOpen className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>ドイツ語多読メソッド & 学習ガイド</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100">
            辞書を引かずに、ドイツ語をドイツ語のまま読む習慣を。
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            単語の暗記カードや文法問題集だけで伸び悩んでいませんか？
            Tadoku Deutschは、CEFRレベル別（A1〜C1）全49編のストーリーと一行対訳・音声朗読を備えた、シンプルで使いやすいドイツ語多読プラットフォームです。
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-slate-100">
              多読（Tadoku）の3原則
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              「辞書を引かない」「分からないところは飛ばす」「合わなければ後回し」。頭の中で日本語に翻訳せず、語順のまま理解する「ドイツ語脳」を鍛えます。
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                <span>直読直解のスピード感覚</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                <span>自然な語順・枠構造の体得</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Languages className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-slate-100">
              一行対訳 & 音声朗読
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              読書のリズムを止めないサポート設計。段落ごとに日本語訳を表示・非表示でき、ネイティブ音声でリスニングも同時に練習できます。
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-500" />
                <span>1タップで確認できる一行対訳</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-500" />
                <span>段落・全文の音声朗読再生</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-slate-100">
              完全無料・プライバシー重視
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              ユーザー登録やログインは一切不要。読了履歴や累計読書語数、保存した単語帳はすべて端末のLocalStorageに保存され、外部サーバーに追跡されません。
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                <span>広告・トラッキングゼロ</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                <span>1クリックで即座に読書開始</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CEFR Level Guide for SEO */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              CEFRレベル別 多読ロードマップ（A1〜C1）
            </h3>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            自分の現在のレベルより「少し易しい」と感じるレベルから読み始めるのが多読継続の秘訣です。
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-4 dark:border-emerald-950/60 dark:bg-emerald-950/20">
              <div className="flex items-center justify-between">
                <span className="rounded bg-emerald-600 px-2 py-0.5 text-[11px] font-bold text-white">
                  A1（超初級）
                </span>
                <span className="text-[11px] text-emerald-700 dark:text-emerald-300 font-medium">
                  全10編
                </span>
              </div>
              <p className="mt-2 text-xs font-semibold text-slate-900 dark:text-slate-100">
                挨拶・買い物・カフェ・数字・道案内
              </p>
              <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                短い文、平易な基礎語彙中心。現在形と簡単な疑問文でサクサク読了体験を積めます。
              </p>
            </div>

            <div className="rounded-xl border border-teal-100 bg-teal-50/40 dark:border-teal-950/60 dark:bg-teal-950/20">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="rounded bg-teal-600 px-2 py-0.5 text-[11px] font-bold text-white">
                    A2（初級）
                  </span>
                  <span className="text-[11px] text-teal-700 dark:text-teal-300 font-medium">
                    全10編
                  </span>
                </div>
                <p className="mt-2 text-xs font-semibold text-slate-900 dark:text-slate-100">
                  日常の出来事・過去の思い出・趣味
                </p>
                <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  現在完了形や副文（weil, dassなど）が登場。ストーリー性のある日常会話を楽しめます。
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50/40 dark:border-blue-950/60 dark:bg-blue-950/20">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="rounded bg-blue-600 px-2 py-0.5 text-[11px] font-bold text-white">
                    B1（中級）
                  </span>
                  <span className="text-[11px] text-blue-700 dark:text-blue-300 font-medium">
                    全20編（長編充実）
                  </span>
                </div>
                <p className="mt-2 text-xs font-semibold text-slate-900 dark:text-slate-100">
                  オフィス・社会的テーマ・長編ドラマ
                </p>
                <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  接続法II式や関係代名詞を含む豊かな表現。日常短編から読み応えのある長編小説まで味わえます。
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-indigo-100 bg-indigo-50/40 dark:border-indigo-950/60 dark:bg-indigo-950/20">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="rounded bg-indigo-600 px-2 py-0.5 text-[11px] font-bold text-white">
                    B2（上中級）
                  </span>
                  <span className="text-[11px] text-indigo-700 dark:text-indigo-300 font-medium">
                    全7編（本格短編）
                  </span>
                </div>
                <p className="mt-2 text-xs font-semibold text-slate-900 dark:text-slate-100">
                  風刺・文化遺産・哲学・人間ドラマ
                </p>
                <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  受動態や慣用句、専門的語彙。シュパイヒャーシュタットやモーゼルなど各地の文化と深遠な物語。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion for SEO & Rich Search Results */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="h-5 w-5 text-slate-700 dark:text-slate-300" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              よくある質問（FAQ）
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-center justify-between p-4 sm:p-5 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-100 px-4 pb-5 pt-3 sm:px-5 dark:border-slate-800">
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
