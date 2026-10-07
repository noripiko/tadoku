# Tadoku Deutsch (ドイツ語多読プラットフォーム)

<p align="center">
  <strong>辞書を引かずに、ドイツ語をドイツ語の語順のまま楽しむ。</strong><br />
  登録不要・完全無料のドイツ語多読（Extensive Reading）Webアプリケーション
</p>

<p align="center">
  <a href="https://tadoku-deutsch.vercel.app">
    <img src="https://img.shields.io/badge/Live%20Demo-tadoku--deutsch.vercel.app-blue?style=for-the-badge&logo=vercel" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

---

## 📖 概要

**Tadoku Deutsch** は、外国語学習法として高い効果が実証されている「多読（Tadoku）」をドイツ語で実践できる無料のオンラインリーダーです。

「① 辞書は引かない」「② 分からないところは飛ばす」「③ 進まなくなったら別の話を読む」という多読の3原則に沿って、CEFR A1（入門）からC1（上級）まで段階的にステップアップできるよう設計されています。

- **本番URL**: [https://tadoku-deutsch.vercel.app](https://tadoku-deutsch.vercel.app)
- **アカウント登録**: 不要（全機能がブラウザのローカル環境で完結）
- **料金**: 完全無料

---

## ✨ 主な機能

### 1. CEFRレベル別・全59編の豊富なストーリー
- **入門から上級まで対応**: A1（10編）、A2（10編）、B1（20編）、B2（7編）、C1（2編）、グリム童話名作（10編）を収録。
- **多彩なジャンル**: 日常のクスッと笑える会話、探偵劇、近未来SF、哲学エッセイ、文化論まで幅広いテーマ。

### 2. 辞書いらずの一行対訳（パラグラフ対訳）
- ドイツ語の原文に沿って、段落ごとに日本語訳の表示／非表示をワンタップで切り替え可能。
- 読了後には「日本語全訳アコーディオン」で全体のストーリーを振り返ることができます。

### 3. ドイツ語ネイティブ音声朗読（Text-to-Speech）
- Web Speech API を活用した段落単位および全文の音声再生。
- 0.8倍速〜1.2倍速の再生速度調整に対応し、耳と目を連動させてドイツ語特有のリズムと発音を体得。

### 4. クリック単語帳（文脈付き保存）
- 本文中の気になる単語をクリックするだけで、その文脈（前後の文章）とともに自分専用の単語帳に自動保存。
- 保存した単語はモーダルからいつでも復習・削除可能。

### 5. 読書進捗・累積語数トラッカー
- 読んだストーリーのチェックやブックマーク管理。
- 累積読書語数のカウントとマイルストーンバッジ表示。
- **データ管理**: LocalStorageのデータをワンクリックで JSON ファイルとしてエクスポート／インポート可能（機種変更時も安心）。

### 6. 完全SEO最適化 & 個別ストーリーSSG
- 全59作品に固有のパーマリンク（`/stories/[id]`）を提供。
- Next.js の `generateStaticParams()` による完全静的生成（SSG）で超高速表示。
- 作品ごとの固有メタデータ（Title, Description, OGP, Twitter Cards）。
- Schema.org 構造化データ（`Article` および `BreadcrumbList`）によるリッチリザルト対応。
- 自動生成された `sitemap.xml` と `robots.txt`。

### 7. ダークモード & アクセシビリティ
- システム設定（OSのダークモード設定）の自動反映および手動トグル。
- フォントサイズ（小/中/大/特大）や行間のカスタマイズ機能。

---

## 📊 収録レベル構成（CEFR）

| レベル | 対象者 | 目安語数 | 特徴 |
|:---:|:---|:---:|:---|
| **A1** | 初級（Einstieg） | 100〜160語 | 基本語彙と現在形中心。カフェの注文や駅窓口など親しみやすい日常短編。 |
| **A2** | 初中級（Grundlagen） | 200〜280語 | 過去形や接続詞を含むストーリー。街の探偵劇や日常のハプニング。 |
| **B1** | 中級（Mittelstufe I） | 300〜700語 | 複文・関係代名詞を使った本格ストーリー。日常劇から長編ドラマまで。 |
| **B2** | 上中級（Mittelstufe II）| 450〜550語 | 受動態・接続法・慣用句を含む深みのある文章。風刺、哲学対話、近未来SF。 |
| **C1** | 上級（Oberstufe） | 600〜700語 | 格調高い語彙と比喩表現。現代ドイツ文学・エッセイに匹敵する知的短編。 |
| **童話** | グリム童話コレクション | 200〜500語 | 赤ずきん、ブレーメンの音楽隊、ヘンゼルとグレーテル等の名作10編。 |

---

## 🛠️ 技術スタック

- **フロントエンド / フレームワーク**: [Next.js 16](https://nextjs.org/) (App Router, SSG)
- **UIライブラリ**: [React 19](https://react.dev/)
- **言語**: [TypeScript 5](https://www.typescriptlang.org/)
- **スタイリング**: [Tailwind CSS v4](https://tailwindcss.com/)
- **アイコン**: [Lucide React](https://lucide.dev/)
- **アナリティクス**: [@vercel/analytics](https://vercel.com/analytics), [@vercel/speed-insights](https://vercel.com/speed-insights)
- **デプロイ環境**: [Vercel](https://vercel.com/)
- **データ永続化**: Web Storage API (LocalStorage)

---

## 📁 ディレクトリ構成

```plaintext
tadoku/
├── app/
│   ├── layout.tsx             # ルートレイアウト（SEO、フォント、Vercel計測設定）
│   ├── page.tsx               # トップページ（ストーリーカタログ、レベル別フィルター、検索）
│   ├── robots.ts              # クローラー制御設定（robots.txt 動的生成）
│   ├── sitemap.ts             # 全59話の個別URLを含む sitemap.xml 動的生成
│   └── stories/
│       └── [id]/
│           └── page.tsx       # 各ストーリー個別ページ（SSG、JSON-LD、動的Metadata）
├── components/
│   ├── Header.tsx             # ヘッダー（ナビゲーション、進捗・単語帳ボタン、テーマ切替）
│   ├── HeroSection.tsx        # ヒーローセクション（多読概要、A1クイックスタート）
│   ├── LevelFilterBar.tsx     # レベル・ジャンル・既読フィルターバー
│   ├── ProgressModal.tsx      # 読了実績・累積語数・JSONバックアップ復元モーダル
│   ├── StoryCard.tsx          # 各ストーリーカード（Linkオーバーレイ、ブックマーク・読了トグル）
│   ├── StoryReader.tsx        # 多読リーダー本文（一行対訳、TTS音声、単語保存、設定）
│   ├── StoryViewClient.tsx    # 個別ストーリーページのクライアント状態管理ラッパー
│   ├── TadokuGuideModal.tsx   # 多読の3原則・読み方のコツ解説モーダル
│   ├── TadokuSeoSection.tsx   # 多読学習法・よくある質問（FAQ）SEOセクション
│   └── WordBankModal.tsx      # 保存した単語一覧モーダル
├── lib/
│   ├── storage.ts             # LocalStorageアクセス・進捗・単語帳・設定の永続化
│   ├── stories.ts             # 全ストーリーの統合エクスポート・CEFR定義
│   ├── stories/               # レベル別ストーリー定義データ（A1, A2, B1, B2, 童話）
│   └── types.ts               # TypeScript型定義
├── public/
│   ├── google*.html           # Google Search Console 所有権確認ファイル
│   └── images/                # ストーリーのサムネイル画像アセット
└── README.md
```

---

## 🚀 ローカル開発環境のセットアップ

### 前提条件
- Node.js 20.x 以上
- npm, pnpm, yarn または bun

### インストールと起動

1. **リポジトリのクローン**
   ```bash
   git clone https://github.com/noripiko/tadoku.git
   cd tadoku
   ```

2. **依存パッケージのインストール**
   ```bash
   npm install
   ```

3. **開発サーバーの起動**
   ```bash
   npm run dev
   ```
   ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスします。

4. **本番ビルドの確認**
   ```bash
   npm run build
   npm run start
   ```

5. **リントチェック**
   ```bash
   npm run lint
   ```

---

## 🔒 プライバシー & セキュリティ

- ユーザーの読書履歴、ブックマーク、保存した単語データは**すべて端末内（LocalStorage）のみ**に保存されます。
- 外部サーバーへの個人情報や学習データの送信は一切行いません。
- いつでも「進捗・データ管理」モーダルからすべてのデータをリセットまたはバックアップ（JSONダウンロード）できます。

---

## 📄 ライセンス

本プロジェクトは [MIT License](LICENSE) のもとで公開されています。

Copyright (c) 2026 noripiko
