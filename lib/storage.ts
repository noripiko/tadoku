import { UserProgress, ReaderSettings, SavedWord } from './types';
import { STORIES } from './stories';

const STORAGE_KEYS = {
  PROGRESS: 'tadoku_de_progress',
  SETTINGS: 'tadoku_de_settings',
  THEME: 'tadoku_de_theme',
};

const DEFAULT_PROGRESS: UserProgress = {
  readStoryIds: [],
  bookmarkedStoryIds: [],
  savedWords: [],
  totalWordsRead: 0,
};

const DEFAULT_SETTINGS: ReaderSettings = {
  fontSize: 'base',
  fontFamily: 'serif',
  lineSpacing: 'relaxed',
  showInlineTranslation: false,
  ttsSpeed: 1.0,
};

function calculateTotalWords(readIds: string[]): number {
  return STORIES.filter(s => readIds.includes(s.id)).reduce((acc, s) => acc + s.wordCount, 0);
}

export function getStoredProgress(): UserProgress {
  if (typeof window === 'undefined') return DEFAULT_PROGRESS;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw);
    const readStoryIds = Array.isArray(parsed.readStoryIds) ? parsed.readStoryIds : [];
    return {
      readStoryIds,
      bookmarkedStoryIds: Array.isArray(parsed.bookmarkedStoryIds) ? parsed.bookmarkedStoryIds : [],
      savedWords: Array.isArray(parsed.savedWords) ? parsed.savedWords : [],
      lastReadStoryId: parsed.lastReadStoryId,
      totalWordsRead: calculateTotalWords(readStoryIds),
    };
  } catch (e) {
    console.error('Failed to load progress from localStorage', e);
    return DEFAULT_PROGRESS;
  }
}

export function saveStoredProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    const toSave: UserProgress = {
      ...progress,
      totalWordsRead: calculateTotalWords(progress.readStoryIds),
    };
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(toSave));
    window.dispatchEvent(new Event('tadoku_progress_updated'));
  } catch (e) {
    console.error('Failed to save progress to localStorage', e);
  }
}

export function toggleStoryReadStatus(storyId: string): { isRead: boolean; newProgress: UserProgress } {
  const current = getStoredProgress();
  const alreadyRead = current.readStoryIds.includes(storyId);
  const updatedReadIds = alreadyRead
    ? current.readStoryIds.filter(id => id !== storyId)
    : [...current.readStoryIds, storyId];

  const updatedProgress: UserProgress = {
    ...current,
    readStoryIds: updatedReadIds,
    lastReadStoryId: storyId,
    totalWordsRead: calculateTotalWords(updatedReadIds),
  };

  saveStoredProgress(updatedProgress);
  return { isRead: !alreadyRead, newProgress: updatedProgress };
}

export function toggleStoryBookmark(storyId: string): { isBookmarked: boolean; newProgress: UserProgress } {
  const current = getStoredProgress();
  const alreadyBookmarked = current.bookmarkedStoryIds.includes(storyId);
  const updatedBookmarkIds = alreadyBookmarked
    ? current.bookmarkedStoryIds.filter(id => id !== storyId)
    : [...current.bookmarkedStoryIds, storyId];

  const updatedProgress: UserProgress = {
    ...current,
    bookmarkedStoryIds: updatedBookmarkIds,
  };

  saveStoredProgress(updatedProgress);
  return { isBookmarked: !alreadyBookmarked, newProgress: updatedProgress };
}

export function saveWordToBank(wordData: Omit<SavedWord, 'id' | 'savedAt'>): UserProgress {
  const current = getStoredProgress();
  const cleanWord = wordData.word.trim();
  if (!cleanWord) return current;

  // Don't add duplicate of same word for same story
  const exists = current.savedWords.some(w => w.word.toLowerCase() === cleanWord.toLowerCase());
  if (exists) return current;

  const newWord: SavedWord = {
    ...wordData,
    id: `word_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    savedAt: Date.now(),
  };

  const updatedProgress: UserProgress = {
    ...current,
    savedWords: [newWord, ...current.savedWords],
  };

  saveStoredProgress(updatedProgress);
  return updatedProgress;
}

export function removeWordFromBank(wordId: string): UserProgress {
  const current = getStoredProgress();
  const updatedProgress: UserProgress = {
    ...current,
    savedWords: current.savedWords.filter(w => w.id !== wordId),
  };
  saveStoredProgress(updatedProgress);
  return updatedProgress;
}

export function getReaderSettings(): ReaderSettings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (!raw) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveReaderSettings(settings: Partial<ReaderSettings>): ReaderSettings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  const current = getReaderSettings();
  const updated = { ...current, ...settings };
  try {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save settings', e);
  }
  return updated;
}

export function exportUserDataAsJson(): string {
  const progress = getStoredProgress();
  const settings = getReaderSettings();
  const exportPayload = {
    app: 'Tadoku Deutsch',
    exportedAt: new Date().toISOString(),
    progress,
    settings,
  };
  return JSON.stringify(exportPayload, null, 2);
}

export function importUserDataFromJson(jsonStr: string): boolean {
  try {
    const parsed = JSON.parse(jsonStr);
    if (parsed && parsed.progress) {
      saveStoredProgress(parsed.progress);
      if (parsed.settings) {
        saveReaderSettings(parsed.settings);
      }
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

export function resetAllUserData(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEYS.PROGRESS);
  localStorage.removeItem(STORAGE_KEYS.SETTINGS);
  window.dispatchEvent(new Event('tadoku_progress_updated'));
}
