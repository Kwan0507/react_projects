export function Data({textArray}) {

    return(
        <div>
            {
                textArray.map((text, index) => (<div key={index}>{text}</div>))
            }
        </div>
    );
}