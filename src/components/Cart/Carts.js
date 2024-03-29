import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import "../Cart/Carts.css";

function Carts() {
  const cartItems = useSelector((state) => {
    return state.cart.items;
  });

  const cartShown = cartItems.map((item) => {
    console.log(item);
    return (
      <CartItem
        items={{
          title: item.title,
          id: item.id,
          quantity: item.quantity,
          image: item.image,
        }}
      />
    );
  });

  // console.log(`empty ${cartShown}`)

  return (
    <div className="main-cart">
      {cartShown.length == 0 && <h3>No Order yet!</h3>}
      {/* <CartItem 
      items = {{title:'dummy_meal',id : '233'}}
      /> */}
      {cartShown}
    </div>
  );
}

export default Carts;
