import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { STORIES } from '@/lib/stories';
import { StoryViewClient } from '@/components/StoryViewClient';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return STORIES.map((story) => ({
    id: story.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const story = STORIES.find((s) => s.id === id);

  if (!story) {
    return {
      title: '物語が見つかりませんでした | Tadoku Deutsch',
      description: '指定されたドイツ語ストーリーは見つかりませんでした。',
    };
  }

  const title = `${story.title}（${story.titleJa}）| ドイツ語多読 ${story.level}`;
  const description = `${story.summaryJa} ドイツ語CEFR ${story.level}レベル・${story.genreJa}。一行対訳・音声朗読・単語帳付き（全${story.wordCount}語・読了目安約${story.readingTimeMinutes}分）。登録不要で今すぐ読める！`;
  const canonicalUrl = `https://tadoku-deutsch.vercel.app/stories/${story.id}`;
  const imageUrl = story.image
    ? `https://tadoku-deutsch.vercel.app${story.image}`
    : undefined;

  return {
    title,
    description,
    keywords: [
      story.title,
      story.titleJa,
      `ドイツ語 ${story.level}`,
      'ドイツ語 多読',
      'ドイツ語 リーディング',
      story.genreJa,
      'ドイツ語 短編',
      'ドイツ語 和訳',
      'ドイツ語 音声',
      'グリム童話 ドイツ語',
      'Tadoku Deutsch',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Tadoku Deutsch',
      locale: 'ja_JP',
      type: 'article',
      images: imageUrl
        ? [
            {
              url: imageUrl,
              alt: `${story.title} (${story.titleJa})`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function StoryPage({ params }: PageProps) {
  const { id } = await params;
  const story = STORIES.find((s) => s.id === id);

  if (!story) {
    notFound();
  }

  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${story.title} (${story.titleJa})`,
    alternativeHeadline: story.subtitleJa,
    description: story.summaryJa,
    inLanguage: ['de', 'ja'],
    educationalLevel: story.level,
    wordCount: story.wordCount,
    timeRequired: `PT${story.readingTimeMinutes}M`,
    genre: story.genreJa,
    mainEntityOfPage: `https://tadoku-deutsch.vercel.app/stories/${story.id}`,
    image: story.image ? `https://tadoku-deutsch.vercel.app${story.image}` : undefined,
    publisher: {
      '@type': 'Organization',
      name: 'Tadoku Deutsch',
      url: 'https://tadoku-deutsch.vercel.app',
    },
  };

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://tadoku-deutsch.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '作品カタログ',
        item: 'https://tadoku-deutsch.vercel.app/#stories-catalog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${story.level} レベル`,
        item: `https://tadoku-deutsch.vercel.app/?level=${story.level}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: `${story.titleJa}`,
        item: `https://tadoku-deutsch.vercel.app/stories/${story.id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <StoryViewClient story={story} />
    </>
  );
}
