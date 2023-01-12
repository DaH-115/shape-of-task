import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { themeChange } from '../store/themeChangeSlice';
import { useCallback } from 'react';

const ColorPalette = ({ colorPalette, name, paletteName, isSelected }) => {
  const dispatch = useDispatch();

  const onThemeChangeHandler = useCallback(() => {
    dispatch(themeChange(name));
  }, [dispatch, name]);

  return (
    <ColorPaletteWrapper
      onClick={onThemeChangeHandler}
      themecolor={colorPalette.circle}
      isSelected={isSelected}
    >
      <ColorPaletteTitle>{paletteName}</ColorPaletteTitle>
      <ColorBoxWrapper>
        <ColorBox themecolor={colorPalette.circle} />
        <ColorBox themecolor={colorPalette.triangle} />
        <ColorBox themecolor={colorPalette.square} />
      </ColorBoxWrapper>
    </ColorPaletteWrapper>
  );
};

export default ColorPalette;

const ColorPaletteWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
  padding: 20px;
  padding-top: 10px;
  border-radius: 20px;
  background-color: #fff;
  border: 4px solid
    ${({ theme, themecolor, isSelected }) =>
      isSelected ? themecolor : theme.commonColors.gray};

  cursor: pointer;
`;

const ColorPaletteTitle = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 700;
`;

const ColorBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ColorBox = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 20px;
  background-color: ${({ themecolor }) => themecolor};

  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;
