import styled from 'styled-components';
import { FaGithub, FaHome } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTitle>{'Task Management - SHAPE OF TASK'}</FooterTitle>
      <FooterIconWrapper>
        <FooterIcon>
          <a
            href='https://github.com/DaH-115/tsc-todo-list'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub id='github-icon' />
          </a>
        </FooterIcon>
        <FooterIcon>
          <a
            href='https://www.notion.so/bab771634f4b4f78b8872aa4195e0b16'
            target='_blank'
            rel='noreferrer'
          >
            <FaHome id='home-icon' />
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
  padding: 1.4rem 1rem;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.important};

  ${({ theme }) => theme.device.tablet} {
    padding-left: 2rem;
  }
`;

const FooterTitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.8rem;

  ${({ theme }) => theme.device.tablet} {
    font-size: 0.9rem;
  }
`;

const FooterIconWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const FooterIcon = styled.div`
  cursor: pointer;

  #github-icon,
  #home-icon {
    width: 1.8rem;
    height: 1.8rem;

    ${({ theme }) => theme.device.tablet} {
      width: 1.4rem;
      height: 1.4rem;
    }
  }

  #github-icon {
    margin-right: 0.5rem;
  }
`;
