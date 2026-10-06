export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export type StoryGenre = 'Comedy' | 'Surreal' | 'Mystery' | 'Sci-Fi' | 'Daily Life' | 'Philosophy';

export interface StoryParagraph {
  id: number;
  german: string;
  japanese: string;
}

export interface VocabularyItem {
  german: string;
  article?: 'der' | 'die' | 'das' | null;
  pos: string; // Substantiv, Verb, Adjektiv, etc.
  japanese: string;
  note?: string;
}

export interface Story {
  id: string;
  level: CefrLevel;
  title: string;
  titleJa: string;
  subtitle: string;
  subtitleJa: string;
  genre: StoryGenre;
  genreJa: string;
  wordCount: number;
  readingTimeMinutes: number;
  image: string;
  summaryJa: string;
  paragraphs: StoryParagraph[];
  fullTranslationJa: string[];
  vocabulary: VocabularyItem[];
  culturalNote?: {
    title: string;
    content: string;
  };
}

export interface SavedWord {
  id: string;
  word: string;
  storyId: string;
  storyTitle: string;
  savedAt: number;
  contextSentence?: string;
  note?: string;
}

export interface UserProgress {
  readStoryIds: string[];
  bookmarkedStoryIds: string[];
  savedWords: SavedWord[];
  lastReadStoryId?: string;
  totalWordsRead: number;
}

export interface ReaderSettings {
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  fontFamily: 'sans' | 'serif';
  lineSpacing: 'normal' | 'relaxed' | 'loose';
  showInlineTranslation: boolean;
  ttsSpeed: number;
}
