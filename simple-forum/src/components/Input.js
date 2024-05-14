import { useState } from "react";

export function Input( {setTextArray} ) {
    // 텍스트를 관리하는 state
    // 기본값: undefined
    const [text, setText] = useState();

    const onKeyUpHandler = (event) => {
        const textValue = event.currentTarget.value;
        setText(textValue);
    };

    const onClickHandler = () => {
        // textArray에 클릭할때 마다 새로운 배열을 추가하기
        // textArray = []
        // textArray = ["abc"]
        // textArray = ["abc", "def"]
        // setTextArray([...textArray, text]);
        setTextArray( (prevState) => [...prevState, text] );
    };

    return (
        <div>
            <input type="text" placeholder="추가할 텍스트를 입력하세요." onKeyUp={onKeyUpHandler} />
            <button onClick={onClickHandler}>저장</button>
        </div>
    );
}