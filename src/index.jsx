import React from "react";
import ReactDOM from "react-dom";
import logo from "./assets/img/logo.png";
import "./assets/css/index.css";
import HeadingPage from "./components/HeadingPage";

function App() {
  return (
    <>
      <HeadingPage logo={logo} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
