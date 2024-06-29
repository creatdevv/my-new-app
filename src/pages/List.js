import React from "react";

const User = ({ user }) => {
    return (
        <tr>
            <td>{user.name}</td> {/* userData -> user */}
            <td>{user.email}</td> {/* userData -> user */}
        </tr>
    );
}

const UserList = () => {
    const users = [
        { email: "ryu@gmail.com", name: "유재석" },
        { email: "kim@gmail.com", name: "김종국" },
        { email: "ha@gmail.com", name: "하하" },
        { email: "song@gmail.com", name: "송지효" },
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User key={user.email} user={user} />)} {/* userData -> user */}
            </tbody>
        </table>
    );
}

export default UserList;
