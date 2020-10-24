import React from "react";

import "./style.scss";

const Button = ({ children, ...rest }) => (
  <button type="button" className="custom-button" {...rest}>
    {children}
  </button>
);

export default Button;
