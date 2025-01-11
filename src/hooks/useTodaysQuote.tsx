import { useCallback, useEffect, useMemo, useState } from 'react';
import { useGetPostsQuery } from 'store/api/apiSlice';

interface QuoteType {
  content: string;
  author: string;
}

// localStorage에 저장되는 상태 타입
interface SavedQuoteState {
  savedPinned: boolean;
  savedQuote: QuoteType | null;
}

// 커스텀 훅의 반환 타입
interface UseTodaysQuoteReturn {
  isPinned: boolean;
  isLoading: boolean;
  isError: boolean;
  storageError: string | null;
  refetchHandler: () => void;
  pinSaveHandler: () => void;
  displayedQuote: QuoteType | null;
}

const useTodaysQuote = (): UseTodaysQuoteReturn => {
  const [storageError, setStorageError] = useState<string | null>(null);

  const getInitialState = (): SavedQuoteState => {
    try {
      const savedState = localStorage.getItem('quoteState');
      if (savedState) {
        return JSON.parse(savedState);
      }
    } catch (error) {
      setStorageError('저장된 설정을 불러오는데 실패했습니다.');
    }

    return { savedPinned: false, savedQuote: null };
  };

  const { savedPinned, savedQuote } = useMemo(() => getInitialState(), []);
  const [isPinned, setIsPinned] = useState(savedPinned);
  const [pinnedQuote, setPinnedQuote] = useState<QuoteType | null>(savedQuote);
  const { data: quoteData, isLoading, isError, refetch } = useGetPostsQuery();

  const refetchHandler = useCallback(() => {
    if (!isPinned) refetch();
  }, [isPinned, refetch]);

  const savePinnedQuote = useCallback(() => {
    if (quoteData) {
      setPinnedQuote(quoteData);
    }
  }, [quoteData]);

  const clearPinnedQuote = useCallback(() => {
    setPinnedQuote(null);
  }, []);

  const pinSaveHandler = useCallback(() => {
    if (isPinned) {
      clearPinnedQuote();
      setIsPinned(false);
    } else {
      savePinnedQuote();
      setIsPinned(true);
    }
  }, [isPinned, clearPinnedQuote, savePinnedQuote]);

  useEffect(() => {
    try {
      const stateSave = {
        savedPinned: isPinned,
        savedQuote: isPinned ? pinnedQuote : null,
      };
      localStorage.setItem('quoteState', JSON.stringify(stateSave));
    } catch (error) {
      setStorageError('설정을 저장하는데 실패했습니다.');
      localStorage.setItem(
        'quoteState',
        JSON.stringify({ savedPinned: false, savedQuote: null })
      );
    }
  }, [isPinned, pinnedQuote]);

  const displayedQuote = isPinned ? pinnedQuote : quoteData ?? null;

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
