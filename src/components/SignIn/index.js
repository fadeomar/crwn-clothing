/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import FormInput from "../FormInput";
import Button from "../Button";

import { signInWithGoogle } from "../../utils/firebase";
import "./style.scss";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            id="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            id="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="Password"
          />

          <Button type="submit" value="submit Form">
            {" "}
            Sign In
          </Button>
          <Button onClick={signInWithGoogle}> Sign In with google</Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
