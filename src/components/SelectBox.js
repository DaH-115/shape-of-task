import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { ReactComponent as Logo } from '../assets/Logo.svg';
import StyledCircle from '../assets/Circle';
import StyledTriangle from '../assets/Triangle';
import StyledSquare from '../assets/Square';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const fadeSlideIn = keyframes`
  from {
    transform: translateY(10%);
    opacity: 0;
    pointer-events: none;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
    pointer-events: none;
  }
`;

const fadeSlideOut = keyframes`
  from {
      transform: translateY(0%);
      opacity: 1;
  }
  to {
      transform: translateY(10%);
      opacity: 0;
  }
`;

const SelectToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 180px;
  background-color: #fff;
  box-shadow: 0px 5px 40px rgba(177, 177, 177, 0.25);
`;

const Li = styled.li`
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 12px;
  font-weight: 500;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.colors.light_grey};
  }
`;

const LogoStyle = styled(Logo)`
  margin-right: 6px;
`;

const FigureStyleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-right: 6px;
`;

const SelectBox = ({ getFigure }) => {
  const [toggle, setToggle] = useState(false);

  const onToggleHandler = () => {
    setToggle((preve) => !preve);
  };

  const getFigureHandler = (event) => {
    getFigure(event.target.className);
    setToggle(false);
  };

  return (
    <>
      <SelectToggleWrapper onClick={onToggleHandler}>
        <LogoStyle />
        {toggle ? <FaAngleDown /> : <FaAngleUp />}
      </SelectToggleWrapper>
      <SelectBoxWrapper toggle={toggle}>
        <Ul onClick={getFigureHandler}>
          <Li className='circle'>
            <FigureStyleBox>
              <StyledCircle size='small' />
            </FigureStyleBox>
            중요해요
          </Li>
          <Li className='triangle'>
            <FigureStyleBox>
              <StyledTriangle size='small' />
            </FigureStyleBox>
            기억해 두세요
          </Li>
          <Li className='triangle'>
            <FigureStyleBox>
              <StyledSquare size='small' className='square' />
            </FigureStyleBox>
            언제든지 하세요
          </Li>
        </Ul>
      </SelectBoxWrapper>
    </>
  );
};

export default SelectBox;
