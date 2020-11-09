import React from "react";

import Button from "../Button";

import "./style.scss";

const Cart = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <Button>Go To Checkout</Button>
  </div>
);

export default Cart;
