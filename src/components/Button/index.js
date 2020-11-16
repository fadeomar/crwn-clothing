import React from "react";

import "./style.scss";

const Button = ({ children, isGoogleSignIn, inverted, ...rest }) => (
  <button
    type="button"
    className={`${inverted ? `inverted` : ""} ${
      isGoogleSignIn ? `google-sgin-in` : ""
    } custom-button`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
