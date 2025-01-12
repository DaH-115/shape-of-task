import { memo, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import StyledShapes from 'components/shapes/SingleShapes';
import { ShapeName } from 'store/taskListSlice';
import SingleShapes from 'components/shapes/SingleShapes';

interface ShapeSelectMenuProps {
  id: string;
  isToggle: boolean;
  getShape: (shapeName: ShapeName) => void;
  onToggle: () => void;
}

const ShapeSelectMenu = ({
  id,
  isToggle,
  getShape,
  onToggle,
}: ShapeSelectMenuProps) => {
  const getShapeHandler = useCallback(
    (event: React.MouseEvent<HTMLUListElement>) => {
      const shapeItem = event.target as HTMLElement;
      const shapeName = shapeItem.getAttribute('data-shape');

      if (shapeName && isShapeName(shapeName)) {
        getShape(shapeName);
        onToggle();
      }
    },
    [getShape, onToggle]
  );

  // ShapeName 타입 가드 함수
  const isShapeName = (value: string): value is ShapeName => {
    return ['triangle', 'square', 'circle'].includes(value);
  };

  return (
    <SelectMenuWrapper id={id} $isToggle={isToggle} role='listbox'>
      <SelectMenuList onClick={getShapeHandler}>
        <SelectMenuItem>
          <SingleShapes shapeName='triangle' />
          <ShapeDesc data-shape='triangle'>{'중요해요'}</ShapeDesc>
        </SelectMenuItem>
        <SelectMenuItem>
          <StyledShapes shapeName='square' />
          <ShapeDesc data-shape='square'>{'기억해 두세요'}</ShapeDesc>
        </SelectMenuItem>
        <SelectMenuItem>
          <StyledShapes shapeName='circle' />
          <ShapeDesc data-shape='circle'>{'언제든지 해요'}</ShapeDesc>
        </SelectMenuItem>
      </SelectMenuList>
    </SelectMenuWrapper>
  );
};

export default memo(ShapeSelectMenu);

// Animation Setting
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

const SelectMenuWrapper = styled.div<{ $isToggle: boolean }>`
  position: absolute;
  bottom: 4rem;
  left: 0.5rem;

  visibility: ${({ $isToggle }) => ($isToggle ? 'visible' : 'hidden')};
  animation: ${({ $isToggle }) => ($isToggle ? fadeSlideIn : fadeSlideOut)} 0.3s
    ease-in-out;
  transition: visibility 0.3s ease-in-out;
`;

const SelectMenuList = styled.ul`
  border: 0.1rem solid ${({ theme }) => theme.commonColors.light_gray};
  border-radius: 1rem;
  overflow: hidden;

  background-color: #fff;
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
`;

const SelectMenuItem = styled.li`
  display: flex;
  align-items: center;

  padding: 0.5rem 1rem;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.commonColors.light_gray};
  }
`;

const ShapeDesc = styled.p`
  width: 100%;
  font-size: 0.9rem;
  margin-left: 0.4rem;
`;
