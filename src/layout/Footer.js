import styled from 'styled-components';
import { FaGithub, FaHome } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTextWrapper>
        <FooterTitle className='footer-title'>
          세모 네모 동그라미 TODO LIST
        </FooterTitle>
        <FooterIconWrapper>
          <FooterIcon>
            <a
              href='https://github.com/DaH-115/tsc-todo-list'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub className='github-icon' />
            </a>
          </FooterIcon>
          <FooterIcon>
            <a
              href='https://www.notion.so/bab771634f4b4f78b8872aa4195e0b16'
              target='_blank'
              rel='noreferrer'
            >
              <FaHome className='home-icon' />
            </a>
          </FooterIcon>
        </FooterIconWrapper>
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
  padding: 40px 20px;
  color: ${({ theme }) => theme.colors.circle};
`;

const FooterTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.circle};
  margin-bottom: 12px;
`;

const FooterIconWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const FooterIcon = styled.div`
  cursor: pointer;

  .github-icon,
  .home-icon {
    width: 25px;
    height: 25px;
  }

  .github-icon {
    margin-right: 8px;
  }
`;
