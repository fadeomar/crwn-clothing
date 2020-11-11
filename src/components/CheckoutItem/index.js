import React from "react";
import { connect } from "react-redux";
import {
  removeItemAction,
  addItemAction,
  decreaseItemAction,
} from "../../redux/casrt/actions";

import "./style.scss";

const CheckoutItem = ({ item, dispatch }) => {
  const { imageUrl, quantity, price, name } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          role="button"
          tabIndex="0"
          className="arrow"
          onClick={() => dispatch(decreaseItemAction(item))}
        >
          {" "}
          &#10094;
        </div>
        <span className="value"> {quantity} </span>
        <div
          className="arrow"
          role="button"
          tabIndex="0"
          onClick={() => dispatch(addItemAction(item))}
        >
          {" "}
          &#10095;
        </div>
      </span>
      <span className="price">$ {price}</span>
      <div
        role="button"
        tabIndex="0"
        className="remove-button"
        onClick={() => dispatch(removeItemAction(item))}
      >
        {" "}
        &#10005;
      </div>
    </div>
  );
};

export default connect()(CheckoutItem);
