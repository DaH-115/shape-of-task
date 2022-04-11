import styled from 'styled-components';
import TodoList from '../components/TodoList';

const MainBox = styled.div`
  width: 80%;
  height: 100%;
  padding-top: 20px;
`;

const Main = ({ todoList, toggleTodo }) => {
  return (
    <>
      <MainBox>
        <TodoList todoList={todoList} toggleTodo={toggleTodo} />
      </MainBox>
    </>
  );
};

export default Main;
