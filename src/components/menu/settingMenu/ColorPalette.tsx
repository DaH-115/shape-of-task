import { memo, useCallback } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { themeChange } from "@/store/themeChangeSlice";
import {
  themeColors,
  resolvePaletteColors,
  type ThemeKey,
} from "@/styles/theme-colors";

interface ColorPaletteProps {
  themeKey: ThemeKey;
  isSelected: boolean;
}

const ColorPalette = ({ themeKey, isSelected }: ColorPaletteProps) => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((s) => s.themeChange.isDarkMode);
  const source = themeColors[themeKey];
  const { displayName, priority1, priority2, priority3 } = resolvePaletteColors(
    source,
    isDarkMode,
  );

  const themeChangeHandler = useCallback(() => {
    dispatch(themeChange(themeKey));
  }, [dispatch, themeKey]);

  return (
    <Container>
      <PaletteName $isSelected={isSelected}>{displayName}</PaletteName>
      <PaletteWrapper onClick={themeChangeHandler} $isSelected={isSelected}>
        <PaletteColor $themeColor={priority1} $isSelected={isSelected} />
        <PaletteColor $themeColor={priority2} $isSelected={isSelected} />
        <PaletteColor $themeColor={priority3} $isSelected={isSelected} />
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

const PaletteColor = styled.div<{ $themeColor: string; $isSelected: boolean }>`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background-color: ${({ $themeColor }) => $themeColor};
  transform: ${({ $isSelected }) => ($isSelected ? "scale(1.1)" : "scale(1)")};
  transition: transform 0.2s ease-in-out;
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
    padding: 1rem;
    background-color: ${({ theme }) => theme.commonColors.light_gray};
    transform: scale(1.02);

    ${PaletteColor} {
      transform: scale(1.1);
    }
  }
`;
