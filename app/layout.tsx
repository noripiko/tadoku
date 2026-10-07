import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tadoku-deutsch.app"),
  title: "Tadoku Deutsch | ドイツ語多読プラットフォーム (A1〜C1対応・40作品・無料)",
  description:
    "ドイツ語多読（Tadoku）を無料＆登録不要で体験。A1・A2・B1（長編充実の全20編）などCEFRレベル別のストーリー40選。一行対訳・ネイティブ音声朗読・クリック単語帳で、辞書を引かずに楽しく読解力が伸びる！",
  keywords: [
    "ドイツ語 多読",
    "ドイツ語 リーディング",
    "ドイツ語 A1 多読",
    "ドイツ語 A2 小説",
    "ドイツ語 B1 読み物",
    "ドイツ語 B1 小説",
    "ドイツ語 初心者 読み物",
    "ドイツ語 学習 無料",
    "Tadoku Deutsch",
    "ドイツ語 読解",
    "ドイツ語 短編",
  ],
  alternates: {
    canonical: "https://tadoku-deutsch.app",
  },
  openGraph: {
    title: "Tadoku Deutsch | ドイツ語多読プラットフォーム (A1〜C1・40作品)",
    description:
      "辞書を引かずにドイツ語がスラスラ読める。CEFRレベル別短編・長編小説40選・一行対訳・音声朗読付きの無料・完全ローカル多読リーダー。",
    url: "https://tadoku-deutsch.app",
    siteName: "Tadoku Deutsch",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tadoku Deutsch | ドイツ語多読プラットフォーム (A1〜C1・40作品)",
    description:
      "辞書を引かずにドイツ語がスラスラ読める。CEFRレベル別短編・長編小説40選・一行対訳・音声朗読付きの無料・完全ローカル多読リーダー。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdWebapp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Tadoku Deutsch",
    applicationCategory: "EducationalApplication",
    operatingSystem: "All",
    description:
      "ドイツ語多読（Tadoku）プラットフォーム。CEFRレベル別（A1〜C1）ストーリー40選（B1長編20作）、一行対訳・音声朗読・クリック単語帳、登録不要・完全ローカル完結。",
    url: "https://tadoku-deutsch.app",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "JPY",
    },
    educationalLevel: ["A1", "A2", "B1", "B2", "C1"],
    inLanguage: ["ja", "de"],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "ドイツ語の「多読（Tadoku）」とはどんな学習法ですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "多読とは、辞書を引かずに自分のレベルに合った易しい物語をたくさん読む学習法です。「①辞書は引かない」「②わからないところは飛ばす」「③つまらなければ後回し」の3原則により、日本語への逐語訳を脱却し、ドイツ語の語順のまま理解する『ドイツ語脳』を養います。",
        },
      },
      {
        "@type": "Question",
        name: "単語がわからない時はどうすればいいですか？辞書は引いてはいけませんか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "多読の基本は「分からない単語は推測するか、軽く読み飛ばす」ことです。全体の6〜7割が掴めればストーリーは十分に楽しめます。どうしても確認したいときは、本アプリの「日本語訳表示（一行対訳）」を1タップすればすぐに意味を確認できます。また、気になる単語をクリックして単語帳に保存し、読了後に見返すこともできます。",
        },
      },
      {
        "@type": "Question",
        name: "ドイツ語初心者（A1 / A2）でも読めるストーリーはありますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい。A1レベル10編、A2レベル10編、B1レベル20編（日常短編から読み応えのある長編まで）など計40編以上のオリジナルストーリーが用意されています。日常のカフェでの注文や駅の窓口、クスッと笑える日常譚など、初心者でも親しみやすい短い語数から無理なく始められます。",
        },
      },
      {
        "@type": "Question",
        name: "料金やユーザー登録・ログインは必要ですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "完全無料で、会員登録やログインは一切不要です。読了数や累計読書語数、保存した単語帳などのデータはすべてお使いのブラウザ（LocalStorage）に安全に保存されます。",
        },
      },
    ],
  };

  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebapp) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                var t = localStorage.getItem('tadoku_de_theme');
                var d = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (t === 'dark' || (!t && d)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch(e) {}
            })();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
