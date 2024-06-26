import { useRef } from "react";

/**
 * Todo item을 등록하는 컴포넌트
 */
export default function AddTodo({ setTodo }) {
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

  /**
   * 등록 버튼을 클릭했을 때의 핸들러.
   * setTodo를 이용해서 Todo 아이템을 등록해야 한다.
   */
  const onClickHanlder = () => {
    setTodo((prevTodos) => [
      ...prevTodos,
      {
        id: prevTodos.length,
        isDone: false,
        task: taskRef.current.value,
        dueDate: dueDateRef.current.value,
      },
    ]);
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
