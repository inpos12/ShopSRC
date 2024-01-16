import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Item_1 from "../Section_3_2/item_1_1.gif"; //Daily_Made_item_img_1
import Item_2 from "../Section_3_2/item_1_2.gif"; //Daily_Made_item_img_2
import Item_3 from "../Section_3_2/item_1_3.gif"; //Daily_Made_item_img_3
import Item_4 from "../Section_3_2/item_1_4.gif"; //Daily_Made_item_img_4
import Item_5 from "../Section_3_2/item_1_5.gif"; //Daily_Made_item_img_5
import Item_6 from "../Section_3_2/item_1_6.gif"; //Daily_Made_item_img_6
import Section_3 from "../Section_3_2/Section_3_2.module.css";
// https://dailylook.kr/product/list.html?cate_no=62

let Daily_Made = "DAILY MADE";
let Daily_Made_item_1_title = "씨리얼셔츠";
let Daily_Made_item_1_price = "63,000원";
//
let Daily_Made_item_2_title = "캘리알파카니트";
let Daily_Made_item_2_price = "88,000원";
//
let Daily_Made_item_3_title = "코코샤가디건";
let Daily_Made_item_3_price = "108,000원";
//
let Daily_Made_item_4_title = "질샌더뉴슬랙스; 시즌버전";
let Daily_Made_item_4_price = "89,000원";
//
let Daily_Made_item_5_title = "에르텐션스커트; 롱버전";
let Daily_Made_item_5_price = "49,000원";
//
let Daily_Made_item_6_title = "매니쉬셔츠";
let Daily_Made_item_6_price = "69,000원";
const Section3_2 = () => {
  return (
    <div id="Section3_2_container">
      <Container>
        <Row id="Section3_2_title_row">
          <div className={Section_3.Section3_2_hr}></div>
          <h1 className={Section_3.Section3_2_perfume}>DAILY LOOK</h1>
          <div className={Section_3.Section3_2_hr}></div>
        </Row>
        <Row id="Section3_2_row">
          <Col
            lg={2}
            md={3}
            sm={3}
            xs={5}
            id="Section3_2_col"
            className={Section_3.Section3_2_col_1}
          >
            <img src={Item_1} className={Section_3.Section3_2_img}></img>
            <div className={Section_3.Section3_2_title}>
              {Daily_Made}
              <br /> {Daily_Made_item_1_title}
            </div>

            <div className={Section_3.Section3_2_Price}>
              {Daily_Made_item_1_price}
            </div>
            <div className={Section_3.Section3_2_hover_1}>
              <a className={Section_3.Section3_2_hover_1_a} href="#">
                <h6>자세히보기</h6>
              </a>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={3}
            xs={5}
            id="Section3_2_col"
            className={Section_3.Section3_2_col_2}
          >
            <img src={Item_2} className={Section_3.Section3_2_img}></img>
            <div className={Section_3.Section3_2_title}>
              {Daily_Made} <br />
              {Daily_Made_item_2_title}
            </div>

            <div className={Section_3.Section3_2_Price}>
              {Daily_Made_item_2_price}
            </div>
            <div className={Section_3.Section3_2_hover_2}>
              <a className={Section_3.Section3_2_hover_2_a} href="#">
                <h6>자세히보기</h6>
              </a>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={3}
            xs={5}
            id="Section3_2_col"
            className={Section_3.Section3_2_col_3}
          >
            <img src={Item_3} className={Section_3.Section3_2_img}></img>
            <div className={Section_3.Section3_2_title}>
              {Daily_Made} <br />
              {Daily_Made_item_3_title}
            </div>

            <div className={Section_3.Section3_2_Price}>
              {Daily_Made_item_3_price}
            </div>
            <div className={Section_3.Section3_2_hover_3}>
              <a className={Section_3.Section3_2_hover_3_a} href="#">
                <h6>자세히보기</h6>
              </a>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={3}
            xs={5}
            id="Section3_2_col"
            className={Section_3.Section3_2_col_4}
          >
            <img src={Item_4} className={Section_3.Section3_2_img}></img>
            <div className={Section_3.Section3_2_title}>
              {Daily_Made} <br />
              {Daily_Made_item_4_title}
            </div>

            <div className={Section_3.Section3_2_Price}>
              {Daily_Made_item_4_price}
            </div>
            <div className={Section_3.Section3_2_hover_4}>
              <a className={Section_3.Section3_2_hover_4_a} href="#">
                <h6>자세히보기</h6>
              </a>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={3}
            xs={5}
            id="Section3_2_col"
            className={Section_3.Section3_2_col_5}
          >
            <img src={Item_5} className={Section_3.Section3_2_img}></img>
            <div className={Section_3.Section3_2_title}>
              {Daily_Made} <br /> {Daily_Made_item_5_title}{" "}
            </div>

            <div className={Section_3.Section3_2_Price}>
              {Daily_Made_item_5_price}
            </div>
            <div className={Section_3.Section3_2_hover_5}>
              <a className={Section_3.Section3_2_hover_5_a} href="#">
                <h6>자세히보기</h6>
              </a>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={3}
            xs={5}
            id="Section3_2_col"
            className={Section_3.Section3_2_col_6}
          >
            <img src={Item_6} className={Section_3.Section3_2_img}></img>
            <div className={Section_3.Section3_2_title}>
              {Daily_Made} <br />
              {Daily_Made_item_6_title}
            </div>

            <div className={Section_3.Section3_2_Price}>
              {Daily_Made_item_6_price}
            </div>
            <div className={Section_3.Section3_2_hover_6}>
              <a className={Section_3.Section3_2_hover_6_a} href="#">
                <h6>자세히보기</h6>
              </a>
            </div>
          </Col>
        </Row>
        <Row id="Section3_2_button">
          <Col className={Section_3.Section3_2_button}>
            <a href="/#/Daily_Look">
              <h3>더보기 +</h3>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Section3_2;
