import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./assets/img/logo.png";
import "./assets/css/index.css";
import HeadingPage from "./components/HeadingPage";
import Products from "./components/Products";

function App() {
  return (
    <>
      <HeadingPage logo={logo} />
      <Products />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
