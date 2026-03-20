import { memo, useCallback } from "react";
import styled from "styled-components";
import { useAppDispatch } from "@/store/hooks";
import { themeChange } from "@/store/themeChangeSlice";
import { themeColors, type ThemeKey } from "@/styles/theme-colors";

interface ColorPaletteProps {
  themeKey: ThemeKey;
  isSelected: boolean;
}

const ColorPalette = ({ themeKey, isSelected }: ColorPaletteProps) => {
  const dispatch = useAppDispatch();
  const palette = themeColors[themeKey];
  const { displayName, priority1, priority2, priority3 } = palette;

  const themeChangeHandler = useCallback(() => {
    dispatch(themeChange(themeKey));
  }, [dispatch, themeKey]);

  return (
    <Container>
      <PaletteName $isSelected={isSelected}>{displayName}</PaletteName>
      <PaletteWrapper onClick={themeChangeHandler} $isSelected={isSelected}>
        <PaletteColors $themeColor={priority1} $isSelected={isSelected} />
        <PaletteColors $themeColor={priority2} $isSelected={isSelected} />
        <PaletteColors $themeColor={priority3} $isSelected={isSelected} />
      </PaletteWrapper>
    </Container>
  );
};

export default memo(ColorPalette);

const Container = styled.div`
  width: 100%;

  ${({ theme }) => theme.device.md} {
    margin-top: 2rem;
  }
`;

const PaletteName = styled.p<{ $isSelected: boolean }>`
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.priority1 : theme.commonColors.gray};
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: ${({ $isSelected }) => ($isSelected ? "600" : "400")};
  text-align: left;
  transition: all 0.2s ease-in-out;
`;

const PaletteColors = styled.div<{ $themeColor: string; $isSelected: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  background-color: ${({ $themeColor }) => $themeColor};
  transition: all 0.2s ease-in-out;
  border: 1px solid
    ${({ $isSelected }) => ($isSelected ? "#fff" : "transparent")};

  ${({ theme }) => theme.device.md} {
    width: 2rem;
    height: 2rem;
  }
`;

const PaletteWrapper = styled.div<{ $isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 1rem;
  transition: all 0.2s ease-in-out;
  transform: ${({ $isSelected }) => ($isSelected ? "scale(1.02)" : "scale(1)")};

  &:hover {
    background-color: ${({ theme }) => theme.commonColors.light_gray};
    transform: scale(1.02);

    ${PaletteColors} {
      transform: scale(1.1);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
  }
`;
