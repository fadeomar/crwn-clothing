/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import FormInput from "../FormInput";
import Button from "../Button";

import { auth, signInWithGoogle } from "../../utils/firebase";
import "./style.scss";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
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
            onChange={this.handleChange}
            required
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
            label="Password"
          />
          <div className="buttons">
            <Button type="submit" value="submit Form">
              {" "}
              Sign In
            </Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              {" "}
              Sign In with google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
