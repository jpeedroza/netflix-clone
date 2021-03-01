import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HeadingPage from "./components/Home/HeadingPage";
import Products from "./components/Home/Products";
import Accordion from "./components/Home/Accordion";
import FooterContent from "./components/Home/FooterContent";
import FooterContentLogin from "./components/Login/FooterContent";
import logo from "./assets/img/logo.png";
import "./assets/css/index.css";

/**
 *
 */
function App() {
  return (
    <>
      {/* <Home /> */}
      <Login />
      {/* <Browse/> */}
    </>
  );
}

function Home() {
  return (
    <>
      <HeadingPage logo={logo} />
      <Products />
      <section className="flex flex-col place-items-center bg-black">
        <Accordion />
      </section>
      <FooterContent />
    </>
  );
}

function Login() {
  return (
    <>
      <FooterContentLogin />
    </>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
