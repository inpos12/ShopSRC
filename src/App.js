import React from "react";
import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 네비게이션
import Navbar from "../src/Components/Navbar/Navbar";
// 카카오톡
import Kakao from "../src/Components/Kakao/Kakao";
// 푸터
import Footer from "../src/Components/Footer/Footer";
// 메인
import Home from "../src/Components/Screens/Home";
// 신발페이지
import Shoes from "../src/Components/Screens/Shoes";
import Shoes_item_1 from "../src/Components/Item/Shoes/ProductPage/Item_1_page/Item_1_page";
import Shoes_item_2 from "../src/Components/Item/Shoes/ProductPage/Item_2_page/Item_2_page";
import Shoes_item_3 from "../src/Components/Item/Shoes/ProductPage/Item_3_page/Item_3_page";
import Shoes_item_4 from "../src/Components/Item/Shoes/ProductPage/Item_4_page/Item_4_page";
import Shoes_item_5 from "../src/Components/Item/Shoes/ProductPage/Item_5_page/Item_5_page";
import Shoes_item_6 from "../src/Components/Item/Shoes/ProductPage/Item_6_page/Item_6_page";
import Shoes_item_7 from "../src/Components/Item/Shoes/ProductPage/Item_7_page/Item_7_page";
import Shoes_item_8 from "../src/Components/Item/Shoes/ProductPage/Item_8_page/Item_8_page";
import Shoes_item_9 from "../src/Components/Item/Shoes/ProductPage/Item_9_page/Item_9_page";
import Shoes_item_10 from "../src/Components/Item/Shoes/ProductPage/Item_10_page/Item_10_page";
import Shoes_item_11 from "../src/Components/Item/Shoes/ProductPage/Item_11_page/Item_11_page";
import Shoes_item_12 from "../src/Components/Item/Shoes/ProductPage/Item_12_page/Item_12_page";
// 걸크러쉬룩 페이지
import GirlCrush from "../src/Components/Screens/GirlCrush";
import GirlCrush_item_1 from "./Components/Item/GirlCrush/ProductPage/Item_1_page/Item_1_page";
import GirlCrush_item_2 from "./Components/Item/GirlCrush/ProductPage/Item_2_page/Item_2_page";
import GirlCrush_item_3 from "./Components/Item/GirlCrush/ProductPage/Item_3_page/Item_3_page";
import GirlCrush_item_4 from "./Components/Item/GirlCrush/ProductPage/Item_4_page/Item_4_page";
import GirlCrush_item_5 from "./Components/Item/GirlCrush/ProductPage/Item_5_page/Item_5_page";
import GirlCrush_item_6 from "./Components/Item/GirlCrush/ProductPage/Item_6_page/Item_6_page";
import GirlCrush_item_7 from "./Components/Item/GirlCrush/ProductPage/Item_7_page/Item_7_page";
import GirlCrush_item_8 from "./Components/Item/GirlCrush/ProductPage/Item_8_page/Item_8_page";
import GirlCrush_item_9 from "./Components/Item/GirlCrush/ProductPage/Item_9_page/Item_9_page";
import GirlCrush_item_10 from "./Components/Item/GirlCrush/ProductPage/Item_10_page/Item_10_page";
import GirlCrush_item_11 from "./Components/Item/GirlCrush/ProductPage/Item_11_page/Item_11_page";
import GirlCrush_item_12 from "./Components/Item/GirlCrush/ProductPage/Item_12_page/Item_12_page";
// 데일리룩
import Daily from "../src/Components/Screens/Daily";
import Daily_item_1 from "../src/Components/Item/Daily/ProductPage/Item_1_page/Item_1_page";
import Daily_item_2 from "../src/Components/Item/Daily/ProductPage/Item_2_page/Item_2_page";
import Daily_item_3 from "../src/Components/Item/Daily/ProductPage/Item_3_page/Item_3_page";
import Daily_item_4 from "../src/Components/Item/Daily/ProductPage/Item_4_page/Item_4_page";
import Daily_item_5 from "../src/Components/Item/Daily/ProductPage/Item_5_page/Item_5_page";
import Daily_item_6 from "../src/Components/Item/Daily/ProductPage/Item_6_page/Item_6_page";
import Daily_item_7 from "../src/Components/Item/Daily/ProductPage/Item_7_page/Item_7_page";
import Daily_item_8 from "../src/Components/Item/Daily/ProductPage/Item_8_page/Item_8_page";
import Daily_item_9 from "../src/Components/Item/Daily/ProductPage/Item_9_page/Item_9_page";
import Daily_item_10 from "../src/Components/Item/Daily/ProductPage/Item_10_page/Item_10_page";
import Daily_item_11 from "../src/Components/Item/Daily/ProductPage/Item_11_page/Item_11_page";
import Daily_item_12 from "../src/Components/Item/Daily/ProductPage/Item_12_page/Item_12_page";
// 로그인
import Login from "../src/Components/Screens/Login";
// 회원가입
import SignUp from "../src/Components/Screens/SignUp";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Kakao />
      <Routes>
        /* 메인페이지 */
        <Route path="/" element={<Home />} />
        /* 신발 */
        <Route path="/Shoes" element={<Shoes />} />
        <Route path="/Shoes/1" element={<Shoes_item_1 />} />
        <Route path="/Shoes/2" element={<Shoes_item_2 />} />
        <Route path="/Shoes/3" element={<Shoes_item_3 />} />
        <Route path="/Shoes/4" element={<Shoes_item_4 />} />
        <Route path="/Shoes/5" element={<Shoes_item_5 />} />
        <Route path="/Shoes/6" element={<Shoes_item_6 />} />
        <Route path="/Shoes/7" element={<Shoes_item_7 />} />
        <Route path="/Shoes/8" element={<Shoes_item_8 />} />
        <Route path="/Shoes/9" element={<Shoes_item_9 />} />
        <Route path="/Shoes/10" element={<Shoes_item_10 />} />
        <Route path="/Shoes/11" element={<Shoes_item_11 />} />
        <Route path="/Shoes/12" element={<Shoes_item_12 />} />
        /* 걸크러쉬룩 */
        <Route path="/GirlCrush" element={<GirlCrush />} />
        <Route path="/GirlCrush/1" element={<GirlCrush_item_1 />} />
        <Route path="/GirlCrush/2" element={<GirlCrush_item_2 />} />
        <Route path="/GirlCrush/3" element={<GirlCrush_item_3 />} />
        <Route path="/GirlCrush/4" element={<GirlCrush_item_4 />} />
        <Route path="/GirlCrush/5" element={<GirlCrush_item_5 />} />
        <Route path="/GirlCrush/6" element={<GirlCrush_item_6 />} />
        <Route path="/GirlCrush/7" element={<GirlCrush_item_7 />} />
        <Route path="/GirlCrush/8" element={<GirlCrush_item_8 />} />
        <Route path="/GirlCrush/9" element={<GirlCrush_item_9 />} />
        <Route path="/GirlCrush/10" element={<GirlCrush_item_10 />} />
        <Route path="/GirlCrush/11" element={<GirlCrush_item_11 />} />
        <Route path="/GirlCrush/12" element={<GirlCrush_item_12 />} />
        /* 데일리 룩 */
        <Route path="/Daily" element={<Daily />} />
        <Route path="/Daily/1" element={<Daily_item_1 />} />
        <Route path="/Daily/2" element={<Daily_item_2 />} />
        <Route path="/Daily/3" element={<Daily_item_3 />} />
        <Route path="/Daily/4" element={<Daily_item_4 />} />
        <Route path="/Daily/5" element={<Daily_item_5 />} />
        <Route path="/Daily/6" element={<Daily_item_6 />} />
        <Route path="/Daily/7" element={<Daily_item_7 />} />
        <Route path="/Daily/8" element={<Daily_item_8 />} />
        <Route path="/Daily/9" element={<Daily_item_9 />} />
        <Route path="/Daily/10" element={<Daily_item_10 />} />
        <Route path="/Daily/11" element={<Daily_item_11 />} />
        <Route path="/Daily/12" element={<Daily_item_12 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      /* 푸터 */
      <Footer />
    </BrowserRouter>
  );
};
export default App;
