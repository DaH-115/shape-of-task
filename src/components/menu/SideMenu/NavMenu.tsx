import React, { memo } from 'react';
import styled from 'styled-components';
import LinkBtn from 'components/Button/LinkBtn';
import SideMenu, { MenuProps } from 'components/menu/SideMenu/SideMenu';
import { BsX } from 'react-icons/bs';

const NavMenu = ({ isOpen, sideMenuHandler }: MenuProps) => {
  return (
    <SideMenu isOpen={isOpen} sideMenuHandler={sideMenuHandler}>
      <HeaderWrapper>
        <CloseBtn onClick={sideMenuHandler} aria-label='메뉴 닫기' />
      </HeaderWrapper>
      <SideMenuBtnWrapper onClick={sideMenuHandler}>
        <LinkBtn linkTo={'/'} text={'Home'} />
        <LinkBtn linkTo={'/task-list'} text={'Task List'} />
        <LinkBtn linkTo={'/shape-list'} text={'Shape List'} />
      </SideMenuBtnWrapper>
    </SideMenu>
  );
};

export default memo(NavMenu);

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  margin-bottom: 1rem;
`;

const CloseBtn = styled(BsX)`
  font-size: 1.8rem;
`;

const SideMenuBtnWrapper = styled.div`
  width: 100%;
`;
