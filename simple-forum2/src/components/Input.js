import { useState } from "react";

export function Input({setTextArray}) {

    // text를 관리하는 state, 기본값: undefined
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