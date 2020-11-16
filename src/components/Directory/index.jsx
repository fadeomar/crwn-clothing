import React from "react";
import "./directory.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from "../MenuItem";

import { directorySelectorSection } from "../../redux/directory/selector";

const Directory = ({ section }) => (
  <div className="directory-menu">
    {section.map(({ title, imageUrl, id, size, linkUrl }) => (
      <MenuItem
        title={title}
        key={id}
        imageUrl={imageUrl}
        size={size}
        linkUrl={linkUrl}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  section: directorySelectorSection,
});

export default connect(mapStateToProps)(Directory);
