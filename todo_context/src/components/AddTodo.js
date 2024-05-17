import { useContext, useRef } from "react";
import TodoContext from "../contexts/TodoContexts";

/**
 * Todo item을 등록하는 컴포넌트
 */
export default function AddTodo() {
  const styles = {
    display: "flex",
    padding: "0.5rem",
    marginTop: "1rem",
  };

  const labelStyles = { flexShrink: 1, margin: "0.5rem 1rem" };
  const inputStyles = { flexGrow: 1 };
  const buttonStyles = { flexShrink: 1, margin: "0 0 0 1rem" };

  const taskRef = useRef();
  const dueDateRef = useRef();

  const { add } = useContext(TodoContext);
  const onClickHanlder = () => {
    add(taskRef.current.value, dueDateRef.current.value);
  };

  return (
    <div style={styles}>
      <label htmlFor="task" style={labelStyles}>
        Task
      </label>
      <input
        type="text"
        id="task"
        placeholder="Input Task"
        style={inputStyles}
        ref={taskRef}
      />

      <label htmlFor="due-date" style={labelStyles}>
        Due Date
      </label>
      <input type="date" id="due-date" style={inputStyles} ref={dueDateRef} />

      <button style={buttonStyles} onClick={onClickHanlder}>
        등록
      </button>
    </div>
  );
}
