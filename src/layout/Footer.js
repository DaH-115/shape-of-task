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
  background-color: ${({ theme }) => theme.colors.triangle};
`;

const FooterTextWrapper = styled.div`
  padding: 30px;
  color: ${({ theme }) => theme.colors.circle};

  .git-icon,
  .home-icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  .git-icon {
    margin-right: 12px;
  }
`;

const FooterTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.circle};
`;

const Copyright = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.circle};
  margin-bottom: 14px;
`;
