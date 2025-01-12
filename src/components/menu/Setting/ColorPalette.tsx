import { memo, useCallback } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from 'store/hooks';
import { themeChange } from 'store/themeChangeSlice';
import { themeColors } from 'styles/theme-colors';

interface ColorPaletteProps {
  name: string;
  isSelected: boolean;
}

const ColorPalette = ({ name, isSelected }: ColorPaletteProps) => {
  const dispatch = useAppDispatch();
  const { paletteName, important, remember, anytime } = themeColors[name];

  const themeChangeHandler = useCallback(() => {
    dispatch(themeChange(name));
  }, [dispatch, name]);

  return (
    <Container>
      <PaletteName $isSelected={isSelected}>{paletteName}</PaletteName>
      <PaletteWrapper onClick={themeChangeHandler}>
        <PaletteColors $themeColor={important} $isSelected={isSelected} />
        <PaletteColors $themeColor={remember} $isSelected={isSelected} />
        <PaletteColors $themeColor={anytime} $isSelected={isSelected} />
      </PaletteWrapper>
    </Container>
  );
};

export default memo(ColorPalette);

const Container = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;

const PaletteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PaletteName = styled.p<{ $isSelected: boolean }>`
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.important : theme.commonColors.gray};
  margin-bottom: 0.6rem;

  ${({ theme }) => theme.device.tablet} {
  }
`;

const PaletteColors = styled.div<{ $themeColor: string; $isSelected: boolean }>`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background-color: ${({ $themeColor }) => $themeColor};

  &:not(:last-child) {
    margin-right: 0.6rem;
  }
`;
