import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

const useResize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeHandler = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', debounce(resizeHandler, 100));

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return windowWidth;
};

export default useResize;
