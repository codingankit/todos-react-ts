import Header from "../components/Header/Header";
import AddToDo from "../components/AddToDo/AddToDo";
import ToDoList from "../components/ToDoList/ToDoList";
import NoToDo from "../components/NoToDo/NoToDo";

const ToDo = () => {
  return (
    <div className="container">
      <Header />
      <AddToDo />
      <NoToDo />
      <ToDoList />
    </div>
  );
};

export default ToDo;
