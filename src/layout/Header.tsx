import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import StyledBtn from 'styles/StyledBtn';
import StyledLogo from 'components/StyledLogo';
import SlideMenu from 'components/SlideMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState<string>('false');

  const slideMenuOpenHandler = useCallback(() => {
    if (isOpen === 'true') {
      setIsOpen('false');
      document.body.style.overflow = 'auto';
    } else {
      setIsOpen('true');
      document.body.style.overflow = 'hidden';
    }
  }, [isOpen]);

  return (
    <HeaderWrapper>
      <a href='/'>
        <StyledLogo />
      </a>
      <MenueWrapper>
        <a href='/figure-list'>
          <FigureListBtn>{'완료 리스트'}</FigureListBtn>
        </a>
        <StyledBtn onClick={slideMenuOpenHandler}>{'설정'}</StyledBtn>
      </MenueWrapper>
      <SlideMenu isopen={isOpen} slideMenuHandler={slideMenuOpenHandler} />
    </HeaderWrapper>
  );
};

export default React.memo(Header);

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  padding: 0.5rem 1rem;
  padding-top: 1rem;
  background-color: #fff;

  ${({ theme }) => theme.device.tablet} {
    padding: 0.5rem 2rem;
  }
`;

const MenueWrapper = styled.div`
  display: flex;
`;

const FigureListBtn = styled(StyledBtn)`
  margin-right: 0.3rem;

  ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;
