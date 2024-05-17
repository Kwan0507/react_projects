import { useContext } from "react";
import TodoContext from "../contexts/TodoContexts";

/**
 * Todo Item을 관리하는 컴포넌트
 *
 * props: todo = { id: "", isDone: false, task: "", dueDate: "" }
 *        onDone = function()...
 */
export default function Todo({ todo }) {
  const { id, isDone, task, dueDate } = todo;

  const styles = {
    borderBottom: "1px solid #ccc",
    padding: "1rem",
    display: "flex",
    color: isDone ? "#ccc" : "#333",
    textDecoration: isDone ? "line-through" : "none",
  };

  const { done: onDone } = useContext(TodoContext);

  return (
    <li style={styles}>
      <div style={{ marginRight: "1rem" }}>
        <input
          type="checkbox"
          key={id}
          defaultValue={id}
          checked={isDone ? "checked" : ""}
          onChange={onDone}
        />
      </div>
      <div style={{ flexGrow: 1 }}>{task}</div>
      <div>{dueDate}</div>
    </li>
  );
}
