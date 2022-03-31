import styled from 'styled-components';
import Wrapper from '../layout/Wrapper';

import { FaAngleDown } from 'react-icons/fa';
import { ReactComponent as Logo } from '../assets/Logo.svg';
import { ReactComponent as Circle } from '../assets/Circle.svg';
import { ReactComponent as Triangle } from '../assets/Triangle.svg';
import { ReactComponent as Square } from '../assets/Square.svg';

const SelectBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const Ul = styled.ul`
  /* visibility: hidden; */
  /* display: none; */
  position: relative;
  top: 100px;
  right: 70px;
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
    background-color: #a6c6c4;
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

const SelectBox = () => {
  return (
    <>
      <Wrapper>
        <LogoStyle />
        <FaAngleDown />
      </Wrapper>
      <SelectBoxWrapper>
        <Ul>
          <Li>
            <Circle className='circle' />
            중요해요
          </Li>
          <Li>
            <Triangle className='triangle' />
            기억해 두세요
          </Li>
          <Li>
            <Square className='square' />
            언제든지 하세요
          </Li>
        </Ul>
      </SelectBoxWrapper>
    </>
  );
};

export default SelectBox;
