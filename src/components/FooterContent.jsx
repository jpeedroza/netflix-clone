/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

function FooterContent(props) {
  return (
    <>
      <div className="flex items-center justify-center flex-col bg-black text-gray-300 pb-10">
        <h3 className="my-8">
          Questions? Call
          <strong className="hover:underline">0800-761-4632</strong>
        </h3>
        <div className="flex">
          <ul>
            <li className="mr-24">
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li className="mr-24">
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li className="mr-24">
              <a href="#" className="hover:underline">
                Account
              </a>
            </li>
            <li className="mr-24">
              <a href="#" className="hover:underline">
                Media Center
              </a>
            </li>
            <li className="mr-24">
              <a href="#" className="hover:underline">
                Netflix Originals
              </a>
            </li>
          </ul>
          <ul>
            <li className="mr-24">
              <a href="#" className="hover:underline">
                Investor Relations
              </a>
            </li>
            <li className="mr-24">
              <a href="#" className="hover:underline">
                Jobs
              </a>
            </li>
            <li className="mr-24">
              <a href="#" className="hover:underline">
                Redeem Gift Cards
              </a>
            </li>
            <li className="mr-24">
              <a href="#" className="hover:underline">
                Buy Gift Cards
              </a>
            </li>
          </ul>
          <ul>
            <li className="mr-24">
              <a href="#" className="hover:underline">
                Ways to Watch
              </a>
            </li>
            <li className="mr-24">
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </li>
            <li className="mr-24">
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </li>
            <li className="mr-24">
              <a href="#" className="hover:underline">
                Cookie Preferences
              </a>
            </li>
          </ul>
          <ul>
            <li className="mr-24">
              <a href="#" className="hover:underline">
                Corporate Information
              </a>
            </li>
            <li className="mr-24">
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li className="mr-24">
              <a href="#" className="hover:underline">
                Speed Test
              </a>
            </li>
            <li className="mr-24">
              <a href="#" className="hover:underline">
                Legal Notices
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

FooterContent.propTypes = {};

export default FooterContent;
