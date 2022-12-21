import { useDispatch } from "react-redux";
import { deleteTodoThunk } from "../redux/modules/todoSlice";

/**
 * @param {*} param0
 * @returns
 */
const TodoItem = ({ id, kind, content, title }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTodoThunk(id));
  };
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <div>
        <button onClick={() => handleDelete(id)}>삭제</button>
        {/* 완료 : 취소 */}
      </div>
    </div>
  );
};

export default TodoItem;
