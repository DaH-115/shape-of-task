import React from 'react';
import styled from 'styled-components';
import { themePalettes } from 'styles/theme-colors';
import { useAppSelector } from 'store/hooks';
import SlideMenu, { MenuProps } from 'components/menus/SlideMenu';
import ColorPalette from 'components/menus/ColorPalette';
import { Title } from 'styles/Title';
import { Btn } from 'styles/Button/Btn';

const SettingMenu = ({ isOpen, slideMenuHandler }: MenuProps) => {
  const paletteName = useAppSelector((state) => state.themeChange.paletteName);

  return (
    <SlideMenu isOpen={isOpen} slideMenuHandler={slideMenuHandler}>
      <Title title='Setting' desc='색상 설정' />
      {themePalettes.map((item, index) => (
        <ColorPalette
          key={index}
          name={item.name}
          isSelected={paletteName === item.name ? true : false}
        />
      ))}
      <BtnWrapper onClick={slideMenuHandler}>
        <Btn type='button' text='적용' isEmpty />
      </BtnWrapper>
    </SlideMenu>
  );
};

export default React.memo(SettingMenu);

const BtnWrapper = styled.div`
  width: 100%;
`;
