import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/casrt/cartSelector";

import Button from "../Button";
import CartItem from "../cartItem";

import "./style.scss";

const Cart = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <Button>Go To Checkout</Button>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(Cart);
