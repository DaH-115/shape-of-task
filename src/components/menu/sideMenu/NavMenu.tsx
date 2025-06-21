import React, { memo } from 'react';
import styled from 'styled-components';
import LinkBtn from 'components/buttons/LinkBtn';
import SideMenu, { MenuProps } from 'components/menu/sideMenu/SideMenu';
import { BsX } from 'react-icons/bs';

const NavMenu = ({ isOpen, sideMenuHandler }: MenuProps) => {
  return (
    <SideMenu isOpen={isOpen} sideMenuHandler={sideMenuHandler}>
      <HeaderWrapper>
        <CloseButton
          onClick={sideMenuHandler}
          aria-label='메뉴 닫기'
          type='button'
        >
          <CloseIcon aria-hidden='true' />
        </CloseButton>
      </HeaderWrapper>
      <MenuTitle>메뉴</MenuTitle>
      <SideMenuBtnWrapper>
        <MenuItemWrapper onClick={sideMenuHandler}>
          <LinkBtn linkTo={'/'} text={'Home'} />
        </MenuItemWrapper>
        <MenuItemWrapper onClick={sideMenuHandler}>
          <LinkBtn linkTo={'/task-list'} text={'Task List'} />
        </MenuItemWrapper>
        <MenuItemWrapper onClick={sideMenuHandler}>
          <LinkBtn linkTo={'/shape-list'} text={'Shape List'} />
        </MenuItemWrapper>
      </SideMenuBtnWrapper>
    </SideMenu>
  );
};

export default memo(NavMenu);

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 1rem;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.important};
    color: white;
    transform: scale(1.1);
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
`;

const CloseIcon = styled(BsX)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.commonColors.dark_gray};
  transition: color 0.2s ease-in-out;

  ${CloseButton}:hover & {
    color: white;
  }
`;

const MenuTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.commonColors.black};
  margin-bottom: 1rem;
  text-align: center;
`;

const SideMenuBtnWrapper = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MenuItemWrapper = styled.div`
  /* 클릭 영역만 제공 */
`;
