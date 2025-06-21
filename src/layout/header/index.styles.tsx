import styled from 'styled-components';
import { IoMenu } from 'react-icons/io5';
import Logo from 'assets/icons/Logo.svg?react';

export const SideMenuBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.commonColors.light_gray};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.important};
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  ${({ theme }) => theme.device.md} {
    display: none;
  }
`;

export const SideMenuIcon = styled(IoMenu)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.commonColors.black};
`;

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid ${({ theme }) => theme.commonColors.light_gray};
  z-index: 50;
`;

export const LogoWrapper = styled.div`
  width: 4rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  ${({ theme }) => theme.device.md} {
    width: 4.5rem;
  }
`;

export const StyledLogo = styled(Logo)`
  width: 100%;
  height: 100%;
  display: block;
`;

export const HeaderSettingBtn = styled.div`
  display: none;

  ${({ theme }) => theme.device.md} {
    display: flex;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem;

  ${({ theme }) => theme.device.md} {
    padding: 0.5rem 1rem;
  }
`;
