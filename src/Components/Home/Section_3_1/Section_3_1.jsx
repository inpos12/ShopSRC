import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Item_1 from "../Section_3_1/item_1_1.gif"; //Girl Crush Look item img_1
import Item_2 from "../Section_3_1/item_1_2.gif"; //Girl Crush Look item img_2
import Item_3 from "../Section_3_1/item_1_3.gif"; //Girl Crush Look item img_3
import Item_4 from "../Section_3_1/item_1_4.gif"; //Girl Crush Look item img_4
import Item_5 from "../Section_3_1/item_1_5.gif"; //Girl Crush Look item img_5
import Item_6 from "../Section_3_1/item_1_6.gif"; //Girl Crush Look item img_6
import Section_3 from "../Section_3_1/Section_3_1.module.css";
// http://www.hypnotic.co.kr/

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

const Section3_1 = () => {
  return (
    <div id="Section3_1_container">
      <Container>
        <Row id="Section3_1_title_row">
          <div className={Section_3.Section3_1_hr}></div>
          <h1 className={Section_3.Section3_1_perfume}>GIRL CRUSH LOOK</h1>
          <div className={Section_3.Section3_1_hr}></div>
        </Row>
        <Row id="Section3_1_row">
          <Col
            lg={2}
            md={3}
            sm={3}
            xs={5}
            id="Section3_1_col"
            className={Section_3.Section3_1_col_1}
          >
            <img src={Item_1} className={Section_3.Section3_1_img}></img>
            <div className={Section_3.Section3_1_title}>
              {Girl_Crush_Look_1_title_1}
              <br />
              {Girl_Crush_Look_1_title_2}
            </div>
            <div className={Section_3.Section3_1_Price}>
              {Girl_Crush_Look_1_price}
            </div>
            <div className={Section_3.Section3_1_hover_1}>
              <a className={Section_3.Section3_1_hover_1_a} href="#">
                <h6>자세히보기</h6>
              </a>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={3}
            xs={5}
            id="Section3_1_col"
            className={Section_3.Section3_1_col_2}
          >
            <img src={Item_2} className={Section_3.Section3_1_img}></img>
            <div className={Section_3.Section3_1_title}>
              {Girl_Crush_Look_2_title_1} <br />
              {Girl_Crush_Look_2_title_2}
            </div>

            <div className={Section_3.Section3_1_Price}>
              {Girl_Crush_Look_2_price}
            </div>
            <div className={Section_3.Section3_1_hover_2}>
              <a className={Section_3.Section3_1_hover_2_a} href="#">
                <h6>자세히보기</h6>
              </a>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={3}
            xs={5}
            id="Section3_1_col"
            className={Section_3.Section3_1_col_3}
          >
            <img src={Item_3} className={Section_3.Section3_1_img}></img>
            <div className={Section_3.Section3_1_title}>
              {Girl_Crush_Look_3_title_1} <br />
              {Girl_Crush_Look_3_title_2}
            </div>

            <div className={Section_3.Section3_1_Price}>
              {Girl_Crush_Look_3_price}
            </div>
            <div className={Section_3.Section3_1_hover_3}>
              <a className={Section_3.Section3_1_hover_3_a} href="#">
                <h6>자세히보기</h6>
              </a>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={3}
            xs={5}
            id="Section3_1_col"
            className={Section_3.Section3_1_col_4}
          >
            <img src={Item_4} className={Section_3.Section3_1_img}></img>
            <div className={Section_3.Section3_1_title}>
              {Girl_Crush_Look_4_title_1} <br /> {Girl_Crush_Look_4_title_2}
            </div>

            <div className={Section_3.Section3_1_Price}>
              {Girl_Crush_Look_4_price}
            </div>
            <div className={Section_3.Section3_1_hover_4}>
              <a className={Section_3.Section3_1_hover_4_a} href="#">
                <h6>자세히보기</h6>
              </a>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={3}
            xs={5}
            id="Section3_1_col"
            className={Section_3.Section3_1_col_5}
          >
            <img src={Item_5} className={Section_3.Section3_1_img}></img>
            <div className={Section_3.Section3_1_title}>
              {Girl_Crush_Look_5_title_1}
              <br /> {Girl_Crush_Look_5_title_2}
            </div>

            <div className={Section_3.Section3_1_Price}>
              {Girl_Crush_Look_5_price}
            </div>
            <div className={Section_3.Section3_1_hover_5}>
              <a className={Section_3.Section3_1_hover_5_a} href="#">
                <h6>자세히보기</h6>
              </a>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={3}
            xs={5}
            id="Section3_1_col"
            className={Section_3.Section3_1_col_6}
          >
            <img src={Item_6} className={Section_3.Section3_1_img}></img>
            <div className={Section_3.Section3_1_title}>
              {Girl_Crush_Look_6_title_1}
              <br /> {Girl_Crush_Look_6_title_2}
            </div>

            <div className={Section_3.Section3_1_Price}>
              {Girl_Crush_Look_6_price}
            </div>
            <div className={Section_3.Section3_1_hover_6}>
              <a className={Section_3.Section3_1_hover_6_a} href="#">
                <h6>자세히보기</h6>
              </a>
            </div>
          </Col>
        </Row>
        <Row id="Section3_1_button">
          <Col className={Section_3.Section3_1_button}>
            <a href="/#/GirlCrush_Look">
              <h3>더보기 +</h3>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Section3_1;
