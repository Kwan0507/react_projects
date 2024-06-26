/**
 * Todo Item을 관리하는 컴포넌트
 *
 * props: todo = { id: "", isDone: false, task: "", dueDate: "" }
 *        onDone = function()...
 */
export default function Todo({ todo, onDone }) {
  const { id, isDone, task, dueDate } = todo;

  const styles = {
    borderBottom: "1px solid #ccc",
    padding: "1rem",
    display: "flex",
    color: isDone ? "#ccc" : "#333",
    textDecoration: isDone ? "line-through" : "none",
  };

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
