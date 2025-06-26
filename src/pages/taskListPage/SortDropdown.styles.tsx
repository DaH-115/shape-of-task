import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  /* 모바일 우선: 기본적으로 큰 크기 */
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.commonColors.gray};
  transition: all 0.2s ease-in-out;

  &:hover,
  :active {
    color: ${({ theme }) => theme.colors.important};
    background-color: #ffffff;
  }

  svg {
    /* 모바일 우선: 기본적으로 큰 아이콘 */
    font-size: 1.5rem;
  }

  /* 데스크톱에서는 조금 더 작게 */
  ${({ theme }) => theme.device.md} {
    width: 2.2rem;
    height: 2.2rem;

    svg {
      font-size: 1.3rem;
    }
  }
`;

export const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 0.2rem);
  right: 0;

  background-color: #ffffff;
  border: 1px solid ${({ theme }) => theme.commonColors.gray};
  border-radius: 1rem;

  /* 모바일 우선: 기본적으로 큰 크기 */
  padding: 0.75rem;
  min-width: 10rem;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transform: translateY(${({ $isOpen }) => ($isOpen ? '0' : '-0.4rem')});
  transition: all 0.2s ease-in-out;
  z-index: 10;

  /* 데스크톱에서만 작게 */
  ${({ theme }) => theme.device.md} {
    padding: 0.5rem;
    min-width: 8rem;
    border-radius: 1rem;
  }
`;

export const MenuItem = styled.button<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  /* 모바일 우선: 기본적으로 큰 크기 */
  padding: 12px 16px;
  border: none;
  background: ${({ theme, $isActive }) =>
    $isActive ? theme.commonColors.light_gray : 'transparent'};
  text-align: left;
  cursor: pointer;
  border-radius: 1rem;
  color: ${({ theme }) => theme.commonColors.black};
  font-size: 16px;
  min-height: 44px; /* iOS 권장 터치 영역 크기 */
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.commonColors.light_gray};
  }

  svg {
    font-size: 0.8rem;
    color: #64748b;
  }

  /* 데스크톱에서만 작게 */
  ${({ theme }) => theme.device.md} {
    padding: 8px 12px;
    font-size: 14px;
    gap: 8px;
    border-radius: 1rem;
    min-height: auto;
  }

  /* 드롭다운 메뉴 내부의 도형 크기 조정 */
  > div:first-child {
    /* 모바일 우선: 기본적으로 큰 크기 */
    width: 1.2rem;
    height: 1.2rem;
    flex-shrink: 0;

    svg {
      width: 1rem;
      height: 1rem;
    }

    /* 데스크톱에서만 작게 */
    ${({ theme }) => theme.device.md} {
      width: 1rem;
      height: 1rem;

      svg {
        width: 0.8rem;
        height: 0.8rem;
      }
    }
  }
`;

export const MenuDivider = styled.div`
  height: 0.05rem;
  background-color: ${({ theme }) => theme.commonColors.light_gray};
  margin: 0.4rem 0.2rem;
`;

export const MenuSection = styled.div`
  padding: 0.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

export const MenuLabel = styled.div`
  /* 모바일 우선: 기본적으로 큰 크기 */
  padding: 0.3rem;
  font-size: 0.7rem;
  color: #64748b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  /* 데스크톱에서만 작게 */
  ${({ theme }) => theme.device.md} {
    padding: 0.2rem;
    font-size: 0.6rem;
  }
`;
