import { useState, useEffect, useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import StyledCircle from '../assets/Circle';
import StyledTriangle from '../assets/Triangle';
import StyledSquare from '../assets/Square';
import LogoFigures from './LogoFigures';
import StyledButton from '../styles/StyledButton';

const fadeSlideIn = keyframes`
  from {
    transform: translateY(10%);
    opacity: 0;
    pointer-events: none;
  }
  to {
    transform: translateY(0);
    opacity: 1;
    pointer-events: none;
  }
`;

const fadeSlideOut = keyframes`
  from {
      transform: translateY(0);
      opacity: 1;
  }
  to {
      transform: translateY(10%);
      opacity: 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
  border-top: 2px solid ${({ theme }) => theme.colors.light_gray};
`;

const SelectToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 40%;

  ${({ theme }) => theme.device.desktop} {
    width: 20%;
  }
`;

const SelectBoxWrapper = styled.div`
  ${(props) => {
    return css`
      position: absolute;
      bottom: 80px;
      left: 0;

      visibility: ${props.toggle ? 'visible' : 'hidden'};
      animation: ${props.toggle ? fadeSlideIn : fadeSlideOut} 0.4s ease-in-out;
      transition: visibility 0.4s ease-in-out;
    `;
  }}
`;

const Ul = styled.ul`
  width: 200px;
  background-color: #fff;
  box-shadow: 0px 5px 40px rgba(177, 177, 177, 0.25);
`;

const Li = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px;
  font-size: 18px;
  font-weight: 500;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.colors.light_gray};
  }
`;

const FigureStyleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-right: 6px;
`;

const Button = styled(StyledButton)`
  width: 80px;
`;

const SelectBox = ({ getFigure, isOpen, figurecolor }) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setToggle(false);
    }
  }, [isOpen]);

  const onToggleHandler = useCallback(() => {
    setToggle((preve) => !preve);
  }, []);

  const getFigureHandler = useCallback(
    (event) => {
      getFigure(event.target.className);
      setToggle(false);
    },
    [getFigure]
  );

  return (
    <>
      <ButtonWrapper>
        <SelectToggleWrapper onClick={onToggleHandler}>
          <LogoFigures figurecolor={figurecolor} />
          <div>{toggle ? <FaAngleDown /> : <FaAngleUp />}</div>
        </SelectToggleWrapper>
        <Button>등록</Button>
      </ButtonWrapper>
      <SelectBoxWrapper toggle={toggle}>
        <Ul onClick={getFigureHandler}>
          <Li className='circle'>
            <FigureStyleBox>
              <StyledCircle size='small' figurecolor='circle' />
            </FigureStyleBox>
            중요해요
          </Li>
          <Li className='triangle'>
            <FigureStyleBox>
              <StyledTriangle size='small' figurecolor='triangle' />
            </FigureStyleBox>
            기억해 두세요
          </Li>
          <Li className='square'>
            <FigureStyleBox>
              <StyledSquare size='small' figurecolor='square' />
            </FigureStyleBox>
            언제든지 하세요
          </Li>
        </Ul>
      </SelectBoxWrapper>
    </>
  );
};

export default SelectBox;
