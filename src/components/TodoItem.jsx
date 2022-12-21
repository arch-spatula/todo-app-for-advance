import { useDispatch } from "react-redux";
import { deleteTodoThunk, moveTodoThunk } from "../redux/modules/todoSlice";
import { shiftTodo, shiftTodoText } from "../shared/kindObj";

/**
 * @param {*} param0
 * @returns
 */
const TodoItem = ({ id, kind, content, title }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTodoThunk(id));
  };
  const handleMove = (kind) => {
    const updateItem = {
      id,
      content,
      title,
      kind: shiftTodo[kind],
    };
    dispatch(moveTodoThunk(updateItem));
  };
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <div>
        <button onClick={() => handleDelete(id)}>삭제</button>
        <button onClick={() => handleMove(kind)}>{shiftTodoText[kind]}</button>
        {/* 완료 : 취소 */}
      </div>
    </div>
  );
};

export default TodoItem;
