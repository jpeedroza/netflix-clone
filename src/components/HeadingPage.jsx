import React from "react";
import PropTypes from "prop-types";

function HeadingPage({ logo }) {
  return (
    <div className="bg-black border-b-8 border-gray-300">
      <header className="flex justify-between px-14 pt-7 items-center mb-48">
        <img src={logo} alt="logo" className=" w-48" />
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <button className="bg-red-600 text-white rounded-md p-2">
            Sign In
          </button>
        </a>
      </header>
      <main className="flex justify-center items-center flex-col mb-48">
        <h2 className="text-white text-7xl font-semibold text-center mb-5 w-5/12 leading-tight">
          Unlimited movies, TV shows, and more.
        </h2>
        <h3 className="text-white text-3xl tracking-wide mb-5">
          Watch anywhere. Cancel anytime.
        </h3>
        <h4 className="text-white mb-6 text-xl font-light">
          Ready to watch? Enter your email to create or restart your membership.
        </h4>
        <div className="w-full flex justify-center items-center">
          <input
            className="w-4/12 h-16 p-3"
            type="email"
            placeholder="Email address"
          />
          <button className="h-16 px-6 bg-red-600 text-white" type="submit">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}

HeadingPage.propTypes = {
  logo: PropTypes.any,
};

export default HeadingPage;
