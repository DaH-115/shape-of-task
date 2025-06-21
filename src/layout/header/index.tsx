import React, { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  HeaderWrapper,
  LogoWrapper,
  SideMenuBtn,
  SideMenuIcon,
  StyledLogo,
  Wrapper,
  HeaderSettingBtn,
} from 'layout/header/index.styles';
import NavMenu from 'components/menu/sideMenu/NavMenu';
import SettingBtn from 'components/buttons/SettingBtn';
import { useBreakpoint } from 'hooks/useBreakpoint';

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isAboveBreakpoint: isDesktop } = useBreakpoint({ breakpoint: 768 });

  const onMoveToMainHandler = useCallback(() => {
    if (pathname === '/') {
      return;
    } else {
      navigate('/');
    }
  }, [navigate, pathname]);

  const sideMenuHandler = useCallback(() => {
    setIsToggle((prev) => !prev);
  }, []);

  return (
    <HeaderWrapper>
      <Wrapper>
        <LogoWrapper onClick={onMoveToMainHandler}>
          <StyledLogo />
        </LogoWrapper>
        {isDesktop && (
          <HeaderSettingBtn>
            <SettingBtn />
          </HeaderSettingBtn>
        )}
        <SideMenuBtn
          onClick={sideMenuHandler}
          aria-label='사이드 메뉴'
          aria-expanded={isToggle}
        >
          <SideMenuIcon aria-hidden />
        </SideMenuBtn>
      </Wrapper>
      <NavMenu isOpen={isToggle} sideMenuHandler={sideMenuHandler} />
    </HeaderWrapper>
  );
};

export default Header;
