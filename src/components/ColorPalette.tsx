import { useCallback } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from 'store/hooks';
import { themeChange } from 'store/themeChangeSlice';
import { ColorTypes } from 'styles/theme-color';

interface ColorPaletteProps {
  colorPalette: ColorTypes;
  name: string;
  paletteName: string;
  isSelected: boolean;
}

const ColorPalette = ({
  colorPalette,
  name,
  paletteName,
  isSelected,
}: ColorPaletteProps) => {
  const dispatch = useAppDispatch();

  const onThemeChangeHandler = useCallback(() => {
    dispatch(themeChange(name));
  }, [dispatch, name]);

  return (
    <>
      <ColorPaletteTitle isSelected={isSelected}>
        {paletteName}
      </ColorPaletteTitle>
      <ColorPaletteWrapper
        onClick={onThemeChangeHandler}
        themecolor={colorPalette.triangle}
        isSelected={isSelected}
      >
        <PaletteWrapper>
          <Palette themecolor={colorPalette.triangle} />
          <Palette themecolor={colorPalette.square} />
          <Palette themecolor={colorPalette.circle} />
        </PaletteWrapper>
      </ColorPaletteWrapper>
    </>
  );
};

export default ColorPalette;

const ColorPaletteWrapper = styled.div<{
  themecolor: string;
  isSelected: boolean;
}>`
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #fff;
  border: 0.1rem solid
    ${({ theme, themecolor, isSelected }) =>
      isSelected ? themecolor : theme.commonColors.gray};
  cursor: pointer;

  ${({ theme }) => theme.device.tablet} {
    border-width: 0.1rem;
  }
`;

const ColorPaletteTitle = styled.p<{ isSelected: boolean }>`
  font-size: 1rem;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.commonColors.black : theme.commonColors.gray};
  margin: 1rem 0 0.4rem 0;
`;

const PaletteWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Palette = styled.div<{ themecolor: string }>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ themecolor }) => themecolor};

  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;
