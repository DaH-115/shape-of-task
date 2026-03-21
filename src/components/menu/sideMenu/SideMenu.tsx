import { memo, ReactNode, useEffect } from "react";
import styled from "styled-components";
import Portal from "@/components/modals/PortalComponent";

export interface MenuProps {
  isOpen: boolean;
  sideMenuHandler: () => void;
}

interface SideMenuProps extends MenuProps {
  children: ReactNode;
  contentAriaLabel?: string;
}

const SideMenu = ({
  isOpen,
  children,
  sideMenuHandler,
  contentAriaLabel = "사이드 메뉴",
}: SideMenuProps) => {
  // 스크롤 방지 처리 (스크롤바 숨김 시 레이아웃 시프트 방지)
  useEffect(() => {
    if (isOpen) {
      // 현재 스크롤 위치 저장
      const scrollY = window.scrollY;
      // 스크롤바 폭 계산 (overflow hidden 시 화면 크기 변화 방지용)
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      // body 스크롤 방지
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      return () => {
        // 메뉴가 닫힐 때 스크롤 복원
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  return (
    <Portal>
      <SideBackdrop $isOpen={isOpen} onClick={sideMenuHandler} />
      <SideMenuContainer
        $isOpen={isOpen}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        aria-label={contentAriaLabel}
      >
        {children}
      </SideMenuContainer>
    </Portal>
  );
};

export default memo(SideMenu);

const SideMenuContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;

  width: min(24rem, 100vw);
  min-width: 0;
  height: 100vh;
  padding: 1rem 1.5rem;

  background-color: ${({ theme }) => theme.commonColors.surface};
  box-shadow: ${({ theme }) => theme.shadows.elevated};

  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(100%)"};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;
  z-index: 200;
`;

const SideBackdrop = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.shadows.scrim};

  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;
  z-index: 100;
`;
