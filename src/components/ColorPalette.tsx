import { useCallback } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from 'store/hooks';
import { themeChange } from 'store/themeChangeSlice';
import { themeColors } from 'styles/theme-colors';

interface ColorPaletteProps {
  name: string;
  isselected: string;
}

const ColorPalette = ({ name, isselected }: ColorPaletteProps) => {
  const dispatch = useAppDispatch();
  const { paletteName, important, remember, anytime } = themeColors[name] || {};

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
        $themecolor={important}
        $isselected={isselected}
      >
        <PaletteWrapper>
          <Palette $themecolor={important} />
          <Palette $themecolor={remember} />
          <Palette $themecolor={anytime} />
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
    border-width: ${({ $isselected }) =>
      $isselected === 'true' ? '0.2rem' : '0.1rem'};
  }
`;

const ColorPaletteTitle = styled.p<{ $isselected: string }>`
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

  margin-right: 0.9rem;

  &:last-child {
    margin-right: 0;
  }
`;
