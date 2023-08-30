import { useAppSelector } from 'store/hooks';

const useArrCheck = () => {
  const todoList = useAppSelector((state) => state.todoList.todoList);
  const todoArr = todoList.map((item: { done: boolean }) => item.done);
  const arrCheck = todoArr.find((item: boolean) => item === true);

  return arrCheck;
};

export default useArrCheck;
