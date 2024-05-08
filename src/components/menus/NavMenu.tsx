import React from 'react';
import styled from 'styled-components';
import { Title } from 'styles/Title';
import { BtnLink } from 'styles/Button/BtnLink';
import SlideMenu, { MenuProps } from 'components/menus/SlideMenu';

const NavMenu = ({ isOpen, slideMenuHandler }: MenuProps) => {
  return (
    <SlideMenu isOpen={isOpen} slideMenuHandler={slideMenuHandler}>
      <HeaderWrapper>
        <Title title='Menu' desc='메뉴' />
        <CloseBtn onClick={slideMenuHandler}>
          <button type='button'>{'닫기'}</button>
        </CloseBtn>
      </HeaderWrapper>
      <SlideMenuBtnWrapper>
        <BtnLink linkTo='/' type='button' text='메인 화면' />
        <BtnLink linkTo='/task-list' type='button' text='일정' />
        <BtnLink linkTo='/shape-list' type='button' text='완료된 일' />
      </SlideMenuBtnWrapper>
    </SlideMenu>
  );
};

export default React.memo(NavMenu);

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CloseBtn = styled.div`
  width: 100%;
  text-align: right;

  button {
    font-size: 1.2rem;
  }
`;

const SlideMenuBtnWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
`;
