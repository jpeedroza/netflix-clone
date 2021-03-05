/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";

export default function FooterContent() {
  return (
    <footer className="flex items-center justify-center flex-col bg-black text-gray-300 pb-10">
      <h3 className="my-8">
        Questions? Call
        <strong className="hover:underline"> 0800-761-4632</strong>
      </h3>
      <nav className="flex">
        <ul>
          <LinkFooter content="FAQ" />
          <LinkFooter content="Help Center" />
          <LinkFooter content="Account" />
          <LinkFooter content="Media Center" />
          <LinkFooter content="Netflix Originals" />
        </ul>
        <ul>
          <LinkFooter content="Investor Relations" />
          <LinkFooter content="Jobs" />
          <LinkFooter content="Redeem Gift Cards" />
          <LinkFooter content="Buy Gift Cards" />
        </ul>
        <ul>
          <LinkFooter content="Ways to Watch" />
          <LinkFooter content="Terms of Use" />
          <LinkFooter content="Privacy" />
          <LinkFooter content="Cookie Preferences" />
        </ul>
        <ul>
          <LinkFooter content="Corporate Information" />
          <LinkFooter content="Contact Us" />
          <LinkFooter content="Speed Test" />
          <LinkFooter content="Legal Notices" />
        </ul>
      </nav>
    </footer>
  );
}

function LinkFooter({ content }) {
  return (
    <li className="mr-24">
      <a href="#" className="hover:underline">
        {content}
      </a>
    </li>
  );
}
LinkFooter.propTypes = {
  content: PropTypes.string,
};
