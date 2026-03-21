import styled, { css } from "styled-components";
import { FaGithub, FaHome } from "react-icons/fa";

export const FooterWrapper = styled.footer`
  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  padding: 2rem 1.5rem;
  background-color: ${({ theme }) =>
    theme.isDarkMode ? theme.commonColors.light_gray : theme.colors.priority1};

  ${({ theme }) => theme.device.md} {
    padding: 1.5rem 2rem;
  }
`;

export const FooterTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
  color: ${({ theme }) =>
    theme.isDarkMode ? theme.commonColors.gray : theme.commonColors.black};
`;

export const Copyright = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) =>
    theme.isDarkMode ? theme.commonColors.gray : theme.commonColors.black};
`;

export const FooterIconWrapper = styled.div`
  display: flex;
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
  color: ${({ theme }) =>
    theme.isDarkMode ? theme.commonColors.gray : theme.commonColors.black};
`;

export const GitHubIcon = styled(FaGithub)`
  ${ButtonIconStyles}
`;

export const HomeIcon = styled(FaHome)`
  ${ButtonIconStyles}
`;
