import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HeadingPage from "./components/Home/HeadingPage";
import Products from "./components/Home/Products";
import Accordion from "./components/Home/Accordion";
import FooterContent from "./components/Home/FooterContent";

import FooterMain from "./components/Login/FooterMain";
import FooterContentLogin from "./components/Login/FooterContent";

import Accounts from "./components/Browser/Accounts";

import logo from "./assets/img/logo.png";
import "./assets/css/index.css";

function HomePage() {
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

function LoginPage() {
  return (
    <>
      <FooterMain logo={logo} />
      <FooterContentLogin />
    </>
  );
}

function BrowserPage() {
  return (
    <>
      <Accounts logo={logo} />
    </>
  );
}

ReactDOM.render(
  <Router>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/browser" component={BrowserPage} />
  </Router>,
  document.getElementById("root")
);
