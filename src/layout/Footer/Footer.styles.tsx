import styled, { css } from 'styled-components';
import { FaGithub, FaHome } from 'react-icons/fa';

export const Copyright = styled.p`
  font-size: 0.6rem;
  text-align: center;
  margin-top: 0.5rem;
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  text-align: center;
  min-width: ${({ theme }) => theme.size.mobile};
  padding: 1rem;
  padding-bottom: 1.2rem;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.remember};

  ${({ theme }) => theme.device.tablet} {
    padding: 1.5rem 2rem;
  }
`;

export const FooterTitle = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.6rem;
`;

export const FooterIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const FooterLinkBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    margin-right: 0.4rem;
  }
`;

const ButtonIconStyles = css`
  color: #fff;
`;

export const GitHubIcon = styled(FaGithub)`
  ${ButtonIconStyles}
`;

export const HomeIcon = styled(FaHome)`
  ${ButtonIconStyles}
`;
