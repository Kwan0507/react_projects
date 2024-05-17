import { useContext } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import TodoContext from "../contexts/TodoContexts";

export default function TodoApp() {
  const { todo } = useContext(TodoContext);
  // context = {todo, add, done} 중
  // todo 만 필요하기에 구조분해해서 {todo}만 가져온다.

  const styles = {
    backgroundColor: "#FFF",
    margin: "0 auto",
    marginTop: "1rem",
    width: "50rem",
  };

  return (
    <div style={styles}>
      <h4 style={{ padding: "1rem" }}>
        완료: {todo.filter((item) => item.isDone).length} / 미완료:{" "}
        {todo.filter((item) => !item.isDone).length}
      </h4>
      <ul>
        {todo.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
      <AddTodo />
    </div>
  );
}
