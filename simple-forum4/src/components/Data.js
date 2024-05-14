export function Data({ textArray }) {
  return (
    <div>
      {textArray.map((text, index) => (
        <div key={index}>
          <div>{text}</div>
        </div>
      ))}
    </div>
  );
}
