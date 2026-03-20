import { useState, useEffect, useCallback } from 'react';

// 브레이크포인트 타입 정의
interface BreakpointOptions {
  breakpoint?: number;
  debounceMs?: number;
}

interface UseBreakpointReturn {
  isAboveBreakpoint: boolean;
  currentWidth: number;
}

// 기본값
const DEFAULT_BREAKPOINT = 768;
const DEFAULT_DEBOUNCE = 100;

/**
 * 반응형 브레이크포인트를 관리하는 커스텀 훅
 * - 디바운싱으로 성능 최적화
 * - 현재 화면 너비도 함께 제공
 */
export const useBreakpoint = (
  options: BreakpointOptions = {}
): UseBreakpointReturn => {
  const { breakpoint = DEFAULT_BREAKPOINT, debounceMs = DEFAULT_DEBOUNCE } =
    options;

  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState(
    window.innerWidth > breakpoint
  );

  // 디바운스된 리사이즈 핸들러
  const debouncedHandleResize = useCallback(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const newWidth = window.innerWidth;
        setCurrentWidth(newWidth);
        setIsAboveBreakpoint(newWidth > breakpoint);
      }, debounceMs);
    };

    return handleResize;
  }, [breakpoint, debounceMs]);

  useEffect(() => {
    const handleResize = debouncedHandleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [debouncedHandleResize]);

  return {
    isAboveBreakpoint,
    currentWidth,
  };
};
