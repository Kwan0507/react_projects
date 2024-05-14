export function Data({textArray}) {
    // textArray의 값 형태 배열이라면 값을 Tag로 변환해야함
    return(
        <div>
            {
                textArray.map((text, index) => (<div key={index}>{text}</div>))
            }
        </div>
    );
}