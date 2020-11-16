import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selctCartTotal,
} from "../../redux/casrt/cartSelector";

import CheckoutItem from "../../components/CheckoutItem";

import "./style.scss";
import StripeCheckoutButton from "../../components/StripeButton";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quentity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} item={item} />
    ))}

    <div className="total">
      <span>TOTAL: {total} </span>
    </div>
    <div className="test-warning">
      *please use the following test credit card for payment*
      <br />
      42424242424242 - exp: 01/21 - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selctCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
