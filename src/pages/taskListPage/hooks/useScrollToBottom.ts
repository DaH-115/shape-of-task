import { useState, useEffect } from 'react';

/** 스크롤이 페이지 하단에 도달했는지 감지하는 훅 */
const SCROLL_THRESHOLD_PX = 50;

export const useScrollToBottom = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const isAtBottom =
        scrollTop + clientHeight >= scrollHeight - SCROLL_THRESHOLD_PX;
      setIsScrolledDown(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrolledDown;
};
