import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";

import { ReactComponent as Logo } from "./crown.svg";

import "./style.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contnet">
        contnet
      </Link>
      {currentUser ? (
        <div
          className="option"
          role="presentation"
          onClick={() => auth.signOut()}
        >
          Sign Out
        </div>
      ) : (
        <Link className="option" to="/login">
          Sign In
        </Link>
      )}
    </div>
  </div>
);

export default Header;
