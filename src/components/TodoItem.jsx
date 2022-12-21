/**
 *
 * @param {*} param0
 * @returns
 */
const TodoItem = ({ id, kind, content, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default TodoItem;
