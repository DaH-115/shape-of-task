import styled from 'styled-components';
import FigureListItem from './FigureListItem';

const UlWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FigureList = ({ todoList }) => {
  return (
    <UlWrapper>
      {todoList.map((todoItem) => {
        return (
          <FigureListItem
            key={todoItem.id}
            figure={todoItem.figure}
            done={todoItem.done}
          />
        );
      })}
    </UlWrapper>
  );
};

export default FigureList;
