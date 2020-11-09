/* eslint-disable no-shadow */
import React from "react";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/casrt/actions";
import { ReactComponent as Icon } from "../../assets/11.2 shopping-bag.svg.svg";

import "./style.scss";

const CartIcon = ({ toggleCartHidden }) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div className="cart-icon" onClick={toggleCartHidden}>
    <Icon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
