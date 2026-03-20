import { memo } from "react";
import styled from "styled-components";
import { themePalettes } from "@/styles/theme-colors";
import { useAppSelector } from "@/store/hooks";
import SideMenu, { MenuProps } from "@/components/menu/sideMenu/SideMenu";
import ColorPalette from "@/components/menu/settingMenu/ColorPalette";
import Title from "@/components/TitleComponent";
import Button from "@/components/buttons/Button";

const SettingMenu = ({ isOpen, sideMenuHandler }: MenuProps) => {
  const themeKey = useAppSelector((state) => state.themeChange.themeKey);

  return (
    <SideMenu isOpen={isOpen} sideMenuHandler={sideMenuHandler}>
      <Title title="Setting" desc="Color Settings" />
      {themePalettes.map((item, index) => (
        <ColorPalette
          key={index}
          themeKey={item.key}
          isSelected={themeKey === item.key}
        />
      ))}
      <ButtonWrapper onClick={sideMenuHandler}>
        <Button type="button" text="Apply" variant="outline" />
      </ButtonWrapper>
    </SideMenu>
  );
};

export default memo(SettingMenu);

const ButtonWrapper = styled.div`
  margin-top: 1.2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
