import { useState } from "react";
import { Input } from "./components/Input";
import { Data } from "./components/Data";

function App() {

  // 지금까지 입력한 text를 관리하는 배열 state, 기본값: undefined => [] 배열로 초기화 해야함!
  const [textArray, setTextArray] = useState([]);

  return(
    <div>
      <Input setTextArray={setTextArray}/>
      <Data textArray={textArray}/>
    </div>
  );
}

export default App;
