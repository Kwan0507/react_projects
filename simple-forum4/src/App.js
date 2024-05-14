import { useState } from "react";
import { Input } from "./components/Input";
import { Data } from "./components/Data";

function App() {
  // 입력한 text를 textArray로 관리할 state, 기본값: undefined => []로 초기화
  const [textArray, setTextArray] = useState([]);

  return (
    <div>
      <Input setTextArray={setTextArray} />
      <Data textArray={textArray} />
    </div>
  );
}

export default App;
