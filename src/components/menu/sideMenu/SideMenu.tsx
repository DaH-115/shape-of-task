import { memo, ReactNode, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PortalComponents from 'components/modals/PortalComponents';

export interface MenuProps {
  isOpen: boolean;
  sideMenuHandler: () => void;
}

interface SideMenuProps extends MenuProps {
  children: ReactNode;
}

const SideMenu = ({ isOpen, children, sideMenuHandler }: SideMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // ESC 키 핸들러
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        sideMenuHandler();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // 현재 포커스된 요소 저장
      previousFocusRef.current = document.activeElement as HTMLElement;

      // 메뉴가 열리면 첫 번째 포커스 가능한 요소에 포커스
      setTimeout(() => {
        const firstFocusableElement = menuRef.current?.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as HTMLElement;
        firstFocusableElement?.focus();
      }, 100);
    } else {
      // 메뉴가 닫히면 이전 포커스 복원
      previousFocusRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, sideMenuHandler]);

  // 스크롤 방지 처리
  useEffect(() => {
    if (isOpen) {
      // 현재 스크롤 위치 저장
      const scrollY = window.scrollY;

      // body 스크롤 방지
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      return () => {
        // 메뉴가 닫힐 때 스크롤 복원
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // 포커스 트랩
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Tab') {
      const focusableElements = menuRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as NodeListOf<HTMLElement>;

      if (focusableElements && focusableElements.length > 0) {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    }
  };

  return (
    <PortalComponents>
      <SideBackdrop $isOpen={isOpen} onClick={sideMenuHandler} />
      <SideMenuContainer
        ref={menuRef}
        $isOpen={isOpen}
        role='dialog'
        aria-modal='true'
        aria-hidden={!isOpen}
        aria-label='사이드 메뉴'
        onKeyDown={handleKeyDown}
      >
        {children}
      </SideMenuContainer>
    </PortalComponents>
  );
};

export default memo(SideMenu);

const SideMenuContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;

  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  height: 100vh;
  background-color: #fff;
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
  padding: 1rem;
  padding-bottom: 2rem;
  overflow-y: auto;

  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateX(0)' : 'translateX(100%)'};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  z-index: 200;

  /* 포커스 스타일 개선 */
  &:focus {
    outline: none;
  }

  ${({ theme }) => theme.device.md} {
    width: 24rem;
    max-width: 90vw;
    padding-bottom: 2rem;
  }
`;

const SideBackdrop = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: rgba(177, 177, 177, 0.5);

  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  z-index: 100;
`;
