/**
 * 간단한 localStorage 유틸리티
 */

// 저장할 키 이름들
export const STORAGE_KEYS = {
  QUOTE_STATE: 'quoteState',
} as const;

/**
 * localStorage에서 데이터 가져오기
 */
export const getFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  } catch {
    return defaultValue;
  }
};

/**
 * localStorage에 데이터 저장하기
 */
export const saveToLocalStorage = <T>(key: string, value: T): boolean => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true; // 성공
  } catch {
    return false; // 실패
  }
};
