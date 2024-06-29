// 1. 함수형 컴포넌트 형
// import React from "react";

// function Home() {
//     return <h1>Home 화면입니다.</h1>
// }

// export default Home;


// // 2) 클래스 컴포넌트
// import React, {Component} from "react";

// class Home extends Component {
//     render() {
//         return <h1>Home 화면입니다.</h1>
//     }
// }

// export default Home;

// 3. 화살표 방식으로 바꾸기~~
import React from "react";

const Home = () => {
    return <h1>Home 화면입니다.</h1>
}

export default Home;
