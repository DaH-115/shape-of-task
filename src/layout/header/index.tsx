import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  HeaderWrapper,
  LogoWrapper,
  SideMenuButton,
  SideMenuIcon,
  StyledLogo,
  Wrapper,
  HeaderSettingBtn,
} from "@/layout/header/index.styles";
import NavMenu from "@/components/menu/sideMenu/NavMenu";
import SettingMenu from "@/components/menu/settingMenu/SettingMenu";
import SettingButton from "@/components/buttons/SettingButton";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isAboveBreakpoint: isDesktop } = useBreakpoint({ breakpoint: 768 });

  const onMoveToMainHandler = useCallback(() => {
    if (pathname === "/") {
      return;
    } else {
      navigate("/");
    }
  }, [navigate, pathname]);

  const sideMenuHandler = useCallback(() => {
    setIsToggle((prev) => !prev);
  }, []);

  const settingMenuHandler = useCallback(() => {
    setIsSettingOpen((prev) => !prev);
  }, []);

  return (
    <HeaderWrapper>
      <Wrapper>
        <LogoWrapper onClick={onMoveToMainHandler}>
          <StyledLogo />
        </LogoWrapper>
        {isDesktop && (
          <HeaderSettingBtn>
            <SettingButton onClick={settingMenuHandler} />
          </HeaderSettingBtn>
        )}
        <SideMenuButton
          onClick={sideMenuHandler}
          aria-label="사이드 메뉴"
          aria-expanded={isToggle}
        >
          <SideMenuIcon aria-hidden />
        </SideMenuButton>
      </Wrapper>
      <NavMenu isOpen={isToggle} sideMenuHandler={sideMenuHandler} />
      <SettingMenu
        isOpen={isSettingOpen}
        sideMenuHandler={settingMenuHandler}
      />
    </HeaderWrapper>
  );
};

export default Header;
