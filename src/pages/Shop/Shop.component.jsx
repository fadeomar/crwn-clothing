import React from "react";
import SHOP_DATA from "./collection";

import PreviewCollection from "../../components/PreviewCollection";

class Shop extends React.Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...item }) => (
          <PreviewCollection key={id} {...item} />
        ))}
      </div>
    );
  }
}

export default Shop;
