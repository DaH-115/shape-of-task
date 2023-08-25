import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const MetaTags = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Helmet>
      <title>
        세모 네모 동그라미 TODO LIST | {pathname === '/' ? '메인' : '도형 보기'}
      </title>
    </Helmet>
  );
};

export default MetaTags;
