import React, { useRef } from "react";
import { useAppDispatch } from "../../App/store";
import styles from "./AddToDo.module.css";
import { addToDo } from "../../App/toDoSlice";

const AddToDo = () => {
  const dispatch = useAppDispatch();
  const toDoRef = useRef<HTMLInputElement>(null);
  const handleAdd = () => {
    const input = toDoRef.current;
    if (!input) return;
    const toDoValue = input.value.trim();
    if (toDoValue !== "") {
      dispatch(addToDo(toDoValue));
      input.value = "";
      input.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className={styles.inputArea}>
      <input
        ref={toDoRef}
        type="text"
        placeholder="Add a new todo..."
        maxLength={100}
        onKeyDown={handleKeyDown} //
      />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddToDo;
