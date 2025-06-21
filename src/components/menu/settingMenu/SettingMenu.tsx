import { memo } from 'react';
import styled from 'styled-components';
import { themePalettes } from 'styles/theme-colors';
import { useAppSelector } from 'store/hooks';
import SideMenu, { MenuProps } from 'components/menu/sideMenu/SideMenu';
import ColorPalette from 'components/menu/settingMenu/ColorPalette';
import Title from 'components/TitleComponent';
import Btn from 'components/buttons/Btn';

const SettingMenu = ({ isOpen, sideMenuHandler }: MenuProps) => {
  const paletteName = useAppSelector((state) => state.themeChange.paletteName);

  return (
    <SideMenu isOpen={isOpen} sideMenuHandler={sideMenuHandler}>
      <Title title='Setting' desc='색상 설정' />
      {themePalettes.map((item, index) => (
        <ColorPalette
          key={index}
          name={item.name}
          isSelected={paletteName === item.name ? true : false}
        />
      ))}
      <BtnWrapper onClick={sideMenuHandler}>
        <Btn type='button' text='적용' variant='outline' />
      </BtnWrapper>
    </SideMenu>
  );
};

export default memo(SettingMenu);

const BtnWrapper = styled.div`
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
