import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';

// ✔️ windowWidth가 desktopSize이상이면 메인 화면으로 navigate합니다
const useGetwindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const tabletSize = 768;

  useEffect(() => {
    const resizeHandler = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', debounce(resizeHandler, 200));

    windowWidth >= tabletSize && navigate('/');

    return () => window.removeEventListener('resize', resizeHandler);
  }, [windowWidth, navigate]);

  return { windowWidth, tabletSize };
};

export default useGetwindowWidth;
