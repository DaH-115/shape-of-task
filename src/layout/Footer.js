import styled from 'styled-components';
import { FaGithub, FaHome } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterBox>
      <FooterIconWrapper>
        <FooterTitle className='footer-title'>
          세모 네모 동그라미 TODO LIST
        </FooterTitle>
        <FaGithub className='git-icon' />
        <FaHome className='home-icon' />
      </FooterIconWrapper>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled.footer`
  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  background-color: ${({ theme }) => theme.colors.orange};
`;

const FooterTitle = styled.p`
  display: blcok;
  margin-bottom: 14px;
  font-weight: 600;
  font-size: 18px;
  color: #fff;
  cursor: none;
`;

const FooterIconWrapper = styled.div`
  padding: 25px;
  cursor: pointer;

  .git-icon {
    width: 30px;
    height: 30px;
    color: #fff;
    margin-right: 12px;
  }

  .home-icon {
    width: 30px;
    height: 30px;
    color: #fff;
  }
`;
