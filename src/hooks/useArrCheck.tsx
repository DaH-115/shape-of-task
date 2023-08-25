import { useSelector } from 'react-redux';

// ✔️ 완료된 투두가 존재하지 않을 때 메세지를 보여줍니다.
const useArrCheck = () => {
  const todoList = useSelector((state) => state.todoList.value);
  const todoArr = todoList.map((item) => item.done);
  const arrCheck = todoArr.find((item) => item === true);

  return arrCheck;
};

export default useArrCheck;
