import React from 'react';
import styled from 'styled-components';
import SlideMenu, { MenuProps } from 'components/menus/SlideMenu';
import { Title } from 'styles/Title';

const HamburgerMenu = ({ isOpen, slideMenuHandler }: MenuProps) => {
  return (
    <SlideMenu isOpen={isOpen} slideMenuHandler={slideMenuHandler}>
      <Title title='Menu' desc='메뉴' />
      <BtnWrapper onClick={slideMenuHandler}>{/* BTNS */}</BtnWrapper>
    </SlideMenu>
  );
};

export default React.memo(HamburgerMenu);

const BtnWrapper = styled.div`
  width: 100%;
`;
