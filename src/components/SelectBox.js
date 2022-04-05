import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';

import { FaAngleDown } from 'react-icons/fa';
import { ReactComponent as Logo } from '../assets/Logo.svg';
import { ReactComponent as Circle } from '../assets/Circle.svg';
import { ReactComponent as Triangle } from '../assets/Triangle.svg';
import { ReactComponent as Square } from '../assets/Square.svg';

const SelectToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectBoxWrapper = styled.div`
  position: absolute;
  bottom: -200px;
  left: 0;
`;

const Ul = styled.ul`
  ${(props) => {
    return css`
      display: ${props.toggle ? 'block' : 'none'};
    `;
  }}

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
    width: 35px;
    height: 35px;
    margin-right: 12px;
    margin-left: -40px;
  }

  .triangle {
    width: 40px;
    height: 40px;
    margin-right: 12px;
    margin-left: -13px;
  }

  .square {
    width: 35px;
    height: 35px;
    margin-right: 12px;
  }
`;

const LogoStyle = styled(Logo)`
  margin-right: 10px;
`;

const SelectBox = ({ modalToggle }) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (!modalToggle) {
      setToggle(false);
    }
  }, [modalToggle]);

  const onToggleHandler = () => {
    setToggle((preve) => !preve);
  };

  return (
    <>
      <SelectToggle onClick={onToggleHandler}>
        <LogoStyle />
        <FaAngleDown />
      </SelectToggle>
      <SelectBoxWrapper>
        <Ul toggle={toggle}>
          <Li>
            <Circle fill='#EE5A24' className='circle' />
            중요해요
          </Li>
          <Li>
            <Triangle fill='#FFC312' className='triangle' />
            기억해 두세요
          </Li>
          <Li>
            <Square fill='#5758BB' className='square' />
            언제든지 하세요
          </Li>
        </Ul>
      </SelectBoxWrapper>
    </>
  );
};

export default SelectBox;
