import styled from 'styled-components';
import { FaGithub, FaHome } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTitle>{'세모 네모 동그라미 TODO LIST'}</FooterTitle>
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
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  padding: 2rem 1rem;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.triangle};
`;

const FooterTitle = styled.p`
  margin-bottom: 0.8rem;
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
    width: 1.5rem;
    height: 1.5rem;
  }

  .github-icon {
    margin-right: 0.5rem;
  }
`;
