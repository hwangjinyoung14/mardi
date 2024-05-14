// React Router v6
import { Routes, Route } from "react-router-dom";

/*Pages*/
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Login from "./Pages/Login";
import MainVisual from "./Pages/MainVisual";
import ProductAll from "./Pages/ProductAll";
import ProductDetail from "./Pages/ProductDetail";
import PrivateRoute from "./Route/PrivateRoute";

/*Component*/
import ProductCard from "./Components/ProductCard";

import './Style/reset.css';
import './Style/App.css';
import { useState } from "react";
import { useEffect } from "react";

/*
마르디메크르디 쇼핑몰 페이지 만들기
1. 헤더, 푸터, 비주얼영역, 전체 상품페이지가 있다.
2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
4. 상품 디테일 누르면 로그인이 안되었을 경우 로그인 페이지가 먼저 나온다.
5. 로그인이 되었을 경우 상품상세페이지를 볼 수 있다. 
6. 로그아웃을 하면 상품상세페이지를 볼 수 없다. (로그인 해야지만 보인다.)
7. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다. 
8. 상품을 검색할 수 있다
*/
function App() {
  const [authentication, setAuthentication] = useState(false);//초기값이 true면 로그인, false면 로그인 안됨
  useEffect(()=>{
    console.log('aaa', authentication);
  },[authentication]);
  return (
    <div>
      <Header
      setAuthentication={setAuthentication}
      authentication={authentication}/>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/Login" element={<Login setAuthentication={setAuthentication}/>} />
        {/* path="/login" :이동경로  상단의 주소에 마지막 부분에 /login을 추가하면 페이지가 login페이지로 바뀐다.*/}
        <Route path="/product/:id" element={<PrivateRoute authentication={authentication}/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
