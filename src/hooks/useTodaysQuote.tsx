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
  error: string | null;
  refetchHandler: () => void;
  pinSaveHandler: () => void;
  displayedQuote: QuoteType | null;
}

// 오늘의 명언을 관리하는 커스텀 훅
const useTodaysQuote = (): UseTodaysQuoteReturn => {
  // localStorage에서 초기값 가져오기
  const savedState = getFromLocalStorage<SavedQuoteState>(
    STORAGE_KEYS.QUOTE_STATE,
    {
      savedPinned: false,
      savedQuote: null,
    }
  );

  // 로컬 상태: 명언 고정 여부와 고정된 명언 데이터
  const [isPinned, setIsPinned] = useState(savedState.savedPinned);
  const [pinnedQuote, setPinnedQuote] = useState<QuoteType | null>(
    savedState.savedQuote
  );
  const [error, setError] = useState<string | null>(null);

  // RTK Query: 자동 캐싱 및 로딩 상태 관리 (고정 시 API 호출 생략)
  const {
    data: quoteData,
    isLoading,
    isError,
    refetch,
  } = useGetQuoteQuery(undefined, {
    skip: isPinned, // 명언이 고정되어 있으면 API 호출하지 않음
  });

  // API 에러 감지 및 처리
  useEffect(() => {
    if (isError && !isPinned) {
      setError(
        'Failed to load quote. Please check your network connection and try again.'
      );
    }
  }, [isError, isPinned]);

  // 명언 새로고침 핸들러
  const refetchHandler = useCallback(() => {
    try {
      // 새로고침 시 에러 초기화
      setError(null);
      refetch();
    } catch (error) {
      console.error('Quote refresh failed:', error);
      setError('Failed to refresh quote. Please try again.');
    }
  }, [refetch]);

  // 명언 고정/해제 토글 핸들러
  const pinSaveHandler = useCallback(() => {
    // 고정/해제 동작 시 이전 에러 초기화
    setError(null);

    if (isPinned) {
      // 고정 해제: 저장된 명언 삭제
      setPinnedQuote(null);
      setIsPinned(false);
    } else {
      // 고정 설정: 현재 명언 저장
      if (quoteData) {
        setPinnedQuote(quoteData);
        setIsPinned(true);
      } else {
        setError('No quote available to pin. Please refresh and try again.');
      }
    }
  }, [isPinned, quoteData]);

  // localStorage에 상태 저장 (상태 변경 시마다)
  useEffect(() => {
    try {
      const success = saveToLocalStorage(STORAGE_KEYS.QUOTE_STATE, {
        savedPinned: isPinned,
        savedQuote: isPinned ? pinnedQuote : null,
      });

      // 저장 실패시 에러 표시
      if (!success) {
        setError(
          'Failed to save quote settings. Please check your browser storage.'
        );
      }
    } catch (error) {
      console.error('localStorage save error:', error);
      setError(
        'Error occurred while saving settings. Please refresh the page.'
      );
    }
  }, [isPinned, pinnedQuote]);

  // 표시할 명언 결정 (고정된 명언 우선, 없으면 API 데이터)
  const displayedQuote = isPinned ? pinnedQuote : quoteData || null;

  return {
    isPinned,
    isLoading,
    error,
    refetchHandler,
    pinSaveHandler,
    displayedQuote,
  };
};

export default useTodaysQuote;
