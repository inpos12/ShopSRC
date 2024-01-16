import React from "react";
import style from "../Item_page.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img_1 from "./item_2_11.gif";
import down_img from "../arrows_down_40386.png";

const DownButton = () => {
  const SizeList = document.getElementById("Size_list");

  if (SizeList.style.display === "none" || SizeList.style.display === "") {
    SizeList.style.display = "block";
  } else {
    SizeList.style.display = "none";
  }
};

const Size250mm = () => {
  const Size = document.getElementById("Size");
  const SizeList = document.getElementById("Size_list");
  SizeList.style.display = "none";
  Size.innerHTML = "&nbsp;250mm";
};

const Size260mm = () => {
  const Size = document.getElementById("Size");
  const SizeList = document.getElementById("Size_list");
  SizeList.style.display = "none";
  Size.innerHTML = "&nbsp;260mm";
};
const Size265mm = () => {
  const Size = document.getElementById("Size");
  const SizeList = document.getElementById("Size_list");
  SizeList.style.display = "none";
  Size.innerHTML = "&nbsp;265mm";
};
const Size270mm = () => {
  const Size = document.getElementById("Size");
  const SizeList = document.getElementById("Size_list");
  SizeList.style.display = "none";
  Size.innerHTML = "&nbsp;270mm";
};
const Size275mm = () => {
  const Size = document.getElementById("Size");
  const SizeList = document.getElementById("Size_list");
  SizeList.style.display = "none";
  Size.innerHTML = "&nbsp;275mm";
};
const Size280mm = () => {
  const Size = document.getElementById("Size");
  const SizeList = document.getElementById("Size_list");
  SizeList.style.display = "none";
  Size.innerHTML = "&nbsp;280mm";
};
const Item_11_page = () => {
  return (
    <>
      <Container id="Item_page">
        <Row id="Item_row">
          <Col lg={6} md={6} sm={6} xs={12} id="Item_img">
            <img src={img_1}></img>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12} id="Item_p">
            <div className={style.Item_p_title}>
              <h3>비셀루 스웨이드 스티치 로퍼</h3>
            </div>
            <div className={style.Item_p_price}>
              <h2>52,000원</h2>
            </div>
            <div className={style.Item_p_color}>
              <p className={style.Item_p_color_1}>
                Color : <p>&nbsp; White</p>
              </p>
              <p> z</p>
            </div>
            <div className={style.Item_hr}></div>
            <div className={style.Item_p_size}>
              <p className={style.Item_p_size_1}>
                Size : <p id="Size">&nbsp;250mm</p>
              </p>

              <img
                onClick={DownButton}
                src={down_img}
                className={style.Down_img}
                id="Down_button"
              ></img>
            </div>
            <div className={style.Item_hr}></div>
            <div className={style.Size_list} id="Size_list">
              <p onClick={Size250mm} id="Size_250mm">
                250cm
              </p>
              <p onClick={Size260mm} id="Size_260mm">
                260cm
              </p>
              <p onClick={Size265mm} id="Size_265mm">
                265cm
              </p>
              <p onClick={Size270mm} id="Size_270mm">
                270mm
              </p>
              <p onClick={Size275mm} id="Size_275mm">
                275mm
              </p>
              <p onClick={Size280mm} id="Size_280mm">
                280mm
              </p>
            </div>
            <div className={style.Item_buy_button_box}>
              <button className={style.Item_buy_button}>구매하기</button>
              <button className={style.Item_add_button}>장바구니 담기</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Item_11_page;
