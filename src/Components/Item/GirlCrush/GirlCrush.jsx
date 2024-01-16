import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item_img_1 from "../GirlCrush/item_1_1.gif"; //Girl Crush Look item img_1
import Item_img_2 from "../GirlCrush/item_1_2.gif"; //Girl Crush Look item img_1
import Item_img_3 from "../GirlCrush/item_1_3.gif"; //Girl Crush Look item img_1
import Item_img_4 from "../GirlCrush/item_1_4.gif"; //Girl Crush Look item img_1
import Item_img_5 from "../GirlCrush/item_1_5.gif"; //Girl Crush Look item img_1
import Item_img_6 from "../GirlCrush/item_1_6.gif"; //Girl Crush Look item img_1
import Item_img_7 from "../GirlCrush/item_1_7.gif"; //Girl Crush Look item img_1
import Item_img_8 from "../GirlCrush/item_1_8.gif"; //Girl Crush Look item img_1
import Item_img_9 from "../GirlCrush/item_1_9.gif"; //Girl Crush Look item img_1
import Item_img_10 from "../GirlCrush/item_1_10.gif"; //Girl Crush Look item img_1
import Item_img_11 from "../GirlCrush/item_1_11.gif"; //Girl Crush Look item img_1
import Item_img_12 from "../GirlCrush/item_1_12.gif"; //Girl Crush Look item img_1
import GirlCrush_style from "../GirlCrush/GirlCrush.module.css";

let Girl_Crush_Look_1_title_1 = "디엔즈 로우";
let Girl_Crush_Look_1_title_2 = "와이드 팬츠";
let Girl_Crush_Look_1_price = "45,220원";

//
let Girl_Crush_Look_2_title_1 = "세핀즈 셔링";
let Girl_Crush_Look_2_title_2 = "크롭 티셔츠";
let Girl_Crush_Look_2_price = "21,000원";
//
let Girl_Crush_Look_3_title_1 = "프런트 하이핏";
let Girl_Crush_Look_3_title_2 = "부츠컷팬츠";
let Girl_Crush_Look_3_price = "37,050원";
//
let Girl_Crush_Look_4_title_1 = "보넬 나일론";
let Girl_Crush_Look_4_title_2 = "루즈핏 점퍼";
let Girl_Crush_Look_4_price = "107,000원";
//
let Girl_Crush_Look_5_title_1 = "뷰리팅 레터링";
let Girl_Crush_Look_5_title_2 = "티셔츠";
let Girl_Crush_Look_5_price = "24,000원";
//
let Girl_Crush_Look_6_title_1 = "스텐비 데님";
let Girl_Crush_Look_6_title_2 = "크롭 자켓";
let Girl_Crush_Look_6_price = "66,300원";
//
let Girl_Crush_Look_7_title_1 = "디엔즈 로우";
let Girl_Crush_Look_7_title_2 = "와이드 팬츠";
let Girl_Crush_Look_7_price = "45,220원";
//
let Girl_Crush_Look_8_title_1 = "세핀즈 셔링";
let Girl_Crush_Look_8_title_2 = "크롭 티셔츠";
let Girl_Crush_Look_8_price = "21,000원";
//
let Girl_Crush_Look_9_title_1 = "프런트 하이핏";
let Girl_Crush_Look_9_title_2 = "부츠컷팬츠";
let Girl_Crush_Look_9_price = "37,050원";
//
let Girl_Crush_Look_10_title_1 = "보넬 나일론";
let Girl_Crush_Look_10_title_2 = "루즈핏 점퍼";
let Girl_Crush_Look_10_price = "107,000원";
//
let Girl_Crush_Look_11_title_1 = "뷰리팅 레터링";
let Girl_Crush_Look_11_title_2 = "티셔츠";
let Girl_Crush_Look_11_price = "24,000원";
//
let Girl_Crush_Look_12_title_1 = "스텐비 데님";
let Girl_Crush_Look_12_title_2 = "크롭 자켓";
let Girl_Crush_Look_12_price = "66,300원";
const GirlCrush = () => {
  return (
    <>
      <Container id="Item_Container">
        <Row id="GirlCrush_row">
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="GirlCrush_col"
            className={GirlCrush_style.GirlCrush_col_1}
          >
            <a href="/GirlCrush/1">
              <img
                src={Item_img_1}
                className={GirlCrush_style.GirlCrush_img}
              ></img>
            </a>
            <div className={GirlCrush_style.GirlCrush_title}>
              {Girl_Crush_Look_1_title_1}
              <br />
              {Girl_Crush_Look_1_title_2}
            </div>
            <div className={GirlCrush_style.GirlCrush_Price}>
              {Girl_Crush_Look_1_price}
            </div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="GirlCrush_col"
            className={GirlCrush_style.GirlCrush_col_2}
          >
            <a href="/GirlCrush/2">
              <img
                src={Item_img_2}
                className={GirlCrush_style.GirlCrush_img}
              ></img>
            </a>
            <div className={GirlCrush_style.GirlCrush_title}>
              {Girl_Crush_Look_2_title_1}
              <br />
              {Girl_Crush_Look_2_title_2}
            </div>
            <div className={GirlCrush_style.GirlCrush_Price}>
              {Girl_Crush_Look_2_price}
            </div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="GirlCrush_col"
            className={GirlCrush_style.GirlCrush_col_3}
          >
            <a href="/GirlCrush/3">
              <img
                src={Item_img_3}
                className={GirlCrush_style.GirlCrush_img}
              ></img>
            </a>
            <div className={GirlCrush_style.GirlCrush_title}>
              {Girl_Crush_Look_3_title_1}
              <br />
              {Girl_Crush_Look_3_title_2}
            </div>
            <div className={GirlCrush_style.GirlCrush_Price}>
              {Girl_Crush_Look_3_price}
            </div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="GirlCrush_col"
            className={GirlCrush_style.GirlCrush_col_4}
          >
            <a href="/GirlCrush/4">
              <img
                src={Item_img_4}
                className={GirlCrush_style.GirlCrush_img}
              ></img>
            </a>
            <div className={GirlCrush_style.GirlCrush_title}>
              {Girl_Crush_Look_4_title_1}
              <br />
              {Girl_Crush_Look_4_title_2}
            </div>
            <div className={GirlCrush_style.GirlCrush_Price}>
              {Girl_Crush_Look_4_price}
            </div>
          </Col>
        </Row>
        <Row id="GirlCrush_row">
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="GirlCrush_col"
            className={GirlCrush_style.GirlCrush_col_5}
          >
            <a href="/GirlCrush/5">
              <img
                src={Item_img_5}
                className={GirlCrush_style.GirlCrush_img}
              ></img>
            </a>
            <div className={GirlCrush_style.GirlCrush_title}>
              {Girl_Crush_Look_5_title_1}
              <br />
              {Girl_Crush_Look_5_title_2}
            </div>
            <div className={GirlCrush_style.GirlCrush_Price}>
              {Girl_Crush_Look_5_price}
            </div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="GirlCrush_col"
            className={GirlCrush_style.GirlCrush_col_6}
          >
            <a href="/GirlCrush/6">
              {" "}
              <img
                src={Item_img_6}
                className={GirlCrush_style.GirlCrush_img}
              ></img>
            </a>
            <div className={GirlCrush_style.GirlCrush_title}>
              {Girl_Crush_Look_6_title_1}
              <br />
              {Girl_Crush_Look_6_title_2}
            </div>
            <div className={GirlCrush_style.GirlCrush_Price}>
              {Girl_Crush_Look_6_price}
            </div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="GirlCrush_col"
            className={GirlCrush_style.GirlCrush_col_7}
          >
            <a href="/GirlCrush/7">
              <img
                src={Item_img_7}
                className={GirlCrush_style.GirlCrush_img}
              ></img>
            </a>
            <div className={GirlCrush_style.GirlCrush_title}>
              {Girl_Crush_Look_7_title_1}
              <br />
              {Girl_Crush_Look_7_title_2}
            </div>
            <div className={GirlCrush_style.GirlCrush_Price}>
              {Girl_Crush_Look_7_price}
            </div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="GirlCrush_col"
            className={GirlCrush_style.GirlCrush_col_8}
          >
            <a href="/GirlCrush/8">
              <img
                src={Item_img_8}
                className={GirlCrush_style.GirlCrush_img}
              ></img>
            </a>
            <div className={GirlCrush_style.GirlCrush_title}>
              {Girl_Crush_Look_8_title_1}
              <br />
              {Girl_Crush_Look_8_title_2}
            </div>
            <div className={GirlCrush_style.GirlCrush_Price}>
              {Girl_Crush_Look_8_price}
            </div>
          </Col>
        </Row>
        <Row id="GirlCrush_row">
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="GirlCrush_col"
            className={GirlCrush_style.GirlCrush_col_9}
          >
            <a href="/GirlCrush/9">
              <img
                src={Item_img_9}
                className={GirlCrush_style.GirlCrush_img}
              ></img>
            </a>
            <div className={GirlCrush_style.GirlCrush_title}>
              {Girl_Crush_Look_9_title_1}
              <br />
              {Girl_Crush_Look_9_title_2}
            </div>
            <div className={GirlCrush_style.GirlCrush_Price}>
              {Girl_Crush_Look_9_price}
            </div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="GirlCrush_col"
            className={GirlCrush_style.GirlCrush_col_10}
          >
            <a href="/GirlCrush/10">
              <img
                src={Item_img_10}
                className={GirlCrush_style.GirlCrush_img}
              ></img>
            </a>
            <div className={GirlCrush_style.GirlCrush_title}>
              {Girl_Crush_Look_10_title_1}
              <br />
              {Girl_Crush_Look_10_title_2}
            </div>
            <div className={GirlCrush_style.GirlCrush_Price}>
              {Girl_Crush_Look_10_price}
            </div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="GirlCrush_col"
            className={GirlCrush_style.GirlCrush_col_11}
          >
            <a href="/GirlCrush/11">
              <img
                src={Item_img_11}
                className={GirlCrush_style.GirlCrush_img}
              ></img>
            </a>
            <div className={GirlCrush_style.GirlCrush_title}>
              {Girl_Crush_Look_11_title_1}
              <br />
              {Girl_Crush_Look_11_title_2}
            </div>
            <div className={GirlCrush_style.GirlCrush_Price}>
              {Girl_Crush_Look_11_price}
            </div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="GirlCrush_col"
            className={GirlCrush_style.GirlCrush_col_12}
          >
            <a href="/GirlCrush/12">
              <img
                src={Item_img_12}
                className={GirlCrush_style.GirlCrush_img}
              ></img>
            </a>
            <div className={GirlCrush_style.GirlCrush_title}>
              {Girl_Crush_Look_12_title_1}
              <br />
              {Girl_Crush_Look_12_title_2}
            </div>
            <div className={GirlCrush_style.GirlCrush_Price}>
              {Girl_Crush_Look_12_price}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default GirlCrush;
