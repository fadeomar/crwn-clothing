import React from "react";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/Signup";

import "./style.scss";

const Login = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default Login;
