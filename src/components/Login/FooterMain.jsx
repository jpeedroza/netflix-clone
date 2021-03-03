import { useState } from "react";
import { Link } from "react-router-dom";

export default function FooterMain({ logo }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <header className="flex justify-between px-14 pt-7 items-center pb-10 bg-black">
        <Link to="/">
          <img src={logo} alt="logo" className=" w-44" />
        </Link>
      </header>
      <div className="bg-black flex flex-col justify-center items-center pb-28">
        <main className="flex flex-col w-1/4 justify-center bg-gray-700">
          <form className="flex flex-col justify-center m-14">
            <h2 className="text-4xl font-semibold text-white mb-6">Sign In</h2>
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="rounded p-3 mb-4"
            />
            <input
              type="text"
              placeholder="Password"
              className="rounded p-3 mb-10"
            />
            <Link
              to="/browser"
              className="text-white bg-red-600 p-3 rounded mb-2 cursor-pointer text-center"
            >
              Sign In
            </Link>

            {/* <input
                type="submit"
                value="Sign In"
                className="text-white bg-red-600 p-3 rounded mb-2 cursor-pointer"
                
              /> */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input type="checkbox" className="" />
                <span className="ml-1 text-white">Remember me</span>
              </div>
              <span className="text-white cursor-pointer hover:underline">
                Need Help ?
              </span>
            </div>
          </form>
          <div className="flex flex-col justify-center mx-14">
            <p className="text-gray-300 mb-3">Login with Facebook</p>
            <h3 className="text-sm text-gray-300 mb-3">
              New to Netflix?{" "}
              <span className=" text-gray-300 cursor-pointer hover:underline">
                Sign up now
              </span>
              .
            </h3>
            <p className="text-sm text-gray-300 mb-3">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => setShowInfo(!showInfo)}
              >
                Learn More.
              </span>
            </p>
            {showInfo && (
              <p className="text-sm text-gray-300 mb-5">
                The information collected by Google reCAPTCHA is subject to the
                Google{" "}
                <span className="text-blue-600 cursor-pointer hover:underline">
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span className="text-blue-600 cursor-pointer hover:underline">
                  Terms of Service
                </span>
                , and is used for providing, maintaining, and improving the
                reCAPTCHA service and for general security purposes (it is not
                used for personalized advertising by Google).
              </p>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
