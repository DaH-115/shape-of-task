import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const MetaTags = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Helmet>
      <title>
        {'SHAPE OF TASK |'} {pathname === '/' ? '메인' : '도형 보기'}
      </title>
    </Helmet>
  );
};

export default MetaTags;
