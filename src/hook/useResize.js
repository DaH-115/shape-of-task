import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

const useResize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const resizeHandler = debounce(() => {
    setWindowWidth(window.innerWidth);
  }, 100);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [resizeHandler]);

  return windowWidth;
};

export default useResize;
