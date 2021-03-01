import React from "react";
import PropTypes from "prop-types";
import ContentEmail from "./ContentEmail";

function HeadingPage({ logo }) {
  return (
    <div className="bg-black">
      <header className="flex justify-between px-14 pt-7 items-center mb-48">
        <img src={logo} alt="logo" className=" w-48" />
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <button className="bg-red-600 text-white rounded-md p-2">
            Sign In
          </button>
        </a>
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
    </div>
  );
}

HeadingPage.propTypes = {
  logo: PropTypes.node,
};

export default HeadingPage;
