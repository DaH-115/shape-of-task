import { useCallback, useEffect, useState } from 'react';
import { useGetQuoteQuery } from 'store/api/apiSlice';
import {
  getFromLocalStorage,
  saveToLocalStorage,
  STORAGE_KEYS,
} from 'utils/localStorage';

interface QuoteType {
  quote: string;
  author: string;
  category?: string;
}

interface SavedQuoteState {
  savedPinned: boolean;
  savedQuote: QuoteType | null;
}

interface UseTodaysQuoteReturn {
  isPinned: boolean;
  isLoading: boolean;
  isError: boolean;
  storageError: string | null;
  refetchHandler: () => void;
  pinSaveHandler: () => void;
  displayedQuote: QuoteType | null;
}

/**
 * 오늘의 명언을 관리하는 커스텀 훅
 */
const useTodaysQuote = (): UseTodaysQuoteReturn => {
  // localStorage에서 초기값 가져오기
  const savedState = getFromLocalStorage<SavedQuoteState>(
    STORAGE_KEYS.QUOTE_STATE,
    {
      savedPinned: false,
      savedQuote: null,
    }
  );

  // 상태 관리
  const [isPinned, setIsPinned] = useState(savedState.savedPinned);
  const [pinnedQuote, setPinnedQuote] = useState<QuoteType | null>(
    savedState.savedQuote
  );
  const [storageError, setStorageError] = useState<string | null>(null);

  // API 데이터
  const { data: quoteData, isLoading, isError, refetch } = useGetQuoteQuery();

  /**
   * 명언 새로고침 핸들러 (고정되지 않은 경우에만)
   */
  const refetchHandler = useCallback(() => {
    if (!isPinned) {
      refetch();
    }
  }, [isPinned, refetch]);

  /**
   * 명언 고정/해제 토글 핸들러
   */
  const pinSaveHandler = useCallback(() => {
    if (isPinned) {
      // 고정 해제
      setPinnedQuote(null);
      setIsPinned(false);
    } else {
      // 고정 설정
      if (quoteData) {
        setPinnedQuote(quoteData);
        setIsPinned(true);
      }
    }
  }, [isPinned, quoteData]);

  /**
   * localStorage에 상태 저장 (상태 변경 시마다)
   */
  useEffect(() => {
    const success = saveToLocalStorage(STORAGE_KEYS.QUOTE_STATE, {
      savedPinned: isPinned,
      savedQuote: isPinned ? pinnedQuote : null,
    });

    // 저장 실패시 에러 표시
    if (!success) {
      setStorageError('저장에 실패했습니다.');
    } else {
      setStorageError(null);
    }
  }, [isPinned, pinnedQuote]);

  /**
   * 표시할 명언 결정 (고정된 명언 우선, 그 다음 API 데이터)
   */
  const displayedQuote = isPinned ? pinnedQuote : quoteData || null;

  return {
    isPinned,
    isLoading,
    isError,
    storageError,
    refetchHandler,
    pinSaveHandler,
    displayedQuote,
  };
};

export default useTodaysQuote;
