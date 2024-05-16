import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import AlertModal from "./modal/AlertModal.js";
import Input from "./ui/Input.js";

export function RefComponent() {
  // 모달을 관리하는 state
  // const [showModal, setShowModal] = useState(false);
  // 위 state 대신 ref로 만들기
  const alertModalRef = useRef();
  const completeModalRef = useRef();

  // 입력하는 텍스트를 관리하는 state
  const [textArray, setTextArray] = useState([]);
  const textRef = useRef();

  const onClickHanlder = () => {
    const text = textRef.current.get();

    if (text === "") {
      // alert("텍스트를 입력하세요.");
      alertModalRef.current.open();

      textRef.current.select();
      return;
    }

    if (text !== "") {
      completeModalRef.current.open();
      setTextArray((prevState) => [text, ...prevState]);

      textRef.current.set("");
      textRef.current.select();

      return;
    }
  };

  const onCloseModalHandler = () => {
    alertModalRef.current.close();

    textRef.current.select();
  };

  const onCloseCompleteModalHandler = () => {
    completeModalRef.current.close();
    textRef.current.select();
  };

  return (
    <div className="main-container">
      <Input id="text" type="text" title="Text" ref={textRef} />

      <button onClick={onClickHanlder}>Save</button>
      <hr />
      <ul>
        {textArray.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
      {createPortal(
        <AlertModal
          onClose={onCloseCompleteModalHandler}
          ref={completeModalRef}
        >
          <div>
            <h3>{textArray[0]}를 입력했습니다!</h3>
          </div>
        </AlertModal>,
        document.querySelector("#modals")
      )}
      {createPortal(
        <AlertModal onClose={onCloseModalHandler} ref={alertModalRef}>
          <div>
            <h3>텍스트를 입력하세요!</h3>
          </div>
        </AlertModal>,
        document.querySelector("#modals")
      )}
    </div>
  );
}
