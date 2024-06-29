import React, { useState } from "react";

const Input = () => {
    const [txtValue, setTextValue] = useState("");

    const onChange = (e) => {
        setTextValue(e.target.value); // 'value'로 수정
    };

    return (
        <div>
            <input type="text" value={txtValue} onChange={onChange} /> {/* 'value'로 수정 */}
            <br />
            <p>{txtValue}</p>
        </div>
    );
};

export default Input;
