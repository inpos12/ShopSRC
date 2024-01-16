import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Section_3 from "../Shoes/Item.module.css";
import Item_img_1 from "../Shoes/item_2_1.jpg";
import Item_img_2 from "../Shoes/item_2_2.jpg";
import Item_img_3 from "../Shoes/item_2_3.gif";
import Item_img_4 from "../Shoes/item_2_4.gif";
import Item_img_5 from "../Shoes/item_2_5.gif";
import Item_img_6 from "../Shoes/item_2_6.jpg";
import Item_img_7 from "../Shoes/item_2_7.jpg";
import Item_img_8 from "../Shoes/item_2_8.jpg";
// http://www.jogunshop.com/shop/shopbrand.html?xcode=083&type=N&mcode=001

// Shoes_size
let Shoes_size_1 = "250mm~280mm";
let Shoes_size_2 = "245mm~280mm";
let Shoes_size_3 = "230mm~280mm";
// Shoes_1_item
let Shoes_1_title = "6cm키높이신발";
let Shoes_1_p = "그리드 배색 키높이 스니커즈";
let Shoes_1_price = "43,000원";
// Shoes_2_item
let Shoes_2_title = "4.5cm키높이 신발";
let Shoes_2_p = "로티 배색 스니커즈";
let Shoes_2_price = "39,000원";
// Shoes_3_item
let Shoes_3_title = "비셀루 스웨이드 스티치 로퍼";
let Shoes_3_price = "52,000원";
// Shoes_4_item
let Shoes_4_title = "하이키 소가죽 독일군 스니커즈";
let Shoes_4_price = "129,000원";
// Shoes_5_item
let Shoes_5_title = "런데이 2type 화이트 스니커즈";
let Shoes_5_price = "34,000원";
// Shoes_6_item
let Shoes_6_title = "알리드 사각코 워커";
let Shoes_6_price = "75,000원";
//
let Shoes_7_title = "스티치 라인업 슬립온";

let Shoes_7_price = "34,000원";
//
let Shoes_8_title = "제이콥 베이직 로퍼";

let Shoes_8_price = "45,000원";
//
let Shoes_9_title = "6cm키높이신발";
let Shoes_9_p = "그리드 배색 키높이 스니커즈";
let Shoes_9_price = "52,000원";
//
let Shoes_10_title = "4.5cm키높이신발";
let Shoes_10_p = "로티 배색 스니커즈";
let Shoes_10_price = "39,000원";
//
let Shoes_11_title = "비셀루 스웨이드 스티치 로퍼";

let Shoes_11_price = "52,000원";
//
let Shoes_12_title = "하이키 소가죽 독일군 스니커즈";

let Shoes_12_price = "129,000원";

const Item = () => {
  return (
    <>
      <Container id="Item_Container">
        <Row id="Shoes_row">
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Shoes_col"
            className={Section_3.Shoes_col_1}
          >
            <a href="/Shoes/1">
              <img src={Item_img_1} className={Section_3.Shoes_img}></img>
            </a>
            <div className={Section_3.Shoes_title}>{Shoes_1_title}</div>
            <div className={Section_3.Shoes_p}>
              {Shoes_1_p}
              <br />
              {Shoes_size_1}
            </div>
            <div className={Section_3.Shoes_Price}>{Shoes_1_price}</div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Shoes_col"
            className={Section_3.Shoes_col_2}
          >
            <a href="/Shoes/2">
              <img src={Item_img_2} className={Section_3.Shoes_img}></img>
            </a>
            <div className={Section_3.Shoes_title}>{Shoes_2_title}</div>
            <div className={Section_3.Shoes_p}>
              {Shoes_2_p} <br />
              {Shoes_size_1}
            </div>
            <div className={Section_3.Shoes_Price}>{Shoes_2_price}</div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Shoes_col"
            className={Section_3.Shoes_col_3}
          >
            <a href="/Shoes/3">
              <img src={Item_img_3} className={Section_3.Shoes_img}></img>
            </a>
            <div className={Section_3.Shoes_title}>{Shoes_3_title}</div>
            <div className={Section_3.Shoes_p}>
              &nbsp;
              <br />
              {Shoes_size_1}
            </div>
            <div className={Section_3.Shoes_Price}>{Shoes_3_price}</div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Shoes_col"
            className={Section_3.Shoes_col_4}
          >
            <a href="/Shoes/4">
              <img src={Item_img_4} className={Section_3.Shoes_img}></img>
            </a>
            <div className={Section_3.Shoes_title}>{Shoes_4_title}</div>
            <div className={Section_3.Shoes_p}>
              &nbsp;
              <br />
              {Shoes_size_2}
            </div>
            <div className={Section_3.Shoes_Price}>{Shoes_4_price}</div>
          </Col>
        </Row>
        <Row id="Shoes_row">
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Shoes_col"
            className={Section_3.Shoes_col_1}
          >
            <a href="/Shoes/5">
              <img src={Item_img_5} className={Section_3.Shoes_img}></img>
            </a>
            <div className={Section_3.Shoes_title}>{Shoes_5_title}</div>
            <div className={Section_3.Shoes_p}>
              &nbsp;
              <br />
              {Shoes_size_3}
            </div>
            <div className={Section_3.Shoes_Price}>{Shoes_5_price}</div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Shoes_col"
            className={Section_3.Shoes_col_2}
          >
            <a href="/Shoes/6">
              <img src={Item_img_6} className={Section_3.Shoes_img}></img>
            </a>
            <div className={Section_3.Shoes_title}>{Shoes_6_title}</div>
            <div className={Section_3.Shoes_p}>
              &nbsp;
              <br />
              {Shoes_size_1}
            </div>
            <div className={Section_3.Shoes_Price}>{Shoes_6_price}</div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Shoes_col"
            className={Section_3.Shoes_col_3}
          >
            <a href="/Shoes/7">
              <img src={Item_img_7} className={Section_3.Shoes_img}></img>
            </a>
            <div className={Section_3.Shoes_title}>{Shoes_7_title}</div>
            <div className={Section_3.Shoes_p}>
              <br />
              {Shoes_size_1}
            </div>
            <div className={Section_3.Shoes_Price}>{Shoes_7_price}</div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Shoes_col"
            className={Section_3.Shoes_col_4}
          >
            <a href="/Shoes/8">
              <img src={Item_img_8} className={Section_3.Shoes_img}></img>
            </a>
            <div className={Section_3.Shoes_title}>{Shoes_8_title}</div>
            <div className={Section_3.Shoes_p}>
              <br />
              {Shoes_size_2}
            </div>
            <div className={Section_3.Shoes_Price}>{Shoes_8_price}</div>
          </Col>
        </Row>
        <Row id="Shoes_row">
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Shoes_col"
            className={Section_3.Shoes_col_1}
          >
            <a href="/Shoes/9">
              <img src={Item_img_1} className={Section_3.Shoes_img}></img>
            </a>
            <div className={Section_3.Shoes_title}>{Shoes_9_title}</div>
            <div className={Section_3.Shoes_p}>
              {Shoes_9_p} <br />
              {Shoes_size_1}
            </div>
            <div className={Section_3.Shoes_Price}>{Shoes_9_price}</div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Shoes_col"
            className={Section_3.Shoes_col_2}
          >
            <a href="/Shoes/10">
              <img src={Item_img_2} className={Section_3.Shoes_img}></img>
            </a>
            <div className={Section_3.Shoes_title}>{Shoes_10_title}</div>
            <div className={Section_3.Shoes_p}>
              {Shoes_10_p} <br />
              {Shoes_size_1}
            </div>
            <div className={Section_3.Shoes_Price}>{Shoes_10_price}</div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Shoes_col"
            className={Section_3.Shoes_col_3}
          >
            <a href="/Shoes/11">
              <img src={Item_img_3} className={Section_3.Shoes_img}></img>
            </a>
            <div className={Section_3.Shoes_title}>{Shoes_11_title}</div>
            <div className={Section_3.Shoes_p}>
              <br />
              {Shoes_size_1}
            </div>
            <div className={Section_3.Shoes_Price}>{Shoes_11_price}</div>
          </Col>
          <Col
            lg={3}
            md={5}
            sm={5}
            xs={5}
            id="Shoes_col"
            className={Section_3.Shoes_col_4}
          >
            <a href="/Shoes/12">
              <img src={Item_img_4} className={Section_3.Shoes_img}></img>
            </a>
            <div className={Section_3.Shoes_title}>{Shoes_12_title}</div>
            <div className={Section_3.Shoes_p}>
              <br />
              {Shoes_size_2}
            </div>
            <div className={Section_3.Shoes_Price}>{Shoes_12_price}</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Item;
