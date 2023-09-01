import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/Logo.svg';
import StyledBtn from 'styles/StyledBtn';
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
          <FigureListBtn>{'완료된 일'}</FigureListBtn>
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
  padding: 1rem;
  padding-top: 1.4rem;
  background-color: #fff;

  border-bottom: 0.1rem solid ${({ theme }) => theme.commonColors.light_gray};
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

const StyledLogo = styled(Logo)`
  width: auto;
  height: 1.5rem;
`;
