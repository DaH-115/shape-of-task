import { useCallback } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from 'store/hooks';
import { themeChange } from 'store/themeChangeSlice';
import { ColorTypes } from 'styles/theme-color';

interface ColorPaletteProps {
  colorPalette: ColorTypes;
  name: string;
  paletteName: string;
  isselected: string;
}

const ColorPalette = ({
  colorPalette,
  name,
  paletteName,
  isselected,
}: ColorPaletteProps) => {
  const dispatch = useAppDispatch();

  const onThemeChangeHandler = useCallback(() => {
    dispatch(themeChange(name));
  }, [dispatch, name]);

  return (
    <>
      <ColorPaletteTitle $isselected={isselected}>
        {paletteName}
      </ColorPaletteTitle>
      <ColorPaletteWrapper
        onClick={onThemeChangeHandler}
        $themecolor={colorPalette.triangle}
        $isselected={isselected}
      >
        <PaletteWrapper>
          <Palette $themecolor={colorPalette.triangle} />
          <Palette $themecolor={colorPalette.square} />
          <Palette $themecolor={colorPalette.circle} />
        </PaletteWrapper>
      </ColorPaletteWrapper>
    </>
  );
};

export default ColorPalette;

const ColorPaletteWrapper = styled.div<{
  $themecolor: string;
  $isselected: string;
}>`
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #fff;
  border: 0.1rem solid
    ${({ theme, $themecolor, $isselected }) =>
      $isselected === 'true' ? $themecolor : theme.commonColors.gray};
  cursor: pointer;

  ${({ theme }) => theme.device.tablet} {
    border-width: 0.1rem;
  }
`;

const ColorPaletteTitle = styled.p<{ $isselected: string }>`
  font-size: 1rem;
  color: ${({ theme, $isselected }) =>
    $isselected === 'true'
      ? theme.commonColors.black
      : theme.commonColors.gray};
  margin: 1rem 0 0.4rem 0;
`;

const PaletteWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Palette = styled.div<{ $themecolor: string }>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ $themecolor }) => $themecolor};

  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;
