import React from 'react';
import styled from 'styled-components';
import { themePalettes } from 'styles/theme-colors';
import { useAppSelector } from 'store/hooks';
import SlideMenu, { MenuProps } from 'components/menus/SlideMenu';
import ColorPalette from 'components/menus/ColorPalette';
import Title from 'styles/TitleComponent';
import Btn from 'components/Button/Btn';

const SettingMenu = ({ isOpen, sideMenuHandler }: MenuProps) => {
  const paletteName = useAppSelector((state) => state.themeChange.paletteName);

  return (
    <SlideMenu isOpen={isOpen} sideMenuHandler={sideMenuHandler}>
      <Title title='Setting' desc='색상 설정' />
      {themePalettes.map((item, index) => (
        <ColorPalette
          key={index}
          name={item.name}
          isSelected={paletteName === item.name ? true : false}
        />
      ))}
      <BtnWrapper onClick={sideMenuHandler}>
        <Btn type='button' text='적용' isEmpty />
      </BtnWrapper>
    </SlideMenu>
  );
};

export default React.memo(SettingMenu);

const BtnWrapper = styled.div`
  margin-top: 2rem;
`;
