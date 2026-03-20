import { memo } from "react";
import styled, { keyframes } from "styled-components";
import SingleShapes from "@/components/shapes/SingleShapes";
import { ShapeName, SHAPE_OPTIONS } from "@/types/task";

interface ShapeSelectMenuProps {
  id: string;
  isToggle: boolean;
  onSelect: (shapeName: ShapeName) => void;
  "aria-label"?: string;
}

const ShapeSelectMenu = ({
  id,
  isToggle,
  onSelect,
  "aria-label": ariaLabel = "중요도 선택",
}: ShapeSelectMenuProps) => {
  const handleItemClick = (event: React.MouseEvent<HTMLUListElement>) => {
    // 클릭한 요소의 데이터-shape 속성 값을 가져옴
    const shapeItem = (event.target as HTMLElement).closest(
      "[data-shape]",
    ) as HTMLElement;
    const shapeName = shapeItem?.getAttribute("data-shape") as ShapeName;

    // 중요도 옵션 배열에 클릭한 요소의 데이터-shape 속성 값이 있는지 확인
    if (shapeName && SHAPE_OPTIONS.some((opt) => opt.shape === shapeName)) {
      event.stopPropagation(); // 부모 SelectShapesWrapper의 toggleHandler 실행 방지
      onSelect(shapeName);
    }
  };

  return (
    <SelectMenuWrapper
      id={id}
      $isToggle={isToggle}
      role="listbox"
      aria-label={ariaLabel}
    >
      <SelectMenuList onClick={handleItemClick}>
        {SHAPE_OPTIONS.map(({ shape, desc }) => (
          <SelectMenuItem key={shape} data-shape={shape}>
            <SingleShapes shapeName={shape} />
            <ShapeDesc>{desc}</ShapeDesc>
          </SelectMenuItem>
        ))}
      </SelectMenuList>
    </SelectMenuWrapper>
  );
};

export default memo(ShapeSelectMenu);

// 애니메이션 설정
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

  visibility: ${({ $isToggle }) => ($isToggle ? "visible" : "hidden")};
  animation: ${({ $isToggle }) => ($isToggle ? fadeSlideIn : fadeSlideOut)} 0.3s
    ease-in-out;
  transition: visibility 0.3s ease-in-out;
`;

const SelectMenuList = styled.ul`
  border: 0.1rem solid ${({ theme }) => theme.commonColors.gray_border};
  border-radius: 1rem;
  overflow: hidden;

  background-color: #fff;
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
`;

const SelectMenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

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
