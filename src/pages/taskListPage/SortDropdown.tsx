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
        title='Sort and Filter Options'
        aria-expanded={isOpen}
        aria-haspopup='true'
      >
        <BiSortAlt2 aria-hidden />
      </DropdownButton>

      <DropdownMenu $isOpen={isOpen}>
        <MenuSection>
          <MenuLabel>Sort</MenuLabel>
          <MenuItem
            $isActive={sortType === 'priority'}
            onClick={() => sortChangeHandler('priority')}
          >
            By Priority
          </MenuItem>
          <MenuItem
            $isActive={sortType === 'created'}
            onClick={() => sortChangeHandler('created')}
          >
            By Created Date
          </MenuItem>
        </MenuSection>

        <MenuDivider />

        <MenuSection>
          <MenuLabel>Priority Filter</MenuLabel>
          <MenuItem
            $isActive={priorityFilter === 1}
            onClick={() => {
              onPriorityFilterChange(priorityFilter === 1 ? 0 : 1);
              setIsOpen(false);
            }}
          >
            <StyledShapes shapeName='triangle' />
            Important
          </MenuItem>
          <MenuItem
            $isActive={priorityFilter === 2}
            onClick={() => {
              onPriorityFilterChange(priorityFilter === 2 ? 0 : 2);
              setIsOpen(false);
            }}
          >
            <StyledShapes shapeName='square' />
            Remember
          </MenuItem>
          <MenuItem
            $isActive={priorityFilter === 3}
            onClick={() => {
              onPriorityFilterChange(priorityFilter === 3 ? 0 : 3);
              setIsOpen(false);
            }}
          >
            <StyledShapes shapeName='circle' />
            Anytime
          </MenuItem>
        </MenuSection>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default memo(SortDropdown);
