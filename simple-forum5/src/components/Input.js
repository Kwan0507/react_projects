import { useRef } from "react";

export function Input({ setTextArray }) {
  console.log("Run Input Component");

  const nameRef = useRef();
  const ageRef = useRef();

  const onClickHandler = () => {
    console.log("nameRef ==================== ");
    console.log("nameRef: ", nameRef);
    console.log("nameRef.current: ", nameRef.current);
    console.log("nameRef.current.value: ", nameRef.current.value);

    console.log("ageRef ===================== ");
    console.log("ageRef: ", ageRef);
    console.log("ageRef.current : ", ageRef.current);
    console.log("ageRef.current.value : ", ageRef.current.value);

    const name = nameRef.current.value;
    const age = ageRef.current.value;

    if (name === "") {
      alert("이름을 입력하세요.");
      nameRef.current.focus();
      return;
    }
    if (age === "") {
      alert("나이를 입력하세요.");
      ageRef.current.focus();
      return;
    }

    setTextArray((prevState) => [...prevState, { name: name, age: age }]);

    nameRef.current.value = "";
    ageRef.current.value = "";

    nameRef.current.focus();

    // // () => {} 이 함수를 100ms(0.1초) 이후에 실행해라.
    // setTimeout(() => {
    //   nameRef.current.value = "";
    //   ageRef.current.value = "";
    // }, 100);
  };

  return (
    <div>
      {/* nameRef.current = <input type="text" ... /> */}
      <input type="text" placeholder="이름을 입력하세요." ref={nameRef} />
      {/* ageRef.current = <input type="number" ... /> */}
      <input type="number" placeholder="나이를 입력하세요." ref={ageRef} />
      <button onClick={onClickHandler}>저장</button>
    </div>
  );
}
