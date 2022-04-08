import styled from 'styled-components';
import TodoList from '../components/TodoList';

const MainBox = styled.div`
  width: 80%;
  height: 100%;
  padding-top: 20px;
`;

const Main = ({ todoList }) => {
  return (
    <>
      <MainBox>
        <TodoList todoList={todoList} />
      </MainBox>
    </>
  );
};

export default Main;
