import React from "react";
import { connect } from "react-redux";

import Button from "../Button";
import CartItem from "../cartItem";

import "./style.scss";

const Cart = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <Button>Go To Checkout</Button>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems || [],
});

export default connect(mapStateToProps)(Cart);
