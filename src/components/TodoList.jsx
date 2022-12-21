import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoThunk } from "../redux/modules/todoSlice";
import { TodoItem } from "./index";

const TodoList = ({ heading, kind }) => {
  const dispatch = useDispatch();
  const { todos, isLoading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodoThunk());
  }, []);

  // 통신 실패
  if (error) {
    return <div>{error.message}</div>;
  }

  const renderedTodoItems = todos
    .filter((item) => item.kind === kind)
    .map((item) => <TodoItem key={item.id} {...item} />);

  return (
    <div>
      <h2>{heading}</h2>
      <ul>{renderedTodoItems}</ul>
    </div>
  );
};

export default TodoList;
