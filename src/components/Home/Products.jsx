import React from "react";
import PropTypes from "prop-types";
import tv from "../../assets/img/tv.png";
import mobile from "../../assets/img/mobile-0819.jpg";
import devices from "../../assets/img/device-pile.png";
import "../../assets/css/contentEmail.css";

function Products() {
  return (
    <main>
      <ul className="bg-black">
        <li className="flex flex-row items-center justify-between px-52 border-b-8 borderColorGray">
          <div className="mx-24">
            <h1 className="text-7xl font-medium text-white mb-3">
              Enjoy on your TV.
            </h1>
            <h2 className="text-3xl font-normal text-white mt-4">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </h2>
          </div>
          <img src={tv} alt="Teve" />
        </li>
        <li className="flex flex-row-reverse items-center justify-between px-52 border-b-8 borderColorGray">
          <div className="mx-10">
            <h1 className="text-7xl font-medium text-white mb-3">
              Download your shows to watch offline.
            </h1>
            <h2 className="text-3xl font-normal text-white mt-4">
              Save your favorites easily and always have something to watch.
            </h2>
          </div>
          <img src={mobile} alt="Celular" />
        </li>
        <li className="flex flex-row items-center justify-between px-52 border-b-8 borderColorGray">
          <div className="mx-16">
            <h1 className="text-7xl font-medium text-white mb-3">
              Watch everywhere.
            </h1>
            <h2 className="text-3xl font-normal text-white mt-4">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </h2>
          </div>
          <img src={devices} alt="Aparelhos" />
        </li>
      </ul>
    </main>
  );
}

Products.propTypes = {};

export default Products;
