import React from "react";
import $ from "jquery";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Daily_style from "../Daily/Daily.module.css";
import Item_img_1 from "../Daily/item_1_1.gif"; //Girl Crush Look item img_1
import Item_img_2 from "../Daily/item_1_2.gif"; //Girl Crush Look item img_1
import Item_img_3 from "../Daily/item_1_3.gif"; //Girl Crush Look item img_1
import Item_img_4 from "../Daily/item_1_4.gif"; //Girl Crush Look item img_1
import Item_img_5 from "../Daily/item_1_5.gif"; //Girl Crush Look item img_1
import Item_img_6 from "../Daily/item_1_6.gif"; //Girl Crush Look item img_1
import Item_img_7 from "../Daily/item_1_1.gif"; //Girl Crush Look item img_1
import Item_img_8 from "../Daily/item_1_2.gif"; //Girl Crush Look item img_1
import Item_img_9 from "../Daily/item_1_3.gif"; //Girl Crush Look item img_1
import Item_img_10 from "../Daily/item_1_4.gif"; //Girl Crush Look item img_1
import Item_img_11 from "../Daily/item_1_5.gif"; //Girl Crush Look item img_1
import Item_img_12 from "../Daily/item_1_6.gif"; //Girl Crush Look item img_1

let Daily_Look_1_title_1 = "[DAILY MADE]";
let Daily_Look_1_title_2 = "씨리얼셔츠";
let Daily_Look_1_price = "63,000원";

//
let Daily_Look_2_title_1 = "[DAILY MADE]";
let Daily_Look_2_title_2 = "캘리알파카니트";
let Daily_Look_2_price = "88,000원";
//
let Daily_Look_3_title_1 = "[DAILY MADE]";
let Daily_Look_3_title_2 = "코코샤가디건";
let Daily_Look_3_price = "108,000원";
//
let Daily_Look_4_title_1 = "[DAILY MADE]";
let Daily_Look_4_title_2 = "질샌더뉴슬랙스; 시즌버전";
let Daily_Look_4_price = "89,000원";
//
let Daily_Look_5_title_1 = "[DAILY MADE]";
let Daily_Look_5_title_2 = "에르텐션스커트; 롱버전";
let Daily_Look_5_price = "49,000원";
//
let Daily_Look_6_title_1 = "[DAILY MADE]";
let Daily_Look_6_title_2 = "매니쉬셔츠";
let Daily_Look_6_price = "69,000원";
//
let Daily_Look_7_title_1 = "[DAILY MADE]";
let Daily_Look_7_title_2 = "씨리얼셔츠";
let Daily_Look_7_price = "63,000원";
//
let Daily_Look_8_title_1 = "[DAILY MADE]";
let Daily_Look_8_title_2 = "캘리알파카니트";
let Daily_Look_8_price = "88,000원";
//
let Daily_Look_9_title_1 = "[DAILY MADE]";
let Daily_Look_9_title_2 = "코코샤가디건";
let Daily_Look_9_price = "108,000원";
//
let Daily_Look_10_title_1 = "[DAILY MADE]";
let Daily_Look_10_title_2 = "질샌더뉴슬랙스; 시즌버전";
let Daily_Look_10_price = "89,000원";
//
let Daily_Look_11_title_1 = "[DAILY MADE]";
let Daily_Look_11_title_2 = "에르텐션스커트; 롱버전";
let Daily_Look_11_price = "49,000원";
//
let Daily_Look_12_title_1 = "[DAILY MADE]";
let Daily_Look_12_title_2 = "매니쉬셔츠";
let Daily_Look_12_price = "69,000원";
const Daily = () => {
  return (
    <>
      <Container id="Item_Container">
        <Row id="Daily_row">
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Daily_col"
            className={Daily_style.Daily_col_1}
          >
            <a href="/Daily/1">
              <img src={Item_img_1} className={Daily_style.Daily_img}></img>
            </a>
            <div className={Daily_style.Daily_title}>
              {Daily_Look_1_title_1}
              <br />
              {Daily_Look_1_title_2}
            </div>
            <div className={Daily_style.Daily_Price}>{Daily_Look_1_price}</div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Daily_col"
            className={Daily_style.Daily_col_2}
          >
            <a href="/Daily/2">
              {" "}
              <img src={Item_img_2} className={Daily_style.Daily_img}></img>
            </a>{" "}
            <div className={Daily_style.Daily_title}>
              {Daily_Look_2_title_1}
              <br />
              {Daily_Look_2_title_2}
            </div>
            <div className={Daily_style.Daily_Price}>{Daily_Look_2_price}</div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Daily_col"
            className={Daily_style.Daily_col_3}
          >
            <a href="/Daily/3">
              <img src={Item_img_3} className={Daily_style.Daily_img}></img>
            </a>
            <div className={Daily_style.Daily_title}>
              {Daily_Look_3_title_1}
              <br />
              {Daily_Look_3_title_2}
            </div>
            <div className={Daily_style.Daily_Price}>{Daily_Look_3_price}</div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Daily_col"
            className={Daily_style.Daily_col_4}
          >
            <a href="/Daily/4">
              <img src={Item_img_4} className={Daily_style.Daily_img}></img>
            </a>
            <div className={Daily_style.Daily_title}>
              {Daily_Look_4_title_1}
              <br />
              {Daily_Look_4_title_2}
            </div>
            <div className={Daily_style.Daily_Price}>{Daily_Look_4_price}</div>
          </Col>
        </Row>
        <Row id="Daily_row">
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Daily_col"
            className={Daily_style.Daily_col_5}
          >
            <a href="/Daily/5">
              <img src={Item_img_5} className={Daily_style.Daily_img}></img>
            </a>
            <div className={Daily_style.Daily_title}>
              {Daily_Look_5_title_1}
              <br />
              {Daily_Look_5_title_2}
            </div>
            <div className={Daily_style.Daily_Price}>{Daily_Look_5_price}</div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Daily_col"
            className={Daily_style.Daily_col_6}
          >
            <a href="/Daily/6">
              <img src={Item_img_6} className={Daily_style.Daily_img}></img>
            </a>
            <div className={Daily_style.Daily_title}>
              {Daily_Look_6_title_1}
              <br />
              {Daily_Look_6_title_2}
            </div>
            <div className={Daily_style.Daily_Price}>{Daily_Look_6_price}</div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Daily_col"
            className={Daily_style.Daily_col_7}
          >
            <a href="/Daily/7">
              <img src={Item_img_7} className={Daily_style.Daily_img}></img>
            </a>
            <div className={Daily_style.Daily_title}>
              {Daily_Look_7_title_1}
              <br />
              {Daily_Look_7_title_2}
            </div>
            <div className={Daily_style.Daily_Price}>{Daily_Look_7_price}</div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Daily_col"
            className={Daily_style.Daily_col_8}
          >
            <a href="/Daily/8">
              <img src={Item_img_8} className={Daily_style.Daily_img}></img>
            </a>
            <div className={Daily_style.Daily_title}>
              {Daily_Look_8_title_1}
              <br />
              {Daily_Look_8_title_2}
            </div>
            <div className={Daily_style.Daily_Price}>{Daily_Look_8_price}</div>
          </Col>
        </Row>
        <Row id="Daily_row">
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Daily_col"
            className={Daily_style.Daily_col_9}
          >
            <a href="/Daily/9">
              <img src={Item_img_9} className={Daily_style.Daily_img}></img>
            </a>
            <div className={Daily_style.Daily_title}>
              {Daily_Look_9_title_1}
              <br />
              {Daily_Look_9_title_2}
            </div>
            <div className={Daily_style.Daily_Price}>{Daily_Look_9_price}</div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Daily_col"
            className={Daily_style.Daily_col_10}
          >
            <a href="/Daily/10">
              <img src={Item_img_10} className={Daily_style.Daily_img}></img>
            </a>
            <div className={Daily_style.Daily_title}>
              {Daily_Look_10_title_1}
              <br />
              {Daily_Look_10_title_2}
            </div>
            <div className={Daily_style.Daily_Price}>{Daily_Look_10_price}</div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Daily_col"
            className={Daily_style.Daily_col_11}
          >
            <a href="/Daily/11">
              <img src={Item_img_11} className={Daily_style.Daily_img}></img>
            </a>
            <div className={Daily_style.Daily_title}>
              {Daily_Look_11_title_1}
              <br />
              {Daily_Look_11_title_2}
            </div>
            <div className={Daily_style.Daily_Price}>{Daily_Look_11_price}</div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Daily_col"
            className={Daily_style.Daily_col_12}
          >
            <a href="/Daily/12">
              <img src={Item_img_12} className={Daily_style.Daily_img}></img>
            </a>
            <div className={Daily_style.Daily_title}>
              {Daily_Look_12_title_1}
              <br />
              {Daily_Look_12_title_2}
            </div>
            <div className={Daily_style.Daily_Price}>{Daily_Look_12_price}</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Daily;
