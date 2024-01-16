import React from "react";
import { Item_Banner } from "../Item/GirlCrush/Item.style";
import "../Style/interval.css";
import GirlCrush from "../Item/GirlCrush/GirlCrush";
const GirlCrush_Look = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Item_Banner />
      <GirlCrush />
    </div>
  );
};
export default GirlCrush_Look;
