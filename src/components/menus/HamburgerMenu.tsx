import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from 'styles/Title';
import { BtnLink } from 'styles/Button/BtnLink';
import { BtnSetting } from 'styles/Button/BtnSetting';
import SlideMenu, { MenuProps } from 'components/menus/SlideMenu';

const HamburgerMenu = ({ isOpen, slideMenuHandler }: MenuProps) => {
  return (
    <SlideMenu isOpen={isOpen} slideMenuHandler={slideMenuHandler}>
      <HeaderWrapper>
        <Title title='Menu' desc='메뉴' />
        <CloseBtn onClick={slideMenuHandler}>
          <button type='button'>{'닫기'}</button>
        </CloseBtn>
      </HeaderWrapper>
      <SlideMenuBtnWrapper onClick={slideMenuHandler}>
        <Link to='/'>
          <BtnWrapper>
            <BtnLink type='button' text='메인 화면' isEmpty />
          </BtnWrapper>
        </Link>
        <Link to='/task-list'>
          <BtnWrapper>
            <BtnLink type='button' text='일정' isEmpty />
          </BtnWrapper>
        </Link>
        <Link to='/shape-list'>
          <BtnWrapper>
            <BtnLink type='button' text='완료된 일' isEmpty />
          </BtnWrapper>
        </Link>
        <BtnWrapper>
          <BtnSetting />
        </BtnWrapper>
      </SlideMenuBtnWrapper>
    </SlideMenu>
  );
};

export default React.memo(HamburgerMenu);

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
    font-weight: 700;
  }
`;

const SlideMenuBtnWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const BtnWrapper = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
`;
