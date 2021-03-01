import React from "react";
import ReactDOM from "react-dom";
import logo from "./assets/img/logo.png";
import "./assets/css/index.css";
import HeadingPage from "./components/HeadingPage";
import Products from "./components/Products";
import Accordion from "./components/Accordion";
import FooterContent from "./components/FooterContent";

function App() {
  return (
    <>
      <HeadingPage logo={logo} />
      <Products />
      <div className="flex flex-col place-items-center bg-black">
        <Accordion />
      </div>
      <FooterContent />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
