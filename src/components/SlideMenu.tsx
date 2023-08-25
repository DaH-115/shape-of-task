import React from 'react';
import { useAppSelector } from 'store/hooks';
import styled, { keyframes } from 'styled-components';
import StyledBtn from 'styles/StyledBtn';
import { themeColorPalette } from 'styles/theme-color';

import ColorPalette from 'components/ColorPalette';

interface SlideMenuProps {
  isOpen: boolean;
  slideMenuHandler: () => void;
}

const SlideMenu = ({ isOpen, slideMenuHandler }: SlideMenuProps) => {
  const paletteName = useAppSelector((state) => state.themeChange.paletteName);

  return (
    <>
      <Backdrop isOpen={isOpen} onClick={slideMenuHandler} />
      <SlideMenuWrapper isOpen={isOpen}>
        <SlideMenuHeader>
          <SlideMenuTitle>{'설정'}</SlideMenuTitle>
          <StyledBtn onClick={slideMenuHandler}>{'닫기'}</StyledBtn>
        </SlideMenuHeader>
        <SlideMenuDesc>{'원하는 색을 골라 보세요'}</SlideMenuDesc>
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
    </>
  );
};

export default React.memo(SlideMenu);

// Animation Setting
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
      transform: translateX(100%);
      opacity: 0;
  }
`;

const SlideMenuWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;

  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  animation: ${({ isOpen }) => (isOpen ? fadeSlideIn : fadeSlideOut)} 0.4s
    ease-in-out;
  transition: visibility 0.4s ease-in-out;

  width: 100%;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;

  /* scrollbar */
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  ${({ theme }) => theme.device.tablet} {
    width: 40%;
    padding: 1rem 2rem;
  }
`;

const SlideMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SlideMenuTitle = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;

const SlideMenuDesc = styled.p`
  color: ${({ theme }) => theme.commonColors.black};
  margin-top: 0.5rem;
`;

const Backdrop = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;
