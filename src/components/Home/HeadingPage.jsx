/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import ContentEmail from "./ContentEmail";
import "../../assets/css/contentEmail.css";

function HeadingPage({ logo }) {
  return (
    <header className="bg-black border-b-8 borderColorGray pb-48">
      <header className="flex justify-between px-14 pt-7 items-center mb-48">
        <img src={logo} alt="logo" className=" w-48" />
        <button className="bg-red-600 text-white rounded-md p-2">
          <Link to="/login">Sign in</Link>
        </button>
      </header>
      <main className="flex justify-center items-center flex-col">
        <h2 className="text-white text-7xl font-semibold text-center mb-5 w-5/12 leading-tight">
          Unlimited movies, TV shows, and more.
        </h2>
        <h3 className="text-white text-3xl tracking-wide mb-5">
          Watch anywhere. Cancel anytime.
        </h3>
        <ContentEmail />
      </main>
    </header>
  );
}

HeadingPage.propTypes = {
  logo: PropTypes.node,
};

export default HeadingPage;
