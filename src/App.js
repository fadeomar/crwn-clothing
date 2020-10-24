import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage.component";
import Shop from "./pages/Shop/Shop.component";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
