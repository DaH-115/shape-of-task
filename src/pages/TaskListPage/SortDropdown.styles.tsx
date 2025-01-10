import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.commonColors.gray};
  transition: all 0.2s;

  &:hover,
  :active {
    color: ${({ theme }) => theme.colors.important};
    background-color: #ffffff;
  }

  svg {
    font-size: 1.2rem;
  }
`;

export const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 0.2rem);
  right: 0;

  background-color: #ffffff;
  border: 1px solid ${({ theme }) => theme.commonColors.gray};
  border-radius: 0.5rem;

  padding: 0.5rem;
  min-width: 8rem;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transform: translateY(${({ $isOpen }) => ($isOpen ? '0' : '-0.4rem')});
  transition: all 0.2s ease-in-out;
  z-index: 10;
`;

export const MenuItem = styled.button<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 12px;
  border: none;
  background: ${({ theme, $isActive }) =>
    $isActive ? theme.commonColors.light_gray : 'transparent'};
  text-align: left;
  cursor: pointer;
  border-radius: 6px;
  color: #475569;
  font-size: 14px;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.commonColors.light_gray};
  }

  svg {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.commonColors.gray};
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
  padding: 0.2rem;
  font-size: 0.6rem;
  color: ${({ theme }) => theme.commonColors.gray};
`;
