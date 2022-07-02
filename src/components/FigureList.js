import styled from 'styled-components';

import FigureListItem from './FigureListItem';

const UlWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

const FigureList = ({ todoList }) => {
  return (
    <UlWrapper>
      {todoList.map((todoItem) => {
        return <FigureListItem key={todoItem.id} figure={todoItem.figure} />;
      })}
    </UlWrapper>
  );
};

export default FigureList;
