import { useAppSelector } from "../../App/store";
import styles from "./NoToDo.module.css";

const NoToDo = () => {
  const toDos = useAppSelector((state) => state.toDos);
  return (
    toDos.length === 0 && (
      <section className={styles.noToDos}>
        <h2>No Todos Yet!</h2>
      </section>
    )
  );
};

export default NoToDo;
