import { MetadataRoute } from 'next';
import { STORIES } from '@/lib/stories';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tadoku-deutsch.app';
  const now = new Date();

  const storyEntries: MetadataRoute.Sitemap = STORIES.map((story) => ({
    url: `${baseUrl}/#story-${story.id}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: story.level === 'A1' ? 0.9 : 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#stories-catalog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#guide-faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    ...storyEntries,
  ];
}
