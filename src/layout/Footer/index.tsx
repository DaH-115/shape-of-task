import {
  Copyright,
  FooterIconWrapper,
  FooterLinkBtn,
  FooterTitle,
  FooterWrapper,
  GitHubIcon,
  HomeIcon,
} from 'layout/Footer/Footer.styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTitle>{'SHAPE OF TASK'}</FooterTitle>
      <FooterIconWrapper>
        <FooterLinkBtn
          href='https://github.com/DaH-115/tsc-todo-list'
          target='_blank'
          rel='noreferrer'
        >
          <GitHubIcon aria-hidden />
        </FooterLinkBtn>
        <FooterLinkBtn
          href='https://www.notion.so/bab771634f4b4f78b8872aa4195e0b16'
          target='_blank'
          rel='noreferrer'
        >
          <HomeIcon aria-hidden />
        </FooterLinkBtn>
      </FooterIconWrapper>
      <Copyright>ⓒGWAK DA HYUN 2022 - 2025</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
