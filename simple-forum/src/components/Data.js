export function Data({textArray}) {
    // textArray의 값 형태가 ["abc", "def", "abc", "a"] 이라면
    // 값을 Tag로 변환해야함 
    // const divTags = [ <div key="">abc</div>, <div key="">def</div>, <div key="">abc</div>, <div key="">a</div> ]  map() 함수 사용!
    // key="" : 고유한 번호어야 함
    return (
        <div>
            {
                textArray.map((text, index) => (<div key={index}>{text}</div>))
            }
        </div>
    );
}