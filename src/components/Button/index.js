import React from "react";

import "./style.scss";

const Button = ({ children, isGoogleSignIn, ...rest }) => (
  <button
    type="button"
    className={`${isGoogleSignIn ? `google-sgin-in` : ""} custom-button`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
