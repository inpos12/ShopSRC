import React from "react";
import Item from "../Item/Shoes/Item";
import { Item_Banner } from "../Item/Shoes/Item.style";
const Shoes = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Item_Banner />
      <Item />
    </div>
  );
};
export default Shoes;
