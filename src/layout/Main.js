import styled from 'styled-components';
import TodoList from '../components/TodoList';

const MainBox = styled.div`
  width: 80%;
  height: 100%;
  padding-top: 20px;
`;

const Main = () => {
  return (
    <>
      <MainBox>
        <TodoList />
      </MainBox>
    </>
  );
};

export default Main;
