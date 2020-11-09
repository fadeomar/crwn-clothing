import React from "react";
import { connect } from "react-redux";
import Button from "../Button";
import { addItemAction } from "../../redux/casrt/actions";

import "./style.scss";

const CollectionItem = ({ id, name, price, imageUrl, addItem, ...rest }) => (
  <div key={id} className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <Button
      inverted
      onClick={() => addItem({ id, name, price, imageUrl, ...rest })}
    >
      Add to cart
    </Button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemAction(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
