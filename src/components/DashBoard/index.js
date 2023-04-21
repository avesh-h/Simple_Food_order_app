import React from "react";
import Carts from "../Cart/Carts";
import Products from "../Product/Products";
import { useDispatch, useSelector } from "react-redux";

const DashBoard = () => {
  const showCart = useSelector((state) => {
    return state.ui.cartVisible;
  });
  return (
    <div>
      {showCart && <Carts />}
      <Products />
    </div>
  );
};

export default DashBoard;
