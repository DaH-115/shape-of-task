import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/Logo.svg';
import SlideMenu from 'components/SlideMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState<string>('false');
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const location = useLocation();

  const slideMenuOpenHandler = useCallback(() => {
    if (isOpen === 'true') {
      setIsOpen('false');
      document.body.style.overflow = 'auto';
    } else {
      setIsOpen('true');
      document.body.style.overflow = 'hidden';
    }

    setIsSelect((prev) => !prev);
  }, [isOpen]);

  return (
    <HeaderWrapper>
      <StyledLogo />
      <MeueWrapper>
        <Link to='/'>
          <MenuBtn isselected={location.pathname === '/' ? true : false}>
            {'할 일'}
          </MenuBtn>
        </Link>
        <Link to='/figure-list'>
          <MenuBtn
            isselected={location.pathname === '/figure-list' ? true : false}
          >
            {'완료된 일'}
          </MenuBtn>
        </Link>
        <MenuBtn isselected={isSelect} onClick={slideMenuOpenHandler}>
          {'설정'}
        </MenuBtn>
      </MeueWrapper>
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

const StyledLogo = styled(Logo)`
  width: auto;
  height: 1rem;
`;

const MeueWrapper = styled.div`
  display: flex;
  color: ${({ theme }) => theme.commonColors.gray};
`;

const MenuBtn = styled.div<{ isselected: boolean }>`
  color: ${({ theme, isselected }) =>
    isselected ? theme.commonColors.black : theme.commonColors.gray};
  font-weight: ${({ isselected }) => (isselected ? '700' : '500')};

  padding: 0.2rem 0.4rem;
  cursor: pointer;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.commonColors.black};
    transition: color 0.2s ease-in-out;
  }
`;
