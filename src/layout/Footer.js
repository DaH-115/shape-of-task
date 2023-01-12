import styled from 'styled-components';
import { FaGithub, FaHome } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTextWrapper>
        <FooterTitle className='footer-title'>
          세모 네모 동그라미 TODO LIST
        </FooterTitle>
        <Copyright>{'ⓒkwak_dahyeon 2023'}</Copyright>
        <FaGithub className='git-icon' />
        <FaHome className='home-icon' />
      </FooterTextWrapper>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  background-color: ${({ theme }) => theme.colors.circle};
`;

const FooterTextWrapper = styled.div`
  padding: 25px;

  .git-icon {
    width: 30px;
    height: 30px;
    color: #fff;
    margin-right: 12px;
    cursor: pointer;
  }

  .home-icon {
    width: 30px;
    height: 30px;
    color: #fff;
    cursor: pointer;
  }
`;

const FooterTitle = styled.p`
  display: blcok;
  font-weight: 700;
  font-size: 18px;
  color: ${({ theme }) => theme.commonColors.light_gray};
`;

const Copyright = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.commonColors.light_gray};
  margin-bottom: 14px;
`;
