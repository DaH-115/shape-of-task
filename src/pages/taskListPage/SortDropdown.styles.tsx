import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.commonColors.gray};
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.priority1};
    background-color: ${({ theme }) => theme.commonColors.light_gray};
  }
`;

export const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 0.25rem);
  right: 0;

  background-color: ${({ theme }) => theme.commonColors.surface};
  border: 1px solid ${({ theme }) => theme.commonColors.gray_border};
  border-radius: 1rem;
  padding: 0.5rem;
  min-width: 8rem;

  box-shadow: ${({ theme }) => theme.shadows.dropdown};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "-0.4rem")});
  transition: all 0.2s ease-in-out;
  z-index: 10;
`;

export const MenuItem = styled.button<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: none;
  background: ${({ theme, $isActive }) =>
    $isActive ? theme.commonColors.light_gray : "transparent"};
  text-align: left;
  cursor: pointer;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.commonColors.dark_gray};
  font-size: 0.8rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.commonColors.light_gray};
  }

  /* 도형(SingleShapes) 크기 */
  > div:first-child {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`;

export const MenuDivider = styled.div`
  height: 0.05rem;
  background-color: ${({ theme }) => theme.commonColors.gray_border};
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
  padding: 0.2rem 0.3rem;
  font-size: 0.65rem;
  color: ${({ theme }) => theme.commonColors.gray};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;
