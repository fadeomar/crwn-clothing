/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";

import "./style.scss";

const FormInput = ({ handlechange, label, ...rest }) => (
  <div className="group">
    <input className="form-input" onChange={handlechange} {...rest} />
    {label ? (
      <label
        className={`${rest.value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
