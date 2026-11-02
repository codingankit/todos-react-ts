import { useAppSelector, useAppDispatch } from "../../App/store";
import styles from "./ToDoList.module.css";
import { FaDeleteLeft } from "react-icons/fa6";
import { deleteToDo } from "../../App/toDoSlice";

const { todoList, deleteList } = styles;

const ToDoList = () => {
  const toDos = useAppSelector((state) => state.toDos);
  const dispatch = useAppDispatch();
  return (
    <ul className={todoList}>
      {toDos.map((toDo, index) => (
        <li key={index}>
          {toDo}
          <button
            className={deleteList}
            onClick={() => dispatch(deleteToDo(index))}
            aria-label={`Delete ${toDo}`}
          >
            <FaDeleteLeft />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
