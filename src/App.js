import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage.component";
import Shop from "./pages/Shop/Shop.component";
import Header from "./components/Header";
import Login from "./pages/Login";

import { auth, createUserProfileDoc } from "./utils/firebase";

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unSubscripeFromAuth = null;

  componentDidMount() {
    this.unSubscripeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDoc(user);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unSubscripeFromAuth = null;
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
