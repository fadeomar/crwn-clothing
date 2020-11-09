import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../utils/firebase";

import { ReactComponent as Logo } from "./crown.svg";
import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";

import "./style.scss";

const Header = ({ currentUser, hidden }) => (
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
      <CartIcon />
    </div>
    {!hidden && <CartDropdown />}
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);
