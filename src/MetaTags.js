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
      <meta
        name='description'
        content='세모 네모 동그라미로 나의 일상을 가득 채워보세요!'
      />
      <meta
        name='keywords'
        content='todo,todolist,투두,투두리스트,세모,네모,동그라미,triangle,square,circle'
      />

      <meta property='og:type' content='website' />
      <meta property='og:locale' content='ko_KR' />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:url' content='' />
      <meta property='og:title' content='세모 네모 동그라미 TODO LIST' />
      <meta property='og:image' content='' />
      <meta
        property='og:description'
        content='세모 네모 동그라미로 나의 일상을 가득 채워보세요!'
      />
      <meta property='og:site_name' content='세모 네모 동그라미 TODO LIST' />

      {/* Twitter Card */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content='세모 네모 동그라미 TODO LIST' />
      <meta
        name='twitter:description'
        content='세모 네모 동그라미로 나의 일상을 가득 채워보세요!'
      />
      <meta name='twitter:image' content='' />

      <link rel='canonical' href='' />
    </Helmet>
  );
};

export default MetaTags;
