import styled, { css, keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa';

import { ReactComponent as Logo } from '../assets/Logo.svg';
import { ReactComponent as Circle } from '../assets/Circle.svg';
import { ReactComponent as Triangle } from '../assets/Triangle.svg';
import { ReactComponent as Square } from '../assets/Square.svg';

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from{
    opacity: 1;
  }
  to {
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
      visibility: ${props.toggle ? 'visible' : 'hidden'};
      animation: ${props.toggle ? fadeIn : fadeOut} 0.4s ease-in-out;
      transition: visibility 0.4s ease-in-out;
    `;
  }}

  position: absolute;
  bottom: -180px;
  left: 0;
`;

const Ul = styled.ul`
  width: 180px;
  background-color: #fff;
  box-shadow: 0px 5px 40px rgba(177, 177, 177, 0.25);
`;

const Li = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;
  font-weight: 500;

  &:hover {
    background-color: #ecf0f1;
  }

  .circle {
    width: 40px;
    height: 40px;
    margin-right: 12px;
    margin-left: -40px;
    margin-bottom: 5px;
  }

  .triangle {
    width: 40px;
    height: 40px;
    margin-right: 12px;
    margin-left: -13px;
    margin-bottom: 5px;
  }

  .square {
    width: 40px;
    height: 40px;
    margin-right: 12px;
    margin-bottom: 5px;
  }
`;

const LogoStyle = styled(Logo)`
  margin-right: 10px;
`;

const SelectBox = ({ modalToggle, getFigure }) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (!modalToggle) {
      setToggle(false);
    }
  }, [modalToggle]);

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
        <FaAngleDown />
      </SelectToggleWrapper>
      <SelectBoxWrapper toggle={toggle}>
        <Ul onClick={getFigureHandler}>
          <Li className='circle'>
            <Circle fill='#EE5A24' className='circle' />
            중요해요
          </Li>
          <Li className='triangle'>
            <Triangle fill='#FFC312' className='triangle' />
            기억해 두세요
          </Li>
          <Li className='square'>
            <Square fill='#5758BB' className='square' />
            언제든지 하세요
          </Li>
        </Ul>
      </SelectBoxWrapper>
    </>
  );
};

export default SelectBox;
