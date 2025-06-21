import React, { memo, useCallback, useState } from 'react';
import { BiSortAlt2 } from 'react-icons/bi';
import StyledShapes from 'components/shapes/SingleShapes';
import {
  DropdownButton,
  DropdownContainer,
  DropdownMenu,
  MenuDivider,
  MenuItem,
  MenuLabel,
  MenuSection,
} from 'pages/taskListPage/SortDropdown.styles';
import { PriorityFilter, SortType } from 'pages/taskListPage';

interface SortDropdownProps {
  sortType: SortType;
  priorityFilter: PriorityFilter;
  onSortChange: (type: SortType) => void;
  onPriorityFilterChange: (priority: PriorityFilter) => void;
}

const SortDropdown = ({
  sortType,
  priorityFilter,
  onSortChange,
  onPriorityFilterChange,
}: SortDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortChangeHandler = useCallback(
    (newSortType: SortType) => {
      onSortChange(newSortType);
      setIsOpen(false);
    },
    [onSortChange]
  );

  const dropdownToggleHandler = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <DropdownContainer>
      <DropdownButton
        onClick={dropdownToggleHandler}
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
            중요도순 정렬
          </MenuItem>
          <MenuItem
            $isActive={sortType === 'created'}
            onClick={() => sortChangeHandler('created')}
          >
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

export default memo(SortDropdown);
