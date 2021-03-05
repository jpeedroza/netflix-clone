/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";

export default function FooterContentLogin() {
  return (
    <footer className="flex items-center justify-center flex-col bg-black text-gray-300 pb-9">
      <h3 className="my-8">
        Questions? Call
        <strong className="hover:underline"> 0800-761-4632</strong>
      </h3>
      <nav className="flex">
        <ul>
          <LinkFooter content="FAQ" />
          <LinkFooter content="Cookie Preferences" />
        </ul>
        <ul>
          <LinkFooter content="Help Center" />
          <LinkFooter content="Corporate Information" />
        </ul>
        <ul>
          <LinkFooter content="Terms of Use" />
        </ul>
        <ul>
          <LinkFooter content="Privacy" />
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
