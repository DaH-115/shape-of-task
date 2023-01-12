import React from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import StyledBtn from '../styles/StyledBtn';
import ColorPalette from './ColorPalette';

import { themeColorPalette } from '../styles/theme-color';

const SlideMenu = ({ isOpen, slideMenuHandler }) => {
  const paletteName = useSelector((state) => state.themeChange.paletteName);

  return (
    <SlideMenuWrapper isOpen={isOpen}>
      <SlideMenuHeader>
        <SlideMenuTitle>설정</SlideMenuTitle>
        <StyledBtn onClick={slideMenuHandler}>닫기</StyledBtn>
      </SlideMenuHeader>
      <SlideMenuDesc>{'도형의 색을 변경할 수 있습니다.'}</SlideMenuDesc>
      {themeColorPalette.map((item, index) => (
        <ColorPalette
          key={index}
          name={item.name}
          colorPalette={item}
          paletteName={item.paletteName}
          isSelected={paletteName === item.name}
        />
      ))}
    </SlideMenuWrapper>
  );
};

export default React.memo(SlideMenu);

// *animation setting
const fadeSlideIn = keyframes`
  from {
    transform: translateX(100vw);
    opacity: 0;
    pointer-events: none;
  }
  to {
    transform: translateX(0);
    opacity: 1;
    pointer-events: none;
  }
`;

const fadeSlideOut = keyframes`
  from {
      transform: translateX(0);
      opacity: 1;
  }
  to {
      transform: translateX(100vw);
      opacity: 0;
  }
`;
// animation setting*

const SlideMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  animation: ${({ isOpen }) => (isOpen ? fadeSlideIn : fadeSlideOut)} 0.4s
    ease-in-out;
  transition: visibility 0.4s ease-in-out;

  width: 95vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.commonColors.light_gray};
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.5);
  padding: 40px 38px;

  /* scrollbar */
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  ${({ theme }) => theme.device.desktop} {
    width: 50vw;
    padding: 48px 68px;
  }
`;

const SlideMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SlideMenuTitle = styled.p`
  font-size: 48px;
  font-weight: 700;
`;

const SlideMenuDesc = styled.p`
  font-size: 22px;
  margin-top: 8px;
`;
