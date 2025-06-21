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
      <PaletteWrapper onClick={themeChangeHandler} $isSelected={isSelected}>
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
  margin-top: 1rem;
`;

const PaletteName = styled.p<{ $isSelected: boolean }>`
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.important : theme.commonColors.gray};
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  font-weight: ${({ $isSelected }) => ($isSelected ? '600' : '400')};
  text-align: center;
  transition: all 0.2s ease-in-out;
`;

const PaletteColors = styled.div<{ $themeColor: string; $isSelected: boolean }>`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  background-color: ${({ $themeColor }) => $themeColor};
  transition: all 0.2s ease-in-out;
  border: 2px solid
    ${({ $isSelected }) => ($isSelected ? '#fff' : 'transparent')};
  box-shadow: ${({ $isSelected }) =>
    $isSelected
      ? '0 0 0 2px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.15)'
      : '0 1px 3px rgba(0, 0, 0, 0.1)'};
`;

const PaletteWrapper = styled.div<{ $isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  transition: all 0.2s ease-in-out;
  transform: ${({ $isSelected }) => ($isSelected ? 'scale(1.02)' : 'scale(1)')};

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transform: scale(1.02);

    ${PaletteColors} {
      transform: scale(1.1);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
  }
`;
