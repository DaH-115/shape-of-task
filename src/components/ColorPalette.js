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
      themecolor={colorPalette.triangle}
      isSelected={isSelected}
    >
      <ColorPaletteTitle isSelected={isSelected}>
        {paletteName}
      </ColorPaletteTitle>
      <ColorBoxWrapper>
        <ColorBox themecolor={colorPalette.triangle} />
        <ColorBox themecolor={colorPalette.square} />
        <ColorBox themecolor={colorPalette.circle} />
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

  ${({ theme }) => theme.device.tablet} {
    border-width: 3px;
  }
`;

const ColorPaletteTitle = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
  /* font-weight: 700; */
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.commonColors.black : theme.commonColors.gray};
`;

const ColorBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ColorBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 20%;
  background-color: ${({ themecolor }) => themecolor};

  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;
