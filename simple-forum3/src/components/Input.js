import { useState } from "react";

export function Input({setTextArray}) {

    // 입력한 text를 관리하는 state
    const [text, setText] = useState();

    const onKeyUpHandler = (event) => {
        const textValue = event.currentTarget.value;
        setText(textValue);
    };

    const onClickHandler = () => {
        setTextArray((prevState) => [...prevState, text]);
    };

    return(
        <div>
            <input type="text" placeholder="텍스트를 입력하세요." onKeyUp={onKeyUpHandler}/>
            <button onClick={onClickHandler}>저장</button>
        </div>
    );
}