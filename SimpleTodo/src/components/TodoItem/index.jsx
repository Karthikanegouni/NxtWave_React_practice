import "./index.css";

const TodoItem = (props) => {
  const { list, onDelete } = props;
  const { title, id } = list;

  const DeleteItem = () => {
    onDelete(id);
  };

  return (
    <li className="todo-item-cnt">
      <p>{title}</p>
      <button type="button" onClick={DeleteItem}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
