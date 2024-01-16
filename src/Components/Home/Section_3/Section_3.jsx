import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Item_1 from "../Section_3/item_2_1.jpg"; //  Shoes item img_1
import Item_2 from "../Section_3/item_2_2.jpg"; //  Shoes item img_2
import Item_3 from "../Section_3/item_2_3.gif"; //  Shoes item img_3
import Item_4 from "../Section_3/item_2_4.gif"; //  Shoes item img_4
import Item_5 from "../Section_3/item_2_5.gif"; //  Shoes item img_5
import Item_6 from "../Section_3/item_2_6.gif"; //  Shoes item img_6
import Section_3 from "../Section_3/Section_3.module.css";
// Shose_size
let Shose_size_1 = "250mm~280mm";
let Shose_size_2 = "245mm~280mm";
let Shose_size_3 = "230mm~280mm";
// Shose_1_item
let Shose_1_title = "6cm키높이신발";
let Shose_1_p = "그리드 배색 키높이 스니커즈";
let Shose_1_price = "43,000원";
// Shose_2_item
let Shose_2_title = "4.5cm키높이 신발";
let Shose_2_p = "로티 배색 스니커즈";
let Shose_2_price = "39,000원";
// Shose_3_item
let Shose_3_title = "비셀루 스웨이드 스티치 로퍼";
let Shose_3_price = "52,000원";
// Shose_4_item
let Shose_4_title = "하이키 소가죽 독일군 스니커즈";
let Shose_4_price = "129,000원";
// Shose_5_item
let Shose_5_title = "런데이 2type 화이트 스니커즈";
let Shose_5_price = "34,000원";
// Shose_6_item
let Shose_6_title = "알리드 사각코 워커";
let Shose_6_price = "75,000원";

const Section3 = () => {
  return (
    <div id="Section3_container">
      <Container>
        <Row id="Section3_title_row">
          <div className={Section_3.Section3_hr}></div>
          <h1 className={Section_3.Section3_perfume}>SHOES</h1>
          <div className={Section_3.Section3_hr}></div>
        </Row>
        <Row id="Section3_row">
          <Col
            lg={2}
            md={3}
            sm={3}
            xs={5}
            id="Section3_col"
            className={Section_3.Section3_col_1}
          >
            <img src={Item_1} className={Section_3.Section3_img}></img>
            <div className={Section_3.Section3_title}>{Shose_1_title}</div>
            <div className={Section_3.Section3_p}>
              {Shose_1_p}
              <br />
              {Shose_size_1}
            </div>
            <div className={Section_3.Section3_Price}>{Shose_1_price}</div>
            <div className={Section_3.Section3_hover_1}>
              <a className={Section_3.Section3_hover_1_a} href="#">
                <h6>자세히보기</h6>
              </a>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={3}
            xs={5}
            id="Section3_col"
            className={Section_3.Section3_col_2}
          >
            <img src={Item_2} className={Section_3.Section3_img}></img>
            <div className={Section_3.Section3_title}>{Shose_2_title}</div>
            <div className={Section_3.Section3_p}>
              {Shose_2_p} <br />
              {Shose_size_1}
            </div>
            <div className={Section_3.Section3_Price}>{Shose_2_price}</div>
            <div className={Section_3.Section3_hover_2}>
              <a className={Section_3.Section3_hover_2_a} href="#">
                <h6>자세히보기</h6>
              </a>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={3}
            xs={5}
            id="Section3_col"
            className={Section_3.Section3_col_3}
          >
            <img src={Item_3} className={Section_3.Section3_img}></img>
            <div className={Section_3.Section3_title}>{Shose_3_title}</div>
            <div className={Section_3.Section3_p}>
              &nbsp;
              <br />
              {Shose_size_1}
            </div>
            <div className={Section_3.Section3_Price}>{Shose_3_price}</div>
            <div className={Section_3.Section3_hover_3}>
              <a className={Section_3.Section3_hover_3_a} href="#">
                <h6>자세히보기</h6>
              </a>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={3}
            xs={5}
            id="Section3_col"
            className={Section_3.Section3_col_4}
          >
            <img src={Item_4} className={Section_3.Section3_img}></img>
            <div className={Section_3.Section3_title}>{Shose_4_title}</div>
            <div className={Section_3.Section3_p}>
              &nbsp;
              <br />
              {Shose_size_2}
            </div>
            <div className={Section_3.Section3_Price}>{Shose_4_price}</div>
            <div className={Section_3.Section3_hover_4}>
              <a className={Section_3.Section3_hover_4_a} href="#">
                <h6>자세히보기</h6>
              </a>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={3}
            xs={5}
            id="Section3_col"
            className={Section_3.Section3_col_5}
          >
            <img src={Item_5} className={Section_3.Section3_img}></img>
            <div className={Section_3.Section3_title}>{Shose_5_title}</div>
            <div className={Section_3.Section3_p}>
              &nbsp;
              <br />
              {Shose_size_3}
            </div>
            <div className={Section_3.Section3_Price}>{Shose_5_price}</div>
            <div className={Section_3.Section3_hover_5}>
              <a className={Section_3.Section3_hover_5_a} href="#">
                <h6>자세히보기</h6>
              </a>
            </div>
          </Col>
          <Col
            lg={2}
            md={3}
            sm={3}
            xs={5}
            id="Section3_col"
            className={Section_3.Section3_col_6}
          >
            <img src={Item_6} className={Section_3.Section3_img}></img>
            <div className={Section_3.Section3_title}>{Shose_6_title}</div>
            <div className={Section_3.Section3_p}>
              &nbsp;
              <br />
              {Shose_size_1}
            </div>
            <div className={Section_3.Section3_Price}>{Shose_6_price}</div>
            <div className={Section_3.Section3_hover_6}>
              <a className={Section_3.Section3_hover_6_a} href="#">
                <h6>자세히보기</h6>
              </a>
            </div>
          </Col>
        </Row>
        <Row id="Section3_button">
          <Col className={Section_3.Section3_button}>
            <a href="/#/Shoes/">
              <h3>더보기 +</h3>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Section3;
