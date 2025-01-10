import React, { useState } from 'react';
import { BiSortAlt2 } from 'react-icons/bi';
import { FaSortAmountDown } from 'react-icons/fa';
import StyledShapes from 'components/figures/SingleShapes';
import {
  DropdownButton,
  DropdownContainer,
  DropdownMenu,
  MenuDivider,
  MenuItem,
  MenuLabel,
  MenuSection,
} from 'pages/TaskListPage/SortDropdown.styles';

export type SortType = 'priority' | 'created';
export type PriorityFilter = 0 | 1 | 2 | 3;

interface SortDropdownProps {
  sortType: SortType;
  priorityFilter: PriorityFilter;
  onSortChange: (type: SortType) => void;
  onPriorityFilterChange: (priority: PriorityFilter) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({
  sortType,
  priorityFilter,
  onSortChange,
  onPriorityFilterChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortChangeHandler = (newSortType: SortType) => {
    onSortChange(newSortType);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton
        onClick={() => setIsOpen((prev) => !prev)}
        title='정렬 및 필터 옵션'
        aria-expanded={isOpen}
        aria-haspopup='true'
      >
        <BiSortAlt2 aria-hidden />
      </DropdownButton>

      <DropdownMenu $isOpen={isOpen}>
        <MenuSection>
          <MenuLabel>정렬</MenuLabel>
          <MenuItem
            $isActive={sortType === 'priority'}
            onClick={() => sortChangeHandler('priority')}
          >
            <FaSortAmountDown />
            중요도순 정렬
          </MenuItem>
          <MenuItem
            $isActive={sortType === 'created'}
            onClick={() => sortChangeHandler('created')}
          >
            <FaSortAmountDown />
            등록순 정렬
          </MenuItem>
        </MenuSection>

        <MenuDivider />

        <MenuSection>
          <MenuLabel>중요도 필터</MenuLabel>
          <MenuItem
            $isActive={priorityFilter === 1}
            onClick={() => {
              onPriorityFilterChange(priorityFilter === 1 ? 0 : 1);
              setIsOpen(false);
            }}
          >
            <StyledShapes shapeName='triangle' />
            중요한 일정만
          </MenuItem>
          <MenuItem
            $isActive={priorityFilter === 2}
            onClick={() => {
              onPriorityFilterChange(priorityFilter === 2 ? 0 : 2);
              setIsOpen(false);
            }}
          >
            <StyledShapes shapeName='square' />
            기억할 일정만
          </MenuItem>
          <MenuItem
            $isActive={priorityFilter === 3}
            onClick={() => {
              onPriorityFilterChange(priorityFilter === 3 ? 0 : 3);
              setIsOpen(false);
            }}
          >
            <StyledShapes shapeName='circle' />
            일반 일정만
          </MenuItem>
        </MenuSection>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default SortDropdown;
