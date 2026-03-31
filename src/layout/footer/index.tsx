import {
  Copyright,
  FooterIconWrapper,
  FooterLinkBtn,
  FooterTitle,
  FooterWrapper,
  GitHubIcon,
} from "@/layout/footer/index.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTitle>{"SHAPE OF TASK"}</FooterTitle>
      <Copyright>
        © GWAK DAHYUN {new Date().getFullYear()} All rights reserved.
      </Copyright>
      <FooterIconWrapper>
        <FooterLinkBtn
          href="https://github.com/DaH-115/shape-of-task"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub 저장소로 이동"
        >
          <GitHubIcon aria-hidden />
        </FooterLinkBtn>
      </FooterIconWrapper>
    </FooterWrapper>
  );
};

export default Footer;
