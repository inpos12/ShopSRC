import React from "react";
import style from "../Item_page.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img_1 from "./item_1_2.gif";
import down_img from "../arrows_down_40386.png";

const DownButton = () => {
  const AmountList = document.getElementById("Amount_list");

  if (AmountList.style.display === "none" || AmountList.style.display === "") {
    AmountList.style.display = "block";
  } else {
    AmountList.style.display = "none";
  }
};

const Amount1 = () => {
  const Price = document.getElementById("Price");
  const Amount = document.getElementById("Amount");
  const AmountList = document.getElementById("Amount_list");
  AmountList.style.display = "none";
  Amount.innerHTML = "&nbsp;1";
  Price.innerHTML = "88,000원";
};

const Amount2 = () => {
  const Amount = document.getElementById("Amount");
  const Price = document.getElementById("Price");
  const AmountList = document.getElementById("Amount_list");
  AmountList.style.display = "none";
  Amount.innerHTML = "&nbsp;2";
  Price.innerHTML = "176,000원";
};
const Amount3 = () => {
  const Amount = document.getElementById("Amount");
  const Price = document.getElementById("Price");
  const AmountList = document.getElementById("Amount_list");
  AmountList.style.display = "none";
  Amount.innerHTML = "&nbsp;3";
  Price.innerHTML = "264,000원";
};
const Amount4 = () => {
  const Amount = document.getElementById("Amount");
  const Price = document.getElementById("Price");
  const AmountList = document.getElementById("Amount_list");
  AmountList.style.display = "none";
  Amount.innerHTML = "&nbsp;4";
  Price.innerHTML = "352,000원";
};
const Amount5 = () => {
  const Amount = document.getElementById("Amount");
  const Price = document.getElementById("Price");
  const AmountList = document.getElementById("Amount_list");
  AmountList.style.display = "none";
  Amount.innerHTML = "&nbsp;5";
  Price.innerHTML = "440,000원";
};
const Amount6 = () => {
  const Amount = document.getElementById("Amount");
  const Price = document.getElementById("Price");
  const AmountList = document.getElementById("Amount_list");
  AmountList.style.display = "none";
  Amount.innerHTML = "&nbsp;6";
  Price.innerHTML = "528,000원";
};

const Item_2_page = () => {
  return (
    <>
      <Container id="Item_page">
        <Row id="Item_row">
          <Col lg={6} md={6} sm={6} xs={12} id="Item_img">
            <img src={img_1}></img>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12} id="Item_p">
            <div className={style.Item_p_title}>
              <h3>[DAILY MADE]</h3>
              <h3>캘리알파카니트</h3>
            </div>
            <div className={style.Item_p_price}>
              <h2 id="Price">88,000원</h2>
            </div>
            <div className={style.Item_p_color}>
              <p className={style.Item_p_color_1}>
                Color : <p>&nbsp; White</p>
              </p>
              <p> z</p>
            </div>
            <div className={style.Item_hr}></div>
            <div className={style.Item_p_Amount}>
              <p className={style.Item_p_Amount_1}>
                amount : <p id="Amount">&nbsp;1</p>
              </p>

              <img
                onClick={DownButton}
                src={down_img}
                className={style.Down_img}
                id="Down_button"
              ></img>
            </div>
            <div className={style.Item_hr}></div>
            <div className={style.Amount_list} id="Amount_list">
              <p onClick={Amount1} id="Amount_1">
                1
              </p>
              <p onClick={Amount2} id="Amount_2">
                2
              </p>
              <p onClick={Amount3} id="Amount_3">
                3
              </p>
              <p onClick={Amount4} id="Amount_4">
                4
              </p>
              <p onClick={Amount5} id="Amount_5">
                5
              </p>
              <p onClick={Amount6} id="Amount_6">
                6
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

export default Item_2_page;
