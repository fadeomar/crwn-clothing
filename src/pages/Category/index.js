import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/CollectionItem";
import { selectCollection } from "../../redux/shop/selector";
import "./style.scss";

const Category = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="gategory">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(Category);
// export default connect(null)(Category);
