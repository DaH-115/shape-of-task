import React from 'react';
import styled, { keyframes } from 'styled-components';
import { themeColorPalette } from 'styles/theme-colors';
import StyledBtn from 'styles/StyledBtn';
import { fadeIn, fadeOut } from 'styles/animation-setting';
import { useAppSelector } from 'store/hooks';

import ColorPalette from 'components/ColorPalette';

interface SlideMenuProps {
  isopen: string;
  slideMenuHandler: () => void;
}

const SlideMenu = ({ isopen, slideMenuHandler }: SlideMenuProps) => {
  const paletteName = useAppSelector((state) => state.themeChange.paletteName);

  return (
    <>
      <Backdrop $isopen={isopen} onClick={slideMenuHandler} />
      <SlideMenuWrapper $isopen={isopen}>
        <SlideMenuHeader>
          <SlideMenuTitle>{'설정'}</SlideMenuTitle>
          <SlideMenuBtn onClick={slideMenuHandler}>{'닫기'}</SlideMenuBtn>
        </SlideMenuHeader>
        <SlideMenuDesc>{'원하는 색을 적용해 보세요'}</SlideMenuDesc>
        {themeColorPalette.map((item, index) => (
          <ColorPalette
            key={index}
            name={item.name}
            isselected={paletteName === item.name ? 'true' : 'false'}
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
    transform: translateX(100%);
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

const SlideMenuWrapper = styled.div<{ $isopen: string }>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;

  visibility: ${({ $isopen }) => ($isopen === 'true' ? 'visible' : 'hidden')};
  animation: ${({ $isopen }) =>
      $isopen === 'true' ? fadeSlideIn : fadeSlideOut}
    0.4s ease-in-out;
  transition: visibility 0.4s ease-in-out;

  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.commonColors.light_gray};
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
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
  font-size: 1.2rem;
  color: ${({ theme }) => theme.commonColors.black};
  margin-top: 0.5rem;

  ${({ theme }) => theme.device.tablet} {
    font-size: 1rem;
  }
`;

const SlideMenuBtn = styled(StyledBtn)`
  width: auto;
  font-size: 1rem;

  &:hover,
  &:active {
    transition: none;
  }

  ${({ theme }) => theme.device.tablet} {
    font-size: 0.8rem;
  }
`;

const Backdrop = styled.div<{ $isopen: string }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  width: 100%;
  height: 100%;
  background-color: rgba(177, 177, 177, 0.5);

  visibility: ${({ $isopen }) => ($isopen === 'true' ? 'visible' : 'hidden')};
  animation: ${({ $isopen }) => ($isopen === 'true' ? fadeIn : fadeOut)} 0.4s
    ease-in-out;
  transition: visibility 0.4s ease-in-out;
`;
