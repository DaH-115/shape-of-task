import { useState, useEffect } from 'react';

export const useBreakpoint = (breakpoint: number = 768) => {
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState(
    window.innerWidth > breakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsAboveBreakpoint(window.innerWidth > breakpoint);
    };

    // 초기 설정 및 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 정리
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isAboveBreakpoint;
};
