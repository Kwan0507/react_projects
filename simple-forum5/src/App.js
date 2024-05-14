import { useState } from "react";
import { Input } from "./components/Input";
import { Table } from "./components/Table";

function App() {
  // 입력한 이름과 나이를 관리하는 배열 state, 기본값은 undefined => [] 로 초기화
  const [textArray, setTextArray] = useState([]);

  return (
    <div>
      <Input setTextArray={setTextArray} />
      <Table textArray={textArray} />
    </div>
  );
}

export default App;
