import { useCallback } from 'react';
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

export default ColorPalette;

const Container = styled.div`
  width: 100%;
  margin: 1rem 0 2rem;
`;

const PaletteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const PaletteName = styled.p<{ $isSelected: boolean }>`
  font-size: 1.2rem;

  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.important : theme.commonColors.gray};
  margin-bottom: 0.6rem;

  ${({ theme }) => theme.device.tablet} {
  }
`;

const PaletteColors = styled.div<{ $themeColor: string; $isSelected: boolean }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  background-color: ${({ $themeColor }) => $themeColor};
  border: 0.3rem solid #fff;
  margin-right: 0.6rem;

  &:last-child {
    margin-right: 0;
  }
`;
