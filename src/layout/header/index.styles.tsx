import styled from "styled-components";
import { IoMenu } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import Logo from "@/assets/icons/Logo.svg?react";

export const SideMenuButton = styled.button`
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
    outline: 2px solid ${({ theme }) => theme.colors.priority1};
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

/** 모바일 전용 설정 버튼 */
export const MobileSettingButton = styled(SideMenuButton)``;

export const MobileSettingIcon = styled(IoMdSettings)`
  font-size: 1.35rem;
  color: ${({ theme }) => theme.commonColors.black};
`;

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.commonColors.surface};
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
    flex-shrink: 0;
  }
`;

/** 로고와 분리해 설정·햄버거를 한 덩어리로 묶음 */
export const HeaderTrailing = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
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
