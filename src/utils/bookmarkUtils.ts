
import { FirmData } from "@/data/types";

const BOOKMARK_KEY = 'accountingFirmBookmarks';

export const getBookmarkedFirms = (): string[] => {
  const bookmarksJson = localStorage.getItem(BOOKMARK_KEY);
  return bookmarksJson ? JSON.parse(bookmarksJson) : [];
};

export const toggleBookmark = (firmId: string): boolean => {
  const bookmarks = getBookmarkedFirms();
  
  // Check if already bookmarked
  const index = bookmarks.indexOf(firmId);
  let isNowBookmarked = false;
  
  if (index === -1) {
    // Add to bookmarks
    bookmarks.push(firmId);
    isNowBookmarked = true;
  } else {
    // Remove from bookmarks
    bookmarks.splice(index, 1);
    isNowBookmarked = false;
  }
  
  // Save to localStorage
  localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bookmarks));
  
  return isNowBookmarked;
};

export const isBookmarked = (firmId: string): boolean => {
  const bookmarks = getBookmarkedFirms();
  return bookmarks.includes(firmId);
};

export const loadBookmarkedState = (firms: FirmData[]): FirmData[] => {
  const bookmarks = getBookmarkedFirms();
  
  return firms.map(firm => ({
    ...firm,
    bookmarked: bookmarks.includes(firm.id)
  }));
};
