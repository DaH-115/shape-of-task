import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';

const useGetWindowWidth = (limitSize: number) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const resizeHandler = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', debounce(resizeHandler, 200));

    windowWidth >= limitSize && navigate('/');

    return () => window.removeEventListener('resize', resizeHandler);
  }, [windowWidth, limitSize, navigate]);

  return { windowWidth };
};

export default useGetWindowWidth;
