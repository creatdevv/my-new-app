import React, { useState } from "react";

const Input2 = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: ""
    });
    const { name, email, tel } = inputs;

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        // inputs[id] = value;           // object 또는 배열로 여러개 되어 있는 경우, id 여러이름 있는데 키로 직접적으로 바꿀 경우, 리액트에서는 상태변경 안된다.(블럭에 있는 데이터를 직접 바꾸면 리액트에선 인지 못함. 따라서 깊은 복사 해줘야 함!)
        setInputs({
            ...inputs,                 // 새로 깊은 복사해서 만든 새로운 오브젝트 만들어준다!
            [id]: value,
        });
    };

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={name} onChange={onChange} />
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value={email} onChange={onChange} />
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" id="tel" value={tel} onChange={onChange} />
            </div>
            <p>이름: {name}</p>
            <p>이메일: {email}</p>
            <p>전화번호: {tel}</p>
        </div>
    );
};

export default Input2;
