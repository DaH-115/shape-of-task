import { memo } from "react";
import styled from "styled-components";
import { themePalettes } from "@/styles/theme-colors";
import { useAppSelector } from "@/store/hooks";
import SideMenu, { MenuProps } from "@/components/menu/sideMenu/SideMenu";
import ColorPalette from "@/components/menu/settingMenu/ColorPalette";
import DarkModeToggle from "@/components/menu/settingMenu/DarkModeToggle";
import Title from "@/components/TitleComponent";
import Button from "@/components/buttons/Button";

const SettingMenu = ({ isOpen, sideMenuHandler }: MenuProps) => {
  const themeKey = useAppSelector((state) => state.themeChange.themeKey);

  return (
    <SideMenu
      isOpen={isOpen}
      sideMenuHandler={sideMenuHandler}
      contentAriaLabel="설정"
    >
      <Title title="설정" desc="화면 및 색상" />
      <DarkModeToggle />
      <SectionLabel>색상 팔레트</SectionLabel>
      {themePalettes.map((item, index) => (
        <ColorPalette
          key={index}
          themeKey={item.key}
          isSelected={themeKey === item.key}
        />
      ))}
      <ButtonWrapper onClick={sideMenuHandler}>
        <Button type="button" text="적용" />
      </ButtonWrapper>
    </SideMenu>
  );
};

export default memo(SettingMenu);

const SectionLabel = styled.p`
  margin-top: 1.25rem;
  margin-bottom: 0.25rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.commonColors.gray};
`;

const ButtonWrapper = styled.div`
  margin-top: 3rem;
`;
