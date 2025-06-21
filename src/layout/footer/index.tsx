import {
  Copyright,
  FooterIconWrapper,
  FooterLinkBtn,
  FooterTitle,
  FooterWrapper,
  GitHubIcon,
  HomeIcon,
} from 'layout/footer/index.styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTitle>{'SHAPE OF TASK'}</FooterTitle>
      <FooterIconWrapper>
        <FooterLinkBtn
          href='https://github.com/DaH-115/shape-of-task'
          target='_blank'
          rel='noreferrer'
          aria-label='GitHub 저장소로 이동'
        >
          <GitHubIcon aria-hidden />
        </FooterLinkBtn>
        <FooterLinkBtn
          href='https://www.notion.so/bab771634f4b4f78b8872aa4195e0b16'
          target='_blank'
          rel='noreferrer'
          aria-label='Notion 페이지로 이동'
        >
          <HomeIcon aria-hidden />
        </FooterLinkBtn>
      </FooterIconWrapper>
      <Copyright>{`ⓒGWAK DA HYUN 2022 - ${new Date().getFullYear()}`}</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
