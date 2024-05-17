export default function Grid({ cols, bodys }) {
  return (
    <Table>
      <Table.THead>
        {/* map 한 결과는 THead의 children이 된다! */}
        {cols.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </Table.THead>
      <Table.TBody>
        {bodys.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </Table.TBody>
    </Table>
  );
}

function Table({ children }) {
  return <table>{children}</table>;
}

// Table.** = THead; 이름 바꿔도 됨!
Table.THead = THead;
Table.TBody = TBody;

function THead({ children }) {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
}

function TBody({ children }) {
  return <tbody>{children}</tbody>;
}
