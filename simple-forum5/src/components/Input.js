import { useState } from "react";

export function Input({ setTextArray }) {
  // 이름을 관리할 state, 기본값: undefined
  const [name, setName] = useState();
  const onKeyUpNameHandler = (event) => {
    const nameValue = event.currentTarget.value;
    setName(nameValue);
  };

  // 나이를 관리할 state, 기본값: undefined
  const [age, setAge] = useState();
  const onKeyUpAgeHandler = (event) => {
    const ageValue = event.currentTarget.value;
    setAge(ageValue);
  };

  const onClickHandler = () => {
    setTextArray((prevState) => [...prevState, { name: name, age: age }]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름을 입력하세요."
        onKeyUp={onKeyUpNameHandler}
      />
      <input
        type="text"
        placeholder="나이를 입력하세요."
        onKeyUp={onKeyUpAgeHandler}
      />
      <button onClick={onClickHandler}>저장</button>
    </div>
  );
}
