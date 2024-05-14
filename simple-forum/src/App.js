import { useState } from "react";
import { Data } from "./components/Data";
import { Input } from "./components/Input";

function App() {
  
  // 지금까지 입력한 text를 관리하는 배열 state
  // 기본값: undefined => []
  const [textArray, setTextArray] = useState([]);

  return (
    <div>
      <Input setTextArray={setTextArray} />
      <Data textArray={textArray} />
    </div>
  );
}

export default App;