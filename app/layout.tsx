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
  title: "Tadoku Deutsch | ドイツ語多読 (A1-C1) · プライバシー重視の読書アプリ",
  description: "完全ローカル完結・登録不要。CEFRレベル別（A1〜C1）のクスッと笑える日常会話やSFストーリーで学ぶドイツ語多読Webアプリケーション。",
  openGraph: {
    title: "Tadoku Deutsch | ドイツ語多読 (A1-C1)",
    description: "完全ローカル完結・登録不要。CEFRレベル別（A1〜C1）のクスッと笑える日常会話やSFストーリーで学ぶドイツ語多読Webアプリケーション。",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
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
